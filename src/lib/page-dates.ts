import dates from '@/data/page-dates.generated.json'

// datePublished / dateModified for Article JSON-LD, generated from git history by
// scripts/gen-page-dates.mjs. Do not hand-edit the JSON; rerun the script instead.
const DATES = dates as Record<string, { datePublished: string; dateModified: string }>

export function pageDates(route: string): { datePublished: string; dateModified: string } {
  const entry = DATES[route]
  if (!entry) throw new Error(`page-dates: no entry for ${route}; run scripts/gen-page-dates.mjs`)
  return entry
}
