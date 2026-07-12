import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import SourceLink from '@/components/SourceLink'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import MehrAufDeutsch from '@/components/de/MehrAufDeutsch'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Musst du in Star Citizen Schiffe für Echtgeld kaufen? Nein.',
  description:
    'Nein — ein Spielpaket für 45 US-Dollar ist der einzige nötige Kauf. Alle Schiffe können im Spiel erspielt werden. Plus: die ehrliche Pay-to-win-Antwort.',
  alternates: {
    canonical: '/de/echtgeld-schiffe',
    languages: {
      de: '/de/echtgeld-schiffe',
      en: '/day-one-citizen/ships-real-money',
      'x-default': '/day-one-citizen/ships-real-money',
    },
  },
  openGraph: {
    title: 'Musst du in Star Citizen Schiffe für Echtgeld kaufen? Nein.',
    description:
      'Ein 45-US-Dollar-Paket genügt. Alle anderen Schiffe kannst du im Spiel erspielen — mit aUEC. Die ehrliche Antwort, inklusive Pay-to-win-Debatte.',
    url: '/de/echtgeld-schiffe',
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
      name: 'Muss ich in Star Citizen Schiffe für Echtgeld kaufen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Ein einziges Spielpaket für 45 US-Dollar ist der einzige Kauf, den Star Citizen je verlangt. Es enthält ein Starterschiff — und alle anderen Schiffe können im Spiel mit aUEC gemietet oder gekauft werden, der Währung, die du durch Spielen verdienst.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie bekomme ich Schiffe ohne Echtgeld?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Durch Spielen: Missionen, Frachttransport, Bergbau, Bergung und Kopfgelder zahlen aUEC aus. Damit mietest du Schiffe für ein paar Tage an Terminals — oder kaufst sie fest in den Schiffs-Shops im Spiel. Die meisten flugfähigen Schiffe sind so erhältlich.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist Star Citizen Pay-to-win?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Größtenteils kaufst du mit Echtgeld Zeitersparnis, keine exklusive Macht — dieselben Schiffe gibt es im Spiel für aUEC. Die Debatte ist aber real: Zuletzt lösten die für Echtgeld verkauften Flight Blades — Komponenten, die das Flugverhalten verbessern — in Community und Fachpresse heftige Pay-to-win-Kritik aus.',
      },
    },
    {
      '@type': 'Question',
      name: 'Überleben Echtgeld-Schiffe einen Wipe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Alles, was mit Echtgeld gekauft wurde, hängt an deinem Konto und wird nach jedem Wipe wiederhergestellt. Im Spiel mit aUEC gekaufte Schiffe sind dagegen Alpha-Fortschritt und können zurückgesetzt werden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Brauche ich für das 50.000-UEC-Startguthaben einen Kauf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Das 50.000 UEC Startguthaben wird gutgeschrieben, sobald du dein RSI-Konto mit einem Empfehlungscode erstellst — ganz ohne Kauf. Vergisst du den Code bei der Anmeldung, kannst du ihn nur innerhalb von etwa 24 Stunden nachtragen.',
      },
    },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Musst du in Star Citizen Schiffe für Echtgeld kaufen? Nein.',
  description:
    'Ein Spielpaket für 45 US-Dollar ist der einzige nötige Kauf — alle anderen Schiffe können im Spiel mit aUEC erspielt werden.',
  inLanguage: 'de',
  author: { '@type': 'Person', name: SITE.author, url: `${SITE.url}/about` },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  mainEntityOfPage: `${SITE.url}/de/echtgeld-schiffe`,
}

