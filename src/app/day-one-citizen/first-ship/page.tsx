import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import { DiscordCTA } from '@/components/DiscordCTA'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import PageSources from '@/components/PageSources'
import SourceLink from '@/components/SourceLink'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Star Citizen First Ship: The Aurora Mk II',
  description:
    'Your first ship in Star Citizen is the Aurora Mk II from the First Flight Pack ($60, often $45 on sale). Plus three 30-day loaners to try mining, salvage and cargo.',
  alternates: { canonical: '/day-one-citizen/first-ship' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Star Citizen First Ship: What the First Flight Pack Gives You',
    description:
      'The Aurora Mk II is your starter ship. Three 30-day loaners let you try mining, salvage and cargo. The Mustang Alpha is a separate ship to buy later.',
    url: '/day-one-citizen/first-ship',
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
      name: 'What is the best first ship in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Aurora Mk II. It is the starter ship in the Star Citizen First Flight Pack, which RSI lists at $60 and which was on sale for $45 as of October 2026. It carries cargo, which opens delivery missions from your first session, and the pack includes six months of insurance. Learn the game in it, then upgrade or earn other ships later.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy the Mustang Alpha instead of the Aurora Mk II?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You cannot choose it inside a game package any more. RSI now sells the Mustang Alpha only as a separate ship. The Aurora Mk II is the more practical first ship because it carries cargo, which unlocks delivery missions immediately. The Mustang Alpha is faster and more fun to fly, but carries almost nothing. You can buy it later if you want it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you upgrade your starter ship later?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, two ways. A CCU (Cross-Chassis Upgrade) converts your pledge-store ship into a bigger one for the price difference, keeping your insurance. Or you simply earn aUEC in-game and rent or buy other ships without spending more real money.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the three loaner ships?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RSI says the First Flight Pack includes 30-day loaner access to three more starter ships: the Drake Golem for mining, the MISC Fortune for salvage and the Crusader Intrepid for cargo hauling. They let you try different gameplay styles before you spend more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you keep your first ship forever?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if it came from a game package or the pledge store — real-money purchases survive every wipe. The First Flight Pack Aurora comes with six months of insurance; the ship itself stays yours permanently either way.',
      },
    },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Star Citizen First Ship: What the First Flight Pack Gives You',
  description:
    'The Aurora Mk II from the First Flight Pack ($60, often $45 on sale) is your starter ship. Three 30-day loaners let you try mining, salvage and cargo.',
  author: { '@type': 'Person', name: SITE.author, url: `${SITE.url}/about` },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  mainEntityOfPage: `${SITE.url}/day-one-citizen/first-ship`,
}

