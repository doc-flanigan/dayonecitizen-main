import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, AlertCircle, Plane, Download, Wallet } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import PageSources from '@/components/PageSources'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import { NEXT_FREE_FLY, getFreeFlyStatus } from '@/data/next-free-fly'

// Status is time-dependent, so this page must not be frozen at build time.
export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Star Citizen Free Fly Events — Play Free',
  description:
    'Star Citizen Free Fly events let you play the full game free. What a Free Fly is, how to join with a free account, and how to get the referral code bonus.',
  alternates: { canonical: '/free-fly-events' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Star Citizen Free Fly Events — Play Free, No Purchase Needed',
    description:
      'What a Star Citizen Free Fly is, how to join for free, and how to get 50,000 free UEC with a referral code.',
    url: '/free-fly-events',
    type: 'article',
  },
}

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })

export default function FreeFlyPage() {
  const status = getFreeFlyStatus()
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Free Fly Events', url: '/free-fly-events' },
        ]} />
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/30 pb-16 pt-32 sm:pt-40">
          <div className="container-wide">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Free Fly Events
            </p>
            <h1 className="heading-display text-4xl sm:text-5xl">
              Star Citizen, free for a week.{' '}
              <span className="text-gold-gradient">No purchase needed.</span>
            </h1>
            <p className="mt-5 max-w-3xl text-base text-muted">
              Several times a year, <Term name="CIG">Cloud Imperium</Term>{' '}
              opens Star Citizen up for free. Download the full game, fly real
              ships, explore <Term name="the 'Verse">the &lsquo;Verse</Term>{' '}
              — no <Term name="Pledge">pledge</Term> required. This page explains
              what a <Term name="Free Fly">Free Fly</Term> is and how to join.
            </p>
            <p className="mt-3 max-w-3xl text-sm text-muted">
              Exact dates for every Free Fly, past and next, live on{' '}
              <a
                href="https://freeflyevent.com/event-history"
                target="_blank"
                rel="noopener"
                className="text-gold underline-offset-4 hover:underline"
              >
                freeflyevent.com&rsquo;s event history
              </a>{' '}
              and its{' '}
              <a
                href="https://freeflyevent.com/next-free-fly"
                target="_blank"
                rel="noopener"
                className="text-gold underline-offset-4 hover:underline"
              >
                next Free Fly page
              </a>
              .
            </p>
          </div>
        </header>

        {/* What is a Free Fly */}
        <section className="border-b border-white/5 py-20">
          <div className="container-wide">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="card-surface p-6">
                <Download className="mb-4 text-gold" size={28} aria-hidden />
                <h2 className="heading-display text-xl">What it is</h2>
                <p className="mt-3 text-sm leading-relaxed text-starwhite/85">
                  A promotional window, usually ten to fourteen days, where the full
                  Star Citizen alpha is downloadable and playable for free.
                  You make a free <Term name="RSI">RSI</Term> account, download
                  the launcher, and start flying.
                </p>
              </div>
              <div className="card-surface p-6">
                <Plane className="mb-4 text-gold" size={28} aria-hidden />
                <h2 className="heading-display text-xl">What you can do</h2>
                <p className="mt-3 text-sm leading-relaxed text-starwhite/85">
                  Fly the loaner ships on offer, run missions, explore planets
                  and moons in <Term name="Pyro">Pyro</Term> and beyond, dogfight,{' '}
                  <Term name="Mining">mine</Term>,{' '}
                  <Term name="Salvage">salvage</Term>, trade. The whole game is
                  open. Your character is{' '}
                  <Term name="Wipe">wiped</Term> after the event ends.
                </p>
              </div>
              <div className="card-surface p-6">
                <Wallet className="mb-4 text-gold" size={28} aria-hidden />
                <h2 className="heading-display text-xl">What it costs</h2>
                <p className="mt-3 text-sm leading-relaxed text-starwhite/85">
                  Nothing. If you decide to keep playing after the event, the
                  cheapest game package is $45 on sale ($60 list price, as of
                  September 2026). Use a{' '}
                  <Term name="Referral Code">referral code</Term> on signup
                  for 50,000 <Term name="UEC">UEC</Term> free — see the{' '}
                  <Link
                    href="/referral-code"
                    className="text-gold underline-offset-4 hover:underline"
                  >
                    step-by-step referral code walkthrough
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current event status (derived from data) */}
        <section className="border-b border-white/5 bg-gradient-to-br from-navyLight via-navy to-navyLight py-16">
          <div className="container-wide">
            <div className="card-surface relative overflow-hidden p-8 sm:p-10">
              <div className="absolute right-0 top-0 h-48 w-48 -translate-y-12 translate-x-16 rounded-full bg-gold/15 blur-3xl" />
              <div className="relative">
                {status === 'ended' && (
                  <>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted">
                      <Clock size={12} aria-hidden /> No Free Fly running right now
                    </span>
                    <h2 className="heading-display mt-3 text-3xl">
                      No Free Fly is running at the moment.
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm text-muted">
                      <Term name="CIG">CIG</Term> announces each window by official
                      blog post, usually one to two weeks ahead.{' '}
                      <a
                        href="https://freeflyevent.com/next-free-fly"
                        target="_blank"
                        rel="noopener"
                        className="text-gold underline-offset-4 hover:underline"
                      >
                        See when the next Free Fly is
                      </a>
                      , or{' '}
                      <a
                        href="https://freeflyevent.com/free-fly.ics"
                        target="_blank"
                        rel="noopener"
                        className="text-gold underline-offset-4 hover:underline"
                      >
                        add the Free Fly calendar to your phone
                      </a>
                      . The 50,000 <Term name="UEC">UEC</Term>{' '}
                      <Term name="Referral Code">referral code</Term> bonus does not
                      depend on an event. It applies whenever you create an account.
                    </p>
                  </>
                )}
                {status === 'upcoming' && (
                  <>
                    <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                      <Clock size={12} aria-hidden /> Free Fly announced
                    </span>
                    <h2 className="heading-display mt-3 text-3xl">
                      {NEXT_FREE_FLY.name} is coming.
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm text-muted">
                      It opens on{' '}
                      <strong className="text-starwhite">{fmtDate(NEXT_FREE_FLY.start)}</strong>{' '}
                      and ends on{' '}
                      <strong className="text-starwhite">{fmtDate(NEXT_FREE_FLY.end)}</strong>.
                      Anyone can play the full game free, with no{' '}
                      <Term name="Pledge">pledge</Term> required. Ships on offer,
                      rules and exact times are on{' '}
                      <a
                        href="https://freeflyevent.com/next-free-fly"
                        target="_blank"
                        rel="noopener"
                        className="text-gold underline-offset-4 hover:underline"
                      >
                        the Free Fly event page
                      </a>
                      . The 50,000 <Term name="UEC">UEC</Term>{' '}
                      <Term name="Referral Code">referral code</Term> bonus does not
                      depend on an event. It applies whenever you create an account.
                    </p>
                  </>
                )}
                {status === 'active' && (
                  <>
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                      <Clock size={12} aria-hidden /> Free Fly live right now
                    </span>
                    <h2 className="heading-display mt-3 text-3xl">
                      {NEXT_FREE_FLY.name} is live.
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm text-muted">
                      Anyone can download and play the full game for free from{' '}
                      <strong className="text-starwhite">{NEXT_FREE_FLY.label}</strong>
                      , with no <Term name="Pledge">pledge</Term> required. Ships on
                      offer, rules and exact times are on{' '}
                      <a
                        href="https://freeflyevent.com/next-free-fly"
                        target="_blank"
                        rel="noopener"
                        className="text-gold underline-offset-4 hover:underline"
                      >
                        freeflyevent.com
                      </a>
                      . Sign up with a <Term name="Referral Code">referral code</Term>{' '}
                      and you get 50,000 <Term name="UEC">UEC</Term> free.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Referral CTA block */}
        <section className="border-b border-white/5 bg-gradient-to-r from-gold/10 via-navyLight to-navy py-16">
          <div className="container-wide flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="heading-display text-2xl sm:text-3xl">
                During Free Fly: use a referral code on signup.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-starwhite/85">
                You can use a <Term name="Referral Code">referral code</Term>{' '}
                <strong>only</strong> on a brand new account. If you create
                your free Star Citizen account during a{' '}
                <Term name="Free Fly">Free Fly</Term> and decide to{' '}
                <Term name="Pledge">pledge</Term> later, the 50,000{' '}
                <Term name="UEC">UEC</Term> bonus carries over to your real
                character. Don&rsquo;t skip this step.
              </p>
            </div>
            <CTAButton size="lg" trackingLabel="freefly-cta">
              Begin with a boost
            </CTAButton>
          </div>
        </section>

        <section className="border-b border-white/5 py-16">
          <div className="container-narrow">
            <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-0.5 text-yellow-300" size={20} aria-hidden />
                <div className="text-sm text-starwhite/90">
                  <strong className="text-yellow-300">Heads up:</strong>{' '}
                  <Term name="Free Fly">Free Fly</Term> servers get hammered.
                  Expect queue times, occasional crashes, and slightly degraded
                  performance. It&rsquo;s the best way to try the game, but
                  it&rsquo;s not a representative experience of normal weeks.
                  Stick around past the event for a fairer impression.
                </div>
              </div>
            </div>
            <p className="text-sm mt-4 text-starwhite/80">
              Exact dates for every Free Fly, past and next, are on{' '}
              <a
                href="https://freeflyevent.com/event-history"
                className="text-gold underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener"
              >
                the full event history
              </a>{' '}
              and{' '}
              <a
                href="https://freeflyevent.com/next-free-fly"
                className="text-gold underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener"
              >
                the next Free Fly page
              </a>
              . New to the game? The{' '}
              <a
                href="https://freeflyevent.com/event-guide"
                className="text-gold underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener"
              >
                first-session guide
              </a>{' '}
              walks through your first Free Fly.
            </p>
          </div>
        </section>

      </main>
      <PageSources route="/free-fly-events" />
      <Footer />
    </>
  )
}
