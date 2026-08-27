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
  title: 'Lohnt sich Star Citizen 2026? Die ehrliche Antwort',
  description:
    'Lohnt sich Star Citizen 2026? Ja — wenn du Weltraum-Sandboxes liebst und mit einer Alpha leben kannst. Die ehrliche Antwort zu Bugs, Wipes, Preis und Stand.',
  alternates: {
    canonical: '/de/lohnt-sich-star-citizen',
    languages: {
      de: '/de/lohnt-sich-star-citizen',
      en: '/day-one-citizen/worth-buying',
      'x-default': '/day-one-citizen/worth-buying',
    },
  },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Lohnt sich Star Citizen 2026? Die ehrliche Antwort',
    description:
      'Ja, wenn du offene Weltraumspiele liebst und eine Alpha verkraftest. Nein, wenn du ein fertiges Spiel erwartest. Ehrlich, ohne Verkaufsdruck.',
    url: '/de/lohnt-sich-star-citizen',
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
      name: 'Lohnt sich Star Citizen 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja — zum Einstiegspreis von 45 US-Dollar, wenn du offene Weltraum-Sandboxes liebst und mit Alpha-Software leben kannst. Kein anderes Spiel bietet diesen Umfang. Nein — wenn du ein fertiges, poliertes Spiel erwartest: Star Citizen ist seit 2012 in Entwicklung und immer noch eine Alpha.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet der Einstieg in Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Das günstigste Spielpaket ist das Citizen Starter Pack für 45 US-Dollar (rund 48 bis 50 Euro inkl. MwSt.). Einmalkauf ohne Abo, mit Alpha-Zugang, dem Starterschiff Aurora Mk II und 10.000 aUEC Startgeld.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verliere ich bei einem Wipe alles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Ein Wipe setzt nur erspieltes aUEC, Gegenstände und Fortschritt zurück. Alles, was du mit Echtgeld gekauft hast, und dein Account-UEC (etwa das 50.000-UEC-Startguthaben) überleben jeden Wipe. Zuletzt gab es mit Alpha 4.8 am 14. Mai 2026 einen vollständigen Wipe; das aktuelle Update Alpha 4.10 (26. August 2026) hat den Fortschritt laut Patch Notes behalten. Für kommende Updates ist bisher kein Wipe angekündigt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist Star Citizen auf Deutsch spielbar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Offiziell nicht. Das Spiel unterstützt offiziell nur Englisch; Deutsch gibt es nur über inoffizielle Community-Sprachdateien. Auch die RSI-Website und die Kontoerstellung sind komplett auf Englisch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich Star Citizen kostenlos testen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Mehrmals im Jahr veranstaltet CIG Free-Fly-Events, bei denen jeder mit einem kostenlosen RSI-Konto das Spiel ohne Kauf ausprobieren kann. Das ist der beste Weg, vor dem Kauf zu prüfen, ob das Spiel etwas für dich ist.',
      },
    },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lohnt sich Star Citizen 2026? Die ehrliche Antwort',
  description:
    'Ja, wenn du offene Weltraumspiele liebst und eine Alpha verkraftest. Nein, wenn du ein fertiges Spiel erwartest.',
  inLanguage: 'de',
  author: { '@type': 'Person', name: SITE.author, url: `${SITE.url}/about` },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  mainEntityOfPage: `${SITE.url}/de/lohnt-sich-star-citizen`,
}

