import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Term from '@/components/Term'
import SourceLink from '@/components/SourceLink'
import ShotPlaceholder from '@/components/ShotPlaceholder'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import { OFFICIAL_SOURCES } from '@/data/report-a-bug-sources'

export const metadata: Metadata = {
  title: 'Star Citizen Bug Evidence: Game.log & DxDiag',
  description:
    'Find your Star Citizen build number, locate Game.log, save a DxDiag report, and capture a screenshot or video before filing a bug.',
  alternates: { canonical: '/report-a-bug/gathering-evidence' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Gathering Evidence for a Star Citizen Bug Report',
    description:
      'Find your build number, Game.log, and DxDiag report, and capture a screenshot or video — the five-minute prep that makes a bug report developers can act on.',
    url: '/report-a-bug/gathering-evidence',
    type: 'article',
  },
}

export default function GatheringEvidencePage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', url: '/' },
            { name: 'Report a Bug', url: '/report-a-bug' },
            {
              name: 'Gathering Evidence',
              url: '/report-a-bug/gathering-evidence',
            },
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
            <p className="mt-5 font-mono text-xs text-gold">Step 1 of 4</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Gather your evidence
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              Before you write a single word of your report, collect four things.
              It takes about five minutes, and it is the difference between a bug
              that gets fixed and one that gets closed for lack of detail.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">
          {/* Build number */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              1. Find your <Term name="build number">build number</Term>
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The <Term name="build number">build number</Term> tells developers
                the exact copy of the game you were running. Without it, they may
                test the wrong version and never see your bug.
              </p>
              <p>
                Open the <Term name="RSI">RSI</Term> Launcher. The version is shown
                under the big Launch Game button. Write it down, or keep the
                Launcher open so you can copy it later.{' '}
                <SourceLink {...OFFICIAL_SOURCES.sendInGameFiles} />
              </p>
              <ShotPlaceholder
                file="01-launcher-build-number.png"
                caption="The RSI Launcher with the version number under the Launch Game button"
                annotate="circle the build number; caption 'write this down'"
              />
            </div>
          </section>

          {/* Game.log */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              2. Find your <Term name="Game.log">Game.log</Term> file
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The <Term name="Game.log">Game.log</Term> is a text file the game
                writes while you play. It records what loaded, what you did, and
                any errors. It is one of the most useful things you can attach.{' '}
                <SourceLink {...OFFICIAL_SOURCES.sendInGameFiles} />
              </p>
              <p>You will find it in your install folder. The default path is:</p>
              <p className="overflow-x-auto rounded-lg border border-white/10 bg-navyLight px-4 py-3 font-mono text-sm text-gold">
                ...\Roberts Space Industries\StarCitizen\LIVE\Game.log
              </p>
              <p>
                Replace <span className="font-mono text-sm">LIVE</span> with{' '}
                <span className="font-mono text-sm">PTU</span> if your bug happened
                on the test build. Copy the file somewhere easy to find, like your
                Desktop, so you can attach it later.
              </p>
              <ShotPlaceholder
                file="02-game-folder-path.png"
                caption="File Explorer open at the StarCitizen LIVE folder with Game.log selected"
                annotate="highlight the address bar and the Game.log file"
              />
              <p>
                The game keeps backups of recent logs too. They are named by build
                number and date, so an older one may match the session your bug
                happened in.
              </p>
              <ShotPlaceholder
                file="03-game-log-backups.png"
                caption="The folder showing backup logs named by build number and date"
                annotate="arrow to the build-number/date naming pattern"
              />
            </div>
          </section>

          {/* DxDiag */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              3. Save a <Term name="DxDiag">DxDiag</Term> report
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                A <Term name="DxDiag">DxDiag</Term> report lists your computer&rsquo;s
                parts and drivers. Some bugs only happen on certain hardware, so
                developers ask for this. It is a required part of a full report.{' '}
                <SourceLink {...OFFICIAL_SOURCES.sendInGameFiles} />
              </p>
              <ol className="list-decimal space-y-4 pl-6">
                <li>
                  Press the Windows key and{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">
                    R
                  </kbd>{' '}
                  together to open the Run box.
                </li>
                <li>
                  Type{' '}
                  <span className="font-mono text-sm text-gold">dxdiag</span> and
                  select OK.
                </li>
                <li>
                  Wait for the bar at the bottom to fill. This takes a few seconds.
                </li>
                <li>
                  Select{' '}
                  <strong className="text-starwhite">Save All Information</strong>{' '}
                  and save the file somewhere easy, like your Desktop.
                </li>
              </ol>
              <ShotPlaceholder
                file="04-run-dxdiag.png"
                caption="The Windows Run box with dxdiag typed in"
                annotate="circle the OK button"
              />
              <ShotPlaceholder
                file="05-dxdiag-saveall.png"
                caption="The DirectX Diagnostic Tool with the Save All Information button"
                annotate="circle Save All Information"
              />
              <ShotPlaceholder
                file="06-dxdiag-saved.png"
                caption="The saved DxDiag text file on the Desktop"
                annotate="caption 'you'll attach this file'"
              />
            </div>
          </section>

          {/* Screenshot / video */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              4. Capture a screenshot or short video
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                A picture shows what words cannot. A screenshot or a short clip of
                the bug gives developers context they can trust.{' '}
                <SourceLink {...OFFICIAL_SOURCES.usingIssueCouncil} />
              </p>
              <p>
                For a still image, the Windows shortcut{' '}
                <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">
                  Win
                </kbd>{' '}
                +{' '}
                <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">
                  PrtScn
                </kbd>{' '}
                saves a screenshot to your Pictures folder. Aim to show the bug and
                enough of the scene around it to make the location clear.
              </p>
              <ShotPlaceholder
                file="07-screenshot-example.png"
                caption="A good evidence screenshot: the bug clearly visible with its surroundings"
                annotate="caption what makes this a good shot"
              />
              <p>
                For anything involving movement or timing, a video is better. The
                built-in Windows Game Bar (
                <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">
                  Win
                </kbd>{' '}
                +{' '}
                <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">
                  G
                </kbd>
                ) can record a short clip. Upload it somewhere public and link it
                in your report.
              </p>
              <ShotPlaceholder
                file="08-evidence-video-frame.png"
                caption="A single frame from a short clip of the bug in motion"
                annotate="caption 'video beats a still for movement bugs'"
              />
            </div>
          </section>

          {/* Checklist */}
          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8">
            <h2 className="heading-display text-2xl">Your evidence checklist</h2>
            <ul className="mt-4 space-y-2 text-base text-starwhite/85">
              <li>&#10003; Build number, written down or copied</li>
              <li>&#10003; Game.log file, saved somewhere easy to find</li>
              <li>&#10003; DxDiag report, saved as a text file</li>
              <li>&#10003; A screenshot or short video of the bug</li>
            </ul>
            <p className="mt-4 text-base text-starwhite/85">
              Have all four? You are ready to search the Issue Council and make
              sure no one has reported it already.
            </p>
          </div>

          <nav className="flex items-center justify-between border-t border-white/10 pt-8 text-sm">
            <Link
              href="/report-a-bug"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Overview
            </Link>
            <Link
              href="/report-a-bug/searching-the-council"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Next: search the council <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
