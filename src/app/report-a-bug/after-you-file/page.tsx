import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import SourceLink from '@/components/SourceLink'
import ShotPlaceholder from '@/components/ShotPlaceholder'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import { OFFICIAL_SOURCES } from '@/data/report-a-bug-sources'

export const metadata: Metadata = {
  title: 'Issue Council Statuses & Voting Explained',
  description:
    'What Open, Confirmed, Under Investigation, and Acknowledged mean on the Issue Council — and how community confirmations move a report.',
  alternates: { canonical: '/report-a-bug/after-you-file' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'After You File a Star Citizen Bug Report',
    description:
      'The Issue Council status lifecycle explained — Open, Confirmed, Under Investigation, Acknowledged — and how your confirmations push reports toward a fix.',
    url: '/report-a-bug/after-you-file',
    type: 'article',
  },
}

const statuses = [
  {
    name: 'Open',
    file: '22-status-open.png',
    text: 'The report is live and anyone can contribute. Add your own confirmation here to help it grow.',
  },
  {
    name: 'Confirmed',
    file: '23-status-confirmed.png',
    text: 'Enough players have reproduced it — about ten — so the council marks it Confirmed. This is the milestone you are aiming for.',
  },
  {
    name: 'Under Investigation',
    file: '24-status-investigation.png',
    text: 'Developers are actively looking into it. You can still contribute useful detail.',
  },
  {
    name: 'Acknowledged',
    file: '25-status-acknowledged.png',
    text: 'The issue has been copied into the internal tracker, JIRA, as a ticket for a team to work on.',
  },
]

export default function AfterYouFilePage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', url: '/' },
            { name: 'Report a Bug', url: '/report-a-bug' },
            { name: 'After You File', url: '/report-a-bug/after-you-file' },
          ]}
        />
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-12 pt-32 sm:pt-40">
          <div className="container-narrow">
            <Link
              href="/report-a-bug"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-gold"
            >
              <ArrowLeft size={12} aria-hidden /> Report a Bug
            </Link>
            <p className="mt-5 font-mono text-xs text-gold">Step 4 of 4</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              After you file
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              A report is not the end. It moves through a series of stages, and the
              community helps push it along. Here is what each stage means and how
              you keep helping.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">
          {/* The lifecycle */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              The life of a report
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Every report moves through the same path, from newly filed to
                picked up by an internal team. Knowing the stages tells you where a
                report stands and whether it still needs your help.{' '}
                <SourceLink {...OFFICIAL_SOURCES.searchingIssueCouncil} />
              </p>
            </div>
            <div className="mt-6 space-y-5">
              {statuses.map((s, i) => (
                <div
                  key={s.name}
                  className="rounded-xl border border-white/10 bg-navyLight/40 p-6"
                >
                  <p className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted">{i + 1}</span>
                    <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-sm font-semibold text-gold">
                      {s.name}
                    </span>
                  </p>
                  <p className="mt-3 text-base text-starwhite/85">{s.text}</p>
                  <ShotPlaceholder
                    file={s.file}
                    caption={`A report showing the ${s.name} status badge`}
                    annotate={`circle the ${s.name} badge`}
                  />
                </div>
              ))}
            </div>
            <ShotPlaceholder
              file="27-lifecycle-diagram.png"
              caption="The status flow: Open, Confirmed, Under Investigation, Acknowledged"
              annotate="optional: a simple left-to-right arrow diagram"
            />
          </section>

          {/* Why confirmations matter */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              How confirmations move a report
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The single most useful thing you can do is confirm bugs you also
                see. When you open a report and add that you can reproduce it, you
                add weight to it.
              </p>
              <p>
                Around ten confirmations move a report to Confirmed, the stage that
                tells developers many people are affected.{' '}
                <SourceLink {...OFFICIAL_SOURCES.searchingIssueCouncil} /> So even
                if you never file a single report, confirming others is real help.
              </p>
              <ShotPlaceholder
                file="26-add-reproduction.png"
                caption="The contribute control on another player's report"
                annotate="caption 'ten reproductions move a report to Confirmed'"
              />
            </div>
          </section>

          {/* Etiquette */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Be a good citizen of the council
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  Keep one report to one bug. Do not stack unrelated problems into
                  a single report.
                </li>
                <li>
                  Stick to facts. Steps, evidence, and what you saw — not opinions
                  about the developers.
                </li>
                <li>
                  Add only new detail when you contribute. Repeating what is
                  already there does not help.
                </li>
                <li>
                  Keep design opinions on <Term name="Spectrum">Spectrum</Term>.
                  The council is for bugs, and off-topic reports get archived.{' '}
                  <SourceLink {...OFFICIAL_SOURCES.usingIssueCouncil} />
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8">
            <h2 className="heading-display text-2xl">
              That is the whole process
            </h2>
            <p className="mt-3 text-base text-starwhite/85">
              Gather evidence, search first, file a clear report, and help confirm
              others. Do that and you are part of how Star Citizen actually gets
              better.
            </p>
            <p className="mt-4 text-base text-starwhite/85">
              Not a backer yet? You need an account to take part. Use a{' '}
              <Term name="Referral Code">referral code</Term> at signup and begin
              with fifty thousand bonus <Term name="UEC">UEC</Term>.
            </p>
            <div className="mt-6">
              <CTAButton size="lg" trackingLabel="after-you-file-cta">
                Become a backer
              </CTAButton>
            </div>
          </div>

          <nav className="flex items-center justify-between border-t border-white/10 pt-8 text-sm">
            <Link
              href="/report-a-bug/filing-a-report"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> File the report
            </Link>
            <Link
              href="/report-a-bug"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Back to overview <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
