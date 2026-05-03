import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Term from '@/components/Term'

export const metadata: Metadata = {
  title: 'How to Get to Your Ship in Star Citizen — Day One Citizen',
  description:
    'Step-by-step routes from hab to hangar in all four Star Citizen cities: Lorville transit rail, Area18 on foot, New Babbage Welcome Hub elevators, and Orison inter-platform shuttles.',
  alternates: { canonical: '/day-one-citizen/getting-around' },
  openGraph: {
    title: 'How to Get to Your Ship in Star Citizen',
    description:
      'Hab to hangar routes in Lorville, Area18, New Babbage, and Orison — step-by-step for every starting city in Star Citizen.',
    url: '/day-one-citizen/getting-around',
    type: 'article',
  },
}

export default function GettingAroundPage() {
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
            <p className="mt-5 font-mono text-xs text-gold">Section 11</p>
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

          <div className="rounded-2xl border border-white/10 bg-navyLight/20 p-6 text-sm text-starwhite/80">
            <strong className="text-starwhite">Universal tip before you start:</strong>{' '}
            Hold{' '}
            <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">F</kbd>{' '}
            on any kiosk, terminal, or information board to open the{' '}
            <Term name="Inner Thought">Inner Thought</Term> context menu. Many transit stations
            have a &ldquo;Set Destination&rdquo; option that places a navigation marker on your
            HUD to guide you to the spaceport. Use this if you get lost.
          </div>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              <Term name="Lorville">Lorville</Term> &mdash; <Term name="Hurston">Hurston</Term>
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Lorville is the largest and most complex city to navigate. It uses an automated
                transit system (the Lorville Transit rail) to move between districts.
              </p>
              <ol className="list-decimal space-y-4 pl-6">
                <li>
                  From your <Term name="Hab">hab</Term>, take the elevator down to the ground
                  floor of your hab tower. Exit the building.
                </li>
                <li>
                  Follow signage toward the transit system — look for rail station icons. The
                  Lorville transit is a monorail that connects the residential district to the
                  commercial district and the Teasa Spaceport.
                </li>
                <li>
                  Board the transit and select <strong className="text-starwhite">Teasa Spaceport</strong>{' '}
                  as your stop. The transit is automated — you just ride it.
                </li>
                <li>
                  Exit at the spaceport. Follow signs toward the hangar district. You will pass
                  a security checkpoint where your weapons are scanned. If you are carrying an
                  unholstered weapon, holster it before the checkpoint.
                </li>
                <li>
                  Find the <Term name="ASOP">ASOP terminal</Term> near the hangar bay entrance.
                  Claim your ship and proceed to your assigned hangar.
                </li>
              </ol>
              <p className="mt-4 text-sm text-muted">
                Note: Lorville has strict weapon restrictions in residential and commercial areas.
                Keep weapons holstered throughout the city.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              <Term name="Area18">Area18</Term> &mdash; <Term name="ArcCorp">ArcCorp</Term>
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Area18 is compact and the easiest city to navigate on foot. The spaceport is
                visible from most of the district.
              </p>
              <ol className="list-decimal space-y-4 pl-6">
                <li>
                  Exit your <Term name="Hab">hab</Term> via the elevator to street level.
                </li>
                <li>
                  Area18&rsquo;s commercial district is dense with shops and foot traffic.
                  Look for directional signage to the Area18 Spaceport or use{' '}
                  <Term name="Inner Thought">Inner Thought</Term> on a kiosk to set a waypoint.
                </li>
                <li>
                  Walk or take the automated people-mover transport toward the spaceport entrance.
                  The walk from the hab district is shorter in Area18 than any other city.
                </li>
                <li>
                  At the spaceport, find the <Term name="ASOP">ASOP terminal</Term> near the
                  hangar bays. Claim your ship.
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
                New Babbage is built in a clean, futuristic style with a large central hub —
                the Welcome Hub — that serves as the main transit point for the city.
              </p>
              <ol className="list-decimal space-y-4 pl-6">
                <li>
                  From your <Term name="Hab">hab</Term>, take the elevator to the Welcome Hub
                  level or to the street.
                </li>
                <li>
                  Navigate to the <strong className="text-starwhite">Welcome Hub</strong> — the
                  large central building in New Babbage. It has multiple floors with shops,
                  services, and transit connections.
                </li>
                <li>
                  Inside the Welcome Hub, look for the transit terminal or elevator to the
                  Spaceport District. The Welcome Hub connects directly to the New Babbage
                  Spaceport via elevator or transit.
                </li>
                <li>
                  At the spaceport level, proceed to the hangar district. Find the{' '}
                  <Term name="ASOP">ASOP terminal</Term> and claim your ship.
                </li>
              </ol>
              <p className="mt-4 text-sm text-muted">
                New Babbage is on microTech, a frozen world. Outside the pressurized Welcome Hub
                and city areas, temperatures are lethal without cold-weather armor. Stay indoors
                on your first visit.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              <Term name="Orison">Orison</Term> &mdash; <Term name="Crusader">Crusader</Term>
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Orison is unique — it is built on a series of floating platforms in the upper
                atmosphere of the gas giant <Term name="Crusader">Crusader</Term>. Transit
                between platforms uses inter-platform shuttles.
              </p>
              <ol className="list-decimal space-y-4 pl-6">
                <li>
                  From your <Term name="Hab">hab</Term>, exit to the platform level.
                </li>
                <li>
                  Find the shuttle terminal — usually clearly marked on the same platform as
                  the hab district. Shuttles run continuously between platforms on a timetable.
                </li>
                <li>
                  Take the shuttle toward the spaceport platform. The destination will be
                  labeled on the shuttle routes at the terminal.
                </li>
                <li>
                  At the spaceport platform, navigate to the hangar bay area. The{' '}
                  <Term name="ASOP">ASOP terminal</Term> is near the hangar entrance.
                </li>
              </ol>
              <p className="mt-4 text-sm text-muted">
                Orison is visually spectacular — the platforms hang above cloud layers with
                sweeping views. Take a moment on your first visit to look over the edge.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Tips for navigating all cities</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <ul className="list-disc space-y-4 pl-6">
                <li>
                  <strong className="text-starwhite">Use <Term name="Inner Thought">Inner Thought</Term>
                  </strong>{' '}
                  on every kiosk, map board, and information terminal you pass. The &ldquo;Set
                  Destination&rdquo; option paints a path on your HUD.
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
                  <strong className="text-starwhite">If you get completely lost</strong> — press{' '}
                  <kbd className="rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">Escape</kbd>{' '}
                  and use the Respawn option to reset your character to their home spawn point
                  (your <Term name="Hab">hab</Term>). Start the route again from there.
                </li>
              </ul>
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
