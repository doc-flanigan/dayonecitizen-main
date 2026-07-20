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
  title: 'How to Add Friends in Star Citizen (2026 Guide)',
  description:
    'Press F1 to open mobiGlas, tap Contacts, search by RSI handle, and send a request. Step-by-step guide including party invites and crew tips.',
  alternates: { canonical: '/beyond-the-basics/adding-friends' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'How to Add Friends in Star Citizen (2026 Guide)',
    description:
      'Press F1 to open mobiGlas, tap Contacts, search by RSI handle, and send a request. Step-by-step guide including party invites and crew tips.',
    url: '/beyond-the-basics/adding-friends',
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
      name: 'How do you add a friend in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Four ways: on Spectrum (the official RSI forum), search the player’s handle and click Add Friend; from the game’s main menu, use the + Add Friend button in the Friends panel; in-game, press F11 to open the Commlink, find them in Global Chat’s Members tab, and choose Send Friend Request; or, if they are standing next to you, hold F for the Inner Thought wheel, aim at them, and select Add Contact.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do you accept a friend request in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In any of three places: on Spectrum under your avatar menu → Settings → Friends; in the main menu’s Friends panel, where pending requests sit above accepted contacts; or in-game via F11 → Contacts tab, with pending requests at the top.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you need a player’s handle to add them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only from a distance. Spectrum, main-menu, and Commlink requests need the exact handle. If the player is standing within a few metres of you in the world, hold F to open the Inner Thought wheel, aim at them, and select Add Contact — no handle required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are my friend and I not on the same server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Being friends does not put you on the same server shard — Star Citizen splits players across parallel copies of the universe. Form a party before anyone enters the universe: press F11, right-click your friend’s name in the Contacts tab, and choose Invite to Party. When the party leader clicks Enter Universe, the game routes everyone to the same shard.',
      },
    },
  ],
}

