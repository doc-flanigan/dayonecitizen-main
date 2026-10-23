'use client'

import { useEffect } from 'react'
import './globals.css'

// Replaces the whole document when the root layout itself fails on the
// client. Because it replaces <head> too, it re-emits the page's canonical:
// pages indexed from this state previously showed "User-declared canonical:
// None", which is how Google came to give our URLs to other sites. No
// noindex, for the same reason as app/error.tsx: the trigger is Google's
// renderer skipping a chunk, not a broken page.
//
// Canonical convention matches page metadata and middleware: apex host, no
// trailing slash, homepage as the bare origin.
const CANONICAL_HOST = 'https://dayonecitizen.com'
const CROSS_DOMAIN_CANONICAL = new Set(['/day-one-citizen/keybinds'])

function selfCanonical(): string | null {
  if (typeof window === 'undefined') return null
  const path = window.location.pathname.replace(/\/+$/, '')
  if (CROSS_DOMAIN_CANONICAL.has(path)) return null
  return `${CANONICAL_HOST}${path}`
}

export default function GlobalError({
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

  const canonical = selfCanonical()

  return (
    <html lang="en">
      <head>
        <title>Temporary error — dayonecitizen.com</title>
        {canonical ? <link rel="canonical" href={canonical} /> : null}
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
