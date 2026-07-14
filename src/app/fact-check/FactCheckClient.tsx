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

function sourceLabel(url: string): string {
  try {
    const u = new URL(url)
    if (u.hostname.startsWith('support.')) return 'RSI Support'
    if (u.hostname.includes('gamespress')) return 'CIG press release'
    if (u.hostname.includes('robertsspaceindustries')) {
      if (u.pathname.includes('/comm-link/')) return 'Official RSI announcement'
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

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return claims
      .filter((c) => !statusFilter || c.status === statusFilter)
      .filter(
        (c) =>
          !q ||
          c.claim.toLowerCase().includes(q) ||
          c.id.toLowerCase().includes(q)
      )
      .sort((a, b) => (b.lastVerified || '').localeCompare(a.lastVerified || ''))
  }, [claims, query, statusFilter])

  async function submitRequest() {
    if (!requestText.trim() || requestState === 'sending') return
    setRequestState('sending')
    try {
      const res = await fetch('/api/claim-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ claim: requestText.trim(), website: honeypot }),
      })
      setRequestState(res.ok ? 'sent' : 'error')
    } catch {
      setRequestState('error')
    }
  }

  const chip = (value: string | null, label: string, count?: number) => (
    <button
      key={label}
      onClick={() => setStatusFilter(value === statusFilter ? null : value)}
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
          onChange={(e) => setQuery(e.target.value)}
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
                {c.lastVerified && (
                  <span className="ml-auto text-xs text-muted">checked {c.lastVerified}</span>
                )}
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

      <div className="mt-10 rounded-lg border border-gold/20 bg-navyLight/40 p-5">
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
                onClick={submitRequest}
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
