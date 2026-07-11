import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import PageSources from '@/components/PageSources'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Star Citizen Quick Reference — Keybinds & Where to Buy Everything',
  description:
    'One mobile-friendly cheat sheet: the Star Citizen keybinds that matter on day one, capacitor keys, and exactly which shop sells weapons, armor, components, mining gear, and ships.',
  alternates: { canonical: '/quick-reference' },
  openGraph: {
    title: 'Star Citizen Quick Reference — Keybinds & Shops Cheat Sheet',
    description:
      'The keybinds you need and the shop that sells what you want, on one fast mobile page. From dayonecitizen.com.',
    url: '/quick-reference',
  },
}

// NOTE: keybind rows mirror /day-one-citizen/keybinds and the shop rows mirror
// /beyond-the-basics/shops-directory. If a game update changes either, update
// BOTH pages in the same commit (ledger: keybinds-core-defaults).

const DAY_ONE_KEYS = [
  { k: 'F', action: 'Interact with doors, terminals, ships, items' },
  { k: 'F1', action: 'Open / close mobiGlas' },
  { k: 'I', action: 'Open inventory' },
  { k: 'R', action: 'Flight ready — turns ship engines on' },
  { k: 'N', action: 'Toggle landing gear' },
  { k: 'B (hold)', action: 'Engage quantum travel' },
]

const ON_FOOT_KEYS = [
  { k: 'F', action: 'Interact (hold for more options)' },
  { k: 'F1', action: 'Open / close mobiGlas' },
  { k: 'I', action: 'Open inventory' },
  { k: 'Left Shift', action: 'Sprint (hold)' },
  { k: 'C', action: 'Crouch (toggle)' },
  { k: 'Left Ctrl', action: 'Prone (hold)' },
  { k: 'Space', action: 'Jump' },
  { k: '4', action: 'Holster / draw weapon (hold)' },
  { k: 'R', action: 'Reload' },
]

const FLIGHT_KEYS = [
  { k: 'W / S', action: 'Throttle up / down' },
  { k: 'A / D', action: 'Strafe left / right' },
  { k: 'Q / E', action: 'Roll left / right' },
  { k: 'Space', action: 'Strafe up' },
  { k: 'Left Ctrl', action: 'Strafe down' },
  { k: 'Left Shift', action: 'Afterburner (boost)' },
  { k: 'R', action: 'Flight ready — engines on / off' },
  { k: 'N', action: 'Toggle landing gear' },
  { k: 'B (hold)', action: 'Quantum travel — hold to spool and jump' },
  { k: 'Tab', action: 'Cycle targets' },
  { k: 'L', action: 'Toggle ship lights' },
  { k: 'F', action: 'Exit / enter seat' },
]

const CAPACITOR_KEYS = [
  { k: 'F5', action: 'Push regen toward weapons' },
  { k: 'F6', action: 'Push regen toward engines' },
  { k: 'F7', action: 'Push regen toward shields' },
  { k: 'F8', action: 'Reset to balanced' },
]

const SHOP_LOOKUP = [
  {
    need: 'Personal weapons',
    shop: 'Cubby Blast',
    where: 'Area18 — The Plaza',
    note: 'Widest selection in Stanton; also carries armor.',
  },
  {
    need: 'Best armor',
    shop: 'Hurston Security Depot',
    where: 'Lorville — CBD',
    note: 'Top protection ratings. Some sets need Hurston faction standing.',
  },
  {
    need: 'Ship components (Grade A)',
    shop: 'Omega Pro',
    where: 'New Babbage — The Commons',
    note: 'Best power plants and shields in Stanton.',
  },
  {
    need: 'Ship components (convenient)',
    shop: "Dumper's Depot",
    where: 'Most orbital stations',
    note: 'Mid-range parts right by the landing pads — no city trip.',
  },
  {
    need: 'Ship weapons',
    shop: 'Apocalypse Arms',
    where: 'Area18 — The Plaza',
    note: 'Best Size 1 to Size 4 ship guns.',
  },
  {
    need: 'Mining gear',
    shop: 'Shubin Interstellar',
    where: 'New Babbage — The Commons',
    note: 'One-stop shop for lasers, heads, and modules.',
  },
  {
    need: 'Ships (buy with aUEC)',
    shop: 'New Deal',
    where: 'Lorville — CBD',
    note: 'Widest in-game ship catalogue. Astro Armada in Area18 is the alternative.',
  },
  {
    need: 'General gear',
    shop: 'Tammany & Sons',
    where: 'New Babbage + Lorville',
    note: 'Armor, weapons, and equipment in one general store.',
  },
  {
    need: 'Clothing',
    shop: "Cordry's / Skutters / Casaba",
    where: 'New Babbage / Lorville / stations',
    note: 'Premium fashion, workwear, and casual basics respectively.',
  },
  {
    need: 'Commodity trading',
    shop: 'TDD',
    where: 'Area18 — The Plaza',
    note: 'Buy and sell bulk trade goods for profit.',
  },
]

const JUMP_LINKS = [
  { href: '#day-one', label: 'Day one' },
  { href: '#on-foot', label: 'On foot' },
  { href: '#flight', label: 'Flight' },
  { href: '#capacitors', label: 'Capacitors' },
  { href: '#shops', label: 'Shops' },
]

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="whitespace-nowrap rounded border border-white/20 bg-navyLight px-2 py-0.5 font-mono text-sm text-gold">
      {children}
    </kbd>
  )
}

