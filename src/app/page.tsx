import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight, Rocket, Coins, Globe2 } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import PageSources from '@/components/PageSources'
import HeroCarousel from '@/components/HeroCarousel'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: {
    absolute:
      'Star Citizen New Player Guide — Plain English, No Jargon',
  },
  description:
    'Star Citizen guide for brand-new players. 12 step-by-step guides: system requirements, buying, installing, keybinds, navigation, and your first flight.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Star Citizen New Player Guide — Plain English, No Jargon',
    description:
      '12 step-by-step guides for brand-new Star Citizen players — from system requirements to your first quantum jump. No jargon, no gatekeeping.',
    url: '/',
    type: 'website',
  },
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
      href: '/glossary#term-the-verse',
      cta: 'Learn the basics',
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
      href: '/glossary#term-the-verse',
      cta: 'Read more',
    },
    {
      icon: Coins,
      title: 'What is UEC?',
      body: (
        <>
          <Term name="UEC">United Earth Credits</Term> — the in-game money. New
          accounts that use a <Term name="Referral Code">referral code</Term>{' '}
          start with 50,000 <Term name="UEC">UEC</Term> free, enough to buy
          gear and your first weapons.
        </>
      ),
      href: '/glossary#term-uec',
      cta: 'See currency terms',
    },
  ]

  return (
    <>
      <NavBar />
      <main>
        <HeroCarousel
          title={
            <>
              Star Citizen — <span className="text-gold-gradient">No Jargon. No Fluff.</span>
              <br className="hidden sm:block" /> Just the &lsquo;Verse, plain and simple.
            </>
          }
          subtitle="A new-player guide to the most ambitious space sim ever made — written by a veteran backer for someone who has never even seen the game."
          height="full"
        />

        {/* Section 2: Start Here */}
        <section
          id="start-here"
          className="relative border-t border-white/5 bg-starfield py-20 sm:py-28"
        >
          <div className="glow-horizon absolute inset-x-0 top-0 h-40" aria-hidden />
          <div className="container-wide relative">
            <div className="mb-14 max-w-2xl">
              <p className="eyebrow mb-4">Start Here</p>
              <h2 className="heading-display text-3xl sm:text-5xl">
                New to the &lsquo;Verse?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Three questions every new Star Citizen player asks first. Plain
                English. No 200-page wiki rabbit hole.
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
                difference between buying your first decent armor set and
                grinding for two evenings. The code below is mine — no extra
                cost to you.
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
              <CTAButton size="lg" trackingLabel="home-bottom-cta">
                Start with 50K UEC
              </CTAButton>
              <span className="text-center text-xs text-muted">
                Opens rsi.com in a new tab
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
