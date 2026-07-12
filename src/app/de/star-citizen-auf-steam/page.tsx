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
  title: 'Ist Star Citizen auf Steam? (Und PS5, Xbox, Game Pass)',
  description:
    'Nein — Star Citizen gibt es nicht auf Steam, PS5, Xbox oder im Game Pass. Es läuft nur auf Windows-PC, direkt über robertsspaceindustries.com. Der Stand 2026.',
  alternates: {
    canonical: '/de/star-citizen-auf-steam',
    languages: {
      de: '/de/star-citizen-auf-steam',
      en: '/day-one-citizen/is-star-citizen-on-steam',
      'x-default': '/day-one-citizen/is-star-citizen-on-steam',
    },
  },
  openGraph: {
    title: 'Ist Star Citizen auf Steam?',
    description:
      'Nein — Star Citizen wird nur auf robertsspaceindustries.com verkauft und läuft nur auf Windows-PC. Konsolen, Game Pass und Steam Deck ehrlich beantwortet.',
    url: '/de/star-citizen-auf-steam',
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
      name: 'Ist Star Citizen auf Steam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Star Citizen wird ausschließlich auf robertsspaceindustries.com verkauft, dem offiziellen RSI-Shop. Auf Steam, im Epic Games Store oder bei GOG gibt es das Spiel nicht (Stand: Juli 2026).',
      },
    },
    {
      '@type': 'Question',
      name: 'Gibt es Star Citizen für PS5 oder Xbox?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Star Citizen läuft nur auf Windows-PC. Die Fachpresse berichtet auf Basis von CIG-Stellenausschreibungen, dass eine Konsolen-Version von Squadron 42 — dem separaten Einzelspieler-Spiel — in Arbeit zu sein scheint. CIG selbst hat keine Konsolen-Version angekündigt, und die Berichte betreffen nur Squadron 42, nicht Star Citizen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist Star Citizen im Xbox Game Pass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Star Citizen ist in keinem Abo-Dienst enthalten. Der einzige Weg ins Spiel ist ein einmalig gekauftes Spielpaket von robertsspaceindustries.com, ab 45 US-Dollar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Läuft Star Citizen auf dem Steam Deck?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nicht offiziell — es gibt keine unterstützte Steam-Deck-Version. Community-Berichte beschreiben nach viel Bastelei mit Kompatibilitäts-Tools etwa 5 bis 20 Bilder pro Sekunde. Praktisch ist Star Citizen auf dem Steam Deck heute unspielbar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kommt Star Citizen jemals auf Steam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es gibt keine offiziellen Pläne für eine Steam-Version. CIG verkauft das Spiel nur über den eigenen Shop und hat keinen Wechsel angekündigt. Stand Juli 2026 ist robertsspaceindustries.com die einzige Verkaufsstelle — was in Zukunft passiert, ist offen.',
      },
    },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ist Star Citizen auf Steam? (Und PS5, Xbox, Game Pass)',
  description:
    'Nein — Star Citizen gibt es nicht auf Steam, Konsolen oder im Game Pass. Es läuft nur auf Windows-PC, verkauft über robertsspaceindustries.com.',
  inLanguage: 'de',
  author: { '@type': 'Person', name: SITE.author, url: `${SITE.url}/about` },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  mainEntityOfPage: `${SITE.url}/de/star-citizen-auf-steam`,
}

