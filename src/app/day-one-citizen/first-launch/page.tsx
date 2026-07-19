import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'

export const metadata: Metadata = {
  title: 'Star Citizen First Launch — What to Expect',
  description:
    'Star Citizen first launch: character creation choices that matter, waking up in your hab room, and the five things to do before anything else.',
  alternates: { canonical: '/day-one-citizen/first-launch' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Star Citizen First Launch: Character Creation & What Happens Next',
    description:
      'Character creation, your hab room, mobiGlas basics, and the first five actions every new Star Citizen player should take.',
    url: '/day-one-citizen/first-launch',
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
      name: 'What happens when you launch Star Citizen for the first time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You go through character creation first — your pilot name and your appearance. You then spawn in a hab, a small personal apartment in one of Stanton’s four major cities: Lorville, Area18, New Babbage, or Orison.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does character appearance affect gameplay in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almost nothing in the appearance menu affects gameplay. Hair, face structure, and skin tone are cosmetic only. You can adjust your appearance later at in-game medical facilities and barber shops. Pick something and move on.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you change your pilot name later?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your in-game pilot name defaults to your RSI account handle. Names can be changed through RSI account management, but it is not instant. Treat the name as persistent and choose something you are happy with.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you log out of Star Citizen safely?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Find a bed — in your hab, on your ship, or at any rest location. Hold F on the bed and select Bed Log. A bedlog preserves your character’s location and inventory state. A standard logout from the Escape menu returns you to your spawn point instead.',
      },
    },
  ],
}

