import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'

export const metadata: Metadata = {
  title: 'Star Citizen Food & Drink Guide (2026)',
  description:
    'Star Citizen food, drink, and survival: the Nutrition and Hydration meters, what happens when they run low, and how NDR and HEI ratings work.',
  alternates: { canonical: '/beyond-the-basics/food-drink-survival' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Star Citizen Food, Drink & Survival Guide (2026)',
    description:
      'How food, drink, and survival mechanics work in Star Citizen: what the Nutrition and Hydration meters do, what happens when they run low, and how food and drink ratings work.',
    url: '/beyond-the-basics/food-drink-survival',
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
      name: 'How do hunger and thirst work in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two meters track your character’s needs: Nutrition (hunger) and Hydration (thirst). You can see them on the mobiGlas personal status screen and at the bottom-left of the HUD. Both drain over time and refill when you eat food or drink drinks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you die from hunger or thirst?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If Nutrition or Hydration drops too low, you take damage and will eventually fall unconscious. A death caused by empty meters is logged as “Malnutrition”.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best food to carry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check the ratings. Food has a Nutritional Density Rating (NDR) and drinks have a Hydration Efficacy Index (HEI). Higher is better. Standard filtered water has an HEI of 80, and caffeine and alcohol lower a drink’s HEI.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do I check my hunger and thirst levels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open the mobiGlas personal status screen, or look at the bottom-left of the HUD. You will see your Nutrition (hunger) and Hydration (thirst) meters. Both drain over time.',
      },
    },
  ],
}

export default function FoodDrinkSurvivalPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy min-h-screen">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Beyond the Basics', url: '/beyond-the-basics' },
          { name: 'Food, Drink & Survival', url: '/beyond-the-basics/food-drink-survival' },
        ]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
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
              Star Citizen Food, Drink &amp; Survival Guide (2026)
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              Your character gets hungry and thirsty. Here is what the meters mean, what
              happens when you ignore them, and how to read food and drink ratings.
            </p>
          </div>
        </header>

        {/* Content */}
        <section className="py-14">
          <div className="container-wide px-4 max-w-3xl">

            <p className="text-starwhite/80 mb-6 leading-relaxed">
              Star Citizen simulates your character&apos;s basic needs. Two meters track
              your physical state: <strong className="text-starwhite">Nutrition</strong>{' '}
              (hunger) and <strong className="text-starwhite">Hydration</strong> (thirst).
              Both drain over time and refill when you eat food or drink drinks.
            </p>
            <p className="text-starwhite/80 mb-8 leading-relaxed">
              You can see both on your <Term name="mobiGlas">mobiGlas</Term> personal
              status screen and at the bottom-left of the HUD. If either gets too low,
              you take damage and can fall unconscious. You must take your helmet off to
              eat or drink.
            </p>
            <figure className="overflow-hidden rounded-2xl border border-white/10 mb-8">
              <Image
                src="/images/guides/food-drink-character-status-bars.jpg"
                alt="The mobiGlas character status screen showing the hydration bar and the nutrition bar for the player character."
                width={1200}
                height={693}
                className="h-auto w-full"
              />
              <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                The mobiGlas character status screen, showing your Hydration and Nutrition meters.
              </figcaption>
            </figure>

            {/* Low meters */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              What happens when a meter runs low
            </h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li><strong className="text-starwhite">Too low:</strong> If Nutrition or Hydration drops too low, you take damage.</li>
              <li><strong className="text-starwhite">Left alone:</strong> You will eventually fall unconscious.</li>
              <li><strong className="text-starwhite">Worst case:</strong> A death caused by empty meters is logged as &ldquo;Malnutrition&rdquo;.</li>
            </ul>

            {/* How to eat and drink */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              How to eat and drink
            </h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li><strong className="text-starwhite">Take your helmet off:</strong> You must remove your helmet before you can eat or drink.</li>
              <li><strong className="text-starwhite">Equip from inventory:</strong> Food is usually eaten in a single bite. Drinks can be taken in small sips or finished in one go.</li>
              <li><strong className="text-starwhite">Do not waste it:</strong> Eating or drinking while your meters are full gives a reduced effect.</li>
            </ul>

            {/* Ratings */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Food and drink ratings: NDR and HEI
            </h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Food:</strong> Most food has a
                Nutritional Density Rating (NDR). A higher NDR means the item restores
                more hunger.
              </li>
              <li>
                <strong className="text-starwhite">Drinks:</strong> Most drinks have a
                Hydration Efficacy Index (HEI). A higher HEI keeps you hydrated longer.
                Standard filtered water has an HEI of 80.
              </li>
              <li>
                <strong className="text-starwhite">Caffeine and alcohol:</strong> These
                lower a drink&apos;s HEI, so coffee and alcohol hydrate you less than
                plain water.
              </li>
              <li>
                <strong className="text-starwhite">Dietary effects:</strong> Many items
                also carry dietary effects, such as Energizing on some drinks. Check an
                item&apos;s effects before you use it, especially before a fight.
              </li>
            </ul>

            {/* Where to buy */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Where to find food and drink
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Food and drink are sold at shops, bars, and vending machines in landing
              zones and stations. Look for food vendors and kiosks in the main common
              areas. Stock up before you leave a major hub, because remote outposts may
              have less on offer.
            </p>
            <figure className="overflow-hidden rounded-2xl border border-white/10 mb-8">
              <Image
                src="/images/guides/food-drink-vending-machine-station.jpg"
                alt="A vending machine at a space station common area stocked with drinks and snacks for purchase."
                width={1200}
                height={708}
                className="h-auto w-full"
              />
              <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                A station vending machine, one place to restock before a mission.
              </figcaption>
            </figure>

            {/* Tips */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Practical survival tips
            </h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Carry some of each:</strong> Keep at
                least one drink and one food item in your personal inventory.
              </li>
              <li>
                <strong className="text-starwhite">Stock your ship:</strong> Before a
                long{' '}<Term name="Cargo">cargo</Term> run or exploration session,
                buy a supply of food and drink at a city.
              </li>
              <li>
                <strong className="text-starwhite">Do not eat or drink when
                full:</strong> Consuming items while your meters are full gives a
                reduced effect. Wait until you are hungry or thirsty.
              </li>
              <li>
                <strong className="text-starwhite">Check your meters before every
                mission:</strong> Look at the mobiGlas status screen or the bottom-left
                of the HUD. If either is low, top up before you leave.
              </li>
            </ul>

            {/* FAQ */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-6">
              Common questions
            </h2>

            <div className="space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Can you die from hunger or thirst?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Yes. If Nutrition or Hydration drops too low, you take damage and
                  will eventually fall unconscious. A death caused by empty meters is
                  logged as &ldquo;Malnutrition&rdquo;. Top up before long missions if
                  either meter is low.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What is the best food to carry?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Look at the ratings. Food has an NDR and drinks have an HEI. Higher is
                  better. Standard filtered water has an HEI of 80. Caffeine and alcohol
                  lower a drink&apos;s HEI, so plain water is a safe pick for thirst.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Where do I check my hunger and thirst levels?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Open the <Term name="mobiGlas">mobiGlas</Term> personal status screen,
                  or look at the bottom-left of the HUD. You will see your Nutrition
                  (hunger) and Hydration (thirst) meters. Both drain over time.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/beyond-the-basics/party-management"
                  className="text-gold hover:underline text-sm"
                >
                  Next: Party Management &rarr;
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
              bonus credits — enough for a healthy stockpile of supplies.
            </p>
            <CTAButton trackingLabel="beyond-basics-food-drink-bottom" size="lg">
              Get your 50K UEC bonus
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
