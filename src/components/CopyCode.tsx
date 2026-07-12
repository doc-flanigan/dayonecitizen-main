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
}: {
  code: string
  trackingLabel?: string
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
      className="group inline-flex items-center gap-3 rounded-xl border border-gold/40 bg-navyLight px-5 py-3 font-mono text-lg tracking-wider text-gold transition-all hover:border-gold hover:bg-navyLight/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
    >
      <span>{code}</span>
      {copied ? (
        <span className="inline-flex items-center gap-1 text-sm text-green-400">
          <Check size={16} aria-hidden /> Copied
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 text-sm text-starwhite/70 group-hover:text-gold">
          <Copy size={16} aria-hidden /> Copy
        </span>
      )}
    </button>
  )
}
