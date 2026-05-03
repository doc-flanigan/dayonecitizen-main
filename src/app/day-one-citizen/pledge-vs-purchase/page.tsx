import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Term from '@/components/Term'

export const metadata: Metadata = {
  title: 'Pledge vs Purchase — What\'s the Difference? — Day One Citizen',
  description:
    'Why Star Citizen uses the word "pledge" instead of "purchase," what you actually own, how ship insurance works, and what melting means.',
  alternates: { canonical: '/day-one-citizen/pledge-vs-purchase' },
}

export default function PledgeVsPurchasePage() {
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
            <p className="mt-5 font-mono text-xs text-gold">Section 04</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Pledge vs purchase — what&rsquo;s the difference?
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              The Star Citizen community uses the word &ldquo;pledge&rdquo; where most games say
              &ldquo;purchase.&rdquo; The distinction matters when you read forum posts, community
              guides, and the{' '}
              <Term name="RSI">RSI</Term> store itself.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Why the word &ldquo;pledge&rdquo; exists</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Star Citizen launched as a Kickstarter campaign in 2012. Chris Roberts and a
                small team at <Term name="CIG">Cloud Imperium Games</Term> asked the community
                to fund development of a space simulation game that no traditional publisher
                would back. Backers pledged money to make the game exist — in exchange, they
                received early access and in-game ships as rewards.
              </p>
              <p>
                The crowdfunding model never stopped. Rather than move to a traditional retail
                release, <Term name="CIG">CIG</Term> continued selling early access through
                their own store. The word <Term name="Pledge">pledge</Term> stuck in the
                community because it accurately describes the original transaction: you are
                financially supporting ongoing development, not buying a finished product.
              </p>
              <p>
                Functionally, pledging works exactly like buying: money leaves your card,
                a ship and access arrive in your account. But the framing matters — you are
                a <Term name="Backer">backer</Term>, funding development, not a customer
                receiving a completed game.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">What you actually own</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                When you pledge for a game package, you receive:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">Access to the Star Citizen alpha</strong> —
                  permanent. You can log into the{' '}
                  <Term name="PU">Persistent Universe</Term> for as long as the game exists.
                </li>
                <li>
                  <strong className="text-starwhite">Access to{' '}
                  <Term name="Squadron 42">Squadron 42</Term></strong> — permanent, but the
                  campaign is not yet released. Your purchase locks in access when it ships.
                </li>
                <li>
                  <strong className="text-starwhite">Your ship(s)</strong> — stored in your
                  virtual <Term name="Hangar">hangar</Term>. You can view them in the RSI
                  account management page (VMA — Vehicle Manager) before you even log in.
                  These ships are never wiped, even when{' '}
                  <Term name="CIG">CIG</Term> performs a full character{' '}
                  <Term name="Wipe">wipe</Term>.
                </li>
              </ul>
              <p>
                What you do <em>not</em> own in the traditional sense: Star Citizen is a service.
                Like all online games,{' '}
                <Term name="CIG">CIG</Term> retains the right to change, balance, and update
                ships over time. Your ship will fly and function — but{' '}
                <Term name="CIG">CIG</Term> can adjust its stats as the game develops.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Ship insurance explained</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Every ship comes with insurance. Insurance determines what happens if your ship
                is destroyed in-game and you cannot afford the salvage claim to recover it.
              </p>
              <p>
                There are two tiers relevant to new players:
              </p>
              <ul className="list-disc space-y-4 pl-6">
                <li>
                  <strong className="text-starwhite">Standard insurance</strong> — the default on
                  most game packages. If your ship is destroyed and you cannot pay the{' '}
                  <Term name="aUEC">aUEC</Term> recovery claim, you can wait out the insurance
                  timer (hours to days depending on ship size) and have the ship returned without
                  paying. Standard insurance covers the hull. Cargo is not covered.
                </li>
                <li>
                  <strong className="text-starwhite">
                    <Term name="LTI">Lifetime Insurance (LTI)</Term>
                  </strong>{' '}
                  — some ships from the pledge store come with LTI rather than a standard timer.
                  LTI means the insurance never expires. For a starter ship, the practical
                  difference is minimal — insurance timers on small ships are short. LTI matters
                  more on expensive capital ships where insurance premiums are higher.
                </li>
              </ul>
              <p>
                In the current alpha, the full insurance claim system is not yet completely
                implemented. For now, any destroyed ship is recovered through the ASOP terminal
                with a waiting period. The full financial consequences of ship loss are a
                planned feature.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Melting and store credit</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                If you change your mind about a ship or package, you can{' '}
                <Term name="Melt">melt</Term> it back into{' '}
                <Term name="Store Credit">store credit</Term>. Melting returns the value of the
                pledge as RSI store credit — it does not convert back to real money.
              </p>
              <p>
                Store credit can be spent on anything else in the RSI store: other ships,
                game packages, ship upgrades, paint liveries, and accessories. It never expires.
              </p>
              <p>
                Some veteran players accumulate store credit through melting older ships when
                new, more attractive options are released. This is called the &ldquo;melt and
                rebuy&rdquo; cycle and is a normal part of how the community engages with the
                pledge store.
              </p>
              <p>
                Note: once you start using a ship in-game (applying{' '}
                <Term name="aUEC">aUEC</Term> modifications, storing components), the melt
                process becomes slightly more involved. For day-one decisions, treat the choice
                of starter ship as low-stakes — the entry price is small enough that you can
                simply buy a different ship later if you want to change direction.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">What &ldquo;concept ship&rdquo; means</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The <Term name="RSI">RSI</Term> store sells some ships that are not yet in the
                game — these are called <strong className="text-starwhite">concept ships</strong>.
                A concept sale funds development of a new ship design.
              </p>
              <p>
                When you buy a concept ship, you receive a{' '}
                <Term name="Loaner Ship">loaner ship</Term> of a similar role to fly in the
                meantime. When the concept ship becomes{' '}
                <strong className="text-starwhite">flight ready</strong> (fully implemented in
                game), it replaces the loaner automatically in your{' '}
                <Term name="Hangar">hangar</Term>.
              </p>
              <p>
                For a new player, stick to flight-ready ships in your starter package. Concept
                ships are for experienced players who want to fund something they believe in and
                can wait months or years for delivery.
              </p>
            </div>
          </section>

          <nav className="flex items-center justify-between border-t border-white/10 pt-8 text-sm">
            <Link
              href="/day-one-citizen/buying-the-game"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> How to buy the game
            </Link>
            <Link
              href="/day-one-citizen/starter-package"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Which starter package? <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
