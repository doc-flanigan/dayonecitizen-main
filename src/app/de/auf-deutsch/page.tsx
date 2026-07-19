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
  title: 'Gibt es Star Citizen auf Deutsch? (2026)',
  description:
    'Nein, offiziell nicht: Star Citizen unterstützt nur Englisch. Deutsch gibt es nur über Community-Sprachdateien. Der ehrliche Stand 2026 für deutsche Spieler.',
  alternates: {
    canonical: '/de/auf-deutsch',
    languages: {
      de: '/de/auf-deutsch',
      'x-default': '/de/auf-deutsch',
    },
  },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Gibt es Star Citizen auf Deutsch? Der ehrliche Stand 2026',
    description:
      'Offiziell nur Englisch — deutsche Texte gibt es nur über inoffizielle Community-Sprachdateien. Was das für dich heißt, ehrlich erklärt.',
    url: '/de/auf-deutsch',
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
      name: 'Gibt es Star Citizen auf Deutsch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Offiziell nicht. Star Citizen unterstützt offiziell nur Englisch. Deutsche Menüs und Texte gibt es ausschließlich über inoffizielle Community-Sprachdateien, die Fans pflegen — nicht als Funktion des Spiels selbst.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist die RSI-Website auf Deutsch verfügbar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. robertsspaceindustries.com hat keine deutsche Version — die Adresse /de/ leitet automatisch auf die englische Seite um. Auch die Kontoerstellung und der Kauf laufen komplett auf Englisch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie funktionieren die deutschen Community-Übersetzungen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fans pflegen inoffizielle Übersetzungsdateien (global.ini), die die englischen Spieltexte durch deutsche ersetzen. Sie sind kein offizielles Feature: Nach Updates können sie veralten, und du installierst sie auf eigene Verantwortung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wird Squadron 42 auf Deutsch erscheinen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unbestätigt. Es gibt nur ein Stretch-Goal aus dem Jahr 2012, das Lokalisierung in Deutsch, Französisch und Spanisch als Absicht nannte. Ein aktuelles Versprechen von CIG zu deutscher Sprachausgabe oder deutschen Texten existiert nicht.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich Star Citizen ohne gute Englischkenntnisse spielen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, mit etwas Geduld. Die wichtigsten Begriffe im Spiel wiederholen sich schnell, die deutschsprachige Community ist groß, und es gibt deutsche Anlaufstellen wie das Community-Wiki star-citizen.wiki. Viele deutsche Spieler nutzen zusätzlich die Community-Sprachdateien.',
      },
    },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Gibt es Star Citizen auf Deutsch? Der ehrliche Stand 2026',
  description:
    'Star Citizen unterstützt offiziell nur Englisch — deutsche Texte gibt es nur über inoffizielle Community-Sprachdateien. Der ehrliche Stand 2026.',
  inLanguage: 'de',
  author: { '@type': 'Person', name: SITE.author, url: `${SITE.url}/about` },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  mainEntityOfPage: `${SITE.url}/de/auf-deutsch`,
}

