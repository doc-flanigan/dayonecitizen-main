import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BEYOND_THE_BASICS_GUIDES } from '@/data/beyond-the-basics'

/**
 * Sibling links at the foot of every Beyond the Basics guide. The cluster is
 * small, so it lists every other guide rather than a hand-picked few: each
 * guide links to all of its siblings, the hub, and the Day One guide.
 */
export default function RelatedGuides({ current }: { current: string }) {
  const others = BEYOND_THE_BASICS_GUIDES.filter((g) => g.slug !== current)

  return (
    <section aria-labelledby="related-guides" className="border-t border-white/5 py-14">
      <div className="container-wide px-4">
        <p className="eyebrow mb-3">Keep going</p>
        <h2 id="related-guides" className="heading-display text-2xl">
          More Beyond the Basics guides
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/beyond-the-basics/${guide.slug}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-navyLight/40 px-4 py-3 text-sm font-semibold text-starwhite transition-colors hover:border-gold/40 hover:text-gold"
              >
                {guide.title}
                <ArrowRight size={14} aria-hidden className="shrink-0 text-gold" />
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/beyond-the-basics" className="text-muted hover:text-starwhite">
            All Beyond the Basics guides
          </Link>
          <Link href="/day-one-citizen" className="text-muted hover:text-starwhite">
            New here? Start with the Day One guide
          </Link>
        </p>
      </div>
    </section>
  )
}
