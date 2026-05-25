import { ArrowUpRight, Gift } from 'lucide-react'

export default function GiveawayBanner() {
  if (new Date() > new Date('2026-05-28T06:00:00Z')) return null

  return (
    <div className="bg-gradient-to-r from-gold via-goldDark to-gold text-navy">
      <a
        href="https://www.freeflyevent.com/giveaway.html"
        target="_blank"
        rel="noopener noreferrer"
        className="container-wide flex items-center justify-center gap-2 px-4 py-2 text-center text-xs font-semibold tracking-wide hover:underline sm:text-sm"
        data-track="giveaway-banner"
      >
        <Gift size={16} aria-hidden className="shrink-0" />
        <span>
          <span className="hidden sm:inline">A Star Citizen Game Package giveaway is happening — </span>
          <span className="sm:hidden">Star Citizen Game Package giveaway — </span>
          enter free at freeflyevent.com
        </span>
        <ArrowUpRight size={14} aria-hidden className="shrink-0" />
      </a>
    </div>
  )
}
