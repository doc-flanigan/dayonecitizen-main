import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'

export const metadata: Metadata = {
  title: 'How to Form a Party in Star Citizen (2026)',
  description:
    'Press F11, open Friends tab, right-click, Invite to Party. How to send, accept, and join a party in Star Citizen so everyone lands on the same server.',
  alternates: { canonical: '/beyond-the-basics/party-management' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'How to Form a Party in Star Citizen — Invites & Joining (2026)',
    description:
      'Press F11, open Friends tab, right-click, Invite to Party. How to send, accept, and join a party in Star Citizen so everyone lands on the same server.',
    url: '/beyond-the-basics/party-management',
  },
}

// FAQPage structured data — mirrors the visible "Common questions" section so
// this page can earn rich results and AI answer-engine citations.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you form a party in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Press F11 to open the Commlink, click the Friends (Contacts) tab, right-click your friend’s name, and select Invite to Party. Once everyone accepts, the party leader clicks Enter Universe from the main menu and the whole group lands on the same server together.',
      },
    },
    {
      '@type': 'Question',
      name: 'We are in a party but on different servers — how do we fix it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both players return to the main menu. Confirm the party is still active. The leader clicks Enter Universe, then the other player follows. If it fails again, disband and re-form the party before entering.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many players can be in a party?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cap has changed across updates. For practical group play, two to eight players works best. Very large parties of ten or more can occasionally have trouble being routed to the same shard.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does quantum linking work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The party leader initiates a quantum jump. Members who are aboard the same ship or flying nearby will see a prompt to lock onto quantum link. When the leader jumps, all linked members jump together to the same destination at the same time.',
      },
    },
  ],
}

