import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import { DiscordCTA } from '@/components/DiscordCTA'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import PageSources from '@/components/PageSources'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Is Star Citizen on Steam? Where to Get It',
  description:
    'Star Citizen is not on Steam, PS5, Xbox, or Game Pass. It is sold only at robertsspaceindustries.com for Windows PC. Here is the two-minute buying path.',
  alternates: {
    canonical: '/day-one-citizen/is-star-citizen-on-steam',
    languages: {
      en: '/day-one-citizen/is-star-citizen-on-steam',
      de: '/de/star-citizen-auf-steam',
      'x-default': '/day-one-citizen/is-star-citizen-on-steam',
    },
  },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Is Star Citizen on Steam?',
    description:
      'No — Star Citizen is sold only at robertsspaceindustries.com and runs only on Windows PC. Consoles, Game Pass, and Steam Deck, answered honestly.',
    url: '/day-one-citizen/is-star-citizen-on-steam',
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
      name: 'Is Star Citizen on Steam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Star Citizen is sold only at robertsspaceindustries.com, the official RSI store. It is not available on Steam, the Epic Games Store, or GOG as of July 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Star Citizen on PS5 or Xbox?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Star Citizen runs only on Windows PC. Gaming press has reported, based on CIG job postings, that a console port of Squadron 42 — the separate single-player game — appears to be in development. CIG has not announced any console version, and that reporting covers Squadron 42 only, not Star Citizen itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Star Citizen on Xbox Game Pass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Star Citizen is not on Game Pass or any other subscription service. The only way to play is a one-time game package bought from robertsspaceindustries.com, starting at $45.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Star Citizen run on Steam Deck?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not officially — there is no supported Steam Deck version. Community reports describe roughly five to twenty frames per second after heavy tinkering with compatibility tools. Treat Star Citizen as unplayable on Steam Deck today.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will Star Citizen ever come to Steam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are no official plans for a Steam release. CIG sells the game only through its own store, and no storefront change has been announced. As of July 2026, robertsspaceindustries.com remains the only place to buy Star Citizen.',
      },
    },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Is Star Citizen on Steam? No — Here Is Where to Get It',
  description:
    'Star Citizen is not on Steam, consoles, or Game Pass. It is sold only at robertsspaceindustries.com for Windows PC.',
  author: { '@type': 'Person', name: SITE.author, url: `${SITE.url}/about` },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  mainEntityOfPage: `${SITE.url}/day-one-citizen/is-star-citizen-on-steam`,
}

export default function IsStarCitizenOnSteamPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Day One Citizen', url: '/day-one-citizen' },
          { name: 'Is Star Citizen on Steam?', url: '/day-one-citizen/is-star-citizen-on-steam' },
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
            <p className="mt-5 font-mono text-xs text-gold">Before you buy</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Is Star Citizen on Steam?
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              The single most-asked question before anyone buys the game.
              Here is the straight answer — plus consoles, Game Pass, and
              Steam Deck while we are at it.
            </p>
            <p className="mt-4 text-sm text-muted">
              Written by{' '}
              <Link href="/about" className="text-gold underline-offset-4 hover:underline">
                {SITE.author}
              </Link>
              , a veteran Star Citizen backer.
            </p>
            <p className="mt-3 text-sm">
              <Link
                href="/de/star-citizen-auf-steam"
                hrefLang="de"
                lang="de"
                className="text-gold underline-offset-4 hover:underline"
              >
                Diese Seite auf Deutsch →
              </Link>
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">The short answer</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <strong className="text-starwhite">No. Star Citizen is not on Steam.
                It is sold in exactly one place: robertsspaceindustries.com, the
                official store. It runs only on Windows PC, through the free RSI
                Launcher.</strong>
              </p>
              <p>
                It is also not on the Epic Games Store, GOG, PlayStation 5, Xbox, or
                Game Pass as of July 2026. If you see Star Citizen &ldquo;for
                sale&rdquo; anywhere other than the official{' '}
                <Term name="RSI">RSI</Term> store, walk away — it is not a real
                storefront for this game.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Where Star Citizen is actually sold</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Buying the game takes about two minutes on the official site. The
                whole path looks like this:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">Create a free RSI account</strong>{' '}
                  at robertsspaceindustries.com. Enter a{' '}
                  <Term name="Referral Code">referral code</Term> at sign-up — it gives
                  your new account 50,000 <Term name="UEC">UEC</Term> free. The code and
                  the exact signup screen are on{' '}
                  <Link href="/referral-code" className="text-gold underline-offset-4 hover:underline">
                    the referral code page
                  </Link>.
                </li>
                <li>
                  <strong className="text-starwhite">Buy a game package</strong> — the
                  cheapest is the $45 Citizen Starter Pack.{' '}
                  <Link href="/day-one-citizen/starter-package" className="text-gold underline-offset-4 hover:underline">
                    All eight starter packages are compared here
                  </Link>.
                </li>
                <li>
                  <strong className="text-starwhite">Download the RSI Launcher</strong>{' '}
                  from your account library. It installs and updates the game from then
                  on. The full walkthrough is in{' '}
                  <Link href="/day-one-citizen/buying-the-game" className="text-gold underline-offset-4 hover:underline">
                    how to actually buy the game
                  </Link>.
                </li>
              </ul>
              <p>
                One note on trust, since referral links make people rightly cautious.
                This site is run by a named community member — me,{' '}
                <Link href="/about" className="text-gold underline-offset-4 hover:underline">
                  {SITE.author}
                </Link>{' '}
                — not an anonymous referral farm. The code is re-checked against the
                live RSI signup page every month, with dated receipts published on the
                referral code page.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Is it on PS5 or Xbox?</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <strong className="text-starwhite">No.</strong> Star Citizen is a
                Windows PC game. There is no PlayStation or Xbox version, and{' '}
                <Term name="CIG">CIG</Term> has not announced one.
              </p>
              <p>
                There is one nuance worth knowing. Gaming press has reported, based on
                CIG job postings, that a console port of{' '}
                <Term name="Squadron 42">Squadron 42</Term> — the separate single-player
                story game — appears to be in development. CIG itself has not announced
                any console version. That reporting covers Squadron 42 only. It does not
                apply to Star Citizen, the online game this guide is about.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Is it on Game Pass?</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <strong className="text-starwhite">No.</strong> Star Citizen is not on
                Xbox Game Pass, PC Game Pass, or any other subscription service. There
                is no subscription at all — you buy a{' '}
                <Term name="Game Package">game package</Term> once and you own access.
              </p>
              <p>
                The closest thing to &ldquo;trying it free&rdquo; is a{' '}
                <Term name="Free Fly">Free Fly</Term> event — a window, a few times a
                year, when anyone can play without paying.{' '}
                <Link href="/free-fly-events" className="text-gold underline-offset-4 hover:underline">
                  The Free Fly schedule is tracked here
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Does it run on Steam Deck?</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <strong className="text-starwhite">Not in any supported way.</strong>{' '}
                There is no official Steam Deck version, because the game is not on
                Steam at all.
              </p>
              <p>
                Some players have forced it to run through compatibility tools.
                Community reports describe roughly five to twenty frames per second,
                after heavy tinkering. That is not playable in any meaningful sense.
                If a handheld is your only machine, this is not the game for it today.
              </p>
              <p>
                Wondering whether your actual PC can run it? The{' '}
                <Link href="/day-one-citizen/system-specs" className="text-gold underline-offset-4 hover:underline">
                  system specs guide
                </Link>{' '}
                covers the official requirements in plain terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Will it ever come to Steam?</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                There are no official plans for a Steam release. <Term name="CIG">CIG</Term>{' '}
                is a crowdfunded studio that sells directly to players through its own
                store, and it has announced no storefront change.
              </p>
              <p>
                That is the current state, not a prophecy — plans could change someday.
                But as of July 2026, robertsspaceindustries.com is the only place to buy
                Star Citizen, and the RSI Launcher is the only way to play it.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Is Star Citizen on Steam?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  No. Star Citizen is sold only at robertsspaceindustries.com,
                  the official RSI store. It is not available on Steam, the
                  Epic Games Store, or GOG as of July 2026.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Is Star Citizen on PS5 or Xbox?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  No. Star Citizen runs only on Windows PC. Gaming press has
                  reported, based on CIG job postings, that a console port of
                  Squadron 42 — the separate single-player game — appears to be
                  in development. CIG has not announced any console version,
                  and that reporting covers Squadron 42 only, not Star Citizen
                  itself.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Is Star Citizen on Xbox Game Pass?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  No. Star Citizen is not on Game Pass or any other
                  subscription service. The only way to play is a one-time game
                  package bought from robertsspaceindustries.com, starting at
                  $45.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Does Star Citizen run on Steam Deck?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Not officially — there is no supported Steam Deck version.
                  Community reports describe roughly five to twenty frames per
                  second after heavy tinkering with compatibility tools. Treat
                  Star Citizen as unplayable on Steam Deck today.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Will Star Citizen ever come to Steam?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  There are no official plans. CIG sells the game only through
                  its own store, and no storefront change has been announced.
                  As of July 2026, robertsspaceindustries.com remains the only
                  place to buy Star Citizen.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" trackingLabel="is-on-steam-cta">
              Buy direct from RSI
            </CTAButton>
            <DiscordCTA />
          </div>

          <nav className="flex items-center justify-between text-sm">
            <Link
              href="/day-one-citizen"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> All sections
            </Link>
            <Link
              href="/day-one-citizen/buying-the-game"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              How to actually buy the game <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>

        <PageSources route="/day-one-citizen/is-star-citizen-on-steam" />
      </main>
      <Footer />
    </>
  )
}
