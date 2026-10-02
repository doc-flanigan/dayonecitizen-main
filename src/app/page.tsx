import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import Image from 'next/image'
import { ArrowRight, Rocket, Coins, Globe2, Check, X } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import PageSources from '@/components/PageSources'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import { HERO_IMAGES, SITE } from '@/lib/site'
import { DAY_ONE_STEPS, HOME_PATH_SLUGS } from '@/data/day-one-steps'

// One still image, not a carousel: the hero's only job is to hand a new
// visitor to the guide. (The 18-slide carousel was retired 2026-10-02.)
const HERO = HERO_IMAGES[0]

const HOME_PATH = HOME_PATH_SLUGS.map(
  (slug) => DAY_ONE_STEPS.find((s) => s.slug === slug)!,
)

const primaryButton =
  'btn-sheen group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#ffd27a] via-gold to-goldDark px-8 py-4 font-display text-lg font-bold tracking-wide text-navy shadow-[0_10px_34px_-12px_rgba(245,185,66,0.65),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-300 ease-spring hover:-translate-y-0.5 hover:from-[#ffdd96] hover:via-[#ffc95c] hover:shadow-[0_14px_44px_-12px_rgba(245,185,66,0.9),inset_0_1px_0_rgba(255,255,255,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy'

export const metadata: Metadata = {
  title: {
    absolute:
      'Star Citizen New Player Guide — Plain English, No Jargon',
  },
  description:
    'Star Citizen guide for brand-new players. 12 step-by-step guides: system requirements, buying, installing, keybinds, navigation, and your first flight.',
  alternates: { canonical: '/' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Star Citizen New Player Guide — Plain English, No Jargon',
    description:
      '12 step-by-step guides for brand-new Star Citizen players — from system requirements to your first quantum jump. No jargon, no gatekeeping.',
    url: '/',
    type: 'website',
  },
}

// FAQPage structured data — mirrors the visible "three questions" cards so
// this page can earn rich results and AI answer-engine citations.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An always-online sci-fi sandbox built by Cloud Imperium Games. Pilot ships, explore planets, trade, fight, mine, and salvage — all in one persistent universe. Star Citizen is the highest-funded game in history, having raised over $1 billion through crowdfunding.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the ’Verse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Slang for the Star Citizen universe — the lore, the in-game world, and the community combined. When someone says “see you in the ’Verse,” they mean it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is UEC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'United Earth Credits — the in-game money in Star Citizen. New accounts that use a referral code start with 50,000 UEC free, enough to buy gear and your first weapons.',
      },
    },
  ],
}

type StartHereCard = {
  icon: typeof Rocket
  title: string
  body: ReactNode
  href: string
  cta: string
}

