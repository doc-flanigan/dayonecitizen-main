import type { Metadata } from 'next'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Beyond the Basics — Star Citizen Guides for Early Players | dayonecitizen.com',
  description:
    'Seven plain-English Star Citizen guides for players who have got the basics down: adding friends, managing inventory, finding shops, CCU upgrades, and more.',
  alternates: { canonical: '/beyond-the-basics' },
  openGraph: {
    title: 'Beyond the Basics — Star Citizen Guides for Early Players',
    description:
      'Seven plain-English Star Citizen guides for players who have got the basics down: adding friends, managing inventory, finding shops, CCU upgrades, and more.',
    url: '/beyond-the-basics',
  },
}

const guides = [
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
]

export default function BeyondTheBasicsPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy min-h-screen">
        {/* Hero */}
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-12 pt-32 sm:pt-40">
          <div className="container-wide">
            <Link
              href="/day-one-citizen"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-gold"
            >
              <ArrowLeft size={12} aria-hidden /> Day One
            </Link>
            <h1 className="heading-display mt-6 text-3xl sm:text-5xl">
              Beyond the Basics
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              You have made it past your first few flights. Now comes the part where the
              verse opens up. These seven guides cover the things that confuse most
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
                  <h2 className="font-orbitron text-lg font-bold text-starwhite group-hover:text-gold transition-colors">
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
            <h2 className="font-orbitron text-2xl font-bold text-starwhite mb-3">
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
