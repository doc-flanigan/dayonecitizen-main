'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/site'
import CTAButton, { getCtaVariant } from './CTAButton'
import FreeFlyBanner from './FreeFlyBanner'
import StarterPackBanner from './StarterPackBanner'

export default function NavBar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // Styling A/B (2026-07-20): copy is identical on both arms; variant b adds
  // the pulse treatment. The earlier copy test ended inconclusive at 0.1% CTR.
  const [ctaStyle, setCtaStyle] = useState<'a' | 'b'>('a')

  useEffect(() => {
    setCtaStyle(getCtaVariant())
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-gold/10 bg-navy/80 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl'
          : 'bg-gradient-to-b from-navy/80 to-transparent'
      }`}
    >
      <FreeFlyBanner />
      <StarterPackBanner />
      <nav
        className="container-wide flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight"
        >
          <span
            className="rounded-lg bg-gradient-to-b from-[#ffd27a] via-gold to-goldDark px-2 py-1 font-display font-extrabold text-navy shadow-[0_4px_16px_-6px_rgba(245,185,66,0.7)] transition-transform duration-300 ease-spring group-hover:-translate-y-0.5"
            aria-label="DOC — Day One Citizen"
          >
            DOC
          </span>
          <span className="hidden font-display text-base font-semibold text-starwhite sm:inline">
            dayonecitizen<span className="text-gold">.com</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname?.startsWith(link.href)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-ember after:to-gold after:transition-transform after:duration-300 after:ease-spring after:content-[''] ${
                    active
                      ? 'text-gold after:scale-x-100'
                      : 'text-starwhite/75 after:origin-left after:scale-x-0 hover:text-starwhite hover:after:scale-x-100'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
          <li className="ml-2">
            {/* Bare 50K labels route to /referral-code (explains new-account
                eligibility) — RSI's /enlist bounces signed-in players. */}
            <CTAButton
              size="sm"
              href="/referral-code"
              trackingLabel="nav-cta"
              variants={{ a: 'Get 50K UEC', b: 'Get 50K UEC' }}
              className={ctaStyle === 'b' ? 'nav-cta-pulse' : ''}
            />
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-starwhite md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="md:hidden">
          <ul className="container-wide flex flex-col gap-1 pb-4">
            {NAV_LINKS.map((link) => {
              const active = pathname?.startsWith(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-lg border-l-2 px-3 py-2 text-base font-medium transition-colors ${
                      active
                        ? 'border-gold bg-navyLight/80 text-gold'
                        : 'border-transparent text-starwhite/85 hover:border-gold/40 hover:bg-navyLight/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li className="pt-2">
              <CTAButton className="w-full" href="/referral-code" trackingLabel="nav-cta-mobile">
                Get 50K UEC
              </CTAButton>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
