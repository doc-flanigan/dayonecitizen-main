'use client'

import type { ReactNode } from 'react'

/**
 * Plain external link that logs the click to /api/log (same pipeline as
 * CTAButton and CopyCode). Use for outbound links that are not referral CTAs.
 */
export default function TrackedExternalLink({
  href,
  trackingLabel,
  className,
  children,
}: {
  href: string
  trackingLabel: string
  className?: string
  children: ReactNode
}) {
  const onClick = () => {
    fetch('/api/log', {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        label: trackingLabel,
        referralCode: '',
        page: window.location.pathname,
        site: window.location.hostname,
        referrer: (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('lref')) || '',
      }),
    }).catch(() => {})
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
    >
      {children}
    </a>
  )
}
