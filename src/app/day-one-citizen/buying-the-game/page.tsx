import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, AlertCircle } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { GuideProgress, DoThisNow } from '@/components/GuideProgress'
import CTAButton from '@/components/CTAButton'
import { DiscordCTA } from '@/components/DiscordCTA'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import PageSources from '@/components/PageSources'
import SourceLink from '@/components/SourceLink'

export const metadata: Metadata = {
  title: 'How to Buy Star Citizen — Day One Citizen',
  description:
    'Create your RSI account, apply a referral code for 50,000 free UEC, buy the First Flight Pack, and download the launcher. Every step of buying Star Citizen.',
  alternates: {
    canonical: '/day-one-citizen/buying-the-game',
    languages: {
      en: '/day-one-citizen/buying-the-game',
      de: '/de/star-citizen-kaufen',
      'x-default': '/day-one-citizen/buying-the-game',
    },
  },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'How to Buy Star Citizen — Step by Step',
    description:
      'Create an RSI account, enter a referral code for 50,000 free UEC, buy the First Flight Pack, and download the launcher. Complete walkthrough.',
    url: '/day-one-citizen/buying-the-game',
    type: 'article',
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
      name: 'Where can you buy Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Star Citizen is sold exclusively on robertsspaceindustries.com — Star Citizen is not on Steam, Epic, or any other storefront. Squadron 42, the separate single-player game, has a Steam page you can wishlist. You create an RSI account, buy a game package from the official store, and download the RSI Launcher.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Star Citizen cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RSI sells one game package, the First Flight Pack. It lists at $60 and was on sale for $45 as of October 2026. It includes access to the Star Citizen alpha, the Aurora Mk II starter ship with six months of insurance, 30-day loans of three more ships, and 10,000 UEC on your account.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you play Star Citizen by buying just a ship?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Standalone ships from the pledge store do not include game access — they are add-ons for players who already own the game. You need a game package first.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do you enter a Star Citizen referral code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During account creation — the referral code field appears at sign-up, and that is the best time. If you miss it, you have 24 hours after creating the account to add it yourself in your account settings. RSI support cannot add it for you after that. A referral code gives the new account 50,000 free UEC.',
      },
    },
    {
      '@type': 'Question',
      name: 'How big is the Star Citizen download?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The RSI Launcher installer is small, but the game itself needs 150 GB or more of SSD space. On a typical home connection the full download takes several hours, so start it well before you plan to play.',
      },
    },
  ],
}

