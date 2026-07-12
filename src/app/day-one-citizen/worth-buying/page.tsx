import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import { DiscordCTA } from '@/components/DiscordCTA'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import PageSources from '@/components/PageSources'

export const metadata: Metadata = {
  title: 'Is Star Citizen Worth Buying in 2026? — Day One Citizen',
  description:
    'Honest look at Star Citizen in 2026 — what you get today, what is still unfinished, and how to try the game free before spending anything.',
  alternates: { canonical: '/day-one-citizen/worth-buying' },
  openGraph: {
    title: 'Is Star Citizen Worth Buying in 2026?',
    description:
      'Honest assessment of Star Citizen in 2026 — what works, what is still unfinished, and how to try it free before you commit.',
    url: '/day-one-citizen/worth-buying',
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
      name: 'Is Star Citizen worth buying in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, at the entry price, if you enjoy open-world space simulators and can tolerate alpha software — no other game does what Star Citizen does at its scale. No, if you expect a finished, polished product that works reliably every session. The game has been in open development since 2012 and is still an alpha.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Star Citizen cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A starter Game Package costs from $45 on the RSI store. It is a one-time purchase with no subscription, and includes alpha access and a starter ship.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you try Star Citizen before buying it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Several times a year CIG runs Free Fly events, when anyone with a free RSI account can play the live game at no cost. Events typically run one to two weeks, usually around Invictus in May and IAE in November.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you lose your ships when Star Citizen wipes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Ships and anything else bought with real money are never wiped. Periodic wipes only reset earned in-game currency (aUEC), inventory items, and progress.',
      },
    },
  ],
}

