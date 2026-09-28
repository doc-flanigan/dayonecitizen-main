import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import CopyCode from '@/components/CopyCode'
import Term from '@/components/Term'
import SourceLink from '@/components/SourceLink'
import ShotPlaceholder from '@/components/ShotPlaceholder'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import PageSources from '@/components/PageSources'
import { SITE } from '@/lib/site'
import { REFERRAL_BONUS, isReferralBonusActive } from '@/data/referral-bonus'
import {
  VERIFIED_DISPLAY,
  VERIFIED_MONTH,
  VERIFICATION_LOG,
} from '@/data/verification'

// Re-render daily so the promo section and any expired bonus shut off on
// their own, matching the referral-bonus.ts auto-expiry contract.
export const revalidate = 86400

const REFERRAL_FAQ =
  'https://support.robertsspaceindustries.com/hc/en-us/articles/115013102847-Referral-Program-FAQ'
const REFERRAL_PROGRAM = 'https://robertsspaceindustries.com/en/referral-program'

export const metadata: Metadata = {
  title: 'Star Citizen Referral Code: STAR-GCQJ-N6NC',
  description:
    'The Star Citizen referral code is STAR-GCQJ-N6NC. This step-by-step guide with real signup screenshots shows how it ties 50,000 UEC to your account.',
  alternates: {
    canonical: '/referral-code',
    languages: {
      en: '/referral-code',
      de: '/de/referral-code',
      'x-default': '/referral-code',
    },
  },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Star Citizen Referral Code: STAR-GCQJ-N6NC',
    description:
      'The Star Citizen referral code is STAR-GCQJ-N6NC. Enter it when you create your RSI account to tie a 50,000 UEC bonus to it — step-by-step, with screenshots.',
    url: '/referral-code',
    type: 'article',
  },
}

// HowTo structured data — mirrors the visible walkthrough below so this page
// can earn rich results and AI answer-engine citations for "how to use a
// star citizen referral code".
const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to use a Star Citizen referral code',
  description:
    'Five steps from opening the referral link to seeing the 50,000 UEC bonus on your account.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Open the link',
      text: 'Open the referral link. The Star Citizen referral code STAR-GCQJ-N6NC fills in automatically.',
      image: `${SITE.url}/images/referral/rsi-referral-panel-applied-2026-09.jpg`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Fill in your account details',
      text: 'Enter your account name, email, password, and date of birth. Check that the referral panel shows "Referral code successfully applied!"',
      image: `${SITE.url}/images/referral/rsi-enlist-referral-applied-2026-09.jpg`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Confirm your email',
      text: 'Open the confirmation message RSI sends and verify your email address to activate the account.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Choose a game package, or wait for a Free Fly',
      text: 'Buy a game package to start playing right away, or wait for a Free Fly event, when anyone can try the game for free.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'See your UEC on your account',
      text: 'Check your RSI account or the pledge store wallet — the 50,000 UEC referral bonus shows up on your balance.',
    },
  ],
}

// FAQPage structured data — mirrors the visible "Common questions" section so
// this page can earn rich results and AI answer-engine citations.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Star Citizen referral code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Star Citizen referral code is STAR-GCQJ-N6NC. Enter it in the Referral Code field when you create your RSI account to tie a 50,000 UEC bonus to that account.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a purchase needed to get the referral bonus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "RSI's Referral Program FAQ says anyone who registers with a personal code automatically gets 50,000 UEC, added at account creation. The RSI signup page itself describes the same UEC as currency you earn after buying a game package. In practice, the bonus is tied to your account the moment you sign up with the code, and you need a game package to actually play Star Citizen and spend it.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I add a referral code after making my account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only within about twenty-four hours of creating the account, through your account settings, and there may be a delay before the bonus appears. After that window the code can no longer be applied, so it is best to enter it at signup.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I change my referral code once it is applied?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — a referral code cannot be changed once an account is created. If you signed up with no code and have not bought anything yet, RSI support can close that account so you can register again with a code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is STAR-GCQJ-N6NC verified and still working?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Yes. The code was checked on the live RSI enlist page on ${VERIFIED_DISPLAY} — the signup panel showed "Referral code successfully applied!" with the referrer named. It is re-checked monthly, and this page keeps a dated verification log.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Are there Star Citizen promo codes or coupon codes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not for discounts. RSI's official program pages describe only the referral bonus — 50,000 UEC tied to a new account. The 'discount code' listings on coupon aggregator sites have no official RSI source.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does the referral code work during a Free Fly event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A referral code applies whenever you create an account, event or not. Free Fly windows let anyone play free for a limited time; the referral bonus is a separate, always-available part of signing up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the referral bonus apply to Squadron 42?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The referral code is applied to your RSI account, and the 50,000 UEC bonus is spent inside Star Citizen. Squadron 42 is a separate single-player game on the same account, so the bonus does not change the campaign itself.',
      },
    },
  ],
}

