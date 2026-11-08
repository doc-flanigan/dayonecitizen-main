// Sitewide referral bar (see src/components/ReferralBar.tsx).
// Set SHOW_REFERRAL_BAR to false to turn the bar off everywhere in one line.
export const SHOW_REFERRAL_BAR = true

/** How long a dismissal is remembered in the visitor's browser. */
export const REFERRAL_BAR_DISMISS_DAYS = 7

/** Routes where the bar is redundant (the page already shows the code). */
export const REFERRAL_BAR_HIDDEN_PREFIXES = [
  '/referral-code',
  '/de/referral-code',
  '/beyond-the-basics/redeem-codes',
] as const
