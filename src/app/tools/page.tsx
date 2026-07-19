import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Wrench, ExternalLink, Star } from 'lucide-react'
import Term from '@/components/Term'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'

export const metadata: Metadata = {
  title: 'Star Citizen Fleet Viewer & Tools — StarJump, Erkul & More',
  description:
    'Star Citizen fleet viewer, DPS calculator, and trade route planner — the best fan-made tools for every player. StarJump, Erkul, and UEX Corp.',
  alternates: { canonical: '/tools' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Star Citizen Fleet Viewer & Tools — StarJump, Erkul & More',
    description:
      'Star Citizen fleet viewer, DPS calculator, trade routes, and more — the best fan-made tools including StarJump, Erkul, and UEX Corp.',
    url: '/tools',
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
      name: 'What are the best Star Citizen tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Five community tools cover most needs: StarJump Fleetviewer (hangar.link) for comparing ship sizes in 3D, Erkul (erkul.games) for ship loadouts and damage-per-second math, SC Trade Tools for trade route planning, UEX Corp for live commodity prices, and CCU Game for finding the cheapest ship upgrade path. All are free, fan-made, and run in the browser.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Erkul in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Erkul (erkul.games) is a free ship loadout calculator. Pick any ship, configure its weapons and components, and it shows damage per second, shield regeneration, power draw, and quantum range — before you spend in-game currency on parts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best Star Citizen fleet viewer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'StarJump Fleetviewer (hangar.link) is the community favourite. It renders every flyable and concept ship in high-resolution 3D so you can build a fleet, compare ship sizes side by side, and share the result with other players.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Star Citizen fan tools free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every tool listed here — fleet viewers, trade planners, mining calculators, item finders — is free and built by the community. None are affiliated with Cloud Imperium Games, and accuracy depends on their volunteer maintainers keeping up with game updates.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tool finds the cheapest ship upgrade path?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CCU Game (ccugame.app). A Cross-Chassis Upgrade lets you move from one ship to a pricier one by paying only the difference. CCU Game chains those upgrades together automatically and shows the lowest-cost route to the ship you want, including discounted steps from past sales.',
      },
    },
  ],
}

type Tool = {
  name: string
  description: string
  url: string
  category: string
  badge?: string
}

const FEATURED: Tool = {
  name: 'StarJump Fleetviewer',
  description:
    'The definitive Star Citizen fleet visualizer. Build your fleet, compare ship sizes side by side in stunning 3D, and share your loadout with other players. Uses high-resolution pre-rendered assets to show every flyable and concept ship in the game. Best-in-class for understanding the true scale of ships before you pledge.',
  url: 'https://hangar.link/',
  category: 'Ships',
  badge: 'Community Favourite',
}

