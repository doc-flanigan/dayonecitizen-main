import type { Metadata } from 'next'
import Image from 'next/image'
import Link from '@/components/Link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { GuideProgress, DoThisNow } from '@/components/GuideProgress'
import Term from '@/components/Term'
import SourceLink from '@/components/SourceLink'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'How to Get to Your Ship in Star Citizen',
  description:
    'Hab to hangar routes in all four Star Citizen cities: Lorville metro, Area18 CityFlight, New Babbage MT Metroloop, and Orison shuttles.',
  alternates: { canonical: '/day-one-citizen/getting-around' },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'How to Get to Your Ship in Star Citizen',
    description:
      'Hab to hangar routes in Lorville, Area18, New Babbage, and Orison, step by step for every starting city in Star Citizen.',
    url: '/day-one-citizen/getting-around',
    type: 'article',
  },
}

// Article structured data so this page's own content, not just its FAQ, is
// recognized as an article.
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get to Your Ship in Star Citizen',
  description:
    'Hab to hangar routes in Lorville, Area18, New Babbage, and Orison, step by step for every starting city in Star Citizen.',
  author: { '@type': 'Person', name: SITE.author, url: `${SITE.url}/about` },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  mainEntityOfPage: `${SITE.url}/day-one-citizen/getting-around`,
}

// FAQPage structured data — mirrors the visible "Common questions" section so
// this page can earn rich results and AI answer-engine citations.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you get from your hab to your ship in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Take the elevator down to the ground floor of your hab, then ride city transit to the spaceport. Get off at the first stop and go through customs. At an ASOP terminal, select Deliver and then Retrieve, and take a hangar elevator to your ship. Lorville uses its metro, Area18 uses CityFlight, New Babbage uses the MT Metroloop, and Orison uses a shuttle and an elevator.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which stop do you get off at on the city train?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Lorville, Area18, and New Babbage, take the line toward the spaceport and get off at the first stop. The lines form loops, so staying on takes you past it. Orison uses a shuttle to Providence Platform instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a known problem with the Lorville tram?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. In Alpha 4.10.2, the tram from Metro Center to Teasa Spaceport in Lorville can throw you out of the tram and may kill you. RSI says to move well away from the doors after you board.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you need to holster weapons in cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Lorville has strict weapon restrictions in residential and commercial areas, and most spaceports have a security checkpoint before the hangar area. Walk through at normal speed with weapons holstered.',
      },
    },
  ],
}

