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
  title: 'When Is the Next Star Citizen Wipe? What Survives, What Resets',
  description:
    'No Star Citizen wipe is currently announced. Real-money purchases and account UEC always survive; aUEC and in-game items are temporary alpha progress.',
  alternates: { canonical: '/day-one-citizen/next-wipe' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'When Is the Next Star Citizen Wipe?',
    description:
      'No wipe is currently announced. Exactly what survives a wipe (everything you paid for) and what resets (aUEC and in-game progress), in plain English.',
    url: '/day-one-citizen/next-wipe',
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
      name: 'When is the next Star Citizen wipe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No wipe is currently announced. The latest update, Alpha 4.9 (July 15, 2026), did not wipe — its patch notes state Long Term Persistence was preserved, so saved progress carried over. CIG states whether progress carries over in the patch notes of each update, and says it generally tries to avoid wipes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What survives a Star Citizen wipe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Everything bought with real money: game packages, pledge-store ships, hangar items, and skins. Your account UEC balance — including the 50,000 UEC referral enlistment bonus — is also never affected. Insurance terms and your account itself all carry through.',
      },
    },
    {
      '@type': 'Question',
      name: 'What gets reset in a Star Citizen wipe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Earned aUEC, ships bought in-game with aUEC, and gear or items acquired in-game. These are temporary alpha progress — the official support docs say aUEC can change or reset as development continues.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Long Term Persistence in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Long Term Persistence (LTP) is CIG’s system for carrying saved progress across updates. Each patch’s notes state whether LTP is enabled — when it is, your aUEC and in-game items should carry over rather than reset.',
      },
    },
    {
      '@type': 'Question',
      name: 'Did Alpha 4.9 wipe Star Citizen progress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Alpha 4.9 released on July 15, 2026 with no wipe — the official patch notes state Long Term Persistence was preserved, so earned aUEC and in-game items carried over. The last full wipe came with Alpha 4.8 in May 2026.',
      },
    },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'When Is the Next Star Citizen Wipe? What Survives, What Resets',
  description:
    'No wipe is currently announced. Real-money purchases and account UEC always survive; aUEC and in-game items are temporary alpha progress.',
  author: { '@type': 'Person', name: SITE.author, url: `${SITE.url}/about` },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  mainEntityOfPage: `${SITE.url}/day-one-citizen/next-wipe`,
}

