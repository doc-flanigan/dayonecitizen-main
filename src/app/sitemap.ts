import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = [
    { url: '/', changeFrequency: 'weekly', priority: 1.0 },
    { url: '/day-one-citizen', changeFrequency: 'monthly', priority: 0.95 },
    { url: '/glossary', changeFrequency: 'weekly', priority: 0.9 },
    { url: '/about', changeFrequency: 'monthly', priority: 0.95 },
    { url: '/free-fly-events', changeFrequency: 'weekly', priority: 0.85 },
    { url: '/beyond-the-basics', changeFrequency: 'monthly', priority: 0.85 },
    { url: '/beyond-the-basics/adding-friends', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/beyond-the-basics/food-drink-survival', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/beyond-the-basics/party-management', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/beyond-the-basics/ccu-chains', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/beyond-the-basics/shops-directory', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/beyond-the-basics/ship-equipment', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/beyond-the-basics/inventory-management', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/tools', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/day-one-citizen/worth-buying', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/day-one-citizen/system-specs', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/day-one-citizen/buying-the-game', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/day-one-citizen/pledge-vs-purchase', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/day-one-citizen/starter-package', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/day-one-citizen/install', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/day-one-citizen/rsi-launcher', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/day-one-citizen/first-launch', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/day-one-citizen/keybinds', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/day-one-citizen/first-day', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/day-one-citizen/getting-around', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/day-one-citizen/first-flight', changeFrequency: 'monthly', priority: 0.8 },
  ] as const

  return routes.map((r) => ({
    url: `${SITE.url}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