export default function ReferralCodePage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', url: '/' },
            { name: 'Referral Code', url: '/referral-code' },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-12 pt-32 sm:pt-40">
          <div className="container-narrow">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-gold"
            >
              <ArrowLeft size={12} aria-hidden /> Day One Citizen
            </Link>
            <p className="mt-5 font-mono text-xs text-gold">Referral</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Star Citizen Referral Code
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">
                The Star Citizen referral code is STAR-GCQJ-N6NC.
              </strong>{' '}
              Enter it when you create your free{' '}
              <Term name="RSI">RSI</Term> account to tie a{' '}
              <Term name="UEC">50,000 UEC</Term> bonus to that account.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <CopyCode code={SITE.referralCode} />
              <CTAButton
                external
                href={SITE.referralUrl}
                trackingLabel="referral-code-hero-applied"
                size="lg"
              >
                Sign up with the code applied
              </CTAButton>
            </div>
            <p className="mt-4 max-w-2xl text-sm font-semibold text-gold">
              Verified working {VERIFIED_DISPLAY} — checked on the live RSI
              signup page. Re-checked monthly; the dated log is below.
            </p>
            <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted">
              The gold button opens the RSI signup page with the code already
              filled in. This is a referral link. When you enlist with this code
              your account gets the full 50,000 UEC bonus; the referrer may earn a
              small reward too. Your bonus is never reduced.
            </p>
            <p className="mt-3 text-sm">
              <Link
                href="/de/referral-code"
                hrefLang="de"
                lang="de"
                className="text-gold underline-offset-4 hover:underline"
              >
                Diese Seite auf Deutsch →
              </Link>
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              How to use a Star Citizen referral code
            </h2>
            <div className="mt-5 space-y-10 text-base leading-relaxed text-starwhite/85">
              <div>
                <p>
                  <strong className="text-starwhite">
                    1. Open the link — the code fills in automatically.
                  </strong>{' '}
                  Use the button above or the{' '}
                  <a
                    href={SITE.referralUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline-offset-4 hover:underline"
                  >
                    RSI enlist page
                  </a>
                  . The{' '}
                  <strong className="text-starwhite">Referral Code</strong> field
                  already shows <strong className="text-starwhite">STAR-GCQJ-N6NC</strong>.
                </p>
                <figure className="mt-4 overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src="/images/referral/rsi-referral-panel-applied-2026-09.jpg"
                    alt="Close-up of the RSI referral panel reading 'You've been referred by: Doc Flanigan @Doc_Flanigan', code STAR-GCQJ-N6NC, and 'Referral code successfully applied!'"
                    width={1204}
                    height={568}
                    className="h-auto w-full"
                  />
                  <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                    The referral panel on the RSI enlist page, with the code already applied.
                  </figcaption>
                </figure>
              </div>

              <div>
                <p>
                  <strong className="text-starwhite">
                    2. Fill in your account details.
                  </strong>{' '}
                  Enter your account name, email, password, and date of birth.
                  Before you submit, check that the referral panel still reads
                  &ldquo;Referral code successfully applied!&rdquo;
                </p>
                <figure className="mt-4 overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src="/images/referral/rsi-enlist-referral-applied-2026-09.jpg"
                    alt="The full RSI enlist sign-up page with Account Name, Email, Password, and Date of Birth fields, and the referral panel at the bottom confirming the code applied"
                    width={1148}
                    height={1038}
                    className="h-auto w-full"
                  />
                  <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                    The full RSI enlist page opened through our link, code already applied.
                  </figcaption>
                </figure>
              </div>

              <div>
                <p>
                  <strong className="text-starwhite">3. Confirm your email.</strong>{' '}
                  RSI sends a confirmation message. Your account is not active
                  until you verify it.
                </p>
                <ShotPlaceholder
                  file="03-confirm-email.jpg"
                  caption="The RSI email-verification step after signup"
                />
              </div>

              <div>
                <p>
                  <strong className="text-starwhite">
                    4. Choose a game package, or wait for a Free Fly.
                  </strong>{' '}
                  A free account lets you browse and hold the bonus, but you
                  need a game package to actually play Star Citizen. The
                  cheapest option, the Citizen Starter Pack, was on sale for
                  $45 (25% off its $60 list price, as of September 2026). Or
                  wait for a{' '}
                  <Term name="Free Fly">Free Fly</Term> — a limited window
                  when anyone can play free. The next one is expected around{' '}
                  <Term name="IAE">IAE</Term> in late November, following
                  CIG&rsquo;s usual pattern, though it has not been announced
                  yet.
                </p>
                <ShotPlaceholder
                  file="04-choose-package-or-free-fly.jpg"
                  caption="The RSI pledge store package picker, or the Free Fly signup banner during an event"
                />
              </div>

              <div>
                <p>
                  <strong className="text-starwhite">
                    5. See your UEC on your account.
                  </strong>{' '}
                  Check your RSI account or the pledge store wallet. The
                  50,000 UEC referral bonus shows up on your balance and stays
                  there permanently.
                </p>
                <ShotPlaceholder
                  file="05-uec-on-account.jpg"
                  caption="The RSI account dashboard or wallet showing the UEC balance, including the referral bonus"
                />
              </div>

              <p className="text-sm">
                Enter the code at signup if you can. If you forget, you can
                still add it in your account settings within about{' '}
                <strong className="text-starwhite">twenty-four hours</strong> —
                after that window it cannot be applied.{' '}
                <SourceLink href={REFERRAL_FAQ}>
                  Official RSI Referral Program FAQ
                </SourceLink>
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              What you get
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Using a referral code when you enlist ties a{' '}
                <strong className="text-starwhite">
                  50,000 <Term name="UEC">UEC</Term> bonus
                </strong>{' '}
                to your new account.{' '}
                <SourceLink href={REFERRAL_PROGRAM}>
                  Official RSI Referral Program
                </SourceLink>
              </p>
              <p>
                RSI describes this two ways. The{' '}
                <SourceLink href={REFERRAL_FAQ}>
                  Official RSI Referral Program FAQ
                </SourceLink>{' '}
                says the bonus is added automatically when you register with a
                personal code — right away if you enter it at signup, or with a
                delay if you add it later. The{' '}
                <SourceLink href={SITE.referralUrl}>
                  Official RSI enlist page
                </SourceLink>{' '}
                itself describes the same UEC as currency you earn after
                buying a game package.
              </p>
              <p>
                <strong className="text-starwhite">
                  In plain terms: the bonus is tied to your account the moment
                  you sign up with the code.
                </strong>{' '}
                You need a game package to actually play Star Citizen and
                spend it. It stays on your account permanently either way.
              </p>
              <p>
                One note on wording you may see elsewhere: the credits are counted in{' '}
                <Term name="UEC">UEC</Term>, the persistent in-game currency you keep
                through updates — not the balance that resets on a{' '}
                <Term name="Wipe">wipe</Term>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Is this legit?
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Yes. The referral program is run by{' '}
                <Term name="RSI">Roberts Space Industries</Term> itself — it is how
                the studio rewards players for bringing in friends. Any valid code
                gives the same 50,000 UEC bonus; this one is mine (Doc_Flanigan).
              </p>
              <p>
                On the referrer&rsquo;s side — mine, not yours — a separate
                &ldquo;Recruitment Point&rdquo; reward only unlocks once the
                person referred spends at least $40 on a game package. That is
                a reward for the referrer, not a condition on your 50,000 UEC.{' '}
                <SourceLink href={REFERRAL_FAQ}>
                  Official RSI Referral Program FAQ
                </SourceLink>
              </p>
              <p>
                New to all of this? Start with{' '}
                <Link
                  href="/day-one-citizen/worth-buying"
                  className="text-gold underline-offset-4 hover:underline"
                >
                  whether Star Citizen is worth buying
                </Link>{' '}
                and the{' '}
                <Link
                  href="/day-one-citizen"
                  className="text-gold underline-offset-4 hover:underline"
                >
                  full Day One Citizen guide
                </Link>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Any bonus event running right now?
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              {isReferralBonusActive() ? (
                <div className="rounded-2xl border border-gold/40 bg-gold/10 p-6">
                  <p>
                    <strong className="text-gold">
                      Yes — a limited-time referral bonus is live:
                    </strong>{' '}
                    {REFERRAL_BONUS.itemName}
                    {REFERRAL_BONUS.itemDescription
                      ? ` — ${REFERRAL_BONUS.itemDescription}`
                      : ''}
                    . It runs from {REFERRAL_BONUS.startsAt} to{' '}
                    {REFERRAL_BONUS.endsAt}, on top of the standard 50,000 UEC.{' '}
                    <SourceLink href={REFERRAL_BONUS.sourceUrl}>
                      {REFERRAL_BONUS.sourceLabel}
                    </SourceLink>
                  </p>
                </div>
              ) : (
                <p>
                  Not at the moment — this page checks daily. During some events,
                  such as{' '}
                  <Term name="Free Fly">Free Fly</Term> weeks, RSI adds
                  limited-time rewards on top of the standard bonus. When one is
                  live, it appears here. The 50,000 UEC bonus itself is always
                  available at signup. Event windows are tracked at{' '}
                  <a
                    href="https://freeflyevent.com"
                    className="text-gold underline-offset-4 hover:underline"
                  >
                    freeflyevent.com
                  </a>
                  .
                </p>
              )}
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Verification log
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Most code pages ask you to take their word for it. This one keeps
                receipts — each entry below is a real check against an official
                RSI page.
              </p>
              <ul className="space-y-4">
                {VERIFICATION_LOG.slice(0, 6).map((entry) => (
                  <li
                    key={entry.display + entry.text.slice(0, 20)}
                    className="card-surface rounded-lg border border-white/5 p-5 text-sm leading-relaxed"
                  >
                    <strong className="text-starwhite">{entry.display}</strong>{' '}
                    — {entry.text}
                    {entry.source ? (
                      <>
                        {' '}
                        <SourceLink href={entry.source.href}>
                          {entry.source.label}
                        </SourceLink>
                      </>
                    ) : null}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted">
                The code is re-checked monthly, and after any major change to the
                RSI signup page.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  What is the Star Citizen referral code?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  It is <strong className="text-starwhite">STAR-GCQJ-N6NC</strong>.
                  Enter it in the Referral Code field when you make your RSI account
                  to tie 50,000 UEC to it.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Is a purchase needed for the bonus?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  RSI&rsquo;s two official pages describe it two ways: the
                  Referral Program FAQ says the bonus is added automatically
                  when you register with a code, and the signup page frames
                  the same UEC as currency you earn after buying a game
                  package. The bonus is tied to your account when you sign up
                  with the code; you need a game package to actually play and
                  spend it. This and every referral fact here is tracked in our{' '}
                  <Link
                    href="/fact-check"
                    className="text-gold underline-offset-4 hover:underline"
                  >
                    fact-check ledger
                  </Link>{' '}
                  with official sources.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Can I add it later?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Only within about twenty-four hours of creating the account,
                  in your account settings, and there may be a delay before it
                  shows up. Not after that window.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Can I change the code once it is applied?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  No — a code cannot be swapped after account creation. If you
                  signed up without one and have not bought anything, RSI
                  support can close that account so you can register again
                  with a code.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Is the code still working?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Yes — checked on the live RSI signup page on{' '}
                  {VERIFIED_DISPLAY}, with the &ldquo;successfully
                  applied&rdquo; confirmation showing. See the verification log
                  above.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  What about promo or coupon codes?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  RSI&rsquo;s program pages describe only the referral bonus.
                  &ldquo;Discount code&rdquo; listings on coupon sites have no
                  official RSI source — the referral code is the one that pays.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Does it work during Free Fly?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Yes. The code applies whenever you create an account, event
                  or not.{' '}
                  <Term name="Free Fly">Free Fly</Term> lets anyone play free
                  for a limited window; the referral bonus is separate and
                  always available at signup.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Does it apply to Squadron 42?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  The code goes on your RSI account, and the 50,000 UEC is spent
                  inside Star Citizen.{' '}
                  <Term name="Squadron 42">Squadron 42</Term> is a separate
                  single-player game on the same account, so the bonus does not
                  change the campaign.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton
              external
              href={SITE.referralUrl}
              trackingLabel="referral-code-bottom"
              size="lg"
            >
              Start with 50,000 UEC
            </CTAButton>
          </div>

          <nav className="flex items-center justify-between text-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Home
            </Link>
            <Link
              href="/day-one-citizen"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Day One Citizen guide
            </Link>
          </nav>
        </div>

        <PageSources route="/referral-code" />
      </main>
      <Footer />
    </>
  )
}