export default function Home() {
  const startHere: StartHereCard[] = [
    {
      icon: Rocket,
      title: 'What is Star Citizen?',
      body: (
        <>
          An always-online sci-fi sandbox built by{' '}
          <Term name="CIG">Cloud Imperium Games</Term>. Pilot ships, explore
          planets, trade, fight, <Term name="Mining">mine</Term>,{' '}
          <Term name="Salvage">salvage</Term> — all in one persistent universe.
          {' '}Star Citizen is{' '}
          <a
            href="https://robertsspaceindustries.com/en/funding-goals"
            className="text-gold underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener"
          >
            the highest-funded game in history
          </a>
          , having raised over $1 billion through crowdfunding — the most funded project of any kind, ever.
        </>
      ),
      href: '/day-one-citizen/worth-buying',
      cta: 'Is it worth buying?',
    },
    {
      icon: Globe2,
      title: "What's the 'Verse?",
      body: (
        <>
          Slang for the Star Citizen universe — the lore, the in-game world,
          and the community combined. When someone says &lsquo;see you in{' '}
          <Term name="the 'Verse">the &lsquo;Verse</Term>,&rsquo; they mean it.
        </>
      ),
      href: '/day-one-citizen/first-day',
      cta: 'What your first day looks like',
    },
    {
      icon: Coins,
      title: 'What is UEC?',
      body: (
        <>
          <Term name="UEC">United Earth Credits</Term> — the in-game money. New
          accounts that use a <Term name="Referral Code">referral code</Term>{' '}
          start with 50,000 UEC free, enough to buy
          gear and your first weapons.
        </>
      ),
      href: '/referral-code',
      cta: 'How to start with 50,000 UEC',
    },
  ]

  return (
    <>
      <NavBar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {/* Hero — one image, one sentence, one button */}
        <section className="relative w-full overflow-hidden bg-navy">
          <Image
            src={HERO.src}
            alt={HERO.alt}
            fill
            priority
            sizes="100vw"
            className="animate-slow-pan object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/25" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/25 to-transparent" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent" aria-hidden />

          <div className="container-wide relative z-10 flex min-h-[78vh] flex-col justify-end pb-16 pt-32 sm:pb-24 sm:pt-40 lg:min-h-[84vh]">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-lg border border-gold/35 bg-navy/70 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.28em] text-gold backdrop-blur-sm">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-aurora shadow-[0_0_8px_rgba(111,227,193,0.9)]" aria-hidden />
                New-player guide
              </p>
              <h1 className="heading-display text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
                Star Citizen — <span className="text-gold-gradient">No Jargon. No Fluff.</span>
                <br className="hidden sm:block" /> Just the game, plain and simple.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-starwhite/85 sm:text-lg">
                Twelve short steps from &ldquo;should I buy this?&rdquo; to your
                first flight. Written by a veteran player for someone who has
                never seen the game.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link href="/day-one-citizen" className={primaryButton}>
                  Start here: the Day One guide
                  <ArrowRight
                    size={20}
                    aria-hidden
                    className="transition-transform duration-300 ease-spring group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/referral-code"
                  className="text-sm font-medium text-starwhite/80 underline-offset-4 hover:text-gold hover:underline"
                >
                  Already decided? Get the 50,000 UEC sign-up code
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Decide — section 01's short answer, on the homepage */}
        <section className="relative border-t border-white/5 bg-navy py-16 sm:py-20">
          <div className="container-wide grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:items-center">
            <div>
              <p className="eyebrow mb-4">The first question</p>
              <h2 className="heading-display text-3xl sm:text-4xl">
                Is Star Citizen worth buying?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                The honest short answer from section 01 of the guide. Not a
                sales pitch.
              </p>
            </div>
            <div className="card-surface p-7 sm:p-8">
              <ul className="space-y-4 text-base leading-relaxed text-starwhite/90">
                <li className="flex gap-3">
                  <Check size={20} aria-hidden className="mt-1 shrink-0 text-aurora" />
                  <span>
                    <strong className="text-starwhite">Yes, at the entry price,</strong>{' '}
                    if you enjoy open-world space sims and can put up with
                    unfinished software. No other game does what it does at
                    its scale.
                  </span>
                </li>
                <li className="flex gap-3">
                  <X size={20} aria-hidden className="mt-1 shrink-0 text-ember" />
                  <span>
                    <strong className="text-starwhite">No,</strong> if you
                    expect a finished game. It is still an alpha — an early,
                    unfinished test version — and has been since 2012.
                  </span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5 font-mono text-sm font-bold">
                <Link
                  href="/day-one-citizen/worth-buying"
                  className="inline-flex items-center gap-1.5 text-gold hover:text-ember"
                >
                  Read the full answer <ArrowRight size={14} aria-hidden />
                </Link>
                <Link
                  href="/free-fly-events"
                  className="inline-flex items-center gap-1.5 text-gold hover:text-ember"
                >
                  Or try it free first <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Start Here — six steps from curious to flying */}
        <section
          id="start-here"
          className="relative scroll-mt-24 border-t border-white/5 bg-starfield py-20 sm:py-28"
        >
          <div className="glow-horizon absolute inset-x-0 top-0 h-40" aria-hidden />
          <div className="container-wide relative">
            <div className="mb-12 max-w-2xl">
              <Link href="/day-one-citizen" className="eyebrow mb-4 hover:text-ember">
                Start Here
              </Link>
              <h2 className="heading-display text-3xl sm:text-5xl">
                Six steps from curious to flying.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                The short version of the Day One guide. Each step opens a full
                section with screenshots and sources.
              </p>
            </div>

            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {HOME_PATH.map((step, i) => (
                <li key={step.slug}>
                  <Link
                    href={`/day-one-citizen/${step.slug}`}
                    className="card-surface group flex h-full flex-col p-6 transition-all duration-300 ease-spring hover:-translate-y-1 hover:ring-gold"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-navy font-mono text-sm font-bold text-gold shadow-[0_0_20px_-6px_rgba(245,185,66,0.6)]">
                        {i + 1}
                      </span>
                      <h3 className="heading-display text-lg transition-colors group-hover:text-gold">
                        {step.short}
                      </h3>
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-starwhite/80">
                      {step.action}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs font-bold text-gold">
                      Section {step.number}
                      <ArrowRight
                        size={13}
                        aria-hidden
                        className="transition-transform duration-300 ease-spring group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ol>

            <p className="mt-10 text-sm text-muted">
              Want every step?{' '}
              <Link
                href="/day-one-citizen"
                className="font-semibold text-gold underline-offset-4 hover:underline"
              >
                See all twelve sections of the Day One guide
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Three questions — mirrors the FAQ JSON-LD above */}
        <section className="relative border-t border-white/5 bg-navy py-20 sm:py-24">
          <div className="container-wide relative">
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">New to the game?</p>
              <h2 className="heading-display text-3xl sm:text-4xl">
                Three questions every new player asks.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Plain English. No 200-page wiki rabbit hole.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {startHere.map(({ icon: Icon, title, body, href, cta }) => (
                <article
                  key={title}
                  className="card-surface group flex flex-col p-7 transition-all duration-300 ease-spring hover:-translate-y-1.5 hover:ring-gold"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/25 to-ember/10 text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-transform duration-300 ease-spring group-hover:scale-110">
                    <Icon size={22} aria-hidden />
                  </div>
                  <h3 className="heading-display text-xl">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-starwhite/85">
                    {body}
                  </p>
                  <Link
                    href={href}
                    className="mt-6 inline-flex items-center gap-1.5 font-mono text-sm font-bold text-gold transition-colors hover:text-ember"
                  >
                    {cta}{' '}
                    <ArrowRight
                      size={14}
                      aria-hidden
                      className="transition-transform duration-300 ease-spring group-hover:translate-x-1"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Referral CTA banner */}
        <section className="relative overflow-hidden border-t border-gold/15 bg-gradient-to-b from-navyLight/70 to-navy py-20 sm:py-24">
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
            aria-hidden
          />
          <div className="glow-horizon absolute inset-x-0 top-0 h-48" aria-hidden />
          <div className="container-wide relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="md:max-w-2xl">
              <p className="eyebrow mb-4">Ready to jump in?</p>
              <h2 className="heading-display text-3xl sm:text-4xl">
                Use a referral code. Start with{' '}
                <span className="text-gold-gradient">{SITE.referralBonusUEC}</span>{' '}
                free.
              </h2>
              <p className="mt-4 text-base text-muted">
                Every new account that uses a{' '}
                <Term name="Referral Code">referral code</Term> gets a 50,000{' '}
                <Term name="UEC">UEC</Term> bonus on day one. It&rsquo;s the
                difference between buying your first decent armor set on day
                one and earning it over two evenings. The code below is mine
                — no extra cost to you.
              </p>
              <p className="mt-4 inline-block rounded-lg border border-gold/30 bg-navy/70 px-4 py-2 font-mono text-sm font-bold tracking-widest text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                {SITE.referralCode}
              </p>
              <p className="mt-3 text-sm text-muted">
                <Link
                  href="/referral-code"
                  className="text-gold underline-offset-4 hover:underline"
                >
                  How to use the referral code &amp; claim your 50,000 UEC
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {/* Self-qualifying label, so it may link straight to RSI's
                  enlist page with the code applied (CLAUDE.md destination
                  rule). Bare "50K" labels still go to /referral-code. */}
              <CTAButton size="lg" href={SITE.referralUrl} trackingLabel="home-bottom-cta">
                Enlist with my code
              </CTAButton>
              <span className="text-center text-xs text-muted">
                New accounts only. Opens rsi.com in a new tab, code applied.
              </span>
            </div>
          </div>
        </section>
      </main>
      <PageSources route="/" />
      <Footer />
    </>
  )
}
