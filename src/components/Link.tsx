'use client'

import NextLink from 'next/link'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'

/**
 * next/link with viewport prefetching OFF by default. Use this, not next/link.
 *
 * Next.js prefetches every in-viewport <Link> in production, which downloads
 * each target route's JS chunks and RSC payload. Google's renderer has a small
 * per-page fetch budget: on 2026-10-22 a URL Inspection live test of
 * /day-one-citizen/first-flight loaded 16 scripts (5 of them prefetches for
 * other pages), skipped 3 shared chunks plus the error-boundary chunk ("Other
 * error"), hit ChunkLoadError + React #423 during hydration, and fell back to
 * the error page. Fewer fetches per render = fewer skipped chunks.
 *
 * In the Next 14 App Router, prefetch={false} also turns off hover prefetch,
 * so a click fetches the target then. Pages are static and CDN-cached, so
 * that costs a fraction of a second. Measured on first-flight: 18 scripts +
 * 15 RSC prefetches before, 12 scripts + 0 after. Pass prefetch to override.
 */
const Link = forwardRef<HTMLAnchorElement, ComponentPropsWithoutRef<typeof NextLink>>(
  function Link({ prefetch = false, ...props }, ref) {
    return <NextLink ref={ref} prefetch={prefetch} {...props} />
  },
)

export default Link
