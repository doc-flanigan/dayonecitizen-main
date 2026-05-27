import { ArrowUpRight, Package } from 'lucide-react'

export default function StarterPackBanner() {
  if (new Date() > new Date('2026-05-30T06:00:00Z')) return null // May 29 midnight CST

  return (
    <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white">
      <a
        href="https://robertsspaceindustries.com/en/pledge/Packages/Generalist-DefenseCon-Starter-Pack-Warbond"
        target="_blank"
        rel="noopener noreferrer"
        className="container-wide flex items-center justify-center gap-2 px-4 py-2 text-center text-xs font-semibold tracking-wide hover:underline sm:text-sm"
        data-track="starter-pack-banner"
      >
        <Package size={16} aria-hidden className="shrink-0" />
        <span>
          <span className="hidden sm:inline">Last chance — Generalist DefenseCon Starter Pack (ship, paints, armor &amp; UEC) sale ends May 29 — </span>
          <span className="sm:hidden">Starter Pack sale ends May 29 — ship, paints, armor &amp; UEC — </span>
          get it on RSI
        </span>
        <ArrowUpRight size={14} aria-hidden className="shrink-0" />
      </a>
    </div>
  )
}
