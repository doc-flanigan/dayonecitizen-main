/**
 * The next confirmed or upcoming Free Fly event.
 * Update this object whenever a new event is announced.
 * The free-fly-events page and the /api/calendar/free-fly route both derive
 * from this — no other files need editing.
 */
export const NEXT_FREE_FLY = {
  id: 'foundation-festival-2026',
  name: 'Foundation Festival 2026 Free Fly',
  /** ISO 8601 UTC — event open for free play */
  start: '2026-07-29T16:00:00Z',
  /** ISO 8601 UTC — event ends. CIG published only "through August 10"
   *  (comm-link 21211), no time — end-of-day UTC used until one is posted. */
  end: '2026-08-10T23:59:00Z',
  description:
    'Star Citizen is free to play during Foundation Festival 2026 with five ships to try. No purchase required — create a free RSI account, download the launcher, and fly. Use a referral code at signup to receive 50,000 UEC bonus: https://dayonecitizen.com/free-fly-events',
  url: 'https://dayonecitizen.com/free-fly-events',
  /** Human-readable label shown on the banner */
  label: 'July 29 – August 10, 2026',
  /** Short headline used on the banner */
  headline: 'Foundation Festival — Free Fly live now.',
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