export default function AddingFriendsPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy min-h-screen">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Beyond the Basics', url: '/beyond-the-basics' },
          { name: 'Adding Friends', url: '/beyond-the-basics/adding-friends' },
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
              How to Add Friends in Star Citizen (2026)
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              Four ways to find your friends and get playing together — from the
              RSI website all the way to tapping someone on the shoulder in the world.
            </p>
          </div>
        </header>

        {/* Content */}
        <section className="py-14">
          <div className="container-wide px-4 max-w-3xl">

            <p className="text-starwhite/80 mb-6 leading-relaxed">
              Star Citizen uses your <strong className="text-starwhite">RSI handle</strong> — the
              username you chose when you created your account — as your in-game identity. To
              add someone, you need their handle or you need to be standing next to them
              in the world.
            </p>

            {/* Method 1 */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Method 1 — Add via the RSI website
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              This works even when the game is not running. Head to{' '}
              <a
                href="https://robertsspaceindustries.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline-offset-2 hover:underline"
              >
                robertsspaceindustries.com
              </a>{' '}
              and open <Term name="Spectrum">Spectrum</Term>, the official RSI forum
              and social platform.
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-starwhite/80">
              <li>Sign in and open Spectrum.</li>
              <li>Click the search icon and type your friend&apos;s exact handle.</li>
              <li>Open their profile from the results.</li>
              <li>Click <strong className="text-starwhite">Add Friend</strong>.</li>
              <li>They accept the request from Spectrum or in-game. Done.</li>
            </ol>
            <figure className="overflow-hidden rounded-2xl border border-white/10 max-w-md mx-auto mb-6">
              <Image
                src="/images/guides/sc-add-friend-spectrum-search.jpg"
                alt="Spectrum search results for a player handle, showing the matching player profile ready to open and send a friend request."
                width={606}
                height={723}
                className="h-auto w-full"
              />
              <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                Searching a handle on Spectrum — open the profile and click Add Friend.
              </figcaption>
            </figure>
            <p className="text-muted text-sm mb-8">
              Pending requests live under your avatar menu &rarr; Settings &rarr; Friends.
              You can cancel an outgoing request from there too.
            </p>
            <figure className="overflow-hidden rounded-2xl border border-white/10 mb-8">
              <Image
                src="/images/guides/sc-add-friend-pending-requests.jpg"
                alt="The Friends settings page listing pending outgoing friend requests, each with a cancel option."
                width={1200}
                height={370}
                className="h-auto w-full"
              />
              <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                Pending requests wait here until your friend accepts — you can cancel one too.
              </figcaption>
            </figure>

            {/* Method 2 */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Method 2 — Add from the main menu
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Launch Star Citizen but do not click Enter Universe yet. On the right side
              of the main menu you will see a Friends panel.
            </p>
            <ol className="list-decimal pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>Click the <strong className="text-starwhite">+ Add Friend</strong> button at the top of the panel.</li>
              <li>Type the player&apos;s handle and confirm.</li>
              <li>The request goes out the same way as a Spectrum request.</li>
            </ol>
            <figure className="overflow-hidden rounded-2xl border border-white/10 max-w-md mx-auto mb-8">
              <Image
                src="/images/guides/sc-add-friend-main-menu-bar.jpg"
                alt="The Friends panel on the Star Citizen main menu with the Add Friend button at the top and the contacts list below."
                width={420}
                height={541}
                className="h-auto w-full"
              />
              <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                The main-menu Friends panel — the + Add Friend button sits at the top.
              </figcaption>
            </figure>

            {/* Method 3 */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Method 3 — Add in-game via{' '}
              <Term name="mobiGlas">mobiGlas</Term>
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Once you are inside the{' '}
              <Term name="PU">Persistent Universe</Term>, you can send a request
              without leaving the game.
            </p>
            <ol className="list-decimal pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>Press <strong className="text-starwhite">F11</strong> to open the Commlink (or F1 for mobiGlas &rarr; Commlink app).</li>
              <li>Select <strong className="text-starwhite">Global Chat</strong> from the sidebar.</li>
              <li>Click the <strong className="text-starwhite">Members</strong> tab on the right — it lists everyone in the channel right now.</li>
              <li>Click on a player&apos;s name and choose <strong className="text-starwhite">Send Friend Request</strong>.</li>
            </ol>
            <figure className="overflow-hidden rounded-2xl border border-white/10 mb-8">
              <Image
                src="/images/guides/sc-add-friend-server-player-list.jpg"
                alt="The in-game Commlink chat window with the Members list open, showing every player on the server and the option to send a friend request."
                width={1200}
                height={611}
                className="h-auto w-full"
              />
              <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                The Members tab lists everyone in the channel — click a name to send a request.
              </figcaption>
            </figure>

            {/* Method 4 */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Method 4 — Add via the{' '}
              <Term name="Inner Thought">Inner Thought</Term> wheel
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              If someone is standing right next to you in the world, you do not even need
              their handle.
            </p>
            <ol className="list-decimal pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>Walk up so the other player is within a few metres of you.</li>
              <li>Hold <strong className="text-starwhite">F</strong> to open the Inner Thought interaction wheel.</li>
              <li>Aim at them and select <strong className="text-starwhite">Add Contact</strong>.</li>
              <li>The request goes out the normal way from there.</li>
            </ol>
            <figure className="overflow-hidden rounded-2xl border border-white/10 mb-8">
              <Image
                src="/images/guides/sc-add-friend-personal-inner-thought.jpg"
                alt="A first-person view of another player with the Inner Thought interaction wheel open, highlighting the Add Contact option."
                width={1200}
                height={809}
                className="h-auto w-full"
              />
              <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                Hold F while looking at a nearby player and pick Add Contact — no handle needed.
              </figcaption>
            </figure>

            {/* Accepting */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Accepting an incoming request
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Requests appear in three places — accept from whichever is easiest:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li><strong className="text-starwhite">Spectrum:</strong> avatar menu &rarr; Settings &rarr; Friends &rarr; Accept.</li>
              <li><strong className="text-starwhite">Main menu:</strong> the Friends panel shows pending requests above your accepted contacts.</li>
              <li><strong className="text-starwhite">In-game:</strong> press F11 &rarr; Contacts tab &rarr; pending requests at the top.</li>
            </ul>
            <figure className="overflow-hidden rounded-2xl border border-white/10 mb-8">
              <Image
                src="/images/guides/sc-add-friend-incoming-request.jpg"
                alt="An incoming friend request shown in the contacts list with accept and decline buttons next to the sender's handle."
                width={1173}
                height={618}
                className="h-auto w-full"
              />
              <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                An incoming request — accept it from whichever screen you see first.
              </figcaption>
            </figure>

            {/* Playing together */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Playing together once you are friends
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Adding someone as a friend and playing in the same server are two separate
              steps. Star Citizen splits players across multiple server shards — think of
              each shard as its own copy of the universe running in parallel. Being
              friends does not automatically put you in the same one.
            </p>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              To get on the same shard, form a party before anyone enters the universe.
              Press F11, right-click your friend&apos;s name in the Contacts tab, and
              choose <strong className="text-starwhite">Invite to Party</strong>. Once
              they accept, the party leader clicks Enter Universe and the game routes
              everyone to the same shard automatically.
            </p>
            <p className="text-muted text-sm mb-8">
              See the{' '}
              <Link
                href="/beyond-the-basics/party-management"
                className="text-gold hover:underline"
              >
                Party Management guide
              </Link>{' '}
              for the full walk-through including quantum linking and multi-crew ships.
            </p>

            {/* Troubleshooting */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Troubleshooting: friends list looks empty
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              This is almost always a display issue — your friends are still on the
              server, the client just failed to load them. Try these steps in order:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Check Spectrum first.</strong> If
                your friends show up there, the data is intact. The in-game display is
                just out of sync.
              </li>
              <li>
                <strong className="text-starwhite">Close and reopen the Commlink.</strong>{' '}
                Press F11 to close, wait five seconds, press F11 again. Often enough on
                its own.
              </li>
              <li>
                <strong className="text-starwhite">Relog.</strong> Quit to the main menu,
                then to desktop, then re-launch. The contacts list refreshes on session
                start.
              </li>
              <li>
                <strong className="text-starwhite">Clear your USER folder.</strong> Exit
                the game and rename or delete{' '}
                <code className="bg-navyLight px-1.5 py-0.5 rounded text-xs text-gold">
                  %LOCALAPPDATA%\Star Citizen\LIVE\USER
                </code>
                . The launcher rebuilds it. Your account, characters, and friends list are
                stored server-side — they are not in that folder.
              </li>
            </ol>
            <p className="text-muted text-sm mb-4">
              Clearing the USER folder wipes local keybinds and HUD layouts. Export
              your keybindings first if you have custom ones.
            </p>

            <h3 className="font-display text-lg font-bold text-starwhite mt-8 mb-3">
              Friend shows offline when they are online
            </h3>
            <p className="text-starwhite/80 mb-8 leading-relaxed">
              Online presence updates on a delay. If you know out-of-band (Discord,
              text) that your friend is in the game, send the party invite anyway —
              invites are delivered even when the status indicator says offline.
            </p>

            {/* FAQ */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-6">
              Common questions
            </h2>

            <div className="space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What is the fastest way to add a friend?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  In-game: press F11, open Global Chat, click the Members tab,
                  click their name, and choose Send Friend Request. Standing
                  next to them? Hold F and select Add Contact — no handle
                  needed.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Where do friend requests show up?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Three places: Spectrum (avatar menu &rarr; Settings &rarr;
                  Friends), the main menu&rsquo;s Friends panel, and in-game
                  under F11 &rarr; Contacts. Accept from whichever is easiest.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  We are friends — why are we not in the same universe?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Friends are not automatically placed on the same server
                  shard. Form a party first (F11 &rarr; right-click their name
                  &rarr; Invite to Party), then have the party leader enter the
                  universe. The game routes everyone to the same shard.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/beyond-the-basics/party-management"
                  className="text-gold hover:underline text-sm"
                >
                  Next: Party Management &rarr;
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
              Not signed up yet? Use a referral code and start with fifty thousand
              bonus credits.
            </p>
            <CTAButton trackingLabel="beyond-basics-adding-friends-bottom" size="lg">
              Get your 50K UEC bonus
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
