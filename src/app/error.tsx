'use client'

import { useEffect } from 'react'

// Next's default error shell renders as an indexable 200 with generic text.
// Google has clustered shells like that with spam sites and given our URL's
// canonical to them. This page keeps any failed render out of the index:
// Google's renderer runs JS and honors a robots meta added at runtime.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (!document.querySelector('meta[name="robots"]')) {
      const meta = document.createElement('meta')
      meta.name = 'robots'
      meta.content = 'noindex'
      document.head.appendChild(meta)
    }
    document.title = 'Temporary error — dayonecitizen.com'

    if (process.env.NODE_ENV === 'development') {
      console.error(error)
    }
  }, [error])

  return (
    <main className="bg-navy">
      <div className="container-wide flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow mb-4">Temporary error</p>
        <h1 className="heading-display mb-4 text-4xl sm:text-5xl">
          This page hit a snag while loading
        </h1>
        <p className="mb-10 max-w-md text-base text-muted">
          The guide is still here. Reload the page and it should appear.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-goldDark"
        >
          Reload
        </button>
      </div>
    </main>
  )
}