export default function WorthBuyingPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Day One Citizen', url: '/day-one-citizen' },
          { name: 'Is It Worth Buying?', url: '/day-one-citizen/worth-buying' },
        ]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-12 pt-32 sm:pt-40">
          <div className="container-narrow">
            <Link
              href="/day-one-citizen"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-gold"
            >
              <ArrowLeft size={12} aria-hidden /> Day One Citizen
            </Link>
            <p className="mt-5 font-mono text-xs text-gold">Section 01</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Is Star Citizen worth buying?
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              An honest answer — not a sales pitch. What you are actually paying for today,
              what is still missing, and how to try the game for free before spending anything.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">The short answer</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <strong className="text-starwhite">Yes — at the entry price — if you
                enjoy open-world space sims and can tolerate alpha software. No — if
                you expect a finished game.</strong>
              </p>
              <p>
                If you enjoy open-world space simulators — the kind where you can mine asteroids,
                run cargo between planets, hunt bounties, crew a multi-person ship with friends, or
                just explore — Star Citizen is worth buying <em>at the entry price</em>. There is
                no other game that does what it does at the scale it does it.
              </p>
              <p>
                If you expect a finished, polished product that installs and works reliably every
                session, Star Citizen is not that. It is an alpha. It has been in alpha since 2012.
                That is the honest context every potential <Term name="Backer">backer</Term> deserves
                before handing over money.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">What you are actually paying for</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                When you buy a game package from{' '}
                <Term name="RSI">robertsspaceindustries.com</Term>, you receive three things:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">Access to the Star Citizen alpha</strong> — the
                  live{' '}
                  <Term name="PU">Persistent Universe</Term>, a shared online sandbox currently
                  set in the{' '}
                  <Term name="Stanton">Stanton</Term> and{' '}
                  <Term name="Pyro">Pyro</Term> star systems.
                </li>
                <li>
                  <strong className="text-starwhite">A starter ship</strong> — a physical ship in
                  your in-game{' '}
                  <Term name="Hangar">hangar</Term>, ready to fly the moment you log in.
                </li>
              </ul>
              <p>
                Calling it a <Term name="Pledge">pledge</Term> rather than a purchase is accurate:{' '}
                <Term name="CIG">Cloud Imperium Games</Term> is a crowdfunded studio. Your money
                funds development. You receive early access as a thank-you, not a finished game as
                a product.
              </p>
              <p>
                That one package is also the only required spend.{' '}
                <Link href="/day-one-citizen/ships-real-money" className="text-gold underline-offset-4 hover:underline">
                  Every other ship can be earned in-game
                </Link>{' '}
                — the expensive store listings are optional pledges, not a paywall.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">What works in the game today</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The{' '}
                <Term name="PU">Persistent Universe</Term> has been growing for over a decade.
                There is a meaningful amount of playable content right now:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">Missions</strong> — delivery contracts, data
                  courier runs, bounty hunting, assassination contracts, medical response, salvage
                  jobs, and more. These are how you earn{' '}
                  <Term name="aUEC">aUEC</Term>.
                </li>
                <li>
                  <strong className="text-starwhite">Mining</strong> —{' '}
                  <Term name="Mining">mining</Term> asteroids and surface deposits in dedicated
                  ships (like the Prospector or MOLE) is a fully developed gameplay loop with
                  real depth.
                </li>
                <li>
                  <strong className="text-starwhite">Salvage</strong> —{' '}
                  <Term name="Salvage">salvage</Term> operations let you strip wrecked ships for
                  components and materials. One of the newer gameplay pillars.
                </li>
                <li>
                  <strong className="text-starwhite">Cargo hauling</strong> — buy goods at one
                  station, transport{' '}
                  <Term name="Cargo">cargo</Term> to another, sell for profit. Works today.
                </li>
                <li>
                  <strong className="text-starwhite">Multi-crew ships</strong> — fly a capital ship
                  with friends. Some ships require two or more people to operate effectively. This
                  is where Star Citizen shines compared to anything else on the market.
                </li>
                <li>
                  <strong className="text-starwhite">First-person combat</strong> — on-foot{' '}
                  <Term name="FPS">FPS</Term> gameplay at bunkers, caves, and space stations.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">What to expect: the rough edges</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Being honest means covering the problems too. These are real and consistent:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">
                    <Term name="30k">30k errors</Term>
                  </strong>{' '}
                  — server crashes that disconnect everyone simultaneously. Named after the HTTP
                  status code that used to appear. They happen. You will lose some in-progress
                  work when they do.
                </li>
                <li>
                  <strong className="text-starwhite">Character and progress{' '}
                  <Term name="Wipe">wipes</Term></strong> — periodically,{' '}
                  <Term name="CIG">CIG</Term> resets all player{' '}
                  <Term name="aUEC">aUEC</Term>, inventory, and progress. Your ships and pledges
                  are never wiped — only earned in-game currency and items.
                </li>
                <li>
                  <strong className="text-starwhite">Bugs</strong> — this is alpha software. You
                  will encounter missions that do not complete correctly, physics glitches, and
                  the occasional invisible wall. Most bugs are inconvenient rather than game-breaking
                  on any given session.
                </li>
                <li>
                  <strong className="text-starwhite">Performance</strong> — Star Citizen is one of
                  the most demanding PC games ever built. Even high-end hardware will not always
                  hit 60 fps in dense cities. This improves with each major patch as{' '}
                  <Term name="Server Meshing">server meshing</Term> technology matures.
                </li>
                <li>
                  <strong className="text-starwhite">Missing features</strong> — many planned
                  systems (full economy, full crime stat, more star systems) are on the{' '}
                  <Term name="Roadmap">roadmap</Term> but not yet in the game.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Try before you buy</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The best way to know if Star Citizen is for you is to play it first. Several times
                a year, <Term name="CIG">CIG</Term> runs{' '}
                <Term name="Free Fly">Free Fly</Term> events — periods where anyone can create a
                free <Term name="RSI">RSI</Term> account and log into the{' '}
                <Term name="PU">PU</Term> without paying anything.
              </p>
              <p>
                Free Fly events typically run 10–14 days. You get access to a selection of{' '}
                <Term name="Loaner Ship">loaner ships</Term> and the full game. If you decide to
                buy during the event, your{' '}
                <Link href="/referral-code" className="text-gold underline-offset-4 hover:underline">
                  referral bonus
                </Link>{' '}
                carries over to your paid account.
              </p>
              <p>
                Check <Link href="/free-fly-events" className="text-gold underline-offset-4 hover:underline">
                  the current Free Fly schedule
                </Link>{' '}
                to see if one is active or upcoming before you spend anything.{' '}
                <a
                  href="https://freeflyevent.com"
                  className="text-gold underline-offset-4 hover:underline"
                >
                  freeflyevent.com
                </a>{' '}
                tracks the next event window and how to join, day by day.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Questions to ask yourself</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <ul className="list-disc space-y-3 pl-6">
                <li>Do you have at least 100 GB of SSD space free?</li>
                <li>Can you tolerate occasional crashes and progress loss without rage-quitting?</li>
                <li>Do you enjoy open-ended games where you set your own goals?</li>
                <li>
                  Are you buying it to play <em>now</em>, or to support development and play later?
                  Both are valid — but know which you are.
                </li>
                <li>
                  Do you have friends who play? Star Citizen is dramatically more fun with a crew.
                  Check if anyone in your circle plays on{' '}
                  <Term name="Spectrum">Spectrum</Term> (the official community forums) or Discord.
                </li>
              </ul>
              <p>
                If most of those land on the positive side: buy it. The entry price is low enough
                that the risk is manageable, and there is no other game in the world that offers
                what Star Citizen does at its best.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  How much does Star Citizen cost?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  A starter game package costs from $45 on the official RSI store.
                  One-time purchase, no subscription. It includes alpha access and
                  a starter ship.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Can you try it before buying?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Yes — during Free Fly events, several times a year, with a free
                  RSI account. Events typically run one to two weeks, usually
                  around Invictus in May and IAE in November.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Do you lose your ships in a wipe?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  No. Anything bought with real money is never wiped. Wipes only
                  reset earned in-game currency, inventory, and progress.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" trackingLabel="worth-buying-cta" />
            <DiscordCTA />
          </div>

          <nav className="flex items-center justify-between text-sm">
            <Link
              href="/day-one-citizen"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> All sections
            </Link>
            <Link
              href="/day-one-citizen/system-specs"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              System specs and hardware <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>

        <PageSources route="/day-one-citizen/worth-buying" />
      </main>
      <Footer />
    </>
  )
}
