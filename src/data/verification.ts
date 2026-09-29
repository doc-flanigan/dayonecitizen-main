// Single source of truth for the /referral-code "Verified working" stamp
// and the dated verification log. Updated by scripts/verify-referral.mjs in
// the portfolio root (monthly ritual), or by scripts/record-referral-check.mjs
// via the "referral check" GitHub workflow — avoid hand-editing dates. That
// workflow also opens a reminder issue when VERIFIED_ON is over 30 days old.

export const VERIFIED_ON = '2026-09-29'
export const VERIFIED_DISPLAY = 'September 29, 2026'
export const VERIFIED_MONTH = 'September 2026'

export type VerificationEntry = {
  display: string
  text: string
  source?: { href: string; label: string }
}

export const VERIFICATION_LOG: VerificationEntry[] = [
  // __VERIFY_LOG_INSERT__ (newest first — the verify script prepends here)
  {
    display: 'September 29, 2026',
    text: 'STAR-GCQJ-N6NC entered on the live RSI enlist page. RSI accepted it and showed the code as applied. (manual check in a real browser)',
  },
  {
    display: 'July 24, 2026',
    text: 'STAR-GCQJ-N6NC entered on the live RSI enlist page. The panel showed “You’ve been referred by: Doc Flanigan” and “Referral code successfully applied!” (automated check)',
  },
  {
    display: 'July 21, 2026',
    text: 'STAR-GCQJ-N6NC entered on the live RSI enlist page. The panel showed “You’ve been referred by: Doc Flanigan” and “Referral code successfully applied!” (manual check in a real browser)',
  },
  {
    display: 'July 12, 2026',
    text: 'STAR-GCQJ-N6NC entered on the live RSI enlist page. The panel showed “You’ve been referred by: Doc Flanigan” and “Referral code successfully applied!” (automated check)',
  },
  {
    display: 'July 11, 2026',
    text: 'STAR-GCQJ-N6NC entered on the live RSI enlist page. The panel showed “You’ve been referred by: Doc Flanigan” and “Referral code successfully applied!”',
  },
  {
    display: 'July 7, 2026',
    text: 'Bonus mechanics re-checked: the 50,000 UEC lands on a free account, and only the referrer’s separate reward involves a $40 purchase.',
    source: {
      href: 'https://support.robertsspaceindustries.com/hc/en-us/articles/115013102847-Referral-Program-FAQ',
      label: 'Official RSI Referral Program FAQ',
    },
  },
  {
    display: 'July 3, 2026',
    text: 'The twenty-four-hour grace window for adding a code after signup confirmed.',
    source: {
      href: 'https://robertsspaceindustries.com/en/referral-program',
      label: 'Official RSI Referral Program page',
    },
  },
]
