import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import PageSources from '@/components/PageSources'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'

const REFERRAL_URL =
  'https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC'

export const metadata: Metadata = {
  title: 'Star Citizen Redeem Codes 2026 — Referral Code & Rewards',
  description:
    'Referral codes give new Star Citizen accounts 50,000 UEC. Promo codes come from CIG events. Where to enter each one — and how to spot the fake code lists.',
  alternates: { canonical: '/beyond-the-basics/redeem-codes' },
  openGraph: {
    title: 'Star Citizen Redeem Codes 2026 — Referral Code & Rewards',
    description:
      'Referral codes give new Star Citizen accounts 50,000 UEC. Promo codes come from CIG events. Where to enter each one — and how to spot the fake code lists.',
    url: '/beyond-the-basics/redeem-codes',
  },
}

// FAQPage structured data — mirrors the FAQ section below so this page can
// earn rich results for "star citizen redeem codes" questions.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I apply a Star Citizen referral code after I already made my account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — you have up to 24 hours after creating your account to apply a referral code. After that window closes, it cannot be added retroactively.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I get with the Star Citizen referral code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '50,000 UEC applied to your account at the time of account creation.',
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
              Star Citizen has two real kinds of codes. A referral code, entered when
              you create your RSI account, gives your new account 50,000 UEC in
              starting money. CIG also releases occasional promo codes during events
              like Free Fly weeks, entered in your account settings after signup.
            </p>
          </div>
        </header>

        {/* Content */}
        <section className="py-14">
          <div className="container-wide px-4 max-w-3xl">

            <p className="text-starwhite/80 mb-6 leading-relaxed">
              Star Citizen does not hand out redeem codes the way a free mobile game
              does. The codes that actually unlock something fall into two buckets.
              A <Term name="Referral Code">referral code</Term> rewards you for
              signing up with a friend&apos;s code — and rewards the friend too.
              Promo codes appear occasionally around events run by{' '}
              <Term name="CIG">CIG</Term>, the company making the game. Most
              &ldquo;working free Star Citizen codes&rdquo; lists you find in search
              results are recycled or fake. Use this page as your sanity check.
            </p>

            {/* Referral code box */}
            <div className="card-surface rounded-xl border border-gold/30 p-6 mb-4">
              <p className="text-starwhite/90 mb-2">
                <strong className="text-gold">Active referral code:</strong>{' '}
                <code className="bg-navyLight px-1.5 py-0.5 rounded text-sm text-gold">
                  STAR-GCQJ-N6NC
                </code>
              </p>
              <p className="text-starwhite/90 mb-2">
                <strong className="text-gold">Reward:</strong> 50,000{' '}
                <Term name="UEC">UEC</Term> in starter credits, plus entry into{' '}
                <Term name="RSI">RSI</Term>&apos;s referral reward tiers.
              </p>
              <p className="text-starwhite/90 mb-5">
                <strong className="text-gold">Where to use it:</strong> the
                &ldquo;Referral Code&rdquo; field on the RSI signup form when you
                create your account — or use the button below, which fills it in
                for you.
              </p>
              <CTAButton
                href={REFERRAL_URL}
                trackingLabel="beyond-basics-redeem-codes-box"
              >
                Sign up with the code
              </CTAButton>
            </div>
            <p className="text-muted text-sm mb-8">
              Disclosure: STAR-GCQJ-N6NC is this site&apos;s referral code. Using it
              costs you nothing and gives us credit toward RSI&apos;s referral
              rewards.
            </p>

            {/* Referral vs promo */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Referral codes vs. promo codes
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              <strong className="text-starwhite">Referral codes</strong> — like{' '}
              <code className="bg-navyLight px-1.5 py-0.5 rounded text-xs text-gold">
                STAR-GCQJ-N6NC
              </code>{' '}
              — go in the <strong className="text-starwhite">Referral Code</strong>{' '}
              field on the RSI signup form when you create your account. You can
              apply one at signup or within twenty-four hours of creating the
              account. After that, the window closes for good.
            </p>
            <p className="text-starwhite/80 mb-8 leading-relaxed">
              <strong className="text-starwhite">Promo codes</strong> are different.
              They are entered after signup, under{' '}
              <strong className="text-starwhite">
                RSI Account &rarr; Settings &rarr; Apply a Promotional Code
              </strong>
              . CIG issues these occasionally during events like Invictus Launch
              Week — the game&apos;s yearly fleet celebration each May.
            </p>

            {/* Active codes */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Active codes right now
            </h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-muted uppercase tracking-wider text-xs">
                    <th className="py-3 pr-4">Code</th>
                    <th className="py-3 pr-4">Type</th>
                    <th className="py-3 pr-4">Reward</th>
                    <th className="py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5 text-starwhite/80">
                    <td className="py-3 pr-4">
                      <code className="bg-navyLight px-1.5 py-0.5 rounded text-xs text-gold">
                        STAR-GCQJ-N6NC
                      </code>
                    </td>
                    <td className="py-3 pr-4">Referral</td>
                    <td className="py-3 pr-4">50,000 UEC + referral tier credit</td>
                    <td className="py-3 text-green-400">Active</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted text-sm mb-8">
              Promo and event codes will be added here as RSI announces them. Found
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
                Use a referral code at signup, then refer your own friends once you
                are in. RSI&apos;s official referral tier list grants flyable ships,
                paint finishes, and even capital-ship rewards at the top milestones.
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
              Can I apply a referral code after I already made my account?
            </h3>
            <p className="text-starwhite/80 mb-6 leading-relaxed">
              Yes — you have up to twenty-four hours after creating your account to
              apply one. After that window closes, it cannot be added later.
            </p>

            <h3 className="font-display text-lg font-bold text-starwhite mt-8 mb-3">
              What do I get with the referral code?
            </h3>
            <p className="text-starwhite/80 mb-6 leading-relaxed">
              50,000 UEC, applied to your account at the time of account creation.
              UEC is the game&apos;s real spending money — enough for armor, food
              supplies, and your first few missions.
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
              Ready to create your account? Use the referral code above and start
              with fifty thousand bonus credits.
            </p>
            <CTAButton
              href={REFERRAL_URL}
              trackingLabel="beyond-basics-redeem-codes-bottom"
              size="lg"
            >
              Claim your 50,000 UEC
            </CTAButton>
          </div>
        </section>
      </main>
      <PageSources route="/beyond-the-basics/redeem-codes" />
      <Footer />
    </>
  )
}
