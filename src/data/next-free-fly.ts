/**
 * The next confirmed or upcoming Free Fly event.
 * Update this object whenever a new event is announced.
 * The free-fly-events page and the /api/calendar/free-fly route both derive
 * from this — no other files need editing.
 */
export const NEXT_FREE_FLY = {
  id: 'defensecon-2026',
  name: 'DefenseCon 2956 Free Fly',
  /** ISO 8601 UTC — event open for free play */
  start: '2026-05-14T17:00:00Z',
  /** ISO 8601 UTC — event ends */
  end: '2026-05-27T17:00:00Z',
  description:
    'Star Citizen is free to play during DefenseCon 2956. No purchase required — create a free RSI account, download the launcher, and fly. Use a referral code at signup to receive 50,000 UEC bonus: https://dayonecitizen.com/free-fly-events',
  url: 'https://dayonecitizen.com/free-fly-events',
  /** Human-readable label shown on the banner */
  label: 'May 14–27, 2026',
  /** Short headline used on the banner */
  headline: 'DefenseCon — Free Fly window confirmed.',
}

export type FreeFlyEvent = typeof NEXT_FREE_FLY

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
