import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, AlertCircle } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import SourceLink from '@/components/SourceLink'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import MehrAufDeutsch from '@/components/de/MehrAufDeutsch'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Star Citizen kaufen 2026 — Preis & Tipps',
  description:
    'Star Citizen gibt es nur direkt bei robertsspaceindustries.com — das First Flight Pack: 60 US-Dollar Listenpreis, zeitweise 45 im Angebot. Keine Keys, kein Steam für Star Citizen. So kaufst du es Schritt für Schritt.',
  alternates: {
    canonical: '/de/star-citizen-kaufen',
    languages: {
      de: '/de/star-citizen-kaufen',
      en: '/day-one-citizen/buying-the-game',
      'x-default': '/day-one-citizen/buying-the-game',
    },
  },
  openGraph: {
    images: ['/images/brand/og-image.png'],
    title: 'Star Citizen kaufen 2026: Preis, wo, und worauf du achten musst',
    description:
      'Nur direkt bei robertsspaceindustries.com — das First Flight Pack: 60 US-Dollar Listenpreis, zeitweise 45 im Angebot. Keine Keys, kein Steam für Star Citizen. Die deutsche Schritt-für-Schritt-Anleitung.',
    url: '/de/star-citizen-kaufen',
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
      name: 'Wo kann ich Star Citizen kaufen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Star Citizen wird ausschließlich auf robertsspaceindustries.com verkauft, der offiziellen Website des Entwicklers Cloud Imperium Games. Es gibt das Spiel nicht auf Steam, nicht bei Epic und nicht als Key bei Key-Shops. Nur Squadron 42, das separate Einzelspieler-Spiel, hat eine Steam-Seite zum Wunschlisten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RSI verkauft nur ein Starterpaket, das First Flight Pack: Listenpreis 60 US-Dollar (rund 64 bis 67 Euro inkl. MwSt.), im Oktober 2026 auf einen Aktionspreis von 45 US-Dollar (rund 48 bis 50 Euro) reduziert. RSI rechnet in US-Dollar ab; die deutsche Mehrwertsteuer kommt an der Kasse dazu. Es ist ein Einmalkauf ohne Abo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Gibt es Star Citizen Keys bei Key-Shops?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Star Citizen hat keine Produkt-Keys. Das Spiel ist fest an dein RSI-Konto gebunden und wird nur direkt über robertsspaceindustries.com verkauft. Angebote auf Key-Reseller-Seiten sind keine offiziellen Verkaufsstellen für dieses Spiel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist im Starterpaket enthalten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Das First Flight Pack (60 US-Dollar Listenpreis, zeitweise 45 im Angebot) enthält den Spiel-Download mit Zugang zur laufenden Star-Citizen-Alpha, das Starterschiff Aurora Mk II mit sechs Monaten Versicherung, einen Self-Land-Hangar und 10.000 UEC Startgeld. Dazu kommen 30 Tage Leihzugang zu drei weiteren Schiffen: Drake Golem, MISC Fortune und Crusader Intrepid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Brauche ich ein Abo für Star Citizen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Star Citizen ist ein Einmalkauf. Du kaufst ein Spielpaket, und der Zugang gehört dauerhaft zu deinem Konto. Es gibt kein Pflicht-Abo und keine monatlichen Kosten.',
      },
    },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Star Citizen kaufen 2026: Preis, wo, und worauf du achten musst',
  description:
    'Star Citizen gibt es nur direkt bei robertsspaceindustries.com — Starterpaket ab 45 US-Dollar im Angebot (60 US-Dollar Listenpreis). Keine Keys, kein Steam für Star Citizen.',
  inLanguage: 'de',
  author: { '@type': 'Person', name: SITE.author, url: `${SITE.url}/about` },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  mainEntityOfPage: `${SITE.url}/de/star-citizen-kaufen`,
}

