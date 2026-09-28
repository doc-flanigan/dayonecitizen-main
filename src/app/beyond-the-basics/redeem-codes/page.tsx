import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import PageSources from '@/components/PageSources'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'

export const metadata: Metadata = {
  title: 'Star Citizen Redeem Codes: Gifts & Promos (2026)',
  description:
    'How to redeem Star Citizen gift codes and event promo codes from CIG giveaways: where to enter each one, and how to spot the fake code lists.',
  alternates: { canonical: '/beyond-the-basics/redeem-codes' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Star Citizen Redeem Codes: Gifts & Promos (2026)',
    description:
      'How to redeem Star Citizen gift codes and event promo codes from CIG giveaways: where to enter each one, and how to spot the fake code lists.',
    url: '/beyond-the-basics/redeem-codes',
  },
}

// FAQPage structured data — mirrors the FAQ section below so this page can
// earn rich results for "star citizen redeem codes" questions. Referral
// questions point to /referral-code instead of answering in full there.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is a referral code the same as a redeem code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. A referral code is entered once, at account signup, and ties a 50,000 UEC bonus to your account. See dayonecitizen.com/referral-code for the code and a step-by-step walkthrough with screenshots. Redeem codes on this page cover gifts and event promotions instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do free Star Citizen aUEC codes work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. There is no in-game aUEC redemption code system. aUEC is earned by playing missions, hauling cargo, or selling salvage. Any list promising free aUEC codes is fake.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there Star Citizen codes for free ships?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Permanent free ships are only given out at live CIG events like Bar Citizen meetups or CitizenCon. There are no promo codes that grant a permanent free ship.',
      },
    },
  ],
}

