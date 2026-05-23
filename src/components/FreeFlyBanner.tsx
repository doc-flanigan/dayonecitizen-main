'use client'

import { ArrowUpRight, Rocket } from 'lucide-react'

// Update START and END for each Free Fly event
const EVENT_START = new Date('2026-05-16T17:00:00Z')
const EVENT_END = new Date('2026-05-28T00:00:00Z')

const END_LABEL = EVENT_END.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
})

export default function FreeFlyBanner() {
  const now = new Date()
  if (now < EVENT_START || now >= EVENT_END) return null

  return (
    <div style={{ backgroundColor: '#ff5500' }} className="text-white">
      <a
        href="https://freeflyevent.com"
        target="_blank"
        rel="noopener noreferrer"
        className="container-wide flex items-center justify-center gap-2 px-4 py-2 text-center text-xs font-semibold tracking-wide hover:underline sm:text-sm"
        data-track="free-fly-banner"
      >
        <Rocket size={16} aria-hidden className="shrink-0" />
        <span>
          <span className="hidden sm:inline">
            Star Citizen Free Fly is live — play free until {END_LABEL}, no purchase needed.{' '}
          </span>
          <span className="sm:hidden">Free Fly live — play Star Citizen free until {END_LABEL}. </span>
          Details at freeflyevent.com
        </span>
        <ArrowUpRight size={14} aria-hidden className="shrink-0" />
      </a>
    </div>
  )
}
