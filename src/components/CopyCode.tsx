'use client'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

/**
 * Copy-to-clipboard chip for the referral code. Shows a "Copied" state for two
 * seconds and logs the copy to /api/log (same pipeline as CTA clicks) so code
 * copies show up alongside referral clicks in the tracking Sheet + Discord.
 */
export default function CopyCode({
  code,
  trackingLabel = 'referral-code-copy',
  copyLabel = 'Copy',
  copiedLabel = 'Copied',
  compact = false,
}: {
  code: string
  trackingLabel?: string
  /** Visible label next to the copy icon (override for localized pages). */
  copyLabel?: string
  /** Visible label shown after a successful copy (override for localized pages). */
  copiedLabel?: string
  /** Small single-line chip for bars; the default is the large hero chip. */
  compact?: boolean
}) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      fetch('/api/log', {
        method: 'POST',
        keepalive: true,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          label: trackingLabel,
          referralCode: code,
          page: window.location.pathname,
          site: window.location.hostname,
          referrer: (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('lref')) || '',
        }),
      }).catch(() => {})
    } catch {
      /* clipboard unavailable (older browser / no permission) — the code is
         still visible and selectable, so this degrades gracefully */
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={`Copy referral code ${code}`}
      className={`group inline-flex items-center rounded-xl border border-gold/40 bg-navyLight font-mono text-gold transition-all hover:border-gold hover:bg-navyLight/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy ${
        compact ? 'gap-2 rounded-lg px-2.5 py-1 text-xs tracking-normal' : 'gap-3 px-5 py-3 text-lg tracking-wider'
      }`}
    >
      {compact ? null : <span>{code}</span>}
      {copied ? (
        <span className={`inline-flex items-center gap-1 text-green-400 ${compact ? 'text-xs' : 'text-sm'}`}>
          <Check size={compact ? 12 : 16} aria-hidden /> {copiedLabel}
        </span>
      ) : (
        <span className={`inline-flex items-center gap-1 text-starwhite/70 group-hover:text-gold ${compact ? 'text-xs' : 'text-sm'}`}>
          <Copy size={compact ? 12 : 16} aria-hidden /> {copyLabel}
        </span>
      )}
    </button>
  )
}
