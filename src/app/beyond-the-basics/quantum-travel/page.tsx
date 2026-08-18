import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'

export const metadata: Metadata = {
  title: 'How to Quantum Travel in Star Citizen (2026 Guide)',
  description:
    'Press B for NAV mode, middle-click to cycle into QT mode, set a route on the Starmap, and let the drive auto-calibrate before you jump. A step-by-step guide for brand-new pilots.',
  alternates: { canonical: '/beyond-the-basics/quantum-travel' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'How to Quantum Travel in Star Citizen (2026 Guide)',
    description:
      'Press B for NAV mode, middle-click to cycle into QT mode, set a route on the Starmap, and let the drive auto-calibrate before you jump. A step-by-step guide for brand-new pilots.',
    url: '/beyond-the-basics/quantum-travel',
  },
}

// FAQPage structured data — mirrors the visible step-by-step and
// troubleshooting sections so this page can earn rich results and AI
// answer-engine citations.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you quantum travel in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Press B in the pilot seat to switch to NAV mode, then middle-click to cycle into QT mode. Aim at a destination marker, let the drive auto-calibrate for five to fifteen seconds, then left-click to jump. For far-away destinations, press F2 to open the Starmap and set a route first.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why will my quantum drive not calibrate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check five things: you are in the pilot seat, you are in NAV mode (press B) and QT mode (middle-click), you are clear of restricted areas around stations and planets, the quantum drive component is not damaged, and you have quantum fuel. Any one of these blocks calibration.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I refuel quantum fuel in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quantum fuel sits in its own tank, separate from the hydrogen fuel that feeds your thrusters. Refuel at any Cry-Astro service station or at the major landing zones — Area18, Lorville, New Babbage, and Orison.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does quantum travel take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Short hops around one planet take thirty seconds to a few minutes. Crossing the Stanton system takes several minutes, and long multi-hop routes can take ten to twenty minutes or more in total. Your ship flies itself during a jump.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is quantum interdiction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Interdiction is when another player or NPC forces your ship out of quantum travel with a Quantum Snare, dropping you into normal space next to the attacker. You can fight back, boost away until the snare weakens and jump out, or comply with the attacker’s demands.',
      },
    },
  ],
}

