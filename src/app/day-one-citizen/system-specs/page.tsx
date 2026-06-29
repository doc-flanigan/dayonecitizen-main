import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'Star Citizen System Requirements 2026',
  description:
    'Star Citizen system requirements for 2026: minimum and recommended PC specs (CPU, RAM, GPU, SSD) plus the three hardware mistakes that hurt new-player performance.',
  alternates: { canonical: '/day-one-citizen/system-specs' },
  openGraph: {
    title: 'Star Citizen System Requirements 2026',
    description:
      'Minimum and recommended PC specs for Star Citizen, and the hardware traps that kill performance for new players.',
    url: '/day-one-citizen/system-specs',
    type: 'article',
  },
}

function SpecRow({ label, min, rec }: { label: string; min: string; rec: string }) {
  return (
    <tr className="border-t border-white/5">
      <td className="py-3 pr-6 text-sm font-semibold text-gold">{label}</td>
      <td className="py-3 pr-6 text-sm text-starwhite/80">{min}</td>
      <td className="py-3 text-sm text-starwhite/80">{rec}</td>
    </tr>
  )
}

export default function SystemSpecsPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Day One Citizen', url: '/day-one-citizen' },
          { name: 'System Requirements', url: '/day-one-citizen/system-specs' },
        ]} />
        <ArticleJsonLd
          headline="Star Citizen System Requirements 2026"
          description="Star Citizen system requirements for 2026: minimum and recommended PC specs (CPU, RAM, GPU, SSD) plus the three hardware mistakes that hurt new-player performance."
          path="/day-one-citizen/system-specs"
          section="Day One Citizen"
        />
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-12 pt-32 sm:pt-40">
          <div className="container-narrow">
            <Link
              href="/day-one-citizen"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-gold"
            >
              <ArrowLeft size={12} aria-hidden /> Day One Citizen
            </Link>
            <p className="mt-5 font-mono text-xs text-gold">Section 02</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              System specs and hardware
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              Star Citizen is one of the most demanding PC games ever built. Knowing the real
              requirements — not just the official minimums — will save you frustration on day one.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Official specs at a glance</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-white/5">
              <table className="w-full">
                <thead className="bg-navyLight/60 text-left text-xs uppercase tracking-wider text-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Component</th>
                    <th className="px-4 py-3 font-semibold">Minimum</th>
                    <th className="px-4 py-3 font-semibold">Recommended</th>
                  </tr>
                </thead>
                <tbody className="px-4">
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3 text-sm font-semibold text-gold">OS</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">Windows 10 64-bit</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">Windows 10/11 64-bit</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3 text-sm font-semibold text-gold">CPU</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">Intel i5-8600K / AMD Ryzen 5 2600X</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">Intel i7-8700K / AMD Ryzen 7 3700X</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3 text-sm font-semibold text-gold">RAM</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">16 GB</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">32 GB</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3 text-sm font-semibold text-gold">GPU</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">GTX 1060 6 GB / RX 580 8 GB</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">RTX 3070 / RX 6700 XT</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3 text-sm font-semibold text-gold">VRAM</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">6 GB</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">8 GB+</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3 text-sm font-semibold text-gold">Storage</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">SSD (100 GB free)</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">NVMe SSD (150 GB free)</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3 text-sm font-semibold text-gold">Network</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">Broadband</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">Broadband, low latency</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">The three real bottlenecks</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The official minimums tell you the floor. These three components determine whether
                your experience is smooth or miserable:
              </p>

              <h3 className="mt-8 text-xl font-bold text-starwhite">1. RAM — go to 32 GB if you can</h3>
              <p>
                Star Citizen streams an enormous amount of world data while you play — terrain,
                buildings, ships, NPCs, physics. 16 GB is technically functional, but you will
                hit memory pressure in cities like{' '}
                <Term name="Lorville">Lorville</Term> and{' '}
                <Term name="Area18">Area18</Term> where the environment is dense. 32 GB makes
                a noticeable difference in stability and frame pacing. If you are on 16 GB and
                cannot upgrade, lower your texture quality to medium to reduce VRAM/RAM pressure.
              </p>

              <h3 className="mt-8 text-xl font-bold text-starwhite">2. Storage — SSD is not optional</h3>
              <p>
                A hard disk drive (HDD) is completely unplayable in Star Citizen. The game
                continuously loads and unloads assets as you move through the world. An HDD
                cannot keep pace, resulting in missing geometry, invisible ships, and persistent
                stuttering. A standard SATA SSD works. An NVMe SSD is meaningfully faster —
                particularly during shader compilation and initial load times. The game currently
                installs to around 100 GB, growing with each major patch. Allocate at least
                150 GB of free space.
              </p>

              <h3 className="mt-8 text-xl font-bold text-starwhite">3. VRAM — 8 GB is the working minimum</h3>
              <p>
                A 6 GB GPU will run the game at lower settings, but you will encounter texture
                pop-in and reduced quality in dense areas. 8 GB lets you run medium-high settings
                comfortably. 12 GB or more allows high settings in all environments, including
                the most demanding cities and space stations.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">CPU and network considerations</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Star Citizen is unusual in that it performs significant CPU work related to
                <Term name="Server Meshing">server meshing</Term> — the technology that divides
                the game world across multiple servers. A modern CPU with strong single-thread
                performance (Intel 10th gen+ or AMD Ryzen 5000+) will give you noticeably better
                frame rates than the official minimum suggests.
              </p>
              <p>
                Network latency matters more than raw bandwidth. A stable 50 Mbps connection
                with low ping to the datacenter your server is hosted in will perform better
                than a 1 Gbps connection with high jitter. The primary{' '}
                <Term name="CIG">CIG</Term> datacenters are in the US East, EU West, and
                Asia-Pacific. The game defaults to the lowest-latency region automatically.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Settings to start with on day one</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Resist maxing every graphics setting immediately. Start here and adjust up:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">Overall quality:</strong> Medium. This
                  establishes a stable baseline.
                </li>
                <li>
                  <strong className="text-starwhite">Texture quality:</strong> High (if you have
                  8 GB+ VRAM), Medium otherwise.
                </li>
                <li>
                  <strong className="text-starwhite">Shadows:</strong> Medium. High shadows are
                  one of the heaviest GPU costs.
                </li>
                <li>
                  <strong className="text-starwhite">Field of view:</strong> Personal preference,
                  but 90–100 is common.
                </li>
                <li>
                  <strong className="text-starwhite">Motion blur:</strong> Off. Most players
                  disable this immediately.
                </li>
                <li>
                  <strong className="text-starwhite">VSync:</strong> Off if you have a high
                  refresh-rate monitor; consider frame cap instead.
                </li>
              </ul>
              <p>
                After your first few sessions, bump individual settings up one notch at a time
                and note whether frame rate stays comfortable. The{' '}
                <Term name="Roadmap">roadmap</Term> includes ongoing rendering and performance
                improvements with each major release.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Hardware traps to avoid</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">Installing on an HDD</strong> — covered
                  above. Do not do it. The game will be nearly unplayable.
                </li>
                <li>
                  <strong className="text-starwhite">Running on 8 GB of RAM</strong> — the
                  absolute floor before the game becomes crashy in populated areas. 16 GB is the
                  real minimum; 32 GB is the comfortable minimum.
                </li>
                <li>
                  <strong className="text-starwhite">Ignoring thermal throttling</strong> —
                  Star Citizen runs your CPU and GPU at high utilization for extended sessions.
                  If your system is not well-cooled, you will thermal throttle and see sudden
                  performance drops. Check your CPU temperatures in the first session.
                </li>
                <li>
                  <strong className="text-starwhite">Playing on Wi-Fi</strong> — a wired ethernet
                  connection is strongly preferred. Wi-Fi packet loss causes server disconnects
                  (<Term name="30k">30k errors</Term>) and erratic ship behavior, especially
                  during <Term name="Quantum Travel">quantum travel</Term>.
                </li>
              </ul>
            </div>
          </section>

          <nav className="flex items-center justify-between border-t border-white/10 pt-8 text-sm">
            <Link
              href="/day-one-citizen/worth-buying"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Is it worth buying?
            </Link>
            <Link
              href="/day-one-citizen/buying-the-game"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              How to buy the game <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