const TOOLS: Tool[] = [
  // Ships & Combat
  {
    name: 'Erkul DPS Calculator',
    description:
      'Pick any ship, configure your loadout, and instantly see the effect on damage per second, shield regen, power draw, and quantum range. Essential for optimising combat builds before spending aUEC on components.',
    url: 'https://www.erkul.games/',
    category: 'Ships & Combat',
  },
  {
    name: 'Spviewer',
    description:
      'Exhaustive ship performance data in one place — speed, agility, shield HP, cargo, crew, and more. Compare any two ships side by side to see which fits your playstyle.',
    url: 'https://www.spviewer.eu',
    category: 'Ships & Combat',
  },
  {
    name: 'CCU Game',
    description:
      'Find the cheapest upgrade path between ships using Cross-Chassis Upgrades. Tracks historical ship prices and shows the lowest-cost route to the ship you actually want.',
    url: 'https://ccugame.app',
    category: 'Ships & Combat',
  },
  // Trading & Economy
  {
    name: 'SC Trade Tools',
    description:
      "The go-to trade route planner. Enter your ship's cargo capacity and jump range, and it finds the most profitable commodity runs in the current patch.",
    url: 'https://sc-trade.tools/home',
    category: 'Trading & Economy',
  },
  {
    name: 'UEX Corp',
    description:
      'Live commodity prices, market data, and trading plans sourced directly from in-game terminals. Also covers mining commodity values and refinery calculations.',
    url: 'https://uexcorp.space/',
    category: 'Trading & Economy',
  },
  // Exploration & Mining
  {
    name: 'Regolith Rocks',
    description:
      'Mining calculators, group coordination tools, and survey data for prospectors. Helps you plan ore runs, estimate yields, and track refinery jobs across multiple sessions.',
    url: 'https://regolith.rocks/',
    category: 'Exploration & Mining',
  },
  {
    name: 'Cornerstone Item Finder',
    description:
      "Can't find a specific helmet, weapon, or ship component in-game? Cornerstone shows every shop that stocks it, with current prices. Saves hours of running between vendors.",
    url: 'https://finder.cstone.space/',
    category: 'Exploration & Mining',
  },
  {
    name: 'Verseguide',
    description:
      "An interactive guide to every location in the game — planets, moons, stations, outposts, derelicts. Great for planning an exploration run or just orienting yourself in the 'Verse.",
    url: 'https://verseguide.com/',
    category: 'Exploration & Mining',
  },
  // Reference
  {
    name: 'Star Citizen Wiki',
    description:
      'The community encyclopedia. Ships, equipment, locations, lore, patch history, and mechanics — all documented in detail. If you need to look something up, start here.',
    url: 'https://starcitizen.tools/',
    category: 'Reference',
  },
  {
    name: 'RSI Roadmap',
    description:
      "The official development progress tracker from Cloud Imperium. Shows what's in active development, what's in the release view for the current patch, and what's coming next.",
    url: 'https://robertsspaceindustries.com/roadmap/progress-tracker',
    category: 'Reference',
  },
]

const CATEGORIES = ['Ships & Combat', 'Trading & Economy', 'Exploration & Mining', 'Reference']

