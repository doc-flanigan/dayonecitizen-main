import type { Metadata } from 'next'
import Image from 'next/image'
import Link from '@/components/Link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { GuideProgress, DoThisNow } from '@/components/GuideProgress'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Star Citizen First Day — What to Do First',
  description:
    'Ten things to do on your first day in Star Citizen — from the ASOP terminal to your first mission, collecting aUEC, and logging out safely.',
  alternates: { canonical: '/day-one-citizen/first-day' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Star Citizen First Day Guide: What to Do First',
    description:
      'Ten things to do on day one in Star Citizen, in order. From retrieving your ship at the ASOP terminal to your first mission and safe logout.',
    url: '/day-one-citizen/first-day',
    type: 'article',
  },
}

// Article structured data so this page's own content, not just its FAQ, is
// recognized as an article.
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Star Citizen First Day Guide: What to Do First',
  description:
    'Ten things to do on day one in Star Citizen, in order. From retrieving your ship at the ASOP terminal to your first mission and safe logout.',
  author: { '@type': 'Person', name: SITE.author, url: `${SITE.url}/about` },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  mainEntityOfPage: `${SITE.url}/day-one-citizen/first-day`,
}

// FAQPage structured data — mirrors the visible "Common questions" section so
// this page can earn rich results and AI answer-engine citations.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should you do first on day one in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wake up in your hab, open your mobiGlas with F1, and check your wallet. Then get to the spaceport, deliver and retrieve your ship at an ASOP terminal, and board it in your assigned hangar.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you get your ship at the spaceport in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At the spaceport, find an ASOP terminal, the ship retrieval console. Press F to interact, select your ship, choose Deliver, then Retrieve. Next, take a hangar elevator and choose your assigned hangar. RSI notes that some ASOP terminals do not show Deliver in Alpha 4.10.2.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good first mission for a new player?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A delivery mission. Open the Contracts Manager in your mobiGlas and pick a delivery that collects from and delivers to locations on the same planet or moon. A waypoint appears on your HUD pointing toward the pickup location.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should you ignore on your first day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Put off mining, salvage, combat bounties, pirate zones like GrimHEX, and joining an Org. Mining and salvage need ships you do not have yet, and combat bounties will punish a new pilot.',
      },
    },
  ],
}

