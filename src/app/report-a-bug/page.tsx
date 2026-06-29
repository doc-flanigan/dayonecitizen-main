import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Search, FileText, ClipboardList, Activity } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import SourceLink from '@/components/SourceLink'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import { SITE } from '@/lib/site'
import { OFFICIAL_SOURCES, COMMUNITY_SOURCES } from '@/data/report-a-bug-sources'

export const metadata: Metadata = {
  title: 'How to Report a Star Citizen Bug — The Issue Council Guide',
  description:
    'A plain-English, step-by-step guide to the Star Citizen Issue Council: gather evidence, search for duplicates, file a clear bug report, and track it to the developers.',
  alternates: { canonical: '/report-a-bug' },
  openGraph: {
    title: 'How to Report a Star Citizen Bug — The Issue Council Guide',
    description:
      'What the Issue Council is, who can use it, and how to file a Star Citizen bug report developers can actually reproduce and fix. Step by step, in plain English.',
    url: '/report-a-bug',
    type: 'article',
  },
}

const steps = [
  {
    slug: 'gathering-evidence',
    icon: ClipboardList,
    title: '1. Gather your evidence',
    description:
      'Your build number, your Game.log, a DxDiag report, and a screenshot or short video. Five minutes of prep makes a report developers can act on.',
  },
  {
    slug: 'searching-the-council',
    icon: Search,
    title: '2. Search before you file',
    description:
      'Sign in, search for your bug, and check whether someone has already reported it. If they have, you add to their report instead of making a duplicate.',
  },
  {
    slug: 'filing-a-report',
    icon: FileText,
    title: '3. File the report',
    description:
      'Pick the right version and channel, write a clear title and reproduction steps, and attach your evidence. This is the part that gets a bug fixed.',
  },
  {
    slug: 'after-you-file',
    icon: Activity,
    title: '4. Track it and help others',
    description:
      'Learn what each status means, and add your reproduction to other reports. Ten confirmations move a report up the queue toward the developers.',
  },
]

// HowTo + FAQPage structured data — helps this page earn rich results for
// "how to report a star citizen bug" and the Issue Council questions below.
const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to report a Star Citizen bug with the Issue Council',
  description:
    'Gather evidence, search for existing reports, file a clear report, then track it — the four steps to a Star Citizen bug report developers can reproduce.',
  step: steps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.title.replace(/^\d+\.\s*/, ''),
    text: s.description,
    url: `${SITE.url}/report-a-bug/${s.slug}`,
  })),
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Star Citizen Issue Council?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Issue Council is the official website where backers report Star Citizen bugs to the developers. Reports can be searched, confirmed by other players, and tracked through to the team. It is for bugs only — design feedback and ideas go to Spectrum instead.",
      },
    },
    {
      '@type': 'Question',
      name: 'Who can use the Issue Council?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only backers — people who have bought a Star Citizen package or pledge — can sign in and contribute to the Issue Council. You sign in with the same RSI account you use for the game.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Issue Council the same as Spectrum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Issue Council is for reporting bugs, with steps developers can reproduce. Spectrum, the official Star Citizen forum, is for design feedback, suggestions, and discussion. A report that does not describe a bug gets archived on the Issue Council.',
      },
    },
    {
      '@type': 'Question',
      name: 'What information do I need to report a Star Citizen bug?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A clear title, the game version and channel you were on, numbered reproduction steps, and your system specs from a DxDiag report. A screenshot or short video and your Game.log file make the report far stronger.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after I submit an Issue Council report?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Other players can confirm your report by adding their own reproduction. After about ten confirmations a report becomes Confirmed, then moves to Under Investigation when developers look at it, and Acknowledged once it enters the internal tracker.',
      },
    },
  ],
}

