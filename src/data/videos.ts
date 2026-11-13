/**
 * Day One Citizen YouTube videos. One record per video drives the on-page embed (VideoEmbed),
 * its VideoObject JSON-LD, and timestamp links from other guides (videoAt).
 * Chapter times match the YouTube description (ops/area18-tutorial-youtube.md in sc-portfolio).
 */
export type VideoChapter = { t: number; name: string }
export type Video = {
  id: string
  title: string
  description: string
  uploadDate: string // ISO date
  durationIso: string // ISO 8601
  poster: string // local poster image (served from this site, so nothing loads from YouTube until play)
  chapters: VideoChapter[]
}

export const AREA18_TUTORIAL: Video = {
  id: 'n0RNY7yzFac',
  title: 'Your First Day in Star Citizen: Area 18 Tutorial, Explained',
  description:
    "The game's own new-player tutorial, start to finish, in Area 18: character creation, choosing your home, the mobiGlas, your first shop, the Metro, your first ship, takeoff, flight controls, quantum travel and landing.",
  uploadDate: '2026-11-12',
  durationIso: 'PT11M43S',
  poster: '/images/videos/area18-tutorial-thumb.webp',
  chapters: [
    { t: 0, name: 'Welcome' },
    { t: 11, name: 'Main menu and character creation' },
    { t: 78, name: 'The tutorial and choosing your home' },
    { t: 141, name: 'Waking up in your hab and the mobiGlas' },
    { t: 210, name: 'Your first outing' },
    { t: 249, name: 'Area 18' },
    { t: 291, name: 'Shopping at Cubby Blast' },
    { t: 324, name: 'Using the map' },
    { t: 351, name: 'Riding the Metro' },
    { t: 382, name: 'Riker Memorial Spaceport and Fleet Manager' },
    { t: 441, name: 'Storage Access and boarding your ship' },
    { t: 496, name: 'Getting permission to take off' },
    { t: 528, name: 'Takeoff' },
    { t: 539, name: 'Flight controls' },
    { t: 603, name: 'Quantum travel' },
    { t: 653, name: 'Landing at Baijini Point' },
    { t: 669, name: '...that happens' },
    { t: 684, name: 'Join us' },
  ],
}

export const videoUrl = (v: Video) => `https://www.youtube.com/watch?v=${v.id}`
/** Link to a moment in the video, e.g. from a guide section. */
export const videoAt = (v: Video, seconds: number) => `https://youtu.be/${v.id}?t=${seconds}`

/** schema.org VideoObject with chapters as Clip key moments. */
export function videoJsonLd(v: Video, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: v.title,
    description: v.description,
    thumbnailUrl: [`${siteUrl}${v.poster}`, `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`],
    uploadDate: v.uploadDate,
    duration: v.durationIso,
    embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
    contentUrl: videoUrl(v),
    hasPart: v.chapters.map((c, i) => ({
      '@type': 'Clip',
      name: c.name,
      startOffset: c.t,
      ...(v.chapters[i + 1] ? { endOffset: v.chapters[i + 1].t } : {}),
      url: `${videoUrl(v)}&t=${c.t}`,
    })),
  }
}