export default function StarCitizenKaufenPage() {
  return (
    <>
      <NavBar />
      <main lang="de" className="bg-navy">
        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', url: '/' },
            { name: 'Star Citizen kaufen', url: '/de/star-citizen-kaufen' },
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
              Star Citizen kaufen: Preis, wo, und worauf du achten musst
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-starwhite/85">
              <strong className="text-starwhite">
                Star Citizen kaufst du nur an einer einzigen Stelle: direkt bei
                robertsspaceindustries.com, dem offiziellen Shop. Das einzige
                Starterpaket, das First Flight Pack, kostet 60 US-Dollar
                (Stand Oktober 2026 zeitweise 45 im Angebot). Es gibt keine Keys — auch
                nicht bei Key-Shops.
              </strong>
            </p>
            <p className="mt-4 text-sm text-muted">
              von{' '}
              <Link href="/about" className="text-gold underline-offset-4 hover:underline">
                {SITE.author}
              </Link>
              , einem langjährigen Star-Citizen-Backer.{' '}
              <Link
                href="/day-one-citizen/buying-the-game"
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
              Der einzige offizielle Shop
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Star Citizen wird ausschließlich über{' '}
                <strong className="text-starwhite">robertsspaceindustries.com</strong>{' '}
                verkauft — die Website von Cloud Imperium Games (CIG), dem
                Studio hinter dem Spiel. Star Citizen gibt es nicht auf Steam, nicht bei Epic, nicht
                bei GOG und auch nicht als Datenträger im Laden. Nur das separate
                Einzelspieler-Spiel Squadron 42 hat eine Steam-Seite, auf der du es auf die
                Wunschliste setzen kannst (<a href="https://iheldtheline.com/steam" className="text-gold underline-offset-4 hover:underline">Details</a>).{' '}
                <SourceLink href="https://robertsspaceindustries.com/download">
                  Offizielle RSI-Downloadseite
                </SourceLink>
              </p>
              <p>
                Warum ist das so? CIG ist ein crowdfinanziertes Studio und
                verkauft direkt an die Spieler, ohne Zwischenhändler. Dein Kauf
                ist fest an dein RSI-Konto gebunden.
              </p>
            </div>
          </section>

          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 shrink-0 text-yellow-300" size={20} aria-hidden />
              <div className="text-sm leading-relaxed text-starwhite/90">
                <strong className="text-yellow-300">
                  Vorsicht bei Key-Shops: Es gibt keine Star-Citizen-Keys.
                </strong>{' '}
                Einige Key-Reseller listen trotzdem „Star Citizen Keys“ — und
                tauchen dafür sogar weit oben in der Google-Suche auf. Das Spiel
                hat aber gar kein Key-System. Es wird nur direkt über das
                RSI-Konto verkauft. Wer bei einem Reseller kauft, riskiert sein
                Geld für ein Produkt, das es offiziell nicht gibt.
              </div>
            </div>
          </div>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Was das Starterpaket enthält
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Den Einstieg bietet RSI heute mit einem einzigen Paket an: dem{' '}
                <strong className="text-starwhite">
                  First Flight Pack, 60 US-Dollar Listenpreis, zeitweise 45 im Angebot
                </strong>
                . Darin steckt alles, was du zum Spielen brauchst:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Voller Zugang zur laufenden Star-Citizen-Alpha — dem
                  Online-Universum, in dem alle spielen
                </li>
                <li>
                  Das Starterschiff{' '}
                  <strong className="text-starwhite">Aurora Mk II</strong> mit
                  sechs Monaten Versicherung (im Spiel „Insurance“ — dein
                  Schiff wird bei Verlust innerhalb dieser Frist kostenlos
                  ersetzt)
                </li>
                <li>Einen Self-Land-Hangar für dein Schiff</li>
                <li>
                  30 Tage Leihzugang zu drei weiteren Starterschiffen (Drake
                  Golem, MISC Fortune, Crusader Intrepid), mit denen du
                  Bergbau, Bergung und Fracht ausprobieren kannst
                </li>
                <li>
                  10.000 UEC Startgeld — die Kontowährung, die jeden Wipe
                  übersteht (nicht zu verwechseln mit dem erspielten aUEC)
                </li>
              </ul>
              <p>
                Mehr brauchst du nicht. Alle anderen Schiffe kannst du später{' '}
                <Link href="/de/echtgeld-schiffe" className="text-gold underline-offset-4 hover:underline">
                  im Spiel erspielen
                </Link>
                . Was genau im Paket steckt, erklärt{' '}
                <Link href="/de/starterpaket" className="text-gold underline-offset-4 hover:underline">
                  die Seite zum First Flight Pack
                </Link>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              US-Dollar plus Mehrwertsteuer: was du wirklich zahlst
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Der RSI-Shop rechnet in{' '}
                <strong className="text-starwhite">US-Dollar</strong> ab — auch
                für Käufer aus Deutschland. An der Kasse kommt die deutsche
                Mehrwertsteuer auf den Netto-Preis dazu.
              </p>
              <p>
                Zum Listenpreis von 60 US-Dollar werden so — je nach aktuellem
                Wechselkurs deiner Bank —{' '}
                <strong className="text-starwhite">
                  rund 64 bis 67 Euro inklusive Mehrwertsteuer
                </strong>
                . Im Oktober 2026 war das First Flight Pack im Angebot: 45
                US-Dollar, rund 48 bis 50 Euro. Angebote kommen und gehen. Der genaue
                Euro-Betrag steht erst auf deiner Abrechnung fest.
              </p>
              <p>
                RSI akzeptiert gängige Kredit- und Debitkarten sowie PayPal.
                Nach dem Kauf bekommst du eine Bestätigungs-E-Mail, und dein
                Konto ist sofort freigeschaltet.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Schritt für Schritt: so kaufst du Star Citizen
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Wichtig zu wissen: Die RSI-Website gibt es{' '}
                <strong className="text-starwhite">nur auf Englisch</strong> —
                eine deutsche Version existiert nicht. Die Schritte sind aber
                einfach:
              </p>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  <strong className="text-starwhite">Konto erstellen.</strong>{' '}
                  Lege auf robertsspaceindustries.com ein kostenloses RSI-Konto
                  an. Trage dabei im Feld „Referral Code“ einen Empfehlungscode
                  ein — er schenkt dir{' '}
                  <strong className="text-starwhite">
                    50.000 UEC Startguthaben
                  </strong>
                  , ganz ohne Kaufpflicht.{' '}
                  <Link href="/de/referral-code" className="text-gold underline-offset-4 hover:underline">
                    Die deutsche Anleitung zur englischen Anmeldung
                  </Link>{' '}
                  führt dich durch jedes Feld.
                </li>
                <li>
                  <strong className="text-starwhite">Zum Store gehen.</strong>{' '}
                  Öffne im eingeloggten Zustand den Punkt „Buy Star Citizen“
                  bzw. den Store und suche nach{' '}
                  <strong className="text-starwhite">„Game Packages“</strong>.
                  Nur Spielpakete enthalten den Spielzugang — ein einzelnes
                  Schiff ohne Paket reicht nicht.
                </li>
                <li>
                  <strong className="text-starwhite">Paket wählen.</strong>{' '}
                  Du nimmst das First Flight Pack für 60 US-Dollar (zeitweise
                  45 im Angebot) mit der Aurora Mk II.
                </li>
                <li>
                  <strong className="text-starwhite">Bezahlen.</strong> In den
                  Warenkorb, zur Kasse, Zahlungsdaten eingeben — fertig. Die
                  Mehrwertsteuer siehst du vor dem Abschluss.
                </li>
                <li>
                  <strong className="text-starwhite">
                    RSI Launcher herunterladen.
                  </strong>{' '}
                  Nach dem Kauf findest du Star Citizen in deiner
                  Konto-Bibliothek („Library“). Lade dort den RSI Launcher
                  herunter — er installiert und aktualisiert das Spiel. Plane
                  Zeit ein: Das Spiel selbst ist über 100 GB groß.
                </li>
              </ol>
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/guides/getting-started-pledge-store-starter-packs-menu.jpg"
                  alt="Das aufgeklappte STORE-Menü auf der RSI-Website (älterer Screenshot) mit dem Eintrag Starter Packs in der Navigation."
                  width={1200}
                  height={654}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  Schritt 2: Das STORE-Menü auf der RSI-Website (älterer Screenshot, Menübezeichnungen können abweichen) — hier findest du die Game Packages.
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/guides/getting-started-rsi-download-button-top-nav.jpg"
                  alt="Der DOWNLOAD-Button in der oberen Navigation der RSI-Website."
                  width={1200}
                  height={164}
                  className="h-auto w-full"
                />
                <figcaption className="bg-navyLight px-4 py-3 text-xs text-muted">
                  Schritt 5: Über den DOWNLOAD-Button auf der RSI-Website lädst du den RSI Launcher herunter.
                </figcaption>
              </figure>
            </div>
          </section>

          <section>
            <h2 className="heading-display text-2xl sm:text-3xl">
              Nicht vergessen: das Startguthaben
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-starwhite/85">
              <p>
                Der eine Schritt, den viele Neulinge verpassen: der
                Empfehlungscode bei der Kontoerstellung. Er bringt dir{' '}
                <strong className="text-starwhite">
                  50.000 UEC Startguthaben
                </strong>{' '}
                — das Fünffache des normalen Startgelds, bevor du deine erste
                Mission fliegst. Der Code kostet dich nichts, und du musst
                nichts kaufen, um das Guthaben zu bekommen.{' '}
                <SourceLink href="https://robertsspaceindustries.com/en/referral-program">
                  Offizielle RSI-Seite zum Empfehlungsprogramm (Englisch)
                </SourceLink>
              </p>
              <p>
                Alles Weitere — Code, Copy-Button und die Schritt-für-Schritt-Anleitung
                durch die englische Anmeldung — findest du auf{' '}
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
                  Wo kann ich Star Citizen kaufen?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Ausschließlich auf robertsspaceindustries.com, der offiziellen
                  Website des Entwicklers Cloud Imperium Games. Es gibt das
                  Spiel nicht auf Steam, nicht bei Epic und nicht als Key bei
                  Key-Shops. Nur Squadron 42, das separate Einzelspieler-Spiel, hat eine
                  Steam-Seite zum Wunschlisten.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Was kostet Star Citizen?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  RSI verkauft nur ein Starterpaket, das First Flight Pack:
                  Listenpreis 60 US-Dollar (rund 64 bis 67 Euro inkl. MwSt.),
                  im Oktober 2026 auf einen Aktionspreis von 45 US-Dollar
                  (rund 48 bis 50 Euro) reduziert. Einmalkauf, kein Abo.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Gibt es Star Citizen Keys bei Key-Shops?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Nein. Star Citizen hat keine Produkt-Keys. Das Spiel ist fest
                  an dein RSI-Konto gebunden und wird nur direkt über
                  robertsspaceindustries.com verkauft. Key-Reseller-Angebote
                  sind keine offiziellen Verkaufsstellen für dieses Spiel.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Was ist im Starterpaket enthalten?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Zugang zur laufenden Alpha, das Starterschiff Aurora Mk II mit
                  sechs Monaten Versicherung, ein Self-Land-Hangar und
                  10.000 UEC Startgeld — dazu 30 Tage Leihzugang zu drei
                  weiteren Schiffen.
                </p>
              </div>
              <div className="card-surface rounded-lg border border-white/5 p-5">
                <h3 className="mb-2 font-semibold text-starwhite">
                  Brauche ich ein Abo?
                </h3>
                <p className="text-sm leading-relaxed text-starwhite/70">
                  Nein. Star Citizen ist ein Einmalkauf. Der Zugang gehört
                  dauerhaft zu deinem Konto — ohne monatliche Kosten.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10 pt-10">
            <CTAButton size="lg" trackingLabel="de-kaufen-cta">
              Direkt bei RSI kaufen
            </CTAButton>
            <p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted">
              Der Button öffnet die englische RSI-Anmeldeseite mit bereits
              eingetragenem Empfehlungscode ({SITE.referralCode}). Du bekommst
              die vollen 50.000 UEC Startguthaben; der Code gehört dem Betreiber
              dieser Seite, der dafür eine kleine Belohnung erhalten kann. Dein
              Bonus wird dadurch nie kleiner.
            </p>
          </div>

          <MehrAufDeutsch current="/de/star-citizen-kaufen" />

          <nav className="flex items-center justify-between text-sm">
            <Link
              href="/de/lohnt-sich-star-citizen"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              <ArrowLeft size={14} aria-hidden /> Lohnt sich Star Citizen?
            </Link>
            <Link
              href="/de/starterpaket"
              className="inline-flex items-center gap-2 text-muted hover:text-gold"
            >
              Das First Flight Pack <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
