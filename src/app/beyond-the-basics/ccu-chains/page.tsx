import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'

export const metadata: Metadata = {
  title: 'Star Citizen CCU Chain Calculator & Savings Guide (2026)',
  description:
    'Save hundreds on Star Citizen ship upgrades using CCU chains. Step-by-step guide to Cross-Chassis Upgrades, Warbond CCU strategies, and worked savings examples.',
  alternates: { canonical: '/beyond-the-basics/ccu-chains' },
  openGraph: {
    title: 'Star Citizen CCU Chain Calculator & Savings Guide (2026)',
    description:
      'Save hundreds on Star Citizen ship upgrades using CCU chains. Step-by-step guide to Cross-Chassis Upgrades, Warbond CCU strategies, and worked savings examples.',
    url: '/beyond-the-basics/ccu-chains',
  },
}

export default function CCUChainsPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy min-h-screen">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Beyond the Basics', url: '/beyond-the-basics' },
          { name: 'CCU Chains', url: '/beyond-the-basics/ccu-chains' },
        ]} />
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
              Star Citizen CCU Chain Calculator &amp; Savings Guide (2026)
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              How to trade up your pledge ship to a bigger one — and how a chain of
              upgrades can save you hundreds of dollars compared to buying the target
              ship outright.
            </p>
          </div>
        </header>

        {/* Content */}
        <section className="py-14">
          <div className="container-wide px-4 max-w-3xl">

            {/* What is a CCU */}
            <h2 className="font-display text-2xl font-bold text-gold mt-2 mb-4">
              What is a <Term name="CCU">CCU</Term>?
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              A <Term name="CCU">Cross-Chassis Upgrade</Term> (CCU) is a token sold
              through the{' '}
              <a
                href="https://robertsspaceindustries.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline underline-offset-2"
              >
                RSI pledge store
              </a>{' '}
              that transforms one ship into another. You pay only the price difference
              between the two ships — not the full cost of the target ship.
            </p>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              For example, if you own a ship worth $50 and want one worth $80, a CCU
              for that pair would cost $30. The original ship is gone and you now own
              the new one.
            </p>
            <div className="card-surface rounded-lg p-5 border border-white/5 mb-8">
              <p className="font-semibold text-starwhite mb-3">Key rules about CCUs</p>
              <ul className="space-y-2 text-starwhite/80 text-sm">
                <li className="flex gap-2"><span className="text-gold mt-0.5">•</span> <span><strong className="text-starwhite">One-way and permanent.</strong> Once applied, a CCU cannot be reversed. The base ship is gone.</span></li>
                <li className="flex gap-2"><span className="text-gold mt-0.5">•</span> <span><strong className="text-starwhite">Upgrades only.</strong> CCUs can only move to a higher-value ship — you cannot go down in price.</span></li>
                <li className="flex gap-2"><span className="text-gold mt-0.5">•</span> <span><strong className="text-starwhite"><Term name="LTI">LTI</Term> carries through.</strong> If your base ship has Lifetime Insurance, the target ship inherits it.</span></li>
                <li className="flex gap-2"><span className="text-gold mt-0.5">•</span> <span><strong className="text-starwhite">Some ships are blocked.</strong> A handful of rare or capital ships cannot be reached via CCU — they require a direct purchase during a dedicated sale.</span></li>
              </ul>
            </div>

            {/* What is a chain */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              What is a CCU chain?
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              A CCU chain is a sequence of upgrades that steps from a cheap starting
              ship all the way up to an expensive target — using several intermediate
              ships along the way. Instead of buying a $250 ship outright, you might
              buy a $45 starter ship and then five or six CCUs, each covering a small
              price jump. The total cost can be significantly lower than the full price.
            </p>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              The savings come from <strong className="text-starwhite">Warbond CCUs</strong>.
              Warbond CCUs (CCU = Cross-Chassis Upgrade, Warbond = a variant requiring
              new real money rather than store credit) are sold at a discount — sometimes
              fifty to ninety percent off the standard price difference — but only during
              special events like{' '}
              <Term name="IAE">IAE</Term> or Invictus Launch Week.
            </p>
            <p className="text-starwhite/80 mb-8 leading-relaxed">
              Backers who plan ahead buy discounted Warbond CCUs at each event and
              stockpile them. When the full chain is assembled, they apply the CCUs in
              sequence and end up with a ship worth hundreds more than they paid.
            </p>

            {/* How to build */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              How to build a CCU chain — step by step
            </h2>
            <ol className="list-decimal pl-6 mb-4 space-y-3 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Choose a base ship.</strong> Pick
                a low-cost ship — ideally one with{' '}
                <Term name="LTI">Lifetime Insurance</Term> from a concept sale or
                event. Common starter options: Tumbril Ranger CV (~$35) or Anvil C8X
                Pisces (~$45).
              </li>
              <li>
                <strong className="text-starwhite">Plan the chain.</strong> Use{' '}
                <a
                  href="https://ccugame.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline underline-offset-2"
                >
                  ccugame.app
                </a>{' '}
                to map intermediate ships from your base to your target at each price
                tier. The tool shows you which steps have Warbond discounts available.
              </li>
              <li>
                <strong className="text-starwhite">Buy CCUs during events.</strong>{' '}
                Warbond CCUs are available at IAE (November) and Invictus Launch Week
                (May). Buy them during those windows. Standard CCUs are available year-round
                and can be bought with{' '}
                <Term name="Store Credit">store credit</Term>.
              </li>
              <li>
                <strong className="text-starwhite">Do not apply any CCU until the
                whole chain is assembled.</strong> Each application is permanent. If you
                apply step three before you have bought step four, you may be stuck at
                an intermediate ship.
              </li>
              <li>
                <strong className="text-starwhite">Apply in sequence.</strong> Once
                every CCU in the chain is in your hangar, apply them one at a time in
                order via the RSI website (My Hangar &rarr; Apply Upgrade) until you
                reach the target ship.
              </li>
            </ol>
            <p className="text-muted text-sm mb-8">
              Prices and available CCUs change with every event. Always check
              ccugame.app for a current chain before buying — do not rely on a chain
              someone posted months ago.
            </p>

            {/* Example */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Example: eight steps to a Drake Corsair
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              The table below shows a real chain from ccugame.app. Starting from a
              Gladius and upgrading to a{' '}
              <Term name="Corsair">Drake Corsair</Term> (MSRP $250) costs $65 in total
              CCU costs — a saving of $95, or thirty-eight percent.
            </p>
            <p className="text-muted text-sm mb-4">
              Steps where &ldquo;You Pay&rdquo; is much lower than MSRP are Warbond
              CCUs bought during a sale event in advance.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm text-starwhite/80 border-collapse">
                <thead>
                  <tr className="bg-navyLight text-gold">
                    <th className="px-3 py-2 text-left border border-white/10">From &rarr; To</th>
                    <th className="px-3 py-2 text-left border border-white/10">MSRP</th>
                    <th className="px-3 py-2 text-left border border-white/10">You Pay</th>
                    <th className="px-3 py-2 text-left border border-white/10">Saved</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Gladius → Freelancer', '$20', '$20', '—'],
                    ['Freelancer → Talon', '$5', '$5', '—'],
                    ['Talon → Nova', '$5', '$5', '—'],
                    ['Nova → RAFT', '$70', '$5', '$65'],
                    ['RAFT → Constellation Taurus', '$10', '$10', '—'],
                    ['Constellation Taurus → Hurricane', '$10', '$5', '$5'],
                    ['Hurricane → Terrapin', '$10', '$10', '—'],
                    ['Terrapin → Corsair', '$30', '$5', '$25'],
                  ].map(([route, msrp, pay, saved], i) => (
                    <tr
                      key={i}
                      className={`border-b border-white/5 ${i % 2 === 1 ? 'bg-navyLight/30' : ''}`}
                    >
                      <td className="px-3 py-2 border border-white/5">{route}</td>
                      <td className="px-3 py-2 border border-white/5">{msrp}</td>
                      <td className="px-3 py-2 border border-white/5">{pay}</td>
                      <td className={`px-3 py-2 border border-white/5 ${saved !== '—' ? 'text-gold font-semibold' : ''}`}>{saved}</td>
                    </tr>
                  ))}
                  <tr className="bg-navyLight font-semibold">
                    <td className="px-3 py-2 border border-white/5">Total</td>
                    <td className="px-3 py-2 border border-white/5">$250</td>
                    <td className="px-3 py-2 border border-white/5 text-gold">$65</td>
                    <td className="px-3 py-2 border border-white/5 text-gold">$95 (38%)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* FAQ */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-6">
              Common questions
            </h2>

            <div className="space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Does a CCU chain preserve LTI?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Yes. <Term name="LTI">Lifetime Insurance</Term> on the base ship
                  carries through every step in the chain to the final target ship.
                  This is one of the main reasons backers start a chain with an
                  LTI base ship.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What is the difference between a Warbond CCU and a standard CCU?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Warbond CCUs require new real money — you cannot use store credit.
                  In return, they are sold at a significant discount (sometimes fifty
                  to ninety percent off the price difference). Standard CCUs can be
                  bought with store credit but have no discount. During events, Warbond
                  CCUs sell out quickly — buy them fast and stockpile for future chains.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Can I use store credit for a CCU chain?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Yes, for standard CCUs and your base ship purchase.{' '}
                  <Term name="Store Credit">Store credit</Term> cannot be used for
                  Warbond CCUs — that is the trade-off for the discount.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Are there any ships I cannot CCU to?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Yes. A small number of rare capital and limited ships — including
                  the Drake Kraken, the Idris, and the Pioneer — cannot be obtained
                  via a CCU. They are only available during dedicated sales or with
                  direct store credit purchases.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/beyond-the-basics/shops-directory"
                  className="text-gold hover:underline text-sm"
                >
                  Next: Shops Directory &rarr;
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
              bonus credits — a head start toward your first ship upgrade.
            </p>
            <CTAButton trackingLabel="beyond-basics-ccu-chains-bottom" size="lg">
              Get your 50K UEC bonus
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
