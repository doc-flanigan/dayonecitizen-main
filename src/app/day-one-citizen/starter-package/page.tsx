import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'

export const metadata: Metadata = {
  title: 'Star Citizen Starter Packages: All 8 Options Under $150 Compared — Day One Citizen',
  description:
    'Which Star Citizen starter package should you buy? All eight game packages under $150 compared — Aurora Mk II, Cutter, Avenger Titan, Cutlass Black, and more.',
  alternates: { canonical: '/day-one-citizen/starter-package' },
  openGraph: {
    title: 'Star Citizen Starter Packages: All 8 Under $150 Compared',
    description:
      'Eight packages. Six careers. One recommendation. Which starter pack is right for you?',
    url: '/day-one-citizen/starter-package',
    type: 'article',
  },
}

export default function StarterPackagePage() {
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
            <p className="mt-5 font-mono text-xs text-gold">Section 05</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Which starter package should you buy?
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              There are eight game packages under $150 in the{' '}
              <Term name="RSI">RSI</Term> store. Each comes with a different
              ship built for a different career. Here is the full comparison,
              plus a clear recommendation for most new players.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">What every package includes</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Every game package in this list gives you the same base access:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>The Star Citizen digital download</li>
                <li>
                  Full access to the live{' '}
                  <Term name="PU">Persistent Universe</Term> alpha
                </li>
                <li>A starter ship with at least six months of hull insurance</li>
                <li>A self-land hangar to store your ship</li>
                <li>
                  10,000 starting <Term name="UEC">UEC</Term> — the in-game
                  currency you spend at shops and terminals
                </li>
              </ul>
              <p>
                Two packages — Citizen Starter and Miner &lsquo;Keystone&rsquo; — offer a{' '}
                <strong className="text-starwhite">Warbond price</strong>, which is a steeper
                discount available only when paying with real money. Store credit
                cannot be used for Warbond purchases. If you are buying fresh, the
                Warbond price is always the cheapest way in.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">The recommendation for most new players</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <strong className="text-starwhite">
                  Get the Citizen Starter Pack with the{' '}
                  <Term name="Aurora">Aurora Mk II</Term>.
                </strong>
              </p>
              <p>
                At $45 Warbond (or $60 standard), it is the cheapest entry in the store.
                It also includes the most bonus gear of any starter pack.
                You get{' '}
                <Term name="LTI">Lifetime Insurance</Term> — meaning the ship never
                needs to be re-insured — plus a full armor set, an undersuit, and a weapon.
                That equipment lets you play ground missions from your very first session.
              </p>
              <p>
                The <Term name="Aurora">Aurora Mk II</Term> is made by{' '}
                <Term name="RSI">RSI</Term>, the same in-fiction company that runs the
                game&rsquo;s lore. It has retractable wings and a modular design that supports
                cargo, light combat, and general exploration. It is forgiving to new pilots.
              </p>
              <p>
                <strong className="text-starwhite">Want something with more personality?</strong>{' '}
                The Generalist Starter Pack at $60 comes with the{' '}
                <Term name="Cutter">Drake Cutter</Term> — a tough, compact ship
                with four <Term name="SCU">SCU</Term> of cargo space. It has no bonus gear
                and only six months of insurance, but it is a genuinely solid first ship.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">All eight packages at a glance</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    <th className="px-4 py-3 font-semibold text-gold">Package</th>
                    <th className="px-4 py-3 font-semibold text-gold">Ship</th>
                    <th className="px-4 py-3 font-semibold text-gold">Price</th>
                    <th className="px-4 py-3 font-semibold text-gold">Insurance</th>
                    <th className="px-4 py-3 font-semibold text-gold">Best for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="bg-gold/5">
                    <td className="px-4 py-3 font-semibold text-starwhite">Citizen Starter</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      <Term name="Aurora">Aurora Mk II</Term>
                    </td>
                    <td className="px-4 py-3 text-starwhite/80">$45 WB&nbsp;/ $60</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      <Term name="LTI">Lifetime</Term>
                    </td>
                    <td className="px-4 py-3 text-starwhite/80">Most new players ★</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-starwhite">Generalist</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      <Term name="Cutter">Drake Cutter</Term>
                    </td>
                    <td className="px-4 py-3 text-starwhite/80">$60</td>
                    <td className="px-4 py-3 text-starwhite/80">6 months</td>
                    <td className="px-4 py-3 text-starwhite/80">Cargo + combat generalists</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-starwhite">Miner &lsquo;Keystone&rsquo;</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      <Term name="Golem">Drake Golem</Term>
                    </td>
                    <td className="px-4 py-3 text-starwhite/80">$67.50 WB&nbsp;/ $75</td>
                    <td className="px-4 py-3 text-starwhite/80">24 months</td>
                    <td className="px-4 py-3 text-starwhite/80">Miners</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-starwhite">Salvager</td>
                    <td className="px-4 py-3 text-starwhite/80">RSI Salvation</td>
                    <td className="px-4 py-3 text-starwhite/80">$75</td>
                    <td className="px-4 py-3 text-starwhite/80">6 months</td>
                    <td className="px-4 py-3 text-starwhite/80">Salvagers</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-starwhite">Duelist</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      <Term name="Avenger">Avenger Titan</Term>
                    </td>
                    <td className="px-4 py-3 text-starwhite/80">$75</td>
                    <td className="px-4 py-3 text-starwhite/80">6 months</td>
                    <td className="px-4 py-3 text-starwhite/80">Combat + light cargo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-starwhite">Hauler</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      <Term name="Intrepid">Crusader Intrepid</Term>
                    </td>
                    <td className="px-4 py-3 text-starwhite/80">$80</td>
                    <td className="px-4 py-3 text-starwhite/80">6 months</td>
                    <td className="px-4 py-3 text-starwhite/80">Delivery + hauling</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-starwhite">Outsider</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      <Term name="Syulen">Gatac Syulen</Term>
                    </td>
                    <td className="px-4 py-3 text-starwhite/80">$85</td>
                    <td className="px-4 py-3 text-starwhite/80">6 months</td>
                    <td className="px-4 py-3 text-starwhite/80">Alien-tech fans</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-starwhite">Privateer</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      <Term name="Cutlass">Cutlass Black</Term>
                    </td>
                    <td className="px-4 py-3 text-starwhite/80">$125</td>
                    <td className="px-4 py-3 text-starwhite/80">6 months</td>
                    <td className="px-4 py-3 text-starwhite/80">Combat + piracy</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              WB = Warbond price (real money only — store credit not accepted).
              All prices in USD. ★ = our pick for first-time buyers.
            </p>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">If you already know your career</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                If you have watched videos or read guides and already know the
                career you want, the six packs below give you a purpose-built ship
                from day one. They cost more than the Citizen Starter, but you will
                not need to upgrade as quickly.
              </p>
            </div>

            <div className="mt-8 space-y-6">

              <div className="rounded-2xl border border-white/5 bg-navyLight/30 p-6">
                <h3 className="text-lg font-semibold text-starwhite">
                  Miner &lsquo;Keystone&rsquo; Starter Pack — $67.50 WB / $75
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Ship: <Term name="Golem">Drake Golem</Term>
                  &ensp;·&ensp;Insurance: 24 months
                  &ensp;·&ensp;Starting money: 20,000 <Term name="UEC">UEC</Term>
                </p>
                <p className="mt-3 text-base leading-relaxed text-starwhite/85">
                  The <Term name="Golem">Drake Golem</Term> is Drake&rsquo;s dedicated solo
                  mining ship — built to break ore in deep space and haul it back alone.
                  This pack comes with twenty-four months of insurance, double the starting
                  money of most other packs, a full mining-themed armor set, and a tractor
                  beam tool. If mining is your career plan, nothing here needs to be bought
                  separately.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-navyLight/30 p-6">
                <h3 className="text-lg font-semibold text-starwhite">
                  Salvager Starter Pack — $75
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Ship: RSI Salvation
                  &ensp;·&ensp;Insurance: 6 months
                  &ensp;·&ensp;Starting money: 10,000 <Term name="UEC">UEC</Term>
                </p>
                <p className="mt-3 text-base leading-relaxed text-starwhite/85">
                  The RSI Salvation — <Term name="RSI">RSI</Term>&rsquo;s purpose-built
                  solo salvage ship — is designed to let a single pilot strip wrecked hulls
                  for parts and materials. Salvage is a patient, methodical career. It
                  requires no combat. It earns steady money from wreckage that other players
                  fly past.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-navyLight/30 p-6">
                <h3 className="text-lg font-semibold text-starwhite">
                  Duelist Starter Pack — $75
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Ship: <Term name="Avenger">Aegis Avenger Titan</Term>
                  &ensp;·&ensp;Insurance: 6 months
                  &ensp;·&ensp;Starting money: 10,000 <Term name="UEC">UEC</Term>
                </p>
                <p className="mt-3 text-base leading-relaxed text-starwhite/85">
                  The <Term name="Avenger">Avenger Titan</Term> is a retired military
                  ship re-fitted for civilian use, with its combat hold expanded for
                  maximum cargo space. It handles delivery missions well and fights back
                  when attacked. At the same price as the Salvager pack, the Titan is
                  widely considered the best value ship at the $75 mark — versatile
                  enough to try multiple careers before committing.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-navyLight/30 p-6">
                <h3 className="text-lg font-semibold text-starwhite">
                  Hauler Starter Pack — $80
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Ship: <Term name="Intrepid">Crusader Intrepid</Term>
                  &ensp;·&ensp;Insurance: 6 months
                  &ensp;·&ensp;Starting money: 10,000 <Term name="UEC">UEC</Term>
                </p>
                <p className="mt-3 text-base leading-relaxed text-starwhite/85">
                  The <Term name="Intrepid">Crusader Intrepid</Term> — a single-seat
                  freighter by Crusader Industries — focuses on short-range hauling and
                  courier work. Its two cargo holds can each be loaded from inside or
                  outside the ship. It has a small visible footprint, which helps when
                  navigating crowded landing zones. It also includes living quarters for
                  longer trips.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-navyLight/30 p-6">
                <h3 className="text-lg font-semibold text-starwhite">
                  Outsider Starter Pack — $85
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Ship: <Term name="Syulen">Gatac Syulen</Term>
                  &ensp;·&ensp;Insurance: 6 months
                  &ensp;·&ensp;Starting money: 10,000 <Term name="UEC">UEC</Term>
                </p>
                <p className="mt-3 text-base leading-relaxed text-starwhite/85">
                  The <Term name="Syulen">Gatac Syulen</Term> is a Human-Xi&rsquo;an hybrid
                  ship — built using Xi&rsquo;an design principles by Gatac Manufacture for
                  Human pilots. It handles differently from every other ship in the store
                  and introduces alien technology to a broader Human audience. If you want
                  to fly something that looks and flies unlike anything else from day one,
                  this is the only starter that delivers that.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-navyLight/30 p-6">
                <h3 className="text-lg font-semibold text-starwhite">
                  Privateer Starter Pack — $125
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Ship: <Term name="Cutlass">Drake Cutlass Black</Term>
                  &ensp;·&ensp;Insurance: 6 months
                  &ensp;·&ensp;Starting money: 10,000 <Term name="UEC">UEC</Term>
                </p>
                <p className="mt-3 text-base leading-relaxed text-starwhite/85">
                  The <Term name="Cutlass">Cutlass Black</Term> is Drake&rsquo;s most
                  well-known ship: fast, heavily armed for its size, and roomy enough to
                  carry whatever you take from others. At $125 it is the most expensive
                  starter pack by a wide margin. Only buy this if you are certain that
                  combat and piracy is your path — the Avenger Titan does much of the same
                  work for $50 less.
                </p>
              </div>

            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Which pack fits your plan?</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/5">
              <table className="w-full">
                <tbody className="divide-y divide-white/5 text-sm">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gold">I have no idea yet</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      Citizen Starter Pack — cheapest entry, most bonus gear,
                      best insurance
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gold">I want to fight and fly</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      Duelist (<Term name="Avenger">Avenger Titan</Term>) for value,
                      or Privateer (<Term name="Cutlass">Cutlass Black</Term>) if budget
                      is not a concern
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gold">I want to haul cargo</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      Hauler (<Term name="Intrepid">Intrepid</Term>) or Generalist
                      (<Term name="Cutter">Cutter</Term>)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gold">I want to mine</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      Miner &lsquo;Keystone&rsquo; (<Term name="Golem">Golem</Term>) —
                      the only dedicated mining starter in the store
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gold">I want to salvage wrecks</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      Salvager (RSI Salvation) — the only dedicated salvage starter
                      in the store
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gold">I want something alien and unique</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      Outsider (<Term name="Syulen">Syulen</Term>) — Human-Xi&rsquo;an
                      hybrid tech, unlike anything else here
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">What NOT to buy on day one</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The <Term name="RSI">RSI</Term>{' '}
                <Term name="Pledge">pledge store</Term> sells hundreds of ships at prices
                ranging from $50 to well over $1,000. Resist the temptation to spend
                more than you need to. Here is why:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  You do not yet know which career you will enjoy. Mining, hauling,
                  combat, and salvage each need entirely different ships. Buy for the role
                  you actually end up playing — not the one that looks good in a video.
                </li>
                <li>
                  Many mid- and high-end ships need a crew to operate well.
                  A solo player in an under-crewed large ship is often less effective
                  than a solo player in a smaller, agile one.
                </li>
                <li>
                  Ships can be bought in-game with earned{' '}
                  <Term name="aUEC">aUEC</Term>. The in-game ship market gives access
                  to most working ships without spending more real money.
                </li>
                <li>
                  Standalone ship purchases do not include game access. Do not
                  accidentally buy only a ship. Make sure your purchase is a full game
                  package — or that you already own one.
                </li>
              </ul>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" trackingLabel="starter-package-cta" />
          </div>

          <nav className="flex items-center justify-between text-sm">
            <Link
              href="/day-one-citizen/pledge-vs-purchase"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Pledge vs purchase
            </Link>
            <Link
              href="/day-one-citizen/install"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Installing the game <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