export default function FirstDayPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Day One Citizen', url: '/day-one-citizen' },
          { name: 'Your First Day', url: '/day-one-citizen/first-day' },
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
            <GuideProgress slug="first-day" />
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
          <DoThisNow slug="first-day" />

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
                      to open your <Term name="mobiGlas">mobiGlas</Term>. Check your wallet — it shows your{' '}
                      <Term name="aUEC">aUEC</Term>, the in-game money. The base starting amount is 20,000, plus your referral
                      bonus if you used a code.
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
                      The quick version: take the elevator out of the hab tower and follow the in-game signs and markers
                      to the spaceport. Most cities need a tram ride. You can also set a destination
                      on the map in your <Term name="mobiGlas">mobiGlas</Term> to put a marker on your HUD.
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
                  <h2 className="heading-display text-xl sm:text-2xl">Find the ASOP terminal and retrieve your ship</h2>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-starwhite/85">
                    <p>
                      At the spaceport, look for an <Term name="ASOP">ASOP terminal</Term> — a
                      ship retrieval console. Each spaceport has one near its hangar elevators.
                      Press{' '}
                      <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F</kbd>{' '}
                      to interact with it.
                    </p>
                    <p>
                      Your ship will appear in the terminal&rsquo;s list. Select it and choose{' '}
                      <strong className="text-starwhite">Deliver</strong>, then{' '}
                      <strong className="text-starwhite">Retrieve</strong>. Once your ship is
                      delivered, head to your hangar to board it.
                    </p>
                    <p>
                      RSI lists a known issue in Alpha 4.10.2: some ASOP terminals do not show
                      the Deliver option. If yours does not, try another terminal.
                    </p>
                    <figure className="overflow-hidden rounded-2xl border border-white/10">
                      <Image
                        src="/images/guides/getting-around-asop-retrieve.webp"
                        alt="ASOP terminal with Retrieve button highlighted"
                        width={1920}
                        height={804}
                        className="h-auto w-full"
                      />
                      <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                        The ASOP terminal list with your starter ship selected — choose Deliver, then Retrieve.
                      </figcaption>
                    </figure>
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
                      Take a hangar elevator near the ASOP terminals and choose your assigned
                      hangar. Your ship is inside. Walk up to the entry point — a door ramp,
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
                    <figure className="overflow-hidden rounded-2xl border border-white/10">
                      <Image
                        src="/images/guides/first-day-enter-seat.webp"
                        alt="Interaction prompt to Enter Seat at a ship entry point"
                        width={1920}
                        height={804}
                        className="h-auto w-full"
                      />
                      <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                        The Enter Seat prompt at the ship&rsquo;s entry point.
                      </figcaption>
                    </figure>
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
                      <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Right Alt + R</kbd>{' '}
                      to make it flight ready and request power from the ship&rsquo;s systems. You will hear engines
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
                    <figure className="overflow-hidden rounded-2xl border border-white/10">
                      <Image
                        src="/images/guides/first-day-cockpit-hud.webp"
                        alt="Cockpit view with the HUD powered on and MFDs labelled"
                        width={1920}
                        height={804}
                        className="h-auto w-full"
                      />
                      <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                        Cockpit HUD powered on and ready after flight-ready.
                      </figcaption>
                    </figure>
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
                    <figure className="overflow-hidden rounded-2xl border border-white/10">
                      <Image
                        src="/images/guides/first-days-mobiglas-mission-manager.jpg"
                        alt="The in-game mobiGlas Mission Manager screen showing a list of available contracts with mission details and an accept option."
                        width={1200}
                        height={669}
                        className="h-auto w-full"
                      />
                      <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                        The mobiGlas Mission Manager, where you browse and accept contracts.
                      </figcaption>
                    </figure>
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
                      Hold{' '}
                      <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">B</kbd>{' '}
                      (a long press) to cycle your master mode to NAV, then middle-click to cycle into QT mode. Before that, open the map (F2), pick your
                      destination, and select Route to this Location. Point your nose
                      at it and the quantum drive auto-calibrates — a circular indicator
                      appears in your HUD. When it completes, hold left-click{' '}
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
                      When you are done, do not just close the game. Return to your hab or your
                      ship&rsquo;s bed. Press{' '}
                      <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F</kbd>{' '}
                      on the bed and choose the log out option. This is a{' '}
                      <Term name="Bedlogging">bedlog</Term>.
                    </p>
                    <p>
                      You can also log out from the Escape menu. Either way, you wake at the last
                      landing zone you flew to that has hab facilities. RSI&rsquo;s known
                      issues note many players hit the 30,000 error after logging out in a ship bed.
                    </p>
                    <figure className="overflow-hidden rounded-2xl border border-white/10">
                      <Image
                        src="/images/guides/first-day-bed-logout.webp"
                        alt="Interacting with a bed to log out safely"
                        width={1920}
                        height={804}
                        className="h-auto w-full"
                      />
                      <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                        Interact with a bed and choose the log out option for a clean bedlog.
                      </figcaption>
                    </figure>
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

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What should you do first on day one?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Wake up in your <Term name="Hab">hab</Term>, open your{' '}
                  <Term name="mobiGlas">mobiGlas</Term> with F1, and check your
                  wallet. Then get to the spaceport, deliver and retrieve your ship at an{' '}
                  <Term name="ASOP">ASOP terminal</Term>, and board it in your
                  assigned hangar.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  How do you get your ship at the spaceport?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  At the spaceport, find an ASOP terminal, the ship retrieval console.
                  Press F to interact, select your ship, choose Deliver, then
                  Retrieve. Next, take a hangar elevator and choose your assigned
                  hangar. RSI notes that some ASOP terminals do not show Deliver in
                  Alpha 4.10.2.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What is a good first mission for a new player?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  A delivery mission. Open the Contracts Manager in your mobiGlas
                  and pick a delivery that collects from and delivers to locations
                  on the same planet or moon. A waypoint appears on your HUD
                  pointing toward the pickup location.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What should you ignore on your first day?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Put off <Term name="Mining">mining</Term>,{' '}
                  <Term name="Salvage">salvage</Term>, combat bounties, pirate zones
                  like <Term name="GrimHEX">GrimHEX</Term>, and joining an{' '}
                  <Term name="Org">Org</Term>. Mining and salvage need ships you do
                  not have yet, and combat bounties will punish a new pilot.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" href="/referral-code" trackingLabel="first-day-cta" />
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
