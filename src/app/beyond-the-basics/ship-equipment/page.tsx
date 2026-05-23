import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'

export const metadata: Metadata = {
  title: 'Star Citizen Ship Equipment Guide (2026) | dayonecitizen.com',
  description:
    'Ship components in Star Citizen explained: power plants, coolers, quantum drives, shields, and weapons. How grades affect performance and radar signature. Updated 2026.',
  alternates: { canonical: '/beyond-the-basics/ship-equipment' },
  openGraph: {
    title: 'Star Citizen Ship Equipment Guide (2026)',
    description:
      'Ship components in Star Citizen explained: power plants, coolers, quantum drives, shields, and weapons. How grades affect performance and radar signature.',
    url: '/beyond-the-basics/ship-equipment',
  },
}

export default function ShipEquipmentPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy min-h-screen">
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
              Star Citizen Ship Equipment Guide (2026)
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              What every component does, how grades trade performance against radar
              detectability, and how to swap parts at a ship terminal.
            </p>
          </div>
        </header>

        {/* Content */}
        <section className="py-14">
          <div className="container-wide px-4 max-w-3xl">

            <p className="text-starwhite/80 mb-8 leading-relaxed">
              Every ship in Star Citizen is made up of interchangeable parts. The stock
              components that come with a ship are fine to start with, but swapping them
              out lets you tune the ship for combat, stealth, cargo hauling, or long-range
              exploration. This guide covers what each component type does and which
              choices matter most for new players.
            </p>

            {/* Power plant */}
            <h2 className="font-display text-2xl font-bold text-gold mt-4 mb-4">
              Power plants
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              The power plant generates electricity for everything else on your ship —
              weapons, shields, engines, and all other systems. If your power plant
              cannot supply enough electricity, some systems will throttle down or
              shut off.
            </p>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Components come in three grades. Grade determines the trade-off between
              raw power output and how easily enemy scanners can detect you:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Grade A:</strong> Highest power
                output. Runs all weapons, shields, and engines simultaneously at peak.
                Emits a strong EM (electromagnetic) signal — easier to detect on radar.
                Best for combat.
              </li>
              <li>
                <strong className="text-starwhite">Grade B:</strong> Balanced power
                and EM signal. This is the default on most ships as they come from
                the manufacturer.
              </li>
              <li>
                <strong className="text-starwhite">Grade C:</strong> Lowest power
                output and the lowest EM signal. Used in stealth builds where staying
                off radar matters more than peak performance.
              </li>
            </ul>

            {/* Coolers */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Coolers
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Running your ship at full power generates heat. The cooler dissipates that
              heat. If heat builds up faster than the cooler can handle it, components
              start throttling or shutting down.
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Industrial cooler:</strong> High
                cooling capacity at the cost of higher power draw. For ships that run
                hot under sustained fire.
              </li>
              <li>
                <strong className="text-starwhite">Stealth cooler:</strong> Lower
                cooling capacity but minimal IR (infrared) signal. Pairs with Grade C
                power plants for stealth builds.
              </li>
              <li>
                <strong className="text-starwhite">Performance cooler:</strong> A
                balance of cooling and power draw. Good default for most non-stealth
                ships.
              </li>
            </ul>

            {/* Quantum drives */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Quantum drives
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              The quantum drive powers{' '}
              <Term name="Quantum Travel">quantum travel</Term> — the faster-than-light
              mode you use to cross large distances between planets and stations. Two
              stats matter most: spool time (how long before you can jump) and fuel
              efficiency (how far per tank).
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Military drive:</strong> Fastest
                spool time. Best for quick escapes or routes where combat is likely.
              </li>
              <li>
                <strong className="text-starwhite">Civilian drive:</strong> Balanced
                spool time and fuel efficiency. Good all-purpose choice.
              </li>
              <li>
                <strong className="text-starwhite">Industrial drive:</strong> Slowest
                spool but highest fuel efficiency. Best for long-haul{' '}
                <Term name="Cargo">cargo</Term> runs or deep exploration.
              </li>
            </ul>

            {/* Shields */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Shields
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Shields protect your hull from damage. Most ships have a multi-face shield
              — you can reinforce specific sides (front, rear, left, right) by redirecting
              shield power through the shield management display in the cockpit. Smaller
              ships often have a single-face shield that distributes protection evenly.
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Military shields:</strong> Highest
                total hit points, slower recharge rate. Good for absorbing sustained
                fire in a prolonged fight.
              </li>
              <li>
                <strong className="text-starwhite">Civilian shields:</strong> Balanced
                hit points and recharge. Solid default for most roles.
              </li>
              <li>
                <strong className="text-starwhite">Stealth shields:</strong> Lower hit
                points but faster recharge and minimal EM output. Pairs with stealth
                builds.
              </li>
            </ul>

            {/* Weapons */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Ship weapons
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Ship weapons fall into two categories. The choice between them depends on
              whether you are trying to destroy shields quickly or punch through to the
              hull underneath.
            </p>

            <h3 className="font-display text-lg font-bold text-starwhite mt-6 mb-3">
              Ballistic weapons
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-starwhite/80">
              <li>Use physical ammunition. You will run out eventually during a long fight.</li>
              <li>Partially bypass shields — they deal some direct hull damage even through an active shield.</li>
              <li>Higher damage per hit than equivalent energy weapons.</li>
            </ul>

            <h3 className="font-display text-lg font-bold text-starwhite mt-6 mb-3">
              Energy weapons
            </h3>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>Use power from the ship&apos;s power plant. No ammunition to run out of.</li>
              <li>Must fully deplete shields before dealing hull damage.</li>
              <li>High shield damage per second — excellent for stripping shields quickly.</li>
              <li>Generate heat during sustained fire, which stresses your cooler.</li>
            </ul>

            {/* Power triangle */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              The power triangle
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              In the cockpit, you have access to a power distribution display — often
              called the power triangle. It lets you redirect power between three
              systems during flight:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li><strong className="text-starwhite">Weapons:</strong> More power increases fire rate and charge speed for energy weapons.</li>
              <li><strong className="text-starwhite">Shields:</strong> More power speeds up how fast your shields recharge.</li>
              <li><strong className="text-starwhite">Engines:</strong> More power increases your top speed.</li>
            </ul>
            <p className="text-starwhite/80 mb-8 leading-relaxed">
              Shifting power dynamically during a fight gives experienced pilots an edge.
              When chasing an enemy, push power to engines. When being fired on, push
              it to shields. When you have a clear shot, push it to weapons.
            </p>

            {/* How to swap */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              How to swap ship components
            </h2>
            <ol className="list-decimal pl-6 mb-8 space-y-3 text-starwhite/80">
              <li>
                Buy replacement components at an equipment shop. Dumper&apos;s Depot
                (most orbital stations) is the easiest to reach. Omega Pro in New
                Babbage and Apocalypse Arms in Area18 have better selection.
              </li>
              <li>
                Go to an{' '}
                <Term name="ASOP">ASOP terminal</Term> in a spaceport or access
                the ship&apos;s loadout panel while on board.
              </li>
              <li>
                Open the loadout screen and drag the new component into the correct
                slot.
              </li>
              <li>
                Confirm the change. Components must match the size rating of the slot
                they go in — you cannot put a size three component in a size one slot.
              </li>
            </ol>

            {/* FAQ */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-6">
              Common questions
            </h2>

            <div className="space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What is the best component setup for combat?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  For combat: Grade A power plant (runs everything at full power),
                  military shields (maximum hit points), and a performance cooler.
                  Energy weapons scale well with a Grade A plant — they never run out
                  of ammo and deal high shield damage. Test your full loadout in Arena
                  Commander before committing to it in the Persistent Universe.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Do component grades affect whether enemies can detect me?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Yes. Grade A power plants have the highest EM signal, making you
                  easier to spot on radar. Grade C components minimize your EM and IR
                  output. Running at full throttle or firing weapons continuously spikes
                  your IR signature regardless of component grade — for true stealth you
                  also need to manage your throttle and fire rate.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Should I use ballistic or energy weapons?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Energy weapons are better at stripping shields quickly. Ballistic
                  weapons bypass shields partially and are better if you need to deal
                  hull damage. Many experienced pilots mix the two — energy weapons for
                  shields, ballistics for the hull once shields are down. Ammo management
                  for ballistics is an extra consideration on longer missions.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/beyond-the-basics/inventory-management"
                  className="text-gold hover:underline text-sm"
                >
                  Next: Inventory Management &rarr;
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
              bonus credits — enough for your first component upgrades.
            </p>
            <CTAButton trackingLabel="beyond-basics-ship-equipment-bottom" size="lg">
              Get your 50K UEC bonus
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
