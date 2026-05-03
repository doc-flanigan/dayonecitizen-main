import type { Metadata } from 'next'
import { Wrench, ExternalLink, Star } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Star Citizen Tools — Calculators, Fleet Viewer & Reference',
  description:
    'The best fan-made tools for Star Citizen players: fleet visualizer, DPS calculator, trade route planner, item finder, ship stats, and more.',
  alternates: { canonical: '/tools' },
  openGraph: {
    title: 'Star Citizen Tools — Calculators, Fleet Viewer & Reference',
    description:
      'The best fan-made Star Citizen tools: fleet visualizer, DPS calculator, trade route planner, item finder, and ship stats.',
    url: '/tools',
  },
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

          {/* Featured tool */}
          <section>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Featured Tool
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
