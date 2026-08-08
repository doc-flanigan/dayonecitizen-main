import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import PageSources from '@/components/PageSources'

export const metadata: Metadata = {
  title: 'Star Citizen Keybinds for New Players',
  description:
    'Star Citizen keybinds for new players: on-foot, flight controls, power triangle, mobiGlas, quantum travel, and how to remap controls in-game.',
  alternates: { canonical: '/day-one-citizen/keybinds' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Star Citizen Keybinds for New Players',
    description:
      'Essential Star Citizen controls for day one: on-foot, flight, power triangle, mobiGlas, and quantum travel. Includes a full keybind reference table.',
    url: '/day-one-citizen/keybinds',
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
      name: 'What are the most important keybinds in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Six keybinds matter most on day one: F to interact with doors, terminals, and items; F1 to open mobiGlas; I to open your inventory; R in the pilot seat to make your ship flight ready; N to toggle landing gear; and B to switch to NAV mode, the first step of quantum travel. Star Citizen has hundreds of bindings, but a new player only needs about fifteen in the first session.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you change keybinds in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Press Escape to open the main menu, select Key Bindings, then click any binding and press the new key combination. Before making extensive changes, use the Export function to save your current bindings as a profile so you can restore the defaults.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Star Citizen support a joystick or HOTAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Star Citizen has native support for joysticks and flight sticks, with a separate section in the keybind menu for joystick axes and buttons. For a first session, keyboard and mouse is the most reliable way to learn the controls.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you turn your ship engines on in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sit in the pilot seat and press R. This is called "flight ready" — it powers the ship and its engines in one step. Press N to raise the landing gear once you are in the air.',
      },
    },
  ],
}

function KeyRow({ key: k, action }: { key: string; action: string }) {
  return (
    <tr className="border-t border-white/5">
      <td className="py-3 pr-6">
        <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">
          {k}
        </kbd>
      </td>
      <td className="py-3 text-sm text-starwhite/85">{action}</td>
    </tr>
  )
}

