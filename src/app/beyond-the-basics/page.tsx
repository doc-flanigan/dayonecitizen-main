import type { Metadata } from 'next'
import Link from '@/components/Link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import { ArrowRight } from 'lucide-react'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import { BEYOND_THE_BASICS_GUIDES } from '@/data/beyond-the-basics'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Star Citizen Guides — Beyond the Basics',
  description:
    'Eight plain-English Star Citizen guides for players past the basics: quantum travel, adding friends, food, inventory, redeem codes, and more.',
  alternates: { canonical: '/beyond-the-basics' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    images: ['/images/brand/og-image.png'],
    title: 'Beyond the Basics — Star Citizen Guides for Early Players',
    description:
      'Eight plain-English Star Citizen guides for players who have got the basics down: quantum travel, adding friends, food, inventory, and more.',
    url: '/beyond-the-basics',
  },
}

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
              verse opens up. These eight guides cover the things that confuse most
              players in their first few weeks — from quantum travel to adding friends
              and keeping your character fed.
            </p>
          </div>
        </header>

        {/* Guide cards */}
        <section className="py-16">
          <div className="container-wide px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BEYOND_THE_BASICS_GUIDES.map((guide) => (
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