export default function StarCitizenAufSteamPage() {
  return (
    <>
      <NavBar />
      <main lang="de" className="bg-navy">
        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', url: '/' },
            { name: 'Ist Star Citizen auf Steam?', url: '/de/star-citizen-auf-steam' },
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
              Ist Star Citizen auf Steam?
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">
                Nein. Star Citizen gibt es nicht auf Steam — und auch nicht für
                PS5, Xbox oder im Game Pass. Es läuft nur auf Windows-PC und
                wird nur direkt bei robertsspaceindustries.com verkauft
                (Stand: Juli 2026).
              </strong>
            </p>
            <p className="mt-4 text-sm text-muted">
              von{' '}
              <Link href="/about" className="text-gold underline-offset-4 hover:underline">
                {SITE.author}
              </Link>
              , einem langjährigen Star-Citizen-Backer.{' '}
              <Link
                href="/day-one-citizen/is-star-citizen-on-steam"
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
              Wo es das Spiel wirklich gibt
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Star Citizen wird an genau einer Stelle verkauft:{' '}
                <strong className="text-starwhite">
                  robertsspaceindustries.com
                </strong>
                , der offiziellen Website des Entwicklers Cloud Imperium Games
                (CIG). Gespielt wird über den kostenlosen RSI Launcher — nur auf
                Windows-PC.{' '}
                <SourceLink href="https://robertsspaceindustries.com/download">
                  Offizielle RSI-Downloadseite
                </SourceLink>
              </p>
              <p>
                Der Weg ins Spiel in drei Schritten: kostenloses RSI-Konto
                anlegen (mit Empfehlungscode für{' '}
                <Link href="/de/referral-code" className="text-gold underline-offset-4 hover:underline">
                  50.000 UEC Startguthaben
                </Link>
                ), ein Spielpaket ab 45 US-Dollar kaufen, RSI Launcher laden.
                Die deutsche Schritt-für-Schritt-Anleitung steht in{' '}
                <Link href="/de/star-citizen-kaufen" className="text-gold underline-offset-4 hover:underline">
                  „Star Citizen kaufen“
                </Link>
                .
              </p>
              <p>
                Und falls du das Spiel irgendwo anders „im Angebot“ siehst —
                etwa als Key bei einem Reseller: Star Citizen hat keine Keys.
                Finger weg.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              PS5 und Xbox?
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <strong className="text-starwhite">Nein.</strong> Star Citizen
                ist ein reines Windows-PC-Spiel. Es gibt keine PlayStation- oder
                Xbox-Version, und CIG hat auch keine angekündigt.
              </p>
              <p>
                Eine Nuance solltest du trotzdem kennen: Die Fachpresse
                berichtet — auf Basis von CIG-Stellenausschreibungen — dass eine
                Konsolen-Umsetzung von{' '}
                <strong className="text-starwhite">Squadron 42</strong> in
                Arbeit zu sein scheint. Squadron 42 ist das separate
                Einzelspieler-Spiel im selben Universum. CIG selbst hat nichts
                angekündigt, und die Berichte betreffen ausschließlich
                Squadron 42 — nicht Star Citizen, um das es hier geht.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Game Pass?
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <strong className="text-starwhite">Nein.</strong> Star Citizen
                steckt in keinem Abo-Dienst — weder im Xbox Game Pass noch im
                PC Game Pass. Es gibt überhaupt kein Abo: Du kaufst einmal ein
                Spielpaket und der Zugang gehört dir.
              </p>
              <p>
                Das Nächste an „kostenlos ausprobieren“ sind die{' '}
                <strong className="text-starwhite">Free-Fly-Events</strong>:
                Mehrmals im Jahr öffnet CIG das Spiel für alle — kostenloses
                RSI-Konto genügt, kein Kauf nötig. Perfekt, um vor dem Kauf zu
                testen, ob dir das Spiel liegt.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Läuft es auf dem Steam Deck?
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                <strong className="text-starwhite">
                  Nicht in irgendeiner unterstützten Form.
                </strong>{' '}
                Eine offizielle Steam-Deck-Version kann es schon deshalb nicht
                geben, weil das Spiel gar nicht auf Steam ist.
              </p>
              <p>
                Einige Spieler haben es mit Kompatibilitäts-Tools erzwungen.
                Community-Berichte beschreiben nach viel Bastelei etwa 5 bis 20
                Bilder pro Sekunde. Das ist in keinem sinnvollen Sinn spielbar.
                Wenn ein Handheld dein einziger Rechner ist, ist Star Citizen
                heute nichts für dich.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Kommt es jemals auf Steam?
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Es gibt{' '}
                <strong className="text-starwhite">
                  keine offiziellen Pläne
                </strong>{' '}
                für eine Steam-Version. CIG ist ein crowdfinanziertes Studio,
                verkauft direkt an die Spieler und hat keinen Wechsel der
                Verkaufsplattform angekündigt.
              </p>
              <p>
                Das ist der aktuelle Stand, keine Prophezeiung — Pläne können
                sich ändern. Aber Stand Juli 2026 ist robertsspaceindustries.com
                die einzige Verkaufsstelle, und der RSI Launcher der einzige Weg
                ins Spiel.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">Häufige Fragen</h2>
            <div className="mt-6 space-y-6">
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Ist Star Citizen auf Steam?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Nein. Star Citizen wird ausschließlich auf
                  robertsspaceindustries.com verkauft. Auf Steam, im Epic Games
                  Store oder bei GOG gibt es das Spiel nicht (Stand: Juli 2026).
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Gibt es Star Citizen für PS5 oder Xbox?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Nein — Star Citizen läuft nur auf Windows-PC. Die Fachpresse
                  berichtet auf Basis von CIG-Stellenausschreibungen über eine
                  mögliche Konsolen-Version von Squadron 42, dem separaten
                  Einzelspieler-Spiel. CIG hat nichts angekündigt, und Star
                  Citizen selbst ist nicht betroffen.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Ist es im Xbox Game Pass?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Nein. Star Citizen ist in keinem Abo-Dienst enthalten. Der
                  einzige Weg ins Spiel ist ein einmalig gekauftes Spielpaket ab
                  45 US-Dollar.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Läuft es auf dem Steam Deck?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Nicht offiziell. Community-Berichte beschreiben nach viel
                  Bastelei etwa 5 bis 20 Bilder pro Sekunde — praktisch
                  unspielbar.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Kommt es jemals auf Steam?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Es gibt keine offiziellen Pläne. Stand Juli 2026 ist
                  robertsspaceindustries.com die einzige Verkaufsstelle — was in
                  Zukunft passiert, ist offen.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" trackingLabel="de-auf-steam-cta">
              Jetzt kostenlos anmelden
            </CTAButton>
            <p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted">
              Der Button öffnet die englische RSI-Anmeldeseite mit bereits
              eingetragenem Empfehlungscode ({SITE.referralCode}) — das Konto
              ist kostenlos, und der Code schenkt dir 50.000 UEC Startguthaben.
              Der Code gehört dem Betreiber dieser Seite, der dafür eine kleine
              Belohnung erhalten kann. Dein Bonus wird dadurch nie kleiner.
            </p>
          </div>

          <MehrAufDeutsch current="/de/star-citizen-auf-steam" />

          <nav className="flex items-center justify-between text-sm">
            <Link
              href="/de/starterpaket"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Welches Starterpaket?
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