export default function BuyingTheGamePage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Day One Citizen', url: '/day-one-citizen' },
          { name: 'Buying the Game', url: '/day-one-citizen/buying-the-game' },
        ]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-12 pt-32 sm:pt-40">
          <div className="container-narrow">
            <Link
              href="/day-one-citizen"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-gold"
            >
              <ArrowLeft size={12} aria-hidden /> Day One Citizen
            </Link>
            <GuideProgress slug="buying-the-game" />
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              How to actually buy the game
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              Star Citizen is sold exclusively on{' '}
              <Term name="RSI">robertsspaceindustries.com</Term> — Star Citizen is not on Steam,
              not on Epic, and not anywhere else. Here is the exact process, including the one step most new players
              miss that costs them 50,000 free credits.
            </p>
            <p className="mt-3 text-sm">
              <Link
                href="/de/star-citizen-kaufen"
                hrefLang="de"
                lang="de"
                className="text-gold underline-offset-4 hover:underline"
              >
                Diese Seite auf Deutsch →
              </Link>
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">
          <DoThisNow slug="buying-the-game" />

          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 shrink-0 text-yellow-300" size={20} aria-hidden />
              <div className="text-sm text-starwhite/90">
                <strong className="text-yellow-300">Read this before you click anything:</strong>{' '}
                The <Term name="Referral Code">referral code</Term> field appears during account
                creation. If you miss it there, you have 24 hours to add it yourself in
                your account settings. After that, <Term name="CIG">CIG</Term> support cannot add
                it for you. Enter it at sign-up. The code is{' '}
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
                  <Term name="Spectrum">Spectrum</Term> and in community spaces. It also becomes
                  your in-game pilot name by default, so choose something you are happy with.
                  Changing it later is possible but not instant. RSI labels this box <strong className="text-starwhite">Account
                  Name</strong>. Do not type the referral code here — it has its own field.
                </li>
                <li>
                  <strong className="text-starwhite">Referral code field</strong> — enter{' '}
                  <code className="rounded bg-spaceBlack/60 px-1.5 py-0.5 font-mono text-gold">
                    STAR-GCQJ-N6NC
                  </code>{' '}
                  here. This is the only reliable window.
                </li>
              </ul>
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/referral/rsi-signup-referral-code-field.jpg"
                  alt="Star Citizen RSI signup form with the Referral Code field highlighted, showing code STAR-GCQJ-N6NC successfully applied."
                  width={1200}
                  height={1069}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  The Referral Code field on the RSI enlist page, with the code applied.
                </figcaption>
              </figure>
              <p>
                Verify your email when the confirmation message arrives. Your account is not
                active until this step is complete.
              </p>
              <p className="text-sm mt-4">
                When you create your account, use a referral code to get 50,000{' '}
                <Term name="UEC">UEC</Term> free.{' '}
                <Link
                  href="/referral-code"
                  className="text-gold underline-offset-4 hover:underline"
                >
                  Our referral code page
                </Link>{' '}
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
                package that includes Star Citizen alpha access and a starter ship.
              </p>
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/guides/getting-started-pledge-store-starter-packs-menu.jpg"
                  alt="The STORE menu on the RSI website expanded, with the Starter Packs entry visible in the navigation."
                  width={1200}
                  height={654}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  The STORE menu on the RSI website (an earlier screenshot; menu labels may differ slightly). Game Packages is where new players begin.
                </figcaption>
              </figure>
              <p>
                Do not buy a standalone ship from the pledge store on day one. Standalone ships
                do not include game access — they are add-ons for players who already own the
                base game. You need a game package first.
              </p>
              <p>
                And do not go looking for Star Citizen on Steam — it is not sold there, or on any
                console. <Term name="Squadron 42">Squadron 42</Term>, the separate single-player game,
                does have a Steam page you can wishlist. See{' '}
                <a href="https://iheldtheline.com/steam" className="text-gold underline-offset-4 hover:underline">its Steam details</a>. The full platform rundown is in{' '}
                <Link href="/day-one-citizen/is-star-citizen-on-steam" className="text-gold underline-offset-4 hover:underline">
                  Is Star Citizen on Steam?
                </Link>
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Step 3 — Choose your package</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                RSI now sells one game package, the First Flight Pack. It lists at $60
                and was on sale for $45 as of October 2026. It includes:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Access to the Star Citizen alpha (the live{' '}
                  <Term name="PU">Persistent Universe</Term>)</li>
                <li>The Aurora Mk II starter ship with six months of insurance</li>
                <li>Thirty-day loans of three more ships (Drake Golem, MISC Fortune, Crusader Intrepid)</li>
                <li>10,000 <Term name="UEC">UEC</Term> on your account</li>
              </ul>
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/guides/getting-started-game-package-starter-packs-list.jpg"
                  alt="Grid of Star Citizen game packages on the RSI pledge store, from before RSI replaced its starter packs with the First Flight Pack."
                  width={1200}
                  height={561}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  An earlier screenshot of the game package listing. Today RSI shows a single package, the First Flight Pack, and it includes game access.
                </figcaption>
              </figure>
              <p>
                The First Flight Pack comes with the{' '}
                <Term name="Aurora">Aurora Mk II</Term>. The{' '}
                <Term name="Mustang">Mustang Alpha</Term> is no longer a starting
                choice. It is sold as a separate ship you can buy later. Everything in
                the pack is covered in{' '}
                <Link href="/day-one-citizen/starter-package" className="text-gold underline-offset-4 hover:underline">
                  Section 05: The First Flight Pack
                </Link>
              </p>
              <p>
                The short version: the Aurora Mk II carries cargo, which opens delivery
                missions immediately. The Mustang Alpha is faster and more fun to fly, but
                carries almost nothing.{' '}
                <Link href="/day-one-citizen/first-ship" className="text-gold underline-offset-4 hover:underline">
                  The first-ship guide
                </Link>{' '}
                covers both ships honestly.
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
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/guides/getting-started-add-to-cart-citizen-starter-pack.jpg"
                  alt="An earlier starter pack's product page on the pledge store with its Add to Cart button. The First Flight Pack page works the same way."
                  width={952}
                  height={468}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  Adding a pack to your cart on the pledge store (earlier screenshot).
                </figcaption>
              </figure>
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
                <Term name="RSI">RSI</Term> account on the website. Find the light blue{' '}
                <strong className="text-starwhite">DOWNLOAD</strong> button to the left of your
                account icon, at the top right. Click it to reach the download page and get the
                RSI Launcher installer.{' '}
                <SourceLink href="https://support.robertsspaceindustries.com/hc/en-us/articles/115013373508-Install-the-RSI-Star-Citizen-Launcher">
                  Official RSI support article
                </SourceLink>
              </p>
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/guides/getting-started-rsi-download-button-top-nav.jpg"
                  alt="The DOWNLOAD button in the top navigation of the RSI website."
                  width={1200}
                  height={164}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  The DOWNLOAD button in the RSI site navigation — this gets you the launcher installer.
                </figcaption>
              </figure>
              <p>
                Run the installer to install the RSI Launcher on your PC. The Launcher then
                downloads the actual game — this is why you need 150 GB or more of SSD space. Start this
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
                is account money, shown on the RSI website. In the game you spend{' '}
                <Term name="aUEC">aUEC</Term>, a temporary money that a{' '}
                <Term name="Wipe">wipe</Term> can reset. RSI says your starting aUEC is a base
                amount plus any UEC on your account that did not come bundled with a game
                package. The referral bonus is that kind of UEC. Your pledged ships and items
                are never wiped.{' '}
                <SourceLink href="https://support.robertsspaceindustries.com/hc/en-us/articles/360006492734-Currencies-of-Star-Citizen-UEC-aUEC-REC-Store-Credit">
                  Official RSI support article
                </SourceLink> The full survives-vs-resets breakdown is in{' '}
                <Link href="/day-one-citizen/next-wipe" className="text-gold underline-offset-4 hover:underline">
                  when is the next wipe?
                </Link>
              </p>
              <p>
                In the game, you spend aUEC at shops around the{' '}
                <Term name="PU">Persistent Universe</Term>. In Alpha 4.10.2 the base starting
                amount is 20,000 aUEC.{' '}
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/Patch-Notes/21351-Star-Citizen-Alpha-4102">
                  Official RSI release notes
                </SourceLink>
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Where do you buy Star Citizen?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Only on <Term name="RSI">robertsspaceindustries.com</Term> —
                  Star Citizen is not on Steam or Epic. You buy a game package, then download
                  the RSI Launcher from your account library. Squadron 42, the separate
                  single-player game, has a Steam page you can wishlist.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  How much does it cost?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  The First Flight Pack lists at $60 and was on sale for $45
                  as of October 2026. It includes alpha access, the Aurora Mk II
                  with six months of insurance, and
                  10,000 <Term name="UEC">UEC</Term> on your account.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Can you start with just a ship?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  No. Standalone ships do not include game access. You need a
                  game package first — ships are add-ons for people who
                  already own the game.
                </p>
              </div>
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  When does the referral code go in?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  At sign-up — that field is the only reliable window. It
                  gives you 50,000 free <Term name="UEC">UEC</Term>. Missing
                  it leaves a 24-hour window to add it yourself. After that,{' '}
                  <Term name="CIG">CIG</Term> support cannot add it.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" href="/referral-code" trackingLabel="buying-the-game-cta" />
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

        <PageSources route="/day-one-citizen/buying-the-game" />
      </main>
      <Footer />
    </>
  )
}
