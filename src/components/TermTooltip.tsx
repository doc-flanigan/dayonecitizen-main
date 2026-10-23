'use client'

import { useEffect, useId, useState, type ReactNode } from 'react'

/**
 * The interactive half of <Term>. It receives one term's name and definition
 * as props, so the browser never downloads the whole glossary. Before
 * 2026-10-22 the lookup ran client-side, which put all 233 definitions in a
 * shared chunk (1551, about 52 KB) that every guide page needed to hydrate.
 * When Google's renderer skipped that one file, hydration failed (React #423)
 * and the render degraded.
 *
 * The tooltip is mounted ONLY while open. An always-mounted (opacity-0)
 * tooltip leaks the definition into the sentence for screen readers, text
 * selection, copy/paste, and crawlers/AI readers, mid-clause. Closed, a term
 * is just a link.
 */
export default function TermTooltip({
  href,
  termName,
  definition,
  className = '',
  children,
}: {
  href: string
  termName: string
  definition: string
  className?: string
  children: ReactNode
}) {
  const tooltipId = useId()
  const [open, setOpen] = useState(false)

  // ESC closes the tooltip when keyboard-focused.
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  // Hover and keyboard focus both drive `open`; only this term's tooltip
  // mounts, so terms inside hover-lifted cards never open together.
  return (
    <span
      className="relative inline"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        href={href}
        aria-describedby={open ? tooltipId : undefined}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className={
          'border-b border-dotted border-gold/60 text-starwhite ' +
          'underline-offset-2 transition-colors hover:border-gold hover:text-gold ' +
          'focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 ' +
          'focus-visible:ring-gold/60 ' +
          className
        }
      >
        {children}
      </a>
      {open ? (
        <span
          id={tooltipId}
          role="tooltip"
          className={
            'pointer-events-none absolute left-1/2 top-full z-30 mt-2 ' +
            '-translate-x-1/2 rounded-lg border border-gold/40 bg-navyLight ' +
            'px-3 py-2 text-left text-xs font-normal leading-snug text-starwhite ' +
            'shadow-lg shadow-black/40 ' +
            // Width: clamp small so it never overflows narrow columns
            'w-max max-w-[280px] ' +
            // Hide entirely on small screens — mobile uses the link, not a tooltip
            'hidden sm:block'
          }
        >
          <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-gold">
            {termName}
          </span>
          {definition}
          {/* Tiny arrow pointing back at the trigger */}
          <span
            aria-hidden
            className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-gold/40 bg-navyLight"
          />
        </span>
      ) : null}
    </span>
  )
}