export default function NextWipePage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Day One Citizen', url: '/day-one-citizen' },
          { name: 'The Next Wipe', url: '/day-one-citizen/next-wipe' },
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
              When is the next wipe?
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              &ldquo;Wipe&rdquo; is the scariest word a new player hears. Here
              is what a wipe actually touches, what it never touches, and what
              is — and is not — known about the next one.
            </p>
            <p className="mt-4 text-sm text-muted">
              Written by{' '}
              <Link href="/about" className="text-gold underline-offset-4 hover:underline">
                {SITE.author}
              </Link>
              , a veteran Star Citizen backer.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">The short answer</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <strong className="text-starwhite">No <Term name="Wipe">wipe</Term>{' '}
                is currently announced. Everything you buy with real money always
                survives a wipe. Your earned{' '}
                <Term name="aUEC">aUEC</Term> and in-game items are temporary alpha
                data that can be reset.</strong>
              </p>
              <p>
                <Term name="CIG">CIG</Term> says it generally tries to avoid wipes,
                and each update&rsquo;s patch notes state whether progress carries
                over. That is the entire, honest picture — anyone quoting you a
                confirmed wipe date is guessing.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">What survives, what resets</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/5">
              <table className="w-full text-sm">
                <thead className="bg-navyLight/60 text-left text-xs uppercase tracking-wider text-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Survives every wipe</th>
                    <th className="px-4 py-3 font-semibold">Resets in a wipe</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 align-top">
                  <tr>
                    <td className="px-4 py-3 text-starwhite/80">
                      Your <Term name="Game Package">game package</Term> and alpha access
                    </td>
                    <td className="px-4 py-3 text-starwhite/80">
                      Your earned aUEC balance
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-starwhite/80">
                      Every ship bought with real money
                    </td>
                    <td className="px-4 py-3 text-starwhite/80">
                      Ships bought in-game with aUEC
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-starwhite/80">
                      Account <Term name="UEC">UEC</Term> — including the 50,000 UEC{' '}
                      <Term name="Referral Code">referral</Term> bonus
                    </td>
                    <td className="px-4 py-3 text-starwhite/80">
                      Weapons, armor, and gear bought in-game
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-starwhite/80">
                      <Term name="Pledge">Pledge-store</Term> hangar items, skins, and
                      insurance terms
                    </td>
                    <td className="px-4 py-3 text-starwhite/80">
                      Items stored in your in-game inventory
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-starwhite/80">
                      Your account, handle, and purchase history
                    </td>
                    <td className="px-4 py-3 text-starwhite/80">
                      Other saved in-game progress, as stated per patch
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-base leading-relaxed text-starwhite/85">
              The dividing line is simple: real money on one side, gameplay on the
              other. The official support docs are explicit that losing aUEC never
              affects the UEC or pledge purchases on your{' '}
              <Term name="RSI">RSI</Term> account.
            </p>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Why wipes exist at all</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Star Citizen is an alpha. aUEC — Alpha UEC — is a temporary testing
                currency by design. When CIG rebuilds a core system, like the economy
                or how items persist, old data can become incompatible and get reset.
              </p>
              <p>
                Whether a given update wipes is stated in that update&rsquo;s patch
                notes. The phrase to look for is{' '}
                <Term name="Long Term Persistence">Long Term Persistence</Term> — when
                LTP is enabled, your aUEC and items should carry over. When a full
                wipe happens, everyone restarts with their pledge ships, their account
                UEC, and the starting money from their package.
              </p>
              <p>
                This is exactly why the golden rule for new players holds:{' '}
                <Link href="/day-one-citizen/ships-real-money" className="text-gold underline-offset-4 hover:underline">
                  spend real money only on the one package you need
                </Link>
                . Money survives; time is the only thing a wipe can take.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">So — when is the next one?</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Not announced. The latest major update, Alpha 4.9, arrived on
                July 15, 2026 <em>without</em> a wipe — its patch notes state
                that Long Term Persistence was preserved, so earned aUEC and
                in-game items carried over. As of July 2026, no wipe is
                announced for any upcoming update. The last full wipe came with
                Alpha 4.8 in May 2026.
              </p>
              <p>
                Practical advice: play as if your aUEC is temporary, because it is.
                Spend it on ships, gear, and good stories rather than hoarding it.
                If a wipe comes, your{' '}
                <Link href="/day-one-citizen/starter-package" className="text-gold underline-offset-4 hover:underline">
                  package ship
                </Link>{' '}
                and your{' '}
                <Link href="/referral-code" className="text-gold underline-offset-4 hover:underline">
                  50,000 UEC bonus
                </Link>{' '}
                are waiting on the other side.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  When is the next Star Citizen wipe?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  No wipe is currently announced. The latest update, Alpha 4.9
                  (July 15, 2026), preserved saved progress — no wipe. CIG
                  states whether progress carries over in the patch notes of
                  each update, and says it generally tries to avoid wipes.
                  Heard a wipe rumor? Check it against our{' '}
                  <Link href="/fact-check" className="text-gold underline-offset-4 hover:underline">
                    Star Citizen fact-check ledger
                  </Link>{' '}
                  — every claim there is sourced to CIG.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What survives a wipe?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Everything bought with real money: game packages,
                  pledge-store ships, hangar items, and skins. Your account UEC
                  balance — including the 50,000 UEC referral enlistment bonus
                  — is also never affected. Insurance terms and your account
                  itself all carry through.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What gets reset?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Earned aUEC, ships bought in-game with aUEC, and gear or
                  items acquired in-game. These are temporary alpha progress —
                  the official support docs say aUEC can change or reset as
                  development continues.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What is Long Term Persistence?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Long Term Persistence (LTP) is CIG&rsquo;s system for
                  carrying saved progress across updates. Each patch&rsquo;s
                  notes state whether LTP is enabled — when it is, your aUEC
                  and in-game items should carry over rather than reset.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Did Alpha 4.9 wipe progress?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  No. Alpha 4.9 released on July 15, 2026 with no wipe — the
                  official patch notes state Long Term Persistence was
                  preserved, so earned aUEC and in-game items carried over.
                  The last full wipe came with Alpha 4.8 in May 2026.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" trackingLabel="next-wipe-cta">
              50K that survives wipes
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
              href="/day-one-citizen/ships-real-money"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Ships and real money <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>

        <PageSources route="/day-one-citizen/next-wipe" />
      </main>
      <Footer />
    </>
  )
}
