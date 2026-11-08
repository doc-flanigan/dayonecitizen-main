'use client'

import CopyCode from '@/components/CopyCode'
import { SITE } from '@/lib/site'
import { logClick } from '@/lib/log-click'

/**
 * Fixed bottom bar for small screens on /referral-code (hidden md and up).
 * The page adds bottom padding on mobile so this never covers the footer.
 */
export default function ReferralStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-navy/95 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.8)] backdrop-blur md:hidden">
      <div className="flex h-16 items-center gap-2 px-4">
        <code className="shrink-0 whitespace-nowrap font-mono text-xs font-bold text-gold">
          {SITE.referralCode}
        </code>
        <CopyCode code={SITE.referralCode} trackingLabel="ReferralCode-sticky-copy" compact />
        <a
          href={SITE.referralUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => logClick('ReferralCode-sticky-enlist', SITE.referralCode)}
          data-track="ReferralCode-sticky-enlist"
          className="ml-auto inline-flex min-h-[44px] min-w-0 items-center rounded-lg bg-gold px-3 text-center text-xs font-bold leading-tight text-navy"
        >
          Sign up with the code applied
        </a>
      </div>
    </div>
  )
}
