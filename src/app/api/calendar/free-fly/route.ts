import { NextResponse } from 'next/server'
import { NEXT_FREE_FLY, toICalDate } from '@/data/next-free-fly'

export const dynamic = 'force-static'

export function GET() {
  const e = NEXT_FREE_FLY
  const now = toICalDate(new Date().toISOString())

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//dayonecitizen.com//Free Fly Events//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${e.id}@dayonecitizen.com`,
    `DTSTAMP:${now}`,
    `DTSTART:${toICalDate(e.start)}`,
    `DTEND:${toICalDate(e.end)}`,
    `SUMMARY:${e.name}`,
    `DESCRIPTION:${e.description.replace(/\n/g, '\\n')}`,
    `URL:${e.url}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  return new NextResponse(ics, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `attachment; filename="${e.id}.ics"`,
      'Cache-Control': 'no-store',
    },
  })
}