function KeyTable({ rows, label }: { rows: { k: string; action: string }[]; label: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/5">
      <table className="w-full">
        <caption className="sr-only">{label}</caption>
        <tbody>
          {rows.map(({ k, action }) => (
            <tr key={k + action} className="border-t border-white/5 first:border-t-0">
              <td className="w-28 px-3 py-2.5 align-top sm:w-36 sm:px-4">
                <Kbd>{k}</Kbd>
              </td>
              <td className="px-3 py-2.5 text-sm text-starwhite/85 sm:px-4">{action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function QuickReferencePage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', url: '/' },
            { name: 'Quick Reference', url: '/quick-reference' },
          ]}
        />

        {/* Branded masthead — compact so the content is one thumb-scroll away */}
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-8 pt-28 sm:pt-36">
          <div className="container-narrow">
            <div className="flex items-center gap-3">
              <Image
                src="/images/brand/logo-mark.png"
                alt="Day One Citizen logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                dayonecitizen.com · cheat sheet
              </p>
            </div>
            <h1 className="heading-display mt-3 text-3xl sm:text-5xl">Quick Reference</h1>
            <p className="mt-3 max-w-2xl text-base text-muted">
              The keybinds that matter and the shop that sells what you need — one
              page, built for your phone. Deep dives live in the{' '}
              <Link href="/day-one-citizen/keybinds" className="text-gold hover:underline underline-offset-2">
                keybinds guide
              </Link>{' '}
              and the{' '}
              <Link href="/beyond-the-basics/shops-directory" className="text-gold hover:underline underline-offset-2">
                shops directory
              </Link>
              .
            </p>
          </div>
        </header>

        {/* Sticky jump nav — horizontal scroll on small screens */}
        <nav
          aria-label="Sections"
          className="sticky top-14 z-30 border-b border-white/5 bg-navy/95 backdrop-blur"
        >
          <div className="container-narrow flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
            {JUMP_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="whitespace-nowrap rounded-full border border-white/10 bg-navyLight/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-starwhite/80 transition-colors hover:border-gold/40 hover:text-gold"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        <div className="container-narrow space-y-14 py-12">
          {/* Day one six */}
          <section id="day-one" className="scroll-mt-28">
            <h2 className="heading-display text-2xl sm:text-3xl">
              The six keys that matter on day one
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Learn these first. Everything else can wait until you need it.
            </p>
            <div className="mt-5">
              <KeyTable rows={DAY_ONE_KEYS} label="Day-one essential keybinds" />
            </div>
          </section>

          {/* On foot */}
          <section id="on-foot" className="scroll-mt-28">
            <h2 className="heading-display text-2xl sm:text-3xl">On foot</h2>
            <div className="mt-5">
              <KeyTable rows={ON_FOOT_KEYS} label="On-foot keybinds" />
            </div>
          </section>

          {/* Flight */}
          <section id="flight" className="scroll-mt-28">
            <h2 className="heading-display text-2xl sm:text-3xl">Ship flight</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Mouse aims. Keyboard handles throttle, strafe, and roll. Set a
              destination before holding <Kbd>B</Kbd> for{' '}
              <Term name="Quantum Travel">quantum travel</Term>.
            </p>
            <div className="mt-5">
              <KeyTable rows={FLIGHT_KEYS} label="Ship flight keybinds" />
            </div>
          </section>

          {/* Capacitors */}
          <section id="capacitors" className="scroll-mt-28">
            <h2 className="heading-display text-2xl sm:text-3xl">Capacitors (F-keys)</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              In a fight, push to shields. Escaping? Push to engines. Routine
              flying? Leave it balanced. Your{' '}
              <Term name="MFD">MFD</Term> shows the current split.
            </p>
            <div className="mt-5">
              <KeyTable rows={CAPACITOR_KEYS} label="Capacitor management keybinds" />
            </div>
          </section>

          {/* Shops lookup */}
          <section id="shops" className="scroll-mt-28">
            <h2 className="heading-display text-2xl sm:text-3xl">
              Need something? Go here.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              The fastest answer to &ldquo;where do I buy…&rdquo; in{' '}
              <Term name="Stanton">Stanton</Term>. Prices vary by location —
              outposts charge ten to thirty percent more than cities.
            </p>
            <div className="mt-5 space-y-3">
              {SHOP_LOOKUP.map(({ need, shop, where, note }) => (
                <div
                  key={need}
                  className="card-surface rounded-xl border border-white/5 p-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                      {need}
                    </p>
                    <p className="font-mono text-xs text-muted">{where}</p>
                  </div>
                  <p className="mt-1 font-semibold text-starwhite">{shop}</p>
                  <p className="mt-1 text-sm leading-relaxed text-starwhite/70">{note}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Buying a ship with earned <Term name="aUEC">aUEC</Term>? The
              in-game catalogue is smaller than the pledge store — check the{' '}
              <Link
                href="/beyond-the-basics/shops-directory"
                className="text-gold hover:underline underline-offset-2"
              >
                full shops directory
              </Link>{' '}
              before a long trip.
            </p>
          </section>
        </div>

        {/* CTA */}
        <section className="border-t border-white/5 bg-navyLight py-14">
          <div className="container-wide px-4 text-center">
            <p className="mx-auto mb-6 max-w-md text-muted">
              New to the &lsquo;Verse? Sign up with a referral code and start
              with fifty thousand bonus credits.
            </p>
            <CTAButton trackingLabel="quick-reference-bottom" size="lg">
              Fly with 50K extra
            </CTAButton>
          </div>
        </section>

        <PageSources route="/quick-reference" />
      </main>
      <Footer />
    </>
  )
}
