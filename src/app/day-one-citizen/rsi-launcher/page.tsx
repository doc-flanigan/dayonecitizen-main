import type { Metadata } from 'next'
import Image from 'next/image'
import Link from '@/components/Link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { GuideProgress, DoThisNow } from '@/components/GuideProgress'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'RSI Launcher Guide — Live, PTU & EPTU',
  description:
    'How to use the RSI Launcher: Live vs PTU vs EPTU builds, switching channels, verifying game files, and fixing common Star Citizen launcher problems.',
  alternates: { canonical: '/day-one-citizen/rsi-launcher' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'RSI Launcher Guide: Live, PTU & EPTU Explained',
    description:
      'How to use the RSI Launcher — Live vs PTU vs EPTU, switching channels, verifying files, and fixing common issues.',
    url: '/day-one-citizen/rsi-launcher',
    type: 'article',
  },
}

// Article structured data so this page's own content, not just its FAQ, is
// recognized as an article.
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'RSI Launcher Guide: Live, PTU & EPTU Explained',
  description:
    'How to use the RSI Launcher — Live vs PTU vs EPTU, switching channels, verifying files, and fixing common issues.',
  author: { '@type': 'Person', name: SITE.author, url: `${SITE.url}/about` },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  mainEntityOfPage: `${SITE.url}/day-one-citizen/rsi-launcher`,
}

// FAQPage structured data — mirrors the visible "Common questions" section so
// this page can earn rich results and AI answer-engine citations.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between LIVE, PTU, and EPTU in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LIVE is the stable, publicly released version where most players are — the one new players should use. PTU (Public Test Universe) runs an upcoming update before release: progress is copied from LIVE but does not carry back, and bugs are expected. EPTU is the earliest, least stable test channel, limited to invited testers, and safe to ignore as a new player.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does playing on the PTU affect your LIVE progress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Your characters and progress are copied from LIVE to PTU at the start of a test wave, but nothing you do on PTU carries back to LIVE. PTU also installs as a separate copy of the game, so it never overwrites your LIVE installation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you verify game files in the RSI Launcher?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open the RSI Launcher, open Settings from the RSI drop-down, choose Games, and click VERIFY for the channel you play on (usually LIVE). The check automatically re-downloads any corrupted or missing files. Verify first whenever the game crashes repeatedly or breaks after an update.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does switching to PTU download the whole game again?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — each channel is a full separate installation. LIVE measures about 150 GB, and PTU is similar. Most players keep only LIVE installed and download PTU temporarily during major test phases.',
      },
    },
  ],
}

