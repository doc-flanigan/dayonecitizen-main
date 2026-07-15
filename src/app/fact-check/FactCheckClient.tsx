'use client'

import { useMemo, useState } from 'react'

type Claim = {
  id: string
  claim: string
  status: string
  sources: string[]
  lastVerified: string
}

const STATUS_META: Record<string, { label: string; dot: string; text: string }> = {
  verified: { label: 'Verified', dot: 'bg-green-400', text: 'text-green-400' },
  unverifiable: { label: 'Unverifiable', dot: 'bg-amber-400', text: 'text-amber-400' },
  refuted: { label: 'False', dot: 'bg-red-400', text: 'text-red-400' },
}

// Derive a human title from a comm-link/Spectrum slug so multiple sources on
// one claim are distinguishable ("RSI: Argo ATLS", not three identical labels).
function slugTitle(pathname: string): string {
  const seg = pathname.split('/').filter(Boolean).pop() || ''
  const words = seg
    .replace(/^\d+-/, '')
    .split('-')
    .filter((w) => w && !/^\d{5,}$/.test(w))
    .slice(0, 6)
  if (!words.length || (words.length === 1 && words[0].toLowerCase() === 'api')) return ''
  return words.map((w) => (w.length <= 3 ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1))).join(' ')
}

function sourceLabel(url: string): string {
  try {
    const u = new URL(url)
    if (u.hostname.startsWith('support.')) return 'RSI Support'
    if (u.hostname.includes('gamespress')) return 'CIG press release'
    if (u.hostname.includes('robertsspaceindustries')) {
      if (u.pathname.includes('/comm-link/')) {
        const t = slugTitle(u.pathname)
        return t ? `RSI: ${t}` : 'Official RSI announcement'
      }
      if (u.pathname.includes('/spectrum/')) {
        const t = slugTitle(u.pathname)
        return t ? `CIG staff: ${t}` : 'CIG staff post'
      }
      if (u.pathname.includes('referral')) return 'RSI referral page'
      if (u.pathname.includes('funding')) return 'RSI funding tracker'
      return 'RSI official page'
    }
    if (u.hostname.includes('youtube')) return 'Official Star Citizen YouTube'
    return u.hostname.replace(/^www\./, '')
  } catch {
    return 'Source'
  }
}

