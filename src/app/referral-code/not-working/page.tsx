import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import Link from '@/components/Link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import CopyCode from '@/components/CopyCode'
import SourceLink from '@/components/SourceLink'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import PageSources from '@/components/PageSources'
import Term from '@/components/Term'
import { pageDates } from '@/lib/page-dates'
import { SITE } from '@/lib/site'
import { VERIFIED_DISPLAY } from '@/data/verification'

const ROUTE = '/referral-code/not-working'
const REFERRAL_PROGRAM = 'https://robertsspaceindustries.com/en/referral-program'
const REFERRAL_FAQ =
  'https://support.robertsspaceindustries.com/hc/en-us/articles/115013102847-Referral-Program-FAQ'

// Sourced in the claims ledger: referral-code-24h-window, referral-bonus-no-purchase-required,
// referral-enlistment-bonus-50k-uec, no-official-coupon-codes.
const TITLE = 'Star Citizen Referral Code Not Working? Add It After Signup'
const DESCRIPTION =
  'Referral code not working? See where the field is on the RSI signup page, how to add STAR-GCQJ-N6NC within 24 hours of signing up, and what the code does and does not do.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: ROUTE },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: TITLE,
    description: DESCRIPTION,
    url: ROUTE,
    type: 'article',
  },
}

const FAQ: { q: string; a: string }[] = [
  {
    q: 'Where do I enter the Star Citizen referral code?',
    a: 'In the Referral Code panel on the RSI signup page. The enlist link on this site fills it in for you. Do not type the code into the Account Name box.',
  },
  {
    q: 'Can I add a referral code after I made my account?',
    a: "Yes, but only within about 24 hours of creating the account, in your account settings. RSI's Referral Program page calls this a 24-hour grace period. After that the code cannot be added.",
  },
  {
    q: 'Why does the page say my referral code is invalid?',
    a: 'The usual cause is a typo or a missing dash. The code is STAR-GCQJ-N6NC. Copy and paste it, or use the enlist link so the field is filled in for you. If it still fails, check the RSI page for an error message and contact RSI support.',
  },
  {
    q: 'When does the 50,000 UEC show up?',
    a: "RSI's Referral Program FAQ says the bonus is added automatically when you register with a personal code, and there may be a delay if you add the code later. RSI's signup page describes the same UEC as currency you earn after buying a game package, so you need a game package to actually play and spend it.",
  },
  {
    q: 'Does a referral code give a discount on the game?',
    a: 'No. The referral code ties a 50,000 UEC bonus to a new account. RSI documents no coupon or percent-off code for game packages.',
  },
]

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  author: { '@type': 'Person', name: SITE.author, url: `${SITE.url}/about` },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  mainEntityOfPage: `${SITE.url}${ROUTE}`,
  ...pageDates(ROUTE),
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const link = 'text-gold underline-offset-4 hover:underline'