export default function RedeemCodesPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy min-h-screen">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Beyond the Basics', url: '/beyond-the-basics' },
          { name: 'Redeem Codes', url: '/beyond-the-basics/redeem-codes' },
        ]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {/* Hero */}
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-12 pt-32 sm:pt-40">
          <div className="container-narrow">
            <Link
              href="/beyond-the-basics"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-gold"
            >
              <ArrowLeft size={12} aria-hidden /> Beyond the Basics
            </Link>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Star Citizen Redeem Codes (2026)
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              Redeem codes in Star Citizen mostly cover two things: a game
              package gifted to you by someone else, and promotional codes CIG
              hands out during events like Free Fly weeks. Both are entered in
              your account settings after you already have an RSI account.
            </p>
          </div>
        </header>

        {/* Content */}
        <section className="py-14">
          <div className="container-wide px-4 max-w-3xl">

            <p className="text-starwhite/80 mb-6 leading-relaxed">
              Star Citizen does not hand out redeem codes the way a free mobile game
              does. The codes that actually unlock something fall into two buckets:
              a gift code for a package someone bought you, or a promo code{' '}
              <Term name="CIG">CIG</Term>, the company making the game, releases
              around an event. Most &ldquo;working free Star Citizen codes&rdquo;
              lists you find in search results are recycled or fake. Use this page
              as your sanity check.
            </p>

            {/* Referral code callout */}
            <div className="card-surface rounded-xl border border-gold/30 p-6 mb-8">
              <p className="text-starwhite/90 mb-1">
                <strong className="text-gold">Looking for a referral code?</strong>
              </p>
              <p className="text-starwhite/80 mb-4 leading-relaxed">
                That is a different kind of code, entered once at signup.{' '}
                <strong className="text-starwhite">
                  Star Citizen referral code: STAR-GCQJ-N6NC
                </strong>{' '}
                — get the full step-by-step walkthrough with screenshots.
              </p>
              <Link
                href="/referral-code"
                className="inline-flex items-center gap-1.5 text-gold underline-offset-4 hover:underline font-semibold"
              >
                Go to the referral code guide →
              </Link>
            </div>

            {/* Gift vs promo */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Gift codes vs. promo codes
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              <strong className="text-starwhite">Gift codes</strong> come from a
              game package someone else bought for you. RSI emails the code to the
              recipient, who applies it to their own RSI account through their
              account settings to add the package.
            </p>
            <p className="text-starwhite/80 mb-8 leading-relaxed">
              <strong className="text-starwhite">Promo codes</strong> are
              different. CIG issues these occasionally during events, entered
              under{' '}
              <strong className="text-starwhite">
                RSI Account &rarr; Settings &rarr; Apply a Promotional Code
              </strong>
              . Invictus Launch Week — the game&apos;s yearly fleet celebration
              each May — is the event most likely to carry one.
            </p>

            <p className="text-muted text-sm mb-8">
              Looking for a Pirate Week 2026 code? The{' '}
              <a
                href="https://robertsspaceindustries.com/en/comm-link/transmission/21285-Pirate-Week-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline-offset-4 hover:underline"
              >
                official RSI blog post
              </a>{' '}
              for Pirate Week, which began September 9, 2026, lists themed starter
              packs, paint schemes and pirate gear. It does not include a redeem
              code. Promo and event codes will be added here as RSI announces them. Found
              a code somewhere else? Paste it into RSI Account &rarr; Settings
              &rarr; Apply a Promotional Code — the website tells you immediately
              whether it is valid.
            </p>

            {/* Fake code lists */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              &ldquo;Free code&rdquo; lists are usually fake
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Search results for &ldquo;star citizen redeem codes&rdquo; often
              surface long lists of random letter-and-number strings. They claim to
              grant free ships or millions of UEC. They do not work. Star Citizen
              has never had a daily code giveaway like some online games run. The
              two reliable ways to earn rewards are:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">The referral programme.</strong>{' '}
                Enter a code at signup to tie 50,000 UEC to your new account, then
                refer your own friends once you are in. See our{' '}
                <Link href="/referral-code" className="text-gold hover:underline">
                  referral code guide
                </Link>{' '}
                for the full walkthrough.
              </li>
              <li>
                <strong className="text-starwhite">
                  <Term name="Free Fly">Free Fly</Term> events.
                </strong>{' '}
                CIG runs several free-play weeks per year, where promo codes unlock
                the full game and a rotating set of ships to try. The most reliable
                one runs during Invictus Launch Week each May. Our{' '}
                <Link href="/free-fly-events" className="text-gold hover:underline">
                  Free Fly events page
                </Link>{' '}
                tracks when the next one starts.
              </li>
            </ul>

            {/* FAQ */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Frequently asked questions
            </h2>

            <h3 className="font-display text-lg font-bold text-starwhite mt-8 mb-3">
              Is a referral code the same as a redeem code?
            </h3>
            <p className="text-starwhite/80 mb-6 leading-relaxed">
              No. A referral code is entered once, at account signup, and ties a{' '}
              50,000 UEC bonus to your account.{' '}
              <Link href="/referral-code" className="text-gold hover:underline">
                See the referral code guide
              </Link>{' '}
              for the code and a step-by-step walkthrough with screenshots.
              Redeem codes on this page cover gifts and event promotions instead.
            </p>

            <h3 className="font-display text-lg font-bold text-starwhite mt-8 mb-3">
              Do &ldquo;free aUEC codes&rdquo; actually work?
            </h3>
            <p className="text-starwhite/80 mb-6 leading-relaxed">
              No. There is no code system for <Term name="aUEC">aUEC</Term>, the
              temporary money you earn inside the current test universe. You earn
              aUEC by flying missions, hauling cargo, or selling salvage. Any list
              promising &ldquo;free aUEC codes&rdquo; is fake. The legitimate signup
              credit is paid in UEC, not aUEC.
            </p>

            <h3 className="font-display text-lg font-bold text-starwhite mt-8 mb-3">
              Are there codes for free ships?
            </h3>
            <p className="text-starwhite/80 mb-8 leading-relaxed">
              Permanent free ships are only given out at live CIG events. Think Bar
              Citizen — the community&apos;s name for an in-person meet-up — or
              CitizenCon, the game&apos;s yearly convention. There are no promo
              codes that grant a permanent free ship.
            </p>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/free-fly-events"
                  className="text-gold hover:underline text-sm"
                >
                  Related: Free Fly Events &rarr;
                </Link>
                <Link
                  href="/beyond-the-basics"
                  className="text-muted hover:text-starwhite text-sm transition-colors"
                >
                  &larr; All guides
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-navyLight border-t border-white/5">
          <div className="container-wide px-4 text-center">
            <p className="text-muted mb-6 max-w-md mx-auto">
              New here? Use the referral code and start with fifty thousand
              bonus credits tied to your account.
            </p>
            <CTAButton
              href="/referral-code"
              trackingLabel="beyond-basics-redeem-codes-bottom"
              size="lg"
            >
              Get the referral code
            </CTAButton>
          </div>
        </section>
      </main>
      <PageSources route="/beyond-the-basics/redeem-codes" />
      <Footer />
    </>
  )
}
