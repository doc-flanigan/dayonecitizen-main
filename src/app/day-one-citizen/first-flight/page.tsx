import type { Metadata } from 'next'
import Link from '@/components/Link'
import { ArrowLeft } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { GuideProgress, DoThisNow } from '@/components/GuideProgress'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import SourceLink from '@/components/SourceLink'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'

export const metadata: Metadata = {
  title: 'Star Citizen First Flight — Take Off & Land',
  description:
    'Power on your ship, clear the hangar, master Star Citizen flight controls, make your first quantum jump, and land. Step-by-step with exact keybinds.',
  alternates: { canonical: '/day-one-citizen/first-flight' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Star Citizen First Flight Guide: Take Off, Fly & Land',
    description:
      'From powering on to quantum travel and landing — the complete first-flight walkthrough for new Star Citizen players.',
    url: '/day-one-citizen/first-flight',
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
      name: 'How do you take off in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Press Right Alt + R to make the ship flight ready and wait for the HUD to load. Hold Space to rise off the pad gently, then exit the hangar slowly — no more than 20–30 m/s. Clipping the door frame at speed destroys ships. Once you are clear of the hangar, press N to raise the landing gear.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does quantum travel work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open the map in your mobiGlas (F2), pick a destination, and select Route to this Location. Hold B briefly to switch your master mode to NAV, then middle-click to cycle the operating mode to QT. Point your nose at the destination and the quantum drive calibrates. Hold left-click to jump. The jump ends automatically when you reach the destination.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why will my quantum drive not spool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check three things: do you have a destination selected, are you in a quantum-safe area (not inside a hangar or gravity well), and is your quantum drive online in the power panel?',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you land a ship in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Find a landing pad, slow down well in advance, and approach at under 50 m/s. Press N to lower the landing gear before touchdown, descend slowly with Left Ctrl, and aim for the center of the pad.',
      },
    },
  ],
}

