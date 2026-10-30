import type { Metadata } from 'next'
import Link from '@/components/Link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'Cookie policy for dayonecitizen.com — why we do not set analytics or tracking cookies and do not show a cookie consent banner.',
  alternates: { canonical: '/cookie-policy' },
  openGraph: {
    type: 'website',
    images: ['/images/brand/og-image.png'],
    title: 'Cookie Policy | dayonecitizen.com',
    description:
      'Why dayonecitizen.com does not set tracking cookies and does not show a cookie consent banner.',
    url: '/cookie-policy',
  },
  robots: { index: true, follow: true },
}

export default function CookiePolicyPage() {
  return (
    <>
      <NavBar />
      <main className="bg-navy">
        <BreadcrumbsJsonLd
          items={[
            { name: 'Home', url: '/' },
            { name: 'Cookie Policy', url: '/cookie-policy' },
          ]}
        />

        <header className="border-b border-white/5 bg-gradient-to-b from-navy to-navyLight/30 pb-16 pt-32 sm:pt-40">
          <div className="container-narrow">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Legal
            </p>
            <h1 className="heading-display text-4xl sm:text-5xl">Cookie Policy</h1>
            <p className="mt-5 max-w-2xl text-lg text-starwhite/85">
              Why {SITE.name} does not set tracking cookies — and does not need
              a consent banner.
            </p>
          </div>
        </header>

        <article className="container-narrow space-y-10 py-16 text-base leading-relaxed text-starwhite/85">
          <section>
            <h2 className="heading-display text-2xl">What are cookies?</h2>
            <p className="mt-4">
              Cookies are small data files placed on your device when you
              visit a website, often used to make the site work or to report
              on how it is used.
            </p>
          </section>

          <section className="border-t border-white/5 pt-10">
            <h2 className="heading-display text-2xl">How we use cookies</h2>
            <p className="mt-4">
              We keep it simple: {SITE.name} does not set analytics,
              advertising, or tracking cookies. Because there is nothing that
              requires your consent, we do not show a cookie consent banner.
            </p>
          </section>

          <section className="border-t border-white/5 pt-10">
            <h2 className="heading-display text-2xl">
              How we measure traffic without cookies
            </h2>
            <p className="mt-4">
              We still want to understand how the site is used, so we rely on
              two privacy-friendly, cookieless methods:
            </p>
            <div className="mt-6 space-y-4">
              <div className="card-surface p-6">
                <h3 className="text-lg font-semibold text-starwhite">
                  Vercel Analytics
                </h3>
                <p className="mt-2">
                  Our hosting provider gives us aggregated page-view
                  statistics without using cookies and without tracking
                  individual visitors across sites.
                </p>
              </div>
              <div className="card-surface p-6">
                <h3 className="text-lg font-semibold text-starwhite">
                  Anonymous click logging
                </h3>
                <p className="mt-2">
                  When you click a referral button, our server logs the page
                  and the button label so we know which links are useful. No
                  personal data is collected, and no cookies are involved.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-white/5 pt-10">
            <h2 className="heading-display text-2xl">Managing cookies</h2>
            <p className="mt-4">
              Even though we do not set cookies, third-party sites you reach
              through links on this site (such as Roberts Space Industries or
              Discord) may set their own. Most browsers let you control or
              clear cookies through their settings — search your browser&rsquo;s
              help pages for &ldquo;cookie settings&rdquo; for the current steps.
            </p>
          </section>

          <section className="border-t border-white/5 pt-10">
            <h2 className="heading-display text-2xl">Changes to this policy</h2>
            <p className="mt-4">
              We may update this Cookie Policy from time to time to reflect
              changes in our practices. Changes take effect when the revised
              policy is posted on this page.
            </p>
          </section>

          <section className="border-t border-white/5 pt-10">
            <h2 className="heading-display text-2xl">Contact us</h2>
            <p className="mt-4">
              Questions about this Cookie Policy? Reach us on{' '}
              <a
                href="https://discord.gg/MpAUJs9xet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                our Discord server
              </a>
              . See also our{' '}
              <Link href="/privacy-policy" className="text-gold hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