export default function ReferralNotWorkingPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', url: '/' },
            { name: 'Referral Code', url: '/referral-code' },
            { name: 'Not Working', url: ROUTE },
          ]}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-12 pt-32 sm:pt-40">
          <div className="container-narrow">
            <Link
              href="/referral-code"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-gold"
            >
              <ArrowLeft size={12} aria-hidden /> Referral code
            </Link>
            <h1 className="heading-display mt-4 text-3xl sm:text-5xl">
              Star Citizen Referral Code Not Working?
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">
                If you forgot the code, you can still add it. You have about 24 hours after
                creating your account.
              </strong>{' '}
              The code is STAR-GCQJ-N6NC. It was last checked on the live RSI signup page on{' '}
              {VERIFIED_DISPLAY}.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <CopyCode code={SITE.referralCode} trackingLabel="ReferralNotWorking-copy" />
            </div>
          </div>
        </header>

        <div className="container-narrow space-y-14 py-16">
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Where the referral-code field is</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                On the <Term name="RSI">RSI</Term> signup page, the referral code has its own
                panel, separate from your account details. When you open the enlist link below, the
                panel should read &ldquo;Referral code successfully applied!&rdquo; Do not type the
                code into the Account Name box. That box is your public name.
              </p>
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/referral/rsi-signup-referral-code-field.jpg"
                  alt="The RSI sign-up form with a red arrow pointing to the referral panel showing code STAR-GCQJ-N6NC applied"
                  width={1200}
                  height={1069}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  A filled-in sign-up form. The referral panel on the left confirms the code.
                </figcaption>
              </figure>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Forgot to add it? The 24-hour window
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                RSI added a 24-hour grace period after account creation. If you forget the code, you
                still have a full day to add it in your account settings. After that window it
                cannot be added, so do it today.{' '}
                <SourceLink href={REFERRAL_PROGRAM}>Official RSI Referral Program</SourceLink>
              </p>
              <p>
                A code cannot be swapped once it is applied. If you signed up without one, are past
                the window and have not bought anything, RSI support can close that account so you
                can register again with a code.{' '}
                <SourceLink href={REFERRAL_FAQ}>Official RSI Referral Program FAQ</SourceLink>
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              &ldquo;Code invalid&rdquo; or no confirmation shown
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The first thing to check is a typo or a missing dash. The code is{' '}
                <strong className="text-starwhite">STAR-GCQJ-N6NC</strong>. Copy and paste it with
                the button above, or use the enlist link so the field is already filled in.
              </p>
              <p>
                If the panel shows an error or no confirmation, reload the enlist page and try
                again. If it still fails, contact RSI support. I have not found an official list of
                error causes, so I will not guess at more here.
              </p>
              <p>
                A code is meant for a new account. If you already have an account that is more than
                a day old, RSI&rsquo;s page does not describe a way to add one.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">When the 50,000 UEC appears</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Using a code ties a{' '}
                <strong className="text-starwhite">
                  50,000 <Term name="UEC">UEC</Term> bonus
                </strong>{' '}
                to your new account. RSI describes this two ways. The{' '}
                <SourceLink href={REFERRAL_FAQ}>Official RSI Referral Program FAQ</SourceLink> says
                the bonus is added automatically when you register with a personal code, with a
                delay if you add the code later. The{' '}
                <SourceLink href={SITE.referralUrl}>Official RSI enlist page</SourceLink> describes
                the same UEC as currency you earn after buying a game package.
              </p>
              <p>
                In plain terms, the bonus is tied to your account when you sign up with the code,
                and you need a game package to actually play Star Citizen and spend it. If you added
                the code late, give it some time before you worry.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">What a referral code does not do</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                It is not a coupon. It does not lower the price of a game package. RSI&rsquo;s
                official program pages describe only the referral bonus, and I found no official
                discount code for game packages. The{' '}
                <Link href="/beyond-the-basics/redeem-codes" className={link}>
                  redeem codes guide
                </Link>{' '}
                covers gift codes, event promo codes and the fake code lists.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              {FAQ.map((f) => (
                <div key={f.q} className="card-surface rounded-lg border border-white/5 p-5">
                  <h3 className="mb-2 font-semibold text-starwhite">{f.q}</h3>
                  <p className="text-sm leading-relaxed text-starwhite/70">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-4 border-t border-white/10 pt-10">
            <div className="flex flex-wrap items-center gap-4">
              <CopyCode code={SITE.referralCode} trackingLabel="ReferralNotWorking-copy" />
              <CTAButton
                external
                href={SITE.referralUrl}
                trackingLabel="ReferralNotWorking-enlist"
                size="lg"
              >
                Sign up with the code applied
              </CTAButton>
            </div>
            <p className="text-sm text-starwhite/75">
              Join with this code and buy the First Flight Pack, and I will send you the Aurora Mk II
              Cloudbuster paint as a personal gift.{' '}
              <Link href="/referral-code#welcome-gift" className={link}>
                How to claim it
              </Link>
              .
            </p>
          </div>

          <nav className="text-sm">
            <Link href="/referral-code" className="inline-flex items-center gap-2 text-muted hover:text-gold">
              <ArrowLeft size={14} aria-hidden /> Full referral code guide
            </Link>
          </nav>
        </div>

        <PageSources route={ROUTE} />
      </main>
      <Footer />
    </>
  )
}
