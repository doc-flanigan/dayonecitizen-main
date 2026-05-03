import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'

export const metadata: Metadata = {
  title: 'Your First Flight — Day One Citizen',
  description:
    'The complete first-flight checklist: powering on your ship, taking off from the hangar, basic flight controls, quantum travel, and landing safely.',
  alternates: { canonical: '/day-one-citizen/first-flight' },
}

export default function FirstFlightPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-12 pt-32 sm:pt-40">
          <div className="container-narrow">
            <Link
              href="/day-one-citizen"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-gold"
            >
              <ArrowLeft size={12} aria-hidden /> Day One Citizen
            </Link>
            <p className="mt-5 font-mono text-xs text-gold">Section 12</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Your first flight
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              Power on. Raise the gear. Clear the hangar door. Burn for orbit. Here is the
              complete first-flight sequence — from the cockpit seat to your first{' '}
              <Term name="Quantum Travel">quantum jump</Term> and back to a safe landing.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">

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
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">1</kbd>{' '}
                  — this requests power from the ship&rsquo;s power plant. You will hear the
                  ship coming to life: systems initializing, engines spooling, the HUD
                  populating with information.
                </li>
                <li>
                  Wait for the HUD to fully load. You will see your speed indicator, shields
                  status, power triangle, and target display appear. This takes 5–10 seconds.
                </li>
                <li>
                  Optionally, press{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">2</kbd>{' '}
                  or{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">3</kbd>{' '}
                  to shift the <Term name="Power Triangle">power triangle</Term> toward engines
                  or shields. For a first flight, balanced is fine.
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
                  <strong className="text-starwhite">Raise landing gear</strong> — press{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">N</kbd>.
                  You will hear a mechanical clunk and see the gear indicator on your HUD change.
                  The ship will drop slightly as the gear retracts — this is normal.
                </li>
                <li>
                  <strong className="text-starwhite">Lift off gently</strong> — tap{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Space</kbd>{' '}
                  briefly to apply upward thrust. Rise slowly — you only need a few meters of
                  clearance from the pad.
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
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F1</kbd>)
                  and go to the StarMap. Click on any planet, moon, or station. Close{' '}
                  <Term name="mobiGlas">mobiGlas</Term>. The destination appears as a waypoint
                  on your HUD.
                </li>
                <li>
                  <strong className="text-starwhite">Point your nose at the waypoint</strong> —
                  your quantum drive only jumps in the direction you are facing. The HUD shows
                  a targeting reticule — align it with the quantum travel marker.
                </li>
                <li>
                  <strong className="text-starwhite">Spool the drive</strong> — hold{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">R</kbd>.
                  A circular charge indicator appears on your HUD. Hold it until the circle
                  completes and the display flashes, indicating ready.
                </li>
                <li>
                  <strong className="text-starwhite">Jump</strong> — hold{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">B</kbd>{' '}
                  to initiate quantum travel. The ship lurches forward, a tunnel effect
                  fills your vision, and you are traveling at a meaningful fraction of the
                  speed of light. Do not touch the controls during the jump.
                </li>
                <li>
                  <strong className="text-starwhite">Arrive</strong> — the jump ends automatically
                  when you reach the destination. You appear near your target. The ship
                  decelerates to normal speed.
                </li>
              </ol>
              <p>
                If the quantum drive will not spool (no indicator appears), check: do you have
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
                  If prompted for clearance, hold{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F</kbd>{' '}
                  while looking at the pad for the{' '}
                  <Term name="Inner Thought">Inner Thought</Term> option to request landing.
                </li>
                <li>
                  <strong className="text-starwhite">Slow down well in advance</strong> —
                  reduce throttle to zero and let{' '}
                  <Term name="IFCS">IFCS</Term> bleed off your speed. Approach the pad at
                  under 50 m/s, slowing further as you get close. Below 20 m/s near the
                  surface is ideal.
                </li>
                <li>
                  <strong className="text-starwhite">Lower landing gear</strong> — press{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">N</kbd>{' '}
                  before touchdown. Landing without gear extended damages the hull.
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
                  a short stop. Your ship stays on. Walk to the exit and hold{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F</kbd>{' '}
                  to exit to the crew area or directly outside.
                </li>
                <li>
                  <strong className="text-starwhite">Power down fully</strong> — hold{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">U</kbd>{' '}
                  for 3 seconds to cut master power. The ship goes dark. This is useful when
                  parked for a long time. To restart: press{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">1</kbd>{' '}
                  again when back in the seat.
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
              <CTAButton size="lg" trackingLabel="first-flight-cta" />
            </div>
          </div>

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
