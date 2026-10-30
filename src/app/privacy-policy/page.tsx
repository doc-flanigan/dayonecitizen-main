import type { Metadata } from 'next'
import Link from '@/components/Link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for dayonecitizen.com. What data we collect, how it is used, and your rights as a visitor to this unofficial Star Citizen fan site.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    type: 'website',
    images: ['/images/brand/og-image.png'],
    title: 'Privacy Policy | dayonecitizen.com',
    description:
      'What data dayonecitizen.com collects, how it is used, and your rights as a visitor.',
    url: '/privacy-policy',
  },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', url: '/' },
            { name: 'Privacy Policy', url: '/privacy-policy' },
          ]}
        />

        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/30 pb-16 pt-32 sm:pt-40">
          <div className="container-narrow">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Legal
            </p>
            <h1 className="heading-display text-4xl sm:text-5xl">Privacy Policy</h1>
            <p className="mt-5 max-w-2xl text-lg text-starwhite/85">
              How {SITE.name} collects, uses, and protects information when you
              visit.
            </p>
          </div>
        </header>

        <article className="container-narrow space-y-10 py-16 text-base leading-relaxed text-starwhite/85">
          <section>
            <h2 className="heading-display text-2xl">Our commitment to privacy</h2>
            <p className="mt-4">
              {SITE.name} is an unofficial fan site made by a player, for
              players, and is not affiliated with Cloud Imperium Games or
              Roberts Space Industries. This policy explains what data we
              collect when you visit, why, and your rights over it.
            </p>
          </section>

          <section className="border-t border-white/5 pt-10">
            <h2 className="heading-display text-2xl">Information we collect</h2>
            <p className="mt-4">
              We collect the minimum needed to understand how the site is used
              and keep the referral and fact-check features working:
            </p>
            <div className="mt-6 space-y-4">
              <div className="card-surface p-6">
                <h3 className="text-lg font-semibold text-starwhite">Usage data</h3>
                <p className="mt-2">
                  We use Vercel Analytics, a cookieless, privacy-friendly
                  service from our hosting platform, to see aggregated page
                  views and referring sites. It does not use cookies and does
                  not identify individual visitors.
                </p>
              </div>
              <div className="card-surface p-6">
                <h3 className="text-lg font-semibold text-starwhite">
                  Anonymous click logging
                </h3>
                <p className="mt-2">
                  When you click a referral button, our server logs the page
                  and the button label so we know which links are useful. No
                  personal data is collected and no cookies are involved.
                </p>
              </div>
              <div className="card-surface p-6">
                <h3 className="text-lg font-semibold text-starwhite">
                  Fact-check submissions
                </h3>
                <p className="mt-2">
                  The <Link href="/fact-check" className="text-gold hover:underline">fact-check</Link> page
                  lets you submit a claim for verification. We only collect the
                  claim text you type — no email or account is needed. We
                  briefly use your IP address in memory to limit spam
                  submissions; it is not stored or logged. The claim text is
                  sent to our team for review.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-white/5 pt-10">
            <h2 className="heading-display text-2xl">How we use this information</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-starwhite">To improve the site:</strong>{' '}
                understanding which pages and links are useful.
              </li>
              <li>
                <strong className="text-starwhite">To run the fact-check queue:</strong>{' '}
                reviewing submitted claims against official sources.
              </li>
              <li>
                <strong className="text-starwhite">To keep the site reliable:</strong>{' '}
                monitoring performance and preventing abuse.
              </li>
            </ul>
          </section>

          <section className="border-t border-white/5 pt-10">
            <h2 className="heading-display text-2xl">Your rights</h2>
            <p className="mt-4">
              Depending on your location, you may have rights to access,
              correct, restrict, or request erasure of personal data we hold
              about you. Because we collect so little — no accounts, no
              newsletter, no cookies — there is rarely anything tied to you to
              act on, but reach out using the contact method below and we will
              help.
            </p>
          </section>

          <section className="border-t border-white/5 pt-10">
            <h2 className="heading-display text-2xl">Third-party links</h2>
            <p className="mt-4">
              This site links to third-party sites — official Roberts Space
              Industries pages, Discord, and others in the dayonecitizen.com
              network. Clicking those links may let the destination site
              collect data about you under its own privacy policy. We do not
              control those sites and encourage you to read their policies.
            </p>
          </section>

          <section className="border-t border-white/5 pt-10">
            <h2 className="heading-display text-2xl">Cookies</h2>
            <p className="mt-4">
              {SITE.name} does not set analytics, advertising, or tracking
              cookies, which is why you will not see a cookie consent banner
              here. See our{' '}
              <Link href="/cookie-policy" className="text-gold hover:underline">
                Cookie Policy
              </Link>{' '}
              for details.
            </p>
          </section>

          <section className="border-t border-white/5 pt-10">
            <h2 className="heading-display text-2xl">Changes to this policy</h2>
            <p className="mt-4">
              We may update this Privacy Policy from time to time. Changes take
              effect when the revised policy is posted on this page.
            </p>
          </section>

          <section className="border-t border-white/5 pt-10">
            <h2 className="heading-display text-2xl">Contact us</h2>
            <p className="mt-4">
              Questions about this Privacy Policy? Reach us on{' '}
              <a
                href="https://discord.gg/MpAUJs9xet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                our Discord server
              </a>
              .
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
