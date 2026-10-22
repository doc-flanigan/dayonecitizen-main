import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { GuideProgress, DoThisNow } from '@/components/GuideProgress'
import CTAButton from '@/components/CTAButton'
import SaleAlertCTA from '@/components/SaleAlertCTA'
import { DiscordCTA } from '@/components/DiscordCTA'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import PageSources from '@/components/PageSources'
import SourceLink from '@/components/SourceLink'

export const metadata: Metadata = {
  title: 'Star Citizen First Flight Pack (2026)',
  description:
    'RSI now sells one Star Citizen starter package, the First Flight Pack: $60, often on sale for $45. See what is in it and the three loaner ships.',
  alternates: {
    canonical: '/day-one-citizen/starter-package',
    languages: {
      en: '/day-one-citizen/starter-package',
      de: '/de/starterpaket',
      'x-default': '/day-one-citizen/starter-package',
    },
  },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Star Citizen First Flight Pack: The One Starter Package',
    description:
      'One package. One starter ship. Three loaner ships to try mining, salvage and cargo. Here is what the First Flight Pack includes.',
    url: '/day-one-citizen/starter-package',
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
      name: 'What is the best starter package in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is only one now: the Star Citizen First Flight Pack. RSI lists it at $60, and it was on sale for $45 (25% off) as of October 2026. It includes the Aurora Mk II starter ship, six months of insurance, a self-land hangar, 10,000 UEC and the game download.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much is a Star Citizen starter package?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The First Flight Pack lists at $60. As of October 2026 it was on sale for $45. Sales come and go, so check the RSI pledge store for today's price. It is the only game package RSI sells.",
      },
    },
    {
      '@type': 'Question',
      name: 'What does the Star Citizen First Flight Pack include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One Aurora Mk II starter ship, six months of insurance, a self-land hangar, 10,000 UEC and the Star Citizen digital download. RSI also adds 30-day loaner access to three more ships: the Drake Golem for mining, the MISC Fortune for salvage and the Crusader Intrepid for cargo hauling.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happened to the old Star Citizen starter packages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RSI replaced them. The Citizen Starter Pack, the Mustang Alpha packs, the Aurora MR pack, the Avenger Titan pack and the other older starter packs are no longer sold as game packages. Their store pages now return an error. The Mustang Alpha is still sold as a separate ship.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I wait for a sale to buy Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You do not have to. The First Flight Pack is sometimes discounted, but nobody can promise when. Buy only the game package, and skip big ships bought in sale hype. If you want to try the game first, watch for a Free Fly. The Intergalactic Aerospace Expo has had one in each of the last four years.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the Star Citizen Anniversary sale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CIG has held an Anniversary sale in November since 2013. We have not seen official 2026 dates yet. Dates for the Intergalactic Aerospace Expo, which is also held in November, are on freeflyevent.com.',
      },
    },
  ],
}

