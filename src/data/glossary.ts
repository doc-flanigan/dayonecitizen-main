export type GlossaryCategory =
  | 'Currency'
  | 'Ships'
  | 'Gameplay'
  | 'Community'
  | 'Technical'
  | 'Locations'
  | 'Weapons'
  | 'Components'

export type GlossaryTerm = {
  term: string
  definition: string
  category: GlossaryCategory
  also?: string
  /**
   * ISO YYYY-MM-DD of the last time the entry's factual claims were
   * verified against an authoritative source. Maintained by the
   * glossary-audit workflow (see `.github/workflows/glossary-audit.yml`).
   * Absent on entries that have never been audited yet.
   */
  lastVerified?: string
}

export const GLOSSARY: GlossaryTerm[] = [
  // ─────────────── Community / Slang ───────────────
  {
    term: 'o7',
    category: 'Community',
    definition:
      "A salute. The 'o' is a head and the '7' is an arm raised to the brow. You'll see it in chat, on Discord, and in patch notes. It means respect, hello, goodbye, or 'fly safe.'",
    also: '\\o, o7o',
  },
  {
    term: 'Fly Safe',
    category: 'Community',
    definition:
      "The standard SC sign-off. Goes at the end of streams, posts, and DMs. Often paired with o7. The community's version of 'godspeed.'",
  },
  {
    term: "the 'Verse",
    category: 'Community',
    definition:
      "Slang for the Star Citizen universe — the in-game world, lore, and community combined. 'See you in the 'Verse' is a common sign-off.",
    also: "'Verse,Verse",
  },
  {
    term: 'The Black',
    category: 'Community',
    definition:
      "Slang for empty deep space — far from any planet, station, or jump point. 'Lost in the black' means stranded, drifting, or just out exploring with nothing nearby.",
  },
  {
    term: 'Backer',
    category: 'Community',
    definition:
      "Anyone who has pledged for Star Citizen. The community's preferred term over 'customer' or 'player' because the game is crowdfunded.",
  },
  {
    term: 'Concierge',
    category: 'Community',
    definition:
      "Backer status for players who have pledged at least $1,000 USD lifetime — officially called the Chairman's Club. Perks include priority support, early access to certain sales, an extra Buyback Token each quarter, and tier rewards as spending milestones are reached. Gifted pledges don't count toward the total.",
    also: "Chairman's Club",
    lastVerified: '2026-07-01',
  },
  {
    term: "Chairman's Club",
    category: 'Community',
    definition:
      "The official name of the Concierge program, with levels based on lifetime pledge total: High Admiral ($1,000), Grand Admiral ($2,500), Space Marshal ($5,000), Wing Commander ($10,000), Praetorian ($15,000), and Legatus Navium ($25,000). Each level unlocks additional rewards, from exclusive in-game items up to Executive Edition ships at the top tiers.",
    also: 'Concierge',
    lastVerified: '2026-07-01',
  },
  {
    term: 'Whale',
    category: 'Community',
    definition:
      "Slang for a backer who has pledged thousands of dollars. Sometimes self-deprecating, sometimes critical. There's an entire economy of capital ships built around whales.",
    also: 'Whaling',
  },
  {
    term: 'CIG',
    category: 'Community',
    definition:
      'Cloud Imperium Games — the studio building Star Citizen and Squadron 42. Founded by Chris Roberts in 2012.',
  },
  {
    term: 'RSI',
    category: 'Community',
    definition:
      "Roberts Space Industries — both the in-fiction ship manufacturer and CIG's publishing label. The website you pledge through is rsi.com.",
  },
  {
    term: 'Chris Roberts',
    category: 'Community',
    definition:
      "Founder and CEO of CIG, director of Squadron 42. Wing Commander creator, ambitious visionary, and the face of every major announcement. Often abbreviated 'CR.'",
    also: 'CR',
  },
  {
    term: 'Sandi Gardiner',
    category: 'Community',
    definition:
      "VP at CIG, frequent on-camera host of Inside Star Citizen and major shows. Married to Chris Roberts. Often just called 'Sandi.'",
  },
  {
    term: 'Inside Star Citizen',
    category: 'Community',
    definition:
      "Weekly Thursday CIG video show showcasing in-development features. The most reliable 'what's CIG working on right now' source. Pronounced 'I-S-C.'",
    also: 'ISC',
  },
  {
    term: 'Letter from the Chairman',
    category: 'Community',
    definition:
      "Periodic written update from Chris Roberts on direction, philosophy, and milestones. Reads like a state-of-the-game address. Watch for these as big announcements approach.",
  },
  {
    term: 'Roadmap',
    category: 'Community',
    definition:
      "CIG's public progress tracker at rsi.com/roadmap. Lists features in development and target patches. Famously squishy on dates — read it as direction, not commitment.",
  },
  {
    term: 'Spectrum',
    category: 'Community',
    definition:
      "The official RSI community forum at robertsspaceindustries.com/spectrum. Ground zero for bug reports, org recruiting, and the occasional flame war.",
  },
  {
    term: 'CitizenCon',
    category: 'Community',
    definition:
      "CIG's fan convention, usually held in October, where major reveals, demos, and the next year's direction land. CIG is not holding a CitizenCon in 2026 in any form.",
  },
  {
    term: 'IAE',
    category: 'Community',
    definition:
      "Intergalactic Aerospace Expo — the in-game and IRL ship show held every November. Ships are free-fly each day and discounted for pledging.",
  },
  {
    term: 'Pledge',
    category: 'Community',
    definition:
      "What backers call buying a ship or game package. Star Citizen is crowdfunded, so you 'pledge' rather than 'purchase.'",
  },
  {
    term: 'Game Package',
    category: 'Community',
    definition:
      "The minimum purchase to play Star Citizen permanently. Includes a starter ship, access to all current and future PU content, and 10,000 UEC. RSI now sells one: the Star Citizen First Flight Pack, $60 list and $45 on sale as of October 2026. Squadron 42 is sold separately. Once you own a package, there is no subscription fee — ever.",
    also: 'Starter Package, Starter Pack, First Flight Pack',
  },
  {
    term: 'Invictus Launch Week',
    category: 'Community',
    definition:
      "CIG's annual Navy fleet showcase held in May. Military and Anvil ships are free to fly each day, new ships are revealed, and sales run across the catalog. Replaced by DefenseCon in 2026.",
    also: 'Invictus',
  },
  {
    term: 'DefenseCon',
    category: 'Community',
    definition:
      "CIG's 2026 military fleet showcase, replacing Invictus Launch Week. Hosted by Drake Interplanetary, DefenseCon 2956 ran May 14–27, 2026 as a Free Fly, with combat and defense-focused ships rentable across the event window.",
  },
  {
    term: 'Referral Code',
    category: 'Community',
    definition:
      "A unique code another backer shares with you. Using one when you create your account gives you 50,000 UEC free, and the referrer earns a small bonus reward.",
    also: 'STAR-XXXX-XXXX',
  },
  {
    term: 'Org',
    category: 'Community',
    definition:
      "Short for organization — a player-run guild or clan. Orgs run trade convoys, mining ops, combat patrols, and community events.",
  },
  {
    term: 'Squadron 42',
    category: 'Community',
    definition:
      "The single-player cinematic campaign set in the same universe — a separate game with a Hollywood cast (Mark Hamill, Gary Oldman). Sold separately from Star Citizen. It has its own Steam page for wishlisting, with a planned release of Q2 2027.",
    also: 'SQ42',
  },
  {
    term: 'UEE',
    category: 'Community',
    definition:
      "United Empire of Earth — the in-fiction human government that controls most of explored space. Its Navy, Marines, and Advocacy show up in lore and missions.",
  },
  {
    term: 'Vanduul',
    category: 'Community',
    definition:
      "Hostile alien race — nomadic raiders who attack human systems. The main antagonists of Squadron 42 lore. You'll see Vanduul ships (Scythe, Glaive) as enemies.",
  },
  {
    term: 'Banu',
    category: 'Community',
    definition:
      "Alien trader race — pacifist merchants known for the Defender ship. Their ships look like polished sea creatures. Friendly to humans.",
  },
  {
    term: "Xi'an",
    category: 'Community',
    definition:
      "Long-lived alien race with sleek, organic ship designs. The Khartu-Al and Nox come from Xi'an culture. Diplomatic relations with humans are complicated.",
  },
  {
    term: 'Tevarin',
    category: 'Community',
    definition:
      "Alien race conquered by humans during the Tevarin Wars. Lore-heavy backstory; the Esperia Prowler is a Tevarin ship preserved by enthusiasts.",
  },
  {
    term: 'FireMedicSlim',
    category: 'Community',
    definition:
      "Doc_Flanigan's friend and the sole reason DayOneCitizen exists. FireMedicSlim had the patience to sit down and walk Doc through Star Citizen when Doc was ready to quit — at which point everything clicked. He is also the reason Doc is now broke. Introducing someone to this game is a financial liability.",
  },
  {
    term: 'Daymar Rally',
    category: 'Community',
    definition:
      "A famous community event — a vehicle rally across Daymar's surface using Cyclones, Greycats, Tonks, and anything else with wheels. Fan-organized, regularly recurring.",
  },
  {
    term: 'WeFan',
    category: 'Community',
    definition:
      "Slang reaction — 'we, the fans' — used in arguments about whether CIG owes the community something specific. Often ironic.",
  },
  {
    term: 'Polish Pass',
    category: 'Community',
    definition:
      "A patch focused on bug-fixing and stability rather than new features. Often used hopefully ('we just need a polish pass') or sarcastically ('that polish pass didn't polish much').",
  },

  // ─────────────── Currency ───────────────
  {
    term: 'UEC',
    category: 'Currency',
    definition:
      'United Earth Credits — the in-game currency used for buying ships, weapons, and gear in the live game. UEC carries between play sessions and patches.',
  },
  {
    term: 'aUEC',
    category: 'Currency',
    definition:
      'Alpha UEC — the test-server currency used during Star Citizen alpha. It usually wipes when CIG resets the player database between major patches.',
  },
  {
    term: 'REC',
    category: 'Currency',
    definition:
      "Rental Equipment Credits — earned by playing Arena Commander or Star Marine. Used to rent ships and weapons for 7-day windows. Doesn't apply in the PU.",
  },
  {
    term: 'Store Credit',
    category: 'Currency',
    definition:
      "RSI-account credit (not real money), earned by melting pledges. Spendable on certain pledge items in the RSI store, but per the RSI Terms of Service it can't be converted back to cash.",
  },
  {
    term: 'Melt',
    category: 'Currency',
    definition:
      "To return a pledge for store credit. Unlike a real refund, melting is instant and the credit only spends inside the RSI store. Reversible via Buyback.",
    also: 'Melting',
  },
  {
    term: 'Buyback Token',
    category: 'Currency',
    definition:
      "Lets you re-buy a melted pledge using store credit. Every account gets one token per quarter, and Concierge members get one additional token each quarter. Extra tokens cannot be purchased. Buying back with new money doesn't need a token — the token is only for spending store credit.",
    lastVerified: '2026-07-01',
  },
  {
    term: 'CCU',
    category: 'Currency',
    definition:
      "Cross-Chassis Upgrade — a token that lets you upgrade one ship pledge to a more expensive ship by paying just the difference. Backers stockpile CCUs during sales.",
  },
  {
    term: 'CCU Game',
    category: 'Currency',
    definition:
      "The practice of buying long chains of CCUs during sales to upgrade a cheap starter ship up to an expensive one for less than full price. A backer mini-game in itself.",
    also: 'CCU Chain',
  },
  {
    term: 'LTI',
    category: 'Currency',
    definition:
      "Lifetime Insurance — a perk attached to certain ship pledges. It means if you lose the ship in-game, you can re-claim it indefinitely without paying an insurance premium.",
  },

  // ─────────────── Ships — Manufacturers ───────────────
  {
    term: 'Aopoa',
    category: 'Ships',
    definition:
      "Xi'an ship manufacturer — makes the Nox hover bike and the Khartu-al fighter. Xi'an designs are organic and alien-looking compared to anything humans build.",
    lastVerified: '2026-08-31',
  },
  {
    term: 'Consolidated Outland',
    category: 'Ships',
    definition:
      "Budget manufacturer known for the Mustang starter ship and the Nomad multi-role. Built for accessibility — the working-class alternative to Origin's luxury line.",
    also: 'CO',
    lastVerified: '2026-07-20',
  },
  {
    term: 'Gatac Manufacture',
    category: 'Ships',
    definition:
      "A Xi'an ship manufacturer that produces the Syulen — one of the few alien-made ships new players can fly. Xi'an engineering means unusual controls and exotic aesthetics.",
    lastVerified: '2026-11-02',
  },
  {
    term: 'Kruger Intergalactic',
    category: 'Ships',
    definition:
      "Manufacturer of snub fighters and light ships — including the Merlin parasite fighter and the P-72 Archimedes racing snub. Specializes in small, fast craft meant to be launched from larger ships.",
    lastVerified: '2026-08-24',
  },
  {
    term: 'Mirai',
    category: 'Ships',
    definition:
      "Manufacturer known for sleek, futuristic racing and combat ships — the Razor racing line and the Guardian fighter series. High-tech aesthetic, often used in competitive racing events.",
    lastVerified: '2026-08-24',
  },
  {
    term: 'Roberts Space Industries',
    category: 'Ships',
    definition:
      "The in-fiction ship manufacturer founded by the Roberts family — and the brand under which CIG sells Star Citizen. Makes the Aurora starter ship, the Constellation, and the Polaris.",
    also: 'RSI ships',
    lastVerified: '2026-08-24',
  },
  {
    term: 'Origin',
    category: 'Ships',
    definition:
      "Ship manufacturer known for sleek, luxury designs — the 300i, 600i, and the famous 890 Jump. Apple-meets-spaceship aesthetic.",
    lastVerified: '2026-08-24',
  },
  {
    term: 'Anvil',
    category: 'Ships',
    definition:
      "Military-grade ship manufacturer — Hornets, Carracks, the Valkyrie. Anvil ships are tough, utilitarian, and combat-focused.",
    lastVerified: '2026-09-28',
  },
  {
    term: 'Drake',
    category: 'Ships',
    definition:
      "Budget, rugged manufacturer — the Cutlass, Caterpillar, Corsair. Often described as the 'pickup truck' of the 'Verse. Loved by pirates and haulers alike.",
    lastVerified: '2026-08-24',
  },
  {
    term: 'MISC',
    category: 'Ships',
    definition:
      "Musashi Industrial and Starflight Concern — industrial manufacturer behind cargo ships like the Freelancer and Hull series, plus the Prospector miner.",
    lastVerified: '2026-08-24',
  },
  {
    term: 'Aegis',
    category: 'Ships',
    definition:
      "Older military manufacturer — the Avenger, Gladius, Vanguard, and Reclaimer. Aegis ships have a worn, military-surplus look.",
    lastVerified: '2026-07-27',
  },
  {
    term: 'Crusader Industries',
    category: 'Ships',
    definition:
      "Maker of the Mercury Star Runner, Ares, A1 Spirit, and the gigantic C2/M2/A2 Hercules. Civilian-and-military-spec hardware out of Orison.",
    lastVerified: '2026-09-27',
  },
  {
    term: 'Argo',
    category: 'Ships',
    definition:
      "Industrial utility manufacturer — the MPUV ('the Argo'), MOLE mining ship, RAFT cargo hauler, and SRV recovery vehicle. Boxy and purposeful.",
    lastVerified: '2026-07-27',
  },
  {
    term: 'Tumbril',
    category: 'Ships',
    definition:
      "Ground vehicle manufacturer — the Cyclone scout buggy and the Nova heavy tank. Treads, wheels, guns. Owned by Aopoa parent group.",
  },
  {
    term: 'Greycat',
    category: 'Ships',
    definition:
      "Personal vehicle and utility manufacturer — the PTV (mini buggy), ROC mining vehicle, STV scout buggy, and the multi-tool. Small, useful, everywhere.",
    lastVerified: '2026-10-05',
  },
  {
    term: 'Esperia',
    category: 'Ships',
    definition:
      "Specialty manufacturer reproducing rare alien ships for human pilots — Talon (Xi'an), Prowler (Tevarin), Glaive (Vanduul). Limited-edition pledges.",
    lastVerified: '2026-10-05',
  },

  // ─────────────── Ships — Specific ───────────────
  {
    term: 'Aurora',
    category: 'Ships',
    definition:
      "The smallest, cheapest starter ship from RSI. Cramped but capable of light cargo, basic combat, and short hauls. A common first ship for new backers.",
    also: 'Aurora MR, Aurora LN, Aurora CL, Aurora ES',
    lastVerified: '2026-07-27',
  },
  {
    term: 'Mustang',
    category: 'Ships',
    definition:
      "A starter ship from Consolidated Outland. Slightly nimbler than the Aurora, popular with new pilots who want to dogfight early.",
    also: 'Mustang Alpha, Mustang Beta, Mustang Delta, Mustang Gamma',
  },
  {
    term: 'Hornet',
    category: 'Ships',
    definition:
      "Anvil's iconic light fighter — the F7C series. Variants include the F7A military, F7C-M (ball turret), F7C-R (recon), and the wider F7-Mk II refresh. The 'workhorse' fighter.",
    lastVerified: '2026-11-02',
  },
  {
    term: 'Gladius',
    category: 'Ships',
    definition:
      "Aegis light fighter — fast, agile, light on cargo. Beloved by dogfighters and the meta darling for several patches running.",
    lastVerified: '2026-10-05',
  },
  {
    term: 'Avenger',
    category: 'Ships',
    definition:
      "Aegis multi-role light fighter — Titan (cargo), Stalker (bounty hunting cell), Warlock (EMP). Punches above its weight class for the price.",
    also: 'Avenger Titan, Avenger Stalker, Avenger Warlock',
    lastVerified: '2026-07-27',
  },
  {
    term: 'Vanguard',
    category: 'Ships',
    definition:
      "Aegis heavy fighter — Warden, Sentinel, Harbinger, Hoplite. Long-range, heavily armed, has a small living quarter behind the cockpit. The 'space SUV.'",
  },
  {
    term: 'Cutlass',
    category: 'Ships',
    definition:
      "Drake's iconic medium ship — Black (combat/transport), Red (medical), Blue (bounty), Steel (drop-ship). One of the most popular community ships.",
    lastVerified: '2026-09-28',
  },
  {
    term: 'Caterpillar',
    category: 'Ships',
    definition:
      "Drake's heavy cargo hauler — modular, ugly, beloved. Carries tons of SCU and a small fighter inside. The classic pirate ship.",
    lastVerified: '2026-07-20',
  },
  {
    term: 'Freelancer',
    category: 'Ships',
    definition:
      "MISC's medium freighter — DUR (explorer), MAX (cargo), MIS (combat). Popular trader ship for solo and small crews.",
    lastVerified: '2026-11-02',
  },
  {
    term: 'Constellation',
    category: 'Ships',
    definition:
      "RSI's flagship multi-crew ship line — Andromeda (combat), Aquila (exploration), Phoenix (luxury), Taurus (cargo). Some variants come with a P-52 Merlin snub fighter.",
    lastVerified: '2026-09-27',
  },
  {
    term: 'Carrack',
    category: 'Ships',
    definition:
      "Anvil's premier exploration ship — long-range, jumppoint-survey-ready, has a Pisces snub, a med bay, a rover bay, and a hangar. The 'home in space.'",
    lastVerified: '2026-07-20',
  },
  {
    term: '890 Jump',
    category: 'Ships',
    definition:
      "Origin's super-yacht — luxury VIP transport with a hangar and a lavish, multi-deck interior. The signature 'whale' ship and a frequent piracy target.",
    lastVerified: '2026-09-27',
  },
  {
    term: 'Hammerhead',
    category: 'Ships',
    definition:
      "Aegis heavy gunship — six manned turrets, designed to anchor a fleet against fighter swarms. Anti-snub specialist.",
    lastVerified: '2026-11-02',
  },
  {
    term: 'Polaris',
    category: 'Ships',
    definition:
      "RSI's destroyer-class capital ship with torpedo tubes and a hangar. The smallest 'capital' and the practical ceiling for most active orgs.",
  },
  {
    term: 'Idris',
    category: 'Ships',
    definition:
      "Aegis frigate — large multi-crew capital with multiple turrets, hangar, and multiple decks. Long-promised for player ownership; very expensive when it appears.",
    lastVerified: '2026-11-02',
  },
  {
    term: 'Javelin',
    category: 'Ships',
    definition:
      "Aegis destroyer — bigger than the Idris, requires a full org to crew. Sold during anniversary sales as a rare backer pledge.",
  },
  {
    term: 'Bengal',
    category: 'Ships',
    definition:
      "Massive UEE Navy carrier. NPC-only — players can't own one. The setpiece ship of Squadron 42.",
    lastVerified: '2026-07-20',
  },
  {
    term: 'Hull',
    category: 'Ships',
    definition:
      "MISC's modular cargo hauler line, from Hull A through Hull E. The biggest dedicated freighters in the game when fully loaded.",
    lastVerified: '2026-11-02',
  },
  {
    term: 'Reclaimer',
    category: 'Ships',
    definition:
      "Aegis large salvage ship — strips derelicts of hull plating and components. Multi-crew, slow, very profitable in Pyro.",
  },
  {
    term: 'Vulture',
    category: 'Ships',
    definition:
      "Drake's solo salvage ship. Smaller and more manageable than the Reclaimer. The new-player gateway into salvage gameplay.",
  },
  {
    term: 'Prospector',
    category: 'Ships',
    definition:
      "MISC solo mining ship — beam, scanner, ore cargo bays. The standard 'first miner' for new players in the mining loop.",
  },
  {
    term: 'MOLE',
    category: 'Ships',
    definition:
      "Argo Multi-Operator Laser Extractor — three-mining-laser group ship. Higher yield than the Prospector, but needs friends.",
  },
  {
    term: 'ROC',
    category: 'Ships',
    definition:
      "Greycat Remote Ore Collector — small ground vehicle for cracking and collecting gemstone deposits on planet surfaces. Easy money loop for new players.",
  },
  {
    term: 'Cyclone',
    category: 'Ships',
    definition:
      "Tumbril's small ground buggy. Variants: TR (turret), AA (anti-air), MT (missile turret), RC (racing), RN (reconnaissance). Fits in most medium ship cargo bays.",
    lastVerified: '2026-09-27',
  },
  {
    term: 'Nova',
    category: 'Ships',
    definition:
      "Tumbril Nova — heavy ground tank with treads, a main gun, and a coaxial. Slow, brutal, used for bunker assaults and ground PvP. Community calls it the 'Tonk.'",
    also: 'Tonk, the Tank',
  },
  {
    term: 'Tonk',
    category: 'Community',
    definition:
      "Community slang for the Tumbril Nova heavy tank. Sometimes also extended to the Anvil Ballista (anti-air vehicle on tracks). When someone says 'roll out the tonk,' they mean a tank push.",
  },
  {
    term: 'Ballista',
    category: 'Ships',
    definition:
      "Anvil ground anti-air vehicle — quad missile launcher on an 8-wheeled chassis. Used to deny airspace during ground engagements. Sometimes lumped under the 'tonk' label.",
    lastVerified: '2026-07-20',
  },
  {
    term: 'Pisces',
    category: 'Ships',
    definition:
      "The Anvil C8 — a small parasite snub stored in the Carrack and Carrack-class ships. Variants: standard, Expedition, X1 racing. Used for short-range scouting.",
    also: 'C8',
  },
  {
    term: 'Merlin',
    category: 'Ships',
    definition:
      "Kruger Intergalactic snub fighter housed in the Constellation line. Tiny, fast, and only useful when launched from a parent ship.",
  },
  {
    term: 'Nox',
    category: 'Ships',
    definition:
      "Aopoa Nox — a Xi'an-design hover bike. Quick, exposed, a popular racing and recon vehicle.",
  },
  {
    term: 'Ursa Rover',
    category: 'Ships',
    definition:
      "RSI Ursa — armored 4-wheeled rover. Often comes with the Constellation Aquila or sold separately. Solid for moon-side expeditions.",
  },

  // ─────────────── Ships — Aegis Dynamics ───────────────
  {
    term: 'Eclipse',
    category: 'Ships',
    definition:
      "Aegis single-seat stealth bomber. Built to sneak past enemy radar and deliver torpedoes to large targets. It carries almost no defensive weapons — the plan is that you never get spotted.",
    lastVerified: '2026-10-05',
  },
  {
    term: 'Redeemer',
    category: 'Ships',
    definition:
      "Aegis heavy gunship that blends fighter firepower with a small troop bay. A flying weapons platform that can also drop off a squad. Crew-optional but stronger with a full team.",
  },
  {
    term: 'Retaliator',
    category: 'Ships',
    definition:
      "Aegis large modular torpedo bomber designed to crack open capital ships. Its bay sections can be swapped for different mission types — bombers, crew quarters, or cargo.",
    also: 'Retaliator Bomber',
  },
  {
    term: 'Sabre',
    category: 'Ships',
    definition:
      "Aegis space superiority fighter — fast, stealthy, and capable. Trades some durability for better speed compared to the Hornet. Great for pilots who prefer finesse over brute force.",
    also: 'Sabre Comet, Sabre Firebird, Sabre Raven, Sabre Peregrine',
  },

  // ─────────────── Ships — Anvil Aerospace ───────────────
  {
    term: 'Arrow',
    category: 'Ships',
    definition:
      "Anvil's smallest, fastest combat ship. A nimble dogfighter that rewards hit-and-run tactics — just don't take too many hits. One of the most affordable dedicated fighters.",
    lastVerified: '2026-09-27',
  },
  {
    term: 'F8C Lightning',
    category: 'Ships',
    definition:
      "The civilian version of the UEE military's top-tier fighter. Exceptionally powerful and fast — one of the best combat ships a player can own, with a price tag to match.",
    also: 'Lightning',
    lastVerified: '2026-10-05',
  },
  {
    term: 'Gladiator',
    category: 'Ships',
    definition:
      "Anvil two-seat torpedo bomber. The pilot lines up the attack while a rear gunner keeps enemy fighters off their tail — classic bomber-crew teamwork.",
    lastVerified: '2026-10-05',
  },
  {
    term: 'Hawk',
    category: 'Ships',
    definition:
      "Anvil compact fighter with a built-in prisoner transport cell. Popular with bounty hunters because you can chase down a target, disable their ship, and bring them back alive.",
  },
  {
    term: 'Hurricane',
    category: 'Ships',
    definition:
      "Anvil two-seat heavy fighter with a manned top turret. The gunner handles rear defense while the pilot flies — it punches far above its weight class for the size.",
  },
  {
    term: 'Paladin',
    category: 'Ships',
    definition:
      "Anvil gunship designed for sustained combat with a small crew. Sits between a fighter and a capital ship — lots of guns, solid armor, and crew stations for a tight team.",
  },
  {
    term: 'Terrapin',
    category: 'Ships',
    definition:
      "Anvil heavily armored exploration ship with almost no weapons — it survives danger by being nearly impenetrable rather than fighting back. Great for venturing into hostile space solo.",
    also: 'Terrapin Medic',
  },
  {
    term: 'Valkyrie',
    category: 'Ships',
    definition:
      "Anvil military dropship that carries up to twenty passengers with serious on-board firepower. Think of it as a flying armored bus that can fight its way to the landing zone.",
  },

  // ─────────────── Ships — Argo Astronautics ───────────────
  {
    term: 'MPUV',
    category: 'Ships',
    definition:
      "Argo's small utility shuttle. Variants handle cargo, crew transfers, and tractor work. No weapons, no frills; a flying delivery vehicle for port operations. Not to be confused with the Drake Mule, a ground vehicle.",
    also: 'MPUV Cargo, MPUV Personnel, MPUV Tractor',
    lastVerified: '2026-09-14',
  },
  {
    term: 'Mule',
    category: 'Ships',
    definition:
      "Drake's compact utility ground vehicle for cargo handling — a rugged little loader with a tractor beam for moving crates around outposts and hangars. Made by Drake, not Argo; a different vehicle from the Argo MPUV shuttle.",
    lastVerified: '2026-09-27',
  },
  {
    term: 'RAFT',
    category: 'Ships',
    definition:
      "Argo modular short-haul freighter built around swappable cargo containers. The middle section loads and unloads quickly at ports, making it efficient for regular cargo runs.",
  },
  {
    term: 'SRV',
    category: 'Ships',
    definition:
      "Argo tug ship — the space equivalent of a breakdown recovery truck. It locks onto disabled or damaged ships and tows them to safety. Essential for rescue operations and recovering wrecks.",
  },

  // ─────────────── Ships — Banu ───────────────
  {
    term: 'Defender',
    category: 'Ships',
    definition:
      "Banu-designed alien light fighter that prioritizes shields over everything else — its shield technology is considered among the best in the galaxy. Slower than human fighters but extremely hard to kill.",
    lastVerified: '2026-09-27',
  },

  // ─────────────── Ships — Consolidated Outland ───────────────
  {
    term: 'Nomad',
    category: 'Ships',
    definition:
      "Consolidated Outland small multi-role ship — can haul a little cargo, do light exploration, and hold its own in a fight. A good step up from the starter ships.",
  },

  // ─────────────── Ships — Crusader Industries ───────────────
  {
    term: 'Spirit',
    category: 'Ships',
    definition:
      "Crusader Industries medium ship line — the C1 is a sleek light freighter, the A1 is a light bomber, and the E1 is an exploration variant. A versatile trio sharing the same hull.",
    also: 'C1 Spirit, A1 Spirit, E1 Spirit',
  },
  {
    term: 'Hercules Starlifter',
    category: 'Ships',
    definition:
      "Crusader Industries massive military transport line. The C2 hauls cargo, the M2 moves troops and vehicles, and the A2 is a strategic bomber. Big enough to drive a tank inside.",
    also: 'C2 Hercules, M2 Hercules, A2 Hercules, Herc',
  },
  {
    term: 'Ares Star Fighter',
    category: 'Ships',
    definition:
      "Crusader Industries single-seat heavy gunship. The Inferno carries a rotary gatling cannon that shreds fighters; the Ion carries a large laser for punching through capital ship armor. Glass cannons — huge firepower, light protection.",
    also: 'Ares Inferno, Ares Ion',
    lastVerified: '2026-09-14',
  },
  {
    term: 'Intrepid',
    category: 'Ships',
    definition:
      "Crusader Industries entry-level transport aimed at new players who want something more capable than an Aurora or Mustang. Reliable and affordable for learning the basics of cargo hauling.",
    lastVerified: '2026-11-02',
  },
  {
    term: 'Mercury Star Runner',
    category: 'Ships',
    definition:
      "Crusader Industries fast medium freighter built for high-value and time-sensitive cargo — including illegal goods. Has hidden compartments and is fast enough to outrun most pursuit ships.",
    also: 'MSR, Mercury',
  },

  // ─────────────── Ships — Drake Interplanetary ───────────────
  {
    term: 'Buccaneer',
    category: 'Ships',
    definition:
      "Drake's scrappy light dogfighter — cheap, fast, and loaded with more weapons than a ship its size has any right to carry. Fragile, but what it lacks in armor it makes up for in aggression.",
    lastVerified: '2026-07-20',
  },
  {
    term: 'Corsair',
    category: 'Ships',
    definition:
      "Drake mid-size explorer with surprisingly heavy firepower. Built for people who want to venture into unknown space without being defenseless when they get there.",
    lastVerified: '2026-09-28',
  },
  {
    term: 'Cutter',
    category: 'Ships',
    definition:
      "Drake's entry-level ship — a tiny, boxy transport for hauling small loads on a budget. No frills, but it gets the job done. Variants include the Rambler (explorer) and Scout (recon).",
    also: 'Cutter Rambler, Cutter Scout',
    lastVerified: '2026-09-28',
  },
  {
    term: 'Golem',
    category: 'Ships',
    definition:
      "Drake's first mining ship — an essentials-only solo miner with a single built-in mining arm that can't be swapped. A low-cost way into mining before stepping up to multi-crew ships like the Mole.",
    lastVerified: '2026-11-02',
  },
  {
    term: 'Herald',
    category: 'Ships',
    definition:
      "Drake data runner built entirely around fast information transport and electronic security. Bullet-shaped, very fast, used by hackers and smugglers who carry data rather than cargo.",
    lastVerified: '2026-11-02',
  },

  // ─────────────── Ships — Esperia ───────────────
  {
    term: 'Prowler',
    category: 'Ships',
    definition:
      "Esperia's replica of a Tevarin alien boarding ship — designed for stealthy troop insertion onto enemy vessels without being detected. Has room for a squad and moves quietly for its size.",
    also: 'Prowler Utility',
  },
  {
    term: 'Talon',
    category: 'Ships',
    definition:
      "Esperia's replica of a Tevarin fighter — fast, sleek, with strong shields and a distinctive alien look. The Shrike variant adds missile racks for hitting larger targets.",
    also: 'Talon Shrike',
  },
  {
    term: 'Khartu-al',
    category: 'Ships',
    definition:
      "Aopoa/Esperia Xi'an-designed light fighter that maneuvers unlike anything humans build — it can rotate its engines independently, making it extremely agile. Harder to fly but devastating in skilled hands.",
  },
  {
    term: "San'tok.yai",
    category: 'Ships',
    definition:
      "Aopoa Xi'an heavy fighter with more firepower and shields than the Khartu-al. Built around alien design philosophy — unique flight characteristics compared to any human ship.",
  },

  // ─────────────── Ships — Gatac / Xi'an ───────────────
  {
    term: 'Syulen',
    category: 'Ships',
    definition:
      "Gatac Manufacture starter ship — one of the only alien-made ships new players can fly. Has Xi'an-style controls and aesthetics while still being manageable for solo pilots.",
  },

  // ─────────────── Ships — Kruger Intergalactic ───────────────
  {
    term: 'P-72 Archimedes',
    category: 'Ships',
    definition:
      "Kruger tiny snub fighter designed to be carried inside larger ships. Too small for long solo trips, but perfect as a parasite fighter or for competitive racing inside stations.",
    also: 'Archimedes',
  },
  {
    term: 'L-21 Wolf',
    category: 'Ships',
    definition:
      "Kruger light interceptor designed to hunt down fleeing targets. More maneuverable than it looks and a relatively affordable option for solo combat pilots who like to give chase.",
    also: 'Wolf',
  },

  // ─────────────── Ships — Mirai ───────────────
  {
    term: 'Fury',
    category: 'Ships',
    definition:
      "Mirai micro-fighter — barely bigger than a cockpit with engines and guns attached. Designed to be launched from a carrier ship. Too small to fly solo from port for long.",
    also: 'Fury LX, Fury MX',
    lastVerified: '2026-10-05',
  },
  {
    term: 'Guardian',
    category: 'Ships',
    definition:
      "Mirai medium fighter with a futuristic look and well-rounded stats. Balanced between speed, firepower, and shields — a solid all-rounder. Variants include the MX (electronic warfare) and QI (quick intercept).",
    also: 'Guardian MX, Guardian QI',
    lastVerified: '2026-10-05',
  },
  {
    term: 'Razor',
    category: 'Ships',
    definition:
      "Mirai racing ship built purely to win competitions. Almost no weapons, minimal cargo — everything sacrificed for speed and handling. Variants include the EX (extreme speed) and LX (balanced racing).",
    also: 'Razor EX, Razor LX',
  },

  // ─────────────── Ships — MISC ───────────────
  {
    term: 'Reliant',
    category: 'Ships',
    definition:
      "MISC starter ship with a distinctive horizontal wing design. Small and affordable, it can carry light cargo, do basic combat, or fit out for research. The Kore (cargo), Mako (broadcasting), Sen (science), and Tana (combat) are the main variants.",
    also: 'Reliant Kore, Reliant Mako, Reliant Sen, Reliant Tana',
  },
  {
    term: 'Starfarer',
    category: 'Ships',
    definition:
      "MISC large fuel tanker — takes in hydrogen from open space, refines it on board, and sells it to ships that need refueling in space. The Gemini variant adds military-grade armor for dangerous territory.",
    also: 'Starfarer Gemini',
  },
  {
    term: 'Starlancer',
    category: 'Ships',
    definition:
      "MISC large ship line — the MAX is a big cargo hauler for serious trade routes; the TAC is a military transport for moving armed teams into conflict zones.",
    also: 'Starlancer MAX, Starlancer TAC',
  },

  // ─────────────── Ships — Origin Jumpworks ───────────────
  {
    term: '100 series',
    category: 'Ships',
    definition:
      "Origin's entry-level luxury line — the 100i (multi-role), 125a (light fighter), and 135c (light cargo). Think luxury sports car at the starter price point. Small, sleek, and stylish.",
    also: '100i, 125a, 135c',
    lastVerified: '2026-09-14',
  },
  {
    term: '300 series',
    category: 'Ships',
    definition:
      "Origin's mid-range luxury line. The 300i is a flexible multi-role; the 315p adds a tractor beam and scanner package; the 325a upgrades the weapons; the 350r is a dedicated racer. All look extraordinary.",
    also: '300i, 315p, 325a, 350r',
    lastVerified: '2026-09-27',
  },
  {
    term: '400i',
    category: 'Ships',
    definition:
      "Origin larger luxury explorer for solo pilots or a small crew. Includes top-tier sensors, a lounge area, and enough firepower to handle most threats encountered while exploring.",
    lastVerified: '2026-09-14',
  },
  {
    term: '600i',
    category: 'Ships',
    definition:
      "Origin's luxury explorer — a large ship that is essentially a flying mansion with a lounge, bar, and captain's suite. One of the most prestigious ships you can own.",
    lastVerified: '2026-09-27',
  },
  {
    term: '85X',
    category: 'Ships',
    definition:
      "Origin luxury runabout designed to live inside the 600i or 890 Jump and handle short hops. The space equivalent of a personal speedboat stored on a superyacht.",
    lastVerified: '2026-07-13',
  },
  {
    term: 'M50 Interceptor',
    category: 'Ships',
    definition:
      "One of the fastest small ships in the game. Built to intercept and chase down targets; also a popular racing ship because almost nothing can keep up with it.",
    also: 'M50',
  },
  {
    term: 'X1',
    category: 'Ships',
    definition:
      "Origin open-cockpit speeder — no canopy, just you and the stars. Designed for short hops and showing off. Variants include the Force (armed) and Velocity (racing-tuned).",
    also: 'X1 Force, X1 Velocity',
  },

  // ─────────────── Ships — RSI ───────────────
  {
    term: 'Apollo',
    category: 'Ships',
    definition:
      "RSI dedicated medical ship — picks up injured players, stabilizes them in flight, and gets them to a medical facility. One of the most important support ships for large org operations.",
    also: 'Apollo Medivac, Apollo Triage',
    lastVerified: '2026-09-14',
  },
  {
    term: 'Mantis',
    category: 'Ships',
    definition:
      "RSI interdiction ship — its quantum snare can pull other ships out of quantum travel mid-flight. Used by bounty hunters and pirates to stop targets from escaping before they can be caught.",
  },
  {
    term: 'Perseus',
    category: 'Ships',
    definition:
      "RSI large, heavily armed patrol gunship. Requires a crew and carries weapons powerful enough to threaten frigates. Designed to defend space lanes rather than fight in tight dogfights.",
  },
  {
    term: 'Scorpius',
    category: 'Ships',
    definition:
      "RSI two-seat heavy fighter with a rear-facing gunner turret. The pilot handles flying and forward guns while the gunner defends the back. Looks aggressive and fights like it looks.",
    also: 'Scorpius Antares',
  },
  {
    term: 'Zeus Mk II',
    category: 'Ships',
    definition:
      "RSI medium ship line — the CL is an affordable solo cargo hauler for regular trade routes; the ES is an exploration variant with upgraded scanners for mapping new star systems.",
    also: 'Zeus CL, Zeus ES',
  },
  {
    term: 'Hermes',
    category: 'Ships',
    definition:
      "RSI large passenger and cargo transport designed for moving people and goods between major locations. The space equivalent of a commercial ferry on a regular route.",
  },

  // ─────────────── Gameplay ───────────────
  {
    term: 'PU',
    category: 'Gameplay',
    definition:
      'Persistent Universe — the live, always-online Star Citizen world where most players spend their time. Your characters, ships, and credits live here.',
  },
  {
    term: 'Free Fly',
    category: 'Gameplay',
    definition:
      "A promotional event where Star Citizen is free to download and play for a limited window. The best way to try the game without pledging.",
  },
  {
    term: 'Hangar',
    category: 'Gameplay',
    definition:
      "Your personal in-game space at a station where your ships are stored. You can walk around, customize, and spawn ships to fly out from here.",
  },
  {
    term: 'ASOP',
    category: 'Gameplay',
    definition:
      'Automated Ship Operations and Placement — the in-game terminal where you retrieve, store, or insurance-claim your ships. Pronounced "A-sop."',
  },
  {
    term: 'Landing Pad',
    category: 'Gameplay',
    definition:
      "A numbered platform at a station or city spaceport where your ship is assigned when you request it from the ASOP terminal. Each pad has a number — finding the right one is a rite of passage for new players.",
    also: 'Pad',
  },
  {
    term: 'Global Chat',
    category: 'Gameplay',
    definition:
      "The server-wide text chat channel visible to all players on your game instance. The quickest way to ask a question, call for help, or trade o7s with strangers. Veterans are usually patient — ask away.",
    also: 'global',
  },
  {
    term: 'Hab',
    category: 'Gameplay',
    definition:
      "Short for habitation room — your character's personal room at a station or city. A place to store gear and set your respawn point. Press the bed to sleep and lock in your location.",
    also: 'Hab Room, Habitation',
  },
  {
    term: 'Loaner Ship',
    category: 'Gameplay',
    definition:
      "A temporary ship CIG provides when your pledged ship isn't yet flyable in the live game, or during Free Fly events. Loaners give everyone something to fly without an additional purchase.",
    also: 'Loaner',
  },
  {
    term: 'Quantum Travel',
    category: 'Gameplay',
    definition:
      "Faster-than-light travel between points in a star system. Your ship's quantum drive eats fuel and takes time, but it's how you cross planets and moons.",
    also: 'QT, jumping',
  },
  {
    term: 'Quantum Snare',
    category: 'Gameplay',
    definition:
      "A device — usually fitted to combat ships like the Mantis or Vanguard — that yanks ships out of quantum travel mid-flight. Pirates' favorite ambush tool.",
  },
  {
    term: 'mobiGlas',
    category: 'Gameplay',
    definition:
      "Your character's wrist-mounted computer. It opens missions, manages inventory, summons ships, and handles in-game messages. Press F1.",
    also: 'Mobiglas',
  },
  {
    term: 'PMA',
    category: 'Gameplay',
    definition:
      "The mobiGlas app for your character's armor and gear. The current game calls it Equipment Manager; older guides say Personal Manager App. Open mobiGlas with F1, then pick the app.",
  },
  {
    term: 'VMA',
    category: 'Gameplay',
    definition:
      "Vehicle Manager App — the mobiGlas tab where you customize ship loadouts (weapons, components, paint). Open at any ASOP terminal.",
  },
  {
    term: 'Loadout',
    category: 'Gameplay',
    definition:
      "Your gear — weapons, armor, ammo, healing items, mobiGlas attachments. Configurable per character via the PMA.",
  },
  {
    term: 'Inner Thought',
    category: 'Gameplay',
    definition:
      "The contextual interaction system — hold F to see the actions available on whatever you're looking at. Sit, pick up, repair, board.",
  },
  {
    term: 'Armor',
    category: 'Gameplay',
    definition:
      "Wearable protection for your character. Light armor for speed, medium for balance, heavy for high-threat zones like bunkers and PvP.",
  },
  {
    term: 'FPS',
    category: 'Gameplay',
    definition:
      "First-Person Shooter gameplay — the on-foot combat in Star Citizen. You'll do FPS in bunkers, derelict ships, and during ground missions.",
  },
  {
    term: 'PvP',
    category: 'Gameplay',
    definition:
      "Player vs. Player combat — fighting other real players in space or on the ground. Most of the 'Verse is open PvP, with safer law-enforced zones around major stations.",
  },
  {
    term: 'PvE',
    category: 'Gameplay',
    definition:
      "Player vs. Environment — missions and combat against AI enemies. Bounties, bunker clears, and cargo runs are mostly PvE.",
  },
  {
    term: 'Bounty',
    category: 'Gameplay',
    definition:
      "A mission to hunt down and kill a specific NPC criminal for credits. Comes in tiers — VLRT for newbies, ERT for endgame. A reliable income loop.",
  },
  {
    term: 'Salvage',
    category: 'Gameplay',
    definition:
      "Stripping derelict ships for hull material (RMC) and components. Ships like the Vulture and Reclaimer are built for salvage gameplay.",
  },
  {
    term: 'Mining',
    category: 'Gameplay',
    definition:
      "Extracting valuable rocks from asteroids or planet surfaces with a laser, then refining the ore for profit. Ships: Prospector (solo), MOLE (group), ROC (ground).",
  },
  {
    term: 'Refining',
    category: 'Gameplay',
    definition:
      "The post-mining step — drop raw ore at a refinery (Hurston's HDMS, ArcCorp's stations) and pay to convert it into sellable refined material. Affects price and weight.",
  },
  {
    term: 'Cargo',
    category: 'Gameplay',
    definition:
      "Buying goods cheap at one station and selling them high at another. The classic trader loop. Hangar size and SCU capacity are your limits.",
  },
  {
    term: 'SCU',
    category: 'Gameplay',
    definition:
      "Standard Cargo Unit — a 1.25m cube that's the standard cargo measurement in SC. Ship capacity is rated in SCU. 1 SCU = 100 microSCU.",
  },
  {
    term: 'Tractor Beam',
    category: 'Gameplay',
    definition:
      "Tool used to move cargo boxes and small objects through space. Comes as a handheld multi-tool attachment or a ship-mounted version (Hercules, Cutter).",
  },
  {
    term: 'Escort',
    category: 'Gameplay',
    definition:
      "Protecting another player's ship — usually a hauler — through dangerous space. A common org service and a way newer pilots earn from veterans.",
  },
  {
    term: 'Piracy',
    category: 'Gameplay',
    definition:
      "The dark side of trade — interdicting cargo ships and demanding their goods or credits. Legal in Pyro, illegal in Stanton. Carries a CrimeStat.",
  },
  {
    term: 'CrimeStat',
    category: 'Gameplay',
    definition:
      "Your wanted level. Range 1 to 5 — petty trespass to murder of UEE personnel. High CrimeStat blocks station landings and triggers NPC enforcers. Resets in Klescher prison.",
  },
  {
    term: 'Bedlogging',
    category: 'Gameplay',
    definition:
      "Logging out by lying down in your ship's bed. Saves your loadout, your ship state, and your inventory more reliably than logging out from anywhere else. The veteran sleep button.",
    also: 'Bedlog',
  },
  {
    term: 'Hot Drop',
    category: 'Gameplay',
    definition:
      "Inserting directly into combat — usually by quantum-jumping a drop ship into an active fight zone. Risky, fast, and how most bunker ops start.",
  },
  {
    term: 'Gimbal',
    category: 'Gameplay',
    definition:
      "Weapon mount that auto-tracks your reticle within a small cone. Lower DPS than fixed mounts but easier to land hits with. Most starter ships are gimbaled.",
  },
  {
    term: 'Fixed Mount',
    category: 'Gameplay',
    definition:
      "Weapon mount that points wherever the ship's nose points. Higher DPS but you have to actually aim. Pro pilots prefer fixed.",
  },
  {
    term: 'Component',
    category: 'Components',
    definition:
      "A swappable ship part such as a power plant, cooler, shield generator or quantum drive. Each has a size from zero to four, a class (Civilian, Industrial, Military, Stealth or Competition) and a grade from A to D.",
    lastVerified: '2026-11-04',
  },
  {
    term: 'Power Triangle',
    category: 'Gameplay',
    definition:
      "The cockpit power-management balance between weapons, shields, and engines. Shift power one way mid-fight to dump shields into guns or escape.",
  },
  {
    term: 'MFD',
    category: 'Gameplay',
    definition:
      "Multi-Function Display — the configurable cockpit screens that show shields, power, comms, mining info. Different ships have different MFD layouts.",
  },
  {
    term: 'IFCS',
    category: 'Gameplay',
    definition:
      "Intelligent Flight Control System — the assist software that handles thrusters and stability. Toggle 'decoupled mode' for raw flight without IFCS smoothing.",
  },
  {
    term: 'Medgun',
    category: 'Gameplay',
    definition:
      "A handheld medical tool that revives a downed teammate in the field. Crucial in FPS engagements and bunker clears.",
  },
  {
    term: 'Hospital',
    category: 'Gameplay',
    definition:
      "Major-city medical facility where you respawn after death. Different cities have hospitals at different tiers; choosing a respawn point matters.",
  },
  {
    term: 'NPC',
    category: 'Gameplay',
    definition:
      "Non-Player Character. The AI inhabitants of bunkers, stations, and patrol fleets. Their behavior ranges from competent to comically broken.",
  },

  // ─────────────── Locations ───────────────
  {
    term: 'Stanton',
    category: 'Locations',
    definition:
      "The first playable star system — four corporate-owned planets (ArcCorp, Crusader, Hurston, microTech), each with cities and moons. Mostly safe, law-enforced.",
  },
  {
    term: 'Pyro',
    category: 'Locations',
    definition:
      "The second playable star system, opened in late 2024. Lawless, dangerous, with rougher rewards. Home to outlaws and the most ambitious haulers.",
  },
  {
    term: 'Hurston',
    category: 'Locations',
    definition:
      "Stanton I — a polluted industrial planet owned by Hurston Dynamics. Home of Lorville. Toxic atmosphere outside the city dome. Four moons.",
  },
  {
    term: 'Crusader',
    category: 'Locations',
    definition:
      "Stanton II — a gas giant home to Crusader Industries. The floating city of Orison sits in its atmosphere. Three notable moons: Yela, Daymar, Cellin.",
    lastVerified: '2026-09-28',
  },
  {
    term: 'ArcCorp',
    category: 'Locations',
    definition:
      "Stanton III — an entire planet covered in ArcCorp's industrial sprawl. Home of Area18. Two moons: Lyria and Wala.",
    lastVerified: '2026-07-27',
  },
  {
    term: 'microTech',
    category: 'Locations',
    definition:
      "Stanton IV — a frozen tundra planet owned by the microTech corporation. Home of New Babbage. Three moons: Calliope, Clio, Euterpe.",
  },
  {
    term: 'Lorville',
    category: 'Locations',
    definition:
      "The capital city of Hurston — heavy industrial dome under a polluted sky. Central Business District is the in-city hub. Locked behind security at the gates.",
  },
  {
    term: 'Area18',
    category: 'Locations',
    definition:
      "The capital city of ArcCorp — Blade Runner aesthetic, cyberpunk neon, multi-story shopping. Riker Memorial Spaceport is the landing zone. Often shortened to A18.",
    also: 'A18',
    lastVerified: '2026-09-14',
  },
  {
    term: 'New Babbage',
    category: 'Locations',
    definition:
      "The capital city of microTech — Apple-store-clean, glass and white walls. Home of microTech HQ and the Reach observatory. The most polished landing zone.",
  },
  {
    term: 'Orison',
    category: 'Locations',
    definition:
      "Crusader Industries' floating city in the gas-giant atmosphere of Crusader. A series of platforms connected by skybridges. Stunning sunsets, weak structural integrity.",
  },
  {
    term: 'GrimHEX',
    category: 'Locations',
    definition:
      "An outlaw station in an asteroid hollow near Yela. No questions asked, no laws enforced. The unofficial pirate hub of Stanton.",
  },
  {
    term: 'Klescher',
    category: 'Locations',
    definition:
      "A maximum-security prison on Aberdeen. Players with high CrimeStat get sent here on death. Mine prison ore to pay off your sentence — or escape through the tunnels.",
  },
  {
    term: 'Yela',
    category: 'Locations',
    definition:
      "Crusader's icy moon. Home to GrimHEX and the famous Jumptown drug lab outpost. Asteroid belt nearby — popular ambush territory.",
  },
  {
    term: 'Daymar',
    category: 'Locations',
    definition:
      "Crusader's reddish desert moon. Site of the community-run Daymar Rally. Bunkers, shipwrecks, and lots of nothing. A new-player favorite for ground exploration.",
    lastVerified: '2026-08-17',
  },
  {
    term: 'Cellin',
    category: 'Locations',
    definition:
      "Crusader's volcanically active moon. Bunkers, ROC mining sites, and several outposts. Extreme heat and thermal geysers create hazardous conditions.",
    lastVerified: '2026-09-27',
  },
  {
    term: 'Lyria',
    category: 'Locations',
    definition:
      "ArcCorp's icy moon — frozen tundra surface, scattered outposts. Mining sites for gemstone-rich rocks.",
  },
  {
    term: 'Wala',
    category: 'Locations',
    definition:
      "ArcCorp's other moon — barren and rocky. Site of several bounty bunker missions.",
  },
  {
    term: 'Aberdeen',
    category: 'Locations',
    definition:
      "Hurston moon — site of Klescher prison. Hot, ashy surface, very few visitors except prisoners and bounty hunters.",
    lastVerified: '2026-07-13',
  },
  {
    term: 'Calliope',
    category: 'Locations',
    definition:
      "microTech moon — frozen, scientific outposts, occasional bunkers.",
    lastVerified: '2026-09-27',
  },
  {
    term: 'Clio',
    category: 'Locations',
    definition:
      "microTech moon — the largest of the three moons, with liquid oceans, icebergs, and snowy mountains. Popular for mining and bounty pickups.",
    lastVerified: '2026-09-27',
  },
  {
    term: 'Euterpe',
    category: 'Locations',
    definition:
      "microTech moon — frozen scientific outposts and a few abandoned facilities. Mostly cosmetic with light gameplay activity.",
  },
  {
    term: 'Pyro V',
    category: 'Locations',
    definition:
      "The largest playable planet in the Pyro system — a gas giant with several moons. Center of activity in lawless Pyro space.",
  },
  {
    term: 'Welcome Hub',
    category: 'Locations',
    definition:
      "The new-player landing area added in 4.0. A Stanton orientation station with tutorials, kiosks, and starter missions to help newbies before they head to the city.",
  },
  {
    term: 'Port Olisar',
    category: 'Locations',
    definition:
      "The original player-accessible station in Stanton, orbiting the gas giant Crusader. The first place most players ever landed. Removed from the game in 2021 and replaced by Orison and the current station network — but it lives on in every veteran's first-session story.",
  },
  {
    term: 'Bunker',
    category: 'Locations',
    definition:
      "Underground combat compounds on planet surfaces filled with NPC enemies. Mission targets include hostage rescues, bounties, and cargo recovery.",
    lastVerified: '2026-07-27',
  },
  {
    term: 'Derelict',
    category: 'Locations',
    definition:
      "Abandoned ships drifting in space, often stripped or filled with hostiles. Salvage them, loot them, or use them as ambush sites.",
    lastVerified: '2026-09-21',
  },
  {
    term: 'Jumpgate',
    category: 'Locations',
    definition:
      "A wormhole between star systems. The Pyro jumpgate from Stanton is the first one open to players. Eventually all systems will be linked this way.",
    also: 'Jump Point',
  },
  {
    term: 'Jumptown',
    category: 'Locations',
    definition:
      "An outlaw drug lab on Yela. Site of regular community-organized 'Jumptown 2.0' raid events — buy product, fight everyone else, profit. Pure chaos.",
    also: 'JT',
  },

  // ─────────────── Technical / Patches ───────────────
  {
    term: 'PTU',
    category: 'Technical',
    definition:
      'Public Test Universe — a test server where players try upcoming patches before they go live. Backers above a certain pledge tier or who get invited can access it.',
  },
  {
    term: 'EPTU',
    category: 'Technical',
    definition:
      "Evocati PTU — the earliest, NDA-bound test wave. Limited to a small group of long-time backers. Often the first to break, the first to feedback.",
    also: 'Evocati',
  },
  {
    term: 'Live',
    category: 'Technical',
    definition:
      "The main public branch — the version everyone plays by default. Distinguished from PTU/EPTU during testing windows.",
  },
  {
    term: 'Wipe',
    category: 'Technical',
    definition:
      "When CIG resets player progress — credits, aUEC, owned items — usually with a major patch. Pledged ships and UEC stay; everything earned in-game resets.",
  },
  {
    term: 'Hangar Ready',
    category: 'Technical',
    definition:
      "A status meaning the ship exists in your hangar but isn't yet flyable in the live game. CIG ships go from concept → hangar ready → flyable over time.",
  },
  {
    term: 'Flight Ready',
    category: 'Technical',
    definition:
      "A ship status meaning it is fully playable in the Persistent Universe. Ships progress from concept → in production → hangar ready → flight ready. During Free Fly events, all featured loaner ships are flight ready.",
    also: 'Flyable',
  },
  {
    term: '30k',
    category: 'Technical',
    definition:
      "The infamous server crash error — '30000.' Means the server lost contact and your session is dead. Common enough that it's been a meme for years. Restart the client.",
    also: '30000',
  },
  {
    term: 'Server Meshing',
    category: 'Technical',
    definition:
      "CIG's long-promised tech that splits the universe across many servers seamlessly. The path from per-shard to a single 'Verse' for all players. Static meshing landed in 4.0.",
  },
  {
    term: 'PES',
    category: 'Technical',
    definition:
      "Persistent Entity Streaming — the database backbone that makes objects (your dropped weapons, that helmet on the floor) survive server crashes and reboots.",
    also: 'Persistent Entity Streaming',
  },
  {
    term: 'iCache',
    category: 'Technical',
    definition:
      "Item cache — the back-end that tracks every persistent object you own and where it is in the universe. Often blamed when items go missing.",
  },
  {
    term: 'Long Term Persistence',
    category: 'Technical',
    definition:
      "The system that keeps your character's inventory across patches without a wipe. Until LTP is solid, wipes happen.",
    also: 'LTP',
  },
  {
    term: 'Maelstrom',
    category: 'Technical',
    definition:
      "CIG's upcoming destruction tech — physically modeled ship damage. Hull plates fly off, components rip out, holes go through metal. In dev for years; partial features have shipped.",
  },
  {
    term: 'Quanta',
    category: 'Technical',
    definition:
      "CIG's planned AI economy entities — virtual NPCs that simulate trade, production, and demand across the universe in real time. Long-term feature, still mostly invisible.",
  },
  {
    term: 'Tier 0/1',
    category: 'Technical',
    definition:
      "CIG dev terminology. Tier 0 means a feature exists in barebones form; Tier 1 is the polished version. You'll see references in patch notes ('salvage Tier 1' etc.).",
  },

  // ─────────────── Bug Reporting / Issue Council ───────────────
  {
    term: 'Issue Council',
    category: 'Community',
    definition:
      "The official website where backers report game bugs to the developers. Reports can be searched, confirmed by other players, and tracked. It is for bugs only — design feedback goes to Spectrum.",
    also: 'IC',
    lastVerified: '2026-06-01',
  },
  {
    term: 'Game.log',
    category: 'Technical',
    definition:
      "A text file the game writes every time you play. It records what loaded, what you did, and any errors. Developers read it to trace the cause of a bug, so it helps to attach it to a report.",
    also: 'game log',
    lastVerified: '2026-06-01',
  },
  {
    term: 'DxDiag',
    category: 'Technical',
    definition:
      "A built-in Windows tool that lists your computer's parts and drivers. Run it, save the report, and attach the file to a bug report so developers know exactly what setup the bug happened on.",
    also: 'DirectX Diagnostic Tool',
    lastVerified: '2026-06-01',
  },
  {
    term: 'reproduction steps',
    category: 'Technical',
    definition:
      "The exact actions that make a bug happen again, written as a short numbered list. Clear steps let a developer recreate the problem on their own machine, which is usually the first step to fixing it.",
    also: 'repro,repro steps,steps to reproduce',
    lastVerified: '2026-06-01',
  },
  {
    term: 'build number',
    category: 'Technical',
    definition:
      "The version code for the exact copy of the game you are running. The RSI Launcher shows it under the Launch Game button. Always include it in a bug report so developers test the right version.",
    also: 'build,version number',
    lastVerified: '2026-06-01',
  },
  {
    term: 'JIRA',
    category: 'Technical',
    definition:
      "The internal tracking tool the developers use to manage their work. When a community bug report reaches the 'Acknowledged' stage, it has been copied into JIRA as a ticket for an internal team.",
    lastVerified: '2026-06-01',
  },
  // ─────────────── Weapons ───────────────
  {
    term: 'P4-AR',
    category: 'Weapons',
    definition:
      "Behring's ballistic assault rifle (a rifle that fires solid bullets). Its short barrel and folding stock suit close-quarters fights, and it is easy for beginners to handle.",
    also: 'P4,P4-AR Rifle,Behring P4-AR',
    lastVerified: '2026-11-04',
  },
  {
    term: 'P8-AR',
    category: 'Weapons',
    definition:
      "Behring's semi-automatic ballistic rifle, sold to civilians as a simple, dependable defense weapon. It descends from the standard rifle of the UEE Marines (the empire's soldiers).",
    also: 'P8,P8-AR Rifle,Behring P8-AR',
    lastVerified: '2026-11-04',
  },
  {
    term: 'P8-SC',
    category: 'Weapons',
    definition:
      "Behring's ballistic SMG (submachine gun, a compact rapid-fire weapon for close range). Good for tight corridors and ship interiors.",
    also: 'P8-SC SMG,P8 SMG,Behring P8-SC',
    lastVerified: '2026-11-04',
  },
  {
    term: 'P6-LR',
    category: 'Weapons',
    definition:
      "Behring's ballistic sniper rifle. It fires slowly, but each round hits hard at long range. A variable-zoom scope is built in.",
    also: 'P6-LR Sniper,P6 sniper,Behring P6-LR',
    lastVerified: '2026-11-04',
  },
  {
    term: 'S-38',
    category: 'Weapons',
    definition:
      "Behring's ballistic pistol. A light polymer frame keeps recoil low, which makes it a friendly sidearm for new players.",
    also: 'S38,S-38 Pistol,Behring S-38',
    lastVerified: '2026-11-04',
  },
  {
    term: 'BR-2',
    category: 'Weapons',
    definition:
      "Behring's ballistic shotgun. It began as a military design and was later sold to the public after testers kept asking for it.",
    also: 'BR2,BR-2 Shotgun,Behring BR-2',
    lastVerified: '2026-11-04',
  },
  {
    term: 'FS-9',
    category: 'Weapons',
    definition:
      "Behring's ballistic LMG (light machine gun, a heavy rapid-fire gun). Its full-auto mode is made for laying down covering fire.",
    also: 'FS9,FS-9 LMG,Behring FS-9',
    lastVerified: '2026-11-04',
  },
  {
    term: 'GP-33',
    category: 'Weapons',
    definition:
      "Behring's ballistic grenade launcher. It fires 40mm grenades to clear rooms or flush out enemies hiding behind cover.",
    also: 'GP33,GP-33 MOD,GP-33 Grenade Launcher,grenade launcher',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Gallant',
    category: 'Weapons',
    definition:
      "Klaus & Werner's laser assault rifle. Laser means it fires bolts of energy instead of bullets. It is accurate out to medium range.",
    also: 'Gallant Rifle,K&W Gallant',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Demeco',
    category: 'Weapons',
    definition:
      "Klaus & Werner's laser LMG (light machine gun). It is a short-to-mid-range favorite of infantry and sees heavy use in military fights.",
    also: 'Demeco LMG,K&W Demeco',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Arclight',
    category: 'Weapons',
    definition:
      "Klaus & Werner's laser pistol. It became popular after appearing as a hero's sidearm in an in-universe vid show, The Frontier.",
    also: 'Arclight Pistol,Arclight II,K&W Arclight',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Arrowhead',
    category: 'Weapons',
    definition:
      "Klaus & Werner's long-range laser sniper rifle. Its composite body is built to withstand harsh environments.",
    also: 'Arrowhead Sniper,Arrowhead Sniper Rifle',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Lumin V',
    category: 'Weapons',
    definition:
      "Klaus & Werner's laser SMG (a compact rapid-fire weapon). Its interval autofire mode shoots short bursts while you hold the trigger.",
    also: 'Lumin,Lumin V SMG',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Karna',
    category: 'Weapons',
    definition:
      "Kastak Arms' plasma assault rifle. Plasma means superheated energy bolts. It has charged and full-auto modes for mid-range fights.",
    also: 'Karna Rifle,Kastak Karna',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Devastator',
    category: 'Weapons',
    definition:
      "Kastak Arms' pump-action plasma shotgun. It fires heavy plasma blasts for close combat and clearing rooms.",
    also: 'Devastator Shotgun,Kastak Devastator',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Custodian',
    category: 'Weapons',
    definition:
      "Kastak Arms' laser SMG (submachine gun). It favors a high rate of fire over damage and accuracy, which suits tight spaces.",
    also: 'Custodian SMG,Kastak Custodian',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Coda',
    category: 'Weapons',
    definition:
      "Kastak Arms' ballistic pistol, nicknamed the hand cannon. One .50 caliber round hits hard, but the recoil is heavy.",
    also: 'Coda Pistol,Kastak Coda',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Scalpel',
    category: 'Weapons',
    definition:
      "Kastak Arms' ballistic sniper rifle with two stacked barrels. It has two fire modes so you can match the shot to the situation.",
    also: 'Scalpel Sniper Rifle,Kastak Scalpel',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Ravager-212',
    category: 'Weapons',
    definition:
      "Kastak Arms' ballistic shotgun with two barrels. Each barrel can use a different type of ammunition.",
    also: 'Ravager,Ravager-212 Twin,Ravager-212 Twin Shotgun',
    lastVerified: '2026-11-04',
  },
  {
    term: 'LH86',
    category: 'Weapons',
    definition:
      "Gemini's compact ballistic pistol, built for personal defense and close-quarters fights.",
    also: 'LH86 Pistol,Gemini LH86',
    lastVerified: '2026-11-04',
  },
  {
    term: 'F55',
    category: 'Weapons',
    definition:
      "Gemini's ballistic LMG (light machine gun) with a very fast rate of fire.",
    also: 'F55 LMG,Gemini F55',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Parallax',
    category: 'Weapons',
    definition:
      "VOLT's energy assault rifle that fires electron bolts. It has a bigger-than-average battery and can scale up into a steady beam as it fires.",
    also: 'Parallax Rifle,Parallax Energy Assault Rifle,VOLT Parallax',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Zenith',
    category: 'Weapons',
    definition:
      "VOLT's laser sniper rifle. It can fire quick low-energy shots, or automatically charge for a much stronger, noisier, hotter blast.",
    also: 'Zenith Sniper,Zenith Laser Sniper Rifle,VOLT Zenith',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Pulse Laser Pistol',
    category: 'Weapons',
    definition:
      "VOLT's fully automatic laser pistol for close-quarters fights. It fires fast but is less accurate and can overheat.",
    also: 'Pulse pistol,VOLT Pulse',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Yubarev',
    category: 'Weapons',
    definition:
      "Lightning Bolt Co.'s electron pistol. It fires a charged electron shot that can spread to nearby conductive targets.",
    also: 'Yubarev Pistol,Lightning Bolt Yubarev',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Atzkav',
    category: 'Weapons',
    definition:
      "Lightning Bolt Co.'s electron sniper rifle. You pull a charging handle first, then it fires a charged electron that spreads to nearby conductive targets.",
    also: 'Atzkav Sniper Rifle,Lightning Bolt Atzkav',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Animus',
    category: 'Weapons',
    definition:
      "Apocalypse Arms' shoulder-mounted missile launcher with a rotating barrel that quickly fires three missiles. Good against ground forces, vehicles and small ships.",
    also: 'Animus Missile Launcher,Apocalypse Arms Animus',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Scourge',
    category: 'Weapons',
    definition:
      "Apocalypse Arms' shoulder-mounted railgun, which uses electromagnets to fire its shot. It is made for hostile vehicles and large threats.",
    also: 'Scourge Railgun,Apocalypse Arms Scourge',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Salvo Frag Pistol',
    category: 'Weapons',
    definition:
      "Hedeby Gunworks' pistol. It works as a normal sidearm, but a longer trigger pull fires fragmentation rounds that burst on impact.",
    also: 'Salvo pistol,Salvo Frag,Hedeby Salvo',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Multi-Tool',
    category: 'Weapons',
    definition:
      "Greycat Industrial's pistol-sized handheld tool. With the right attachments it can charge, cut and repair things. Attachments are sold separately.",
    also: 'Multitool,multi tool,Pyro RYT,Pyro RYT Multi-Tool,Greycat Multi-Tool',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Cambio SRT',
    category: 'Weapons',
    definition:
      "Greycat Industrial's handheld salvage and repair tool (SRT). It collects scrap and turns it into recycled material you can sell or use for repairs.",
    also: 'Cambio,SRT,salvage repair tool,Cambio-II',
    lastVerified: '2026-11-04',
  },
  {
    term: 'CF-series repeaters',
    category: 'Weapons',
    definition:
      "Klaus & Werner's laser repeaters, one per size: CF-117 Bulldog (size one), CF-227 Badger (two), CF-337 Panther (three) and CF-447 Rhino (four). The Bulldog is a favorite of new pilots outfitting a first ship.",
    also: 'CF-117,CF-227,CF-337,CF-447,Bulldog,CF-117 Bulldog,Badger,CF-227 Badger,Panther,CF-337 Panther,Rhino,CF-447 Rhino,Bulldog repeater',
    lastVerified: '2026-11-04',
  },
  {
    term: 'M-series laser cannons',
    category: 'Weapons',
    definition:
      "Behring's line of laser autocannons, sized from the M3A (size one) up to the M7A (size five). The M3A is the cheap entry-level model.",
    also: 'M3A,M4A,M5A,M6A,M7A,M3A Cannon,M4A Cannon,M5A Cannon,M6A Cannon,M7A Cannon,Behring M-series',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Omnisky',
    category: 'Weapons',
    definition:
      "Amon & Reese's family of laser cannons. The numbers run III, VI, IX and XII, matching sizes one to four. Solid, mid-grade, power-efficient weapons.",
    also: 'Omnisky III,Omnisky VI,Omnisky IX,Omnisky XII,Omnisky cannon',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Attrition',
    category: 'Weapons',
    definition:
      "Hurston Dynamics' laser repeaters, sizes one to four. Their cascade technology makes them hit harder the longer you keep firing.",
    also: 'Attrition-1,Attrition-2,Attrition-3,Attrition-4,Attrition repeater',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Deadbolt',
    category: 'Weapons',
    definition:
      "Esperia's ballistic cannons, sizes one to four. They are modern copies of a Tevarin weapon (the Tevarin are an alien species) and are feared at short range.",
    also: 'Deadbolt I,Deadbolt II,Deadbolt III,Deadbolt IV,Deadbolt cannon',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Tarantula',
    category: 'Weapons',
    definition:
      "Gallenson Tactical's GT-870 ballistic cannons, sold as Mark 1 to Mark 3. A drum feeds ammunition for a steady stream of shells and dependable durability.",
    also: 'Tarantula GT-870,GT-870,Tarantula cannon',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Mantis GT-220',
    category: 'Weapons',
    definition:
      "Gallenson Tactical's size-three ballistic Gatling. It spits out lots of small rounds very fast to shred armor on quick targets. Not the Mantis ship.",
    also: 'Mantis gatling,GT-220,Mantis GT-220 Gatling',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Revenant',
    category: 'Weapons',
    definition:
      "Apocalypse Arms' rugged ballistic Gatling, based on centuries-old designs. It is slow to spin up and cool down, but keeps firing steadily.",
    also: 'Revenant Gatling,Revenant ballistic gatling',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Sledge',
    category: 'Weapons',
    definition:
      "Klaus & Werner's mass driver cannons, sizes one to three. They fire ballistic shots slowly but accurately, using railgun technology.",
    also: 'Sledge I,Sledge II,Sledge III,Sledge mass driver',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Suckerpunch',
    category: 'Weapons',
    definition:
      "Joker Engineering's long-range distortion cannon. It drains a ship's power instead of hurting the hull, so it suits police work and disabling targets.",
    also: 'Suckerpunch Cannon,Suckerpunch-L,Suckerpunch-XL,Suckerpunch distortion cannon',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Preacher scatterguns',
    category: 'Weapons',
    definition:
      "Preacher Armament's distortion scatterguns: Salvation (size four), Absolution (five) and Condemnation (six). Built for capturing or boarding a target.",
    also: 'Salvation,Absolution,Condemnation,Salvation scattergun,Absolution scattergun,Condemnation scattergun',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Repeater',
    category: 'Weapons',
    definition:
      "A ship gun that fires many light shots very quickly. Most repeaters are lasers (energy weapons). Examples: the CF series and Attrition.",
    also: 'laser repeater,repeaters',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Cannon',
    category: 'Weapons',
    definition:
      "A ship gun that fires slower, harder-hitting shots than a repeater. It can be a laser (energy) or ballistic (solid shells). Examples: M-series, Omnisky, Deadbolt.",
    also: 'autocannon,laser cannon,ballistic cannon,cannons',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Scattergun',
    category: 'Weapons',
    definition:
      "A ship shotgun that fires a spread of projectiles. Strongest up close. Comes in ballistic, laser and distortion types.",
    also: 'scatterguns,distortion scattergun,ballistic scattergun',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Mass Driver',
    category: 'Weapons',
    definition:
      "A ship cannon that uses railgun-style technology to fire solid ballistic projectiles. Slow to fire but hits hard. Examples: Sledge and Strife.",
    also: 'mass driver cannon,mass drivers',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Gatling',
    category: 'Weapons',
    definition:
      "A ballistic ship gun with spinning barrels. It fires lots of small rounds very fast, and needs a moment to spin up. Good for shredding fast targets and shooting missiles.",
    also: 'gatlings,ballistic gatling,rotary cannon',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Ballistic Weapon',
    category: 'Weapons',
    definition:
      "A gun that fires solid projectiles. It uses ammunition but no ship power and makes little heat. Some of its damage can pass through enemy shields.",
    also: 'ballistic weapons,ballistic gun',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Energy Weapon',
    category: 'Weapons',
    definition:
      "A gun that fires beams or bolts of energy, such as lasers or plasma. It hits shields first, then the hull. Firing it draws ship power, which raises your electromagnetic (EM) signature on enemy sensors.",
    also: 'energy weapons,energy gun',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Distortion Weapon',
    category: 'Weapons',
    definition:
      "An energy weapon that disables instead of destroys. It cannot harm the hull but drains shields, then strains the ship's power and components. Police and bounty hunters like it.",
    also: 'distortion weapons,distortion damage',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Missile',
    category: 'Weapons',
    definition:
      "A guided explosive launched from a missile rack. Missiles lock on by heat (IR), electromagnetic signature (EM) or cross-section (CS), meaning how big a ship looks on sensors. Names end in a Roman numeral for size, like Pioneer I.",
    also: 'missiles',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Torpedo',
    category: 'Weapons',
    definition:
      "A very large guided missile for hitting big ships. Ship torpedoes run from size nine to twelve, far above ship missiles.",
    also: 'torpedoes,torpedos',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Missile Rack',
    category: 'Weapons',
    definition:
      "The mount that holds and launches missiles. Its size and the number and size of missiles are listed together. Example: the MSD-423 is a size-four rack for two size-three missiles.",
    also: 'missile racks,torpedo rack,pylon',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Weapon Size',
    category: 'Weapons',
    definition:
      "Ship weapons come in standard sizes (S1 and up) and must fit a matching hardpoint, which is a weapon mount on the ship. Gimballed or twin-linked weapons need a larger hardpoint.",
    also: 'S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,weapon sizes,hardpoint size,item size',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Behring',
    category: 'Weapons',
    definition:
      "A weapons consortium. Makes ballistic rifles, SMGs, shotguns and pistols (P4-AR, P8, S-38, BR-2) and ship M-series laser cannons, missiles and shields.",
    also: 'Behring Applied Technology,BEHR',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Klaus & Werner',
    category: 'Weapons',
    definition:
      "An energy weapons maker. Known for laser rifles and LMGs (Gallant, Demeco), the CF-series ship repeaters and Sledge mass drivers.",
    also: 'K&W,Klaus and Werner,KLWE',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Kastak Arms',
    category: 'Weapons',
    definition:
      "Maker of inexpensive energy weapons and personal armor. Known for aggressive names: Devastator, Karna and Coda.",
    also: 'Kastak,KSAR',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Gemini',
    category: 'Weapons',
    definition:
      "A personal-weapons maker. Began with ballistic guns, then added lasers. Makes the LH86 pistol, F55 LMG, S71 rifle, C54 SMG and others.",
    also: 'Gemini weapons,GMNI',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Hurston Dynamics',
    category: 'Weapons',
    definition:
      "A weapons and materials company based on Hurston, in Stanton. Sells Attrition repeaters and Dominance scatterguns. Not the planet itself.",
    also: 'Hurston Dynamics weapons,HRST',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Lightning Bolt Co.',
    category: 'Weapons',
    definition:
      "An energy weapons maker founded by a private military company CEO. Known for electron weapons like the Yubarev pistol and Atzkav sniper rifle.",
    also: 'Lightning Bolt,Lightning Bolt Company,LBCO',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Apocalypse Arms',
    category: 'Weapons',
    definition:
      "A maker of handheld and ship weapons. Every product is based on old Messer Era designs. Makes the Animus, Scourge, Revenant, Havoc and Strife.",
    also: 'Apocalypse,APAR',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Amon & Reese',
    category: 'Weapons',
    definition:
      "A maker of energy weapons and ship engines. Long-time supplier of weapons to the UEE military. Known for Omnisky laser cannons and JS-series power plants.",
    also: 'Amon and Reese,A&R,AMRS,Amon & Reese Co.',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Gallenson Tactical Systems',
    category: 'Weapons',
    definition:
      "A maker of tough, lower-tech ballistic weapons built to take repeated use. Known for the Tarantula cannons and Mantis and Scorpion Gatlings.",
    also: 'Gallenson,Gallenson Tactical,GATS',
    lastVerified: '2026-11-04',
  },
  {
    term: 'KnightBridge Arms',
    category: 'Weapons',
    definition:
      "A maker of inexpensive, stylish ship ballistic weapons. Known for its Sword-series cannons, such as the 9-Series Longsword.",
    also: 'Knightbridge,Knight Bridge,KBAR',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Joker Engineering',
    category: 'Weapons',
    definition:
      "A maker of unconventional novelty weapons and parts, based on ArcCorp. Known for the Suckerpunch distortion cannons.",
    also: 'Joker,JOKR',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Preacher Armament',
    category: 'Weapons',
    definition:
      "A maker of weapons for working security. Known for scatterguns named Salvation, Absolution and Condemnation, with a religious branding theme.",
    also: 'Preacher Armaments,Preacher,PRAR',
    lastVerified: '2026-11-04',
  },
  {
    term: 'VOLT',
    category: 'Weapons',
    definition:
      "Verified Offworld Laser Technologies. An energy weapons maker that uses proven technology to keep prices low. Makes the Pulse, Zenith and Parallax.",
    also: 'Verified Offworld Laser Technologies,Verified Offworld',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Hedeby Gunworks',
    category: 'Weapons',
    definition:
      "A personal-weapons maker known for classic designs with Banu manufacturing techniques. Its first success was the Salvo Frag Pistol.",
    also: 'Hedeby,HDGW',
    lastVerified: '2026-11-04',
  },
  // ─────────────── Components ───────────────
  {
    term: 'Power Plant',
    category: 'Components',
    definition:
      "The ship part that makes the energy everything else runs on. Its output depends on its size, model and type.",
    also: 'powerplant,power plants',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Cooler',
    category: 'Components',
    definition:
      "The ship part that removes heat from other parts so they don't overheat. It dumps that heat into space, so the harder it works, the easier your ship is to spot by heat.",
    also: 'coolers',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Shield Generator',
    category: 'Components',
    definition:
      "The ship part that makes the protective energy barrier around your ship. Shields deflect projectiles, explosions and debris.",
    also: 'shield gen,shield generators',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Quantum Drive',
    category: 'Components',
    definition:
      "The ship engine that lets you cross huge distances very fast. It powers quantum travel between planets, moons and stations.",
    also: 'QD,quantum drives,Q-drive',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Radar',
    category: 'Components',
    definition:
      "The ship part that detects other objects by their signature. Think of it as your ship's sensors. Better radars spot more at longer range.",
    also: 'radars,sensors',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Component Grade',
    category: 'Components',
    definition:
      "A letter from A to D that ranks a ship part. A is best, B a good upgrade, C the common default, D lower quality. Stock ships often come with C-grade parts.",
    also: 'component grades,A grade,B grade,C grade,D grade,Grade A,Grade B,Grade C,Grade D',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Component Class',
    category: 'Components',
    definition:
      "The style of a ship part. Civilian is balanced, Industrial is durable, and Military is powerful but loud. Stealth is quiet but fragile. Competition is high performance but fragile and loud.",
    also: 'component classes,item class,Civilian class,Industrial class,Military class,Stealth class,Competition class',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Component Size',
    category: 'Components',
    definition:
      "Ship parts come in five sizes: Vehicle (0), Small (1), Medium (2), Large (3) and Capital (4). A part only fits a slot of its own size.",
    also: 'component sizes,component size',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Atlas',
    category: 'Components',
    definition:
      "Roberts Space Industries' small Civilian quantum drive, rated A grade. A top-end option for small ships.",
    also: 'Atlas quantum drive,RSI Atlas',
    lastVerified: '2026-11-04',
  },
  {
    term: 'XL-1',
    category: 'Components',
    definition:
      "Wei-Tek's medium Military quantum drive, rated A grade. Blends performance and durability.",
    also: 'XL1,XL-1 quantum drive,Wei-Tek XL-1',
    lastVerified: '2026-11-04',
  },
  {
    term: 'FR-66',
    category: 'Components',
    definition:
      "Gorgon Defender Industries' small Military shield generator, rated A grade. Described as one of the most versatile small shield generators available.",
    also: 'FR66,FR-66 shield,Gorgon FR-66',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Juno Starwerk',
    category: 'Components',
    definition:
      "A very old ship component maker. Makes coolers, power plants and quantum drives. Best known for its power plant lines, such as Diligence and Endurance.",
    also: 'Juno,JUST',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Lightning Power',
    category: 'Components',
    definition:
      "A ship component maker that produces coolers and power plants.",
    also: 'Lightning Power Ltd.,Lightning Power Ltd,LPLT',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Tyler Design & Tech',
    category: 'Components',
    definition:
      "A ship component maker with stealth-focused power plants and coolers. They trade performance for harder-to-detect heat signatures.",
    also: 'Tyler Design,Tyler Design and Tech,TYDT',
    lastVerified: '2026-11-04',
  },
  {
    term: 'ACOM',
    category: 'Components',
    definition:
      "A racing-focused maker of batteries, coolers and power plants. Known for orange and black parts and compound names like QuikCool.",
    also: 'ACOM components',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Gorgon Defender Industries',
    category: 'Components',
    definition:
      "A shield generator maker. Founded by survivors of the Fall of Caliban to sell defensive systems to civilians. Now supplies the UEE military too. Makes the FR-66.",
    also: 'Gorgon,Gorgon Defender,GODI',
    lastVerified: '2026-11-04',
  },
  {
    term: 'Wei-Tek',
    category: 'Components',
    definition:
      "A ship component maker specializing in quantum drives and quantum interdiction (the tech that disrupts them). Makes the XL-1.",
    also: 'Wei-Tek quantum,WETK',
    lastVerified: '2026-11-04',
  },
]

export const CATEGORIES: GlossaryCategory[] = [
  'Currency',
  'Ships',
  'Gameplay',
  'Community',
  'Technical',
  'Locations',
  'Weapons',
  'Components',
]
