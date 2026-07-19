import type { Metadata } from 'next'
import Link from 'next/link'
import { Compass, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'

export const metadata: Metadata = {
  title: 'Star Citizen New Player Guide — Complete Step-by-Step — Day One Citizen',
  description:
    '12 Star Citizen guides for brand-new players: worth buying, system specs, buying, installing, keybinds, cities, first flight. Plain English, no jargon.',
  alternates: { canonical: '/day-one-citizen' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Star Citizen New Player Guide — Complete Step-by-Step',
    description:
      '12 guides from "should I buy this?" through your first quantum jump. Every step a brand-new Star Citizen player needs, plain English.',
    url: '/day-one-citizen',
    type: 'article',
  },
  twitter: {
    title: 'Star Citizen New Player Guide — Complete Step-by-Step',
    description:
      '12 guides from "should I buy this?" through your first quantum jump.',
    card: 'summary_large_image',
  },
}

type Section = {
  id: string
  number: string
  title: string
  stub: React.ReactNode
}

const SECTIONS: Section[] = [
  {
    id: 'worth-buying',
    number: '01',
    title: 'Is Star Citizen worth buying?',
    stub: (
      <>
        Star Citizen is in alpha and has been since 2012. It is ambitious,
        beautiful, and sometimes broken. This section covers what you actually
        get for the entry price today, what you don&rsquo;t, and the questions
        worth asking yourself before you pledge.
      </>
    ),
  },
  {
    id: 'system-specs',
    number: '02',
    title: 'System specs and hardware',
    stub: (
      <>
        Star Citizen is a demanding PC game. This section lists the official
        minimum and recommended specs, what you actually want for a smooth
        experience, and the hardware traps to avoid (low RAM, slow drives,
        outdated GPUs).
      </>
    ),
  },
  {
    id: 'buying-the-game',
    number: '03',
    title: 'How to actually buy the game',
    stub: (
      <>
        You buy through{' '}
        <Term name="RSI">robertsspaceindustries.com</Term> — not Steam, not the
        Epic store, not anywhere else. This section walks through creating an
        account, applying a <Term name="Referral Code">referral code</Term>{' '}
        for the 50,000 <Term name="UEC">UEC</Term> bonus, and finishing
        checkout.
      </>
    ),
  },
  {
    id: 'pledge-vs-purchase',
    number: '04',
    title: 'Pledge vs purchase — what’s the difference?',
    stub: (
      <>
        Star Citizen is crowdfunded, so the community calls buying a game
        package a <Term name="Pledge">pledge</Term> rather than a purchase.
        Functionally it&rsquo;s the same — money moves, you get a ship and
        access — but the wording matters when you read forum posts.
      </>
    ),
  },
  {
    id: 'starter-package',
    number: '05',
    title: 'Which starter package should you buy?',
    stub: (
      <>
        The cheapest packages start around $45 and include a small ship plus
        access to Star Citizen. This section compares all the current
        packages — the $45 pack comes with the Aurora Mk II — and explains
        which is the best fit for a first-time player.
      </>
    ),
  },
  {
    id: 'install',
    number: '06',
    title: 'Installing the game',
    stub: (
      <>
        After you&rsquo;ve pledged, you download a small installer from{' '}
        robertsspaceindustries.com that pulls down the actual launcher. This
        section covers the install paths, disk space requirements (150 GB of
        free SSD space), and the firewall prompts you&rsquo;ll see along the way.
      </>
    ),
  },
  {
    id: 'rsi-launcher',
    number: '07',
    title: 'Using the RSI launcher',
    stub: (
      <>
        The RSI launcher is what you open every time you want to play. This
        section explains the difference between the Live build, the{' '}
        <Term name="PTU">PTU</Term> build, and the{' '}
        <Term name="EPTU">EPTU</Term> build — and how to switch between them.
      </>
    ),
  },
  {
    id: 'first-launch',
    number: '08',
    title: 'Launching the game for the first time',
    stub: (
      <>
        Click <strong>Launch</strong>, wait through the load screens, and
        you&rsquo;ll land in your character&rsquo;s personal hab room — a tiny
        in-game apartment in one of four major cities. This section explains
        which character options matter on day one and which can be deferred.
      </>
    ),
  },
  {
    id: 'keybinds',
    number: '09',
    title: 'Key binds you need to know',
    stub: (
      <>
        Star Citizen has hundreds of key binds. You only need about a dozen on
        day one: open mobiGlas, open inventory, interact, sprint, summon ship,
        flight controls. This section lists them and points to where the full
        binding map lives in the options menu.
      </>
    ),
  },
  {
    id: 'first-day',
    number: '10',
    title: "Your first day in the ‘Verse",
    stub: (
      <>
        What does day one actually look like? You wake up in your hab room.
        You walk outside. You see other players. You panic, briefly. This
        section is a calm, ordered list of the first ten things to do — and
        what to ignore until later.
      </>
    ),
  },
  {
    id: 'getting-around',
    number: '11',
    title: 'Getting from your hab to the hangar',
    stub: (
      <>
        Your hab is in a city. Your ship is in a hangar at the spaceport. The
        hangar is reached by tram, train, or shuttle depending on the city.
        This section walks the route in each of the four major cities so
        you&rsquo;re never lost on day one.
      </>
    ),
  },
  {
    id: 'first-flight',
    number: '12',
    title: 'Your first flight',
    stub: (
      <>
        Power on. Strap in. Lift the landing gear. Burn for orbit. This
        section covers the take-off sequence, basic flight controls, and how
        not to crash into the hangar door on the way out.
      </>
    ),
  },
]

// Standalone quick-answer pages — pre-purchase questions that sit alongside
// the numbered twelve-section walkthrough rather than inside it.
type QuickAnswer = {
  id: string
  question: string
  answer: string
}

const QUICK_ANSWERS: QuickAnswer[] = [
  {
    id: 'is-star-citizen-on-steam',
    question: 'Is Star Citizen on Steam?',
    answer:
      'No — and not on consoles or Game Pass either. Where the game is actually sold, plus the honest Steam Deck answer.',
  },
  {
    id: 'ships-real-money',
    question: 'Do you have to buy ships with real money?',
    answer:
      'No. One $45 package is the only required purchase — every other ship can be rented or bought in-game with earned aUEC.',
  },
  {
    id: 'first-ship',
    question: 'What should your first ship be?',
    answer:
      'The Aurora Mk II from the $45 pack, for most new players. Compared honestly with the Mustang Alpha, plus the upgrade path.',
  },
  {
    id: 'next-wipe',
    question: 'When is the next wipe?',
    answer:
      'No wipe is currently announced. What a wipe actually touches — and why everything you paid for always survives.',
  },
]

// FAQPage structured data — mirrors the visible "Common questions" section so
// this page can earn rich results and AI answer-engine citations.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does the Day One Citizen guide cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Twelve short sections covering Star Citizen in plain English, in order — from “should I even buy this?” through your first take-off. It is written for someone who has never opened the launcher, with no jargon and no assumptions about what you already know.',
      },
    },
    {
      '@type': 'Question',
      name: 'What order should I read the sections in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The twelve sections are numbered and ordered, starting with whether Star Citizen is worth buying and ending with your first flight. Read them end to end, or skip ahead to the section you need via the table of contents.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the guide take to read?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'About thirty minutes end to end. Each section is short, and the table of contents lets you jump straight to the step you are on.',
      },
    },
  ],
}

