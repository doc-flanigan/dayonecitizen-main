import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'

export const metadata: Metadata = {
  title: "Your First Day in the 'Verse — Day One Citizen",
  description:
    'A calm, ordered list of the first ten things to do on your first day in Star Citizen — and what to ignore until later.',
  alternates: { canonical: '/day-one-citizen/first-day' },
}

export default function FirstDayPage() {
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
            <p className="mt-5 font-mono text-xs text-gold">Section 10</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Your first day in the &lsquo;Verse
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              You wake up in your <Term name="Hab">hab</Term>. You walk outside. You see other
              players. You briefly panic. Here is a calm, ordered list of the first ten things
              to do — and what to ignore until later.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-12 py-16">

          <div className="space-y-8">

            {/* Step 1 */}
            <div className="card-surface p-7">
              <div className="flex items-start gap-5">
                <span className="shrink-0 font-mono text-2xl font-bold text-gold/60">01</span>
                <div>
                  <h2 className="heading-display text-xl sm:text-2xl">Wake up and get oriented</h2>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-starwhite/85">
                    <p>
                      You spawn in your <Term name="Hab">hab</Term> — a small personal apartment.
                      Look around. Notice the bed (you will need it to log out safely), the
                      storage terminal on the wall, and the door.
                    </p>
                    <p>
                      Press{' '}
                      <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F1</kbd>{' '}
                      to open your <Term name="mobiGlas">mobiGlas</Term>. Check your wallet —
                      your 50,000 <Term name="UEC">UEC</Term> referral bonus should be there.
                      Note your starting city. Close <Term name="mobiGlas">mobiGlas</Term> and
                      head to the door.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="card-surface p-7">
              <div className="flex items-start gap-5">
                <span className="shrink-0 font-mono text-2xl font-bold text-gold/60">02</span>
                <div>
                  <h2 className="heading-display text-xl sm:text-2xl">Get to the spaceport</h2>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-starwhite/85">
                    <p>
                      Each city has its own route from the hab district to the spaceport. The
                      full routes for all four major cities are in{' '}
                      <Link href="/day-one-citizen/getting-around" className="text-gold underline-offset-4 hover:underline">
                        Section 11: Getting from your hab to the hangar
                      </Link>.
                    </p>
                    <p>
                      The quick version: take the elevator out of the hab tower, follow transit
                      signage to the spaceport, and look for the hangar district once there.
                      Hold{' '}
                      <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F</kbd>{' '}
                      on any kiosk or terminal for the{' '}
                      <Term name="Inner Thought">Inner Thought</Term> context menu, which often
                      has a &ldquo;Set Destination&rdquo; option to put a marker on your HUD.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="card-surface p-7">
              <div className="flex items-start gap-5">
                <span className="shrink-0 font-mono text-2xl font-bold text-gold/60">03</span>
                <div>
                  <h2 className="heading-display text-xl sm:text-2xl">Find the ASOP terminal and claim your ship</h2>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-starwhite/85">
                    <p>
                      At the spaceport, look for an <Term name="ASOP">ASOP terminal</Term> — a
                      vertical kiosk with a ship icon. These are typically near the hangar bay
                      entrance, after a security checkpoint. Hold{' '}
                      <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F</kbd>{' '}
                      to interact with it.
                    </p>
                    <p>
                      Your starter ship will appear in the terminal&rsquo;s list. Select it and
                      choose <strong className="text-starwhite">Claim</strong>. The terminal
                      assigns you a hangar number (e.g., &ldquo;Hangar 7-A&rdquo;). Note this
                      number, then walk to that hangar door.
                    </p>
                    <p>
                      If the terminal shows &ldquo;Reclaim&rdquo; instead of &ldquo;Claim,&rdquo;
                      the ship is still spawning. Wait 30–60 seconds and try again.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="card-surface p-7">
              <div className="flex items-start gap-5">
                <span className="shrink-0 font-mono text-2xl font-bold text-gold/60">04</span>
                <div>
                  <h2 className="heading-display text-xl sm:text-2xl">Board your ship</h2>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-starwhite/85">
                    <p>
                      Walk to your assigned hangar. The door opens automatically when you
                      approach. Your ship is inside. Walk up to the entry point — a door ramp,
                      a ladder, or an access hatch depending on the ship.
                    </p>
                    <p>
                      Hold{' '}
                      <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F</kbd>{' '}
                      at the entry point. Select{' '}
                      <strong className="text-starwhite">Enter Seat</strong> or the equivalent
                      option. You are now in the cockpit.
                    </p>
                    <p>
                      Take a moment. Look around the cockpit.{' '}
                      <Term name="MFD">MFDs</Term> (multi-function displays) line the sides.
                      The central display shows your speed. You are about to fly a spaceship.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="card-surface p-7">
              <div className="flex items-start gap-5">
                <span className="shrink-0 font-mono text-2xl font-bold text-gold/60">05</span>
                <div>
                  <h2 className="heading-display text-xl sm:text-2xl">Power on and take off</h2>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-starwhite/85">
                    <p>
                      Your ship is unpowered. Press{' '}
                      <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">1</kbd>{' '}
                      to request power from the ship&rsquo;s systems. You will hear engines
                      spooling, systems coming online. Wait for the HUD to populate.
                    </p>
                    <p>
                      Toggle landing gear up with{' '}
                      <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">N</kbd>.
                      Apply gentle upward thrust with{' '}
                      <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Space</kbd>{' '}
                      to lift off. Move the mouse to steer. Exit the hangar{' '}
                      <strong className="text-starwhite">slowly</strong> — the hangar door and
                      walls will damage your ship if you clip them.
                    </p>
                    <p>
                      Once clear of the hangar, you are in open air or space. The full take-off
                      sequence is covered in{' '}
                      <Link href="/day-one-citizen/first-flight" className="text-gold underline-offset-4 hover:underline">
                        Section 12: Your first flight
                      </Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="card-surface p-7">
              <div className="flex items-start gap-5">
                <span className="shrink-0 font-mono text-2xl font-bold text-gold/60">06</span>
                <div>
                  <h2 className="heading-display text-xl sm:text-2xl">Accept a delivery mission</h2>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-starwhite/85">
                    <p>
                      Open <Term name="mobiGlas">mobiGlas</Term> (
                      <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F1</kbd>)
                      and go to the Contracts Manager. You will see a list of available jobs.
                      Look for delivery missions — they show a package icon and describe picking
                      up and dropping off <Term name="Cargo">cargo</Term>.
                    </p>
                    <p>
                      Select a delivery mission in the{' '}
                      <Term name="Stanton">Stanton</Term> system — one that picks up from and
                      delivers to locations on the same planet or moon you are near. Accept it.
                      A waypoint appears on your HUD pointing toward the pickup location.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 7 */}
            <div className="card-surface p-7">
              <div className="flex items-start gap-5">
                <span className="shrink-0 font-mono text-2xl font-bold text-gold/60">07</span>
                <div>
                  <h2 className="heading-display text-xl sm:text-2xl">Use quantum travel to reach the destination</h2>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-starwhite/85">
                    <p>
                      If the pickup location is far away — across a moon, at an orbital station,
                      or on another body in the system — you will use{' '}
                      <Term name="Quantum Travel">quantum travel</Term> to get there fast.
                    </p>
                    <p>
                      With your destination targeted (it appears as a waypoint), hold{' '}
                      <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">R</kbd>{' '}
                      to spool the quantum drive. A circular progress bar appears in your HUD.
                      When it completes and flashes, hold{' '}
                      <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">B</kbd>{' '}
                      to jump. The ship accelerates dramatically and you are transported across
                      the system in seconds to minutes depending on the distance.
                    </p>
                    <p>
                      Point your nose at the destination marker before spooling — the quantum
                      drive only jumps in the direction you are already facing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 8 */}
            <div className="card-surface p-7">
              <div className="flex items-start gap-5">
                <span className="shrink-0 font-mono text-2xl font-bold text-gold/60">08</span>
                <div>
                  <h2 className="heading-display text-xl sm:text-2xl">Pick up the cargo, deliver it, get paid</h2>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-starwhite/85">
                    <p>
                      Land at the pickup location — look for a{' '}
                      <Term name="Landing Pad">landing pad</Term> (a marked flat surface, often
                      with yellow/white markings). Lower landing gear (
                      <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">N</kbd>)
                      before touchdown.
                    </p>
                    <p>
                      Inside the location, find the box or item for your mission. It will be
                      highlighted with a mission marker. Hold{' '}
                      <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F</kbd>{' '}
                      to pick it up. Carry it to your ship&rsquo;s{' '}
                      <Term name="Cargo">cargo</Term> hold and place it inside.
                    </p>
                    <p>
                      Fly to the delivery location, land, and carry the box to the marked
                      dropoff point. The mission completes automatically and{' '}
                      <Term name="aUEC">aUEC</Term> lands in your wallet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 9 */}
            <div className="card-surface p-7">
              <div className="flex items-start gap-5">
                <span className="shrink-0 font-mono text-2xl font-bold text-gold/60">09</span>
                <div>
                  <h2 className="heading-display text-xl sm:text-2xl">Explore and build a routine</h2>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-starwhite/85">
                    <p>
                      After your first mission, you have a sense of the loop. Spend the rest of
                      your first session exploring:
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        Visit a <strong className="text-starwhite">space station</strong> — fly to
                        the nearest orbital station. They have shops, medical bays, and terminals.
                      </li>
                      <li>
                        Walk around a <strong className="text-starwhite">city</strong> — step out
                        of the spaceport and explore the city district. Star Citizen&rsquo;s
                        cities are enormous and genuinely interesting to walk through.
                      </li>
                      <li>
                        Run a second mission — now you know the loop, it goes faster.
                      </li>
                      <li>
                        Visit a shop — use some{' '}
                        <Term name="aUEC">aUEC</Term> to buy armor or a weapon from a city
                        retailer. Equip it from your inventory (
                        <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">I</kbd>).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 10 */}
            <div className="card-surface p-7">
              <div className="flex items-start gap-5">
                <span className="shrink-0 font-mono text-2xl font-bold text-gold/60">10</span>
                <div>
                  <h2 className="heading-display text-xl sm:text-2xl">Log out safely</h2>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-starwhite/85">
                    <p>
                      When you are done, do not just close the game. Return to your ship or any
                      location with a bed. Hold{' '}
                      <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F</kbd>{' '}
                      on the bed and select <strong className="text-starwhite">Bed Log</strong>.
                      This performs a <Term name="Bedlogging">bedlog</Term> — a clean save
                      that preserves your character&rsquo;s exact location and state.
                    </p>
                    <p>
                      If you cannot reach a bed, use the Escape menu &rarr; log out. This
                      performs a standard logout and respawns you at your set home location
                      next session.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">What to ignore on day one</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Star Citizen has a lot. Not all of it is for day one. Deliberately put off:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">Mining</strong> — requires a{' '}
                  <Term name="Mining">mining</Term>-capable ship (Prospector, MOLE) or a
                  handheld mining laser. You do not have either yet.
                </li>
                <li>
                  <strong className="text-starwhite">Salvage</strong> — requires a{' '}
                  <Term name="Salvage">salvage</Term> ship. Same situation.
                </li>
                <li>
                  <strong className="text-starwhite">Combat bounties</strong> — learn to fly
                  well first. Combat bounties against human{' '}
                  <Term name="PvP">PvP</Term> targets will punish a new pilot.
                </li>
                <li>
                  <strong className="text-starwhite">Pirate zones like{' '}
                  <Term name="GrimHEX">GrimHEX</Term></strong> — fun eventually, unnecessary
                  friction on day one when you are learning the basics.
                </li>
                <li>
                  <strong className="text-starwhite">Joining an{' '}
                  <Term name="Org">Org</Term></strong> — there is time for this. Get your
                  bearings first.
                </li>
              </ul>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" trackingLabel="first-day-cta" />
          </div>

          <nav className="flex items-center justify-between text-sm">
            <Link
              href="/day-one-citizen/keybinds"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Key binds
            </Link>
            <Link
              href="/day-one-citizen/getting-around"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Getting to the hangar <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
