import { SITE } from '@/lib/site'
import { LLMS_SECTIONS } from '@/data/content-index'

// Serves /llms.txt — a curated, plain-text index of the site for AI answer
// engines. Generated from the same content registry (src/data/content-index.ts)
// every render, so it stays in sync instead of being hand-maintained. Static at
// build time; revalidated daily in case the registry changes between deploys.
export const dynamic = 'force-static'
export const revalidate = 86400

export function GET() {
  const lines: string[] = []

  lines.push(`# ${SITE.name}`)
  lines.push('')
  lines.push(`> ${SITE.description}`)
  lines.push('')
  lines.push(
    `Canonical site: ${SITE.url}. Unofficial Star Citizen fan site for brand-new players, written in plain English by ${SITE.author}.`,
  )
  lines.push('')

  for (const section of LLMS_SECTIONS) {
    lines.push(`## ${section.heading}`)
    lines.push('')
    if (section.blurb) {
      lines.push(section.blurb)
      lines.push('')
    }
    for (const entry of section.entries) {
      lines.push(`- [${entry.title}](${SITE.url}${entry.path}): ${entry.summary}`)
    }
    lines.push('')
  }

  const body = `${lines.join('\n').trimEnd()}\n`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400',
    },
  })
}
