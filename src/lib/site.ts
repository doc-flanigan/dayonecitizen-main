export const SITE = {
  name: 'dayonecitizen.com',
  shortName: 'dayonecitizen',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dayonecitizen.com',
  hubUrl: process.env.NEXT_PUBLIC_HUB_URL ?? 'https://dayonecitizen.com',
  referralUrl:
    process.env.NEXT_PUBLIC_REFERRAL_URL ??
    'https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC',
  referralCode: 'STAR-GCQJ-N6NC',
  referralBonusUEC: '50,000 UEC',
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
  { href: '/report-a-bug', label: 'Report a Bug' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/tools', label: 'Tools' },
  { href: '/about', label: 'About' },
] as const

export const HERO_IMAGES: { src: string; alt: string }[] = [
  { src: '/images/hero/hero-01.jpg', alt: 'A UEE Bengal carrier in orbit high above a planet' },
  { src: '/images/hero/hero-02.jpg', alt: 'An armored trooper overlooking a Star Citizen city skyline' },
  { src: '/images/hero/hero-03.jpg', alt: 'A spacecraft backlit by the sun on a snowy planet surface' },
  { src: '/images/hero/hero-04.jpg', alt: 'The interior of a capital-ship hangar with docked spacecraft' },
  { src: '/images/hero/hero-05.jpg', alt: 'A spacecraft in orbit above a cloud-wrapped planet' },
  { src: '/images/hero/hero-06.jpg', alt: 'A starship and ground rover on a misty frontier moon' },
  { src: '/images/hero/hero-07.jpg', alt: 'A pilot beside a ship in an orange desert dust storm' },
  { src: '/images/hero/hero-08.jpg', alt: 'A glowing blue orbital hologram inside a space station' },
  { src: '/images/hero/hero-09.jpg', alt: 'A large industrial capital ship seen up close' },
  { src: '/images/hero/hero-10.jpg', alt: 'A banded gas giant framed by a rocky canyon arch' },
  { src: '/images/hero/hero-11.jpg', alt: 'A spacecraft streaking through quantum travel' },
  { src: '/images/hero/hero-12.jpg', alt: 'A starship silhouetted against a golden sunset on a mountain ridge' },
  { src: '/images/hero/hero-13.jpg', alt: 'A Sabre fighter banking over a green planet' },
  { src: '/images/hero/hero-14.jpg', alt: 'A Hammerhead gunship patrolling above a cratered moon' },
  { src: '/images/hero/hero-15.jpg', alt: 'A formation of fighters over a lake at sunset' },
  { src: '/images/hero/hero-16.jpg', alt: 'Two bombers flying above golden sunset clouds' },
  { src: '/images/hero/hero-17.jpg', alt: 'An F8C Lightning on a landing pad in a hazy city' },
  { src: '/images/hero/hero-18.jpg', alt: 'An Idris frigate firing its railgun in a bright flash' },
]
