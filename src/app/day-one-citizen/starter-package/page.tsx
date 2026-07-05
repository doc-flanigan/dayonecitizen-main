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

export const metadata: Metadata = {
  title: 'Star Citizen Starter Packages 2026: All 8 Options Compared — Day One Citizen',
  description:
    'Which Star Citizen starter package should you buy? All eight packages compared — $45 Citizen Starter to $125 Privateer. Includes Warbond prices.',
  alternates: { canonical: '/day-one-citizen/starter-package' },
  openGraph: {
    title: 'Star Citizen Starter Packages 2026: All 8 Options Compared',
    description:
      'Eight packages. Six careers. One recommendation. Which starter pack is right for you?',
    url: '/day-one-citizen/starter-package',
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
      name: 'What is the best starter package in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most new players: the Citizen Starter Pack at $45. It is the cheapest way into the game and comes with the Aurora Mk II — a forgiving starter ship with Lifetime Insurance — plus a full armor set, an undersuit, and a weapon. Learn the game first, then upgrade later via a CCU for the price difference.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much is a Star Citizen starter package?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Starter game packages begin at $45, and there are eight packages under $125, each built around a different career ship. Some carry a Warbond price — a steeper discount available only when paying with new money rather than store credit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does every Star Citizen game package include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every game package includes the Star Citizen digital download, full access to the live Persistent Universe alpha, a starter ship with at least six months of hull insurance, a self-land hangar, and 10,000 starting UEC.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Warbond pricing in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Warbond price is a discount that applies only when you pay with real money — store credit cannot be used. If you are buying fresh with no existing store credit, always check for a Warbond version of the package first.',
      },
    },
  ],
}

