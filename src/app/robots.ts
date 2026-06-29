import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

// AI answer-engine and search crawlers we explicitly welcome. dayonecitizen.com
// is the portfolio's authority hub, so we want these engines indexing and
// citing the content. Listing them by name (in addition to the catch-all `*`
// rule) makes the intent unambiguous and future-proofs against any default
// that some crawlers apply when they don't find their own user-agent.
const ALLOWED_AI_AND_SEARCH_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Googlebot',
  'Bingbot',
  'Applebot',
  'Applebot-Extended',
  'CCBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      ...ALLOWED_AI_AND_SEARCH_BOTS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/'],
      })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
