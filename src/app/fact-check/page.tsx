import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import { SITE } from '@/lib/site'
import claimsData from '@/data/claims.json'
import FactCheckClient from './FactCheckClient'

export const metadata: Metadata = {
  title: 'Star Citizen Fact Check — Official Sources',
  description:
    'Search fact-checked Star Citizen claims — referral bonuses, wipes, funding, Squadron 42 — verified against official CIG sources.',
  alternates: { canonical: '/fact-check' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
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

// Mirrors the visible "How this page works" section 1:1 (site rule: schema
// must match visible content).
const FAQ = [
  {
    q: 'How are these Star Citizen claims verified?',
    a: 'Every claim is checked against official Cloud Imperium sources only — the RSI website, official announcement posts (Comm-Links), and posts by CIG staff on the official Spectrum forum. Never community wikis, press articles, or Reddit. Each entry links its source and shows the date it was last checked.',
  },
  {
    q: 'What do the verdicts mean?',
    a: 'Verified means an official source supports the claim. False means an official source contradicts it. Unverifiable means no official source confirms or denies it — for some questions, that absence is itself the answer.',
  },
  {
    q: 'Can I cite or share this page?',
    a: 'Yes, freely. Every claim card has a copy-link button that gives you a direct link to that exact claim, and the official sources are linked on each card so you can cite Cloud Imperium directly as well.',
  },
  {
    q: 'What happens when a verdict turns out to be wrong?',
    a: 'It gets corrected in public, not deleted. The wrong claim is marked False with the official source that disproved it, and the corrected fact is published alongside it. Recent examples: VR support and the Argo ATLS power suit, both corrected within hours.',
  },
  {
    q: 'How do I get a claim fact-checked?',
    a: 'Search for it above. If nothing matches, one click submits it for verification against official sources — no email or account needed. Verdicts are usually published within a few days.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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

          <section className="mt-16">
            <h2 className="heading-display text-2xl sm:text-3xl">How this page works</h2>
            <div className="mt-5 space-y-6">
              {FAQ.map((f) => (
                <div key={f.q}>
                  <h3 className="text-base font-semibold text-starwhite">{f.q}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-starwhite/80">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
