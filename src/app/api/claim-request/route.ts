import { NextRequest, NextResponse } from 'next/server'

// Public "request a fact-check" intake for /fact-check. Posts the claim text
// to Discord where the verification queue is triaged; nothing is stored
// server-side. CLAIM_REQUEST_WEBHOOK_URL overrides the shared click webhook
// when a dedicated channel is configured.

// Best-effort per-IP throttle. In-memory, so it resets per serverless
// instance — fine as a nuisance brake; the honeypot + Doc's triage are the
// real gate.
const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_MAX = 5
const recent = new Map<string, number[]>()

function throttled(ip: string): boolean {
  const now = Date.now()
  const hits = (recent.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS)
  if (hits.length >= RATE_MAX) return true
  hits.push(now)
  recent.set(ip, hits)
  if (recent.size > 5000) recent.clear() // memory guard
  return false
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  const { claim, website } = body as Record<string, unknown>

  // honeypot filled → bot; report success and drop it
  if (typeof website === 'string' && website.length > 0) {
    return NextResponse.json({ ok: true })
  }

  if (typeof claim !== 'string' || !claim.trim() || claim.length > 300) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (throttled(ip)) {
    // report success so bots learn nothing; the request is simply dropped
    return NextResponse.json({ ok: true })
  }

  const webhook =
    process.env.CLAIM_REQUEST_WEBHOOK_URL || process.env.DISCORD_CLICK_WEBHOOK_URL
  if (!webhook) {
    console.error('[claim-request] no webhook configured')
    return NextResponse.json({ ok: false }, { status: 500 })
  }

  try {
    await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // submitted text can never ping @everyone/@roles in the channel
        allowed_mentions: { parse: [] },
        embeds: [
          {
            title: '📥 Fact-check request (dayonecitizen.com/fact-check)',
            description: claim.trim().replace(/\s+/g, ' ').slice(0, 300),
            color: 0xf0c040,
            footer: {
              text: 'Verify with sc-fact-check, then upsert.mjs add + npm run sync-claims + deploy',
            },
          },
        ],
      }),
    })
  } catch (err) {
    console.error('[claim-request] webhook error:', err)
    return NextResponse.json({ ok: false }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
