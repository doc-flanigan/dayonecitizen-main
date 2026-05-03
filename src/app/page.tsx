import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight, Rocket, Coins, Globe2 } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import HeroCarousel from '@/components/HeroCarousel'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import { SITE } from '@/lib/site'

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
          className="border-t border-white/5 bg-navy py-20 sm:py-28"
        >
          <div className="container-wide">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Start Here
              </p>
              <h2 className="heading-display text-3xl sm:text-4xl">
                New to the &lsquo;Verse?
              </h2>
              <p className="mt-4 text-base text-muted">
                Three questions every new Star Citizen player asks first. Plain
                English. No 200-page wiki rabbit hole.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {startHere.map(({ icon: Icon, title, body, href, cta }) => (
                <article
                  key={title}
                  className="card-surface group flex flex-col p-7 transition-all hover:-translate-y-1 hover:border-gold/40 hover:ring-gold"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Icon size={22} aria-hidden />
                  </div>
                  <h3 className="heading-display text-xl">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-starwhite/85">
                    {body}
                  </p>
                  <Link
                    href={href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-goldDark"
                  >
                    {cta} <ArrowRight size={14} aria-hidden />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Referral CTA banner */}
        <section className="border-t border-white/5 bg-gradient-to-r from-navyLight via-navyLight/80 to-navy py-20 sm:py-24">
          <div className="container-wide flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="md:max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Ready to jump in?
              </p>
              <h2 className="heading-display text-3xl sm:text-4xl">
                Use a referral code. Start with{' '}
                <span className="text-gold-gradient">{SITE.ueecBonus}</span>{' '}
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
              <p className="mt-2 font-mono text-sm text-gold">
                {SITE.referralCode}
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
      <Footer />
    </>
  )
}
