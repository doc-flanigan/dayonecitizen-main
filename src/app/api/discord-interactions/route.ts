import { NextRequest, NextResponse } from 'next/server'
import { createPublicKey, verify as edVerify } from 'crypto'
import { searchClaims, type Claim } from '@/lib/claim-search'
import claimsData from '@/data/claims.json'

// Discord Interactions endpoint for the /factcheck slash command.
// Serverless: Discord POSTs signed interactions here (no gateway bot).
// Search hits reply publicly with sourced verdicts; a miss offers an
// ephemeral "Submit for fact-checking" button that forwards the query to
// the same Discord intake webhook the /fact-check web form uses.
// Zero LLM/API-token usage — pure string search over bundled claims.json.

const PAGE_URL = 'https://dayonecitizen.com/fact-check'

const STATUS_EMOJI: Record<string, string> = {
  verified: '✅',
  unverifiable: '❓',
  refuted: '❌',
}
const STATUS_LABEL: Record<string, string> = {
  verified: 'Verified',
  unverifiable: 'Unverifiable from official sources',
  refuted: 'False (myth)',
}

// Per-user submit throttle. In-memory, resets per serverless instance —
// a nuisance brake like the web form's; Discord identity is the real gate.
const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_MAX = 5
const recent = new Map<string, number[]>()

function throttled(userId: string): boolean {
  const now = Date.now()
  const hits = (recent.get(userId) || []).filter((t) => now - t < RATE_WINDOW_MS)
  if (hits.length >= RATE_MAX) return true
  hits.push(now)
  recent.set(userId, hits)
  if (recent.size > 5000) recent.clear()
  return false
}

// Discord signs every request with the app's Ed25519 key. Node's crypto
// verifies raw 32-byte keys once wrapped in the standard SPKI DER prefix.
function verifySignature(publicKeyHex: string, signatureHex: string, timestamp: string, body: string): boolean {
  try {
    const spki = Buffer.concat([
      Buffer.from('302a300506032b6570032100', 'hex'),
      Buffer.from(publicKeyHex, 'hex'),
    ])
    const key = createPublicKey({ key: spki, format: 'der', type: 'spki' })
    return edVerify(null, Buffer.from(timestamp + body), key, Buffer.from(signatureHex, 'hex'))
  } catch {
    return false
  }
}

function json(payload: unknown): NextResponse {
  return NextResponse.json(payload)
}

function truncate(s: string, n: number): string {
  return s.length <= n ? s : s.slice(0, n - 1).trimEnd() + '…'
}

export async function POST(req: NextRequest) {
  const publicKey = process.env.DISCORD_PUBLIC_KEY
  if (!publicKey) {
    console.error('[discord-interactions] DISCORD_PUBLIC_KEY not configured')
    return new NextResponse('not configured', { status: 500 })
  }

  const signature = req.headers.get('x-signature-ed25519') || ''
  const timestamp = req.headers.get('x-signature-timestamp') || ''
  const rawBody = await req.text()

  if (!signature || !timestamp || !verifySignature(publicKey, signature, timestamp, rawBody)) {
    return new NextResponse('invalid request signature', { status: 401 })
  }

  let interaction: any
  try {
    interaction = JSON.parse(rawBody)
  } catch {
    return new NextResponse('bad payload', { status: 400 })
  }

  // PING — Discord's endpoint validation handshake
  if (interaction.type === 1) return json({ type: 1 })

  // Slash command: /factcheck query:<text>
  if (interaction.type === 2 && interaction.data?.name === 'factcheck') {
    const query = String(
      interaction.data.options?.find((o: any) => o.name === 'query')?.value || ''
    )
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 300)

    if (!query) {
      return json({
        type: 4,
        data: { content: 'Give me a claim to check, e.g. `/factcheck does dying wipe your ships`', flags: 64 },
      })
    }

    const matches = searchClaims(query, claimsData.claims as Claim[]).slice(0, 3)

    if (matches.length > 0) {
      return json({
        type: 4,
        data: {
          allowed_mentions: { parse: [] },
          embeds: matches.map((c) => ({
            title: `${STATUS_EMOJI[c.status] || '❓'} ${STATUS_LABEL[c.status] || c.status}`,
            description: truncate(c.claim, 250),
            color: c.status === 'verified' ? 0x4ade80 : c.status === 'refuted' ? 0xf87171 : 0xf0c040,
            fields: c.sources?.length
              ? [{ name: 'Source', value: truncate(c.sources[0], 200), inline: false }]
              : [],
            footer: { text: `Last verified ${c.lastVerified || 'n/a'} · full ledger: ${PAGE_URL}` },
          })),
        },
      })
    }

    // Miss: ephemeral, with a submit button. The query rides in the embed
    // description so the button handler can read it back (custom_id caps at
    // 100 chars, so it can't carry the text itself).
    return json({
      type: 4,
      data: {
        flags: 64,
        allowed_mentions: { parse: [] },
        embeds: [
          {
            title: 'No claim on file yet',
            description: query,
            color: 0xf0c040,
            footer: { text: `Searched ${(claimsData.claims as Claim[]).length} claims · ${PAGE_URL}` },
          },
        ],
        components: [
          {
            type: 1,
            components: [
              { type: 2, style: 1, label: 'Submit for fact-checking', custom_id: 'fc_submit' },
            ],
          },
        ],
      },
    })
  }

  // Button click: forward the original query to the intake webhook
  if (interaction.type === 3 && interaction.data?.custom_id === 'fc_submit') {
    const query = String(interaction.message?.embeds?.[0]?.description || '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 300)
    const userId = interaction.member?.user?.id || interaction.user?.id || 'unknown'

    if (!query || throttled(userId)) {
      // silently absorb — same posture as the web form's throttle
      return json({
        type: 7,
        data: { content: 'Submitted ✅ — it will be verified against official CIG sources and added to the page.', embeds: [], components: [] },
      })
    }

    const webhook =
      process.env.CLAIM_REQUEST_WEBHOOK_URL || process.env.DISCORD_CLICK_WEBHOOK_URL
    if (webhook) {
      try {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            allowed_mentions: { parse: [] },
            embeds: [
              {
                title: '📥 Fact-check request (via Discord /factcheck)',
                description: query,
                color: 0xf0c040,
                footer: {
                  text: 'Verify with sc-fact-check, then upsert.mjs add + npm run sync-claims + deploy',
                },
              },
            ],
          }),
        })
      } catch (err) {
        console.error('[discord-interactions] intake webhook error:', err)
      }
    } else {
      console.error('[discord-interactions] no intake webhook configured')
    }

    return json({
      type: 7,
      data: { content: 'Submitted ✅ — it will be verified against official CIG sources and added to the page.', embeds: [], components: [] },
    })
  }

  return json({ type: 4, data: { content: 'Unsupported interaction.', flags: 64 } })
}