export default function ToolsPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Tools', url: '/tools' },
        ]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/30 pb-16 pt-32 sm:pt-40">
          <div className="container-wide">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <Wrench size={14} aria-hidden /> Tools
            </p>
            <h1 className="heading-display text-4xl sm:text-5xl">
              Community-built tools for{' '}
              <span className="text-gold-gradient">the &lsquo;Verse.</span>
            </h1>
            <p className="mt-5 max-w-3xl text-base text-muted">
              Star Citizen has a rich ecosystem of fan-made tools. These are the
              ones worth bookmarking — from fleet visualisers and DPS calculators
              to trade route planners and live commodity prices. All free, all
              community-built.
            </p>
          </div>
        </header>

        <div className="container-wide py-16 space-y-20">

          <section>
            <p className="max-w-3xl text-base leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">Five tools cover most of what a
              new player needs.</strong>{' '}
              StarJump Fleetviewer compares ship sizes in 3D. Erkul calculates
              ship loadouts and damage per second. SC Trade Tools plans trade
              routes. UEX Corp tracks live commodity prices. CCU Game finds the
              cheapest upgrade path between ships using{' '}
              <Term name="CCU">CCUs</Term>. Every tool on this page is free,
              browser-based, and built by the community.
            </p>
          </section>

          {/* In-house quick reference */}
          <section className="rounded-2xl border border-gold/20 border-l-4 border-l-gold bg-navyLight/40 p-6 shadow-[0_0_30px_-14px_rgba(240,192,64,0.35)] sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="inline-flex items-center rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-navy">
                  Built by DayOneCitizen
                </p>
                <h2 className="heading-display mt-3 text-xl sm:text-2xl">
                  Quick Reference — keybinds &amp; shops on one page
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  The keybinds that matter and which shop sells what, built for
                  your phone. No tabs to juggle mid-session.
                </p>
              </div>
              <Link
                href="/quick-reference"
                className="rounded-full border border-gold/40 px-5 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
              >
                Open the cheat sheet &rarr;
              </Link>
            </div>
          </section>

          {/* In-house fact check */}
          <section className="rounded-2xl border border-gold/20 border-l-4 border-l-gold bg-navyLight/40 p-6 shadow-[0_0_30px_-14px_rgba(240,192,64,0.35)] sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="inline-flex items-center rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-navy">
                  Built by DayOneCitizen
                </p>
                <h2 className="heading-display mt-3 text-xl sm:text-2xl">
                  Fact Check — is that Star Citizen claim actually true?
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  A searchable ledger of claims about the game — wipes, the
                  referral bonus, funding, events — each verified against an
                  official Cloud Imperium source, with the date we last checked.
                  Also answers as the <code className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-gold">/factcheck</code>{' '}
                  command in our Discord.
                </p>
              </div>
              <Link
                href="/fact-check"
                className="rounded-full border border-gold/40 px-5 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
              >
                Search the fact check &rarr;
              </Link>
            </div>
          </section>

          {/* Featured guide: CCU Game */}
          <section>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Featured Guide
            </p>
            <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-navyLight/40 p-8 sm:p-10">
              <h2 className="heading-display text-2xl sm:text-3xl text-starwhite">
                Plan ship upgrades with CCU Game
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-starwhite/85">
                A <Term name="CCU">CCU</Term> lets you move from one ship to a pricier one by
                paying only the price difference. Chaining several together can cut a
                ship&apos;s real cost in half.{' '}
                <a
                  href="https://ccugame.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline underline-offset-2 hover:text-goldDark"
                >
                  CCU Game
                </a>{' '}
                is the free calculator we recommend for building those chains. It also manages
                your <Term name="Hangar">hangar</Term> — import your RSI account and it shows
                every ship and upgrade you own, plus anything you can{' '}
                <Term name="Buyback Token">buy back</Term>.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 items-start">
                <div>
                  <a
                    href="/images/tools-ccu-chain-example.jpg"
                    target="_blank"
                    rel="noopener"
                    className="block overflow-hidden rounded-xl border border-white/10 transition-opacity hover:opacity-90"
                    title="Open the full-size screenshot"
                  >
                    <Image
                      src="/images/tools-ccu-chain-example.jpg"
                      alt="CCU Game chain builder with six numbered, color-coded regions showing a nine-step upgrade chain from a Gladius fighter to a Corsair, costing $65 against a $250 retail price."
                      width={1054}
                      height={1125}
                      unoptimized
                      className="w-full h-auto"
                      sizes="(max-width: 1024px) 100vw, 520px"
                    />
                  </a>
                  <p className="mt-2 text-center text-xs text-starwhite/50">
                    Small text? <span className="text-gold">Click the image</span> to open it full
                    size.
                  </p>
                </div>

                <div className="space-y-3 text-sm leading-relaxed text-starwhite/80">
                  {[
                    { n: 1, color: 'bg-[#38bdf8]', label: 'The header card', body: 'The target ship — a Corsair, a large multi-crew ship. It shows the $65 chain cost against the $250 retail price, and 120 months of insurance.' },
                    { n: 2, color: 'bg-[#a78bfa]', label: 'From / To', body: 'Every upgrade step in the chain, applied top to bottom.' },
                    { n: 3, color: 'bg-[#fb923c]', label: 'Origin', body: 'Where each step comes from. Store means buy it now. Buyback means re-purchase something you returned. Hangar means you already own it.' },
                    { n: 4, color: 'bg-[#eab308]', label: 'Item MSRP vs Item Pledge', body: 'Full price against what you actually pay. One $70 step here cost only $5 during a past sale.' },
                    { n: 5, color: 'bg-[#fb7185]', label: 'Ship Melt / Ship MSRP', body: "The ship's return value and retail value at every step of the climb." },
                    { n: 6, color: 'bg-[#34d399]', label: 'The bottom line', body: 'Finishing this chain needs $50 — $30 in store credit and $20 in new money.' },
                  ].map(({ n, color, label, body }) => (
                    <div key={n} className="flex items-start gap-2.5">
                      <span className={`${color} mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-navy`}>{n}</span>
                      <div>
                        <strong className="text-starwhite">{label}</strong> — {body}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  'Import your hangar so CCU Game knows what you already own.',
                  'Pick a target ship. The cheapest chain is built for you automatically.',
                  'Buy the discounted steps during sales. They never expire.',
                  'Apply the chain in order on the RSI website. Each step is permanent.',
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-gold">{i + 1}</span>
                    <p className="text-sm leading-relaxed text-starwhite/80">{step}</p>
                  </div>
                ))}
              </div>

              <p className="mt-7">
                <a
                  href="https://ccugame.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gold hover:text-goldDark"
                >
                  Open CCU Game →
                </a>
              </p>
            </div>
          </section>

          {/* Tool categories */}
          {CATEGORIES.map((category) => {
            const tools = TOOLS.filter((t) => t.category === category)
            return (
              <section key={category}>
                <h2 className="heading-display mb-6 text-xl sm:text-2xl">{category}</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {tools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group card-surface flex flex-col p-6 transition-colors hover:border-gold/40"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="heading-display text-lg text-starwhite group-hover:text-gold transition-colors">
                          {tool.name}
                        </h3>
                        <ExternalLink
                          size={14}
                          className="mt-1 flex-shrink-0 text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-hidden
                        />
                      </div>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-starwhite/75">
                        {tool.description}
                      </p>
                      <p className="mt-4 text-xs font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                        Open tool →
                      </p>
                    </a>
                  ))}
                </div>
              </section>
            )
          })}

          {/* Essential tool: StarJump */}
          <section>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Essential Tool
            </p>
            <a
              href={FEATURED.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-navyLight/40 p-8 transition-colors hover:border-gold/60 hover:bg-gold/10 sm:p-10"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Star size={18} className="text-gold flex-shrink-0" aria-hidden />
                    <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-0.5 text-xs font-semibold text-gold">
                      {FEATURED.badge}
                    </span>
                  </div>
                  <h2 className="heading-display text-2xl sm:text-3xl text-starwhite group-hover:text-gold transition-colors">
                    {FEATURED.name}
                    <ExternalLink
                      size={18}
                      className="ml-2 inline-block opacity-50 group-hover:opacity-100 transition-opacity"
                      aria-hidden
                    />
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-starwhite/85">
                    {FEATURED.description}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm font-semibold text-gold group-hover:text-goldDark">
                Open StarJump Fleetviewer →
              </p>
            </a>
          </section>

          {/* Common questions */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What are the best Star Citizen tools?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Five cover most needs: StarJump Fleetviewer for ship sizes,
                  Erkul for loadouts, SC Trade Tools for trade routes, UEX Corp
                  for commodity prices, and CCU Game for upgrade paths. All
                  free, all browser-based.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What is Erkul?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  A free ship loadout calculator at erkul.games. Pick a ship,
                  configure weapons and components, and see damage per second,
                  shield regeneration, power draw, and quantum range before you
                  spend in-game currency on parts.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What is the best fleet viewer?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  StarJump Fleetviewer at hangar.link. It renders every flyable
                  and concept ship in 3D so you can compare sizes side by side
                  and share your fleet with other players.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Are these tools free?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Yes — every tool here is free and community-built. None are
                  affiliated with Cloud Imperium Games, and accuracy depends on
                  volunteer maintainers keeping pace with game updates.
                </p>
              </div>
            </div>
          </section>

          {/* Referral CTA */}
          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" href="/referral-code" trackingLabel="tools-cta" />
          </div>

          {/* Disclaimer */}
          <section className="rounded-2xl border border-white/10 bg-navyLight/20 p-6 text-sm text-starwhite/60">
            <strong className="text-starwhite/80">Disclaimer:</strong>{' '}
            These are third-party tools built by the Star Citizen community. They are not
            affiliated with Cloud Imperium Games. Tool availability and accuracy depend on their
            maintainers — if a tool shows outdated data, check whether a recent game patch broke
            its data source.
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
