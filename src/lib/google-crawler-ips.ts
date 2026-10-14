// Googlebot IP check for the middleware's fake-Googlebot logger.
//
// Google publishes the IP ranges its common crawlers (Googlebot,
// Google-InspectionTool) use. A request whose user agent says "Googlebot"
// but whose IP is outside these ranges is someone impersonating Google — the
// usual disguise of the scrapers that copy pages for spam sites. The list is
// fetched once per warm instance and kept for a day.

const RANGES_URL =
  'https://developers.google.com/static/search/apis/ipranges/googlebot.json'
const TTL_MS = 24 * 60 * 60 * 1000

type Range = { v6: boolean; base: bigint; bits: number }

let ranges: Range[] | null = null
let fetchedAt = 0
let inflight: Promise<Range[] | null> | null = null

function parseIp(ip: string): { v6: boolean; value: bigint } | null {
  const mapped = ip.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/i)
  if (mapped) ip = mapped[1]

  if (ip.includes('.')) {
    const parts = ip.split('.').map(Number)
    if (parts.length !== 4 || parts.some((p) => !Number.isInteger(p) || p < 0 || p > 255)) {
      return null
    }
    return { v6: false, value: parts.reduce((acc, p) => (acc << BigInt(8)) | BigInt(p), BigInt(0)) }
  }

  const halves = ip.split('::')
  if (halves.length > 2) return null
  const head = halves[0] ? halves[0].split(':') : []
  const tail = halves.length === 2 && halves[1] ? halves[1].split(':') : []
  const fill = halves.length === 2 ? 8 - head.length - tail.length : 0
  const groups = [...head, ...Array(fill).fill('0'), ...tail]
  if (groups.length !== 8 || groups.some((g) => !/^[0-9a-f]{1,4}$/i.test(g))) return null
  return {
    v6: true,
    value: groups.reduce((acc, g) => (acc << BigInt(16)) | BigInt(parseInt(g, 16)), BigInt(0)),
  }
}

function parseCidr(cidr: string): Range | null {
  const [addr, bitsStr] = cidr.split('/')
  const ip = parseIp(addr)
  const bits = Number(bitsStr)
  if (!ip || !Number.isInteger(bits)) return null
  return { v6: ip.v6, base: ip.value, bits }
}

function inRange(ip: { v6: boolean; value: bigint }, r: Range): boolean {
  if (ip.v6 !== r.v6) return false
  const shift = BigInt((r.v6 ? 128 : 32) - r.bits)
  return ip.value >> shift === r.base >> shift
}

async function loadRanges(): Promise<Range[] | null> {
  if (ranges && Date.now() - fetchedAt < TTL_MS) return ranges
  if (!inflight) {
    inflight = fetch(RANGES_URL)
      .then((res) => (res.ok ? res.json() : null))
      .then((json: { prefixes?: Array<{ ipv4Prefix?: string; ipv6Prefix?: string }> } | null) => {
        const parsed = (json?.prefixes ?? [])
          .map((p) => parseCidr(p.ipv4Prefix ?? p.ipv6Prefix ?? ''))
          .filter((r): r is Range => r !== null)
        if (parsed.length > 0) {
          ranges = parsed
          fetchedAt = Date.now()
        }
        return ranges
      })
      .catch(() => ranges)
      .finally(() => {
        inflight = null
      })
  }
  return inflight
}

// true = a real Google crawler IP, false = not Google, null = unknown (bad IP
// string or the range list couldn't be loaded). Callers log only on false.
export async function isGoogleCrawlerIp(ip: string): Promise<boolean | null> {
  const parsed = parseIp(ip)
  if (!parsed) return null
  const list = await loadRanges()
  if (!list) return null
  return list.some((r) => inRange(parsed, r))
}
