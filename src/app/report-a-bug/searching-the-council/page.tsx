import type { Metadata } from 'next'
import Image from 'next/image'
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
  title: 'Search the Issue Council Before Reporting',
  description:
    'How to sign in to the Star Citizen Issue Council, search for your bug, filter by status, and add to an existing report instead of creating a duplicate.',
  alternates: { canonical: '/report-a-bug/searching-the-council' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Searching the Star Citizen Issue Council',
    description:
      'Sign in, search for your bug, filter by status, and contribute to an existing report instead of making a duplicate — the step most people skip.',
    url: '/report-a-bug/searching-the-council',
    type: 'article',
  },
}

export default function SearchingTheCouncilPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', url: '/' },
            { name: 'Report a Bug', url: '/report-a-bug' },
            {
              name: 'Searching the Council',
              url: '/report-a-bug/searching-the-council',
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
            <p className="mt-5 font-mono text-xs text-gold">Step 2 of 4</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Search before you file
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              This is the step most people skip, and it is the one developers care
              about most. If your bug is already reported, adding to that report is
              far more useful than starting a new one.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">
          {/* Why search */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Why duplicates hurt
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                When ten people file ten separate reports for the same bug, the
                evidence is scattered across all ten. Developers cannot see the
                full picture in any one of them.
              </p>
              <p>
                When those ten people add to one report instead, it gathers ten
                sets of evidence, ten confirmations, and rises up the queue. The{' '}
                <Term name="Issue Council">Issue Council</Term> asks you to search
                first for exactly this reason.{' '}
                <SourceLink {...OFFICIAL_SOURCES.searchingIssueCouncil} />
              </p>
            </div>
          </section>

          {/* Sign in */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">1. Sign in</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Go to the <Term name="Issue Council">Issue Council</Term> site and
                select Sign In at the top right. It sends you to the main{' '}
                <Term name="RSI">RSI</Term> site to log in, then brings you back.{' '}
                <SourceLink {...OFFICIAL_SOURCES.usingIssueCouncil} /> Remember,
                only backers can sign in and contribute.
              </p>
              <ShotPlaceholder
                file="09-signin-redirect.png"
                caption="The RSI account sign-in page reached from the Issue Council"
                annotate="blur your email address"
              />
              <p>
                Once you are in, you will see the projects you can report on, such
                as Star Citizen. Choose the one your bug belongs to.
              </p>
              <ShotPlaceholder
                file="10-ic-logged-in.png"
                caption="The Issue Council home once signed in, showing the project tiles"
                annotate="circle the project you will report in"
              />
            </div>
          </section>

          {/* Search */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              2. Search for your bug
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Use the search box and a few plain keywords that describe the
                problem. Try the name of the place, ship, or screen where it
                happened, plus what went wrong.
              </p>
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/report-a-bug/issue-council-project-search.jpg"
                  alt="An Issue Council project page with the search bar at the top, pinned confirmed issues, and the list of recently opened reports below."
                  width={1195}
                  height={1262}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  The project page — search here first, and scan the pinned confirmed issues.
                </figcaption>
              </figure>
              <p>
                Read the results carefully. Try a second search with different
                words before you decide your bug is not there. Wording varies, so
                the same bug may be filed under terms you did not think of.{' '}
                <SourceLink {...OFFICIAL_SOURCES.searchingIssueCouncil} />
              </p>
              <ShotPlaceholder
                file="12-search-results.png"
                caption="A list of search results on the Issue Council"
                annotate="caption 'scan for your bug before filing a new one'"
              />
            </div>
          </section>

          {/* Filter + contribute */}
          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              3. Filter by status, then contribute
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                You can filter reports by status. When you are looking for a report
                to add to, the useful ones are Open, Confirmed, and Under
                Investigation — these are still active.{' '}
                <SourceLink {...OFFICIAL_SOURCES.searchingIssueCouncil} />
              </p>
              <ShotPlaceholder
                file="13-status-filter.png"
                caption="The status filter open, showing Open, Confirmed, and Under Investigation"
                annotate="circle the status filter control"
              />
              <p>
                Found your bug? Open the report and add your contribution. Confirm
                that you can reproduce it, add a comment with any detail the report
                is missing, and attach your own evidence.
              </p>
              <ShotPlaceholder
                file="14-existing-report-contribute.png"
                caption="An existing report with the 'I can reproduce this' control"
                annotate="circle the contribute control; caption 'add to this instead of duplicating'"
              />
            </div>
          </section>

          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8">
            <h2 className="heading-display text-2xl">
              Already reported? You are done.
            </h2>
            <p className="mt-3 text-base text-starwhite/85">
              If you added your evidence to an existing report, that is a complete
              contribution. Only if the bug is genuinely not there do you move on
              to filing a new report.
            </p>
          </div>

          <nav className="flex items-center justify-between border-t border-white/10 pt-8 text-sm">
            <Link
              href="/report-a-bug/gathering-evidence"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Gather evidence
            </Link>
            <Link
              href="/report-a-bug/filing-a-report"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Next: file the report <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
