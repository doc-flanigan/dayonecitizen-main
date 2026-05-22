import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, AlertCircle } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import { DiscordCTA } from '@/components/DiscordCTA'
import Term from '@/components/Term'

export const metadata: Metadata = {
  title: 'How to Buy Star Citizen — Day One Citizen',
  description:
    'Create your RSI account, apply a referral code for 50,000 free UEC, choose a game package, and download the launcher. Every step of buying Star Citizen, no shortcuts skipped.',
  alternates: { canonical: '/day-one-citizen/buying-the-game' },
  openGraph: {
    title: 'How to Buy Star Citizen — Step by Step',
    description:
      'Create an RSI account, enter a referral code for 50,000 free UEC, pick a starter package, and download the launcher. Complete walkthrough.',
    url: '/day-one-citizen/buying-the-game',
    type: 'article',
  },
}

export default function BuyingTheGamePage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-12 pt-32 sm:pt-40">
          <div className="container-narrow">
            <Link
              href="/day-one-citizen"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-gold"
            >
              <ArrowLeft size={12} aria-hidden /> Day One Citizen
            </Link>
            <p className="mt-5 font-mono text-xs text-gold">Section 03</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              How to actually buy the game
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              Star Citizen is sold exclusively on{' '}
              <Term name="RSI">robertsspaceindustries.com</Term> — not Steam, not Epic, not
              anywhere else. Here is the exact process, including the one step most new players
              miss that costs them 50,000 free credits.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">

          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 shrink-0 text-yellow-300" size={20} aria-hidden />
              <div className="text-sm text-starwhite/90">
                <strong className="text-yellow-300">Read this before you click anything:</strong>{' '}
                The <Term name="Referral Code">referral code</Term> field appears during account
                creation. If you miss it there, you have approximately 24 hours to add it in
                your account settings — but this is unreliable and sometimes requires{' '}
                <Term name="CIG">CIG</Term> support. Enter it at sign-up. The code is{' '}
                <code className="rounded bg-spaceBlack/60 px-1.5 py-0.5 font-mono text-gold">
                  STAR-GCQJ-N6NC
                </code>{' '}
                — it gives you 50,000 free <Term name="UEC">UEC</Term>.
              </div>
            </div>
          </div>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Step 1 — Create your RSI account</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Go to <strong className="text-starwhite">robertsspaceindustries.com</strong> and
                click <strong className="text-starwhite">Enlist Now</strong> in the top navigation,
                or <strong className="text-starwhite">Create Account</strong> on any game page.
              </p>
              <p>
                You will fill in:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-starwhite">Email address</strong> — use a real one. Your
                  account is permanent, game purchase receipts go here, and future security
                  communications use this address.
                </li>
                <li>
                  <strong className="text-starwhite">Password</strong> — use a unique password.
                  Consider enabling two-factor authentication after setup.
                </li>
                <li>
                  <strong className="text-starwhite">Handle (username)</strong> — this is your
                  visible identity on{' '}
                  <Term name="Spectrum">Spectrum</Term> and in community spaces. Choose something
                  you are happy with; it is not the same as your in-game pilot name (that is set
                  at first launch).
                </li>
                <li>
                  <strong className="text-starwhite">Referral code field</strong> — enter{' '}
                  <code className="rounded bg-spaceBlack/60 px-1.5 py-0.5 font-mono text-gold">
                    STAR-GCQJ-N6NC
                  </code>{' '}
                  here. This is the only reliable window.
                </li>
              </ul>
              <p>
                Verify your email when the confirmation message arrives. Your account is not
                active until this step is complete.
              </p>
              <p className="text-sm mt-4">
                When you create your account, use a referral code to get 50,000{' '}
                <Term name="UEC">UEC</Term> free.{' '}
                <a
                  href="https://screferralreward.com"
                  className="text-gold underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener"
                >
                  screferralreward.com
                </a>{' '}
                has the code and step-by-step instructions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Step 2 — Navigate to the store</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Once logged in, go to <strong className="text-starwhite">robertsspaceindustries.com/store</strong>{' '}
                or hover over <strong className="text-starwhite">Buy Star Citizen</strong> in the
                top nav. You are looking for{' '}
                <strong className="text-starwhite">Game Packages</strong> — these are the starter
                options that include both Star Citizen access and{' '}
                <Term name="Squadron 42">Squadron 42</Term>.
              </p>
              <p>
                Do not buy a standalone ship from the pledge store on day one. Standalone ships
                do not include game access — they are add-ons for players who already own the
                base game. You need a game package first.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Step 3 — Choose your package</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                The cheapest game packages start around $45 USD and include:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Access to the Star Citizen alpha (the live{' '}
                  <Term name="PU">Persistent Universe</Term>)</li>
                <li>Access to <Term name="Squadron 42">Squadron 42</Term> when it releases</li>
                <li>A starter ship with standard insurance</li>
                <li>1,000 starting <Term name="aUEC">aUEC</Term></li>
              </ul>
              <p>
                The two common starter ships are the{' '}
                <Term name="Aurora">Aurora MR</Term> and the{' '}
                <Term name="Mustang">Mustang Alpha</Term>. A full comparison of these is in{' '}
                <Link href="/day-one-citizen/starter-package" className="text-gold underline-offset-4 hover:underline">
                  Section 05: Which starter package should you buy?
                </Link>
              </p>
              <p>
                The short version: the Aurora MR is the more practical choice for a new player.
                It carries cargo, which opens delivery missions immediately. The Mustang Alpha is
                faster and more fun to fly, but carries almost nothing.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Step 4 — Checkout</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Add the package to your cart and proceed to checkout.{' '}
                <Term name="RSI">RSI</Term> accepts major credit and debit cards, PayPal, and
                some regional payment methods. The checkout is standard — billing address,
                payment details, order confirmation.
              </p>
              <p>
                After payment you will receive a confirmation email. Your account will be
                upgraded immediately — no need to wait for any physical item (there is none).
                Your ship is in your in-game{' '}
                <Term name="Hangar">hangar</Term> from the moment the purchase clears.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Step 5 — Download the launcher</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                After purchase, log into your{' '}
                <Term name="RSI">RSI</Term> account and go to your{' '}
                <strong className="text-starwhite">Library</strong>. You will see Star Citizen
                listed. Click <strong className="text-starwhite">Download</strong> to get the
                RSI Launcher installer — a small executable file (around 20 MB).
              </p>
              <p>
                Run the installer to install the RSI Launcher on your PC. The Launcher then
                downloads the actual game — this is where the 100 GB+ comes from. Start this
                process well before you want to play. On a typical home connection, the full
                download can take several hours.
              </p>
              <p>
                Everything about the launcher — which version to use, how to verify files, and
                what <Term name="PTU">PTU</Term> means — is covered in{' '}
                <Link href="/day-one-citizen/rsi-launcher" className="text-gold underline-offset-4 hover:underline">
                  Section 07: Using the RSI Launcher
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">After you buy: the referral bonus timeline</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                If you entered a <Term name="Referral Code">referral code</Term> at sign-up,
                your 50,000 <Term name="UEC">UEC</Term> bonus is credited to your account. This
                appears in your wallet in-game as a starting balance. It does not expire — it
                waits for you in your account until the next major{' '}
                <Term name="Wipe">wipe</Term>, after which it is reset alongside all other
                earned funds (but your pledged ships and items are never wiped).
              </p>
              <p>
                50,000 <Term name="UEC">UEC</Term> on day one buys you starter armor sets,
                weapons, and consumables at shops around the{' '}
                <Term name="PU">Persistent Universe</Term> — enough to gear up without grinding
                for your first few sessions.
              </p>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" trackingLabel="buying-the-game-cta" />
            <DiscordCTA />
          </div>

          <nav className="flex items-center justify-between text-sm">
            <Link
              href="/day-one-citizen/system-specs"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> System specs
            </Link>
            <Link
              href="/day-one-citizen/pledge-vs-purchase"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Pledge vs purchase <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
