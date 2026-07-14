import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import { SITE } from '@/lib/site'
import claimsData from '@/data/claims.json'
import FactCheckClient from './FactCheckClient'

export const metadata: Metadata = {
  title: 'Star Citizen Fact Check — Verified Claims With Official Sources',
  description:
    'Search fact-checked Star Citizen claims — referral bonus amounts, wipes, funding, events, Squadron 42 — each verified against official Cloud Imperium sources with dates.',
  alternates: { canonical: '/fact-check' },
  openGraph: {
    title: 'Star Citizen Fact Check — Verified Claims With Official Sources',
    description:
      'A public ledger of fact-checked Star Citizen claims, each verified against official Cloud Imperium sources. Free for creators to search and cite.',
    url: '/fact-check',
    type: 'website',
  },
}

const RATING: Record<string, string> = {
  verified: 'True',
  refuted: 'False',
  unverifiable: 'Unproven',
}

const claimReviewJsonLd = claimsData.claims.map((c) => ({
  '@context': 'https://schema.org',
  '@type': 'ClaimReview',
  url: `${SITE.url}/fact-check#${c.id}`,
  claimReviewed: c.claim,
  datePublished: c.lastVerified || claimsData.generated,
  author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  reviewRating: {
    '@type': 'Rating',
    alternateName: RATING[c.status] ?? 'Unproven',
  },
  itemReviewed: {
    '@type': 'Claim',
    appearance: (c.sources ?? []).map((s) => ({ '@type': 'CreativeWork', url: s })),
  },
}))

export default function FactCheckPage() {
  const counts = { verified: 0, unverifiable: 0, refuted: 0 }
  for (const c of claimsData.claims) {
    if (c.status in counts) counts[c.status as keyof typeof counts]++
  }

  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', url: '/' },
            { name: 'Fact Check', url: '/fact-check' },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(claimReviewJsonLd) }}
        />
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-12 pt-32 sm:pt-40">
          <div className="container-narrow">
            <p className="font-mono text-xs text-gold">Free reference for players and creators</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Star Citizen Fact Check
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">
                {counts.verified} verified claims about Star Citizen, each checked against an
                official Cloud Imperium source.
              </strong>{' '}
              Search below before you repeat a &ldquo;fact&rdquo; you read somewhere. Every entry
              shows its status, the official source, and the date we last checked it.
            </p>
            <p className="mt-4 text-sm text-muted">
              Maintained by{' '}
              <a href="/about" className="text-gold underline-offset-4 hover:underline">
                {SITE.author}
              </a>
              . We check claims against official sources only — the RSI website, official
              announcement posts, and Cloud Imperium staff posts. Never wikis, press, or Reddit.
              Creators are welcome to cite this page.
            </p>
          </div>
        </header>

        <div className="container-narrow py-12">
          <FactCheckClient claims={claimsData.claims} generated={claimsData.generated} />
        </div>
      </main>
      <Footer />
    </>
  )
}
