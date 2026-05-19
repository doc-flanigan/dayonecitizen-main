import { ArrowUpRight, Gift } from 'lucide-react'

export default function GiveawayBanner() {
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
          <span className="hidden sm:inline">Star Citizen giveaway happening now — </span>
          <span className="sm:hidden">Star Citizen giveaway — </span>
          enter free at freeflyevent.com
        </span>
        <ArrowUpRight size={14} aria-hidden className="shrink-0" />
      </a>
    </div>
  )
}