export default function PartyManagementPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy min-h-screen">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Beyond the Basics', url: '/beyond-the-basics' },
          { name: 'Party Management', url: '/beyond-the-basics/party-management' },
        ]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {/* Hero */}
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-12 pt-32 sm:pt-40">
          <div className="container-narrow">
            <Link
              href="/beyond-the-basics"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-gold"
            >
              <ArrowLeft size={12} aria-hidden /> Beyond the Basics
            </Link>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Creating and Managing Parties in Star Citizen (2026)
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              How to invite friends into a group, get everyone into the same server,
              share missions, and crew a ship together.
            </p>
          </div>
        </header>

        {/* Content */}
        <section className="py-14">
          <div className="container-wide px-4 max-w-3xl">

            <p className="text-starwhite/80 mb-4 leading-relaxed">
              To form a party in Star Citizen, press <strong className="text-starwhite">F11</strong>,
              open the Friends tab, right-click your friend&apos;s name, and choose{' '}
              <strong className="text-starwhite">Invite to Party</strong>. Once everyone
              accepts, the party leader clicks Enter Universe from the main menu and the
              whole group lands on the same server together.
            </p>

            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Before you can invite someone to a party, you need to be friends in the game.
              If you have not added them yet, see the{' '}
              <Link
                href="/beyond-the-basics/adding-friends"
                className="text-gold hover:underline"
              >
                Adding Friends guide
              </Link>{' '}
              first. Once you are friends, forming a party takes about thirty seconds.
            </p>


            {/* What a party does */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              What a party actually does
            </h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>Shows party members as friendly markers on your HUD — you can see where your friends are at a glance.</li>
              <li>Routes everyone to the same server shard when you enter the universe from the main menu together.</li>
              <li>Enables quantum linking — the pilot starts a quantum jump and nearby party members can join the jump and travel together.</li>
              <li>Shares mission objectives so everyone sees the same waypoints.</li>
              <li>Opens a dedicated party chat channel in the Commlink.</li>
            </ul>

            {/* Method 1 */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Method 1 — Invite from the Friends list (F11)
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              This is the fastest way if you are already in the game.
            </p>
            <ol className="list-decimal pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>Press <strong className="text-starwhite">F11</strong> to open the Commlink.</li>
              <li>Click the <strong className="text-starwhite">Friends</strong> (Contacts) tab.</li>
              <li>Right-click your friend&apos;s name.</li>
              <li>Select <strong className="text-starwhite">Invite to Party</strong>.</li>
              <li>They will see the invite in their Commlink. Once they accept, you are in a party together.</li>
            </ol>
            <figure className="overflow-hidden rounded-2xl border border-white/10 mb-8">
              <Image
                src="/images/guides/party-management-f11-friends-invite.jpg"
                alt="The F11 Commlink friends screen with a contact's context menu open, showing the Invite to Party option."
                width={1200}
                height={678}
                className="h-auto w-full"
              />
              <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                Right-click a friend in the F11 screen and choose Invite to Party.
              </figcaption>
            </figure>

            {/* Method 2 */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Method 2 — Invite via{' '}
              <Term name="mobiGlas">mobiGlas</Term> Contacts
            </h2>
            <ol className="list-decimal pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>Press <strong className="text-starwhite">F1</strong> to open the mobiGlas.</li>
              <li>Open the <strong className="text-starwhite">Contacts Manager</strong> app.</li>
              <li>Find the player and click <strong className="text-starwhite">Invite to Party</strong>.</li>
            </ol>

            {/* Getting on same shard */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Getting onto the same server
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Star Citizen runs multiple server shards — separate copies of the universe
              running at the same time. Being in a party does not automatically put you
              on the same one unless you follow the right process.
            </p>
            <div className="card-surface rounded-lg p-5 border border-gold/20 mb-4">
              <p className="font-semibold text-gold mb-2">The reliable method</p>
              <p className="text-starwhite/80 text-sm leading-relaxed">
                Form your party while everyone is at the main menu — before anyone clicks
                Enter Universe. The party leader enters, and the rest follow. The game
                routes everyone to the same shard automatically.
              </p>
            </div>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Already in-game and on different shards?</strong>{' '}
                Leave to the main menu, accept the party invite, then re-enter. You will
                land on the party leader&apos;s shard.
              </li>
              <li>
                <strong className="text-starwhite">Still on different shards after that?</strong>{' '}
                Both players leave to the main menu. Disband and re-form the party, then
                enter together again.
              </li>
            </ul>

            {/* Party leader */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Party leader responsibilities
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              The party leader is automatically the player who created the party.
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>Controls quantum linking for the group — initiates jumps for everyone.</li>
              <li>Can share missions so all members see the same objectives.</li>
              <li>Can transfer leadership to another member via the party screen.</li>
              <li>Can remove members if needed.</li>
            </ul>

            {/* Multi-crew */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Crewing a ship together
            </h2>
            <p className="text-starwhite/80 mb-8 leading-relaxed">
              By default, only the ship owner can operate its critical systems. To let
              party members take control of turrets, co-pilot seats, or engineering
              stations, open the vehicle management screen from your{' '}
              <Term name="mobiGlas">mobiGlas</Term> and set access permissions to{' '}
              <strong className="text-starwhite">Friends</strong> or{' '}
              <strong className="text-starwhite">Party</strong>.
            </p>

            {/* Quantum linking */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Quantum linking explained
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              <Term name="Quantum Travel">Quantum travel</Term> is the way ships cross
              long distances quickly — a faster-than-light mode that takes a few seconds
              to spool up. Quantum linking lets your entire party make that jump at the
              same time, so nobody arrives at a destination alone.
            </p>
            <p className="text-starwhite/80 mb-8 leading-relaxed">
              When the party leader initiates a quantum jump, other members aboard the
              same ship or flying nearby in their own ships will see a prompt to engage
              quantum link. Accept it, and when the leader jumps, everyone linked jumps
              simultaneously to the same destination.
            </p>

            {/* FAQ */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-6">
              Common questions
            </h2>

            <div className="space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  We are in a party but on different servers — how do we fix it?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Both players return to the main menu. Confirm the party is still
                  active. The leader clicks Enter Universe, then the other player
                  follows. If it fails again, disband and re-form the party before
                  entering.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  How many players can be in a party?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  The cap has changed across updates. For practical group play, two to
                  eight players works best. Very large parties of ten or more can
                  occasionally have trouble being routed to the same shard.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  How does quantum linking work?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  The party leader initiates a quantum jump. Members who are aboard the
                  same ship or flying nearby will see a prompt to lock onto quantum link.
                  When the leader jumps, all linked members jump together to the same
                  destination at the same time.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/beyond-the-basics/ccu-chains"
                  className="text-gold hover:underline text-sm"
                >
                  Next: CCU Chains &rarr;
                </Link>
                <Link
                  href="/beyond-the-basics"
                  className="text-muted hover:text-starwhite text-sm transition-colors"
                >
                  &larr; All guides
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-navyLight border-t border-white/5">
          <div className="container-wide px-4 text-center">
            <p className="text-muted mb-6 max-w-md mx-auto">
              Not signed up yet? Use a referral code when you create your account and
              start with fifty thousand bonus credits.
            </p>
            <CTAButton trackingLabel="beyond-basics-party-management-bottom" size="lg">
              Get your 50K UEC bonus
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
