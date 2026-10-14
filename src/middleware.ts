import { NextResponse } from 'next/server'
import type { NextRequest, NextFetchEvent } from 'next/server'
import { isGoogleCrawlerIp } from '@/lib/google-crawler-ips'

// AI-bot fetch logger — permanent, queryable record of which AI engines read
// which pages. Rows land in the shared click-tracking Sheet with an `ai-bot:`
// label prefix (Sheet only, no Discord — volume would drown the channel).
// Classic search crawlers (bingbot, googlebot, …) are deliberately NOT logged;
// BWT/GSC already cover them (only Googlebot impostors are — see logSuspect
// below). Response is never blocked: logging rides
// event.waitUntil after NextResponse.next().

const AI_BOTS: Array<[RegExp, string]> = [
  [/ChatGPT-User/i, 'chatgpt-user'],
  [/OAI-SearchBot/i, 'oai-searchbot'],
  [/GPTBot/i, 'gptbot'],
  [/ChatGPT/i, 'chatgpt-other'],
  [/Claude-User/i, 'claude-user'],
  [/Claude-SearchBot/i, 'claude-searchbot'],
  [/ClaudeBot|anthropic-ai/i, 'claudebot'],
  [/Perplexity-User/i, 'perplexity-user'],
  [/PerplexityBot/i, 'perplexitybot'],
  [/DuckAssistBot/i, 'duckassistbot'],
  [/Amazonbot/i, 'amazonbot'],
  [/meta-externalagent|meta-webindexer/i, 'meta-ai'],
  [/Bytespider/i, 'bytespider'],
  [/Google-Extended/i, 'google-extended'],
  [/cohere-ai/i, 'cohere'],
  [/MistralAI/i, 'mistral'],
  [/YouBot/i, 'youbot'],
  [/Applebot-Extended/i, 'applebot-extended'],
]

function sheetTimestamp(): string {
  return (
    new Date().toLocaleString('en-US', {
      timeZone: 'America/Chicago',
      dateStyle: 'short',
      timeStyle: 'medium',
    }) + ' CST'
  )
}

function clientIp(req: NextRequest): string {
  return req.ip ?? req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? ''
}

// Scraper / mirror logger. Two signals that someone is copying the site for a
// spam page (747live.bet has hijacked our Google canonical twice):
//   suspect:fake-googlebot — UA says Googlebot, IP is not Google's
//   mirror:<host>          — the layout's anti-mirror guard bounced a visitor
//                            off <host>, which was rendering our HTML
// Unlike the AI-bot rows, these store the raw IP in the ipHash column: the
// point is to copy it into a Vercel Firewall block rule. Throttled per warm
// instance so a flood can't drown the Sheet.
const SUSPECT_WINDOW_MS = 60_000
const MAX_SUSPECT_ROWS_PER_WINDOW = 20
const SUSPECT_DEDUP_MS = 10 * 60_000
const recentSuspects = new Map<string, number>()
let suspectWindowStart = 0
let suspectRows = 0

function shouldLogSuspect(key: string, now: number): boolean {
  const last = recentSuspects.get(key)
  if (last !== undefined && now - last < SUSPECT_DEDUP_MS) return false
  if (now - suspectWindowStart > SUSPECT_WINDOW_MS) {
    suspectWindowStart = now
    suspectRows = 0
  }
  if (++suspectRows > MAX_SUSPECT_ROWS_PER_WINDOW) return false
  recentSuspects.set(key, now)
  if (recentSuspects.size > 1000) {
    recentSuspects.forEach((t, k) => {
      if (now - t > SUSPECT_DEDUP_MS) recentSuspects.delete(k)
    })
  }
  return true
}

function logSuspect(req: NextRequest, sheetUrl: string, label: string, ip: string) {
  if (!shouldLogSuspect(`${label}|${ip}`, Date.now())) return Promise.resolve()
  return fetch(sheetUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      timestamp: sheetTimestamp(),
      site: (req.headers.get('host') ?? 'unknown').replace(/^www\./, ''),
      label,
      referralCode: '-',
      page: req.nextUrl.pathname,
      referrer: (req.headers.get('referer') ?? '').slice(0, 300),
      ipHash: ip || '-',
      userAgent: (req.headers.get('user-agent') ?? '').slice(0, 200),
    }),
  }).catch(() => {})
}

export function middleware(req: NextRequest, event: NextFetchEvent) {
  const ua = req.headers.get('user-agent') ?? ''
  const hit = AI_BOTS.find(([re]) => re.test(ua))
  const sheetUrl = process.env.CLICK_TRACKER_SHEET_URL

  // Arrivals from the anti-mirror guard: log the copying host, then redirect
  // to the clean URL so the `mirror` param never lingers or gets indexed.
  const mirror = req.nextUrl.searchParams.get('mirror')
  if (mirror !== null) {
    if (sheetUrl && /^[a-z0-9.-]{1,253}$/i.test(mirror)) {
      event.waitUntil(logSuspect(req, sheetUrl, `mirror:${mirror.toLowerCase()}`, clientIp(req)))
    }
    const clean = req.nextUrl.clone()
    clean.searchParams.delete('mirror')
    return NextResponse.redirect(clean, 307)
  }

  if (sheetUrl && /Googlebot/i.test(ua)) {
    const ip = clientIp(req)
    event.waitUntil(
      isGoogleCrawlerIp(ip).then((isGoogle) =>
        isGoogle === false ? logSuspect(req, sheetUrl, 'suspect:fake-googlebot', ip) : undefined
      )
    )
  }

  if (hit && sheetUrl) {
    event.waitUntil(
      fetch(sheetUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: sheetTimestamp(),
          site: (req.headers.get('host') ?? 'unknown').replace(/^www\./, ''),
          label: `ai-bot:${hit[1]}`,
          referralCode: '-',
          page: req.nextUrl.pathname,
          ipHash: '-',
          userAgent: ua.slice(0, 200),
        }),
      }).catch(() => {})
    )
  }

  return NextResponse.next()
}

// Pages, llms.txt, robots.txt, and sitemaps — the fetches that mean an AI is
// reading content. Static assets and API routes are excluded to keep
// middleware invocations (billed) near zero for human traffic.
export const config = {
  matcher: [
    '/((?!_next/|api/|.*\\.(?:jpg|jpeg|png|gif|svg|ico|webp|avif|css|js|map|woff2?)$).*)',
  ],
}