export default function QuantumTravelPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy min-h-screen">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Beyond the Basics', url: '/beyond-the-basics' },
          { name: 'Quantum Travel', url: '/beyond-the-basics/quantum-travel' },
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
              How to Quantum Travel in Star Citizen
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              Press <strong className="text-starwhite">B</strong> in the pilot seat to
              switch to NAV mode, then middle-click to cycle into QT mode. Set a route
              on the Starmap, point at the marker, and the drive auto-calibrates — then
              left-click to jump.
            </p>
          </div>
        </header>

        {/* Content */}
        <section className="py-14">
          <div className="container-wide px-4 max-w-3xl">

            <p className="text-starwhite/80 mb-6 leading-relaxed">
              <Term name="Quantum Travel">Quantum travel</Term> is how you cross the
              enormous distances between planets, moons, and stations. Your quantum
              drive — a physical part installed in your ship — flings you across space
              at incredible speed. You will use it in every single play session, so it
              is worth learning on day one. This guide is accurate for Star Citizen
              Alpha 4.x, including the <Term name="Stanton">Stanton</Term> and{' '}
              <Term name="Pyro">Pyro</Term> star systems.
            </p>

            <p className="mb-6 text-xs text-muted">
              Page reviewed July 18, 2026. The steps below match the current
              Alpha 4.x controls.
            </p>


            {/* Prerequisites */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Before you can jump
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Quantum travel is not available the moment you log in. A few things have
              to be true first:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">You are in the pilot seat of a ship.</strong>{' '}
                Quantum travel is a ship function — you cannot do it on foot or in a
                ground vehicle. Only the pilot can start a jump, not passengers or
                gunners.
              </li>
              <li>
                <strong className="text-starwhite">Your quantum drive works.</strong>{' '}
                If the component is damaged or destroyed, you cannot travel. Check your
                ship&apos;s component health in the vehicle section of your{' '}
                <Term name="mobiGlas">mobiGlas</Term> — press{' '}
                <strong className="text-starwhite">F1</strong> to open it.
              </li>
              <li>
                <strong className="text-starwhite">You have quantum fuel.</strong>{' '}
                Quantum fuel sits in a separate tank from the hydrogen fuel that feeds
                your thrusters. Refuel at any Cry-Astro service station — the in-game
                refueling company — or at a major landing zone.
              </li>
              <li>
                <strong className="text-starwhite">You are clear of restricted areas.</strong>{' '}
                Landing zones, hangars, and the space right around stations all block
                quantum travel. So does a planet&apos;s atmosphere. Fly a few
                kilometres out until the warning clears from your HUD — the heads-up
                display projected inside your cockpit.
              </li>
            </ul>
            <p className="text-muted text-sm mb-8">
              Quick tip: your ship&apos;s power triangle affects calibration time.
              Sending power toward Engines calibrates the quantum drive faster. Find
              the power controls in your keybindings under Options &rarr; Flight.
            </p>

            {/* Step by step */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Step by step — your first jump
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              This is the core loop you will use every session. After a few jumps it
              becomes muscle memory.
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Take off and clear the restricted zone.</strong>{' '}
                Fly away from the landing area or planet surface. You need a few
                kilometres of open space. Your HUD warns you while you are still too
                close.
              </li>
              <li>
                <strong className="text-starwhite">Press B to switch to NAV mode.</strong>{' '}
                A single press of <strong className="text-starwhite">B</strong> — not a
                hold — sets your ship&apos;s Master Mode to NAV. Nearby destinations
                appear as purple diamond markers floating in space around you. Turn
                your view to see them all.
              </li>
              <li>
                <strong className="text-starwhite">Middle-click to cycle into QT mode.</strong>{' '}
                Click your <strong className="text-starwhite">Middle Mouse Button</strong>{' '}
                to cycle your Operating Mode to QT. Aim your ship&apos;s nose (or
                crosshair) at your chosen marker. The marker highlights, and your HUD
                shows the destination name and estimated travel time.
              </li>
              <li>
                <strong className="text-starwhite">Let the drive auto-calibrate.</strong>{' '}
                Keep pointed at the marker and the quantum drive calibrates on its own —
                no button hold required. This takes about five to fifteen seconds,
                depending on your ship, its drive, and your power settings.
              </li>
              <li>
                <strong className="text-starwhite">Left-click to jump.</strong>{' '}
                When calibration finishes and the &ldquo;QUANTUM READY&rdquo; prompt
                appears, click your{' '}
                <strong className="text-starwhite">Left Mouse Button</strong>. Your ship
                shoots forward into the famous blue quantum tunnel.
              </li>
              <li>
                <strong className="text-starwhite">Arrive.</strong> Your ship slows down
                and the jump ends automatically near the destination. For planetside
                destinations you arrive about thirty kilometres above or near the
                surface location, then fly the rest of the way yourself.
              </li>
            </ol>
            <p className="text-starwhite/80 mb-8 leading-relaxed">
              That is the whole loop: press{' '}
              <strong className="text-starwhite">B</strong> for NAV mode &rarr;
              middle-click for QT mode &rarr; aim at a marker &rarr; let it calibrate
              &rarr; left-click to jump.
            </p>

            {/* Starmap */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Using the Starmap for longer trips
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              The quick method above works for destinations that show up as markers
              around you. For far-away places, or routes that need several hops, use
              the Starmap — the in-game 3D map of the whole star system.
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-starwhite/80">
              <li>
                Press <strong className="text-starwhite">F2</strong> in the pilot seat
                to open the Starmap. It shows every planet, moon, and station. Pan,
                turn, and zoom with your mouse.
              </li>
              <li>
                Find your destination by browsing the map or typing in the search
                field, then click it.
              </li>
              <li>
                Click <strong className="text-starwhite">Route to this Location</strong>{' '}
                in the panel that appears. If the trip needs several hops, the Starmap
                plots the whole route for you.
              </li>
              <li>
                Close the map with <strong className="text-starwhite">F2</strong> again
                (or press <strong className="text-starwhite">Escape</strong>).
              </li>
              <li>
                Your first waypoint now appears as a marker in space. Switch to QT mode
                and jump as normal. When you arrive, the next leg of the route cues up
                automatically.
              </li>
            </ol>

            {/* Pyro */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Traveling to Pyro
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              In Alpha 4.x you can leave Stanton for Pyro through a jump point — a
              natural tunnel between star systems.
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2 text-starwhite/80">
              <li>
                Open the Starmap and find the{' '}
                <strong className="text-starwhite">Pyro Jump Point</strong>. It has its
                own icon near the outer edge of the Stanton system.
              </li>
              <li>Set it as your destination and quantum travel there in normal hops.</li>
              <li>
                At the jump point, a special jump sequence starts and carries you into
                the Pyro system.
              </li>
            </ol>
            <p className="text-muted text-sm mb-8">
              Pyro is a lawless system and far more dangerous than Stanton. Make sure
              your ship is fueled, armed, and repaired before you go.
            </p>

            {/* Tips */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Tips: calibrate faster, manage fuel, plan your time
            </h2>

            <h3 className="font-display text-lg font-bold text-starwhite mt-8 mb-3">
              Speed up calibration
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Send power to Engines.</strong> The
                power triangle in your ship controls where energy goes. More power to
                Engines means a faster-calibrating quantum drive.
              </li>
              <li>
                <strong className="text-starwhite">Turn off shields and weapons.</strong>{' '}
                You do not need them during a jump, and the freed-up power goes to the
                drive.
              </li>
              <li>
                <strong className="text-starwhite">Upgrade the drive itself.</strong> A
                better quantum drive calibrates faster, holds more fuel, and can allow
                longer jumps. Component shops at major stations sell them.
              </li>
            </ul>

            <h3 className="font-display text-lg font-bold text-starwhite mt-8 mb-3">
              Keep an eye on quantum fuel
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-starwhite/80">
              <li>
                Quantum fuel has its own gauge on your HUD, separate from hydrogen
                fuel. An empty tank means no jumps.
              </li>
              <li>
                Refuel at Cry-Astro service stations — look for the orange branding at
                stations across Stanton. It is cheap and fast.
              </li>
              <li>
                The big landing zones also refuel you:{' '}
                <Term name="Area18">Area18</Term>, <Term name="Lorville">Lorville</Term>,{' '}
                <Term name="New Babbage">New Babbage</Term>, and{' '}
                <Term name="Orison">Orison</Term>.
              </li>
            </ul>

            <h3 className="font-display text-lg font-bold text-starwhite mt-8 mb-3">
              How long trips take
            </h3>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                Short hops around one planet take thirty seconds to a few minutes.
              </li>
              <li>
                Crossing Stanton — say, from <Term name="Crusader">Crusader</Term> to{' '}
                <Term name="microTech">microTech</Term> — takes several minutes.
              </li>
              <li>
                Long multi-hop routes can take ten to twenty minutes or more in total.
                Your ship flies itself during a jump, so you can step away and come
                back when you arrive.
              </li>
            </ul>

            {/* Troubleshooting */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Troubleshooting
            </h2>

            <h3 className="font-display text-lg font-bold text-starwhite mt-8 mb-3">
              The drive will not calibrate
            </h3>
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Check your seat.</strong> Only the
                pilot can start a jump.
              </li>
              <li>
                <strong className="text-starwhite">Check your Operating Mode.</strong>{' '}
                You need to be in NAV mode (press <strong className="text-starwhite">B</strong>)
                and QT mode (middle-click) before the drive will calibrate.
              </li>
              <li>
                <strong className="text-starwhite">Check for a Restricted Area message.</strong>{' '}
                Fly further from the nearest structure, landing zone, or planet
                surface.
              </li>
              <li>
                <strong className="text-starwhite">Check the component.</strong> If the
                quantum drive shows orange or red in your ship&apos;s health display,
                it may be too damaged to work. Get it repaired.
              </li>
              <li>
                <strong className="text-starwhite">Check your fuel.</strong> An empty
                quantum tank prevents calibration. Refuel at a Cry-Astro station or
                landing zone.
              </li>
            </ol>

            <h3 className="font-display text-lg font-bold text-starwhite mt-8 mb-3">
              No markers appear in NAV mode
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-starwhite/80">
              <li>
                You may be too close to a planet or station — markers are hidden in
                restricted zones. Fly further out.
              </li>
              <li>
                The drive may be switched off. Check your ship&apos;s systems panel and
                confirm it is online.
              </li>
              <li>
                Confirm <strong className="text-starwhite">B</strong> is still mapped
                to &ldquo;Switch to NAV Mode&rdquo; in the Options keybindings, not the
                older &ldquo;Hold Quantum Travel&rdquo; bind.
              </li>
            </ul>

            <h3 className="font-display text-lg font-bold text-starwhite mt-8 mb-3">
              I got pulled out of the jump halfway
            </h3>
            <p className="text-starwhite/80 mb-6 leading-relaxed">
              Two possible causes. Either your quantum drive took serious damage during
              the jump — rare, but check your component health. Or another ship pulled
              you out on purpose. That is called interdiction, and it gets its own
              section below.
            </p>

            <h3 className="font-display text-lg font-bold text-starwhite mt-8 mb-3">
              I arrived at the wrong place
            </h3>
            <p className="text-starwhite/80 mb-8 leading-relaxed">
              Read the destination name on your HUD before you click to jump. Some
              markers have similar names — several stations can orbit the same planet.
              Use the Starmap when you need precision.
            </p>

            {/* Interdiction */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Quantum interdiction: getting yanked out of a jump
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Interdiction is when another player or an{' '}
              <Term name="NPC">NPC</Term> forces your ship out of quantum travel.
              Ships built for it, like the RSI <Term name="Mantis">Mantis</Term>, carry
              a <Term name="Quantum Snare">Quantum Snare</Term> that pulls you into
              normal space — usually right next to the attacker. You will see a visual
              distortion and hear an audio cue as it happens.
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Do not panic.</strong> You are back
                in normal space and all your ship systems still work.
              </li>
              <li>
                <strong className="text-starwhite">Assess the threat.</strong> Check
                your contacts panel — is it an NPC pirate or a player?
              </li>
              <li>
                <strong className="text-starwhite">Fight,</strong> if your ship can.
                Destroying or disabling the attacker lets you spool up and carry on.
              </li>
              <li>
                <strong className="text-starwhite">Or flee.</strong> Boost away at full
                thrust. The snare weakens with distance, and once you are clear you can
                switch to QT mode and jump out.
              </li>
              <li>
                <strong className="text-starwhite">Or comply,</strong> if you must. NPC
                pirates may demand a fee or your cargo. Player pirates vary.
              </li>
            </ol>
            <p className="text-muted text-sm mb-4">
              Interdiction is most common on busy routes and near known pirate areas,
              especially in Pyro. Carrying valuable cargo? Plan your route on the
              Starmap and pick quieter waypoints where you can.
            </p>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/beyond-the-basics/ship-equipment"
                  className="text-gold hover:underline text-sm"
                >
                  Next: Ship Equipment &amp; Components &rarr;
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
              Not signed up yet? Use a referral code and start with fifty thousand
              bonus credits.
            </p>
            <CTAButton trackingLabel="beyond-basics-quantum-travel-bottom" size="lg">
              Get your 50K UEC bonus
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
