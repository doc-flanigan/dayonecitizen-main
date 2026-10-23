'use client'

import { useEffect } from 'react'

// Shown when a page segment throws on the client. On this site the realistic
// trigger is Google's renderer skipping a JS chunk (URL Inspection 2026-10-22:
// ChunkLoadError + React #423 on /day-one-citizen/first-flight), not a broken
// page: the server HTML was fine. So this page must NOT add noindex. An
// earlier version did, and Google rejected Request Indexing for a healthy
// page. The root layout (and its canonical tag) stays mounted around this
// component, and middleware sends a canonical Link header, so a failed render
// can no longer be clustered under another site's URL.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
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
