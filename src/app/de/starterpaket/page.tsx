import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import MehrAufDeutsch from '@/components/de/MehrAufDeutsch'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Star Citizen Starterpaket (2026)',
  description:
    'RSI verkauft nur noch ein Starterpaket: das First Flight Pack, 60 US-Dollar Listenpreis, zeitweise 45 im Angebot. Das steckt drin, plus drei Leihschiffe.',
  alternates: {
    canonical: '/de/starterpaket',
    languages: {
      de: '/de/starterpaket',
      en: '/day-one-citizen/starter-package',
      'x-default': '/day-one-citizen/starter-package',
    },
  },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Star Citizen Starterpaket: Das First Flight Pack (2026)',
    description:
      'Ein Paket, ein Starterschiff, drei Leihschiffe für Bergbau, Bergung und Fracht. Das steckt im First Flight Pack.',
    url: '/de/starterpaket',
    type: 'article',
    locale: 'de_DE',
  },
}

// FAQPage JSON-LD — spiegelt die sichtbare Sektion „Häufige Fragen“ 1:1.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'de',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welches Star Citizen Starterpaket ist das beste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es gibt nur noch eins: das Star Citizen First Flight Pack. Listenpreis 60 US-Dollar (rund 64 bis 67 Euro inkl. MwSt.); im Oktober 2026 war es mit 45 US-Dollar (rund 48 bis 50 Euro) im Angebot. Es enthält die Aurora Mk II als Starterschiff, sechs Monate Versicherung, einen Self-Land-Hangar, 10.000 UEC Startgeld und den Spiel-Download.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was sind die drei Leihschiffe im First Flight Pack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laut RSI-Store enthält das Paket 30 Tage Leihzugang zu drei weiteren Starterschiffen: der Drake Golem für Bergbau, der MISC Fortune für Bergung und der Crusader Intrepid für Frachttransport. So kannst du verschiedene Spielstile ausprobieren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist mit den alten Starterpaketen passiert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RSI hat sie ersetzt. Das Citizen Starter Pack, die Mustang-Alpha-Pakete, das Aurora-MR-Paket, das Avenger-Titan-Paket und die übrigen älteren Starterpakete werden nicht mehr als Spielpakete verkauft. Die Mustang Alpha gibt es weiterhin, aber nur als einzelnes Schiff.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist ein CCU in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CCU steht für Cross-Chassis Upgrade. Damit tauschst du dein Schiff gegen ein teureres und zahlst nur die Preisdifferenz. Wer mit dem Starterpaket beginnt, verliert also nichts — das ausgegebene Geld wird beim Upgrade voll angerechnet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was enthält das Star Citizen Spielpaket?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Den Spiel-Download, die Aurora Mk II, sechs Monate Versicherung, einen Self-Land-Hangar und 10.000 UEC Startgeld. Es enthält kein Squadron 42. Wichtig: Nur Spielpakete enthalten den Spielzugang — ein einzeln gekauftes Schiff reicht nicht.',
      },
    },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Star Citizen Starterpaket: Das First Flight Pack (2026)',
  description:
    'RSI verkauft nur noch ein Starterpaket, das First Flight Pack: 60 US-Dollar Listenpreis, zeitweise 45 im Angebot. Das ist drin, plus drei Leihschiffe und der CCU-Upgrade-Pfad.',
  inLanguage: 'de',
  author: { '@type': 'Person', name: SITE.author, url: `${SITE.url}/about` },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  mainEntityOfPage: `${SITE.url}/de/starterpaket`,
}

