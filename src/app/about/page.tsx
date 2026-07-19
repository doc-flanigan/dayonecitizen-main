import type { Metadata } from 'next'
import Image from 'next/image'
import { Check, X } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import { SITE } from '@/lib/site'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'

const FAQ = [
  {
    q: 'What does o7 mean?',
    a: "o7 is a salute. The 'o' is a head and the '7' is an arm raised to the brow. Tilt your head sideways and you'll see it. It's used to say hello, goodbye, respect, or 'fly safe' across many online gaming and military sci-fi communities.",
  },
  {
    q: 'Where did o7 originate?',
    a: "o7 originated in EVE Online in the early 2000s, where pilots used it as a quick respect emoticon in local chat. It has since spread to most online sci-fi gaming communities, including Star Citizen, Elite Dangerous, the X-series, and military aviation circles.",
  },
  {
    q: 'How do you respond to o7?',
    a: "Respond with o7 back. It's a mutual salute. You can also use \\o (a hand wave) or o7o (saluting with both hands) for variety. Some people add the recipient's name, like 'o7 Doc' for a more personal greeting.",
  },
  {
    q: 'Is o7 only used in Star Citizen?',
    a: 'No. o7 is common across many gaming communities — EVE Online (where it started), Elite Dangerous, Star Citizen, World of Warships, military flight sims, and any community with a strong "fly safe" culture. It also appears on Twitch, Discord, and gaming Twitter.',
  },
  {
    q: 'What does \\o mean vs. o7?',
    a: '\\o is a wave (open hand raised, casual hello or goodbye). o7 is a salute (formal respect, fly safe, godspeed). \\o\\ /o/ are dancing/cheering. o7o is a two-handed salute. They are all from the same family of typed emoticons.',
  },
]

export const metadata: Metadata = {
  title: 'What Does o7 Mean? The Star Citizen Salute Explained',
  description:
    'Unofficial Star Citizen fan site for new players by Doc_Flanigan. Plain English, no jargon. Use referral code STAR-GCQJ-N6NC to start with 50,000 UEC free.',
  alternates: { canonical: '/about' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'What Does o7 Mean? The Star Citizen Salute Explained',
    description:
      "o7 is an emoticon salute. The 'o' is a head, the '7' is a raised arm. Originated in EVE Online, now used across all of sci-fi gaming.",
    url: '/about',
    type: 'article',
  },
  twitter: {
    title: 'What Does o7 Mean? The Star Citizen Salute Explained',
    description: "o7 is an emoticon salute. 'o' is a head, '7' is a raised arm.",
    card: 'summary_large_image',
  },
}