export default function GettingAroundPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Day One Citizen', url: '/day-one-citizen' },
          { name: 'Getting Around', url: '/day-one-citizen/getting-around' },
        ]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-12 pt-32 sm:pt-40">
          <div className="container-narrow">
            <Link
              href="/day-one-citizen"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-gold"
            >
              <ArrowLeft size={12} aria-hidden /> Day One Citizen
            </Link>
            <GuideProgress slug="getting-around" />
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Getting from your hab to the hangar
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              Your <Term name="Hab">hab</Term> is in a city. Your ship is in a hangar at the
              spaceport. The route between them is different in each city — here is each one,
              step by step.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">
          <DoThisNow slug="getting-around" />

          <div className="rounded-2xl border border-white/10 bg-navyLight/20 p-6 text-sm text-starwhite/80">
            <strong className="text-starwhite">Universal tip before you start:</strong>{' '}
            Press{' '}
            <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F</kbd>{' '}
            to use panels, doors, and elevators. Hold it to see everything you can use
            highlighted in green, and to open the{' '}
            <Term name="Inner Thought">Inner Thought</Term> menu. Each route below follows
            RSI&rsquo;s own &ldquo;Now Leaving&rdquo; guide for that city, linked in its section.
          </div>

          <figure className="overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/guides/getting-around-interact-highlight.webp"
              alt="Holding the interact key highlights usable doors and panels in green"
              width={1920}
              height={804}
              className="h-auto w-full"
            />
            <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
              Hold F and every usable door, panel, or elevator nearby lights up in green.
            </figcaption>
          </figure>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              <Term name="Lorville">Lorville</Term> &mdash; <Term name="Hurston">Hurston</Term>
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                You wake up in the L-19 <Term name="Hab">hab</Term>. Your ship waits at Teasa
                Spaceport. The trip uses the Lorville Rapid Transit System.{' '}
                <SourceLink href="https://support.robertsspaceindustries.com/hc/en-us/articles/360048403313-Now-Leaving-Lorville">Official RSI guide</SourceLink>
              </p>
              <ol className="list-decimal space-y-4 pl-6">
                <li>
                  Find the single elevator on the upper level of your hab. Go down to the
                  Ground Floor to get out of the building and into the city.
                </li>
                <li>
                  Head for the Metro Center, the main station of the transit system. Follow
                  the steps down to the lines.
                </li>
                <li>
                  Follow the signs to the{' '}
                  <strong className="text-starwhite">Spaceport Line</strong>. The lines form
                  loops, so get off at the <strong className="text-starwhite">first stop</strong>.
                  Trains arrive often, so a missed one is no trouble.
                </li>
              </ol>
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/guides/getting-around-lorville-metro.webp"
                  alt="Lorville Metro Center platform with an arriving train"
                  width={1920}
                  height={804}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  Metro Center, Lorville — ride the Spaceport Line and get off at the first stop.
                </figcaption>
              </figure>
              <ol className="list-decimal space-y-4 pl-6" start={4}>
                <li>
                  Leave the platform, head left, and go through the Customs Area. Then climb
                  the steps to the terminal.
                </li>
              </ol>
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/guides/getting-around-lorville-customs.webp"
                  alt="Lorville Customs Area leading up to Teasa Spaceport terminal"
                  width={1920}
                  height={804}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  The Customs Area walk-through on the way up to the Teasa Spaceport terminal.
                </figcaption>
              </figure>
              <ol className="list-decimal space-y-4 pl-6" start={5}>
                <li>
                  At the top, the Vehicle Retrieval Consoles are on your left. These are the{' '}
                  <Term name="ASOP">ASOP terminals</Term>. Choose your ship, select Deliver,
                  then select Retrieve. Note which hangar it is sent to.
                </li>
              </ol>
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/guides/getting-around-asop-retrieve.webp"
                  alt="ASOP terminal showing Deliver and Retrieve options for a selected ship"
                  width={1920}
                  height={804}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  The ASOP terminal at the Lorville Vehicle Retrieval Consoles — select Deliver, then Retrieve.
                </figcaption>
              </figure>
              <ol className="list-decimal space-y-4 pl-6" start={6}>
                <li>
                  Walk to the hangar elevators. Any elevator reaches every hangar. Pick your
                  assigned hangar, and your ship is waiting when the doors open.
                </li>
              </ol>
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/guides/getting-around-hangar-elevator.webp"
                  alt="Hangar elevator panel with the assigned hangar selected"
                  width={1920}
                  height={804}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  A hangar elevator panel — the same pattern at every spaceport, in every city.
                </figcaption>
              </figure>
              <p className="mt-4 text-sm text-muted">
                Known issue in Alpha 4.10.2: on the Metro Center to Teasa Spaceport tram, the
                doors can spin and throw you out of the tram, which may kill you. RSI says to
                move well away from the doors after you board.{' '}
                <SourceLink href="https://support.robertsspaceindustries.com/hc/en-us/articles/360056254754">Official known issues</SourceLink>
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              <Term name="Area18">Area18</Term> &mdash; <Term name="ArcCorp">ArcCorp</Term>
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                You wake up in the Adira Falls <Term name="Hab">hab</Term>. Your ship waits at
                Riker Memorial Spaceport. You ride the AC CityFlight transit to reach it.{' '}
                <SourceLink href="https://support.robertsspaceindustries.com/hc/en-us/articles/360047674554-Now-Leaving-Area18">Official RSI guide</SourceLink>
              </p>
              <ol className="list-decimal space-y-4 pl-6">
                <li>
                  Find the single elevator in your hab&rsquo;s main corridor. Go down to the
                  Ground Floor to reach the city.
                </li>
                <li>
                  Turn right and head for the ArcCorp Plaza sign. Go through the narrow alley
                  to reach the plaza.
                </li>
                <li>
                  Head right and look for the AC CityFlight sign. Go down the steps and take the
                  right-hand branch to the Spaceport platform.
                </li>
                <li>
                  Ride the train and get off at the{' '}
                  <strong className="text-starwhite">first stop</strong>. Turn right past the
                  waiting area and go through Customs.
                </li>
                <li>
                  Just ahead are the Vehicle Retrieval Consoles, also called{' '}
                  <Term name="ASOP">ASOP terminals</Term>. Choose your ship, select Deliver,
                  then select Retrieve. Note your assigned hangar.
                </li>
                <li>
                  Carry on to the main waiting area. The hangar elevators are on the right. Any
                  elevator reaches every hangar. Pick yours.
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              <Term name="New Babbage">New Babbage</Term> &mdash; <Term name="microTech">microTech</Term>
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                You wake up in The Nest <Term name="Hab">hab</Term>. Your ship waits at the
                interstellar spaceport. You ride the MT Metroloop to reach it.{' '}
                <SourceLink href="https://support.robertsspaceindustries.com/hc/en-us/articles/360048403193-Now-Leaving-New-Babbage">Official RSI guide</SourceLink>
              </p>
              <ol className="list-decimal space-y-4 pl-6">
                <li>
                  Find the single elevator next to the smaller window in your hab&rsquo;s main
                  corridor. Go down to the Ground Floor.
                </li>
                <li>
                  Head straight across toward the MT Metroloop sign. Follow the steps all the
                  way down to the platforms.
                </li>
                <li>
                  Turn left at the bottom for the{' '}
                  <strong className="text-starwhite">Spaceport line</strong>. Ride the train and
                  get off at the <strong className="text-starwhite">first stop</strong>.
                </li>
                <li>
                  Leave the platform and take any elevator up to the spaceport. You arrive at
                  the Security Checkpoint. Go through, then up the steps to the Departure Lounges.
                </li>
                <li>
                  At the top of the stairs, turn left. The Vehicle Retrieval Consoles, also called{' '}
                  <Term name="ASOP">ASOP terminals</Term>, are on your right. Choose your ship,
                  select Deliver, then select Retrieve.
                </li>
                <li>
                  The hangar elevators surround the consoles. Pick your assigned hangar, listed
                  under your name, and your ship is waiting when the doors open.
                </li>
              </ol>
              <p className="mt-4 text-sm text-muted">
                New Babbage is on microTech, a frozen world. Outside the pressurized city areas,
                temperatures are lethal without cold-weather armor. Stay indoors on your first visit.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              <Term name="Orison">Orison</Term> &mdash; <Term name="Crusader">Crusader</Term>
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Orison is built on floating platforms in the upper atmosphere of the gas giant{' '}
                <Term name="Crusader">Crusader</Term>. You wake up in the Green Circle{' '}
                <Term name="Hab">hab</Term>. Your ship waits at August Dunlow Spaceport.{' '}
                <SourceLink href="https://support.robertsspaceindustries.com/hc/en-us/articles/32579562665239-Now-Leaving-Orison">Official RSI guide</SourceLink>
              </p>
              <ol className="list-decimal space-y-4 pl-6">
                <li>
                  Leave your hab room and turn right to the lounge and elevators. Take the
                  elevator down to the Green Circle Lobby.
                </li>
                <li>
                  From the lobby, turn left and follow the exit signs out into Cloudview.
                  Straight ahead and on the right is a mass transit shuttle station.
                </li>
                <li>
                  Take the shuttle to Providence Platform. A timer shows when the next one
                  arrives.
                </li>
                <li>
                  At Providence Platform, follow the signs to the elevators. Call one and select
                  August Dunlow Spaceport.
                </li>
                <li>
                  Turn right and go through the security checkpoints and the Departure Lounges.
                  Then follow the signs to the Hangars.
                </li>
                <li>
                  Just outside the hangar elevators are the Vehicle Retrieval Terminals, also
                  called <Term name="ASOP">ASOP terminals</Term>. Choose your ship, select
                  Deliver, then select Retrieve.
                </li>
                <li>
                  Take the elevator and pick the hangar your ship was assigned. Your ship is
                  waiting when the doors open.
                </li>
              </ol>
              <p className="mt-4 text-sm text-muted">
                Orison is visually spectacular. The platforms hang above cloud layers with
                sweeping views. Take a moment on your first visit to look around.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Tips for navigating all cities</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <ul className="list-disc space-y-4 pl-6">
                <li>
                  <strong className="text-starwhite">Hold F to see what you can use</strong> —
                  anything you can interact with is highlighted in green.{' '}
                  <SourceLink href="https://support.robertsspaceindustries.com/hc/en-us/articles/360025028633-Getting-Started-in-the-Verse">Official RSI guide</SourceLink>
                </li>
                <li>
                  <strong className="text-starwhite">Follow the icons</strong> — every city in
                  Star Citizen uses a consistent icon system. Ship icons point toward spaceports.
                  Medical cross icons point toward hospitals. Shopping cart icons point toward
                  commercial areas.
                </li>
                <li>
                  <strong className="text-starwhite">The spaceport is always large</strong> — when
                  you are near it, you will see large ships in the distance above the hangar
                  bay. Use them as visual landmarks.
                </li>
                <li>
                  <strong className="text-starwhite">Security checkpoints</strong> — most
                  spaceports have a checkpoint before the hangar area. Walk through at normal
                  speed with weapons holstered. If you have an outstanding{' '}
                  <Term name="CrimeStat">CrimeStat</Term> rating, you may be detained. On
                  day one, you should have a clean record.
                </li>
                <li>
                  <strong className="text-starwhite">If you get lost</strong> — follow the in-game signs and markers to the
                  spaceport. This is RSI&rsquo;s general advice.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Common questions</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  How do you get from your hab to your ship?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Take the elevator down to the ground floor of your{' '}
                  <Term name="Hab">hab</Term>, then ride city transit to the spaceport. Get
                  off at the first stop and go through customs. At an{' '}
                  <Term name="ASOP">ASOP terminal</Term>, select Deliver and then Retrieve,
                  and take a hangar elevator to your ship.{' '}
                  <Term name="Lorville">Lorville</Term> uses its metro,{' '}
                  <Term name="Area18">Area18</Term> uses CityFlight,{' '}
                  <Term name="New Babbage">New Babbage</Term> uses the MT Metroloop, and{' '}
                  <Term name="Orison">Orison</Term> uses a shuttle and an elevator.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Which stop do you get off at on the city train?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  In Lorville, Area18, and New Babbage, take the line toward the spaceport
                  and get off at the first stop. The lines form loops, so staying on takes
                  you past it. Orison uses a shuttle to Providence Platform instead.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Is there a known problem with the Lorville tram?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Yes. In Alpha 4.10.2, the tram from Metro Center to Teasa Spaceport in
                  Lorville can throw you out of the tram and may kill you. RSI says to move
                  well away from the doors after you board.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Do you need to holster weapons in cities?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Yes. Lorville has strict weapon restrictions in residential and
                  commercial areas, and most spaceports have a security checkpoint
                  before the hangar area. Walk through at normal speed with weapons
                  holstered.
                </p>
              </div>
            </div>
          </section>

          <nav className="flex items-center justify-between border-t border-white/10 pt-8 text-sm">
            <Link
              href="/day-one-citizen/first-day"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Your first day
            </Link>
            <Link
              href="/day-one-citizen/first-flight"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Your first flight <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
