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
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import PageSources from '@/components/PageSources'
import { SITE } from '@/lib/site'

const REFERRAL_FAQ =
  'https://support.robertsspaceindustries.com/hc/en-us/articles/115013102847-Referral-Program-FAQ'
const REFERRAL_PROGRAM = 'https://robertsspaceindustries.com/en/referral-program'

export const metadata: Metadata = {
  title: 'Star Citizen Referral Code 2026 — STAR-GCQJ-N6NC for 50,000 UEC Free',
  description:
    "Use Star Citizen referral code STAR-GCQJ-N6NC when you create your RSI account to get a free 50,000 UEC bonus. Here's the code and exactly where to enter it.",
  alternates: { canonical: '/referral-code' },
  openGraph: {
    title: 'Star Citizen Referral Code — STAR-GCQJ-N6NC (50,000 UEC Free)',
    description:
      'The Star Citizen referral code is STAR-GCQJ-N6NC. Enter it when you create your free RSI account to start with a 50,000 UEC bonus. No purchase required.',
    url: '/referral-code',
    type: 'article',
  },
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
        text: 'The Star Citizen referral code is STAR-GCQJ-N6NC. Enter it in the Referral Code field when you create your RSI account to receive a 50,000 UEC bonus.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Star Citizen referral bonus free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The 50,000 UEC bonus is credited when you create a free RSI account with a referral code. No purchase is required to receive it, and it stays on your account permanently.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do I enter the referral code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enter the code during account signup, in the Referral Code field. If you miss it, you can still add it in your account settings within about 24 hours of creating the account — but not after that window.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I add a referral code after making my account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only within roughly 24 hours of creating the account, through your account settings. After that window the code can no longer be applied, so it is best to enter it at signup.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much is the Star Citizen referral bonus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The bonus is 50,000 UEC — the persistent United Earth Credits used in the game — added to your account when you enlist with a referral code.',
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
              <Term name="RSI">RSI</Term> account to get a{' '}
              <Term name="UEC">50,000 UEC</Term> bonus — no purchase required.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <CopyCode code={SITE.referralCode} />
              <CTAButton
                external
                href={SITE.referralUrl}
                trackingLabel="referral-code-hero"
                size="lg"
              >
                Use my code &amp; get 50K UEC
              </CTAButton>
            </div>
            <p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted">
              This is a referral link. When you enlist with this code you get the
              full 50,000 UEC bonus; the referrer may earn a small reward too. Your
              bonus is never reduced.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Where to enter the code
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                On the RSI signup page there is a{' '}
                <strong className="text-starwhite">Referral Code</strong> field.
                Paste the code there and you will see a &ldquo;Referral code
                successfully applied&rdquo; confirmation, like this:
              </p>
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/referral/rsi-signup-referral-code-field.jpg"
                  alt="Star Citizen RSI signup form with the Referral Code field highlighted, showing code STAR-GCQJ-N6NC successfully applied."
                  width={1200}
                  height={1000}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  The Referral Code field on the RSI enlist page, with the code applied.
                </figcaption>
              </figure>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  Open the{' '}
                  <a
                    href={SITE.referralUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline-offset-4 hover:underline"
                  >
                    RSI enlist page
                  </a>{' '}
                  — this link fills the code in for you.
                </li>
                <li>Fill in your account name, email, and password.</li>
                <li>
                  Check the{' '}
                  <strong className="text-starwhite">Referral Code</strong> field
                  reads <strong className="text-starwhite">STAR-GCQJ-N6NC</strong>.
                </li>
                <li>
                  Confirm &ldquo;Referral code successfully applied&rdquo; appears,
                  then finish creating your account.
                </li>
              </ol>
              <p>
                Enter the code at signup if you can. If you forget, you can still
                add it in your account settings within about{' '}
                <strong className="text-starwhite">twenty-four hours</strong> — after
                that window it cannot be applied.{' '}
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
                Using a referral code when you enlist gives your new account a{' '}
                <strong className="text-starwhite">
                  50,000 <Term name="UEC">UEC</Term> bonus
                </strong>
                .{' '}
                <SourceLink href={REFERRAL_PROGRAM}>
                  Official RSI Referral Program
                </SourceLink>
              </p>
              <p>
                <strong className="text-starwhite">
                  You do not need to buy anything to get it.
                </strong>{' '}
                Creating a free account with the code is enough — the bonus is added
                right away and stays on your account permanently.{' '}
                <SourceLink href={REFERRAL_FAQ}>
                  Official RSI Referral Program FAQ
                </SourceLink>
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
                Here is the part people get wrong: your bonus does{' '}
                <strong className="text-starwhite">not</strong> depend on you spending
                money. A referrer only earns a separate &ldquo;Recruitment
                Point&rdquo; after the person they referred spends at least{' '}
                <strong className="text-starwhite">$40</strong> on a game package —
                and that reward is theirs, taken from nothing you receive. Your 50,000
                UEC is yours either way.{' '}
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
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  What is the Star Citizen referral code?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  It is <strong className="text-starwhite">STAR-GCQJ-N6NC</strong>.
                  Enter it in the Referral Code field when you make your RSI account
                  to get 50,000 UEC.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">Is it free?</h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Yes — the 50,000 UEC bonus lands on a free account. No purchase is
                  required, and the bonus stays on your account for good.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  When do I enter it?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  At signup, in the Referral Code field — or within about twenty-four
                  hours in your account settings. Not after that.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  How much is the bonus?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  50,000 UEC — the persistent United Earth Credits you spend in the
                  game.
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
