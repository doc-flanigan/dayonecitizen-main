// The twelve numbered Day One Citizen sections, in reading order.
// Drives the "Step N of 12" progress strip and the "Do this now" box on each
// section page, and the six-step path on the homepage.
//
// Every fact in `action` must already appear on that section's page — this
// file summarises, it never introduces new claims. Re-check when a page's
// prices, keys, or sizes change.

export type DayOneStep = {
  slug: string
  number: string
  /** Short label for the progress strip and homepage path. */
  short: string
  /** Full section title, as on the hub. */
  title: string
  /** One action for a skimming reader. Plain English, sentences < 25 words. */
  action: string
  link: { href: string; label: string }
}

export const DAY_ONE_STEPS: DayOneStep[] = [
  {
    slug: 'worth-buying',
    number: '01',
    short: 'Worth it?',
    title: 'Is Star Citizen worth buying?',
    action:
      'Decide yes or no before you spend anything. Not sure? Play for free during the next Free Fly event first.',
    link: { href: '/free-fly-events', label: 'When is the next Free Fly?' },
  },
  {
    slug: 'system-specs',
    number: '02',
    short: 'Check your PC',
    title: 'System specs and hardware',
    action:
      'Check your PC: 16 GB of RAM is the minimum and 32 GB is recommended. You also need an SSD with 150 GB free.',
    link: { href: '/day-one-citizen/buying-the-game', label: 'Next: how to buy' },
  },
  {
    slug: 'buying-the-game',
    number: '03',
    short: 'Buy with the code',
    title: 'How to actually buy the game',
    action:
      'Create your account on robertsspaceindustries.com with referral code STAR-GCQJ-N6NC. That adds 50,000 UEC to a new account.',
    link: { href: '/referral-code', label: 'Step-by-step code walkthrough' },
  },
  {
    slug: 'pledge-vs-purchase',
    number: '04',
    short: 'Pledge vs buy',
    title: 'Pledge vs purchase — what’s the difference?',
    action:
      'Nothing to do here. Read it once so the word “pledge” stops sounding strange, then pick a package.',
    link: { href: '/day-one-citizen/starter-package', label: 'Next: choose a package' },
  },
  {
    slug: 'starter-package',
    number: '05',
    short: 'Pick a package',
    title: 'Which starter package should you buy?',
    action:
      'Not sure? Get the Citizen Starter Pack — $45 on sale, $60 list as of September 2026. It is the cheapest way in.',
    link: { href: '/day-one-citizen/install', label: 'Next: install the game' },
  },
  {
    slug: 'install',
    number: '06',
    short: 'Install',
    title: 'Installing the game',
    action:
      'Before you press INSTALL, open the launcher’s Settings and point the Library Folder at an SSD with 150 GB free.',
    link: { href: '/day-one-citizen/rsi-launcher', label: 'Next: the RSI launcher' },
  },
  {
    slug: 'rsi-launcher',
    number: '07',
    short: 'Launcher',
    title: 'Using the RSI launcher',
    action:
      'Play on the LIVE channel. If the game ever misbehaves, select LIVE and click VERIFY — it takes fifteen to thirty minutes.',
    link: { href: '/day-one-citizen/first-launch', label: 'Next: first launch' },
  },
  {
    slug: 'first-launch',
    number: '08',
    short: 'First launch',
    title: 'Launching the game for the first time',
    action:
      'Once you wake up in your hab, press F1. That opens your mobiGlas, the wrist computer that holds your wallet and map.',
    link: { href: '/day-one-citizen/keybinds', label: 'Next: key binds' },
  },
  {
    slug: 'keybinds',
    number: '09',
    short: 'Key binds',
    title: 'Key binds you need to know',
    action:
      'Learn one combo first. Sit in the pilot seat and press Right Alt + R to make the ship flight ready.',
    link: { href: '/day-one-citizen/first-day', label: 'Next: your first day' },
  },
  {
    slug: 'first-day',
    number: '10',
    short: 'First day',
    title: 'Your first day in the ‘Verse',
    action:
      'Press F1 and check your wallet. Then head for the spaceport and call your ship at an ASOP terminal, the ship-retrieval kiosk.',
    link: { href: '/day-one-citizen/getting-around', label: 'Next: hab to hangar' },
  },
  {
    slug: 'getting-around',
    number: '11',
    short: 'Hab to hangar',
    title: 'Getting from your hab to the hangar',
    action:
      'Lost? Hold F on any kiosk or map board and choose Set Destination. A marker appears on your screen.',
    link: { href: '/day-one-citizen/first-flight', label: 'Next: your first flight' },
  },
  {
    slug: 'first-flight',
    number: '12',
    short: 'First flight',
    title: 'Your first flight',
    action:
      'In the pilot seat, press Right Alt + R and wait for the screens to load. Then press N to raise the landing gear.',
    link: { href: '/beyond-the-basics/quantum-travel', label: 'Then: quantum travel' },
  },
]

/** The six steps that carry a new player from curious to flying. */
export const HOME_PATH_SLUGS = [
  'worth-buying',
  'system-specs',
  'buying-the-game',
  'install',
  'getting-around',
  'first-flight',
] as const

export function getStep(slug: string): DayOneStep | undefined {
  return DAY_ONE_STEPS.find((s) => s.slug === slug)
}
