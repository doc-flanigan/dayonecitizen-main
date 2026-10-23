// The Beyond the Basics guides, in hub order. One list feeds the hub cards,
// the homepage "Every guide" index and the RelatedGuides block on each guide,
// so a new guide only needs adding here to be linked everywhere.
//
// CCU chains lives at /beyond-the-basics/ccu-chains but is listed under Tools
// ("Already own a ship?") since 2026-10-02, so it is deliberately not here.

export type BeyondTheBasicsGuide = {
  slug: string
  title: string
  description: string
}

export const BEYOND_THE_BASICS_GUIDES: BeyondTheBasicsGuide[] = [
  {
    slug: 'quantum-travel',
    title: 'How to Quantum Travel',
    description:
      'Hold B for NAV mode, middle-click for QT mode, then let the drive auto-calibrate before you jump. Every step explained — plus the Starmap, fuel, and interdiction.',
  },
  {
    slug: 'adding-friends',
    title: 'How to Add Friends',
    description:
      'Four ways to add friends in Star Citizen — via the RSI website, the main menu, your mobiGlas, and by walking up to someone in the world.',
  },
  {
    slug: 'food-drink-survival',
    title: 'Food, Drink & Survival',
    description:
      'Your character gets hungry and thirsty. Here is what the meters mean, what happens when they run low, and how food and drink ratings work.',
  },
  {
    slug: 'party-management',
    title: 'Creating and Managing a Party',
    description:
      'How to invite friends into a party, get everyone onto the same server, share mission objectives, and crew a multi-crew ship together.',
  },
  {
    slug: 'shops-directory',
    title: 'In-Game Shops Directory',
    description:
      'Where to buy weapons, armor, ship parts, and food in New Babbage, Area18, and Lorville — plus tips for getting the best prices.',
  },
  {
    slug: 'ship-equipment',
    title: 'Ship Equipment & Components',
    description:
      'Power plants, coolers, shields, weapons — what each component does, how grades affect your radar signature, and how to swap parts at a ship terminal.',
  },
  {
    slug: 'inventory-management',
    title: 'Managing Your Inventory',
    description:
      'Personal inventory, ship cargo hold, and local storage — how to move items between them, what persists between sessions, and why you should unload before an insurance claim.',
  },
  {
    slug: 'redeem-codes',
    title: 'Redeem Codes & Referral Codes',
    description:
      'The codes that actually work in Star Citizen — where to enter a referral code for 50,000 UEC, how promo codes work, and how to spot the fake code lists.',
  },
]
