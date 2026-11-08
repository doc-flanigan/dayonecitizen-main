'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'
import CopyCode from '@/components/CopyCode'
import { SITE } from '@/lib/site'
import { logClick } from '@/lib/log-click'
import {
  SHOW_REFERRAL_BAR,
  REFERRAL_BAR_DISMISS_DAYS,
  REFERRAL_BAR_HIDDEN_PREFIXES,
} from '@/data/referral-bar'
import { getFreeFlyStatus } from '../data/next-free-fly'
import { useServerFreeFlyActive } from './FreeFlyStatusProvider'

const STORAGE_KEY = 'referral_bar_dismissed_until'

/**
 * Slim sitewide referral bar, rendered inside the fixed header (NavBar).
 * Rendered on the server by default and hidden after mount if the visitor
 * dismissed it within the last 7 days, so server and client HTML match.
 * Turn off with SHOW_REFERRAL_BAR in src/data/referral-bar.ts.
 */
export default function ReferralBar() {
  const pathname = usePathname() ?? ''
  const [dismissed, setDismissed] = useState(false)
  // Yield to the Free Fly banner while an event is live: two promo bars in
  // the fixed header is too much on a phone, and freeflyevent.com (where the
  // banner points) carries the same code. Same server-first pattern as
  // FreeFlyBanner so hydration matches.
  const [freeFlyActive, setFreeFlyActive] = useState(useServerFreeFlyActive())
  useEffect(() => {
    const check = () => setFreeFlyActive(getFreeFlyStatus() === 'active')
    check()
    const id = setInterval(check, 60_000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    try {
      const until = Number(window.localStorage.getItem(STORAGE_KEY) ?? 0)
      if (until > Date.now()) setDismissed(true)
    } catch {
      /* storage unavailable: just show the bar */
    }
  }, [])

  if (!SHOW_REFERRAL_BAR || dismissed || freeFlyActive) return null
  if (REFERRAL_BAR_HIDDEN_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return null
  }

  const dismiss = () => {
    logClick('ReferralBar-dismiss', SITE.referralCode)
    setDismissed(true)
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        String(Date.now() + REFERRAL_BAR_DISMISS_DAYS * 24 * 60 * 60 * 1000),
      )
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="border-b border-white/5 bg-navyLight/90 text-starwhite/85" data-referral-bar>
      <div className="container-wide flex items-center gap-2 py-1 text-xs sm:gap-3">
        <p className="min-w-0 flex-1 truncate">
          Star Citizen referral code{' '}
          <strong className="font-mono text-gold">{SITE.referralCode}</strong>
          <span className="hidden sm:inline"> &mdash; 50,000 UEC at signup</span>
        </p>
        <CopyCode code={SITE.referralCode} trackingLabel="ReferralBar-copy" compact />
        <a
          href={SITE.referralUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => logClick('ReferralBar-enlist', SITE.referralCode)}
          data-track="ReferralBar-enlist"
          className="shrink-0 whitespace-nowrap font-semibold text-gold underline-offset-4 hover:underline"
        >
          Sign up<span className="hidden sm:inline"> with the code</span>
        </a>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss referral code bar"
          className="shrink-0 rounded p-1 text-starwhite/60 hover:text-starwhite focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <X size={14} aria-hidden />
        </button>
      </div>
    </div>
  )
}