export default function StarterpaketPage() {
  return (
    <>
      <NavBar />
      <main lang="de" className="bg-navy">
        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', url: '/' },
            { name: 'Starterpaket', url: '/de/starterpaket' },
          ]}
        />
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
            <p className="font-mono text-xs text-gold">Star Citizen auf Deutsch</p>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Das Starterpaket: das First Flight Pack
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">
                Stand Oktober 2026 verkauft RSI nur noch ein Starterpaket: das
                Star Citizen First Flight Pack.
              </strong>{' '}
              Listenpreis 60 US-Dollar, im Oktober 2026 zeitweise für 45
              US-Dollar im Angebot. Dazu gibt es drei Leihschiffe, mit denen du
              Bergbau, Bergung und Fracht ausprobieren kannst.{' '}
              <a
                href="https://robertsspaceindustries.com/en/pledge/Packages/Star-Citizen-First-Flight-Pack"
                className="text-gold underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Offizielle RSI-Store-Seite
              </a>
            </p>
            <p className="mt-4 text-sm text-muted">
              von{' '}
              <Link href="/about" className="text-gold underline-offset-4 hover:underline">
                {SITE.author}
              </Link>
              , einem langjährigen Star-Citizen-Backer.{' '}
              <Link
                href="/day-one-citizen/starter-package"
                className="text-gold underline-offset-4 hover:underline"
                hrefLang="en"
              >
                Diese Seite auf Englisch →
              </Link>
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">

          <section>
            <p className="rounded-2xl border border-gold/30 bg-gold/5 p-4 text-sm leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">Aktualisiert im Oktober 2026:</strong>{' '}
              RSI verkauft jetzt nur noch ein Starterpaket. Das Citizen Starter
              Pack, die Mustang-Alpha-Pakete, das Aurora-MR-Paket, das
              Avenger-Titan-Paket und die übrigen älteren Starterpakete gibt es
              nicht mehr als Spielpakete. Wenn dir ein älterer Ratgeber mehrere
              Pakete zur Auswahl gezeigt hat, gilt jetzt diese Seite.
            </p>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Das steckt im First Flight Pack
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Wenn du noch nicht weißt, was du im Verse machen willst — und
                das weiß am Anfang niemand —, ist die Wahl einfach: Es gibt nur
                ein Paket. Listenpreis{' '}
                <strong className="text-starwhite">60 US-Dollar</strong> (rund
                64 bis 67 Euro inklusive Mehrwertsteuer), im Oktober 2026
                zeitweise im Angebot für 45 US-Dollar (rund 48 bis 50 Euro).
                Der RSI-Store listet darin:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Die{' '}
                  <strong className="text-starwhite">Aurora Mk II</strong> als
                  Starterschiff
                </li>
                <li>
                  Sechs Monate Versicherung („Insurance“: dein Schiff wird bei
                  Verlust innerhalb dieser Frist kostenlos ersetzt)
                </li>
                <li>Einen Self-Land-Hangar, in dem dein Schiff steht</li>
                <li>
                  10.000 UEC Startgeld — die Kontowährung, nicht zu
                  verwechseln mit dem erspielten aUEC
                </li>
                <li>Den Star-Citizen-Spiel-Download</li>
              </ul>
              <p>
                Das Paket gilt nur für Star Citizen. Squadron 42, das
                Einzelspieler-Spiel, ist nicht enthalten. Der Empfehlungscode
                ist davon getrennt: Ein neues Konto mit Code bekommt zusätzlich
                50.000 UEC. Wie der Kauf im Detail abläuft, zeigt{' '}
                <Link href="/de/star-citizen-kaufen" className="text-gold underline-offset-4 hover:underline">
                  die Kauf-Anleitung
                </Link>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Drei Leihschiffe zum Ausprobieren
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Laut RSI-Store bekommst du außerdem 30 Tage Leihzugang zu drei
                weiteren Starterschiffen. Damit kannst du verschiedene
                Spielstile und Schiffshersteller kennenlernen:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">Drake Golem</strong> — für
                  den Bergbau (Erz aus Gestein abbauen)
                </li>
                <li>
                  <strong className="text-starwhite">MISC Fortune</strong> — für
                  die Bergung (Wracks ausschlachten und verwerten)
                </li>
                <li>
                  <strong className="text-starwhite">Crusader Intrepid</strong>{' '}
                  — für den Frachttransport
                </li>
              </ul>
              <p>
                Mehr sagt RSI zu den Leihschiffen nicht. Die genauen
                Bedingungen findest du auf der Store-Seite des Pakets. Nutze die
                Aurora zum Einstieg und die Leihschiffe, um herauszufinden,
                welcher Beruf dir liegt.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Und die Mustang Alpha?
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Früher war die Mustang Alpha in manchen Paketen eine
                Alternative zur Aurora. Das ist vorbei: Die Mustang Alpha wird
                nur noch als einzelnes Schiff verkauft, nicht mehr als
                Startschiff in einem Spielpaket. Du kannst sie später kaufen,
                wenn du ein schnelleres Schiff willst. Sie fliegt sich flotter
                und spaßiger, transportiert aber fast nichts. Die Aurora hat
                einen kleinen Frachtraum und öffnet dir vom ersten Tag an
                Liefermissionen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Der CCU-Pfad: warum klein anfangen nie ein Fehler ist
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Viele Neulinge haben Angst, sich mit dem Einstiegspaket zu
                „verkaufen“. Musst du nicht — dafür gibt es das{' '}
                <strong className="text-starwhite">CCU</strong> (Cross-Chassis
                Upgrade):
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  Ein CCU tauscht dein Schiff gegen ein teureres — und du
                  zahlst{' '}
                  <strong className="text-starwhite">
                    nur die Preisdifferenz
                  </strong>
                  .
                </li>
                <li>
                  Dein Startpaket behält also seinen vollen Wert. Aus der Aurora
                  kann später jedes größere Schiff werden, ohne dass du doppelt
                  bezahlst.
                </li>
                <li>
                  Noch besser: Bevor du überhaupt Echtgeld für ein Upgrade
                  ausgibst, kannst du größere Schiffe{' '}
                  <Link href="/de/echtgeld-schiffe" className="text-gold underline-offset-4 hover:underline">
                    im Spiel mit aUEC mieten oder kaufen
                  </Link>{' '}
                  und in Ruhe testen, welcher Beruf dir liegt.
                </li>
              </ul>
              <p>
                Deshalb die einfache Regel: Starte mit dem First Flight Pack,
                lerne das Spiel, entscheide später. Der umgekehrte Weg — teuer
                einsteigen und feststellen, dass dir das Schiff nicht liegt —
                ist der teurere Fehler.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Was du am ersten Tag nicht kaufen solltest
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">
                    Kein einzelnes Schiff ohne Spielpaket.
                  </strong>{' '}
                  Einzeln verkaufte Schiffe enthalten keinen Spielzugang — sie
                  sind Zusatzkäufe für Leute, die das Spiel schon besitzen.
                  Achte darauf, dass dein Kauf ein „Game Package“ ist.
                </li>
                <li>
                  <strong className="text-starwhite">
                    Kein teures Traumschiff auf Verdacht.
                  </strong>{' '}
                  Du weißt noch nicht, ob dir Fracht, Bergbau, Kampf oder
                  Bergung liegt. Jeder dieser Berufe braucht ein anderes Schiff.
                </li>
                <li>
                  <strong className="text-starwhite">
                    Kein Kauf außerhalb von robertsspaceindustries.com.
                  </strong>{' '}
                  Es gibt keine Star-Citizen-Keys — Angebote bei Key-Shops sind
                  keine offiziellen Verkaufsstellen.{' '}
                  <Link href="/de/star-citizen-kaufen" className="text-gold underline-offset-4 hover:underline">
                    Mehr dazu in der Kauf-Anleitung
                  </Link>
                  .
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Häufige Fragen</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Welches Starterpaket ist das beste?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Es gibt nur noch das First Flight Pack: 60 US-Dollar
                  Listenpreis, im Oktober 2026 zeitweise für 45 im Angebot. Es
                  enthält die Aurora Mk II, sechs Monate Versicherung, einen
                  Self-Land-Hangar, 10.000 UEC und den Spiel-Download.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Was sind die drei Leihschiffe?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  30 Tage Leihzugang zu Drake Golem (Bergbau), MISC Fortune
                  (Bergung) und Crusader Intrepid (Fracht) — laut RSI-Store im
                  First Flight Pack enthalten.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Gibt es die Mustang Alpha noch?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Ja, aber nur als einzelnes Schiff. Sie ist keine
                  Startschiff-Auswahl in einem Spielpaket mehr. Du kannst sie
                  später dazukaufen.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Was ist ein CCU?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Ein Cross-Chassis Upgrade: Du tauschst dein Schiff gegen ein
                  teureres und zahlst nur die Differenz. Dein Startpaket behält
                  seinen vollen Wert — klein anfangen kostet dich nichts extra.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Was enthält das Spielpaket?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Den Spiel-Download, die Aurora Mk II, sechs Monate
                  Versicherung, einen Self-Land-Hangar und 10.000 UEC. Nur
                  Spielpakete enthalten den Spielzugang — ein einzeln gekauftes
                  Schiff reicht nicht.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" trackingLabel="de-starterpaket-cta">
              Starte in der Aurora
            </CTAButton>
            <p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted">
              Der Button öffnet die englische RSI-Anmeldeseite mit bereits
              eingetragenem Empfehlungscode ({SITE.referralCode}) — 50.000 UEC
              Startguthaben für dein neues Konto, ohne Kaufpflicht. Der Code
              gehört dem Betreiber dieser Seite, der dafür eine kleine Belohnung
              erhalten kann. Dein Bonus wird dadurch nie kleiner.
            </p>
          </div>

          <MehrAufDeutsch current="/de/starterpaket" />

          <nav className="flex items-center justify-between text-sm">
            <Link
              href="/de/star-citizen-kaufen"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Star Citizen kaufen
            </Link>
            <Link
              href="/de/echtgeld-schiffe"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Schiffe für Echtgeld? <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
