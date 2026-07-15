// Shared scored search over the published claims snapshot. Used by the
// /fact-check page (client) and the Discord /factcheck interactions route
// (server) so both surfaces rank identically.

export type Claim = {
  id: string
  claim: string
  status: string
  sources: string[]
  lastVerified: string
}

// Word-AND matching with stopwords: every meaningful word of the query must
// appear in the claim text or id. "star citizen" and question filler are
// dropped so "does star citizen wipe your ships" matches the wipe claim.
const STOP = new Set([
  'star', 'citizen', 'citizens', 'sc', 'game', 'the', 'a', 'an', 'is', 'are',
  'was', 'were', 'be', 'do', 'does', 'did', 'can', 'could', 'will', 'would',
  'have', 'has', 'had', 'in', 'on', 'of', 'to', 'for', 'with', 'my', 'your',
  'you', 'i', 'it', 'its', 'this', 'that', 'there', 'what', 'when', 'why',
  'how', 'who', 'which', 'and', 'or', 'not', 'no', 'yes', 'really', 'actually',
])

export function searchClaims(query: string, claims: Claim[]): Claim[] {
  const raw = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
  const meaningful = raw.filter((w) => !STOP.has(w))
  // if the query is ONLY stopwords ("star citizen"), fall back to raw words
  const words = meaningful.length ? meaningful : raw
  // Scored matching: a claim qualifies when at least half the meaningful
  // words hit ("does SC wipe your ships" → wipe claims), ranked by how many
  // hit, then by recency. Single-word queries behave like plain search.
  const need = Math.max(1, Math.ceil(words.length / 2))
  return claims
    .map((c) => {
      if (!words.length) return { c, hits: 0 }
      const hay = (c.claim + ' ' + c.id.replace(/-/g, ' ')).toLowerCase()
      return { c, hits: words.filter((w) => hay.includes(w)).length }
    })
    .filter((x) => !words.length || x.hits >= need)
    .sort(
      (a, b) =>
        b.hits - a.hits ||
        (b.c.lastVerified || '').localeCompare(a.c.lastVerified || '')
    )
    .map((x) => x.c)
}