export default function AufDeutschPage() {
  return (
    <>
      <NavBar />
      <main lang="de" className="bg-navy">
        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', url: '/' },
            { name: 'Star Citizen auf Deutsch?', url: '/de/auf-deutsch' },
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
              Gibt es Star Citizen auf Deutsch?
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">
                Nein — offiziell nicht. Star Citizen unterstützt offiziell nur
                Englisch. Deutsche Texte gibt es ausschließlich über
                inoffizielle Community-Sprachdateien. Auch die RSI-Website und
                die Kontoerstellung sind komplett auf Englisch.
              </strong>{' '}
              Hier ist der ehrliche Stand 2026 — und was er für dich bedeutet.
            </p>
            <p className="mt-4 text-sm text-muted">
              von{' '}
              <Link href="/about" className="text-gold underline-offset-4 hover:underline">
                {SITE.author}
              </Link>
              , einem langjährigen Star-Citizen-Backer.
            </p>
          </div>
        </header>

        <div className="container-narrow space-y-16 py-16">

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Das Spiel: offiziell nur Englisch
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Menüs, Missionstexte, Sprachausgabe: Star Citizen liefert{' '}
                <strong className="text-starwhite">
                  keine offizielle deutsche Lokalisierung
                </strong>
                . Wer das Spiel installiert, spielt auf Englisch — es gibt im
                Spiel keine Sprachauswahl mit Deutsch.
              </p>
              <p>
                Zur Einordnung, weil das oft falsch erzählt wird: Ganz am
                Anfang der Kampagne, im Jahr 2012, nannte ein
                Stretch-Goal-Beitrag die Absicht, das Spiel „mit der Zeit“ auch
                auf Französisch, Spanisch und Deutsch anzubieten.{' '}
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/12760-Poll-Additional-Stretch-Goals">
                  Offizieller Comm-Link von 2012 (Englisch)
                </SourceLink>{' '}
                Das ist eine 14 Jahre alte Absichtserklärung aus der
                Frühphase — offiziell umgesetzt wurde davon bis heute nichts.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Community-Übersetzungen: was es wirklich gibt
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Was es gibt, kommt von Fans: inoffizielle
                Übersetzungsdateien — meist als{' '}
                <strong className="text-starwhite">global.ini</strong>{' '}
                bezeichnet, nach der Datei, in der die Spieltexte liegen. Sie
                ersetzen die englischen Texte im Spiel durch deutsche.
              </p>
              <p>Ehrlich eingeordnet heißt das:</p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  Sie sind{' '}
                  <strong className="text-starwhite">kein offizielles Feature</strong>{' '}
                  — CIG liefert sie nicht aus und supportet sie nicht.
                </li>
                <li>
                  Nach jedem Spiel-Update können sie veralten. Neue Texte
                  erscheinen dann wieder auf Englisch, bis die Community
                  nachzieht.
                </li>
                <li>
                  Die Sprachausgabe bleibt in jedem Fall englisch — übersetzt
                  werden nur Texte.
                </li>
                <li>
                  Du installierst sie auf eigene Verantwortung. Wir verlinken
                  hier bewusst keine Installer oder Downloads, die wir nicht
                  selbst laufend prüfen können — such in der deutschen
                  Community nach dem aktuellen Stand.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Die Website: auch nur Englisch
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Auch{' '}
                <strong className="text-starwhite">
                  robertsspaceindustries.com hat keine deutsche Version
                </strong>
                . Rufst du die Adresse mit /de/ auf, leitet die Seite
                automatisch auf die englische Fassung um. Kontoerstellung,
                Shop und Kaufabwicklung laufen komplett auf Englisch.
              </p>
              <p>
                Genau dafür gibt es unsere deutsche Hilfe: Die{' '}
                <Link href="/de/referral-code" className="text-gold underline-offset-4 hover:underline">
                  Empfehlungscode-Seite
                </Link>{' '}
                führt dich Schritt für Schritt und auf Deutsch durch die
                englische Anmeldung — Feld für Feld, mit den englischen
                Beschriftungen. Und{' '}
                <Link href="/de/star-citizen-kaufen" className="text-gold underline-offset-4 hover:underline">
                  „Star Citizen kaufen“
                </Link>{' '}
                erklärt den Kauf inklusive US-Dollar-Preisen und
                Mehrwertsteuer.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Und Squadron 42 auf Deutsch?
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <strong className="text-starwhite">Unbestätigt.</strong>{' '}
                Squadron 42 ist die Einzelspieler-Kampagne im selben Universum,
                laut CIG inhaltlich fertig und für 2026 angepeilt. Zu einer
                deutschen Fassung gibt es aber{' '}
                <strong className="text-starwhite">
                  kein aktuelles Versprechen
                </strong>{' '}
                — nur das erwähnte Stretch-Goal von 2012, das damals
                Lokalisierung als Absicht nannte. Rechne also nicht fest mit
                Deutsch zum Start.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Tipps für deutsche Spieler
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">
                    Lass dich vom Englisch nicht abschrecken.
                  </strong>{' '}
                  Die Begriffe im Spiel wiederholen sich schnell: „Contracts“
                  sind Missionen, „Cargo“ ist Fracht, „Refuel“ ist Auftanken.
                  Nach ein paar Sitzungen liest du darüber hinweg.
                </li>
                <li>
                  <strong className="text-starwhite">
                    Die deutschsprachige Community ist riesig.
                  </strong>{' '}
                  Es gibt aktive deutsche Organisationen (Spieler-Gilden,
                  „Orgs“) und Discord-Server, in denen du komplett auf Deutsch
                  unterwegs bist. Mit einer Org lernst du das Spiel schneller
                  als mit jeder Übersetzung.
                </li>
                <li>
                  <strong className="text-starwhite">
                    Deutsche Nachschlagewerke nutzen.
                  </strong>{' '}
                  Das Community-Wiki{' '}
                  <a
                    href="https://star-citizen.wiki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline-offset-4 hover:underline"
                  >
                    star-citizen.wiki
                  </a>{' '}
                  ist eine umfangreiche deutschsprachige Anlaufstelle für
                  Schiffe, Orte und Spielmechaniken.
                </li>
                <li>
                  <strong className="text-starwhite">
                    Unsere deutschen Guides.
                  </strong>{' '}
                  Vom{' '}
                  <Link href="/de/star-citizen-kaufen" className="text-gold underline-offset-4 hover:underline">
                    Kauf
                  </Link>{' '}
                  über das{' '}
                  <Link href="/de/starterpaket" className="text-gold underline-offset-4 hover:underline">
                    Starterpaket
                  </Link>{' '}
                  bis zur{' '}
                  <Link href="/de/lohnt-sich-star-citizen" className="text-gold underline-offset-4 hover:underline">
                    ehrlichen Lohnt-sich-Frage
                  </Link>{' '}
                  — die Grundlagen bekommst du hier auf Deutsch.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Häufige Fragen</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Gibt es Star Citizen auf Deutsch?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Offiziell nicht — das Spiel unterstützt offiziell nur
                  Englisch. Deutsche Texte gibt es nur über inoffizielle
                  Community-Sprachdateien, nicht als Funktion des Spiels.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Ist die RSI-Website auf Deutsch?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Nein. robertsspaceindustries.com leitet /de/ automatisch auf
                  die englische Seite um. Kontoerstellung und Kauf laufen
                  komplett auf Englisch.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Wie funktionieren die Community-Übersetzungen?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Fans pflegen inoffizielle global.ini-Dateien, die die
                  englischen Spieltexte durch deutsche ersetzen. Nach Updates
                  können sie veralten; die Sprachausgabe bleibt englisch.
                  Installation auf eigene Verantwortung.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Wird Squadron 42 auf Deutsch erscheinen?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Unbestätigt. Es gibt nur eine Absichtserklärung aus einem
                  Stretch-Goal von 2012 — kein aktuelles Versprechen von CIG.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Geht es auch ohne gute Englischkenntnisse?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Ja, mit etwas Geduld. Die Spielbegriffe wiederholen sich
                  schnell, die deutsche Community ist groß, und Anlaufstellen
                  wie star-citizen.wiki helfen auf Deutsch weiter.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" trackingLabel="de-auf-deutsch-cta">
              Starte im Verse
            </CTAButton>
            <p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted">
              Der Button öffnet die englische RSI-Anmeldeseite mit bereits
              eingetragenem Empfehlungscode ({SITE.referralCode}) — dein neues
              Konto startet mit 50.000 UEC Startguthaben, ohne Kaufpflicht. Der
              Code gehört dem Betreiber dieser Seite, der dafür eine kleine
              Belohnung erhalten kann. Dein Bonus wird dadurch nie kleiner.
            </p>
          </div>

          <MehrAufDeutsch current="/de/auf-deutsch" />

          <nav className="flex items-center justify-between text-sm">
            <Link
              href="/de/lohnt-sich-star-citizen"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Lohnt sich Star Citizen?
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
