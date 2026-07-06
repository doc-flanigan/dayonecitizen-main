'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SITE } from '@/lib/site'
import { getRotatedReferralUrl, FALLBACK_REFERRAL_URL } from '@/lib/referral-rotator'

type Variant = 'primary' | 'ghost' | 'subtle'
type Size = 'sm' | 'md' | 'lg'

type Props = {
  href?: string
  children?: React.ReactNode
  variant?: Variant
  size?: Size
  className?: string
  external?: boolean
  trackingLabel?: string
  showIcon?: boolean
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const variantClasses: Record<Variant, string> = {
  primary:
    'btn-sheen bg-gradient-to-b from-[#ffd27a] via-gold to-goldDark text-navy hover:from-[#ffdd96] hover:via-[#ffc95c] hover:to-goldDark shadow-[0_10px_34px_-12px_rgba(245,185,66,0.65),inset_0_1px_0_rgba(255,255,255,0.5)] hover:shadow-[0_14px_44px_-12px_rgba(245,185,66,0.9),inset_0_1px_0_rgba(255,255,255,0.55)] hover:-translate-y-0.5 active:translate-y-0',
  ghost:
    'border border-gold/60 text-gold hover:bg-gold/10 hover:border-gold hover:-translate-y-0.5 active:translate-y-0',
  subtle:
    'bg-navyLight text-starwhite hover:bg-navyLight/70 border border-white/10 hover:border-white/20',
}

export default function CTAButton({
  href: hrefProp,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  external,
  trackingLabel,
  showIcon = true,
}: Props) {
  const [referralUrl, setReferralUrl] = useState(FALLBACK_REFERRAL_URL)
  useEffect(() => { setReferralUrl(getRotatedReferralUrl()) }, [])

  const href = hrefProp ?? referralUrl
  const isExternal = external ?? href.startsWith('http')
  const label = children ?? `Get ${SITE.referralBonusUEC.replace(',000', 'K')}`

  const classes = `group inline-flex items-center justify-center gap-2 rounded-xl font-display font-bold tracking-wide transition-all duration-300 ease-spring focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  const linkRef = useRef<HTMLAnchorElement>(null)
  const impressionFired = useRef(false)

  useEffect(() => {
    const el = linkRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (impressionFired.current) return
        if (!entries.some((entry) => entry.isIntersecting)) return
        impressionFired.current = true
        observer.disconnect()
        const code = href.split('referral=')[1] ?? ''
        fetch('/api/log', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            label: `impression:${trackingLabel ?? 'unknown'}`,
            referralCode: code,
            page: window.location.pathname,
            site: window.location.hostname,
          }),
        }).catch(() => {})
        ;(window as any).gtag?.('event', 'cta_impression', {
          cta_label: trackingLabel ?? 'unknown',
          referral_code: code,
          page_path: window.location.pathname,
          site: window.location.hostname,
        })
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [href, trackingLabel])

  const handleClick = () => {
    const code = href.split('referral=')[1] ?? ''
    fetch('/api/log', {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        label: trackingLabel ?? 'unknown',
        referralCode: code,
        page: window.location.pathname,
        site: window.location.hostname,
      }),
    }).catch(() => {})
    ;(window as any).gtag?.('event', 'referral_click', {
      referral_code: code,
      page_path: window.location.pathname,
      site: window.location.hostname,
    })
  }

  if (isExternal) {
    return (
      <a
        ref={linkRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        data-track={trackingLabel}
        onClick={handleClick}
      >
        <span>{label}</span>
        {showIcon ? <ArrowUpRight size={size === 'lg' ? 20 : 16} aria-hidden className="transition-transform duration-300 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> : null}
      </a>
    )
  }

  return (
    <Link ref={linkRef} href={href} className={classes} data-track={trackingLabel} onClick={handleClick}>
      <span>{label}</span>
      {showIcon ? <ArrowUpRight size={size === 'lg' ? 20 : 16} aria-hidden className="transition-transform duration-300 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> : null}
    </Link>
  )
}
