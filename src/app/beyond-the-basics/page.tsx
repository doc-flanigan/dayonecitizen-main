import type { Metadata } from 'next'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import { ArrowRight } from 'lucide-react'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'

export const metadata: Metadata = {
  title: 'Star Citizen Guides — Beyond the Basics',
  description:
    'Nine plain-English Star Citizen guides for players past the basics: quantum travel, adding friends, redeem codes, CCU upgrades, and more.',
  alternates: { canonical: '/beyond-the-basics' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Beyond the Basics — Star Citizen Guides for Early Players',
    description:
      'Nine plain-English Star Citizen guides for players who have got the basics down: quantum travel, adding friends, redeem codes, CCU upgrades, and more.',
    url: '/beyond-the-basics',
  },
}

const guides = [
  {
    slug: 'quantum-travel',
    title: 'How to Quantum Travel',
    description:
      'Hold B to spool your quantum drive, click a destination marker, then press B again to jump. Every step explained — plus the Starmap, fuel, and interdiction.',
  },
  {
    slug: 'adding-friends',
    title: 'How to Add Friends',
    description:
      'Four ways to add friends in Star Citizen — via the RSI website, the main menu, your mobiGlas, and by walking up to someone in the world.',
  },
  {
    slug: 'food-drink-survival',
    title: 'Food, Drink & Survival',
    description:
      'Your character gets hungry and thirsty. Here is what the bars mean, what debuffs to avoid, and where to buy food and water across the verse.',
  },
  {
    slug: 'party-management',
    title: 'Creating and Managing a Party',
    description:
      'How to invite friends into a party, get everyone onto the same server, share mission objectives, and crew a multi-crew ship together.',
  },
  {
    slug: 'ccu-chains',
    title: 'CCU Chains & Ship Upgrades',
    description:
      'A CCU lets you pay the difference between two ships to upgrade your pledge. A chain of CCUs can get you a much bigger ship for far less than full price.',
  },
  {
    slug: 'shops-directory',
    title: 'In-Game Shops Directory',
    description:
      'Where to buy weapons, armor, ship parts, and food in New Babbage, Area18, and Lorville — plus tips for getting the best prices.',
  },
  {
    slug: 'ship-equipment',
    title: 'Ship Equipment & Components',
    description:
      'Power plants, coolers, shields, weapons — what each component does, how grades affect your radar signature, and how to swap parts at a ship terminal.',
  },
  {
    slug: 'inventory-management',
    title: 'Managing Your Inventory',
    description:
      'Personal inventory, ship cargo hold, and local storage — how to move items between them, what persists between sessions, and why you should unload before an insurance claim.',
  },
  {
    slug: 'redeem-codes',
    title: 'Redeem Codes & Referral Codes',
    description:
      'The codes that actually work in Star Citizen — where to enter a referral code for 50,000 UEC, how promo codes work, and how to spot the fake code lists.',
  },
]

export default function BeyondTheBasicsPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy min-h-screen">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Beyond the Basics', url: '/beyond-the-basics' },
        ]} />
        {/* Hero */}
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-16 pt-32 sm:pt-40">
          <div className="container-wide">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Guides
            </p>
            <h1 className="heading-display text-4xl sm:text-5xl">
              Beyond the <span className="text-gold-gradient">Basics.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted">
              You have made it past your first few flights. Now comes the part where the
              verse opens up. These nine guides cover the things that confuse most
              players in their first few weeks — from adding friends to saving hundreds
              on ship upgrades.
            </p>
          </div>
        </header>

        {/* Guide cards */}
        <section className="py-16">
          <div className="container-wide px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/beyond-the-basics/${guide.slug}`}
                  className="card-surface rounded-xl p-6 flex flex-col gap-3 group hover:border-gold/40 border border-white/5 transition-all duration-200"
                >
                  <h2 className="font-display text-lg font-bold text-starwhite group-hover:text-gold transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed flex-1">
                    {guide.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold mt-2">
                    Read guide <ArrowRight size={14} aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navyLight border-t border-white/5">
          <div className="container-wide px-4 text-center">
            <h2 className="font-display text-2xl font-bold text-starwhite mb-3">
              Not in the verse yet?
            </h2>
            <p className="text-muted mb-8 max-w-md mx-auto">
              Use a referral code when you sign up and start with fifty thousand bonus
              credits — enough for armor, food supplies, and your first few missions.
            </p>
            <CTAButton trackingLabel="beyond-basics-index-bottom" size="lg">
              Get your 50K UEC bonus
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
