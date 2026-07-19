import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import PageSources from '@/components/PageSources'
import GlossaryClient from './GlossaryClient'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'

export const metadata: Metadata = {
  title: 'Star Citizen Glossary — Plain English Definitions',
  description:
    "New to Star Citizen? Plain-English definitions of every term, acronym, and piece of 'Verse slang you'll encounter. 150+ terms, searchable by category.",
  alternates: { canonical: '/glossary' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Star Citizen Glossary — Plain English Definitions',
    description:
      "Definitions of every Star Citizen term you'll encounter as a new player. Search and filter, A through Z.",
    url: '/glossary',
  },
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
        <GlossaryClient />
      </main>
      <PageSources route="/glossary" />
      <Footer />
    </>
  )
}