export default function FirstShipPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Day One Citizen', url: '/day-one-citizen' },
          { name: 'Your First Ship', url: '/day-one-citizen/first-ship' },
        ]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-12 pt-32 sm:pt-40">
          <div className="container-narrow">
            <Link
              href="/day-one-citizen"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-gold"
            >
              <ArrowLeft size={12} aria-hidden /> Day One Citizen
            </Link>
            <p className="mt-5 font-mono text-xs text-gold">Before you buy</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Your first ship
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              What will you actually fly first? The First Flight Pack gives you one
              starter ship and three loaners to try. Here is how to use them.
            </p>
            <p className="mt-4 text-sm text-muted">
              Written by{' '}
              <Link href="/about" className="text-gold underline-offset-4 hover:underline">
                {SITE.author}
              </Link>
              , a veteran Star Citizen backer.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">The short answer</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <strong className="text-starwhite">Your first ship is the{' '}
                <Term name="Aurora">Aurora Mk II</Term>. It comes with the
                First Flight Pack, the one starter package RSI sells. The pack
                lists at $60 and was on sale for $45 as of October 2026. The
                Aurora carries cargo, which opens delivery missions from your
                first session, and the pack includes six months of
                insurance.</strong>{' '}
                <SourceLink href="https://robertsspaceindustries.com/en/pledge/Packages/Star-Citizen-First-Flight-Pack">
                  Official RSI store page
                </SourceLink>
              </p>
              <p>
                It is not the fastest ship, or the prettiest. It is the one that lets
                you earn money, learn the game, and lose nothing when you outgrow it.
              </p>
              <p className="text-xs text-muted">
                Updated October 2026: RSI replaced its starter packages with
                the First Flight Pack. Older guides that compare several packs
                are out of date.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Three loaners to try other careers</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                RSI&rsquo;s store says the pack also gives you thirty-day loaner
                access to three more ships, so you can try different gameplay
                styles. Each one suits a different career:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong className="text-starwhite"><Term name="Golem">Drake Golem</Term></strong> for mining</li>
                <li><strong className="text-starwhite">MISC Fortune</strong> for salvage, which means stripping wrecked ships for parts</li>
                <li><strong className="text-starwhite"><Term name="Intrepid">Crusader Intrepid</Term></strong> for cargo hauling</li>
              </ul>
              <p>
                RSI does not say more about the loaners, so check the store page
                for the exact terms. Use the Aurora to learn the basics, and the
                loaners to find out which job you enjoy.
              </p>
              <h3 className="pt-2 text-lg font-semibold text-starwhite">Aurora Mk II vs Mustang Alpha</h3>
              <p>
                The Mustang Alpha used to be a starting choice in some game
                packages. It no longer is. RSI still sells it as a separate
                ship, so you can buy it later. The honest comparison:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">
                    <Term name="Aurora">Aurora Mk II</Term> — the practical choice.
                  </strong>{' '}
                  It carries cargo. That single fact opens delivery missions
                  immediately — the simplest, safest way for a new player to earn{' '}
                  <Term name="aUEC">aUEC</Term>. It also has a small bed, which lets
                  you log out safely away from a station.
                </li>
                <li>
                  <strong className="text-starwhite">
                    <Term name="Mustang">Mustang Alpha</Term> — the fun choice.
                  </strong>{' '}
                  It is faster and more agile, and many players enjoy flying it more.
                  But it carries almost nothing, which locks you out of the easiest
                  early money. As a first ship, fun loses to practical.
                </li>
              </ul>
              <div className="grid gap-4 sm:grid-cols-2">
                <figure className="overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src="/images/ships/aurora-mr.jpg"
                    alt="The RSI Aurora MR starter ship."
                    width={1820}
                    height={1024}
                    className="h-auto w-full"
                  />
                  <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                    The RSI Aurora — the practical starter.
                  </figcaption>
                </figure>
                <figure className="overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src="/images/ships/mustang-alpha.jpg"
                    alt="The Consolidated Outland Mustang Alpha starter ship."
                    width={1820}
                    height={1024}
                    className="h-auto w-full"
                  />
                  <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                    The Mustang Alpha — the fun alternate.
                  </figcaption>
                </figure>
              </div>
              <p>
                Today the choice makes itself: the First Flight Pack comes with
                the Aurora Mk II. The Mustang Alpha is an optional extra for
                later, once you know you want a faster ship.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Your first ship is not your forever ship</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The biggest first-ship mistake is treating the decision as permanent.
                It is not, for two reasons:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">You can earn ships in-game.</strong>{' '}
                  Missions, cargo, mining, and salvage pay aUEC. Rent a ship to try a
                  career, then buy it outright at an in-game ship shop.{' '}
                  <Link href="/day-one-citizen/ships-real-money" className="text-gold underline-offset-4 hover:underline">
                    No real money required
                  </Link>.
                </li>
                <li>
                  <strong className="text-starwhite">You can upgrade the hull you own.</strong>{' '}
                  A <Term name="CCU">CCU</Term> — Cross-Chassis Upgrade — converts
                  your pledge-store ship into a different one for the price
                  difference between them. Your package, game access, and insurance
                  terms come along.{' '}
                  <Link href="/beyond-the-basics/ccu-chains" className="text-gold underline-offset-4 hover:underline">
                    How CCU chains work is covered here
                  </Link>.
                </li>
              </ul>
              <p>
                That is why one starter package is enough. Start in the
                Aurora, try the loaners, fly for a few weeks, and let the game
                tell you what you actually enjoy. If a career hooks you, the{' '}
                <Link href="/day-one-citizen/starter-package" className="text-gold underline-offset-4 hover:underline">
                  First Flight Pack guide
                </Link>{' '}
                and the in-game market are both still there — and a CCU means the
                money you already spent is never wasted.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">What to do in your Aurora first</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                A first-week plan that plays to the ship&rsquo;s strengths:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Fly two or three delivery missions — small boxes, honest pay, and
                  the best navigation practice in the game.
                </li>
                <li>
                  Take a <Term name="Bounty">bounty</Term> assessment once flying
                  feels comfortable — the Aurora handles the first tiers fine.
                </li>
                <li>
                  Spend your 50,000 <Term name="UEC">UEC</Term>{' '}
                  <Term name="Referral Code">referral</Term> head start on armor and
                  a better weapon, not a ship —{' '}
                  <Link href="/referral-code" className="text-gold underline-offset-4 hover:underline">
                    how the bonus works
                  </Link>.
                </li>
                <li>
                  Rent something bigger for a weekend once you have aUEC to spare,
                  and see what fits.
                </li>
              </ul>
              <p>
                When you are ready to actually make the purchase,{' '}
                <Link href="/day-one-citizen/buying-the-game" className="text-gold underline-offset-4 hover:underline">
                  the step-by-step buying walkthrough
                </Link>{' '}
                covers the whole checkout, referral code included.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What is the best first ship?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  The Aurora Mk II, the ship in the First Flight Pack ($60
                  list, often $45 on sale). It carries cargo, which opens
                  delivery missions from your first session, and the pack
                  includes six months of insurance. Learn the game in it, then
                  upgrade or earn other ships later.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Should I buy the Mustang Alpha instead?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  It is no longer a choice inside a game package. RSI sells the
                  Mustang Alpha only as a separate ship. The Aurora Mk II is
                  the more practical first ship because it carries cargo. The
                  Mustang is faster but carries almost nothing. Buy it later
                  if you want it.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What are the three loaner ships?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Thirty-day loans of the Drake Golem (mining), MISC Fortune
                  (salvage) and Crusader Intrepid (cargo), included in the
                  First Flight Pack according to RSI&rsquo;s store.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Can you upgrade your starter ship later?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Yes, two ways. A CCU (Cross-Chassis Upgrade) converts your
                  pledge-store ship into a bigger one for the price difference,
                  keeping your insurance. Or you simply earn aUEC in-game and
                  rent or buy other ships without spending more real money.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Do you keep your first ship forever?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Yes, if it came from a game package or the pledge store —
                  real-money purchases survive every wipe. The First Flight
                  Pack Aurora comes with six months of insurance; the
                  ship itself stays yours permanently either way.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" trackingLabel="first-ship-cta">
              Start in an Aurora
            </CTAButton>
            <DiscordCTA />
          </div>

          <nav className="flex items-center justify-between text-sm">
            <Link
              href="/day-one-citizen/ships-real-money"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Ships and real money
            </Link>
            <Link
              href="/day-one-citizen/starter-package"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              The First Flight Pack <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>

        <PageSources route="/day-one-citizen/first-ship" />
      </main>
      <Footer />
    </>
  )
}