export default function StarterPackagePage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Day One Citizen', url: '/day-one-citizen' },
          { name: 'Starter Package', url: '/day-one-citizen/starter-package' },
        ]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-12 pt-32 sm:pt-40">
          <div className="container-narrow">
            <Link
              href="/day-one-citizen"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-gold"
            >
              <ArrowLeft size={12} aria-hidden /> Day One Citizen
            </Link>
            <GuideProgress slug="starter-package" />
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              The Star Citizen First Flight Pack
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              The <Term name="RSI">RSI</Term> store now sells one starter
              package. It is called the First Flight Pack. Here is what is in
              it, what the three loaner ships are for, and what to buy later.
            </p>
            <p className="mt-3 text-sm">
              <Link
                href="/de/starterpaket"
                hrefLang="de"
                lang="de"
                className="text-gold underline-offset-4 hover:underline"
              >
                Diese Seite auf Deutsch →
              </Link>
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">
          <DoThisNow slug="starter-package" />

          <section>
            <p className="rounded-2xl border border-gold/30 bg-gold/5 p-4 text-sm leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">Updated October 2026:</strong>{' '}
              RSI now sells one starter package. The older Citizen Starter,
              Mustang Alpha, Aurora MR, Avenger Titan and other starter packs
              are no longer sold as game packages. If an older guide told you to
              choose between several packs, this page replaces it.{' '}
              <SourceLink href="https://robertsspaceindustries.com/en/store/pledge/browse/game-packages">
                Official RSI pledge store
              </SourceLink>
            </p>
          </section>

          <section>
            <p className="max-w-2xl text-base leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">Want to play Star Citizen?
              Get the First Flight Pack.</strong>{' '}
              It lists at $60 and was on sale for $45 as of October 2026. It
              comes with the <Term name="Aurora">Aurora Mk II</Term> and six
              months of insurance. It also lets you try three more ships for
              thirty days.{' '}
              <SourceLink href="https://robertsspaceindustries.com/en/pledge/Packages/Star-Citizen-First-Flight-Pack">
                Official RSI store page
              </SourceLink>
            </p>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">What is in the First Flight Pack</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                RSI&rsquo;s store lists these items in the pack:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  One starter ship: the <Term name="Aurora">Aurora Mk II</Term>
                </li>
                <li>Six months of ship insurance</li>
                <li>A self-land hangar to store your ship</li>
                <li>
                  10,000 <Term name="UEC">UEC</Term> on your account. This is
                  separate from the <Term name="aUEC">aUEC</Term> you spend at
                  in-game shops
                </li>
                <li>The Star Citizen digital download</li>
              </ul>
              <p>
                It is Star Citizen only. It does not include Squadron 42, the
                separate single-player story game. The download gives you access
                to the live <Term name="PU">Persistent Universe</Term> alpha.
              </p>
              <p>
                Referral codes are separate. A new account created with a code
                gets 50,000 UEC on top of the pack&rsquo;s 10,000.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">The three loaner ships</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                RSI&rsquo;s store says the pack also gives you thirty-day loaner
                access to three more starter ships. The aim is to let you
                explore different gameplay styles and ship makers.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-left">
                      <th className="px-4 py-3 font-semibold text-gold">Loaner ship</th>
                      <th className="px-4 py-3 font-semibold text-gold">Made by</th>
                      <th className="px-4 py-3 font-semibold text-gold">Try this career</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="px-4 py-3 font-semibold text-starwhite">
                        <Term name="Golem">Drake Golem</Term>
                      </td>
                      <td className="px-4 py-3 text-starwhite/80">Drake Interplanetary</td>
                      <td className="px-4 py-3 text-starwhite/80">Mining</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-starwhite">MISC Fortune</td>
                      <td className="px-4 py-3 text-starwhite/80">MISC</td>
                      <td className="px-4 py-3 text-starwhite/80">Salvage (stripping wrecked ships for parts)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-starwhite">
                        <Term name="Intrepid">Crusader Intrepid</Term>
                      </td>
                      <td className="px-4 py-3 text-starwhite/80">Crusader Industries</td>
                      <td className="px-4 py-3 text-starwhite/80">Cargo hauling</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                RSI&rsquo;s page does not say more than that. Check the store
                page for the exact loaner terms before you buy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">What happened to the old packages?</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                RSI used to sell several starter packages. Each one came with a
                different ship. As of October 2026, the store&rsquo;s game
                package list shows only the First Flight Pack. The older pack
                pages no longer load.
              </p>
              <p>
                The <Term name="Mustang">Mustang Alpha</Term> is still for sale,
                but only as a separate ship. It is no longer a starting choice
                inside a game package. You can buy it, or another ship, later.{' '}
                <Link href="/day-one-citizen/first-ship" className="text-gold underline-offset-4 hover:underline">
                  The first-ship guide
                </Link>{' '}
                explains how to think about it.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">What NOT to buy on day one</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The <Term name="RSI">RSI</Term>{' '}
                <Term name="Pledge">pledge store</Term> sells hundreds of ships at prices
                ranging from $50 to well over $1,000. Resist the temptation to spend
                more than you need to. Here is why:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  You do not yet know which career you will enjoy. Mining, hauling,
                  combat, and salvage each need entirely different ships. The three
                  loaners let you try three of them first.
                </li>
                <li>
                  Many mid- and high-end ships need a crew to operate well.
                  A solo player in an under-crewed large ship is often less effective
                  than a solo player in a smaller, agile one.
                </li>
                <li>
                  Ships can be bought in-game with earned{' '}
                  <Term name="aUEC">aUEC</Term>. The in-game ship market gives access
                  to most working ships without spending more real money —{' '}
                  <Link href="/day-one-citizen/ships-real-money" className="text-gold underline-offset-4 hover:underline">
                    how earning ships works is covered here
                  </Link>.
                </li>
                <li>
                  Standalone ship purchases do not include game access. Do not
                  accidentally buy only a ship. Make sure your purchase is the
                  First Flight Pack — or that you already own a game package.
                </li>
              </ul>
            </div>
          </section>

          <section id="sale" className="scroll-mt-24">
            <h2 className="heading-display text-2xl sm:text-3xl">Buying during IAE or the Anniversary sale</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <strong className="text-starwhite">A sale is a bonus, not a deadline.</strong>{' '}
                In 2014, CIG wrote that nothing beyond a starter package will ever
                be necessary for the full Star Citizen experience.{' '}
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/14314-Star-Citizen-Anniversary-Sale">
                  Official RSI blog post
                </SourceLink>{' '}
                One starter <Term name="Game Package">Game Package</Term> is all a
                new player needs.
              </p>

              <h3 className="pt-2 text-lg font-semibold text-starwhite">When the sale window is</h3>
              <p>
                Two November events matter here. CIG has held an Anniversary sale
                in late November since 2013.{' '}
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/14314-Star-Citizen-Anniversary-Sale">
                  Official RSI blog post
                </SourceLink>{' '}
                The <Term name="IAE">Intergalactic Aerospace Expo</Term>, a ship
                show, is also held in November. CIG has said ships and
                merchandise return for sale at events such as IAE.{' '}
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/18561-Spring-Merchandise-Sale">
                  Official RSI blog post
                </SourceLink>
              </p>
              <p>
                We have not seen official dates for IAE 2956 or a 2026
                Anniversary sale yet. Last year, CIG published the IAE 2955 dates
                on November 6, 2025.{' '}
                <SourceLink href="https://robertsspaceindustries.com/spectrum/community/SC/forum/1/thread/intergalactic-aerospace-expo-2955-save-the-date">
                  Official forum post
                </SourceLink>{' '}
                For this year&rsquo;s dates, see{' '}
                <a
                  href="https://freeflyevent.com/next-free-fly"
                  className="text-gold underline-offset-4 hover:underline"
                >
                  when the next Free Fly is
                </a>.
              </p>

              <h3 className="pt-2 text-lg font-semibold text-starwhite">Try it free first</h3>
              <p>
                IAE has run as a <Term name="Free Fly">Free Fly</Term> in each of
                the last four years. During a Free Fly, anyone with a free RSI
                account can play the live game. No purchase is needed.{' '}
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/20861-Intergalactic-Aerospace-Expo-2955-Free-Fly-And-Manufacturer-Schedule">
                  Official RSI blog post
                </SourceLink>{' '}
                The 2955 event ran from November 20 to December 3, 2025. The
                earlier three are here:{' '}
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/20281-Intergalactic-Aerospace-Expo-2954-Free-Fly">
                  2954
                </SourceLink>
                ,{' '}
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/19596-Intergalactic-Aerospace-Expo-2953-Free-Fly">
                  2953
                </SourceLink>
                , and{' '}
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/18975-Intergalactic-Aerospace-Expo-2952-Free-Fly">
                  2952
                </SourceLink>
                . No one can promise a Free Fly this year, so check before you buy.
              </p>

              <h3 className="pt-2 text-lg font-semibold text-starwhite">What to buy, and what to skip</h3>
              <p>
                If you buy, buy only the game package. The First Flight Pack
                lists at $60 and was on sale for $45 as of October 2026.
                It comes with the <Term name="Aurora">Aurora Mk II</Term>, six
                months of ship insurance, and 10,000 <Term name="UEC">UEC</Term>.{' '}
                <SourceLink href="https://robertsspaceindustries.com/en/pledge/Packages/Star-Citizen-First-Flight-Pack">
                  Official RSI store page
                </SourceLink>{' '}
                The pack does get discounted at times. We cannot say when, or
                by how much, so check the RSI store for today&rsquo;s price.
              </p>
              <p>Here is what to skip while you are new:</p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">A big ship bought in sale hype.</strong>{' '}
                  You do not know yet which career you will enjoy. Play first,
                  then decide.{' '}
                  <Link href="/day-one-citizen/ships-real-money" className="text-gold underline-offset-4 hover:underline">
                    How earning ships works
                  </Link>{' '}
                  is covered here.
                </li>
                <li>
                  <strong className="text-starwhite">Upgrades before you know what you like.</strong>{' '}
                  A <Term name="CCU">CCU</Term> is priced at the gap between two
                  ships, so it can wait until you know which ship you want.{' '}
                  <SourceLink href="https://support.robertsspaceindustries.com/hc/en-us/articles/115010056848-Ship-Upgrades-CCUs">
                    Official RSI support article
                  </SourceLink>
                </li>
              </ul>
              <p>
                Still unsure the game is for you? Read{' '}
                <Link href="/day-one-citizen/worth-buying" className="text-gold underline-offset-4 hover:underline">
                  whether Star Citizen is worth buying
                </Link>.
              </p>

              <h3 className="pt-2 text-lg font-semibold text-starwhite">The referral code during a sale</h3>
              <p>
                Signing up during a sale? Use the code the usual way. Enter
                STAR-GCQJ-N6NC when you create your account, or
                within about twenty-four hours in your account settings. It
                cannot be added after that.{' '}
                <SourceLink href="https://robertsspaceindustries.com/en/referral-program">
                  Official RSI referral page
                </SourceLink>{' '}
                New accounts created with a code receive 50,000 UEC. The{' '}
                <Link href="/referral-code" className="text-gold underline-offset-4 hover:underline">
                  referral code page
                </Link>{' '}
                has the full steps.
              </p>
            </div>
          </section>

          <SaleAlertCTA />

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What is the best starter package?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  There is only one now: the First Flight Pack. It lists at
                  $60 and was on sale for $45 as of October 2026. It includes the
                  Aurora Mk II, six months of insurance, a self-land hangar,
                  10,000 UEC and the game download.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  How much does a starter package cost?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  $60 list, often on sale for $45. Sales come and go, so check
                  the RSI pledge store for today&rsquo;s price.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What does the First Flight Pack include?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  The Aurora Mk II, six months of insurance, a self-land
                  hangar, 10,000 UEC and the game download. It also adds
                  thirty-day loaner access to the Drake Golem (mining), MISC
                  Fortune (salvage) and Crusader Intrepid (cargo).
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What happened to the old starter packages?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  RSI replaced them. They are no longer sold as game packages.
                  The Mustang Alpha is still sold, but only as a separate ship.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Should I wait for a sale to buy Star Citizen?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  You do not have to. The pack is sometimes discounted,
                  but nobody can promise when. Buy only the game package,
                  and skip big ships bought in sale hype. If you want to try the
                  game first, watch for a Free Fly. The Intergalactic Aerospace
                  Expo has had one in each of the last four years.{' '}
                  <a href="#sale" className="text-gold underline-offset-4 hover:underline">
                    More on buying during a sale
                  </a>
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  When is the Star Citizen Anniversary sale?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  CIG has held an Anniversary sale in November since 2013. We
                  have not seen official 2026 dates yet. Dates for the
                  Intergalactic Aerospace Expo, which is also held in November,
                  are on{' '}
                  <a
                    href="https://freeflyevent.com/next-free-fly"
                    className="text-gold underline-offset-4 hover:underline"
                  >
                    freeflyevent.com
                  </a>.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" href="/referral-code" trackingLabel="starter-package-cta" />
            <DiscordCTA />
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

        <PageSources route="/day-one-citizen/starter-package" />
      </main>
      <Footer />
    </>
  )
}
