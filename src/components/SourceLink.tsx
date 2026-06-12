import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

type SourceLinkProps = {
  /** The URL of the original, authoritative source. */
  href: string
  /** Plain label, e.g. "Official RSI support article". Used when no children. */
  label?: string
  /** Visible citation text. Falls back to `label`, then "Official source". */
  children?: ReactNode
  /** Optional extra class names merged onto the link. */
  className?: string
}

/**
 * Inline source citation — the companion to <Term>.
 *
 * The Plain-English Standard (see CLAUDE.md) requires every factual claim that
 * came from an outside source to be wrapped in a link back to that source, with
 * a plain label like "Official RSI support article" rather than jargon.
 *
 * Renders an unobtrusive external link with a dotted gold underline and a small
 * outward arrow, opening in a new tab. Server component — no client JS needed.
 */
export default function SourceLink({
  href,
  label,
  children,
  className = '',
}: SourceLinkProps) {
  const text = children ?? label ?? 'Official source'
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        'inline-flex items-baseline gap-0.5 border-b border-dotted border-gold/50 ' +
        'text-gold/90 underline-offset-2 transition-colors hover:border-gold ' +
        'hover:text-gold focus:outline-none focus-visible:rounded-sm ' +
        'focus-visible:ring-2 focus-visible:ring-gold/60 ' +
        className
      }
    >
      {text}
      <ArrowUpRight size={12} aria-hidden className="translate-y-[2px]" />
    </a>
  )
}
