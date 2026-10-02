import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DAY_ONE_STEPS, getStep } from '@/data/day-one-steps'

/**
 * "Section 07 of 12" label plus a twelve-segment strip. Sits in the header of
 * each numbered Day One section so a reader always knows where they are and
 * can jump to any step.
 */
export function GuideProgress({ slug }: { slug: string }) {
  const current = getStep(slug)
  if (!current) return null
  const currentIndex = DAY_ONE_STEPS.indexOf(current)

  return (
    <div className="mt-5 max-w-xl">
      <p className="font-mono text-xs text-gold">
        Section {current.number}{' '}
        <span className="text-muted">of {DAY_ONE_STEPS.length} · Day One guide</span>
      </p>
      <ol className="mt-2 flex gap-1" aria-label="Day One guide progress">
        {DAY_ONE_STEPS.map((step, i) => {
          const isCurrent = i === currentIndex
          const bar = isCurrent
            ? 'bg-gradient-to-r from-ember to-gold shadow-[0_0_10px_rgba(245,185,66,0.6)]'
            : i < currentIndex
              ? 'bg-gold/50 group-hover:bg-gold'
              : 'bg-white/15 group-hover:bg-white/40'
          return (
            <li key={step.slug} className="flex-1">
              <Link
                href={`/day-one-citizen/${step.slug}`}
                aria-label={`Section ${step.number}: ${step.title}`}
                aria-current={isCurrent ? 'step' : undefined}
                title={`${step.number} · ${step.short}`}
                className="group block py-2"
              >
                <span className={`block h-1.5 rounded-full transition-colors ${bar}`} />
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

/** One action, one link — for readers who skim past the full section. */
export function DoThisNow({ slug }: { slug: string }) {
  const step = getStep(slug)
  if (!step) return null
  return (
    <aside
      aria-label="Do this now"
      className="rounded-2xl border border-gold/25 border-l-4 border-l-gold bg-navyLight/40 p-5 shadow-[0_0_30px_-14px_rgba(240,192,64,0.35)] sm:p-6"
    >
      <p className="eyebrow">Do this now</p>
      <p className="mt-3 text-base leading-relaxed text-starwhite">{step.action}</p>
      <Link
        href={step.link.href}
        className="mt-3 inline-flex items-center gap-1.5 font-mono text-sm font-bold text-gold transition-colors hover:text-ember"
      >
        {step.link.label} <ArrowRight size={14} aria-hidden />
      </Link>
    </aside>
  )
}
