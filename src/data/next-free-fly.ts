/**
 * The next confirmed or upcoming Free Fly event.
 * Update this object whenever a new event is announced.
 * The free-fly-events page derives from this — no other files need editing.
 * (The .ics feed lives on freeflyevent.com/free-fly.ics; /api/calendar/free-fly
 * 301s there via next.config.mjs.)
 */
export const NEXT_FREE_FLY = {
  id: 'iae-2026',
  name: 'IAE 2956 Free Fly',
  /** ISO 8601 UTC — event open for free play */
  start: '2026-11-13T16:00:00Z',
  /** ISO 8601 UTC — event ends. Time taken from the Add-to-calendar file on
   *  comm-link 21389 ("Countdown to IAE 2956"): 2026-11-27 20:00 UTC. */
  end: '2026-11-27T20:00:00Z',
  description:
    'Star Citizen is free to play during the Intergalactic Aerospace Expo 2956 at New Babbage, with 200+ ships and vehicles to try. No purchase required — create a free RSI account, download the launcher, and fly. Use a referral code at signup to receive 50,000 UEC bonus: https://dayonecitizen.com/free-fly-events',
  url: 'https://dayonecitizen.com/free-fly-events',
  /** Human-readable label shown on the banner */
  label: 'November 13 – 27, 2026',
  /** Short headline used on the banner */
  headline: 'IAE 2956 Free Fly (November 13 – 27, 2026).',
}

export type FreeFlyEvent = typeof NEXT_FREE_FLY

export type FreeFlyStatus = 'upcoming' | 'active' | 'ended'

/**
 * Where NEXT_FREE_FLY sits relative to now.
 *
 * Pages that describe the event MUST branch on this instead of hardcoding
 * "live right now". An earlier Free Fly window ended and this
 * page went on claiming a live event for eight days, because the copy was
 * written by hand during the event and nobody edited it afterwards. Any page
 * using this must also set `export const revalidate` — otherwise the status is
 * frozen at build time and the bug comes straight back.
 */
export function getFreeFlyStatus(now: Date = new Date()): FreeFlyStatus {
  if (now < new Date(NEXT_FREE_FLY.start)) return 'upcoming'
  if (now <= new Date(NEXT_FREE_FLY.end)) return 'active'
  return 'ended'
}

/** Format a UTC ISO string as YYYYMMDDTHHmmssZ for iCalendar */
export function toICalDate(iso: string): string {
  return iso.replace(/[-:]/g, '').replace('.000', '')
}

/** Build a Google Calendar "Add" URL for the event */
export function googleCalendarUrl(event: FreeFlyEvent): string {
  const fmt = (iso: string) =>
    iso.replace(/[-:]/g, '').replace('.000', '').replace('Z', 'Z')
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.name,
    dates: `${fmt(event.start)}/${fmt(event.end)}`,
    details: event.description,
    location: 'Star Citizen (online)',
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}
