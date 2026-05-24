import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'

export const metadata: Metadata = {
  title: 'Star Citizen Food, Drink & Survival Guide (2026) | dayonecitizen.com',
  description:
    'Star Citizen food, drink, and survival: hunger and thirst meters, debuffs to avoid, and where to buy food in New Babbage, Lorville, and Area18.',
  alternates: { canonical: '/beyond-the-basics/food-drink-survival' },
  openGraph: {
    title: 'Star Citizen Food, Drink & Survival Guide (2026)',
    description:
      'How food, drink, and survival mechanics work in Star Citizen: what the hunger and thirst meters do, debuffs to avoid, and where to buy food and drink.',
    url: '/beyond-the-basics/food-drink-survival',
  },
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
              Your character gets hungry and thirsty. Here is what the bars mean, what
              happens when you ignore them, and where to restock before a long mission.
            </p>
          </div>
        </header>

        {/* Content */}
        <section className="py-14">
          <div className="container-wide px-4 max-w-3xl">

            <p className="text-starwhite/80 mb-6 leading-relaxed">
              Star Citizen simulates your character&apos;s basic needs. Two meters track
              your physical state: a blue <strong className="text-starwhite">hydration</strong>{' '}
              bar and a green <strong className="text-starwhite">nutrition</strong> bar.
              Both drain slowly during normal play. Running, fighting, or spending time in
              extreme temperatures drains them faster.
            </p>
            <p className="text-starwhite/80 mb-8 leading-relaxed">
              To check them, press{' '}
              <strong className="text-starwhite">F1</strong> to open your{' '}
              <Term name="mobiGlas">mobiGlas</Term>, then navigate to the Character
              status tab. If either bar is below about half, eat or drink before heading
              out on a long mission.
            </p>

            {/* Thirst effects */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              What happens when you get dehydrated
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Dehydration happens in three stages, each worse than the last:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li><strong className="text-starwhite">Mild:</strong> Slightly increased stamina drain. You will notice you get winded a little faster when running.</li>
              <li><strong className="text-starwhite">Moderate:</strong> Blurred vision and an elevated heart rate indicator on your HUD. Hard to ignore.</li>
              <li><strong className="text-starwhite">Severe:</strong> Disorientation, movement penalties, and a real risk of passing out. Do not let it get here.</li>
            </ul>

            {/* Hunger effects */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              What happens when you get hungry
            </h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li><strong className="text-starwhite">Mild:</strong> Stamina recovers more slowly after sprinting or fighting.</li>
              <li><strong className="text-starwhite">Moderate:</strong> Reduced carry capacity and slower sprint recovery. You will feel sluggish.</li>
              <li><strong className="text-starwhite">Severe:</strong> Health starts to deteriorate and you risk passing out. Another player can revive you, but it is an embarrassing way to go down.</li>
            </ul>

            {/* Beverages */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              What to drink
            </h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Water:</strong> Best hydration
                per inventory slot. No side effects. Always carry two or three bottles.
              </li>
              <li>
                <strong className="text-starwhite">Coffee:</strong> Hydration plus a
                temporary stamina boost. Good for long haul runs.
              </li>
              <li>
                <strong className="text-starwhite">Energy drinks:</strong> A big
                immediate hydration and stamina boost, followed by a crash. Good for
                emergencies, not a daily driver.
              </li>
              <li>
                <strong className="text-starwhite">Alcohol:</strong> Provides minimal
                hydration while temporarily impairing your motor skills and vision.
                Fun on the ground, dangerous before a fight.
              </li>
            </ul>

            {/* Food */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              What to eat
            </h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Nutrition bars:</strong> Best
                nutrition per inventory slot. Portable, cheap, and reliable. The
                standard survival kit item.
              </li>
              <li>
                <strong className="text-starwhite">Fast food (BigBenny&apos;s and
                similar):</strong> Good saturation and quick to eat. Available at most
                city food courts.
              </li>
              <li>
                <strong className="text-starwhite">Burritos:</strong> A solid
                all-rounder — they fill both the hunger and hydration bars a little.
                Widely available.
              </li>
              <li>
                <strong className="text-starwhite">Specialty foods:</strong> Some
                provide temporary bonuses, such as a small health regeneration boost or
                resistance to temperature extremes. Worth grabbing when you see them.
              </li>
            </ul>

            {/* Where to buy */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Where to find food and drink
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Every major city and space station has vending machines and food vendors.
              Outposts usually have at least one vending machine, but they can run out of
              stock. Stock up at a city before heading somewhere remote.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Space stations:</strong> Vending
                machines in common areas and food courts at most orbital stations
                around{' '}<Term name="Stanton">Stanton</Term>.
              </li>
              <li>
                <strong className="text-starwhite">New Babbage:</strong> Wally&apos;s
                Bar and the Commons food court both have good selection.
              </li>
              <li>
                <strong className="text-starwhite">Area18:</strong> G-Loc Bar plus
                food stands throughout the Plaza level.
              </li>
              <li>
                <strong className="text-starwhite">Lorville:</strong> Food vendors
                throughout the Workers&apos; District.
              </li>
              <li>
                <strong className="text-starwhite">Orison:</strong> Cloud View Center
                restaurants if you are out near Crusader.
              </li>
            </ul>
            <p className="text-muted text-sm mb-8">
              Outpost prices are higher than city prices. Buy in bulk at a city and carry
              enough to last your mission. One water bottle and two nutrition bars per
              hour of play is a reasonable baseline.
            </p>

            {/* Tips */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Practical survival tips
            </h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Minimum carry:</strong> Two water
                bottles and four nutrition bars in your personal inventory before any
                serious mission.
              </li>
              <li>
                <strong className="text-starwhite">Stock your ship:</strong> Before a
                long{' '}<Term name="Cargo">cargo</Term> run or exploration session,
                buy a stack of consumables at a city. You will pay more at an outpost.
              </li>
              <li>
                <strong className="text-starwhite">Do not eat and drink all at
                once:</strong> Consuming too many items in rapid succession reduces how
                effective each one is and can trigger negative status effects.
              </li>
              <li>
                <strong className="text-starwhite">Check your bars before every
                mission:</strong> F1 &rarr; Character. If either bar is below half, eat
                and drink before you leave.
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
                  Yes. Severe hunger and severe dehydration both cause your health to
                  drop and eventually cause you to pass out. If your bleed-out timer
                  runs out while you are incapacitated, you will need to respawn. Keep
                  your bars above twenty percent to avoid serious problems.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What is the best food to carry?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Water bottles for thirst and nutrition bars for hunger give you the
                  best nutrition per inventory slot. Burritos are a good one-item option
                  if you want something that helps both bars at once. Energy drinks work
                  well in a pinch but the crash afterward makes them a bad long-term
                  choice.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Where do I check my hunger and thirst levels?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Press F1 to open the mobiGlas and navigate to the Character status
                  tab. The blue bar is hydration (thirst), the green bar is nutrition
                  (hunger). Both drain over time.
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