export default function ReportABugPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', url: '/' },
            { name: 'Report a Bug', url: '/report-a-bug' },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-12 pt-32 sm:pt-40">
          <div className="container-narrow">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Help Fix the Game
            </p>
            <h1 className="heading-display text-3xl sm:text-5xl">
              How to report a Star Citizen bug
              <span className="text-gold-gradient"> the right way.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              Found something broken? Complaining about it online rarely reaches
              the people who can fix it. A clear report on the{' '}
              <Term name="Issue Council">Issue Council</Term> does. Here is the
              whole process, in plain English, for new players and veterans alike.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">
          {/* Why this matters */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Why this matters right now
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Every big update brings a wave of frustration. A new build lands,
                something breaks, and the forums, Reddit, and Discord fill with
                reports of the same problem. Yet the developers sometimes say they
                cannot reproduce it on their own machines.
              </p>
              <p>
                Here is the gap. The people who fix bugs do not triage social
                media. They work from the{' '}
                <Term name="Issue Council">Issue Council</Term> — the official
                site built for exactly this. A bug with no clear report there is a
                bug they may never be able to find, let alone fix.{' '}
                <SourceLink {...OFFICIAL_SOURCES.usingIssueCouncil} />
              </p>
              <p>
                One good report, with steps anyone can follow, is worth more than
                a thousand angry posts. This guide turns your frustration into
                that one good report.
              </p>
            </div>
          </section>

          {/* What it is */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              What the Issue Council is
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The <Term name="Issue Council">Issue Council</Term> is a website
                run by the developers where players report bugs and help confirm
                each other&rsquo;s reports.{' '}
                <SourceLink {...OFFICIAL_SOURCES.issueCouncil} /> Think of it as a
                shared logbook of everything that is broken, with the evidence
                gathered in one place so the team can investigate.
              </p>
              <p>
                It is for bugs only. Ideas about balance, design, or new features
                belong on <Term name="Spectrum">Spectrum</Term>, the official Star
                Citizen forum. A report that does not describe a bug gets archived.{' '}
                <SourceLink {...OFFICIAL_SOURCES.usingIssueCouncil} />
              </p>
            </div>
          </section>

          {/* Who can use it */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Who can use it
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Only backers can sign in and contribute — anyone who has bought a
                Star Citizen package.{' '}
                <SourceLink {...OFFICIAL_SOURCES.usingIssueCouncil} /> You use the
                same <Term name="RSI">RSI</Term> account you log in to the game
                with. If you do not own the game yet, that is the one thing you
                need first.
              </p>
              <div className="rounded-2xl border border-gold/20 bg-gold/5 p-6">
                <p className="text-base text-starwhite/85">
                  New to all of this? Start with our{' '}
                  <Link
                    href="/day-one-citizen"
                    className="font-semibold text-gold hover:underline"
                  >
                    Day One Citizen guide
                  </Link>
                  . And if you use a{' '}
                  <Term name="Referral Code">referral code</Term> when you enlist,
                  you begin with fifty thousand bonus{' '}
                  <Term name="UEC">UEC</Term> in your account.
                </p>
              </div>
            </div>
          </section>

          {/* The steps */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              The four steps
            </h2>
            <p className="mt-3 text-base text-muted">
              Each step has its own short guide. Read them in order the first
              time, then keep them as a checklist.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {steps.map((step) => {
                const Icon = step.icon
                return (
                  <Link
                    key={step.slug}
                    href={`/report-a-bug/${step.slug}`}
                    className="card-surface group flex flex-col gap-3 rounded-xl border border-white/5 p-6 transition-all duration-200 hover:border-gold/40"
                  >
                    <Icon size={22} className="text-gold" aria-hidden />
                    <h3 className="font-display text-lg font-bold text-starwhite transition-colors group-hover:text-gold">
                      {step.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                      Open guide <ArrowRight size={14} aria-hidden />
                    </span>
                  </Link>
                )
              })}
            </div>
          </section>

          {/* Issue Council vs Spectrum */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Issue Council or Spectrum? Where it goes
            </h2>
            <p className="mt-3 text-base text-muted">
              The fastest way to get ignored is to post in the wrong place. This
              is the rule.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-navyLight text-starwhite">
                  <tr>
                    <th className="px-4 py-3 font-semibold">What you have</th>
                    <th className="px-4 py-3 font-semibold">Where it goes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-starwhite/85">
                  <tr>
                    <td className="px-4 py-3">
                      Something is broken (a crash, a missing item, a door that
                      will not open)
                    </td>
                    <td className="px-4 py-3 font-semibold text-gold">
                      Issue Council
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      A weapon feels too weak, or you want a new feature
                    </td>
                    <td className="px-4 py-3 font-semibold text-gold">Spectrum</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      You lost a ship or items and want them back
                    </td>
                    <td className="px-4 py-3 font-semibold text-gold">
                      An RSI support ticket
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted">
              Reporting a bug from the test build instead of the live game? The
              same rules apply, with a test-specific feedback channel.{' '}
              <SourceLink {...OFFICIAL_SOURCES.ptuFeedback} />
            </p>
          </section>

          {/* More help */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              More help and official sources
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
                  Official (RSI)
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-starwhite/85">
                  <li>
                    <SourceLink {...OFFICIAL_SOURCES.issueCouncil} />
                  </li>
                  <li>
                    <SourceLink
                      href={OFFICIAL_SOURCES.usingIssueCouncil.href}
                      label="Bug Reports: Using the Issue Council"
                    />
                  </li>
                  <li>
                    <SourceLink
                      href={OFFICIAL_SOURCES.searchingIssueCouncil.href}
                      label="Searching the Issue Council"
                    />
                  </li>
                  <li>
                    <SourceLink
                      href={OFFICIAL_SOURCES.sendInGameFiles.href}
                      label="Send In-Game Files for RSI Support"
                    />
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
                  Community (not official)
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-starwhite/85">
                  {COMMUNITY_SOURCES.map((s) => (
                    <li key={s.href}>
                      <SourceLink href={s.href} label={s.label} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8">
            <h2 className="heading-display text-2xl">
              You need to be a backer to help
            </h2>
            <p className="mt-3 text-base text-starwhite/85">
              Only backers can file reports on the{' '}
              <Term name="Issue Council">Issue Council</Term>. If you have not
              enlisted yet, use a <Term name="Referral Code">referral code</Term>{' '}
              at signup and start with fifty thousand bonus{' '}
              <Term name="UEC">UEC</Term> — then you can help shape the game too.
            </p>
            <div className="mt-6">
              <CTAButton size="lg" trackingLabel="report-a-bug-pillar-cta">
                Become a backer
              </CTAButton>
            </div>
          </div>

          <nav className="flex items-center justify-end border-t border-white/10 pt-8 text-sm">
            <Link
              href="/report-a-bug/gathering-evidence"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Start: gather your evidence <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