export default function FirstLaunchPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Day One Citizen', url: '/day-one-citizen' },
          { name: 'First Launch', url: '/day-one-citizen/first-launch' },
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
            <p className="mt-5 font-mono text-xs text-gold">Section 08</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Launching the game for the first time
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              You click LAUNCH. You wait through load screens. You land in a small apartment
              in a city on a planet somewhere in{' '}
              <Term name="the 'Verse">the &lsquo;Verse</Term>. Here is what to do next.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Character creation</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                On your first login you will go through character creation before entering
                the game. There are two decisions here: your pilot name (handle) and your
                character&rsquo;s appearance.
              </p>
              <h3 className="mt-6 text-xl font-bold text-starwhite">Your pilot name</h3>
              <p>
                Your in-game pilot name defaults to your <Term name="RSI">RSI</Term> account
                handle. You can customize the display name shown above your character in-game.
                This is the name other players see when they look at you in the{' '}
                <Term name="PU">Persistent Universe</Term>.
              </p>
              <p>
                Choose something you are happy with. While names can be changed through the
                RSI account management, it is not instant and requires going through a process.
                Treat it as persistent.
              </p>
              <h3 className="mt-6 text-xl font-bold text-starwhite">Appearance — what matters and what does not</h3>
              <p>
                Star Citizen&rsquo;s character creator lets you customize facial features, hair,
                skin tone, and other visual attributes. Spend whatever time you enjoy on this —
                it is genuinely detailed.
              </p>
              <p>
                What matters on day one: almost nothing in the appearance menu affects gameplay.
                Hair, face structure, and skin tone are cosmetic only. Your character&rsquo;s
                appearance can be adjusted later at in-game medical facilities and barber shops,
                so do not agonize over it. Pick something and move on.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">The hab room — your starting point</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                After character creation, you spawn in a <Term name="Hab">hab</Term> — a small
                personal apartment assigned to you in one of{' '}
                <Term name="Stanton">Stanton&rsquo;s</Term> four major cities:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li><Term name="Lorville">Lorville</Term> on <Term name="Hurston">Hurston</Term></li>
                <li><Term name="Area18">Area18</Term> on <Term name="ArcCorp">ArcCorp</Term></li>
                <li><Term name="New Babbage">New Babbage</Term> on <Term name="microTech">microTech</Term></li>
                <li><Term name="Orison">Orison</Term> on <Term name="Crusader">Crusader</Term></li>
              </ul>
              <p>
                Which city you start in is determined by your game package or, if not specified,
                assigned automatically. All cities work equally well for day one — each has an
                ASOP terminal and a route to a spaceport where your ship is waiting.
              </p>
              <p>
                The <Term name="Hab">hab</Term> is a small room with a bed, a storage terminal
                (wardrobe), and sometimes a wall screen with news. It is your default respawn
                point unless you change it — you will return here if your character is killed
                and has no active medical beacon.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Your first five minutes</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Here is the exact sequence to follow in your first few minutes:
              </p>
              <ol className="list-decimal space-y-4 pl-6">
                <li>
                  <strong className="text-starwhite">Open your <Term name="mobiGlas">mobiGlas</Term></strong>{' '}
                  — press <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-xs">F1</kbd> or{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-xs">B</kbd> (check
                  your keybinds). Your <Term name="mobiGlas">mobiGlas</Term> is the
                  wrist-mounted computer interface — it contains your wallet, star map, contracts,
                  contacts, and inventory. Tap through the apps to get familiar with the layout.
                </li>
                <li>
                  <strong className="text-starwhite">Check your wallet</strong> — open the money
                  app in <Term name="mobiGlas">mobiGlas</Term> to confirm your 50,000{' '}
                  <Term name="UEC">UEC</Term> referral bonus is there. It appears as
                  starting credit in your account.
                </li>
                <li>
                  <strong className="text-starwhite">Look at the Contracts app</strong> — this is
                  where delivery missions, escort jobs, and bounties appear. On day one you will
                  see basic delivery and data-running contracts. Do not accept anything yet.
                </li>
                <li>
                  <strong className="text-starwhite">Close <Term name="mobiGlas">mobiGlas</Term></strong> and
                  look around the <Term name="Hab">hab</Term>. Find the door — it is usually
                  obvious. Walk to it and hold{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-xs">F</kbd>{' '}
                  to interact and open it.
                </li>
                <li>
                  <strong className="text-starwhite">Find the elevator</strong> — just outside
                  your <Term name="Hab">hab</Term> door. Use it to reach the ground level of the city.
                  From here, follow the guide in{' '}
                  <Link href="/day-one-citizen/getting-around" className="text-gold underline-offset-4 hover:underline">
                    Section 11: Getting from your hab to the hangar
                  </Link>.
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              <Term name="mobiGlas">mobiGlas</Term> basics
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The <Term name="mobiGlas">mobiGlas</Term> is central to everything you do in
                Star Citizen. Think of it as your phone, inventory, and GPS rolled into one
                wrist computer.
              </p>
              <p>
                Key apps:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">Contracts Manager</strong> — accept and track
                  missions. All your active jobs live here.
                </li>
                <li>
                  <strong className="text-starwhite">StarMap</strong> — the universe map. Set
                  a destination here and your <Term name="Quantum Travel">quantum drive</Term>{' '}
                  will be able to navigate to it.
                </li>
                <li>
                  <strong className="text-starwhite">Personal Manager</strong> — your character
                  sheet. Shows health, carried items, credits, and linked organizations.
                </li>
                <li>
                  <strong className="text-starwhite">Vehicle Loadout Manager (VMA)</strong> — view
                  and manage your ships and their component loadouts. See which ships you own and
                  what they are equipped with.
                </li>
                <li>
                  <strong className="text-starwhite">Wallet</strong> — your{' '}
                  <Term name="aUEC">aUEC</Term> balance and transaction history.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Logging out safely</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                When you are done playing, do not just close the game. Use the in-game logout
                process to ensure your character saves correctly:
              </p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  Find a bed — in your <Term name="Hab">hab</Term>, on your ship, or at any
                  in-game rest location.
                </li>
                <li>
                  Hold <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-xs">F</kbd>{' '}
                  on the bed to interact.
                </li>
                <li>
                  Select <strong className="text-starwhite">Bed Log</strong> from the options. This
                  performs a <Term name="Bedlogging">bedlog</Term> — a safe logout that preserves
                  your character&rsquo;s location and inventory state.
                </li>
              </ol>
              <p>
                You can also use the Escape menu and log out from there — this performs a
                standard logout that returns your character to their spawn point. Bedlogging
                preserves location; standard logout does not.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What happens when you launch Star Citizen for the first time?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  You go through character creation first — your pilot name and your
                  appearance. You then spawn in a <Term name="Hab">hab</Term>, a small
                  personal apartment in one of{' '}
                  <Term name="Stanton">Stanton&rsquo;s</Term> four major cities.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Does character appearance affect gameplay?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Almost nothing in the appearance menu affects gameplay. Hair, face
                  structure, and skin tone are cosmetic only. You can adjust your
                  appearance later at in-game medical facilities and barber shops.
                  Pick something and move on.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Can you change your pilot name later?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Your in-game pilot name defaults to your{' '}
                  <Term name="RSI">RSI</Term> account handle. Names can be changed
                  through RSI account management, but it is not instant. Treat the
                  name as persistent and choose something you are happy with.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  How do you log out safely?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Find a bed — in your hab, on your ship, or at any rest location.
                  Hold F on the bed and select Bed Log. A{' '}
                  <Term name="Bedlogging">bedlog</Term> preserves your
                  character&rsquo;s location and inventory state. A standard logout
                  from the Escape menu returns you to your spawn point instead.
                </p>
              </div>
            </div>
          </section>

          <nav className="flex items-center justify-between border-t border-white/10 pt-8 text-sm">
            <Link
              href="/day-one-citizen/rsi-launcher"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Using the RSI Launcher
            </Link>
            <Link
              href="/day-one-citizen/keybinds"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Key binds you need to know <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