export default function StarterPackagePage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Day One Citizen', url: '/day-one-citizen' },
          { name: 'Starter Package', url: '/day-one-citizen/starter-package' },
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
            <p className="mt-5 font-mono text-xs text-gold">Section 05</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Which starter package should you buy?
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              There are eight game packages under $125 in the{' '}
              <Term name="RSI">RSI</Term> store. Each comes with a different
              ship built for a different career. Here is the full comparison,
              plus a clear recommendation for most new players.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">

          <section>
            <p className="max-w-2xl text-base leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">Not sure what you want to do
              yet? Get the Citizen Starter Pack at $45.</strong>{' '}
              It is the cheapest way in, with the{' '}
              <Term name="Aurora">Aurora Mk II</Term> and{' '}
              <Term name="LTI">Lifetime Insurance</Term>. The full comparison
              below covers all eight packages if you already know your career.
            </p>
          </section>

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
                Some packages carry a{' '}
                <strong className="text-starwhite">Warbond price</strong> — a steeper
                discount available only when paying with real money. Store credit
                cannot be used for Warbond purchases. If you are buying fresh with no
                existing store credit, always check for a Warbond price first.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">The recommendation for most new players</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <strong className="text-starwhite">
                  If you are not sure what you want to do yet: get the Citizen Starter Pack at $45.
                </strong>
              </p>
              <p>
                It is the cheapest way into the game. It comes with the{' '}
                <Term name="Aurora">Aurora Mk II</Term> — a forgiving starter ship
                with{' '}
                <Term name="LTI">Lifetime Insurance</Term> — plus a full armor set,
                an undersuit, and a weapon. That kit lets you play ground missions
                from your very first session. Learn the game first, then upgrade via
                a <Term name="CCU">CCU</Term> later for the price difference.
              </p>
              <p>
                <strong className="text-starwhite">
                  Looking for a deal? The Generalist &lsquo;DefenseCon&rsquo; Starter Pack is $51 at Warbond pricing (was $60).
                </strong>
              </p>
              <p>
                Warbond means new money only — no store credit — but if you are buying
                fresh, that is a $60 pack for $51. The &ldquo;Generalist&rdquo; ship handles
                multiple roles rather than locking you into one career from day one.
                Worth grabbing while the Warbond price is active.
              </p>
              <p>
                <strong className="text-starwhite">
                  Already know your career? Get the role pack that matches it.
                </strong>
              </p>
              <p>
                If you tried the Free Fly and found a gameplay loop you loved, the
                six role packs at $75–$125 give you a purpose-built ship from day one.
                They cost more, but you will not need to upgrade as quickly.
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
                  <tr className="bg-gold/5">
                    <td className="px-4 py-3 font-semibold text-starwhite">Generalist &lsquo;DefenseCon&rsquo;</td>
                    <td className="px-4 py-3 text-starwhite/80">Generalist ship</td>
                    <td className="px-4 py-3 text-starwhite/80">$51 WB&nbsp;/ $60</td>
                    <td className="px-4 py-3 text-starwhite/80">6 months</td>
                    <td className="px-4 py-3 text-starwhite/80">Sale pick ★</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-starwhite">Salvager</td>
                    <td className="px-4 py-3 text-starwhite/80">RSI Salvation</td>
                    <td className="px-4 py-3 text-starwhite/80">$75</td>
                    <td className="px-4 py-3 text-starwhite/80">6 months</td>
                    <td className="px-4 py-3 text-starwhite/80">Salvagers</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-starwhite">Miner</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      <Term name="Golem">Drake Golem</Term>
                    </td>
                    <td className="px-4 py-3 text-starwhite/80">$75</td>
                    <td className="px-4 py-3 text-starwhite/80">24 months</td>
                    <td className="px-4 py-3 text-starwhite/80">Miners</td>
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
              All prices in USD. ★ = recommended picks.
            </p>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">The role packs in detail</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                If you tried the Free Fly and found a loop you enjoyed, these
                six packs give you a purpose-built ship from day one. They cost
                more than the Citizen Starter, but you will not need to upgrade
                as quickly.
              </p>
            </div>

            <div className="mt-8 space-y-6">

              <div className="rounded-2xl border border-white/5 bg-navyLight/30 p-6">
                <h3 className="text-lg font-semibold text-starwhite">
                  Miner Starter Pack — $75
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
                  when attacked. At the same price as the Salvager and Miner packs, the
                  Titan is widely considered the best value ship at the $75 mark —
                  versatile enough to try multiple careers before committing.
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
                      Citizen Starter Pack ($45) — cheapest entry, most bonus gear, best insurance
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gold">I want a deal right now</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      Generalist &lsquo;DefenseCon&rsquo; ($51 Warbond) — $60 pack at a discount while Warbond pricing is active
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gold">I want to fight and fly</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      Duelist (<Term name="Avenger">Avenger Titan</Term>, $75) for value,
                      or Privateer (<Term name="Cutlass">Cutlass Black</Term>, $125) if budget
                      is not a concern
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gold">I want to haul cargo</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      Hauler (<Term name="Intrepid">Intrepid</Term>, $80)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gold">I want to mine</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      Miner (<Term name="Golem">Golem</Term>, $75) —
                      the only dedicated mining starter in the store
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gold">I want to salvage wrecks</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      Salvager (RSI Salvation, $75) — the only dedicated salvage starter
                      in the store
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gold">I want something alien and unique</td>
                    <td className="px-4 py-3 text-starwhite/80">
                      Outsider (<Term name="Syulen">Syulen</Term>, $85) — Human-Xi&rsquo;an
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

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What is the best starter package?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  For most new players, the Citizen Starter Pack at $45 — the
                  cheapest way in, with the Aurora Mk II, Lifetime Insurance,
                  and a full armor kit. Upgrade later via a CCU for the price
                  difference.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  How much does a starter package cost?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Packages start at $45, and all eight options in this guide are
                  under $125. Check for a Warbond price if you are paying with
                  new money — it is usually the better deal.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What does every package include?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  The game download, full access to the live alpha, a starter
                  ship with at least six months of hull insurance, a self-land
                  hangar, and 10,000 starting UEC.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What does Warbond mean?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  A discount that applies only when paying with real money —
                  store credit cannot be used. Buying fresh? Always check for a
                  Warbond version first.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" trackingLabel="starter-package-cta" />
            <DiscordCTA />
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

        <PageSources route="/day-one-citizen/starter-package" />
      </main>
      <Footer />
    </>
  )
}
