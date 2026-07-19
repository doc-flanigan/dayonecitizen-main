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
  title: 'Welches Star Citizen Starterpaket? Aurora oder Mustang (2026)',
  description:
    'Für die meisten neuen Spieler: das Citizen Starter Pack für 45 US-Dollar mit der Aurora Mk II. Warum das reicht — und wie der CCU-Upgrade-Pfad funktioniert.',
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
    title: 'Welches Star Citizen Starterpaket? Aurora oder Mustang (2026)',
    description:
      'Die klare Empfehlung: das 45-US-Dollar-Starterpaket mit der Aurora Mk II. Klein anfangen ist nie ein Fehler — dank CCU-Upgrades.',
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
        text: 'Für die meisten neuen Spieler: das Citizen Starter Pack für 45 US-Dollar. Es ist der günstigste Einstieg und enthält die Aurora Mk II mit lebenslanger Versicherung, ein Rüstungsset mit Waffe und 10.000 aUEC Startgeld. Später kannst du per CCU günstig auf ein größeres Schiff aufrüsten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Aurora Mk II oder Mustang Alpha — was ist besser für Anfänger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Aurora Mk II ist für Neulinge die praktischere Wahl: Sie hat einen kleinen Frachtraum und öffnet damit vom ersten Tag an Liefermissionen. Die Mustang Alpha fliegt sich schneller und spaßiger, transportiert aber fast nichts. Die Mustang taucht heute ohnehin vor allem in älteren Aktionspaketen auf.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist ein CCU in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CCU steht für Cross-Chassis Upgrade. Damit tauschst du dein Schiff gegen ein teureres und zahlst nur die Preisdifferenz. Wer mit dem günstigsten Paket startet, verliert also nichts — das ausgegebene Geld wird beim Upgrade voll angerechnet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was enthält jedes Star Citizen Spielpaket?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jedes Spielpaket („Game Package“) enthält den Spiel-Download, vollen Zugang zur laufenden Alpha, ein Starterschiff mit Versicherung und Startgeld in aUEC. Wichtig: Nur Spielpakete enthalten den Spielzugang — ein einzeln gekauftes Schiff reicht nicht.',
      },
    },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Welches Star Citizen Starterpaket? Aurora oder Mustang (2026)',
  description:
    'Die klare Empfehlung für neue Spieler: das Citizen Starter Pack für 45 US-Dollar mit der Aurora Mk II — plus der CCU-Upgrade-Pfad erklärt.',
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
              Welches Starterpaket? Aurora oder Mustang
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">
                Die klare Empfehlung für die meisten neuen Spieler: das Citizen
                Starter Pack für 45 US-Dollar mit der Aurora Mk II.
              </strong>{' '}
              Es ist der günstigste Einstieg — und dank CCU-Upgrades verlierst
              du nichts, wenn du klein anfängst.
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
            <h2 className="heading-display text-2xl sm:text-3xl">
              Die Empfehlung: Citizen Starter Pack mit der Aurora Mk II
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Wenn du noch nicht weißt, was du im Verse machen willst — und
                das weiß am Anfang niemand — nimm das günstigste Paket. Das
                Citizen Starter Pack für{' '}
                <strong className="text-starwhite">45 US-Dollar</strong> (rund
                48 bis 50 Euro inklusive Mehrwertsteuer) enthält:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Vollen Zugang zur laufenden Star-Citizen-Alpha</li>
                <li>
                  Die{' '}
                  <strong className="text-starwhite">Aurora Mk II</strong> als
                  Starterschiff — mit lebenslanger Versicherung („Lifetime
                  Insurance“: dein Schiff wird nach jedem Verlust kostenlos
                  ersetzt)
                </li>
                <li>Ein Rüstungsset, einen Unteranzug und eine Waffe</li>
                <li>
                  10.000 aUEC Startgeld — die Spielwährung, die du im Spiel
                  verdienst und ausgibst
                </li>
              </ul>
              <p>
                Mit dem Rüstungsset kannst du ab der ersten Sitzung auch
                Bodenmissionen spielen. Wie der Kauf im Detail abläuft, zeigt{' '}
                <Link href="/de/star-citizen-kaufen" className="text-gold underline-offset-4 hover:underline">
                  die Kauf-Anleitung
                </Link>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Aurora oder Mustang?
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Die klassische Anfängerfrage. Die kurze Fassung:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">Aurora Mk II</strong> — die
                  praktischere Wahl. Sie hat einen kleinen Frachtraum, und genau
                  der öffnet dir vom ersten Tag an Liefermissionen: die
                  einfachste Art, im Spiel Geld zu verdienen. Gutmütig zu
                  fliegen, verzeiht Fehler.
                </li>
                <li>
                  <strong className="text-starwhite">Mustang Alpha</strong> —
                  schneller und spaßiger zu fliegen, transportiert aber fast
                  nichts. Sie taucht heute vor allem in älteren und
                  gelegentlichen Aktionspaketen auf; das reguläre
                  45-US-Dollar-Paket kommt mit der Aurora.
                </li>
              </ul>
              <p>
                Unsere Empfehlung deckt sich mit der{' '}
                <Link
                  href="/day-one-citizen/starter-package"
                  className="text-gold underline-offset-4 hover:underline"
                >
                  englischen Vergleichsseite
                </Link>
                : Für die meisten Neulinge ist die Aurora Mk II das richtige
                erste Schiff.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Der CCU-Pfad: warum klein anfangen nie ein Fehler ist
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Viele Neulinge haben Angst, sich mit dem billigsten Paket zu
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
                Deshalb die einfache Regel: Starte mit 45 US-Dollar, lerne das
                Spiel, entscheide später. Der umgekehrte Weg — teuer einsteigen
                und feststellen, dass dir das Schiff nicht liegt — ist der
                teurere Fehler.
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
                  Für die meisten neuen Spieler das Citizen Starter Pack für 45
                  US-Dollar — der günstigste Einstieg, mit der Aurora Mk II,
                  lebenslanger Versicherung, Rüstungsset und 10.000 aUEC.
                  Später kannst du per CCU günstig aufrüsten.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Aurora Mk II oder Mustang Alpha?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Die Aurora ist für Neulinge praktischer: Ihr Frachtraum
                  öffnet vom ersten Tag an Liefermissionen. Die Mustang fliegt
                  sich spaßiger, transportiert aber fast nichts — und steckt
                  heute vor allem in älteren Aktionspaketen.
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
                  Was enthält jedes Spielpaket?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Den Spiel-Download, vollen Alpha-Zugang, ein Starterschiff mit
                  Versicherung und Startgeld in aUEC. Nur Spielpakete enthalten
                  den Spielzugang — ein einzeln gekauftes Schiff reicht nicht.
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
