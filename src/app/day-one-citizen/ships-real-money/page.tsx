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
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Do You Have to Buy Ships With Real Money in Star Citizen?',
  description:
    'No — one $45 game package is the only required purchase in Star Citizen. Every other ship can be earned in-game with aUEC. Here is how that works.',
  alternates: {
    canonical: '/day-one-citizen/ships-real-money',
    languages: {
      en: '/day-one-citizen/ships-real-money',
      de: '/de/echtgeld-schiffe',
      'x-default': '/day-one-citizen/ships-real-money',
    },
  },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Do You Have to Buy Ships With Real Money in Star Citizen?',
    description:
      'No. One $45 package is the only required purchase — every other ship can be rented or bought in-game with earned aUEC. The honest breakdown.',
    url: '/day-one-citizen/ships-real-money',
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
      name: 'Do you have to buy ships with real money in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. One $45 game package is the only purchase Star Citizen ever requires. It includes a starter ship, and every other ship in the game can be rented or bought with aUEC — the in-game money you earn by playing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you get ships in Star Citizen without paying real money?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Earn aUEC by playing — missions, cargo hauling, mining, salvage, and bounties all pay. You can then rent ships for a few days at rental terminals, or buy them outright at in-game ship shops. Most flyable ships are available this way.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do ships bought with real money survive wipes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Anything bought with real money from the pledge store is attached to your account and is always restored after a wipe. Ships bought in-game with aUEC are alpha progress and can be reset.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the 50,000 UEC referral bonus require a purchase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The 50,000 UEC enlistment bonus is credited when you create an RSI account with a referral code — no purchase needed. If you forgot the code at sign-up, you have roughly 24 hours to add it before the window closes.',
      },
    },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Do You Have to Buy Ships With Real Money in Star Citizen?',
  description:
    'No — one $45 game package is the only required purchase. Every other ship can be earned in-game with aUEC.',
  author: { '@type': 'Person', name: SITE.author, url: `${SITE.url}/about` },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  mainEntityOfPage: `${SITE.url}/day-one-citizen/ships-real-money`,
}

