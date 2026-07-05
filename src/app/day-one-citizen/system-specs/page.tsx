import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import PageSources from '@/components/PageSources'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'

export const metadata: Metadata = {
  title: 'Star Citizen System Requirements 2026 — Full PC Specs',
  description:
    'Star Citizen minimum and recommended PC specs for 2026 — CPU, GPU, RAM, VRAM, storage, and the NVMe SSD you really need, plus what performance to expect.',
  alternates: { canonical: '/day-one-citizen/system-specs' },
  openGraph: {
    title: 'Star Citizen System Requirements 2026 — Full PC Specs',
    description:
      'Minimum and recommended PC specs for Star Citizen in 2026, what they mean in practice, and the hardware traps that kill performance for new players.',
    url: '/day-one-citizen/system-specs',
    type: 'article',
  },
}

// FAQPage structured data — mirrors the "Will it run?" questions below so this
// page can earn rich results and AI answer-engine citations for spec queries.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the minimum system requirements for Star Citizen in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The official minimum requirements for Star Citizen are: Windows 10 or 11 (64-bit), a quad-core CPU with AVX/AVX2/FMA3 support (Intel i7 Haswell 4th gen or later, AMD Ryzen 5 equivalent), 16 GB RAM, a GPU with 4 GB VRAM and Vulkan 1.2 support (GTX 1060 / RX 580 range), an SSD with 100 GB+ free space, and a broadband internet connection. An NVMe SSD is strongly recommended even though not listed as a hard requirement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the recommended system requirements for Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a smooth Star Citizen experience in 2026, the recommended specs are: Windows 10 or 11 (64-bit), Intel Core i7-12700K or AMD Ryzen 7 5800X3D CPU, NVIDIA RTX 3080 or AMD RX 6800 XT GPU with 8+ GB VRAM, 32 GB RAM, and a PCIe NVMe SSD. These specs deliver 60+ FPS in most situations at medium-high graphics settings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I run Star Citizen on a laptop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but it depends on the laptop. A gaming laptop with a dedicated GPU (RTX 3060 or better), 32 GB RAM, and an NVMe SSD can deliver a playable experience. Integrated-only graphics will not run the game at any usable frame rate. Thermal throttling on undercooled laptops is a common issue during extended play sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is an SSD required for Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An SSD is not technically required but is effectively essential. Star Citizen streams world data in real time as you move through the game. On an HDD, loading into a city can take 5–10 minutes and world streaming stutters severely. A SATA SSD is acceptable; an NVMe SSD provides the best experience with fast, smooth loading.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Star Citizen support DLSS or FSR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Star Citizen supports NVIDIA DLSS (RTX cards), AMD FSR (all GPUs), and Intel XeSS, accessible through the in-game video settings. Using Quality or Balanced mode in DLSS or FSR is one of the most effective ways to gain 25–40% more performance on mid-range hardware.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is Star Citizen so demanding on PC hardware?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Star Citizen renders a contiguous universe with no loading screens between space and planetary surfaces, runs detailed physics simulations on all objects, manages always-online network state for other players, and is still in Alpha with ongoing optimization work. These factors combine to make it unusually CPU and RAM intensive compared to most PC games.',
      },
    },
  ],
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
            <p className="mt-5 font-mono text-xs text-gold">Section 02</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              System specs and hardware
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              <strong className="text-starwhite">Star Citizen&rsquo;s official minimum
              requirements are a quad-core CPU with AVX2 support (Intel i7 Haswell / AMD
              Ryzen 5 1600 or equivalent), 16 GB of RAM, a GPU with 4 GB of VRAM (GTX
              1060 / RX 580 range), an SSD with 100 GB free, and Windows 10 or 11
              64-bit.</strong>{' '}
              For a genuinely smooth experience in 2026, the recommended specs are
              32 GB of RAM, an RTX 3070 / RX 6700 XT or better, and an NVMe SSD.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Official specs at a glance</h2>
            <p className="mt-5 text-base leading-relaxed text-starwhite/85">
              These are the specs listed by <Term name="CIG">CIG</Term>. Meeting the minimum
              gets you into the game — but the experience at minimum settings is rough,
              especially in populated areas. Star Citizen is in active Alpha development, so
              specs can change with major updates. The official requirements live in the{' '}
              <a
                href="https://support.robertsspaceindustries.com/hc/en-us/articles/360042417374"
                className="text-gold underline decoration-dotted hover:text-goldDark"
                rel="noopener noreferrer"
              >
                RSI support article
              </a>{' '}
              — always check there for the latest.
            </p>
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
                    <td className="px-4 py-3 text-sm text-starwhite/80">Windows 10 or 11, 64-bit (latest Service Pack)</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">Windows 10 or 11, 64-bit</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3 text-sm font-semibold text-gold">CPU</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">Quad-core with AVX, AVX2 &amp; FMA3 — Intel i7 Haswell (4th gen) or later / AMD Ryzen 5 1600 or equivalent</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">Intel i7-12700K / AMD Ryzen 7 5800X3D or better</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3 text-sm font-semibold text-gold">RAM</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">16 GB</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">32 GB DDR4 or DDR5</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3 text-sm font-semibold text-gold">GPU</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">GTX 1060 / RX 580 or equivalent — DirectX 11.1 and Vulkan 1.2 required</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">RTX 3070 or RTX 3080 / RX 6700 XT or RX 6800 XT</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3 text-sm font-semibold text-gold">VRAM</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">4 GB</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">8 GB minimum; 12 GB+ preferred at higher resolutions</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3 text-sm font-semibold text-gold">Storage</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">SSD with 100 GB free (NTFS), plus 10 GB for the pagefile</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">NVMe SSD (PCIe Gen 3 or Gen 4, 3,000 MB/s+ reads)</td>
                  </tr>
                  <tr className="border-t border-white/5">
                    <td className="px-4 py-3 text-sm font-semibold text-gold">Network</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">Broadband — there is no offline mode</td>
                    <td className="px-4 py-3 text-sm text-starwhite/80">Broadband, low latency</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-base leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">Important CPU note:</strong> your CPU must
              support the AVX, AVX2, and FMA3 instruction sets. Most Intel CPUs from 4th
              generation (Haswell, 2013) onward support these. If your CPU predates Haswell
              or is a very old AMD chip, the game will not launch at all — it is a hard
              requirement, not a preference.
            </p>
            <div className="mt-6 rounded-2xl border border-white/5 bg-navyLight/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                High-end / future-proof (2026)
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-starwhite/80">
                <li><strong className="text-starwhite">CPU:</strong> Intel Core i9-13900K / i9-14900K or AMD Ryzen 9 7950X3D</li>
                <li><strong className="text-starwhite">GPU:</strong> NVIDIA RTX 4080 / RTX 4090 — 16 GB VRAM</li>
                <li><strong className="text-starwhite">RAM:</strong> 64 GB (the game will use it)</li>
                <li><strong className="text-starwhite">Storage:</strong> PCIe Gen 4 NVMe (7,000 MB/s+)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">What the specs mean in practice</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Star Citizen is not like most games. It is an always-online, streamed universe
                rendering entire cities, planetary atmospheres, and persistent player actions
                at the same time. The demands are unusual even for high-end hardware.
              </p>

              <h3 className="mt-8 text-xl font-bold text-starwhite">At minimum specs</h3>
              <p>
                You will get into the game. Expect 20–30 FPS in populated city areas like{' '}
                <Term name="Lorville">Lorville</Term> and <Term name="Area18">Area18</Term>,
                and 40–60 FPS in open space or quieter locations. Everything will be set to
                Low or Medium graphics. Loading into a city takes noticeably longer, and frame
                rate dips further during busy server events. It is playable — but frustrating
                at times.
              </p>

              <h3 className="mt-8 text-xl font-bold text-starwhite">At recommended specs</h3>
              <p>
                This is where the game starts feeling like the experience CIG intends. You
                will hold 50–70 FPS in most situations at medium-high settings, and cities
                load cleanly. With an RTX 3080 or equivalent, you can push settings higher and
                use upscaling (DLSS, FSR) for extra headroom.
              </p>

              <h3 className="mt-8 text-xl font-bold text-starwhite">High-end and above</h3>
              <p>
                Even an RTX 4090 will not always hold 120 FPS. The bottleneck is frequently
                the CPU, because of how the engine processes server state, physics, and
                computer-controlled characters. High-end hardware shines most in{' '}
                <Term name="Squadron 42">Squadron 42</Term> and on low-population servers. In
                a 30-player battle near a space station, everyone drops frames regardless of
                rig.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">The three real bottlenecks</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The official minimums tell you the floor. These three components determine whether
                your experience is smooth or miserable:
              </p>

              <h3 className="mt-8 text-xl font-bold text-starwhite">1. RAM — 32 GB is the real sweet spot</h3>
              <p>
                Star Citizen streams an enormous amount of world data while you play — terrain,
                buildings, ships, physics. The official minimum is 16 GB, and 16 GB does work.
                But during a typical session in a busy city or server, the game process alone
                can consume 18–24 GB of RAM. When physical RAM runs out, Windows starts using
                the pagefile — virtual memory on your drive — and that swapping causes stutters
                no GPU upgrade can fix. With 32 GB the game has room to breathe, and longer
                sessions stay stable. If you are choosing between 16 and 32 GB, choose 32 GB
                without hesitation.
              </p>
              <p>
                RAM speed matters less than quantity here. DDR4-3200 CL16 — a common budget
                spec — is perfectly fine. Dual-channel does help, so two 16 GB sticks beat one
                32 GB stick if you have the choice.
              </p>

              <h3 className="mt-8 text-xl font-bold text-starwhite">2. Storage — SSD is not optional</h3>
              <p>
                Do not install Star Citizen on a spinning hard drive (HDD). The game streams
                world data in real time as you fly or walk — the planet you are landing on is
                pulled from storage constantly as you move through it. On an HDD, loading into
                a city can take 5–10 minutes, <Term name="Quantum Travel">quantum travel</Term>{' '}
                transitions stutter, and characters and props pop into view long after you
                arrive. The game technically runs, but the experience is severely broken.
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">SATA SSD:</strong> acceptable — loads are
                  reasonable and world streaming works correctly.
                </li>
                <li>
                  <strong className="text-starwhite">NVMe SSD (PCIe Gen 3):</strong> noticeably
                  better — city loads in under 60 seconds, transitions are smooth.
                </li>
                <li>
                  <strong className="text-starwhite">NVMe SSD (PCIe Gen 4, 5,000–7,000 MB/s):</strong>{' '}
                  best experience available — some city loads complete in 20–30 seconds.
                </li>
              </ul>
              <p>
                If you are on an older system with only HDDs, a budget NVMe drive ($40–$60)
                dedicated to Star Citizen is one of the single best upgrades you can make
                before anything else.
              </p>

              <h3 className="mt-8 text-xl font-bold text-starwhite">3. VRAM — 8 GB is the working minimum</h3>
              <p>
                The official floor is 4 GB of VRAM, and a 4–6 GB GPU will run the game at
                lower settings. But you will see texture pop-in and reduced quality in dense
                areas. 8 GB lets you run medium-high settings comfortably. 12 GB or more is
                preferred at higher resolutions and allows high settings in all environments,
                including the most demanding cities and space stations.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Download size and first launch</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Star Citizen is a large install and grows with each major update. As of
                mid-2026, expect a download of roughly 80–120 GB (compressed) and an installed
                size of 100–130+ GB on disk. <Term name="RSI">RSI</Term> recommends 100 GB of
                minimum free space, plus an extra 10 GB for the Windows pagefile. A 250 GB
                dedicated drive works; 500 GB is more comfortable. You download the free RSI
                Launcher from robertsspaceindustries.com, and it handles all updates from
                there.
              </p>
              <p>
                <strong className="text-starwhite">Shader compilation on first launch:</strong>{' '}
                the very first time you launch the game — and after major updates — it compiles
                shaders on your GPU. This takes 15–45 minutes on most systems before you can
                play. The progress bar is not frozen, even when it appears to stall. Do not
                close the game. Later launches skip this step and load within a couple of
                minutes.
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
                performance will give you noticeably better frame rates than the official
                minimum suggests. Single-core speed matters more than core count.
              </p>
              <p>
                Network latency matters more than raw bandwidth. Ongoing traffic is light — a
                10 Mbps connection is sufficient for gameplay. What hurts is high ping: at
                100ms or more you get desync — ships teleporting, shots not registering, and
                characters behaving erratically. A stable connection under 60ms to the nearest
                CIG server region is ideal. Avoid very high-latency connections like satellite
                internet with 400ms+ ping. For downloads, faster is simply shorter waits — a
                200+ Mbps connection pulls the initial 100 GB install in under an hour.
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
                  <strong className="text-starwhite">Upscaling:</strong> enable DLSS (NVIDIA),
                  FSR (AMD, works on all GPUs), or XeSS (Intel) in the video settings. Quality
                  or Balanced mode can recover 20–40% more FPS with minimal visible quality
                  loss — do this first on mid-range hardware.
                </li>
                <li>
                  <strong className="text-starwhite">Volumetric clouds:</strong> Medium or Low.
                  This single setting has a dramatic impact on GPU load during atmospheric
                  flight, and the difference is barely noticeable from the cockpit.
                </li>
                <li>
                  <strong className="text-starwhite">Shadows:</strong> Medium. High and Ultra
                  shadows are one of the heaviest GPU costs, and the improvement is subtle.
                </li>
                <li>
                  <strong className="text-starwhite">Screen space reflections:</strong> Low or
                  Off. Surfaces look slightly less shiny, but High/Ultra reflections are a
                  significant GPU drain.
                </li>
                <li>
                  <strong className="text-starwhite">Texture quality:</strong> keep at Medium
                  or above. Low textures make the game look rough and can paradoxically hurt
                  performance if you have enough VRAM.
                </li>
                <li>
                  <strong className="text-starwhite">Object detail / draw distance:</strong>{' '}
                  keep at Medium or above. Too low and distant ships, enemies, and markers
                  become invisible — a real combat disadvantage.
                </li>
                <li>
                  <strong className="text-starwhite">Field of view:</strong> personal
                  preference — this is comfort, not performance. 90–100 is common.
                </li>
                <li>
                  <strong className="text-starwhite">Motion blur:</strong> Off. Most players
                  disable this immediately.
                </li>
                <li>
                  <strong className="text-starwhite">VSync:</strong> Off if you have a high
                  refresh-rate monitor; consider a frame cap instead.
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
            <h2 className="heading-display text-2xl sm:text-3xl">macOS and Linux</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <strong className="text-starwhite">macOS is not supported.</strong> There is no
                Mac version of Star Citizen, now or announced for the future. CIG has never
                indicated macOS support is planned.
              </p>
              <p>
                <strong className="text-starwhite">Linux has no official support</strong>{' '}
                either. The community maintains unofficial compatibility through Proton —
                Valve&rsquo;s Windows compatibility layer for Linux. The experience ranges from
                surprisingly functional to completely broken, depending on your distribution,
                GPU driver, and the current game version. If you want a supported, stable
                experience: use Windows 10 or 11.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Will it run on your machine?</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <h3 className="mt-8 text-xl font-bold text-starwhite">Can I run Star Citizen on a laptop?</h3>
              <p>
                Yes, but it depends heavily on the laptop. A gaming laptop with a dedicated
                GPU (RTX 3060 or better), 32 GB of RAM, and an NVMe SSD can deliver a playable
                experience. The biggest challenge is heat — Star Citizen sustains high CPU and
                GPU load for long stretches, which can cause thermal throttling in laptops
                without good cooling. Integrated-only graphics (Intel Iris, AMD Radeon
                integrated) will not run the game at any usable frame rate.
              </p>

              <h3 className="mt-8 text-xl font-bold text-starwhite">Will it run on a GTX 1080 / RX 5700 XT?</h3>
              <p>
                Yes — cards at this tier are above the official minimum and deliver a decent
                experience at medium settings in 1080p. Expect 40–60 FPS in open space and
                25–40 FPS in dense city areas. These cards carry 8–11 GB of VRAM, which helps.
                The bigger bottleneck at this tier is usually RAM (aim for 32 GB) and storage
                (NVMe matters here). Enabling FSR upscaling at Quality mode pushes you into
                smoother territory without much visual cost.
              </p>

              <h3 className="mt-8 text-xl font-bold text-starwhite">Is 1440p or 4K viable?</h3>
              <p>
                1440p is perfectly viable with an RTX 3080 / RX 6800 XT or better — you will
                hold 60+ FPS in most situations at high settings. 4K is playable on an RTX
                4080 or 4090, but the game is CPU-bound often enough that even top-tier GPUs
                will not always sustain 60 FPS in cities at native 4K. DLSS or FSR at Quality
                mode is commonly used even on high-end builds at 4K — the visual difference at
                that resolution is minimal. Most serious players run 1440p as the sweet spot.
              </p>

              <h3 className="mt-8 text-xl font-bold text-starwhite">Not sure? Test it for free</h3>
              <p>
                The best advice if you are unsure your PC can handle the game: test it before
                spending money. CIG runs periodic <Term name="Free Fly">Free Fly</Term> events
                where anyone can download and play free — no purchase required — for a limited
                window, typically one to two weeks. Load into a city, check your frame rate,
                and you will know exactly which component is the limiting factor before
                committing. Upcoming dates are tracked at{' '}
                <a
                  href="https://freeflyevent.com"
                  className="text-gold underline decoration-dotted hover:text-goldDark"
                >
                  freeflyevent.com
                </a>
                .
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
                  <strong className="text-starwhite">A pre-2013 CPU</strong> — without AVX,
                  AVX2, and FMA3 instruction support, the game will not launch at all.
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
                  during quantum travel.
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
      <PageSources route="/day-one-citizen/system-specs" />
      <Footer />
    </>
  )
}
