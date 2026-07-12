import Link from 'next/link'

/**
 * Cross-link block for the German pilot pages ("Mehr auf Deutsch").
 * Lists every /de/ page except the one currently shown. Server component.
 * All UI text is German — this block only appears on lang="de" pages.
 */
export const GERMAN_PAGES = [
  {
    href: '/de/star-citizen-kaufen',
    label: 'Star Citizen kaufen: Preis und offizieller Shop',
  },
  {
    href: '/de/lohnt-sich-star-citizen',
    label: 'Lohnt sich Star Citizen 2026? Die ehrliche Antwort',
  },
  {
    href: '/de/starterpaket',
    label: 'Welches Starterpaket? Aurora oder Mustang',
  },
  {
    href: '/de/star-citizen-auf-steam',
    label: 'Ist Star Citizen auf Steam? (Und PS5, Xbox, Game Pass)',
  },
  {
    href: '/de/echtgeld-schiffe',
    label: 'Musst du Schiffe für Echtgeld kaufen? Nein.',
  },
  {
    href: '/de/auf-deutsch',
    label: 'Gibt es Star Citizen auf Deutsch?',
  },
  {
    href: '/de/referral-code',
    label: 'Empfehlungscode: 50.000 UEC Startguthaben sichern',
  },
] as const

export default function MehrAufDeutsch({ current }: { current: string }) {
  return (
    <section
      aria-label="Mehr auf Deutsch"
      className="rounded-2xl border border-white/5 bg-navyLight/30 p-6"
    >
      <h2 className="heading-display text-xl">Mehr auf Deutsch</h2>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed">
        {GERMAN_PAGES.filter((p) => p.href !== current).map((p) => (
          <li key={p.href}>
            <Link
              href={p.href}
              className="text-gold underline-offset-4 hover:underline"
            >
              {p.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
