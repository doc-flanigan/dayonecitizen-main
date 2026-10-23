import { NextResponse } from 'next/server'
import type { NextRequest, NextFetchEvent } from 'next/server'

// AI-bot fetch logger — permanent, queryable record of which AI engines read
// which pages. Rows land in the shared click-tracking Sheet with an `ai-bot:`
// label prefix (Sheet only, no Discord — volume would drown the channel).
// Classic search crawlers (bingbot, googlebot, …) are deliberately NOT logged;
// BWT/GSC already cover them. Response is never blocked: logging rides
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

// Header-level canonical alongside the <link rel="canonical"> tags from page
// metadata. If a page fails client-side, the on-page tag can be lost; Google
// has then clustered the broken shell with spam sites and handed our URL to
// them (747live family on /de/auf-deutsch, marcustheatres.com on
// /day-one-citizen/first-flight as of 2026-10-22). The same fix has been live
// on iheldtheline and freeflyevent since 2026-08-26.
//
// Matches page metadata exactly: apex host, no trailing slash, homepage as the
// bare origin. Pages whose metadata canonical points elsewhere are skipped so
// the header never contradicts the tag.
const CANONICAL_HOST = 'https://dayonecitizen.com'
const CROSS_DOMAIN_CANONICAL = new Set(['/day-one-citizen/keybinds'])

export function middleware(req: NextRequest, event: NextFetchEvent) {
  const response = NextResponse.next()
  const { pathname } = req.nextUrl

  const isHtmlRoute =
    req.method === 'GET' &&
    !pathname.startsWith('/api/') &&
    !pathname.startsWith('/_next/') &&
    !/\.[^/]+$/.test(pathname)

  if (isHtmlRoute) {
    const canonicalPath = pathname === '/' ? '' : pathname.replace(/\/+$/, '')
    if (!CROSS_DOMAIN_CANONICAL.has(canonicalPath)) {
      response.headers.set('Link', `<${CANONICAL_HOST}${canonicalPath}>; rel="canonical"`)
    }
  }

  const ua = req.headers.get('user-agent') ?? ''
  const hit = AI_BOTS.find(([re]) => re.test(ua))
  const sheetUrl = process.env.CLICK_TRACKER_SHEET_URL

  if (hit && sheetUrl) {
    const timestamp =
      new Date().toLocaleString('en-US', {
        timeZone: 'America/Chicago',
        dateStyle: 'short',
        timeStyle: 'medium',
      }) + ' CST'
    event.waitUntil(
      fetch(sheetUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp,
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

  return response
}

// Pages, llms.txt, robots.txt, and sitemaps — the fetches that mean an AI is
// reading content. Static assets and API routes are excluded to keep
// middleware invocations (billed) near zero for human traffic.
export const config = {
  matcher: [
    '/((?!_next/|api/|.*\\.(?:jpg|jpeg|png|gif|svg|ico|webp|avif|css|js|map|woff2?)$).*)',
  ],
}
