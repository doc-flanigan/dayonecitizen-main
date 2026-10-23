import ChunkLoadNoThrowPlugin from './chunk-load-no-throw.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Retry, then wait (never throw) on a failed JS chunk, so a resource that
  // Google's renderer skips can't blank the page. See chunk-load-no-throw.mjs.
  webpack(config, { isServer, webpack }) {
    if (!isServer) config.plugins.push(new ChunkLoadNoThrowPlugin(webpack))
    return config
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Free Fly calendar feed moved to its owner site (2026-10-02 ownership
      // call: freeflyevent.com owns Free Fly dates). Existing subscribers
      // follow the 301 to the single feed built from freeflyevent's event list.
      {
        source: '/api/calendar/free-fly',
        destination: 'https://freeflyevent.com/free-fly.ics',
        permanent: true,
      },
      // Misspelled section slug that Google picked up from a bad link
      // ("dayone-citizen" for "day-one-citizen"); it 404ed (GSC, 2026-10-15).
      {
        source: '/dayone-citizen/:path*',
        destination: '/day-one-citizen/:path*',
        permanent: true,
      },
      // Old-brand domains -> new-brand domain, path-preserving (1:1).
      // This sends every backlink and Google ranking signal from the
      // o7citizen.com era to dayonecitizen.com, regardless of which path
      // someone bookmarked. Keep these in place permanently.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'o7citizen.com' }],
        destination: 'https://dayonecitizen.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.o7citizen.com' }],
        destination: 'https://dayonecitizen.com/:path*',
        permanent: true,
      },
      // Older typo / alternate-TLD domains also funnel into the new brand.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'o7citizens.com' }],
        destination: 'https://dayonecitizen.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.o7citizens.com' }],
        destination: 'https://dayonecitizen.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'o7citizen.gg' }],
        destination: 'https://dayonecitizen.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.dayonecitizen.com' }],
        destination: 'https://dayonecitizen.com/:path*',
        permanent: true,
      },
      // Retired routes — keep these so old email links and search-engine
      // results don't 404 while we lean the site toward Day One Citizen.
      // Both 308 to the homepage; visitors land on a useful page.
      { source: '/weekly-update', destination: '/', permanent: true },
      { source: '/weekly-update/:path*', destination: '/', permanent: true },
      // /o7-meaning is now /about. 301 passes SEO equity to the new URL.
      { source: '/o7-meaning', destination: '/about', permanent: true },
      { source: '/o7-meaning/', destination: '/about', permanent: true },
    ]
  },
}

export default nextConfig
