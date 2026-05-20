import type { Metadata } from 'next'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'

export const metadata: Metadata = {
  title: 'How to Add Friends in Star Citizen (2026 Guide) | dayonecitizen.com',
  description:
    'Press F1 to open mobiGlas, tap Contacts, search by RSI handle, and send a request. Step-by-step guide including party invites and crew tips.',
  alternates: { canonical: '/beyond-the-basics/adding-friends' },
  openGraph: {
    title: 'How to Add Friends in Star Citizen (2026 Guide)',
    description:
      'Press F1 to open mobiGlas, tap Contacts, search by RSI handle, and send a request. Step-by-step guide including party invites and crew tips.',
    url: '/beyond-the-basics/adding-friends',
  },
}

export default function AddingFriendsPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy min-h-screen">
        {/* Hero */}
        <section className="bg-navyLight border-b border-white/5 py-14 md:py-18">
          <div className="container-wide px-4">
            <nav className="text-sm text-muted mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span className="mx-2 text-white/20">/</span>
              <Link href="/beyond-the-basics" className="hover:text-gold transition-colors">
                Beyond the Basics
              </Link>
              <span className="mx-2 text-white/20">/</span>
              <span className="text-starwhite">Adding Friends</span>
            </nav>
            <h1 className="font-orbitron text-3xl md:text-4xl font-bold text-starwhite mb-4">
              How to Add Friends in Star Citizen (2026)
            </h1>
            <p className="text-muted text-lg max-w-2xl">
              Four ways to find your friends and get playing together — from the
              RSI website all the way to tapping someone on the shoulder in the world.
            </p>
          </div>
        </section>

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
            <h2 className="font-orbitron text-2xl font-bold text-gold mt-10 mb-4">
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
            <p className="text-muted text-sm mb-8">
              Pending requests live under your avatar menu &rarr; Settings &rarr; Friends.
              You can cancel an outgoing request from there too.
            </p>

            {/* Method 2 */}
            <h2 className="font-orbitron text-2xl font-bold text-gold mt-10 mb-4">
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

            {/* Method 3 */}
            <h2 className="font-orbitron text-2xl font-bold text-gold mt-10 mb-4">
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

            {/* Method 4 */}
            <h2 className="font-orbitron text-2xl font-bold text-gold mt-10 mb-4">
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

            {/* Accepting */}
            <h2 className="font-orbitron text-2xl font-bold text-gold mt-10 mb-4">
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

            {/* Playing together */}
            <h2 className="font-orbitron text-2xl font-bold text-gold mt-10 mb-4">
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
            <h2 className="font-orbitron text-2xl font-bold text-gold mt-10 mb-4">
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

            <h3 className="font-orbitron text-lg font-bold text-starwhite mt-8 mb-3">
              Friend shows offline when they are online
            </h3>
            <p className="text-starwhite/80 mb-8 leading-relaxed">
              Online presence updates on a delay. If you know out-of-band (Discord,
              text) that your friend is in the game, send the party invite anyway —
              invites are delivered even when the status indicator says offline.
            </p>

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