export default function KeybindsPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Day One Citizen', url: '/day-one-citizen' },
          { name: 'Keybinds', url: '/day-one-citizen/keybinds' },
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
            <p className="mt-5 font-mono text-xs text-gold">Section 09</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Key binds you need to know
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              Star Citizen has hundreds of keybinds. You only need about fifteen on your
              first day. Here they are — on foot, in a ship, and a few that every player
              should know immediately.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">

          <section>
            <p className="max-w-2xl text-base leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">Six keybinds matter most on day
              one.</strong>{' '}
              Press <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F</kbd> to
              interact, <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F1</kbd> to
              open <Term name="mobiGlas">mobiGlas</Term>, and{' '}
              <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">I</kbd> to
              open your inventory. In a ship,{' '}
              <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">R</kbd> makes
              you flight ready,{' '}
              <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">N</kbd> toggles
              landing gear, and{' '}
              <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">B</kbd> switches
              your Master Mode to NAV — the first step of{' '}
              <Term name="Quantum Travel">quantum travel</Term>. The full tables
              below cover the rest.
            </p>
            <p className="mt-4">
              <Link
                href="/quick-reference"
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
              >
                On your phone? Open the one-page cheat sheet &rarr;
              </Link>
            </p>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">On-foot controls</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-white/5">
              <table className="w-full">
                <thead className="bg-navyLight/60 text-left text-xs uppercase tracking-wider text-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Key</th>
                    <th className="px-4 py-3 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="px-4">
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Interact — tap to use doors, terminals, ship entry points, items on the ground, NPCs. Hold on an object for extended options.</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F1</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Open / close <Term name="mobiGlas">mobiGlas</Term></td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">I</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Open inventory</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Left Shift</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Sprint (hold while moving)</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">C</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Crouch (toggle)</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Left Ctrl</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Prone (hold)</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Space</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Jump</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">4</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Holster / draw weapon (hold)</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">R</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Reload</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Ship flight controls</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Star Citizen uses a mouse + keyboard control scheme by default. Mouse controls
                aim direction; keyboard controls throttle, strafe, and roll.
              </p>
            </div>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-white/5">
              <table className="w-full">
                <thead className="bg-navyLight/60 text-left text-xs uppercase tracking-wider text-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Key</th>
                    <th className="px-4 py-3 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">W / S</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Increase / decrease throttle</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">A / D</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Strafe left / right</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Q / E</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Roll left / right</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Space</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Strafe up (vertical thrust)</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Left Ctrl</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Strafe down</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Left Shift</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Afterburner (boost)</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Exit seat / enter seat</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">N</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Toggle landing gear</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">R</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Flight ready — toggles engines on / off</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">B</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Switch to NAV mode — first step of <Term name="Quantum Travel">quantum travel</Term> (middle-click for QT mode, aim at a destination, drive auto-calibrates, left-click to jump)</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">L</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Toggle ship lights</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Tab</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Cycle targets</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3"><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F1</kbd></td>
                    <td className="px-4 py-3 text-sm text-starwhite/85">Open <Term name="mobiGlas">mobiGlas</Term> (works in-cockpit too)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Capacitor management</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Your ship has three capacitors that regenerate over time. You control how fast
                each one refills by shifting regen toward whichever system you need most:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong className="text-starwhite">Weapons</strong> — faster recharge for energy weapons</li>
                <li><strong className="text-starwhite">Engines</strong> — faster refill for the thruster boost capacitor</li>
                <li><strong className="text-starwhite">Shields</strong> — faster shield regeneration</li>
              </ul>
              <p>
                Shift regen between the three with the F-key row:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F5</kbd>{' '}
                  — push regen toward weapons</li>
                <li><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F6</kbd>{' '}
                  — push regen toward engines</li>
                <li><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F7</kbd>{' '}
                  — push regen toward shields</li>
                <li><kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F8</kbd>{' '}
                  — reset to balanced (equal regen across all three)</li>
              </ul>
              <p>
                In a fight, push to shields to recover faster from hits. Trying to escape?
                Push to engines so your thruster boost refills quickly. On a routine delivery
                run, balanced across all three is fine.
              </p>
              <p>
                The{' '}
                <Term name="MFD">MFD</Term> (multi-function display) in your cockpit shows the
                current capacitor distribution. Glance at it to see where your regen is sitting.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Finding and customizing keybinds</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Star Citizen&rsquo;s full keybind list is enormous — covering every possible
                interaction in the game. To access it:
              </p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Press <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Escape</kbd> to open the main menu</li>
                <li>Select <strong className="text-starwhite">Key Bindings</strong></li>
                <li>Browse categories: On Foot, Flight, Mining, etc.</li>
              </ol>
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/guides/keybinds-options-keybindings-screen.jpg"
                  alt="The in-game options menu on the Keybindings screen, showing binding categories and individual key assignments."
                  width={1200}
                  height={670}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  The Keybindings screen in the in-game options menu.
                </figcaption>
              </figure>
              <p>
                You can change any binding by clicking it and pressing the new key combination.
                Before making extensive changes, use the{' '}
                <strong className="text-starwhite">Export</strong> function to save your current
                bindings as a profile. This lets you restore the defaults if something goes wrong.
              </p>
              <p>
                HOTAS and controller users: Star Citizen has native support for joysticks and
                flight sticks. The keybind menu has a separate section for joystick axes and
                buttons. Many dedicated sim pilots use a full HOTAS setup. For day one,
                keyboard and mouse is the most reliable way to learn the controls.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What are the most important keybinds in Star Citizen?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Six on day one: F to interact, F1 for{' '}
                  <Term name="mobiGlas">mobiGlas</Term>, I for inventory, R for
                  flight ready, N for landing gear, and B to switch to NAV mode —
                  the first step of quantum travel. Everything else can wait until
                  you need it.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  How do you change keybinds?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Press Escape, select Key Bindings, click any binding, and press
                  the new keys. Export your bindings first so you can restore the
                  defaults if something goes wrong.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Does Star Citizen support a joystick or HOTAS?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Yes — native support, with a separate keybind section for
                  joystick axes and buttons. For day one, keyboard and mouse is
                  the most reliable way to learn.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  How do you turn your ship engines on?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Sit in the pilot seat and press R. That one key — flight ready —
                  powers the ship and its engines. Press N to raise the landing
                  gear once you are airborne.
                </p>
              </div>
            </div>
          </section>

          <nav className="flex items-center justify-between border-t border-white/10 pt-8 text-sm">
            <Link
              href="/day-one-citizen/first-launch"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> First launch
            </Link>
            <Link
              href="/day-one-citizen/first-day"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Your first day in the &lsquo;Verse <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>

        <PageSources route="/day-one-citizen/keybinds" />
      </main>
      <Footer />
    </>
  )
}
