import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Term from '@/components/Term'
import SourceLink from '@/components/SourceLink'
import ShotPlaceholder from '@/components/ShotPlaceholder'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import { OFFICIAL_SOURCES } from '@/data/report-a-bug-sources'

export const metadata: Metadata = {
  title: 'File a Star Citizen Bug Report, Step by Step',
  description:
    'Choose the right project, version, and channel, write a searchable title and clear reproduction steps, and attach evidence.',
  alternates: { canonical: '/report-a-bug/filing-a-report' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Filing a Star Citizen Bug Report',
    description:
      'Project, version, channel, title, reproduction steps, evidence — the complete walkthrough of filing a report the developers can reproduce.',
    url: '/report-a-bug/filing-a-report',
    type: 'article',
  },
}

export default function FilingAReportPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', url: '/' },
            { name: 'Report a Bug', url: '/report-a-bug' },
            { name: 'Filing a Report', url: '/report-a-bug/filing-a-report' },
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
            <p className="mt-5 font-mono text-xs text-gold">Step 3 of 4</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              File the report
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              Your bug is not in the council yet, and you have your evidence ready.
              Now you write the report. Take your time here — this is the part that
              gets a bug fixed.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">
          {/* Start a report */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              1. Start a new report
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                From the project page, select the button to create a new report.
                You will see a form with a few fields. We will go through each one.
              </p>
              <ShotPlaceholder
                file="15-create-report-button.png"
                caption="The Create New Report button on the Issue Council"
                annotate="circle the Create / New Report button"
              />
            </div>
          </section>

          {/* Project / version / channel */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              2. Set the version and channel
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Pick the correct game version using your{' '}
                <Term name="build number">build number</Term>, and the channel you
                were on. The channel is whether you were on the{' '}
                <Term name="Live">live</Term> game or the test build, the{' '}
                <Term name="PTU">PTU</Term>. This tells developers where to look.{' '}
                <SourceLink {...OFFICIAL_SOURCES.usingIssueCouncil} />
              </p>
              <ShotPlaceholder
                file="16-form-project-version-channel.png"
                caption="The report form showing the project, game version, and channel selectors"
                annotate="number the project (1), version (2), and channel (3)"
              />
            </div>
          </section>

          {/* Title */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              3. Write a searchable title
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Other players find your report by its title when they search. A
                vague title hides your bug; a clear one helps others find and
                confirm it.{' '}
                <SourceLink {...OFFICIAL_SOURCES.usingIssueCouncil} />
              </p>
              <ShotPlaceholder
                file="17-title-field.png"
                caption="The Issue Title field with a clear, searchable example typed in"
                annotate="show a strong title"
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-red-400/30 bg-red-400/5 p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-red-300">
                    <X size={16} aria-hidden /> Too vague
                  </p>
                  <p className="mt-2 text-sm text-starwhite/85">
                    &ldquo;Game broken please fix&rdquo;
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
                    <Check size={16} aria-hidden /> Clear and searchable
                  </p>
                  <p className="mt-2 text-sm text-starwhite/85">
                    &ldquo;Elevator at New Babbage spaceport does not arrive when
                    called&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Repro steps */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              4. Write clear{' '}
              <Term name="reproduction steps">reproduction steps</Term>
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                This is the heart of the report.{' '}
                <Term name="reproduction steps">Reproduction steps</Term> are the
                exact actions that make the bug happen, as a short numbered list.
                Include where you were and what you were doing, so a developer can
                follow along.{' '}
                <SourceLink {...OFFICIAL_SOURCES.usingIssueCouncil} />
              </p>
              <p>A clear set of steps looks like this:</p>
              <ol className="list-decimal space-y-2 rounded-xl border border-white/10 bg-navyLight/50 p-6 pl-10">
                <li>Spawn your ship at New Babbage and take the elevator down.</li>
                <li>Walk to the transit hub and call the elevator to platform two.</li>
                <li>Wait by the doors for thirty seconds.</li>
                <li>The elevator never arrives and the call light stays on.</li>
              </ol>
              <ShotPlaceholder
                file="18-repro-steps.png"
                caption="The reproduction-steps field filled with a clean numbered list"
                annotate="this is the most important shot in the guide"
              />
            </div>
          </section>

          {/* Attach evidence */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              5. Attach your evidence and add detail
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Add the screenshot or video, your{' '}
                <Term name="DxDiag">DxDiag</Term> report, and your{' '}
                <Term name="Game.log">Game.log</Term> if the form accepts it.
                Evidence gives context that text alone cannot.{' '}
                <SourceLink {...OFFICIAL_SOURCES.usingIssueCouncil} />
              </p>
              <ShotPlaceholder
                file="19-attach-evidence.png"
                caption="The attachment area with a screenshot, DxDiag, and log being added"
                annotate="circle the upload control"
              />
              <p>
                Use the More info field to add anything else useful — how often it
                happens, whether it happens for friends too, and anything you tried
                that changed it.{' '}
                <SourceLink {...OFFICIAL_SOURCES.usingIssueCouncil} /> Then submit.
              </p>
              <ShotPlaceholder
                file="20-more-info-submit.png"
                caption="The More info field and the Submit button"
                annotate="circle the Submit button"
              />
              <ShotPlaceholder
                file="21-report-created.png"
                caption="The freshly created report page confirming it was submitted"
                annotate="caption 'done — now help it get confirmed'"
              />
            </div>
          </section>

          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8">
            <h2 className="heading-display text-2xl">That is a real report</h2>
            <p className="mt-3 text-base text-starwhite/85">
              A clear title, the right version and channel, steps anyone can
              follow, and solid evidence. That is the kind of report a developer
              can pick up and act on. Next, learn what happens to it.
            </p>
          </div>

          <nav className="flex items-center justify-between border-t border-white/10 pt-8 text-sm">
            <Link
              href="/report-a-bug/searching-the-council"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Search the council
            </Link>
            <Link
              href="/report-a-bug/after-you-file"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Next: after you file <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