export default function FirstFlightPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Day One Citizen', url: '/day-one-citizen' },
          { name: 'First Flight', url: '/day-one-citizen/first-flight' },
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
            <GuideProgress slug="first-flight" />
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Your first flight
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              Power on. Lift off. Clear the hangar door. Burn for orbit. Here is the
              complete first-flight sequence — from the cockpit seat to your first{' '}
              <Term name="Quantum Travel">quantum jump</Term> and back to a safe landing.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">
          <DoThisNow slug="first-flight" />

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Powering on your ship</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Once seated in the cockpit, your ship is off. The HUD is dark. Here is the
                power-on sequence:
              </p>
              <ol className="list-decimal space-y-4 pl-6">
                <li>
                  Press{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Right Alt + R</kbd>{' '}
                  — this makes your ship flight ready and requests power from the ship&rsquo;s power plant.
                </li>
                <li>
                  Wait for the HUD to fully load. Leave the power settings alone for a first
                  flight — the defaults are fine.
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Taking off from the hangar</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                This is where new pilots crash most often. The hangar is enclosed — walls,
                ceiling, door frame. Take it slowly.
              </p>
              <ol className="list-decimal space-y-4 pl-6">
                <li>
                  <strong className="text-starwhite">Lift off gently</strong> — hold{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Space</kbd>{' '}
                  to strafe straight up off the pad. Rise slowly — you only need a few meters of
                  clearance. Let go of the key to stop rising.
                </li>
                <li>
                  <strong className="text-starwhite">Face the hangar exit</strong> — use the mouse
                  to turn your ship toward the open hangar door. Move slowly. Do not strafe
                  sideways while near walls or the ceiling.
                </li>
                <li>
                  <strong className="text-starwhite">Exit slowly</strong> — press{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">W</kbd>{' '}
                  gently to add forward thrust. Exit the hangar at no more than 20–30 m/s.
                  The door frame is unforgiving. Clipping it at speed destroys ships.
                </li>
                <li>
                  <strong className="text-starwhite">Raise landing gear</strong> — once you are
                  clear of the hangar or pad, tap{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">N</kbd>.{' '}
                  <SourceLink href="https://support.robertsspaceindustries.com/hc/en-us/articles/360025028633-Getting-Started-in-the-Verse">Official RSI guide</SourceLink>
                </li>
                <li>
                  <strong className="text-starwhite">Once clear</strong> — increase speed freely.
                  You are in open sky or space. Push{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">W</kbd>{' '}
                  to accelerate. Move the mouse to pitch and yaw.
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Basic flight controls</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Star Citizen uses a &ldquo;coupled mode&rdquo; by default — the{' '}
                <Term name="IFCS">IFCS</Term> (Intelligent Flight Control System)
                automatically counteracts your momentum to keep you flying in the direction
                you&rsquo;re pointing. Think of it as flying through air, not through space.
                This makes it easier to control on your first flight.
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">Mouse</strong> — aims the ship. Move it
                  left/right to yaw, up/down to pitch.
                </li>
                <li>
                  <strong className="text-starwhite">W / S</strong> — increases and decreases
                  throttle (forward speed). Hold W to accelerate up to your cruise speed.
                </li>
                <li>
                  <strong className="text-starwhite">A / D</strong> — lateral strafe (sidestep
                  left and right without turning). Useful for docking and precise movement.
                </li>
                <li>
                  <strong className="text-starwhite">Q / E</strong> — roll the ship around its
                  long axis. Not needed often on a first flight.
                </li>
                <li>
                  <strong className="text-starwhite">Left Shift</strong> — afterburner. Temporary
                  boost well above cruise speed. Drains quickly.
                </li>
                <li>
                  <strong className="text-starwhite">Space / Left Ctrl</strong> — vertical strafe
                  (up and down without pitching the nose). Very useful near landing pads.
                </li>
              </ul>
              <p>
                Speed cap: in atmosphere (near planets), your speed is limited by{' '}
                <Term name="IFCS">IFCS</Term>. In space, the limit is higher. You will feel
                the difference as you climb away from the planet.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Your first <Term name="Quantum Travel">quantum jump</Term>
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <Term name="Quantum Travel">Quantum travel</Term> is how you cross the distances
                between planets, moons, and space stations in the{' '}
                <Term name="Stanton">Stanton</Term> system. Without it, even nearby destinations
                take hours to reach at normal speeds.
              </p>
              <p>
                Here is how to initiate your first jump:
              </p>
              <ol className="list-decimal space-y-4 pl-6">
                <li>
                  <strong className="text-starwhite">Select a destination</strong> — open{' '}
                  <Term name="mobiGlas">mobiGlas</Term> (
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F1</kbd>) and choose the map, or press{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F2</kbd>{' '}
                  to go straight to it. Pick any planet, moon, or station, then select{' '}
                  <strong className="text-starwhite">Route to this Location</strong>. Close{' '}
                  <Term name="mobiGlas">mobiGlas</Term>.
                </li>
                <li>
                  <strong className="text-starwhite">Switch to NAV mode</strong> — hold{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">B</kbd>{' '}
                  briefly to change your master mode to NAV. Look for NAV on your HUD.
                </li>
                <li>
                  <strong className="text-starwhite">Switch to quantum mode</strong> — click the
                  middle mouse button (press the wheel in) to cycle through your operating modes.
                  Stop when the HUD shows QT.
                </li>
                <li>
                  <strong className="text-starwhite">Point your nose at the destination</strong> —
                  your quantum drive only jumps in the direction you are facing. Once you are
                  lined up, the drive begins to calibrate. Wait for it to finish.
                </li>
                <li>
                  <strong className="text-starwhite">Jump</strong> — hold{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Left Click</kbd>{' '}
                  to engage the quantum drive.
                </li>
                <li>
                  <strong className="text-starwhite">Arrive</strong> — the jump ends automatically
                  when you reach the destination. You appear near your target. The ship
                  decelerates to normal speed.
                </li>
              </ol>
              <p>
                If the quantum drive will not spool, check: do you have
                a destination selected? Are you in a quantum-safe area (not inside a hangar or
                gravity well)? Is your quantum drive online in the power panel?
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Landing your ship</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Landing is the other place new pilots have trouble. Patience and low speed
                are the keys.
              </p>
              <ol className="list-decimal space-y-4 pl-6">
                <li>
                  <strong className="text-starwhite">Find the landing zone</strong> — look for
                  a <Term name="Landing Pad">landing pad</Term>: a flat surface marked with
                  yellow or white paint, often illuminated, with a pad number or indicator.
                  At major stations and spaceports, pads are assigned via an automated system.
                  To request landing, tap{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Left Alt + N</kbd>{' '}
                  to contact landing services. You can also open{' '}
                  <Term name="mobiGlas">mobiGlas</Term> and choose Comms to contact the spaceport.
                </li>
                <li>
                  <strong className="text-starwhite">Slow down well in advance</strong> —
                  reduce throttle to zero and let{' '}
                  <Term name="IFCS">IFCS</Term> bleed off your speed. Approach the pad at
                  under 50 m/s, slowing further as you get close. Below 20 m/s near the
                  surface is ideal.
                </li>
                <li>
                  <strong className="text-starwhite">Lower landing gear</strong> — tap{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">N</kbd>{' '}
                  before touchdown.
                </li>
                <li>
                  <strong className="text-starwhite">Descend with vertical thrust</strong> —
                  use{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Left Ctrl</kbd>{' '}
                  to descend slowly. Hold{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Space</kbd>{' '}
                  briefly to arrest a descent that is going too fast.
                </li>
                <li>
                  <strong className="text-starwhite">Set down</strong> — aim for the center of
                  the pad. The ship will lock into the pad surface when the gear makes contact
                  correctly. You will hear a clunk and the ship settles.
                </li>
              </ol>
              <p>
                Do not land on surfaces that are not designated pads — this can result in
                trespassing warnings, fines, or your ship being seized depending on the
                location.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Powering down</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Once landed and ready to leave your ship, you can either:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">Leave engines running</strong> — fine for
                  a short stop. Your ship stays on. Press{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Y</kbd>{' '}
                  to leave your seat, then walk to the exit.
                </li>
                <li>
                  <strong className="text-starwhite">Power down fully</strong> — tap{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">U</kbd>{' '}
                  to switch off all ship power. The ship goes dark. This is useful when
                  parked for a long time. To restart, press{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Right Alt + R</kbd>{' '}
                  when back in the seat.
                </li>
              </ul>
              <p>
                Congratulations — you have completed your first flight in Star Citizen. From
                here, everything else is just more of this: take off, fly, land, explore,
                earn <Term name="aUEC">aUEC</Term>, upgrade. The{' '}
                <Term name="the 'Verse">the &lsquo;Verse</Term> is enormous. You have barely
                seen any of it.
              </p>
            </div>
          </section>

          <section id="first-week">
            <h2 className="heading-display text-2xl sm:text-3xl">Your first week: when things go wrong</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Your first flight is done. In week one, a few things usually go wrong.
                None of them are permanent. Here is how to recover from each.
              </p>

              <h3 className="heading-display pt-4 text-lg sm:text-xl">Take your first contract</h3>
              <p>
                A contract is a job the game pays you for. Press{' '}
                <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F1</kbd>{' '}
                to open <Term name="mobiGlas">mobiGlas</Term> and choose the Contracts Manager.
                Look for a delivery, where you move a package from one place to another. Our{' '}
                <Link href="/day-one-citizen/first-day" className="font-semibold text-gold hover:underline">first-day guide</Link>{' '}
                walks through one.
              </p>
              <p className="rounded-lg border border-white/10 bg-navyLight/60 px-4 py-3 text-sm text-starwhite/80">
                <strong className="text-starwhite">If this goes wrong:</strong> if the list is
                empty, wait a short while and check again. Read each contract before you accept it.
              </p>

              <h3 className="heading-display pt-4 text-lg sm:text-xl">Where you wake up after dying</h3>
              <p>
                When you die, you come back at your regeneration point, often called regen. By
                default, that is your primary residence. To change it, create an imprint, the
                game&rsquo;s record of where you come back, at a medical bed. You come back there until you reset it or make a new imprint. To
                reset it, use a terminal at any medical bed or insurance office. Logging out in
                a bed is a separate thing, covered in our{' '}
                <Link href="/day-one-citizen/first-launch" className="font-semibold text-gold hover:underline">first-launch guide</Link>.
              </p>
              <p className="rounded-lg border border-white/10 bg-navyLight/60 px-4 py-3 text-sm text-starwhite/80">
                <strong className="text-starwhite">If this goes wrong:</strong> if your chosen bed
                is unavailable, you come back at the facility closest to your primary residence.
                Regen points also have a maximum range. If you die outside it, you return somewhere else.
              </p>

              <h3 className="heading-display pt-4 text-lg sm:text-xl">When you die</h3>
              <p>
                If you are knocked out but not dead, hold{' '}
                <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">M</kbd>{' '}
                to ask other players for rescue. To give up and come back, hold{' '}
                <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Backspace</kbd>.
                The armor and weapons you have equipped return with you. Your backpack and pocket
                contents stay on your body, even if you die in a landing zone (a city or outpost).
              </p>
              <p className="rounded-lg border border-white/10 bg-navyLight/60 px-4 py-3 text-sm text-starwhite/80">
                <strong className="text-starwhite">If this goes wrong:</strong> go back for your pack
                before another player finds it. Carry less on risky trips.
              </p>

              <h3 className="heading-display pt-4 text-lg sm:text-xl">When you lose your ship</h3>
              <p>
                A destroyed ship is not gone for good. Go to an <Term name="ASOP">ASOP terminal</Term>,
                find the ship, and choose Claim to file an insurance claim. You get a replacement.
                Filing a claim can cost <Term name="aUEC">aUEC</Term>. If you added new parts, save
                them at the terminal first, or the ship comes back with its stock parts.{' '}
                <SourceLink href="https://support.robertsspaceindustries.com/hc/en-us/articles/360000093467-Ship-Insurance-FAQs">Official RSI insurance guide</SourceLink>
              </p>
              <p className="rounded-lg border border-white/10 bg-navyLight/60 px-4 py-3 text-sm text-starwhite/80">
                <strong className="text-starwhite">If this goes wrong:</strong> if your ship is stranded
                but not destroyed, empty its <Term name="Cargo">cargo</Term> before you file a claim.
                The old copy stops working once the replacement is made.{' '}
                <SourceLink href="https://support.robertsspaceindustries.com/hc/en-us/articles/40641434791959-Bricked-Items-and-Ships">Official RSI article on bricked ships</SourceLink>
              </p>

              <h3 className="heading-display pt-4 text-lg sm:text-xl">When you see &ldquo;30k&rdquo;</h3>
              <p>
                <Term name="30k">30k</Term> is short for error 30000. You lost your connection to the
                game server, often because the server crashed. Close the game and fully close the RSI
                Launcher (the app that starts the game), then start both again. Still stuck? In the Launcher, open Settings from the RSI
                drop-down, choose Games, and click Verify. Then check our sister site&rsquo;s{' '}
                <a href="https://starcitizenhelp.com/game-guides/error-codes" className="text-gold underline decoration-dotted hover:text-goldDark">error-code reference</a>{' '}
                or run your log file through the{' '}
                <a href="https://starcitizenhelp.com/tools/game-log-checker" className="text-gold underline decoration-dotted hover:text-goldDark">Game.log Checker</a>.
              </p>
              <p className="rounded-lg border border-white/10 bg-navyLight/60 px-4 py-3 text-sm text-starwhite/80">
                <strong className="text-starwhite">If this goes wrong:</strong> if 30k repeats at every
                login, RSI says it often follows logging out or crashing in a ship or ship bed. Its
                fix is{' '}
                <SourceLink href="https://support.robertsspaceindustries.com/hc/en-us/articles/360041509433-Character-Repair">Character Repair</SourceLink>,
                which can make your Personal Hangar vanish for a while. Leave your account alone
                until it finishes. Read that page first.
              </p>
            </div>
          </section>

          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8">
            <h2 className="heading-display text-2xl">You are ready.</h2>
            <p className="mt-3 text-base text-starwhite/85">
              That is the complete Day One Citizen guide. You know what you are paying for,
              how to set up the game, how to navigate the cities, and how to fly your ship.
              The rest of Star Citizen is just adding layers to this foundation.
            </p>
            <p className="mt-4 text-base text-starwhite/85">
              If you have not bought the game yet, use a{' '}
              <Term name="Referral Code">referral code</Term> at signup to start with 50,000
              free <Term name="UEC">UEC</Term>. o7, pilot.
            </p>
            <div className="mt-6">
              <CTAButton size="lg" href="/referral-code" trackingLabel="first-flight-cta" />
            </div>
          </div>

          <section>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                One last thing. Star Citizen is still in development, so your first
                flight may include a bug — a door that will not open, an elevator
                that never arrives, a hard crash. When that happens, the way to
                actually help is to{' '}
                <Link href="/report-a-bug" className="font-semibold text-gold hover:underline">
                  report it on the Issue Council
                </Link>
                . Our step-by-step guide shows you how.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  How do you take off in Star Citizen?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Press Right Alt + R to make the ship flight ready and wait for the HUD to load. Hold
                  Space to rise off the pad gently, then exit the hangar slowly — no more
                  than 20&ndash;30 m/s. Clipping the door frame at speed destroys ships.
                  Once you are clear of the hangar, press N to raise the landing gear.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  How does quantum travel work?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Open the map in your <Term name="mobiGlas">mobiGlas</Term> (F2), pick a destination,
                  and select Route to this Location. Hold B briefly to switch your master
                  mode to NAV, then middle-click to cycle the operating mode to QT. Point
                  your nose at the destination and the quantum drive calibrates. Hold
                  left-click to jump. The jump ends automatically when you reach the
                  destination.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Why will my quantum drive not spool?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Check three things: do you have a destination selected, are you in
                  a quantum-safe area (not inside a hangar or gravity well), and is
                  your quantum drive online in the power panel?
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  How do you land a ship?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Find a <Term name="Landing Pad">landing pad</Term>, slow down well
                  in advance, and approach at under 50 m/s. Press N to lower the
                  landing gear before touchdown, descend slowly with Left Ctrl, and
                  aim for the center of the pad.
                </p>
              </div>
            </div>
          </section>

          <nav className="flex items-center justify-between border-t border-white/10 pt-8 text-sm">
            <Link
              href="/day-one-citizen/getting-around"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Getting to the hangar
            </Link>
            <Link
              href="/day-one-citizen"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Back to all 12 sections →
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