export default function DayOneCitizenPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Day One Citizen', url: '/day-one-citizen' },
        ]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <header className="relative border-b border-white/5 bg-starfield pb-16 pt-32 sm:pt-40">
          <div
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
            aria-hidden
          />
          <div className="container-wide relative">
            <p className="eyebrow mb-4">
              <Compass size={14} aria-hidden /> Day One Citizen
            </p>
            <h1 className="heading-display text-4xl sm:text-6xl">
              Your first hour in <span className="text-gold-gradient">the &lsquo;Verse</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted">
              Star Citizen, plain English, in order. From &laquo;should I even buy
              this?&raquo; through your first take-off. No jargon, no
              gatekeeping, no assumptions about what you already know.
            </p>
            <p className="mt-4 max-w-2xl text-sm text-muted">
              Twelve short sections, written for someone who has never opened
              the launcher. Skip ahead via the table of contents, or read end
              to end in about thirty minutes.
            </p>
          </div>
        </header>

        <div className="container-wide grid gap-12 py-16 lg:grid-cols-[260px,1fr]">
          {/* Table of contents — sticky on desktop, accordion on mobile */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            {/* Mobile: collapsible */}
            <details className="lg:hidden">
              <summary className="cursor-pointer rounded-2xl border border-white/10 bg-navyLight/40 px-5 py-3 text-sm font-semibold text-starwhite hover:border-gold/40 hover:text-gold">
                Table of contents (12 sections)
              </summary>
              <ol className="mt-3 space-y-2 rounded-2xl border border-white/5 bg-navyLight/20 p-4 text-sm">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex items-baseline gap-3 text-starwhite/80 hover:text-gold"
                    >
                      <span className="font-mono text-xs text-gold">{s.number}</span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </details>
            {/* Desktop: always-visible side rail */}
            <nav
              className="hidden lg:block"
              aria-label="Table of contents"
            >
              <p className="eyebrow mb-4">On this page</p>
              <ol className="space-y-2 text-sm">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex items-baseline gap-3 text-starwhite/80 hover:text-gold"
                    >
                      <span className="font-mono text-xs text-gold">{s.number}</span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="step-rail relative space-y-16">
            {SECTIONS.map((s) => (
              <section
                key={s.id}
                id={s.id}
                className="group relative scroll-mt-24 pl-16 sm:pl-20"
              >
                {/* flight-plan step node */}
                <span
                  className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-navy font-mono text-sm font-bold text-gold shadow-[0_0_20px_-6px_rgba(245,185,66,0.6)] transition-all duration-300 ease-spring group-hover:border-gold group-hover:shadow-[0_0_26px_-6px_rgba(245,185,66,0.9)]"
                  aria-hidden
                >
                  {s.number}
                </span>
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  Section {s.number}
                </p>
                <h2 className="heading-display text-2xl sm:text-3xl">
                  <Link
                    href={`/day-one-citizen/${s.id}`}
                    className="hover:text-gold transition-colors"
                  >
                    {s.title}
                  </Link>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-starwhite/85">
                  {s.stub}
                </p>
                <Link
                  href={`/day-one-citizen/${s.id}`}
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-sm font-bold text-gold transition-colors hover:text-ember"
                >
                  Read the full guide{' '}
                  <ArrowRight
                    size={14}
                    aria-hidden
                    className="transition-transform duration-300 ease-spring group-hover:translate-x-1"
                  />
                </Link>
              </section>
            ))}

            <section>
              <h2 className="heading-display text-2xl sm:text-3xl">Quick answers before you buy</h2>
              <p className="mt-4 text-base leading-relaxed text-starwhite/85">
                The questions people search before spending anything, each with
                a straight answer on its own page.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {QUICK_ANSWERS.map((q) => (
                  <Link
                    key={q.id}
                    href={`/day-one-citizen/${q.id}`}
                    className="card-surface group rounded-lg border border-white/5 p-5 transition-colors hover:border-gold/40"
                  >
                    <h3 className="font-semibold text-starwhite group-hover:text-gold">
                      {q.question}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-starwhite/70">
                      {q.answer}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
              <div className="mt-6 space-y-6">
                <div className="card-surface rounded-lg p-5 border border-white/5">
                  <h3 className="font-semibold text-starwhite mb-2">
                    What does the Day One Citizen guide cover?
                  </h3>
                  <p className="text-starwhite/70 text-sm leading-relaxed">
                    Twelve short sections covering Star Citizen in plain English,
                    in order — from &laquo;should I even buy this?&raquo; through
                    your first take-off. It is written for someone who has never
                    opened the launcher, with no jargon and no assumptions about
                    what you already know.
                  </p>
                </div>

                <div className="card-surface rounded-lg p-5 border border-white/5">
                  <h3 className="font-semibold text-starwhite mb-2">
                    What order should I read the sections in?
                  </h3>
                  <p className="text-starwhite/70 text-sm leading-relaxed">
                    The twelve sections are numbered and ordered, starting with
                    whether Star Citizen is worth buying and ending with your first
                    flight. Read them end to end, or skip ahead to the section you
                    need via the table of contents.
                  </p>
                </div>

                <div className="card-surface rounded-lg p-5 border border-white/5">
                  <h3 className="font-semibold text-starwhite mb-2">
                    How long does the guide take to read?
                  </h3>
                  <p className="text-starwhite/70 text-sm leading-relaxed">
                    About thirty minutes end to end. Each section is short, and the
                    table of contents lets you jump straight to the step you are on.
                  </p>
                </div>
              </div>
            </section>

            <section className="card-surface relative overflow-hidden p-8">
              <div className="glow-horizon absolute inset-x-0 top-0 h-24" aria-hidden />
              <h2 className="heading-display text-2xl">
                Ready to jump in?
              </h2>
              <p className="mt-3 text-sm text-starwhite/85">
                All twelve guides are live. Not sure about a term you ran into?
                The{' '}
                <Link href="/glossary" className="text-gold underline-offset-4 hover:underline">
                  glossary
                </Link>{' '}
                covers the jargon you&rsquo;ll meet across{' '}
                <Term name="the 'Verse">the &lsquo;Verse</Term> —
                plain English, no gatekeeping.
              </p>
              <div className="mt-6">
                <CTAButton size="lg" trackingLabel="day-one-bottom-cta">
                  Use my referral code
                </CTAButton>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