export default function RsiLauncherPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Day One Citizen', url: '/day-one-citizen' },
          { name: 'RSI Launcher', url: '/day-one-citizen/rsi-launcher' },
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
            <GuideProgress slug="rsi-launcher" />
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Using the RSI Launcher
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              The RSI Launcher is what you open every time you want to play. Understanding it —
              particularly the difference between <Term name="Live">Live</Term>,{' '}
              <Term name="PTU">PTU</Term>, and <Term name="EPTU">EPTU</Term> — will prevent
              confusion on day one.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">
          <DoThisNow slug="rsi-launcher" />

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">The launcher interface</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                When you open the RSI Launcher you will see:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">A large LAUNCH button</strong> — this
                  launches the game in whatever channel is currently selected.
                </li>
                <li>
                  <strong className="text-starwhite">A channel selector</strong> — usually in
                  the top area or a dropdown. This switches between{' '}
                  <Term name="Live">LIVE</Term>, <Term name="PTU">PTU</Term>, and{' '}
                  <Term name="EPTU">EPTU</Term>.
                </li>
                <li>
                  <strong className="text-starwhite">A patch notes section</strong> — shows what
                  changed in the latest update. Worth reading after a major patch to understand
                  what is new or fixed.
                </li>
                <li>
                  <strong className="text-starwhite">The RSI drop-down</strong> (top left) — opens
                  Settings, where you find the install location, the Verify button, and download limits.
                </li>
                <li>
                  <strong className="text-starwhite">A VERIFY button</strong> — found in
                  Settings, under Games. Checks all installed files against expected checksums
                  and re-downloads any corrupted or missing files.
                </li>
              </ul>
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/launcher/rsi-launcher-home-launch-ready.jpg"
                  alt="The RSI Launcher home screen with the game installed and the large LAUNCH GAME button ready, alongside the channel selector and patch notes area."
                  width={1051}
                  height={768}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  The RSI Launcher home screen with the game ready to launch.
                </figcaption>
              </figure>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              <Term name="Live">LIVE</Term> — the build you want on day one
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The <Term name="Live">LIVE</Term> channel is the stable, publicly released
                version of Star Citizen. It receives updates only after patches have been tested
                through the <Term name="PTU">PTU</Term> process. This is where the majority of
                the player population is at any given time.
              </p>
              <p>
                Play on <Term name="Live">LIVE</Term> for your first sessions. It is the most
                stable option, has the most players online, and your characters and progress here
                are separate from the test environments.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              <Term name="PTU">PTU</Term> — the public test universe
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The <Term name="PTU">Public Test Universe</Term> is a copy of the game running
                an upcoming update before it reaches <Term name="Live">LIVE</Term>. Access is by
                invitation, in waves, and the PTU is not always open. You copy your account to
                it from the RSI website first. <Term name="CIG">CIG</Term> only opens it when a
                release candidate is ready to test.
              </p>
              <p>
                Key differences from <Term name="Live">LIVE</Term>:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Your characters and progress are copied from{' '}
                  <Term name="Live">LIVE</Term> at the start of a test wave — but changes you
                  make on PTU do not carry back to <Term name="Live">LIVE</Term>.</li>
                <li>Bugs are more common. This is intentional — you are testing a patch.</li>
                <li>Fewer players are online.</li>
                <li><Term name="CIG">CIG</Term> may issue a{' '}
                  <Term name="Wipe">wipe</Term> of PTU characters at any time during testing.</li>
              </ul>
              <p>
                Selecting PTU in the Launcher downloads a separate copy of the game to your drive
                — it does not overwrite your <Term name="Live">LIVE</Term> installation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              <Term name="EPTU">EPTU</Term> — early public test
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The <Term name="EPTU">Early Public Test Universe</Term> is even earlier than
                PTU — it is where the most bleeding-edge builds go before broader PTU testing.
                Access is limited to invited testers, such as the Evocati, a
                small group of selected players who work under a non-disclosure agreement.
              </p>
              <p>
                As a new player, ignore <Term name="EPTU">EPTU</Term>. It is unstable by
                design and exists for catching early bugs before broader testing. Play on{' '}
                <Term name="Live">LIVE</Term>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">How to switch channels</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                In the Launcher, look for a dropdown near the LAUNCH button that shows the
                current channel (usually &ldquo;LIVE&rdquo;). Click it to see available options.
                If you switch to a channel you have not downloaded yet, the Launcher will
                prompt you to download it — this is a full additional copy of the game (another
                large download, roughly the size of LIVE).
              </p>
              <figure className="max-w-xs mx-auto overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/launcher/rsi-launcher-environment-dropdown-live-ptu.jpg"
                  alt="The RSI Launcher environment dropdown open, showing LIVE and PTU as selectable channels."
                  width={329}
                  height={354}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  The channel dropdown in the RSI Launcher — LIVE and PTU.
                </figcaption>
              </figure>
              <p>
                You can have multiple channels installed simultaneously if you have the storage
                space. Most players only keep <Term name="Live">LIVE</Term> installed and download
                PTU temporarily during test phases.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Verifying your game files</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                If the game crashes repeatedly, behaves strangely, or fails to load correctly,
                the first troubleshooting step is to verify your files:
              </p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Open the RSI Launcher</li>
                <li>Open Settings from the RSI drop-down, then choose Games</li>
                <li>Click <strong className="text-starwhite">VERIFY</strong> for the channel you play on (usually LIVE)</li>
                <li>Wait — this can take a while as it checks every file</li>
                <li>Any corrupted or missing files will be re-downloaded automatically</li>
              </ol>
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/launcher/rsi-launcher-settings-games-verify.jpg"
                  alt="The RSI Launcher settings screen on the Games section, showing the installed game with its Verify option for repairing game files."
                  width={1046}
                  height={1274}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  The Verify option in the RSI Launcher&rsquo;s settings, under Games.
                </figcaption>
              </figure>
              <p>
                Verify is the fix for a surprising number of issues. If the game was working
                and then suddenly is not after an update, verify first before deeper
                troubleshooting.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Launcher settings worth knowing</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">Library folder</strong> — where the game is
                  installed. Can be changed here if you need to move to a different drive.
                </li>
                <li>
                  <strong className="text-starwhite">Download limits</strong> — the Download
                  tab lets you cap your download speed or the number of downloads at once. The
                  defaults are unlimited speed and the maximum number of downloads.
                </li>
                <li>
                  <strong className="text-starwhite">Application</strong> — controls what happens
                  when you close the Launcher window. By default it keeps running in the background.
                </li>
              </ul>
              <figure className="max-w-xs mx-auto overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/launcher/rsi-launcher-menu.jpg"
                  alt="The RSI Launcher menu open, listing entries including Settings and Issue Council."
                  width={193}
                  height={357}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  The RSI Launcher menu — Settings lives here.
                </figcaption>
              </figure>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  LIVE vs PTU vs EPTU — which one do you play?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  <Term name="Live">LIVE</Term>. It is the stable release with
                  the most players. <Term name="PTU">PTU</Term> tests the next
                  patch; <Term name="EPTU">EPTU</Term> tests the patch before
                  it is even ready for PTU. Both are for bug hunting.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Does PTU touch your LIVE progress?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  No. Progress copies from LIVE into PTU at the start of a
                  test wave and never carries back. PTU installs as a separate
                  copy of the game.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Game misbehaving after an update?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Open Settings, choose Games, and click VERIFY. It
                  checks every file and re-downloads anything corrupted. It fixes a surprising number
                  of issues.
                </p>
              </div>
            </div>
          </section>

          <nav className="flex items-center justify-between border-t border-white/10 pt-8 text-sm">
            <Link
              href="/day-one-citizen/install"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Installing the game
            </Link>
            <Link
              href="/day-one-citizen/first-launch"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Launching for the first time <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
