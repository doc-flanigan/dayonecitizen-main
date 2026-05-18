import { NextResponse } from 'next/server'
import { GLOSSARY } from '@/data/glossary'

// Rebuild at most once per hour; consumed by freeflyevent.com via ISR fetch
export const revalidate = 3600

export function GET() {
  return NextResponse.json(GLOSSARY, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
