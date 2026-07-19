import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import CopyCode from '@/components/CopyCode'
import SourceLink from '@/components/SourceLink'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import MehrAufDeutsch from '@/components/de/MehrAufDeutsch'
import { SITE } from '@/lib/site'
import { VERIFIED_ON } from '@/data/verification'

// Deutsche Anzeige des Prüfdatums — abgeleitet aus VERIFIED_ON, damit der
// monatliche verify-referral-Lauf diese Seite automatisch mit aktualisiert.
const DE_MONTHS = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
] as const

function formatDateDe(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  return `${d}. ${DE_MONTHS[(m ?? 1) - 1]} ${y}`
}

const VERIFIED_DE = formatDateDe(VERIFIED_ON)

const REFERRAL_FAQ =
  'https://support.robertsspaceindustries.com/hc/en-us/articles/115013102847-Referral-Program-FAQ'
const REFERRAL_PROGRAM = 'https://robertsspaceindustries.com/en/referral-program'

export const metadata: Metadata = {
  title: 'Star Citizen Empfehlungscode — 50.000 UEC',
  description: `Der Star Citizen Empfehlungscode ist STAR-GCQJ-N6NC — 50.000 UEC Startguthaben ohne Kauf. Mit deutscher Anleitung durch die englische RSI-Anmeldung.`,
  alternates: {
    canonical: '/de/referral-code',
    languages: {
      de: '/de/referral-code',
      en: '/referral-code',
      'x-default': '/referral-code',
    },
  },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Star Citizen Empfehlungscode — STAR-GCQJ-N6NC (50.000 UEC)',
    description:
      'Gib den Empfehlungscode STAR-GCQJ-N6NC bei der Kontoerstellung ein und starte mit 50.000 UEC Startguthaben — ohne Kaufpflicht. Deutsche Anleitung.',
    url: '/de/referral-code',
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
      name: 'Wie lautet der Star Citizen Empfehlungscode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der Empfehlungscode (Referral-Code) lautet STAR-GCQJ-N6NC. Trage ihn bei der Erstellung deines RSI-Kontos im Feld „Referral Code“ ein und du bekommst 50.000 UEC Startguthaben.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist das 50.000 UEC Startguthaben wirklich gratis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Das Startguthaben wird gutgeschrieben, sobald du ein kostenloses RSI-Konto mit dem Empfehlungscode erstellst. Du musst nichts kaufen, und das Guthaben bleibt dauerhaft auf deinem Konto — es überlebt auch jeden Wipe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wann gebe ich den Empfehlungscode ein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Am besten direkt bei der Anmeldung, im Feld „Referral Code“. Vergisst du ihn, kannst du ihn nur innerhalb von etwa 24 Stunden nach der Kontoerstellung in den Kontoeinstellungen nachtragen — danach ist das Fenster zu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Die RSI-Anmeldung ist auf Englisch — wie gehe ich vor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'robertsspaceindustries.com hat keine deutsche Version. Die Anmeldung ist aber in fünf Minuten erledigt: E-Mail, Passwort und Handle (Benutzername) eintragen, den Code im Feld „Referral Code“ prüfen und auf die Bestätigung „Referral code successfully applied!“ achten. Diese Seite erklärt jeden Schritt auf Deutsch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Funktioniert der Code STAR-GCQJ-N6NC noch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Ja. Der Code wurde zuletzt am ${VERIFIED_DE} direkt auf der offiziellen RSI-Anmeldeseite geprüft — mit der Bestätigung „Referral code successfully applied!“. Er wird monatlich neu geprüft.`,
      },
    },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Star Citizen Empfehlungscode: 50.000 UEC Startguthaben sichern',
  description:
    'Der Empfehlungscode STAR-GCQJ-N6NC bringt neuen RSI-Konten 50.000 UEC Startguthaben — ohne Kauf. Deutsche Anleitung durch die englische Anmeldung.',
  inLanguage: 'de',
  author: { '@type': 'Person', name: SITE.author, url: `${SITE.url}/about` },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  mainEntityOfPage: `${SITE.url}/de/referral-code`,
}

export default function ReferralCodeDePage() {
  return (
    <>
      <NavBar />
      <main lang="de" className="bg-navy">
        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', url: '/' },
            { name: 'Empfehlungscode', url: '/de/referral-code' },
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
              Star Citizen Empfehlungscode
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">
                Der Star Citizen Empfehlungscode lautet STAR-GCQJ-N6NC.
              </strong>{' '}
              Gib ihn bei der Erstellung deines kostenlosen RSI-Kontos ein und
              du startest mit{' '}
              <strong className="text-starwhite">
                50.000 UEC Startguthaben
              </strong>{' '}
              — ganz ohne Kauf.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <CopyCode
                code={SITE.referralCode}
                trackingLabel="de-referral-code-copy"
                copyLabel="Kopieren"
                copiedLabel="Kopiert"
              />
              <CTAButton
                external
                href={SITE.referralUrl}
                trackingLabel="de-referral-code-hero"
                size="lg"
              >
                Mit Startguthaben starten
              </CTAButton>
            </div>
            <p className="mt-4 max-w-2xl text-sm font-semibold text-gold">
              Zuletzt geprüft am {VERIFIED_DE} — direkt auf der offiziellen
              RSI-Anmeldeseite. Der Code wird monatlich neu geprüft.
            </p>
            <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted">
              Der goldene Button öffnet die RSI-Anmeldung mit bereits
              eingetragenem Code. Das ist ein Empfehlungslink: Du bekommst die
              vollen 50.000 UEC; ich als Werber kann eine kleine Belohnung
              erhalten. Dein Bonus wird dadurch nie kleiner.
            </p>
            <p className="mt-3 text-sm text-muted">
              von{' '}
              <Link href="/about" className="text-gold underline-offset-4 hover:underline">
                {SITE.author}
              </Link>
              , einem langjährigen Star-Citizen-Backer.{' '}
              <Link
                href="/referral-code"
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
              Die Anmeldung ist auf Englisch — so gehst du vor
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Wichtig vorweg:{' '}
                <strong className="text-starwhite">
                  robertsspaceindustries.com hat keine deutsche Version.
                </strong>{' '}
                Selbst die Adresse mit /de/ leitet auf die englische Seite um —
                die Kontoerstellung läuft komplett auf Englisch. Kein Problem:
                Hier ist jeder Schritt auf Deutsch erklärt, mit den englischen
                Feldnamen, die du auf dem Bildschirm siehst.
              </p>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  Öffne die{' '}
                  <a
                    href={SITE.referralUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline-offset-4 hover:underline"
                  >
                    RSI-Anmeldeseite (Enlist)
                  </a>{' '}
                  — über diesen Link ist der Code bereits eingetragen.
                </li>
                <li>
                  <strong className="text-starwhite">„Handle“</strong> — dein
                  öffentlicher Benutzername in der Community. Er ist nicht dein
                  Pilotenname im Spiel; den legst du später fest.
                </li>
                <li>
                  <strong className="text-starwhite">„Email“</strong> und{' '}
                  <strong className="text-starwhite">„Password“</strong> —
                  E-Mail-Adresse und ein sicheres Passwort. Nimm eine echte
                  E-Mail-Adresse: Kaufbelege und Sicherheitsmails gehen dorthin.
                </li>
                <li>
                  Prüfe das Feld{' '}
                  <strong className="text-starwhite">„Referral Code“</strong>:
                  Dort muss{' '}
                  <strong className="text-starwhite">STAR-GCQJ-N6NC</strong>{' '}
                  stehen. Falls nicht, füge den Code von oben per Kopieren-Button
                  ein.
                </li>
                <li>
                  Achte auf die grüne Bestätigung{' '}
                  <strong className="text-starwhite">
                    „Referral code successfully applied!“
                  </strong>{' '}
                  — auf Deutsch: „Empfehlungscode erfolgreich angewendet“.
                  Darüber steht der Name des Werbers.
                </li>
                <li>
                  Schließe die Anmeldung ab und bestätige den Link in der
                  E-Mail, die RSI dir schickt („Verify your email“). Erst dann
                  ist dein Konto aktiv.
                </li>
              </ol>
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/referral/rsi-signup-referral-code-field.jpg"
                  alt="Das englische RSI-Anmeldeformular mit markiertem Feld „Referral Code“ und dem erfolgreich angewendeten Code STAR-GCQJ-N6NC."
                  width={1200}
                  height={1000}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  So sieht es aus: das Feld „Referral Code“ auf der englischen
                  RSI-Anmeldeseite, mit erfolgreich angewendetem Code.
                </figcaption>
              </figure>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Was du bekommst — ohne etwas zu kaufen
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Mit dem Empfehlungscode schreibt RSI deinem neuen Konto{' '}
                <strong className="text-starwhite">
                  50.000 UEC Startguthaben
                </strong>{' '}
                gut.{' '}
                <SourceLink href={REFERRAL_PROGRAM}>
                  Offizielle RSI-Seite zum Empfehlungsprogramm (Englisch)
                </SourceLink>
              </p>
              <p>
                <strong className="text-starwhite">
                  Du musst dafür nichts kaufen.
                </strong>{' '}
                Das kostenlose Konto mit Code genügt — das Guthaben landet
                sofort auf dem Konto und bleibt dauerhaft dort.{' '}
                <SourceLink href={REFERRAL_FAQ}>
                  Offizielle FAQ zum RSI-Empfehlungsprogramm (Englisch)
                </SourceLink>
              </p>
              <p>
                Und weil die 50.000 UEC{' '}
                <strong className="text-starwhite">Account-UEC</strong> sind —
                nicht das erspielte aUEC — überleben sie jeden Wipe. Zum
                Vergleich: Das normale Startgeld eines Spielpakets liegt bei
                10.000 aUEC. Der Code verfünffacht also dein Startkapital,
                bevor du die erste Mission fliegst.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Das 24-Stunden-Fenster
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Trag den Code am besten{' '}
                <strong className="text-starwhite">direkt bei der Anmeldung</strong>{' '}
                ein. Hast du ihn vergessen, gibt es genau eine Gnadenfrist: Etwa{' '}
                <strong className="text-starwhite">24 Stunden</strong> nach der
                Kontoerstellung kannst du ihn noch in den Kontoeinstellungen
                nachtragen. Danach lässt sich der Code nicht mehr anwenden —
                für dieses Konto ist das Startguthaben dann dauerhaft verloren.{' '}
                <SourceLink href={REFERRAL_FAQ}>
                  Offizielle FAQ zum RSI-Empfehlungsprogramm (Englisch)
                </SourceLink>
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Ist das seriös? Die ehrliche Offenlegung
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Ja — das Empfehlungsprogramm kommt von RSI selbst. Jeder
                gültige Code bringt dasselbe 50.000-UEC-Guthaben. Dieser hier
                gehört mir, {SITE.author}, dem Betreiber dieser Seite — keiner
                anonymen Code-Farm.
              </p>
              <p>
                Und damit alles auf dem Tisch liegt: Ich als Werber bekomme
                erst dann eine separate Belohnung (einen „Recruitment Point“),
                wenn du später mindestens 40 US-Dollar im RSI-Shop ausgibst.
                Dein Startguthaben hängt davon{' '}
                <strong className="text-starwhite">nicht</strong> ab — es
                landet bei der Kontoerstellung auf deinem Konto, und dir wird
                nie etwas abgezogen.{' '}
                <SourceLink href={REFERRAL_FAQ}>
                  Offizielle FAQ zum RSI-Empfehlungsprogramm (Englisch)
                </SourceLink>
              </p>
              <p>
                Der Code wird jeden Monat auf der echten RSI-Anmeldeseite
                geprüft — zuletzt am {VERIFIED_DE}. Das vollständige, datierte
                Prüfprotokoll findest du auf{' '}
                <Link href="/referral-code" className="text-gold underline-offset-4 hover:underline">
                  der englischen Version dieser Seite
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
                  Wie lautet der Empfehlungscode?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  <strong className="text-starwhite">STAR-GCQJ-N6NC</strong>.
                  Trage ihn bei der Kontoerstellung im Feld „Referral Code“ ein
                  und du bekommst 50.000 UEC Startguthaben.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Ist das Startguthaben wirklich gratis?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Ja. Das kostenlose Konto mit Code genügt — kein Kauf nötig.
                  Das Guthaben bleibt dauerhaft auf deinem Konto und überlebt
                  jeden Wipe.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Wann gebe ich den Code ein?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Direkt bei der Anmeldung, im Feld „Referral Code“. Nachträglich
                  geht es nur innerhalb von etwa 24 Stunden in den
                  Kontoeinstellungen — danach nicht mehr.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Die Anmeldung ist auf Englisch — wie gehe ich vor?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  RSI hat keine deutsche Website. Die Anmeldung dauert trotzdem
                  nur fünf Minuten: Handle, E-Mail und Passwort eintragen, den
                  Code im Feld „Referral Code“ prüfen und auf „Referral code
                  successfully applied!“ achten. Die Anleitung oben erklärt
                  jeden Schritt auf Deutsch.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Funktioniert der Code noch?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Ja — zuletzt am {VERIFIED_DE} direkt auf der RSI-Anmeldeseite
                  geprüft, mit angezeigter Bestätigung. Der Code wird monatlich
                  neu geprüft.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton
              external
              href={SITE.referralUrl}
              trackingLabel="de-referral-code-bottom"
              size="lg"
            >
              Sichere dir 50.000 UEC
            </CTAButton>
          </div>

          <MehrAufDeutsch current="/de/referral-code" />

          <nav className="flex items-center justify-between text-sm">
            <Link
              href="/de/echtgeld-schiffe"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Schiffe für Echtgeld?
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
