import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, SITE } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-starfield">
      {/* horizon seam — thin gradient rule + warm glow */}
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        aria-hidden
      />
      <div className="glow-horizon absolute inset-x-0 top-0 h-32" aria-hidden />
      <div className="container-wide relative grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="group inline-flex items-center gap-2.5 text-lg font-bold">
            <span
              className="rounded-lg bg-gradient-to-b from-[#ffd27a] via-gold to-goldDark px-2 py-1 font-display font-extrabold text-navy shadow-[0_4px_16px_-6px_rgba(245,185,66,0.7)] transition-transform duration-300 ease-spring group-hover:-translate-y-0.5"
              aria-label="DOC — Day One Citizen"
            >
              DOC
            </span>
            <span className="font-display font-semibold text-starwhite">
              dayonecitizen<span className="text-gold">.com</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            {SITE.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Image
              src="/images/made-by-community.png"
              alt="Made by the Star Citizen Community — RSI Fankit"
              width={120}
              height={40}
              className="opacity-90"
            />
            <a
              href="https://discord.gg/r5mZvDh3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our Discord server"
            >
              <Image
                src="/images/join-us-discord.png"
                alt="Join us on Discord"
                width={146}
                height={40}
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>

        <div>
          <h3 className="eyebrow">
            Site
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-starwhite/80 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">
            Get Started
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="/referral-code"
                className="text-starwhite/80 hover:text-gold"
              >
                Referral Code
              </Link>
            </li>
            <li>
              <a
                href={SITE.referralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-starwhite/80 hover:text-gold"
              >
                Use my code
              </a>
            </li>
            <li>
              <Link
                href="/day-one-citizen"
                className="text-starwhite/80 hover:text-gold"
              >
                Day One Citizen
              </Link>
            </li>
            <li>
              <Link
                href="/glossary"
                className="text-starwhite/80 hover:text-gold"
              >
                Glossary A–Z
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/5">
        <div className="container-wide grid gap-6 py-8 text-xs leading-relaxed text-muted md:grid-cols-3">
          <p>
            <strong className="text-starwhite/90">Fan site disclaimer.</strong>{' '}
            This is an unofficial fan site and is not affiliated with, endorsed
            by, or connected to Cloud Imperium Games, Roberts Space Industries,
            or the Star Citizen franchise in any way.
          </p>
          <p>
            <strong className="text-starwhite/90">Affiliate disclosure.</strong>{' '}
            This site uses Star Citizen referral links (code STAR-GCQJ-N6NC). Referral code owners may receive an in-game bonus if you sign up. Your rewards are not affected.
          </p>
          <p>
            <strong className="text-starwhite/90">Trademarks.</strong> Star
            Citizen™ and Squadron 42™ are trademarks of Cloud Imperium Rights
            LLC. All in-game assets © Cloud Imperium Rights LLC.
          </p>
        </div>
        <div className="container-wide pb-8 font-mono text-xs text-muted/80">
          © {year} {SITE.name} · Built by {SITE.author} ·{' '}
          <span className="font-bold text-gold">o7</span>
        </div>
      </div>
    </footer>
  )
}