export default function ShipsRealMoneyPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Day One Citizen', url: '/day-one-citizen' },
          { name: 'Ships and Real Money', url: '/day-one-citizen/ships-real-money' },
        ]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-12 pt-32 sm:pt-40">
          <div className="container-narrow">
            <Link
              href="/day-one-citizen"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-gold"
            >
              <ArrowLeft size={12} aria-hidden /> Day One Citizen
            </Link>
            <p className="mt-5 font-mono text-xs text-gold">Before you buy</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Do you have to buy ships with real money?
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              The $1,000 ship listings scare a lot of people off before they
              start. Here is what you actually have to spend — and what every
              other price tag really is.
            </p>
            <p className="mt-4 text-sm text-muted">
              Written by{' '}
              <Link href="/about" className="text-gold underline-offset-4 hover:underline">
                {SITE.author}
              </Link>
              , a veteran Star Citizen backer.
            </p>
            <p className="mt-3 text-sm">
              <Link
                href="/de/echtgeld-schiffe"
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
            <h2 className="heading-display text-2xl sm:text-3xl">The short answer</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <strong className="text-starwhite">No. One $45 game package is the
                only purchase Star Citizen ever requires. Every other ship in the
                game can be earned by playing, using{' '}
                <Term name="aUEC">aUEC</Term> — the in-game money.</strong>
              </p>
              <p>
                The expensive ships you see on the{' '}
                <Term name="RSI">RSI</Term> store are optional{' '}
                <Term name="Pledge">pledges</Term> — a way to support development,
                not a paywall. Nothing in the game checks how much you spent.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">What the $45 gets you</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The $45 Citizen Starter Pack is the cheapest{' '}
                <Term name="Game Package">game package</Term>, and it is a complete
                way to play:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Full access to the live Star Citizen alpha</li>
                <li>
                  The <Term name="Aurora">Aurora Mk II</Term> starter ship with{' '}
                  <Term name="LTI">Lifetime Insurance</Term>
                </li>
                <li>A starting armor set, undersuit, and weapon</li>
                <li>10,000 starting <Term name="aUEC">aUEC</Term></li>
              </ul>
              <p>
                Every other package is a variation on that theme with a different
                ship.{' '}
                <Link href="/day-one-citizen/starter-package" className="text-gold underline-offset-4 hover:underline">
                  The full package comparison is here
                </Link>
                , and the buying walkthrough is in{' '}
                <Link href="/day-one-citizen/buying-the-game" className="text-gold underline-offset-4 hover:underline">
                  how to actually buy the game
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Earning ships in-game</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Playing the game pays you <Term name="aUEC">aUEC</Term>. Missions,{' '}
                <Term name="Cargo">cargo</Term> hauling,{' '}
                <Term name="Mining">mining</Term>,{' '}
                <Term name="Salvage">salvage</Term>, and{' '}
                <Term name="Bounty">bounty</Term> contracts all have real payouts.
                That money buys ships two ways:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">Rent</strong> — rental terminals
                  let you fly a ship for a few in-game days at a fraction of its
                  price. Perfect for testing a career before committing.
                </li>
                <li>
                  <strong className="text-starwhite">Buy</strong> — in-game ship shops
                  sell most flyable ships outright for aUEC.{' '}
                  <Link href="/beyond-the-basics/shops-directory" className="text-gold underline-offset-4 hover:underline">
                    The shops directory
                  </Link>{' '}
                  lists which city sells what.
                </li>
              </ul>
              <p>
                There is a head start, too. Creating your account with a{' '}
                <Term name="Referral Code">referral code</Term> credits you 50,000{' '}
                <Term name="UEC">UEC</Term> — no purchase required. That is five
                times the starting money of most packages, before you fly a single
                mission.{' '}
                <Link href="/referral-code" className="text-gold underline-offset-4 hover:underline">
                  How the bonus works is documented here
                </Link>.
              </p>
              <p>
                One honest caveat: ships bought with aUEC are alpha progress. A
                future <Term name="Wipe">wipe</Term> can reset them, while anything
                bought with real money always survives.{' '}
                <Link href="/day-one-citizen/next-wipe" className="text-gold underline-offset-4 hover:underline">
                  What survives a wipe is covered here
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Where real money is optional</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The <Term name="Pledge">pledge store</Term> sells standalone ships
                for real money, from about $50 to well over $1,000. Three things to
                understand about those listings:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  They are a crowdfunding mechanic. <Term name="CIG">CIG</Term> funds
                  development by selling ships to backers who want to support the
                  project.
                </li>
                <li>
                  They do not include game access. A standalone ship without a game
                  package is a hangar ornament.
                </li>
                <li>
                  They buy convenience, not power. The same hulls are sold in-game
                  for aUEC — spending real money just skips the earning.
                </li>
              </ul>
              <p>
                A sensible path for a new player: buy the $45 package, play for a few
                weeks, and let aUEC pay for everything else. If you later decide to
                support development with a bigger pledge, do it because you love the
                game — not because you think you have to.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Full disclosure: how referrals pay</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                This site shares my referral code, so here is the other side of the
                deal, plainly. If you sign up with my code and later spend $40 on the
                RSI store, I — the referrer — receive one recruitment point toward
                RSI&rsquo;s referral rewards.
              </p>
              <p>
                You never need to do that. Your 50,000 UEC bonus lands at account
                creation, before any purchase. Nothing on this site requires you to
                spend a single dollar beyond the game package — and the game itself
                never requires more than that either. I am a named community member,
                not an anonymous referral farm, and the code is re-verified monthly
                with dated receipts.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Do you have to buy ships with real money?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  No. One $45 game package is the only purchase Star Citizen
                  ever requires. It includes a starter ship, and every other
                  ship in the game can be rented or bought with aUEC — the
                  in-game money you earn by playing.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  How do you get ships without paying real money?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Earn aUEC by playing — missions, cargo hauling, mining,
                  salvage, and bounties all pay. You can then rent ships for a
                  few days at rental terminals, or buy them outright at in-game
                  ship shops. Most flyable ships are available this way.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Do ships bought with real money survive wipes?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Yes. Anything bought with real money from the pledge store is
                  attached to your account and is always restored after a wipe.
                  Ships bought in-game with aUEC are alpha progress and can be
                  reset.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Does the 50,000 UEC referral bonus require a purchase?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  No. The 50,000 UEC enlistment bonus is credited when you
                  create an RSI account with a referral code — no purchase
                  needed. If you forgot the code at sign-up, you have roughly
                  24 hours to add it before the window closes.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" trackingLabel="ships-real-money-cta">
              Claim 50K UEC free
            </CTAButton>
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
              href="/day-one-citizen/first-ship"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Your first ship <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>

        <PageSources route="/day-one-citizen/ships-real-money" />
      </main>
      <Footer />
    </>
  )
}