export default function AboutPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Does o7 Mean? The Star Citizen Salute Explained',
    description:
      "o7 is an emoticon salute used across Star Citizen and gaming communities. The 'o' is a head, the '7' is a raised arm.",
    author: { '@type': 'Person', name: SITE.author },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/about`,
    image: `${SITE.url}/images/hero/hero-01.jpg`,
  }

  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ]} />

        {/* ── Hero ── */}
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/30 pb-16 pt-32 sm:pt-40">
          <div className="container-narrow">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              About this site
            </p>
            <h1 className="heading-display text-4xl sm:text-5xl">
              DayOneCitizen.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-starwhite/85">
              Star Citizen for complete beginners. Plain English. No assumptions.
              No jargon without explanation. An unofficial fan site by {SITE.author}.
            </p>
          </div>
        </header>

        <article className="container-narrow space-y-12 py-16">

          {/* ── Personal Story ── */}
          <section>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Why I built it
            </p>
            <h2 className="heading-display text-3xl">
              Why I built DayOneCitizen.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                I still remember the sheer frustration of that first session. I was stumbling
                around <Term name="Port Olisar">Port Olisar</Term> — a space station that
                once orbited the planet{' '}
                <Term name="Crusader">Crusader</Term> — pressing everything I could until I
                finally managed to call my{' '}
                <Term name="Avenger Titan">Avenger Titan</Term> to a{' '}
                <Term name="Landing Pad">landing pad</Term>. Then I
                couldn&rsquo;t find it.
              </p>
              <p>
                A few minutes of wandering later, some patient strangers in{' '}
                <Term name="Global Chat">global chat</Term>{' '}
                pointed me to the right pad. There it was: my little ship against that
                enormous, rust-red planet behind it. My first taste of the scale of this
                game was enough to give me goosebumps.
              </p>
              <figure className="my-8">
                <Image
                  src="/images/about/port-olisar-crusader.jpg"
                  alt="Port Olisar space station orbiting the gas giant Crusader in Star Citizen"
                  width={1920}
                  height={1080}
                  className="rounded-lg border border-white/10"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                <figcaption className="mt-3 text-center text-xs text-muted">
                  Port Olisar above Crusader — the view from my first confused
                  hour in the &lsquo;Verse. The station was decommissioned in
                  2024, but this is where day one happened for a decade of new
                  citizens. o7
                </figcaption>
              </figure>
              <p>
                While I was trying to figure out how to close my rear ramp, a{' '}
                <Term name="Constellation">Constellation</Term> — a ship easily five times
                the size of mine — landed on the pad next to me. &ldquo;That has to be the
                biggest ship in the game,&rdquo; I thought. It was not.
              </p>
              <p>
                A few confused minutes later I was in the pilot&rsquo;s seat, the ship was
                flight-ready, and I lifted off. Straight into one of the docking rings.
                I didn&rsquo;t know the mouse controlled pitch and yaw. I was just trying
                to look down at the landing pad below me.
              </p>
              <p>
                Back to Port Olisar. The second takeoff was only slightly less disastrous.
                The third time I managed to hover above the station for about twenty minutes.
                Partly because I was awestruck. Mostly because I could not figure out how
                to go anywhere.
              </p>
              <p>
                More patient strangers in global chat walked me through locking a{' '}
                <Term name="Quantum Travel">Quantum Travel</Term> destination. I pointed
                at Crusader and jumped. As I flew closer and closer I was convinced I
                would land on it. Or crash into it. Either way, an adventure.
              </p>
              <p>
                More confused minutes passed. I still hadn&rsquo;t reached the surface.
                Back to global chat. I felt like a complete idiot when they told me:
                Crusader is a gas giant. There is no surface.
              </p>
              <p>
                By that point I was so lost and frustrated I logged out and didn&rsquo;t
                touch the game for months.
              </p>
              <p>
                I came back eventually — only because my friend{' '}
                <Term name="FireMedicSlim">FireMedicSlim</Term> had the
                patience to sit with me and walk me through everything I&rsquo;d been
                doing wrong. With someone to guide me, it all clicked. The confusion fell
                away and the game underneath it finally showed itself.
              </p>
              <p>
                That&rsquo;s why DayOneCitizen exists. Not because the game is bad.
                Because the on-ramp is brutal if you&rsquo;re flying alone. This site is
                the help I wish I&rsquo;d had on my day one: no assumptions about what you
                know, no jargon without explanation, no gatekeeping. Just plain English,
                from someone who still remembers being new.
              </p>
              <p className="font-semibold text-gold">
                o7. Welcome to <Term name="the 'Verse">the &lsquo;Verse</Term>.
              </p>
            </div>
          </section>

          {/* ── What This Site Is / Is Not ── */}
          <section className="grid gap-6 md:grid-cols-2">
            <div className="card-surface p-7">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                <Check size={20} aria-hidden />
              </div>
              <h3 className="heading-display text-xl">What this site is</h3>
              <ul className="mt-4 space-y-3 text-sm text-starwhite/85">
                <li>
                  <strong className="text-starwhite">An unofficial fan site.</strong>{' '}
                  Made by a player, for players. Not a CIG product.
                </li>
                <li>
                  <strong className="text-starwhite">Plain-English.</strong>{' '}
                  Every term is defined the first time it&rsquo;s used. The
                  glossary is one click away from every page.
                </li>
                <li>
                  <strong className="text-starwhite">Honest about the game.</strong>{' '}
                  Star Citizen is in alpha. It&rsquo;s ambitious, beautiful,
                  and sometimes broken. We say so.
                </li>
                <li>
                  <strong className="text-starwhite">Free.</strong> The site,
                  the guides, the glossary, the quick reference, the
                  fact-check ledger — all of it.
                </li>
              </ul>
            </div>
            <div className="card-surface p-7">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-300">
                <X size={20} aria-hidden />
              </div>
              <h3 className="heading-display text-xl">What this site is not</h3>
              <ul className="mt-4 space-y-3 text-sm text-starwhite/85">
                <li>
                  <strong className="text-starwhite">Not affiliated with CIG.</strong>{' '}
                  <Term name="CIG">Cloud Imperium Games</Term> has nothing to
                  do with this site.
                </li>
                <li>
                  <strong className="text-starwhite">Not official.</strong> For
                  the source of truth go to robertsspaceindustries.com.
                </li>
                <li>
                  <strong className="text-starwhite">Not a hype machine.</strong>{' '}
                  We don&rsquo;t cheerlead delays or pretend everything is fine
                  when it&rsquo;s not.
                </li>
                <li>
                  <strong className="text-starwhite">Not a doomposting machine, either.</strong>{' '}
                  The constant &laquo;SC is a scam&raquo; rage-bait isn&rsquo;t
                  useful for anyone trying to decide if they want to play.
                </li>
                <li>
                  <strong className="text-starwhite">Not a wiki.</strong> Star
                  Citizen Wiki is excellent for deep dives. We&rsquo;re the
                  on-ramp, not the encyclopedia.
                </li>
              </ul>
            </div>
          </section>

          {/* ── First Lesson: o7 ── */}
          <section className="border-t border-white/5 pt-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Your first lesson
            </p>
            <h2 className="heading-display text-2xl">
              o7 — the Star Citizen salute.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-starwhite/85">
              <strong>o7</strong> is an emoticon salute. The lowercase{' '}
              <strong>o</strong> is a head. The <strong>7</strong> is an arm
              raised to the brow. Tilt your head sideways and you&rsquo;ll see it.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl border border-gold/30 bg-gold/5 px-6 py-5 sm:gap-6 sm:px-8">
              <span className="font-display text-6xl text-gold">o7</span>
              <span className="text-sm text-starwhite/80">
                Means: hello · goodbye · respect · fly safe
              </span>
            </div>
            <p className="mt-6 text-base leading-relaxed text-starwhite/85">
              You&rsquo;ll see it everywhere — global chat, your{' '}
              <Term name="Org">org</Term>&rsquo;s Discord server,{' '}
              <Term name="Spectrum">Spectrum</Term> (the official Star Citizen
              forum), Twitch streams. When someone rescues you from a crash,
              when you log off for the night, when a streamer asks for a salute
              in chat. Type it back. That&rsquo;s all there is to it.
            </p>
          </section>

          {/* ── FTC Disclosure ── */}
          <section id="referral-disclosure" className="border-t border-white/5 pt-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              FTC disclosure
            </p>
            <h2 className="heading-display text-2xl">
              About the referral links.
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-starwhite/85">
              <p>
                Affiliate disclosure: This site uses Star Citizen referral links (code STAR-GCQJ-N6NC). Referral code owners may receive an in-game bonus if you sign up. Your rewards are not affected.
              </p>
            </div>
          </section>

        </article>

        {/* ── CTA ── */}
        <section className="border-t border-white/5 bg-gradient-to-r from-navyLight to-navy py-16">
          <div className="container-narrow">
            <div className="card-surface flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  New to Star Citizen?
                </p>
                <h2 className="heading-display text-2xl">
                  Ready to start your day one?
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Use a <Term name="Referral Code">referral code</Term> on
                  signup and start with 50,000 <Term name="UEC">UEC</Term> free.
                </p>
              </div>
              <CTAButton size="lg" trackingLabel="about-bottom-cta">
                Use my referral code
              </CTAButton>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  )
}
