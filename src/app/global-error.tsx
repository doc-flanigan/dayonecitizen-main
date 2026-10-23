'use client'

import { useEffect } from 'react'
import './globals.css'

// Same reasoning as app/error.tsx, for a failure in the root layout itself:
// a broken render must never be indexed or clustered with spam soft-404 pages.
export default function GlobalError({
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
    <html lang="en">
      <head>
        <meta name="robots" content="noindex" />
        <title>Temporary error — dayonecitizen.com</title>
      </head>
      <body className="bg-navy text-starwhite antialiased">
        <main className="container-wide flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
          <p className="eyebrow mb-4">Temporary error</p>
          <h1 className="heading-display mb-4 text-4xl sm:text-5xl">
            dayonecitizen.com hit a snag while loading
          </h1>
          <p className="mb-10 max-w-md text-base text-muted">
            The guides are still here. Reload the page and they should appear.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-goldDark"
          >
            Reload
          </button>
        </main>
      </body>
    </html>
  )
}
