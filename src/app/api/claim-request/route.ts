import { NextRequest, NextResponse } from 'next/server'

// Public "request a fact-check" intake for /fact-check. Posts the claim text
// to Discord where the verification queue is triaged; nothing is stored
// server-side. CLAIM_REQUEST_WEBHOOK_URL overrides the shared click webhook
// when a dedicated channel is configured.

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
        embeds: [
          {
            title: '📥 Fact-check request (dayonecitizen.com/fact-check)',
            description: claim.trim().slice(0, 300),
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
