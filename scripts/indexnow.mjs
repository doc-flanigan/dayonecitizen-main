// Submit all site URLs to Bing via IndexNow
// Usage: node scripts/indexnow.mjs

const KEY = 'bf4f03170f12e3ab3fc1f4b8b00ec994'
const HOST = 'dayonecitizen.com'

const urls = [
  `https://${HOST}/`,
  `https://${HOST}/glossary`,
  `https://${HOST}/tools`,
  `https://${HOST}/about`,
  `https://${HOST}/free-fly-events`,
  `https://${HOST}/day-one-citizen`,
  `https://${HOST}/day-one-citizen/worth-buying`,
  `https://${HOST}/day-one-citizen/system-specs`,
  `https://${HOST}/day-one-citizen/buying-the-game`,
  `https://${HOST}/day-one-citizen/pledge-vs-purchase`,
  `https://${HOST}/day-one-citizen/install`,
  `https://${HOST}/day-one-citizen/rsi-launcher`,
  `https://${HOST}/day-one-citizen/first-launch`,
  `https://${HOST}/day-one-citizen/keybinds`,
  `https://${HOST}/day-one-citizen/first-day`,
  `https://${HOST}/day-one-citizen/getting-around`,
  `https://${HOST}/day-one-citizen/first-flight`,
  `https://${HOST}/day-one-citizen/starter-package`,
]

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
})

if (res.ok) {
  console.log(`✅ IndexNow: submitted ${urls.length} URLs (HTTP ${res.status})`)
} else {
  const body = await res.text()
  console.error(`❌ IndexNow failed: HTTP ${res.status} — ${body}`)
  process.exit(1)
}
