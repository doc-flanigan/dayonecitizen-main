// Curated, plain-text map of the site, consumed by the /llms.txt route handler
// (src/app/llms.txt/route.ts) so AI answer engines — ChatGPT, Perplexity,
// Copilot, Google AI Overviews, Claude — get a clean, structured index of what
// dayonecitizen.com covers and where. Keep these sections in step with the
// routes in src/app/sitemap.ts whenever pages are added or removed.

export type LlmsEntry = { title: string; path: string; summary: string }
export type LlmsSection = { heading: string; blurb?: string; entries: LlmsEntry[] }

export const LLMS_SECTIONS: LlmsSection[] = [
  {
    heading: 'Start here',
    entries: [
      {
        title: 'dayonecitizen.com — Star Citizen for brand-new players',
        path: '/',
        summary:
          'Plain-English guide to Star Citizen for people who have never played: what it is, how to start, and what every term means.',
      },
    ],
  },
  {
    heading: 'Day One Citizen — the new-player path',
    blurb:
      'Twelve guides in order, from deciding whether to buy through your first flight.',
    entries: [
      {
        title: 'Star Citizen New Player Guide (index)',
        path: '/day-one-citizen',
        summary:
          'The full step-by-step path for a brand-new player, linking all twelve Day One guides in order.',
      },
      {
        title: 'Is Star Citizen Worth Buying?',
        path: '/day-one-citizen/worth-buying',
        summary:
          'An honest look at what you get today, what is still unfinished, and how to try the game free first.',
      },
      {
        title: 'Star Citizen System Requirements',
        path: '/day-one-citizen/system-specs',
        summary:
          'Minimum and recommended PC specs, plus the hardware choices that matter most for performance.',
      },
      {
        title: 'How to Buy Star Citizen',
        path: '/day-one-citizen/buying-the-game',
        summary:
          'Step by step: create an RSI account, apply a referral code for free UEC, and choose a package.',
      },
      {
        title: 'Pledge vs Purchase Explained',
        path: '/day-one-citizen/pledge-vs-purchase',
        summary:
          'What "pledge" means, how ship insurance (including LTI) works, and melting for store credit.',
      },
      {
        title: 'Starter Packages Compared',
        path: '/day-one-citizen/starter-package',
        summary:
          'All eight Star Citizen starter packages compared, from the cheapest Citizen Starter upward.',
      },
      {
        title: 'How to Install Star Citizen',
        path: '/day-one-citizen/install',
        summary:
          'Download the RSI Launcher, install to an SSD, and get through shader compilation.',
      },
      {
        title: 'Using the RSI Launcher',
        path: '/day-one-citizen/rsi-launcher',
        summary:
          'LIVE vs PTU vs EPTU builds, switching channels, and verifying game files when something breaks.',
      },
      {
        title: 'Your First Launch',
        path: '/day-one-citizen/first-launch',
        summary:
          'Character creation and what happens the first time you load into the game.',
      },
      {
        title: 'Keybinds for New Players',
        path: '/day-one-citizen/keybinds',
        summary:
          'The on-foot, flight, and mobiGlas keybinds new players actually need, and how to remap them.',
      },
      {
        title: 'Your First Day',
        path: '/day-one-citizen/first-day',
        summary:
          'Ten things to do on your first day in the ‘Verse, from the ASOP terminal to your first mission.',
      },
      {
        title: 'Getting from Hab to Hangar',
        path: '/day-one-citizen/getting-around',
        summary:
          'How to reach your ship in all four cities: Lorville, Area18, New Babbage, and Orison.',
      },
      {
        title: 'Your First Flight',
        path: '/day-one-citizen/first-flight',
        summary:
          'Power on, clear the hangar, fly, make your first quantum jump, and land.',
      },
    ],
  },
  {
    heading: 'Beyond the Basics',
    blurb: 'Guides for players who are past their first day.',
    entries: [
      {
        title: 'Beyond the Basics (index)',
        path: '/beyond-the-basics',
        summary: 'Seven guides for early players past the new-player path.',
      },
      {
        title: 'How to Add Friends',
        path: '/beyond-the-basics/adding-friends',
        summary: 'Find players by RSI handle, send requests, and invite them to your group.',
      },
      {
        title: 'Forming and Managing a Party',
        path: '/beyond-the-basics/party-management',
        summary: 'Create a party so everyone lands on the same server together.',
      },
      {
        title: 'Food, Drink & Survival',
        path: '/beyond-the-basics/food-drink-survival',
        summary: 'Hunger and thirst meters, the debuffs to avoid, and where to buy food.',
      },
      {
        title: 'Inventory Management',
        path: '/beyond-the-basics/inventory-management',
        summary: 'Personal vs ship storage and moving gear between stations.',
      },
      {
        title: 'In-Game Shops Directory',
        path: '/beyond-the-basics/shops-directory',
        summary: 'Where to buy armor, weapons, and ship parts across the main cities.',
      },
      {
        title: 'Ship Equipment Guide',
        path: '/beyond-the-basics/ship-equipment',
        summary: 'Power plants, coolers, quantum drives, shields, and weapons explained.',
      },
      {
        title: 'CCU Chains & Savings',
        path: '/beyond-the-basics/ccu-chains',
        summary: 'Save money on ship upgrades by building Cross-Chassis Upgrade chains.',
      },
    ],
  },
  {
    heading: 'Report a Bug',
    blurb: 'A plain-English walkthrough of the Star Citizen Issue Council.',
    entries: [
      {
        title: 'How to Report a Star Citizen Bug',
        path: '/report-a-bug',
        summary: 'The full process for reporting a bug through the Issue Council.',
      },
      {
        title: 'Gathering Evidence',
        path: '/report-a-bug/gathering-evidence',
        summary: 'Find your build number, Game.log, and DxDiag, and capture a screenshot or video.',
      },
      {
        title: 'Searching the Council',
        path: '/report-a-bug/searching-the-council',
        summary: 'Search for an existing report before you file a new one.',
      },
      {
        title: 'Filing a Report',
        path: '/report-a-bug/filing-a-report',
        summary: 'Pick the right version and channel, write clear steps, and attach evidence.',
      },
      {
        title: 'After You File',
        path: '/report-a-bug/after-you-file',
        summary: 'What the Issue Council statuses mean and how community confirmations help.',
      },
    ],
  },
  {
    heading: 'Reference & community',
    entries: [
      {
        title: 'Star Citizen Glossary',
        path: '/glossary',
        summary: "150+ Star Citizen terms, acronyms, and 'Verse slang defined in plain English.",
      },
      {
        title: 'Free Fly Events',
        path: '/free-fly-events',
        summary: 'When you can play Star Citizen free with no purchase, plus past and upcoming windows.',
      },
      {
        title: 'Community Tools',
        path: '/tools',
        summary: 'The best fan-made tools: fleet viewer, DPS calculator, and trade-route planner.',
      },
      {
        title: 'About / What o7 Means',
        path: '/about',
        summary: 'Why this unofficial fan site exists, who makes it, and what the o7 salute means.',
      },
    ],
  },
]
