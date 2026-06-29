import { SITE } from '@/lib/site'

type Props = {
  /** The article headline — use the page's H1 / metaTitle. */
  headline: string
  /** One-to-two sentence summary — reuse the page's meta description. */
  description: string
  /** Site-relative path of this page, e.g. '/day-one-citizen/install'. */
  path: string
  /** Optional cluster name, e.g. 'Day One Citizen'. Emitted as articleSection. */
  section?: string
  /**
   * Optional representative image (absolute URL or site-relative). Falls back
   * to the brand OpenGraph card so every article carries a valid image.
   */
  image?: string
  /** Optional real publish date (ISO YYYY-MM-DD). Omit if unknown — never invent. */
  datePublished?: string
  /** Optional real last-modified date (ISO YYYY-MM-DD). Omit if unknown. */
  dateModified?: string
}

/**
 * Reusable Article JSON-LD for content/guide pages. Author and publisher are
 * pulled from the single SITE source of truth so every page — and every future
 * page — emits a consistent, valid Article graph for search engines and AI
 * answer engines. Dates are intentionally optional: we only emit them when a
 * real date is supplied, never a fabricated one.
 */
export default function ArticleJsonLd({
  headline,
  description,
  path,
  section,
  image,
  datePublished,
  dateModified,
}: Props) {
  const url = `${SITE.url}${path}`
  const resolvedImage = image
    ? image.startsWith('http')
      ? image
      : `${SITE.url}${image}`
    : `${SITE.url}/images/brand/og-image.png`

  const json = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    inLanguage: 'en',
    image: resolvedImage,
    author: { '@type': 'Person', name: SITE.author },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/images/brand/logo-mark.png`,
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: SITE.url },
    ...(section ? { articleSection: section } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
