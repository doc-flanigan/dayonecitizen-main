'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Rocket } from 'lucide-react'
import { NEXT_FREE_FLY, getFreeFlyStatus } from '../data/next-free-fly'
import { useServerFreeFlyActive } from './FreeFlyStatusProvider'

const EVENT_END = new Date(NEXT_FREE_FLY.end)

const END_LABEL = EVENT_END.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
})

export default function FreeFlyBanner() {
  // Start from the server's answer so hydration matches the HTML. The server
  // HTML can be up to an hour old, so re-check the clock after mount and then
  // every minute (the page may stay open across the start or end time).
  const [active, setActive] = useState(useServerFreeFlyActive())
  useEffect(() => {
    const check = () => setActive(getFreeFlyStatus() === 'active')
    check()
    const id = setInterval(check, 60_000)
    return () => clearInterval(id)
  }, [])
  if (!active) return null

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