export default function EchtgeldSchiffePage() {
  return (
    <>
      <NavBar />
      <main lang="de" className="bg-navy">
        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', url: '/' },
            { name: 'Schiffe für Echtgeld?', url: '/de/echtgeld-schiffe' },
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
              Musst du Schiffe für Echtgeld kaufen?
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">
                Nein. Ein einziges Spielpaket für 45 US-Dollar ist der einzige
                Kauf, den Star Citizen je verlangt. Alle anderen Schiffe können
                im Spiel erspielt werden — mit aUEC, der Währung, die du durch
                Spielen verdienst.
              </strong>
            </p>
            <p className="mt-4 text-sm text-muted">
              von{' '}
              <Link href="/about" className="text-gold underline-offset-4 hover:underline">
                {SITE.author}
              </Link>
              , einem langjährigen Star-Citizen-Backer.{' '}
              <Link
                href="/day-one-citizen/ships-real-money"
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
              Was die 1.000-Dollar-Schiffe wirklich sind
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Die teuren Schiffe im RSI-Shop schrecken viele ab, bevor sie
                überhaupt anfangen. Darum die Einordnung: Diese Listungen sind{' '}
                <strong className="text-starwhite">
                  freiwillige Unterstützung
                </strong>{' '}
                — im Verse sagt man „pledgen“. Cloud Imperium Games ist ein
                crowdfinanziertes Studio und finanziert die Entwicklung über
                Schiffsverkäufe an Unterstützer.
              </p>
              <p>
                Drei Dinge solltest du über diese Angebote wissen:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  Sie sind keine Bezahlschranke. Nichts im Spiel prüft, wie viel
                  du ausgegeben hast.
                </li>
                <li>
                  Einzeln gekaufte Schiffe enthalten keinen Spielzugang — ohne
                  Spielpaket sind sie nur Deko im Hangar.
                </li>
                <li>
                  Sie kaufen Bequemlichkeit, keine Exklusivität: Dieselben
                  Schiffe stehen im Spiel für aUEC zum Verkauf.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Schiffe erspielen: so funktioniert es
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Spielen zahlt sich aus — wörtlich. Missionen, Frachttransport,
                Bergbau, Bergung (Salvage) und Kopfgelder bringen{' '}
                <strong className="text-starwhite">aUEC</strong> ein. Mit dem
                Geld hast du zwei Wege zum neuen Schiff:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">Mieten</strong> — an
                  Miet-Terminals fliegst du ein Schiff für ein paar Spieltage,
                  für einen Bruchteil des Kaufpreises. Ideal, um einen Beruf zu
                  testen, bevor du dich festlegst.
                </li>
                <li>
                  <strong className="text-starwhite">Kaufen</strong> — die
                  Schiffs-Shops im Spiel verkaufen die meisten flugfähigen
                  Schiffe fest gegen aUEC.
                </li>
              </ul>
              <p>
                Ein ehrlicher Hinweis gehört dazu: Mit aUEC gekaufte Schiffe
                sind Alpha-Fortschritt. Ein künftiger Wipe kann sie
                zurücksetzen — Echtgeld-Käufe dagegen überleben jeden Wipe.
                Mehr dazu in{' '}
                <Link href="/de/lohnt-sich-star-citizen" className="text-gold underline-offset-4 hover:underline">
                  „Lohnt sich Star Citizen?“
                </Link>
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Ist das Pay-to-win? Die ehrliche Antwort
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Größtenteils kaufst du mit Echtgeld{' '}
                <strong className="text-starwhite">Zeitersparnis</strong>, keine
                exklusive Macht. Wer 500 Dollar für ein Schiff ausgibt,
                überspringt das Erspielen — mehr nicht. Dasselbe Schiff kannst
                du dir erfliegen. Und ein großes Schiff macht dich nicht
                automatisch stärker: Vielen fehlt solo schlicht die Crew.
              </p>
              <p>
                Aber die Debatte ist real, und du solltest sie kennen: Zuletzt
                sorgten die sogenannten{' '}
                <strong className="text-starwhite">Flight Blades</strong> —
                kaufbare Komponenten, die das Flugverhalten spürbar verbessern —
                für heftige Kritik. In der Community und in der Fachpresse
                wurde daran die Pay-to-win-Frage lauter denn je diskutiert, weil
                hier erstmals spürbare Leistung direkt für Echtgeld zu haben
                war. Diese Kritik geben wir hier bewusst wieder, statt sie
                wegzulächeln.
              </p>
              <p>
                Unser Fazit bleibt trotzdem: Für den Einstieg und viele hundert
                Stunden danach brauchst du{' '}
                <strong className="text-starwhite">
                  keinen einzigen Euro über das Starterpaket hinaus
                </strong>
                . Wenn du später mehr ausgibst, dann als bewusste Unterstützung
                der Entwicklung — nicht, weil das Spiel dich dazu zwingt.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Der faire Vorsprung: 50.000 UEC Startguthaben
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Einen legitimen Vorsprung gibt es gratis: Erstellst du dein
                RSI-Konto mit einem Empfehlungscode, schreibt dir RSI{' '}
                <strong className="text-starwhite">
                  50.000 UEC Startguthaben
                </strong>{' '}
                gut — ohne dass du etwas kaufen musst. Das ist das Fünffache des
                üblichen Startgelds und reicht am ersten Tag locker für
                Rüstung, Waffen und Verbrauchsmaterial.{' '}
                <SourceLink href="https://robertsspaceindustries.com/en/referral-program">
                  Offizielle RSI-Seite zum Empfehlungsprogramm (Englisch)
                </SourceLink>
              </p>
              <p>
                Und weil es Account-UEC ist (kein aUEC), überlebt das Guthaben
                jeden Wipe. Code, Copy-Button und die deutsche Anleitung durch
                die englische Anmeldung findest du auf{' '}
                <Link href="/de/referral-code" className="text-gold underline-offset-4 hover:underline">
                  der Empfehlungscode-Seite
                </Link>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Häufige Fragen</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Muss ich Schiffe für Echtgeld kaufen?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Nein. Ein Spielpaket für 45 US-Dollar ist der einzige nötige
                  Kauf. Es enthält ein Starterschiff — alle anderen Schiffe
                  kannst du im Spiel mit aUEC mieten oder kaufen.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Wie bekomme ich Schiffe ohne Echtgeld?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Durch Spielen: Missionen, Fracht, Bergbau, Bergung und
                  Kopfgelder zahlen aUEC. Damit mietest du Schiffe an Terminals
                  oder kaufst sie fest in den Schiffs-Shops im Spiel.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Ist Star Citizen Pay-to-win?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Größtenteils kaufst du Zeitersparnis, keine exklusive Macht.
                  Die Debatte ist aber real — zuletzt lösten die für Echtgeld
                  verkauften Flight Blades in Community und Fachpresse heftige
                  Pay-to-win-Kritik aus.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Überleben Echtgeld-Schiffe einen Wipe?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Ja — alles, was mit Echtgeld gekauft wurde, wird nach jedem
                  Wipe wiederhergestellt. Mit aUEC gekaufte Schiffe sind
                  Alpha-Fortschritt und können zurückgesetzt werden.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Brauche ich für das Startguthaben einen Kauf?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Nein. Die 50.000 UEC gibt es für die Kontoerstellung mit
                  Empfehlungscode — ohne Kauf. Nachträglich eintragen geht nur
                  innerhalb von etwa 24 Stunden.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" trackingLabel="de-echtgeld-cta">
              50.000 UEC sichern
            </CTAButton>
            <p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted">
              Der Button öffnet die englische RSI-Anmeldeseite mit bereits
              eingetragenem Empfehlungscode ({SITE.referralCode}) — kein Kauf
              nötig. Der Code gehört dem Betreiber dieser Seite, der dafür eine
              kleine Belohnung erhalten kann. Dein Bonus wird dadurch nie
              kleiner.
            </p>
          </div>

          <MehrAufDeutsch current="/de/echtgeld-schiffe" />

          <nav className="flex items-center justify-between text-sm">
            <Link
              href="/de/starterpaket"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Welches Starterpaket?
            </Link>
            <Link
              href="/de/referral-code"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              50.000 UEC Startguthaben <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
