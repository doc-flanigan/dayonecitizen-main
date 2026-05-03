import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'

export const metadata: Metadata = {
  title: 'Which Starter Package Should You Buy? — Day One Citizen',
  description:
    'Aurora MR vs Mustang Alpha — an honest comparison of the two main Star Citizen starter ships and which one fits a brand-new player.',
  alternates: { canonical: '/day-one-citizen/starter-package' },
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
              The two most common starter ships are the{' '}
              <Term name="Aurora">Aurora MR</Term> and the{' '}
              <Term name="Mustang">Mustang Alpha</Term>. They cost the same. They play very
              differently. Here is the honest comparison.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">What every starter package includes</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Regardless of which ship you choose, every game package at the entry tier
                includes the same base access:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Full access to the Star Citizen alpha (the live{' '}
                  <Term name="PU">Persistent Universe</Term>)</li>
                <li><Term name="Squadron 42">Squadron 42</Term> access on release</li>
                <li>1,000 starting <Term name="aUEC">aUEC</Term></li>
                <li>Standard hull insurance on the ship</li>
                <li>The Referral Code 50,000 <Term name="UEC">UEC</Term> bonus (if you used a code)</li>
              </ul>
              <p>
                The only difference between starter packages at the same price is the ship itself.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              <Term name="Aurora">Aurora MR</Term> — the practical choice
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The <Term name="Aurora">Aurora MR</Term> (Medium Role) is built by{' '}
                <Term name="Roberts Space Industries">Roberts Space Industries</Term> — the same
                fictional company that builds the game&rsquo;s lore. It is a small, boxy,
                utilitarian ship with no pretense of glamour. It does its job.
              </p>

              <div className="mt-4 overflow-x-auto rounded-2xl border border-white/5">
                <table className="w-full">
                  <tbody className="divide-y divide-white/5 text-sm">
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gold">Role</td>
                      <td className="px-4 py-3 text-starwhite/80">Multi-purpose / cargo / starter</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gold">Cargo capacity</td>
                      <td className="px-4 py-3 text-starwhite/80">2 <Term name="SCU">SCU</Term> — enough for delivery missions</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gold">Speed</td>
                      <td className="px-4 py-3 text-starwhite/80">Modest — not built for racing</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gold">Hull toughness</td>
                      <td className="px-4 py-3 text-starwhite/80">Durable — forgiving to new pilots</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gold">Combat capability</td>
                      <td className="px-4 py-3 text-starwhite/80">Basic — one size-1 gun mount</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gold">Best for</td>
                      <td className="px-4 py-3 text-starwhite/80">Delivery runs, exploration, learning</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                The Aurora MR&rsquo;s 2{' '}
                <Term name="SCU">SCU</Term> cargo hold is the key advantage for a new player.
                Delivery missions — the bread and butter of early gameplay — require you to pick
                up a physical box from one location and carry it to another. With 2 SCU you can
                carry the boxes most missions require. The{' '}
                <Term name="Mustang">Mustang Alpha</Term> barely has room for one.
              </p>
              <p>
                The Aurora is also more forgiving to crash into things with. As a new pilot
                learning to navigate hangars and land on <Term name="Landing Pad">landing pads</Term>,
                you will bump into geometry. The Aurora takes it better.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              <Term name="Mustang">Mustang Alpha</Term> — the fun choice
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The <Term name="Mustang">Mustang Alpha</Term> is built by{' '}
                <Term name="Consolidated Outland">Consolidated Outland</Term>. It looks like
                a proper spaceship: sleek, aggressive, with a distinctive delta-wing profile.
                If you want to feel like a pilot from the moment you undock, this is the ship.
              </p>

              <div className="mt-4 overflow-x-auto rounded-2xl border border-white/5">
                <table className="w-full">
                  <tbody className="divide-y divide-white/5 text-sm">
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gold">Role</td>
                      <td className="px-4 py-3 text-starwhite/80">Light fighter / exploration</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gold">Cargo capacity</td>
                      <td className="px-4 py-3 text-starwhite/80">0.5 <Term name="SCU">SCU</Term> — very limited</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gold">Speed</td>
                      <td className="px-4 py-3 text-starwhite/80">Fast — one of the quicker small ships</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gold">Hull toughness</td>
                      <td className="px-4 py-3 text-starwhite/80">Fragile — crashes hurt more</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gold">Combat capability</td>
                      <td className="px-4 py-3 text-starwhite/80">Slightly better than Aurora</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gold">Best for</td>
                      <td className="px-4 py-3 text-starwhite/80">Players who prioritize flying feel over utility</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                The Mustang Alpha&rsquo;s 0.5 <Term name="SCU">SCU</Term> hold severely limits
                what delivery contracts you can take. Many starter missions require 1 SCU or more
                of box space. You will spend your early sessions turning down contracts the
                Aurora would handle easily.
              </p>
              <p>
                That said: the Mustang is genuinely more enjoyable to fly. If you have friends
                to do bounties with, or you prioritize exploring over earning{' '}
                <Term name="aUEC">aUEC</Term>, the Mustang&rsquo;s speed and feel make the
                limited cargo less painful.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">The recommendation</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <strong className="text-starwhite">For most new players: Aurora MR.</strong>
              </p>
              <p>
                The Aurora lets you start earning{' '}
                <Term name="aUEC">aUEC</Term> through delivery missions on your first session.
                That money funds your first upgrades, armor sets, and equipment purchases.
                The Mustang leaves you financially stuck until you unlock contracts that do not
                require cargo capacity.
              </p>
              <p>
                <strong className="text-starwhite">Consider the Mustang Alpha if:</strong> you
                have a friend who already plays and will carry your cargo runs in their ship, you
                are primarily interested in the flying experience over earning currency, or you
                plan to buy a second ship soon anyway.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">What NOT to buy on day one</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The <Term name="RSI">RSI</Term> pledge store sells hundreds of ships at prices
                ranging from $50 to well over $1,000. Resist the temptation to buy a more
                expensive ship immediately. Here is why:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  You do not yet know what role you will enjoy in Star Citizen. Mining, hauling,
                  combat, and exploration each need entirely different ships. Buy the one for the
                  role you actually end up playing.
                </li>
                <li>
                  Many high-end ships require a crew to operate effectively. A solo player in a
                  capital ship is often less effective than a solo player in a smaller, agile ship.
                </li>
                <li>
                  Ships can be bought in-game with earned{' '}
                  <Term name="aUEC">aUEC</Term>. The in-game ship market gives you access to
                  most working ships without pledging additional real money.
                </li>
                <li>
                  Standalone ship purchases do not include game access. Do not accidentally buy
                  just a ship — make sure your purchase is a game package or that you already
                  own a game package.
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
