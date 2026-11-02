/**
 * New Player Help Nights, mirrored from freeflyevent-site/src/data/help-nights.ts.
 * Update both together. Each entry links to its Discord Scheduled Event (Events >
 * Event 1 voice channel) through an invite-with-event link, so visitors who aren't
 * in the server yet can still join from the button.
 *
 * Saturdays 1-3pm US Central (Doc, 2026-11-02), which also lands in the UK/EU
 * evening. Past entries drop out automatically.
 */
export type HelpNight = {
  /** ISO 8601 with offset */
  startsAt: string
  durationMinutes: number
  /** https://discord.gg/<invite>?event=<eventId> */
  discordEventUrl: string
}

export const HELP_NIGHTS: HelpNight[] = [
  { startsAt: '2026-11-14T13:00:00-06:00', durationMinutes: 120, discordEventUrl: 'https://discord.gg/MpAUJs9xet?event=1566899366805897246' },
  { startsAt: '2026-11-21T13:00:00-06:00', durationMinutes: 120, discordEventUrl: 'https://discord.gg/MpAUJs9xet?event=1566899421801881620' },
  { startsAt: '2026-11-28T13:00:00-06:00', durationMinutes: 120, discordEventUrl: 'https://discord.gg/MpAUJs9xet?event=1566899429716271134' },
  { startsAt: '2026-12-05T13:00:00-06:00', durationMinutes: 120, discordEventUrl: 'https://discord.gg/MpAUJs9xet?event=1566899437434048614' },
]

/** The next help night that hasn't ended yet, or null. */
export function nextHelpNight(now: Date = new Date()): HelpNight | null {
  const upcoming = HELP_NIGHTS.filter(
    (n) => new Date(n.startsAt).getTime() + n.durationMinutes * 60_000 > now.getTime(),
  ).sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime())
  return upcoming[0] ?? null
}
