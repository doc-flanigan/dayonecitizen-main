'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import { NAV_GROUPS, NAV_PRIMARY } from '@/lib/site'
import CTAButton from './CTAButton'
import FreeFlyBanner from './FreeFlyBanner'
import StarterPackBanner from './StarterPackBanner'

export default function NavBar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const groupsRef = useRef<HTMLUListElement | null>(null)
  // Styling A/B (2026-07-20 -> 2026-09-16) DECIDED: NULL RESULT. The pulse
  // treatment made no difference — 0.229% CTR (9/3933) with pulse vs 0.251%
  // (11/4384) without, p=0.84 over 8,317 impressions, CIs fully overlapping.
  // Shipped the plain arm and removed the pulse; a styling tweak that cannot
  // be detected at this traffic volume is not worth the code path.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setOpenGroup(null)
  }, [pathname])

  // Close a desktop dropdown on outside click or Escape.
  useEffect(() => {
    if (!openGroup) return
    const onPointer = (e: PointerEvent) => {
      if (!groupsRef.current?.contains(e.target as Node)) setOpenGroup(null)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenGroup(null)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [openGroup])

  const isActive = (href: string) => pathname?.startsWith(href) ?? false
  const linkClass = (active: boolean) =>
    `relative px-3 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-ember after:to-gold after:transition-transform after:duration-300 after:ease-spring after:content-[''] ${
      active
        ? 'text-gold after:scale-x-100'
        : 'text-starwhite/75 after:origin-left after:scale-x-0 hover:text-starwhite hover:after:scale-x-100'
    }`

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

        <ul ref={groupsRef} className="hidden items-center gap-1 md:flex">
          <li>
            <Link href={NAV_PRIMARY.href} className={linkClass(isActive(NAV_PRIMARY.href))}>
              {NAV_PRIMARY.label}
            </Link>
          </li>
          {NAV_GROUPS.map((group, groupIndex) => {
            const alignRight = groupIndex === NAV_GROUPS.length - 1
            const expanded = openGroup === group.label
            const active = group.items.some((item) => isActive(item.href))
            const panelId = `nav-${group.label.toLowerCase()}`
            return (
              <li
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(group.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setOpenGroup(expanded ? null : group.label)}
                  className={`${linkClass(active)} inline-flex items-center gap-1`}
                >
                  {group.label}
                  <ChevronDown
                    size={14}
                    aria-hidden
                    className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
                  />
                </button>
                {expanded ? (
                  <div id={panelId} className={`absolute top-full z-50 pt-2 ${alignRight ? 'right-0' : 'left-0'}`}>
                    <ul className="w-72 rounded-2xl border border-gold/15 bg-navy/95 p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`block rounded-xl px-4 py-2.5 transition-colors hover:bg-navyLight/80 ${
                              isActive(item.href) ? 'text-gold' : 'text-starwhite'
                            }`}
                          >
                            <span className="block text-sm font-semibold">{item.label}</span>
                            {item.note ? (
                              <span className="mt-0.5 block text-xs text-muted">{item.note}</span>
                            ) : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
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
            >
              {/* Copy won SCH's nav A/B test (+181% CTR, 2026-07-06 → 09-16). */}
              Claim 50K UEC Bonus
            </CTAButton>
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
          <ul className="container-wide flex max-h-[75vh] flex-col gap-1 overflow-y-auto pb-4">
            <li>
              <Link
                href={NAV_PRIMARY.href}
                className={`block rounded-lg border-l-2 px-3 py-2 text-base font-medium transition-colors ${
                  isActive(NAV_PRIMARY.href)
                    ? 'border-gold bg-navyLight/80 text-gold'
                    : 'border-transparent text-starwhite/85 hover:border-gold/40 hover:bg-navyLight/60'
                }`}
              >
                {NAV_PRIMARY.label}
              </Link>
            </li>
            {NAV_GROUPS.map((group) => (
              <li key={group.label} className="pt-2">
                <p className="px-3 pb-1 font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-muted">
                  {group.label}
                </p>
                <ul className="flex flex-col gap-1">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block rounded-lg border-l-2 px-3 py-2 text-base font-medium transition-colors ${
                          isActive(item.href)
                            ? 'border-gold bg-navyLight/80 text-gold'
                            : 'border-transparent text-starwhite/85 hover:border-gold/40 hover:bg-navyLight/60'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li className="pt-2">
              <CTAButton className="w-full" href="/referral-code" trackingLabel="nav-cta-mobile">
                Claim 50K UEC Bonus
              </CTAButton>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
