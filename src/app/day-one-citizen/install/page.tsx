import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'

export const metadata: Metadata = {
  title: 'How to Install Star Citizen — Day One Citizen',
  description:
    'Download the RSI Launcher, install Star Citizen to an SSD, and get through shader compilation. Disk space requirements (150 GB+) and best install paths.',
  alternates: { canonical: '/day-one-citizen/install' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'How to Install Star Citizen',
    description:
      'Download the RSI Launcher, install Star Citizen to an SSD, survive shader compilation. Disk space requirements and step-by-step install guide.',
    url: '/day-one-citizen/install',
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
      name: 'How big is the Star Citizen download?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Around 100 GB for the game itself, downloaded through the RSI Launcher. Plan for 150 GB of free SSD space — the game uses extra scratch space beyond the install.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you install Star Citizen on a hard drive (HDD)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — install on an SSD. On a spinning hard drive the game is nearly unplayable because asset streaming is too slow. An NVMe SSD is the recommended option.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does the first launch of Star Citizen take so long?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The game pre-compiles shaders on first launch — a one-time build of the rendering pipeline for your hardware. It can take 20 to 60 minutes depending on your CPU and GPU, with a progress bar. Let it finish; it also reruns after major patches that change the rendering system.',
      },
    },
  ],
}

export default function InstallPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Day One Citizen', url: '/day-one-citizen' },
          { name: 'Installing the Game', url: '/day-one-citizen/install' },
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
            <p className="mt-5 font-mono text-xs text-gold">Section 06</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Installing the game
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              After you buy, you download a small installer that pulls down the{' '}
              <Term name="RSI">RSI</Term> Launcher. The Launcher then downloads the game itself —
              around 100 GB. Plan ahead and pick your install location carefully.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">

          <section>
            <p className="max-w-2xl text-base leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">The short version: download the
              RSI Launcher from your account Library, install it on an SSD, and
              let it pull down the game — around 100 GB.</strong>{' '}
              Keep 150 GB free for scratch space. The five steps below cover
              every prompt you will see along the way.
            </p>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Step 1 — Download the RSI Launcher installer</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Log into your account at <strong className="text-starwhite">robertsspaceindustries.com</strong>.
                Navigate to your <strong className="text-starwhite">Library</strong> (under your
                account menu in the top right). Star Citizen will appear here after purchase.
              </p>
              <p>
                Click the <strong className="text-starwhite">Download</strong> button next to
                Star Citizen. This downloads the RSI Launcher installer — a small Windows
                executable file around 20 MB. This file installs the Launcher itself, not
                the game.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Step 2 — Install the launcher</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Run the installer as you would any Windows application. You may see a User
                Account Control prompt — allow it. The installer sets up the RSI Launcher
                application, which is a small program that manages the game download, updates,
                and launch.
              </p>
              <p>
                The Launcher installs to{' '}
                <code className="rounded bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">
                  C:\Program Files\Roberts Space Industries\RSI Launcher
                </code>{' '}
                by default. This is fine — the Launcher itself is small. The game files are
                stored separately and you will choose their location in the next step.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Step 3 — Choose your install location (important)</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                When you open the RSI Launcher for the first time and start the game download,
                it will ask where to install Star Citizen. This is the most important decision
                in the install process.
              </p>
              <p>
                <strong className="text-starwhite">Requirements:</strong>
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-starwhite">Must be an SSD.</strong> A hard disk drive
                  (HDD) will make the game nearly unplayable — asset streaming is too slow on
                  spinning media. Do not install on an HDD.
                </li>
                <li>
                  <strong className="text-starwhite">Free space needed: 150 GB minimum.</strong>{' '}
                  The current install is around 100 GB. Leave an additional 50 GB buffer for
                  the scratch space the game uses during loading and patches.
                </li>
                <li>
                  <strong className="text-starwhite">Prefer a non-system drive.</strong> If you
                  have a second SSD or a large NVMe separate from your Windows C: drive, install
                  Star Citizen there. This keeps your OS drive from filling up and can improve
                  load times on some systems.
                </li>
              </ul>
              <p>
                To change the install path in the Launcher: click the{' '}
                <strong className="text-starwhite">Settings</strong> gear icon before you begin
                the download. There is a{' '}
                <strong className="text-starwhite">Library Folder</strong> option that lets you
                point to any drive.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Step 4 — The download</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Click <strong className="text-starwhite">INSTALL</strong> in the Launcher. The
                download begins. On a typical home broadband connection:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>100 Mbps connection: approximately 2–3 hours</li>
                <li>50 Mbps connection: approximately 4–5 hours</li>
                <li>25 Mbps connection: approximately 8–10 hours</li>
              </ul>
              <p>
                The download can be paused and resumed. You do not need to complete it in one
                session. The Launcher shows download progress and speed.
              </p>
              <p>
                Start this download the night before or well in advance of when you want to play.
                Nothing is more frustrating than buying a game and having to wait hours to touch it.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Step 5 — Firewall prompts</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                During the install and on first launch, Windows Firewall will ask whether to
                allow the RSI Launcher and Star Citizen access to the network. Allow both through
                on public and private networks. Star Citizen is an online-only game — it must
                communicate with <Term name="CIG">CIG</Term> servers to function.
              </p>
              <p>
                If you use third-party firewall or antivirus software, you may need to add
                exceptions manually for:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li><code className="rounded bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">RSI Launcher.exe</code></li>
                <li><code className="rounded bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">StarCitizen.exe</code></li>
              </ul>
              <p>
                Some antivirus programs flag Star Citizen files during download. This is a false
                positive — the game files are legitimate. Add an exclusion for the Star Citizen
                install folder in your antivirus settings if you see quarantine warnings.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">First launch: shader compilation</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                After the download completes, the first time you click{' '}
                <strong className="text-starwhite">LAUNCH</strong> in the Launcher, the game
                will pre-compile shaders before showing you anything. This is normal.
              </p>
              <p>
                Shader compilation can take 20–60 minutes depending on your GPU and CPU speeds.
                A progress bar will appear. The game is not frozen — it is doing a one-time
                build of the rendering pipeline for your hardware. This process also runs after
                major patches that change the rendering system.
              </p>
              <p>
                Let it finish. Do not force-close the game during shader compilation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">After installation: the Live, PTU, and EPTU builds</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The RSI Launcher can download multiple versions of the game — the stable
                release (<Term name="Live">Live</Term>), the public test environment (
                <Term name="PTU">PTU</Term>), and the early access test environment (
                <Term name="EPTU">EPTU</Term>). Each is a separate download. On a fresh install,
                only the <Term name="Live">Live</Term> version is downloaded.
              </p>
              <p>
                Play on <Term name="Live">Live</Term> for your first sessions. Full details on
                these environments are in{' '}
                <Link href="/day-one-citizen/rsi-launcher" className="text-gold underline-offset-4 hover:underline">
                  Section 07: Using the RSI Launcher
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  How big is the download?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Around 100 GB through the RSI Launcher. Keep 150 GB free on
                  your SSD — the game uses extra scratch space beyond the
                  install itself.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Can I install on a regular hard drive?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  No. On an HDD the game is nearly unplayable — asset streaming
                  is too slow on spinning media. Use an SSD; NVMe is best.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Why does the first launch take so long?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  The game pre-compiles shaders the first time you launch — a
                  one-time build for your hardware that can take 20–60 minutes,
                  with a progress bar. Let it finish. It reruns after major
                  patches that change the rendering system.
                </p>
              </div>
            </div>
          </section>

          <nav className="flex items-center justify-between border-t border-white/10 pt-8 text-sm">
            <Link
              href="/day-one-citizen/starter-package"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Starter package
            </Link>
            <Link
              href="/day-one-citizen/rsi-launcher"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Using the RSI Launcher <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