export default function LohntSichStarCitizenPage() {
  return (
    <>
      <NavBar />
      <main lang="de" className="bg-navy">
        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', url: '/' },
            { name: 'Lohnt sich Star Citizen?', url: '/de/lohnt-sich-star-citizen' },
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
              Lohnt sich Star Citizen 2026?
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">
                Ja — zum Einstiegspreis von 45 US-Dollar, wenn du offene
                Weltraum-Sandboxes liebst und mit einer Alpha leben kannst.
                Nein — wenn du ein fertiges, poliertes Spiel erwartest.
              </strong>{' '}
              Hier ist die ehrliche Antwort, ohne Verkaufsdruck.
            </p>
            <p className="mt-4 text-sm text-muted">
              von{' '}
              <Link href="/about" className="text-gold underline-offset-4 hover:underline">
                {SITE.author}
              </Link>
              , einem langjährigen Star-Citizen-Backer.{' '}
              <Link
                href="/day-one-citizen/worth-buying"
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
              Ja, wenn … / Nein, wenn …
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <strong className="text-starwhite">Ja, kauf es</strong>, wenn du
                Spiele magst, in denen du dir deine Ziele selbst setzt: Asteroiden
                abbauen, Fracht zwischen Planeten fliegen, Kopfgelder jagen, mit
                Freunden ein Mehrpersonen-Schiff besetzen — oder einfach das
                Verse erkunden. Kein anderes Spiel macht das in diesem Maßstab.
              </p>
              <p>
                <strong className="text-starwhite">Nein, lass es</strong>, wenn
                du ein fertiges Produkt erwartest, das jede Sitzung zuverlässig
                läuft. Star Citizen ist eine Alpha. Es ist seit 2012 in
                Entwicklung und immer noch nicht fertig. Diese Ehrlichkeit
                schuldet dir jede Kaufberatung, bevor du Geld ausgibst.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Was 45 US-Dollar dir kaufen
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Der Einstieg kostet einmalig{' '}
                <strong className="text-starwhite">45 US-Dollar</strong> (rund
                48 bis 50 Euro inklusive Mehrwertsteuer — RSI rechnet in
                US-Dollar ab). Dafür bekommst du das Citizen Starter Pack:
                Alpha-Zugang, das Starterschiff Aurora Mk II mit lebenslanger
                Versicherung, ein Rüstungsset und 10.000 aUEC Startgeld. Kein
                Abo, keine Folgekosten.
              </p>
              <p>
                Das ist auch der einzige Kauf, den das Spiel je verlangt. Die
                teuren Schiffe im Shop sind freiwillige Unterstützung der
                Entwicklung —{' '}
                <Link href="/de/echtgeld-schiffe" className="text-gold underline-offset-4 hover:underline">
                  alle Schiffe kannst du im Spiel erspielen
                </Link>
                . Wie und wo du kaufst, steht in{' '}
                <Link href="/de/star-citizen-kaufen" className="text-gold underline-offset-4 hover:underline">
                  der Kauf-Anleitung
                </Link>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Der ehrliche Alpha-Status
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Damit du weißt, worauf du dich einlässt — diese Punkte sind
                real und gehören zum Alltag:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">Bugs.</strong> Missionen,
                  die nicht sauber abschließen, Physik-Aussetzer, gelegentliche
                  Server-Abstürze, die alle gleichzeitig rauswerfen. Die meisten
                  Bugs sind lästig, nicht spielzerstörend — aber sie sind da.
                </li>
                <li>
                  <strong className="text-starwhite">Der Wipe.</strong> Von Zeit
                  zu Zeit setzt CIG den Spielfortschritt zurück. Zuletzt kam mit
                  Alpha 4.8 am 14. Mai 2026 ein vollständiger Wipe — erspieltes
                  aUEC, Gegenstände und Fortschritt waren weg. Was mit Echtgeld
                  gekauft wurde, überlebt jeden Wipe. Mehr dazu unten im
                  Wipe-Abschnitt.
                </li>
                <li>
                  <strong className="text-starwhite">Performance.</strong> Star
                  Citizen gehört zu den anspruchsvollsten PC-Spielen überhaupt.
                  Auch starke Hardware erreicht in dichten Städten nicht immer
                  60 Bilder pro Sekunde.
                </li>
                <li>
                  <strong className="text-starwhite">Fehlende Features.</strong>{' '}
                  Viele geplante Systeme stehen noch auf der Roadmap und sind
                  nicht im Spiel.
                </li>
              </ul>
              <p>
                Zum aktuellen Stand: Die Version Alpha 4.10 läuft seit dem
                26. August 2026 auf den Live-Servern — ohne Wipe, der
                Spielfortschritt wurde übernommen.
              </p>
              <p>
                Das Update trägt den Namen &bdquo;Siege of Orison&ldquo;.
                Zuvor wurde es seit dem 23. Juli 2026 auf den Testservern
                geprüft. Diese Testserver heißen PTU — dort kann jeder
                mitspielen, der sich freiwillig anmeldet. Laut den Patch Notes
                blieb die Long Term Persistence erhalten. Erspielter
                Fortschritt wurde also übernommen.{' '}
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/21242-Alpha-410-Siege-Of-Orison">
                  Offizieller RSI-Beitrag zu Alpha 4.10 (Englisch)
                </SourceLink>
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Die andere Seite: warum Millionen dabei sind
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Star Citizen ist das erfolgreichste crowdfinanzierte Spiel der
                Geschichte. Am 24. Mai 2026 überschritt die Finanzierung{' '}
                <strong className="text-starwhite">
                  1 Milliarde US-Dollar
                </strong>
                , getragen von über 6,5 Millionen Konten — Konten wohlgemerkt,
                nicht zahlende Spieler.{' '}
                <SourceLink href="https://robertsspaceindustries.com/en/funding-goals">
                  Offizieller RSI-Finanzierungstracker (Englisch)
                </SourceLink>
              </p>
              <p>
                Und die Einzelspieler-Kampagne{' '}
                <strong className="text-starwhite">Squadron 42</strong> ist laut
                CIG inhaltlich fertig („content complete“): Alle Kapitel sind
                intern von Anfang bis Ende spielbar. Chris Roberts bekräftigte
                im Mai 2026 das Ziel, Squadron 42 „Richtung Beta und
                Veröffentlichung 2026“ zu bringen.{' '}
                <SourceLink href="https://robertsspaceindustries.com/en/comm-link/transmission/20960-Letter-From-The-Chairman">
                  Offizieller Letter from the Chairman, Mai 2026 (Englisch)
                </SourceLink>{' '}
                Für Star Citizen selbst (Version 1.0) gibt es dagegen kein
                offizielles Datum.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Wipes: was bleibt, was geht
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Der Wipe ist die größte Sorge deutscher Neulinge — zu Recht,
                also hier die klare Trennung:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">Überlebt immer:</strong>{' '}
                  alles, was du mit Echtgeld gekauft hast (Schiffe, Pakete,
                  Ausrüstung aus dem Shop) — und dein Account-UEC, also auch das{' '}
                  <Link href="/de/referral-code" className="text-gold underline-offset-4 hover:underline">
                    50.000 UEC Startguthaben
                  </Link>
                  .
                </li>
                <li>
                  <strong className="text-starwhite">Kann zurückgesetzt werden:</strong>{' '}
                  erspieltes aUEC, gesammelte Gegenstände und dein Fortschritt.
                  aUEC ist ausdrücklich eine temporäre Alpha-Währung.
                </li>
                <li>
                  <strong className="text-starwhite">Wer entscheidet:</strong>{' '}
                  die Patch Notes der jeweiligen Version. CIG kündigt dort an,
                  was übernommen wird (Stichwort „Long Term Persistence“). Das
                  aktuelle Update Alpha 4.10 (26. August 2026) brachte keinen
                  Wipe — die Patch Notes bestätigen, dass der Fortschritt
                  erhalten blieb.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Eine Erwartung noch: die Sprache
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Star Citizen unterstützt offiziell{' '}
                <strong className="text-starwhite">nur Englisch</strong>. Eine
                deutsche Übersetzung gibt es ausschließlich über inoffizielle
                Community-Sprachdateien, und auch die RSI-Website samt
                Kontoerstellung ist komplett englisch. Was das praktisch
                bedeutet und welche Möglichkeiten du hast, steht in{' '}
                <Link href="/de/auf-deutsch" className="text-gold underline-offset-4 hover:underline">
                  „Gibt es Star Citizen auf Deutsch?“
                </Link>
              </p>
              <p>
                Tipp zum Schluss: Mehrmals im Jahr kannst du das Spiel bei einem
                Free-Fly-Event kostenlos testen — mit einem kostenlosen
                RSI-Konto, ohne Kauf. Das ist die beste Antwort auf die Frage
                „lohnt es sich für <em>mich</em>?“.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Häufige Fragen</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Lohnt sich Star Citizen 2026?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Ja — zum Einstiegspreis von 45 US-Dollar, wenn du offene
                  Weltraum-Sandboxes liebst und mit Alpha-Software leben kannst.
                  Nein — wenn du ein fertiges, poliertes Spiel erwartest. Das
                  Spiel ist seit 2012 in Entwicklung und immer noch eine Alpha.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Was kostet der Einstieg?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  45 US-Dollar für das Citizen Starter Pack (rund 48 bis 50 Euro
                  inkl. MwSt.). Einmalkauf ohne Abo — mit Alpha-Zugang, der
                  Aurora Mk II und 10.000 aUEC Startgeld.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Verliere ich bei einem Wipe alles?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Nein. Ein Wipe setzt nur erspieltes aUEC, Gegenstände und
                  Fortschritt zurück. Echtgeld-Käufe und Account-UEC (auch das
                  50.000-UEC-Startguthaben) überleben jeden Wipe. Zuletzt gab es
                  mit Alpha 4.8 am 14. Mai 2026 einen vollständigen Wipe — das
                  aktuelle Update Alpha 4.10 (26. August 2026) hat den
                  Fortschritt behalten. Für kommende Updates ist bisher kein
                  Wipe angekündigt.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Ist Star Citizen auf Deutsch spielbar?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Offiziell nicht — das Spiel unterstützt offiziell nur
                  Englisch. Deutsch gibt es nur über inoffizielle
                  Community-Sprachdateien. Auch Website und Anmeldung sind
                  englisch.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Kann ich es kostenlos testen?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Ja — mehrmals im Jahr bei den Free-Fly-Events, mit einem
                  kostenlosen RSI-Konto und ohne Kauf. Der beste Weg, es vor dem
                  Kauf selbst zu erleben.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" trackingLabel="de-lohnt-sich-cta">
              Hol dir den Vorsprung
            </CTAButton>
            <p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted">
              Der Button öffnet die englische RSI-Anmeldeseite mit bereits
              eingetragenem Empfehlungscode ({SITE.referralCode}) — er schenkt
              deinem neuen Konto 50.000 UEC Startguthaben, ohne Kaufpflicht. Der
              Code gehört dem Betreiber dieser Seite, der dafür eine kleine
              Belohnung erhalten kann. Dein Bonus wird dadurch nie kleiner.
            </p>
          </div>

          <MehrAufDeutsch current="/de/lohnt-sich-star-citizen" />

          <nav className="flex items-center justify-between text-sm">
            <Link
              href="/de/auf-deutsch"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Gibt es das Spiel auf Deutsch?
            </Link>
            <Link
              href="/de/star-citizen-kaufen"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Star Citizen kaufen <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
