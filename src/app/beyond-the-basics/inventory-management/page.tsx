import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import Term from '@/components/Term'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import ArticleJsonLd from '@/components/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'Star Citizen Inventory Guide — Ship & Personal Storage',
  description:
    'How to open Star Citizen inventory (press I), transfer items between personal and ship storage, and move gear between stations. Storage persistence explained.',
  alternates: { canonical: '/beyond-the-basics/inventory-management' },
  openGraph: {
    title: 'Star Citizen Inventory Guide — Ship & Personal Storage (2026)',
    description:
      'How to open Star Citizen inventory (press I), transfer items between personal and ship storage, and move gear between stations. Storage persistence explained.',
    url: '/beyond-the-basics/inventory-management',
  },
}

export default function InventoryManagementPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'My inventory is not showing items — what do I do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This is almost always a client sync issue — your items are still on the server. Close the inventory screen (I), wait a few seconds, and reopen it. If items are still missing, relog. The server-side data is usually intact even when the client fails to display it correctly. Check all storage locations before assuming something is lost.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens to my cargo if my ship is destroyed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cargo in the ship's hold is lost when the ship explodes. Small items in the ship's inventory panel are also typically lost. Your personal inventory — the items on your character — is safe. You keep those on respawn. High-value cargo can sometimes be salvaged from the wreck by other players.",
        },
      },
      {
        '@type': 'Question',
        name: 'Can I store items at any location?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can store items at any location that has a storage terminal or habitation room — major cities, space stations, and some outposts. Items stay until you retrieve them. Small outposts may not have permanent storage, so check before leaving valuables there.',
        },
      },
    ],
  }

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to transfer items in Star Citizen',
    description: 'Move items between your personal inventory and ship or station storage in Star Citizen.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Open the inventory screen',
        text: 'Press I to open the inventory screen.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Get near your ship or terminal',
        text: 'Make sure you are near your ship or storage terminal. Items can only be transferred when both inventories are physically close enough to interact with.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Drag items between panels',
        text: 'Drag items from the left panel (personal inventory) to the right panel (ship or station) or the other direction.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Transfer a whole stack',
        text: 'For moving a whole stack at once, right-click an item and choose Transfer all, or use the stack transfer button.',
      },
    ],
  }

  return (
    <>
      <NavBar />
      <main className="bg-navy min-h-screen">
        <BreadcrumbsJsonLd items={[
          { name: 'Home', url: '/' },
          { name: 'Beyond the Basics', url: '/beyond-the-basics' },
          { name: 'Inventory', url: '/beyond-the-basics/inventory-management' },
        ]} />
        <ArticleJsonLd
          headline="Star Citizen Inventory Guide — Ship & Personal Storage"
          description="How to open Star Citizen inventory (press I), transfer items between personal and ship storage, and move gear between stations. Storage persistence explained."
          path="/beyond-the-basics/inventory-management"
          section="Beyond the Basics"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
        {/* Hero */}
        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/40 pb-12 pt-32 sm:pt-40">
          <div className="container-narrow">
            <Link
              href="/beyond-the-basics"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-gold"
            >
              <ArrowLeft size={12} aria-hidden /> Beyond the Basics
            </Link>
            <h1 className="heading-display mt-2 text-3xl sm:text-5xl">
              Managing Your Inventory in Star Citizen (2026)
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted">
              Personal storage, ship cargo holds, and local station storage — what each
              type is, how to move items between them, and what happens when a ship
              is destroyed.
            </p>
          </div>
        </header>

        {/* Content */}
        <section className="py-14">
          <div className="container-wide px-4 max-w-3xl">

            <div className="card-surface rounded-lg p-5 border border-gold/20 mb-8">
              <p className="font-semibold text-gold mb-2">Quick summary</p>
              <p className="text-starwhite/80 text-sm leading-relaxed">
                Press <strong className="text-starwhite">I</strong> to open the
                inventory screen. Your personal inventory is on the left. The ship or
                station storage is on the right. Drag items between the two panels to
                move them. Always unload your ship before claiming it on an insurance
                reclaim — the claim destroys whatever is left inside.
              </p>
            </div>

            {/* Inventory types */}
            <h2 className="font-display text-2xl font-bold text-gold mt-6 mb-4">
              Types of storage
            </h2>
            <p className="text-starwhite/80 mb-4 leading-relaxed">
              Star Citizen inventory has three distinct layers. Understanding which is
              which prevents a lot of frustration.
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Personal inventory:</strong> The
                items your character is carrying — armor, weapons, consumables,
                tools. This storage travels with you everywhere. How much you can carry
                depends on the armor you are wearing and whether you have a backpack
                equipped.
              </li>
              <li>
                <strong className="text-starwhite">Backpack:</strong> An additional
                storage item you wear. Equipping one significantly increases how much
                you can carry in your personal inventory.
              </li>
              <li>
                <strong className="text-starwhite">Local storage:</strong> Storage
                at a specific location — your habitation room, an outpost storage
                terminal, or a city locker. Large capacity but the items stay at that
                location until you go back for them. These persist between sessions.
              </li>
              <li>
                <strong className="text-starwhite">Ship inventory and cargo hold:</strong>{' '}
                Storage attached to your ship. Small personal-size items go in the ship&apos;s
                inventory panel. Large trade goods (measured in{' '}
                <Term name="SCU">SCU</Term>, the standard cargo unit) go in the
                physical cargo hold. Items in the hold are lost if the ship is
                destroyed.
              </li>
            </ul>

            {/* How to transfer */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              How to transfer items
            </h2>
            <ol className="list-decimal pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                Press <strong className="text-starwhite">I</strong> to open the
                inventory screen.
              </li>
              <li>
                Make sure you are near your ship or storage terminal. Items can only
                be transferred when both inventories are physically close enough to
                interact with.
              </li>
              <li>
                Drag items from the left panel (personal inventory) to the right panel
                (ship or station) or the other direction.
              </li>
              <li>
                For moving a whole stack at once, right-click an item and choose{' '}
                <strong className="text-starwhite">Transfer all</strong>, or use the
                stack transfer button.
              </li>
            </ol>

            {/* Persistence */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              What persists between sessions
            </h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Personal inventory:</strong>{' '}
                Persists. Items on your character survive logout and server changes.
              </li>
              <li>
                <strong className="text-starwhite">Local storage:</strong> Persists.
                Items in habitation rooms and outpost terminals stay there until you
                retrieve them.
              </li>
              <li>
                <strong className="text-starwhite">Ship cargo hold:</strong> Persists
                as long as the ship is not destroyed. If the ship is destroyed, the
                cargo in the hold is lost.
              </li>
              <li>
                <strong className="text-starwhite">Insurance reclaim warning:</strong>{' '}
                If you submit an insurance claim on a ship (because it was destroyed),
                the ship is replaced but everything inside it is gone. Always unload
                your cargo before claiming.
              </li>
            </ul>

            {/* Organisation tips */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-4">
              Organisation tips
            </h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-starwhite/80">
              <li>
                <strong className="text-starwhite">Pick one home base.</strong> Keep
                your main loadout and valuable items at a single station you visit
                regularly. Spreading gear across many locations gets confusing fast.
              </li>
              <li>
                <strong className="text-starwhite">Dedicate ships to roles.</strong>{' '}
                Do not mix your combat loadout with{' '}
                <Term name="Cargo">cargo</Term> hauling inventory in the same ship.
                One ship, one purpose.
              </li>
              <li>
                <strong className="text-starwhite">Sell loot regularly.</strong>{' '}
                Looted items and trade goods pile up quickly. Visit a Trade & Development
                Division (TDD) terminal or a commodity kiosk to sell excess.
              </li>
              <li>
                <strong className="text-starwhite">Know your cargo capacity.</strong>{' '}
                One <Term name="SCU">SCU</Term> is roughly two cubic metres. Check
                your ship&apos;s hold size before buying trade goods — overfilling is
                a common mistake.
              </li>
            </ul>

            {/* FAQ */}
            <h2 className="font-display text-2xl font-bold text-gold mt-10 mb-6">
              Common questions
            </h2>

            <div className="space-y-6">
              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  My inventory is not showing items — what do I do?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  This is almost always a client sync issue — your items are still on
                  the server. Close the inventory screen (I), wait a few seconds, and
                  reopen it. If items are still missing, relog. The server-side data
                  is usually intact even when the client fails to display it correctly.
                  Check all storage locations before assuming something is lost.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  What happens to my cargo if my ship is destroyed?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  Cargo in the ship&apos;s hold is lost when the ship explodes. Small
                  items in the ship&apos;s inventory panel are also typically lost.
                  Your personal inventory — the items on your character — is safe. You
                  keep those on respawn. High-value cargo can sometimes be salvaged from
                  the wreck by other players.
                </p>
              </div>

              <div className="card-surface rounded-lg p-5 border border-white/5">
                <h3 className="font-semibold text-starwhite mb-2">
                  Can I store items at any location?
                </h3>
                <p className="text-starwhite/70 text-sm leading-relaxed">
                  You can store items at any location that has a storage terminal or
                  habitation room — major cities, space stations, and some outposts.
                  Items stay until you retrieve them. Small outposts may not have
                  permanent storage, so check before leaving valuables there.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/beyond-the-basics"
                  className="text-gold hover:underline text-sm"
                >
                  &larr; Back to all guides
                </Link>
                <Link
                  href="/day-one-citizen"
                  className="text-muted hover:text-starwhite text-sm transition-colors"
                >
                  Start from the beginning &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-navyLight border-t border-white/5">
          <div className="container-wide px-4 text-center">
            <p className="text-muted mb-6 max-w-md mx-auto">
              Not signed up yet? Use a referral code and start with fifty thousand
              bonus credits — enough to fill your first cargo hold.
            </p>
            <CTAButton trackingLabel="beyond-basics-inventory-management-bottom" size="lg">
              Get your 50K UEC bonus
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
