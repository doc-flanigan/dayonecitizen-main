import type { ReactNode } from 'react'
import { getTerm, termSlug } from '@/data/glossary-lookup'
import TermTooltip from './TermTooltip'

type TermProps = {
  /** Canonical glossary term key (display name OR slug). Case-insensitive. */
  name: string
  /** The text actually rendered in the page copy. May differ from `name`. */
  children: ReactNode
  /** Optional extra class names to merge onto the link. */
  className?: string
}

/**
 * Inline glossary term, which replaces "spell it out inline" expansions.
 *
 * A server component: the glossary lookup runs at build time, and only this
 * term's name and definition reach the browser through <TermTooltip>. Keep
 * it that way. Importing the glossary into client code ships all 233
 * definitions to every page; see TermTooltip for why that broke Google's render.
 *
 * Renders the display text as an anchor that:
 *   • links to /glossary#term-<slug> for the deep dive,
 *   • shows a small tooltip with the plain-English definition on hover/focus
 *     (desktop only — mobile users get the link),
 *   • exposes the open tooltip to assistive tech via `aria-describedby`.
 *
 * If `name` does not match any glossary entry, the component renders
 * `children` as plain text and warns at build time in development. We never
 * throw — a missing entry should never break a page.
 */
export default function Term({ name, children, className = '' }: TermProps) {
  const term = getTerm(name)

  if (!term) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(`[Term] No glossary entry for "${name}". Rendering plain text.`)
    }
    return <>{children}</>
  }

  return (
    <TermTooltip
      href={`/glossary#term-${termSlug(term.term)}`}
      termName={term.term}
      definition={term.definition}
      className={className}
    >
      {children}
    </TermTooltip>
  )
}
