import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
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
    title: 'Star Citizen Glossary — Plain English Definitions',
    description:
      "Definitions of every Star Citizen term you'll encounter as a new player. Search and filter, A through Z.",
    url: '/glossary',
  },
}

export default function GlossaryPage() {
  // DefinedTermSet built straight from the glossary data so it always matches
  // the visible terms — a strong GEO signal for a reference/dictionary page.
  const glossaryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${SITE.url}/glossary`,
    name: 'Star Citizen Glossary',
    description:
      "Plain-English definitions of Star Citizen terms, acronyms, and 'Verse slang for new players.",
    url: `${SITE.url}/glossary`,
    inLanguage: 'en',
    hasDefinedTerm: GLOSSARY.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
      inDefinedTermSet: `${SITE.url}/glossary`,
    })),
  }

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
      <Footer />
    </>
  )
}