export default function FactCheckClient({
  claims,
  generated,
}: {
  claims: Claim[]
  generated: string
}) {
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  const [requestState, setRequestState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [requestText, setRequestText] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [sentClaim, setSentClaim] = useState('')

  const filtered = useMemo(() => {
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
    const raw = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
    const meaningful = raw.filter((w) => !STOP.has(w))
    // if the query is ONLY stopwords ("star citizen"), fall back to raw words
    const words = meaningful.length ? meaningful : raw
    // Scored matching: a claim qualifies when at least half the meaningful
    // words hit ("does SC wipe your ships" → wipe claims), ranked by how many
    // hit, then by recency. Single-word queries behave like plain search.
    const need = Math.max(1, Math.ceil(words.length / 2))
    return claims
      .filter((c) => !statusFilter || c.status === statusFilter)
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
  }, [claims, query, statusFilter])

  const [copiedId, setCopiedId] = useState('')

  function copyLink(id: string) {
    const url = `${window.location.origin}/fact-check#${id}`
    navigator.clipboard?.writeText(url).then(() => {
      setCopiedId(id)
      setTimeout(() => setCopiedId(''), 1600)
    })
  }

  async function submitClaim(text: string) {
    const claim = text.trim().slice(0, 300)
    if (!claim || requestState === 'sending') return
    setRequestState('sending')
    try {
      const res = await fetch('/api/claim-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ claim, website: honeypot }),
      })
      if (res.ok) {
        setRequestState('sent')
        setSentClaim(claim)
      } else {
        setRequestState('error')
      }
    } catch {
      setRequestState('error')
    }
  }

  function editFirst() {
    setRequestText(query.trim())
    document.getElementById('request-a-fact-check')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const chip = (value: string | null, label: string, count?: number) => (
    <button
      key={label}
      onClick={() => setStatusFilter(value === statusFilter ? null : value)}
      aria-pressed={statusFilter === value}
      className={`rounded-full border px-3 py-1 text-xs transition-colors ${
        statusFilter === value
          ? 'border-gold text-gold'
          : 'border-white/10 text-muted hover:border-white/25 hover:text-starwhite'
      }`}
    >
      {label}
      {count !== undefined ? ` · ${count}` : ''}
    </button>
  )

  const counts: Record<string, number> = {}
  for (const c of claims) counts[c.status] = (counts[c.status] || 0) + 1

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            if (requestState === 'sent' || requestState === 'error') setRequestState('idle')
          }}
          placeholder="Search a claim — try 'referral', 'wipe', 'billion', 'Squadron 42'…"
          className="w-full rounded-lg border border-white/10 bg-navyLight/60 px-4 py-3 text-sm text-starwhite placeholder:text-muted focus:border-gold/50 focus:outline-none sm:flex-1"
          aria-label="Search fact-checked claims"
        />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {chip(null, 'All', claims.length)}
        {chip('verified', 'Verified', counts.verified)}
        {chip('unverifiable', 'Unverifiable', counts.unverifiable)}
        {chip('refuted', 'False', counts.refuted)}
      </div>

      <p className="mt-4 text-xs text-muted">
        {filtered.length} of {claims.length} claims · ledger snapshot {generated}
      </p>

      {filtered.length === 0 && query.trim() && (
        <div className="mt-4 rounded-lg border border-gold/30 bg-navyLight/40 p-5 text-center">
          {requestState === 'sent' && sentClaim === query.trim() ? (
            <p className="text-sm leading-relaxed text-starwhite/85">
              ✅ Sent — we will check &ldquo;{sentClaim}&rdquo; against official sources and
              publish the verdict here within a few days.
            </p>
          ) : (
            <>
              <p className="text-sm text-starwhite/85">
                No claims match <span className="text-starwhite">&ldquo;{query.trim()}&rdquo;</span>{' '}
                yet.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => submitClaim(query)}
                  disabled={requestState === 'sending'}
                  className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-navy transition-opacity hover:opacity-90 disabled:opacity-40"
                >
                  {requestState === 'sending' ? 'Sending…' : 'Request a fact-check on this'}
                </button>
                <button
                  onClick={editFirst}
                  className="rounded-lg border border-white/15 px-4 py-2 text-sm text-starwhite/85 transition-colors hover:border-white/30"
                >
                  Edit it first
                </button>
              </div>
              {requestState === 'error' && (
                <p className="mt-3 text-xs text-red-400">Something went wrong — please try again.</p>
              )}
            </>
          )}
        </div>
      )}

      <div className="mt-4 space-y-3">
        {filtered.map((c) => {
          const meta = STATUS_META[c.status] ?? STATUS_META.unverifiable
          return (
            <div
              key={c.id}
              id={c.id}
              className="rounded-lg border border-white/10 bg-navyLight/40 p-4 scroll-mt-24"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className={`inline-block h-2 w-2 rounded-full ${meta.dot}`} aria-hidden />
                <span className={`text-xs font-semibold uppercase tracking-wide ${meta.text}`}>
                  {meta.label}
                </span>
                <span className="ml-auto flex items-center gap-3">
                  {c.lastVerified && (
                    <span className="text-xs text-muted">checked {c.lastVerified}</span>
                  )}
                  <button
                    onClick={() => copyLink(c.id)}
                    title="Copy a direct link to this claim"
                    aria-label={`Copy link to claim: ${c.claim.slice(0, 60)}`}
                    className="text-xs text-muted transition-colors hover:text-gold"
                  >
                    {copiedId === c.id ? 'copied ✓' : '🔗 copy link'}
                  </button>
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-starwhite/90">{c.claim}</p>
              {c.sources.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {c.sources.map((s) => (
                    <a
                      key={s}
                      href={s}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gold underline-offset-4 hover:underline"
                    >
                      {sourceLabel(s)} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div
        id="request-a-fact-check"
        className="mt-10 rounded-lg border border-gold/20 bg-navyLight/40 p-5 scroll-mt-24"
      >
        <h2 className="heading-display text-xl">Checking a claim we have not covered?</h2>
        {requestState === 'sent' ? (
          <p className="mt-3 text-sm leading-relaxed text-starwhite/85">
            Got it — thanks. We verify requests against official Cloud Imperium sources and add
            what checks out. Look for it here within a few days.
          </p>
        ) : (
          <>
            <p className="mt-3 text-sm leading-relaxed text-starwhite/85">
              Paste the claim below and we will check it against official sources and publish the
              verdict here. No email needed, nothing is stored except the claim text.
            </p>
            <textarea
              value={requestText}
              onChange={(e) => setRequestText(e.target.value)}
              maxLength={300}
              rows={2}
              placeholder='e.g. "Star Citizen wipes delete ships you bought with real money"'
              className="mt-3 w-full rounded-lg border border-white/10 bg-navy px-4 py-3 text-sm text-starwhite placeholder:text-muted focus:border-gold/50 focus:outline-none"
              aria-label="Claim to fact-check"
            />
            {/* honeypot — humans never see or fill this */}
            <input
              type="text"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />
            <div className="mt-3 flex items-center gap-3">
              <button
                onClick={() => submitClaim(requestText)}
                disabled={requestState === 'sending' || !requestText.trim()}
                className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-navy transition-opacity hover:opacity-90 disabled:opacity-40"
              >
                {requestState === 'sending' ? 'Sending…' : 'Request a fact-check'}
              </button>
              {requestState === 'error' && (
                <span className="text-xs text-red-400">
                  Something went wrong — please try again.
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
