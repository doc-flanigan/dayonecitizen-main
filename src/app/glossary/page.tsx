import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import PageSources from '@/components/PageSources'
import GlossaryClient from './GlossaryClient'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import { SITE } from '@/lib/site'
import { GLOSSARY } from '@/data/glossary'

export const metadata: Metadata = {
  title: 'Star Citizen Glossary — Plain English Definitions',
  description:
    "New to Star Citizen? Plain-English definitions of every term, acronym, and piece of 'Verse slang you'll encounter. 150+ terms, searchable by category.",
  alternates: { canonical: '/glossary' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    images: ['/images/brand/og-image.png'],
    title: 'Star Citizen Glossary — Plain English Definitions',
    description:
      "Definitions of every Star Citizen term you'll encounter as a new player. Search and filter, A through Z.",
    url: '/glossary',
  },
}

// DefinedTermSet is the semantically correct type for a glossary; Article is
// layered on top since generic crawlers check specifically for it.
const glossaryJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Article', 'DefinedTermSet'],
  headline: 'Star Citizen Glossary — Plain English Definitions',
  description:
    "Definitions of every Star Citizen term you'll encounter as a new player. Search and filter, A through Z.",
  author: { '@type': 'Person', name: SITE.author, url: `${SITE.url}/about` },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  mainEntityOfPage: `${SITE.url}/glossary`,
  hasDefinedTerm: GLOSSARY.map((entry) => ({
    '@type': 'DefinedTerm',
    name: entry.term,
    description: entry.definition,
    inDefinedTermSet: `${SITE.url}/glossary`,
  })),
}

export default function GlossaryPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Glossary', url: '/glossary' },
        ]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(glossaryJsonLd) }}
        />
        <GlossaryClient />
      </main>
      <PageSources route="/glossary" />
      <Footer />
    </>
  )
}
