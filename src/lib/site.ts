export const SITE = {
  name: 'dayonecitizen.com',
  shortName: 'dayonecitizen',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dayonecitizen.com',
  hubUrl: process.env.NEXT_PUBLIC_HUB_URL ?? 'https://dayonecitizen.com',
  referralUrl:
    process.env.NEXT_PUBLIC_REFERRAL_URL ??
    'https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC',
  referralCode: 'STAR-GCQJ-N6NC',
  ueecBonus: '50,000 UEC',
  // Bonus state lives in src/data/referral-bonus.ts and is maintained
  // automatically by the sc-news agent. Use isReferralBonusActive() at
  // render time to check current status.
  author: 'Doc_Flanigan',
  description:
    "Star Citizen for brand-new players — buying the game, installing it, your first flight. Plain English, no jargon. An unofficial fan site by Doc_Flanigan.",
  twitterHandle: '@dayonecitizen',
}

export const NAV_LINKS = [
  { href: '/day-one-citizen', label: 'Day One' },
  { href: '/beyond-the-basics', label: 'Beyond Basics' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/tools', label: 'Tools' },
  { href: '/about', label: 'About' },
] as const

export const HERO_IMAGES: { src: string; alt: string }[] = [
  { src: '/images/hero/hero-01.jpg', alt: 'Star Citizen spacecraft approaching a space station above a gas giant' },
  { src: '/images/hero/hero-02.jpg', alt: 'Explorer on foot on a rocky alien moon with a spacecraft in the distance' },
  { src: '/images/hero/hero-03.jpg', alt: 'Interior of a capital ship hangar with multiple docked spacecraft' },
  { src: '/images/hero/hero-04.jpg', alt: 'Aerial view of a Star Citizen landing zone city at dusk' },
  { src: '/images/hero/hero-05.jpg', alt: 'Two spacecraft flying in formation through an asteroid field' },
  { src: '/images/hero/hero-06.jpg', alt: 'Ground crew near a landed starship on an alien planet surface' },
  { src: '/images/hero/hero-07.jpg', alt: 'Star Citizen pilot cockpit view overlooking a space station dock' },
  { src: '/images/hero/hero-08.jpg', alt: 'Massive capital ship silhouetted against a bright star in deep space' },
  { src: '/images/hero/hero-09.jpg', alt: 'Quantum travel light-tunnel effect surrounding a spacecraft at jump' },
  { src: '/images/hero/hero-10.jpg', alt: 'Space station exterior with approaching ships against a nebula backdrop' },
  { src: '/images/hero/hero-11.jpg', alt: 'Star Citizen spacecraft hull detail with planet curvature in background' },
  { src: '/images/hero/hero-12.jpg', alt: 'Combat spacecraft banking through an asteroid field debris cloud' },
]
