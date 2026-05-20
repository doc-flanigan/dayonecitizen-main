import type { Metadata } from 'next'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'

export const metadata: Metadata = {
  title: 'Star Citizen Shop Guide — New Babbage, Area18, Lorville (2026) | dayonecitizen.com',
  description:
    'Where to buy armor, weapons, and ship parts in Star Citizen: New Babbage (Tammany & Sons), Area18 (Cubby Blast), Lorville. Full shop list with what each vendor carries.',
  alternates: { canonical: '/beyond-the-basics/shops-directory' },
  openGraph: {
    title: 'Star Citizen Shop Guide — New Babbage, Area18, Lorville (2026)',
    description:
      'Where to buy armor, weapons, and ship parts in Star Citizen. Full shop list for every major city and space station in Stanton.',
    url: '/beyond-the-basics/shops-directory',
  },
}

export default function ShopsDirectoryPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy min-h-screen">
        {/* Hero */}
        <section className="bg-navyLight border-b border-white/5 py-14 md:py-18">
          <div className="container-wide px-4">
            <nav className="text-sm text-muted mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span className="mx-2 text-white/20">/</span>
              <Link href="/beyond-the-basics" className="hover:text-gold transition-colors">
                Beyond the Basics
              </Link>
              <span className="mx-2 text-white/20">/</span>
              <span className="text-starwhite">Shops Directory</span>
            </nav>
            <h1 className="font-orbitron text-3xl md:text-4xl font-bold text-starwhite mb-4">
              Star Citizen In-Game Shops Directory (2026)
            </h1>
            <p className="text-muted text-lg max-w-2xl">
              Where to find weapons, armor, ship parts, food, and vehicles across
              the three major cities and the orbital stations in{' '}
              <Term name="Stanton">Stanton</Term>.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14">
          <div className="container-wide px-4 max-w-3xl">

            <p className="text-starwhite/80 mb-8 leading-relaxed">
              Shopping in Star Citizen is location-specific. The same item can cost ten
              to thirty percent more at a remote outpost than at a city shop. Use{' '}
              <a
                href="https://gallog.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline underline-offset-2"
              >
                Gallog.co
              </a>{' '}
              or the Star Citizen wiki to compare prices before making a long trip for
              something expensive.
            </p>

            {/* New Babbage */}
            <h2 className="font-orbitron text-2xl font-bold text-gold mt-4 mb-4">
              New Babbage — microTech (The Commons)
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              New Babbage is the best place for{' '}
              <Term name="Mining">mining</Term> equipment and high-grade ship
              components. The Commons shopping area is one of the most complete retail
              hubs in the game.
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Tammany & Sons:</strong> General
                equipment, armor, and weapons. One of the most complete general stores
                across all cities.
              </li>
              <li>
                <strong className="text-starwhite">Omega Pro:</strong> High-end ship
                components — best selection of Grade A power plants and shields in
                Stanton.
              </li>
              <li>
                <strong className="text-starwhite">Shubin Interstellar:</strong> The
                best one-stop shop for mining lasers, mining heads, and related
                equipment.
              </li>
              <li>
                <strong className="text-starwhite">microTech Showroom:</strong> Ship
                displays and RSI/microTech ship sales — browse and buy ships here.
              </li>
              <li>
                <strong className="text-starwhite">Cordry&apos;s:</strong> Premium
                clothing and fashion items if you want to look the part.
              </li>
            </ul>

            {/* Area18 */}
            <h2 className="font-orbitron text-2xl font-bold text-gold mt-10 mb-4">
              Area18 — ArcCorp (The Plaza)
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Area18 is the best place for personal weapons and combat gear. The Plaza
              level is compact and easy to navigate on foot.
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Cubby Blast:</strong> The widest
                selection of personal weapons in{' '}
                <Term name="Stanton">Stanton</Term> — ballistic rifles, energy
                weapons, shotguns, pistols. Also carries armor.
              </li>
              <li>
                <strong className="text-starwhite">Dumper&apos;s Depot:</strong> Ship
                components for most ship sizes. Also has a location at most orbital
                stations — the most accessible component shop in the system.
              </li>
              <li>
                <strong className="text-starwhite">Apocalypse Arms:</strong> Military-grade
                ship weapons — best selection of Size 1 to Size 4 ship guns.
              </li>
              <li>
                <strong className="text-starwhite">Astro Armada:</strong> Ship
                showroom where you can purchase ships for in-game{' '}
                <Term name="aUEC">aUEC</Term>.
              </li>
              <li>
                <strong className="text-starwhite">TDD (Trade & Development
                Division):</strong> Commodity trading console — buy and sell bulk
                trade goods for profit.
              </li>
            </ul>

            {/* Lorville */}
            <h2 className="font-orbitron text-2xl font-bold text-gold mt-10 mb-4">
              Lorville — Hurston (Central Business District)
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Lorville is the best place to buy ships with in-game money and has some
              of the highest-rated armor sets available anywhere.
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">New Deal:</strong> Ship showroom
                — widest range of ships purchasable for <Term name="aUEC">aUEC</Term>,
                including some exclusive Hurston Dynamics ships. The best place in the
                system to buy a ship with earned in-game money.
              </li>
              <li>
                <strong className="text-starwhite">Tammany & Sons:</strong> General
                equipment and weapons, same as the New Babbage location.
              </li>
              <li>
                <strong className="text-starwhite">Skutters:</strong> Work clothing
                and utility items — unique workwear not available anywhere else.
              </li>
              <li>
                <strong className="text-starwhite">Hurston Security Depot:</strong>{' '}
                Military-grade armor — some of the highest protection-rated sets in the
                game. Some items require Hurston faction standing before they will sell
                to you.
              </li>
            </ul>

            {/* Space stations */}
            <h2 className="font-orbitron text-2xl font-bold text-gold mt-10 mb-4">
              Space stations (everywhere)
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Most orbital stations share a similar layout and carry a reliable core set
              of shops. These are the easiest to reach since they are directly above the
              planets you visit for missions.
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Dumper&apos;s Depot:</strong> At
                most orbital stations — reliable source for mid-range ship components
                without a city trip.
              </li>
              <li>
                <strong className="text-starwhite">Casaba Outlet:</strong> Casual
                clothing and undersuits — found at most major locations.
              </li>
              <li>
                <strong className="text-starwhite">Live Fire Weapons:</strong> Personal
                weapons at some stations, including near former Port Olisar-area
                locations.
              </li>
            </ul>

            {/* Tips */}
            <h2 className="font-orbitron text-2xl font-bold text-gold mt-10 mb-4">
              Shopping tips
            </h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Compare prices before you travel.</strong>{' '}
                The same item can cost ten to thirty percent more at outposts versus city
                shops. Use Gallog.co to check before making a long trip.
              </li>
              <li>
                <strong className="text-starwhite">Buy consumables in bulk at cities.</strong>{' '}
                MedPens, food, and ammo are cheap in the city. Stock up so you are not
                paying outpost prices later.
              </li>
              <li>
                <strong className="text-starwhite">Check stock before traveling.</strong>{' '}
                Shops can run out of specific items. The Star Citizen wiki and Gallog
                track current availability so you can confirm stock before a long trip.
              </li>
              <li>
                <strong className="text-starwhite">Watch for faction requirements.</strong>{' '}
                Some high-end items require a certain standing with a faction before
                they will sell to you. Check the requirements in the wiki before
                wasting a trip.
              </li>
            </ul>

            {/* FAQ */}
            <h2 className="font-orbitron text-2xl font-bold text-gold mt-10 mb-6">
              Common questions
            </h2>

            <div className="space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Where is the best place to buy ship components?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Omega Pro in New Babbage has the best Grade A component selection.
                  Dumper&apos;s Depot at orbital stations is the most accessible since
                  it is right near the landing pads. Apocalypse Arms in Area18 has the
                  best ship weapons.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Where can I buy ships with in-game money?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  New Deal in Lorville and Astro Armada in Area18 both sell ships for{' '}
                  <Term name="aUEC">aUEC</Term>. New Deal usually has the wider
                  selection. The in-game ship catalogue is smaller than the pledge
                  store — not every ship is available for in-game currency.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Where do I buy mining equipment?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Shubin Interstellar in New Babbage is the best one-stop shop for{' '}
                  <Term name="Mining">mining</Term> lasers, mining heads, and modules.
                  Some orbital station refineries also stock basic mining equipment,
                  but New Babbage has the widest selection by far.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/beyond-the-basics/ship-equipment"
                  className="text-gold hover:underline text-sm"
                >
                  Next: Ship Equipment &rarr;
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
              bonus credits — enough for your first proper loadout.
            </p>
            <CTAButton trackingLabel="beyond-basics-shops-directory-bottom" size="lg">
              Get your 50K UEC bonus
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
