'use client'

import Link from 'next/link'
import { Rocket } from 'lucide-react'
import { NEXT_FREE_FLY } from '../data/next-free-fly'

const EVENT_START = new Date(NEXT_FREE_FLY.start)
const EVENT_END = new Date(NEXT_FREE_FLY.end)

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
      <Link
        href="/free-fly-events"
        className="container-wide flex items-center justify-center gap-2 px-4 py-2 text-center text-xs font-semibold tracking-wide hover:underline sm:text-sm"
        data-track="free-fly-banner"
      >
        <Rocket size={16} aria-hidden className="shrink-0" />
        <span>
          <span className="hidden sm:inline">
            Star Citizen Free Fly is live — play free until {END_LABEL}, no purchase needed.{' '}
          </span>
          <span className="sm:hidden">Free Fly live — play Star Citizen free until {END_LABEL}. </span>
          See the details
        </span>
      </Link>
    </div>
  )
}
