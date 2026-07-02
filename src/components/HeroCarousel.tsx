'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { HERO_IMAGES } from '@/lib/site'
import CTAButton from './CTAButton'

type Props = {
  title: React.ReactNode
  subtitle?: React.ReactNode
  ctaLabel?: string
  ctaHref?: string
  intervalMs?: number
  images?: { src: string; alt: string }[]
  height?: 'short' | 'tall' | 'full'
}

const heightClasses = {
  short: 'min-h-[420px] sm:min-h-[480px]',
  tall: 'min-h-[560px] sm:min-h-[640px] lg:min-h-[720px]',
  full: 'min-h-[80vh] lg:min-h-[88vh]',
}

export default function HeroCarousel({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  intervalMs = 9000,
  images = HERO_IMAGES as { src: string; alt: string }[],
  height = 'tall',
}: Props) {
  const [index, setIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const advance = useCallback(() => {
    setIndex((current) => (current + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (images.length <= 1) return
    const id = setInterval(advance, intervalMs)
    return () => clearInterval(id)
  }, [advance, intervalMs, images.length])

  return (
    <section
      className={`relative w-full overflow-hidden bg-navy ${heightClasses[height]}`}
      aria-label="Hero carousel"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={images[index].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover animate-slow-pan"
            onLoad={() => setIsLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/20 to-transparent" />
          {/* dawn horizon glow along the bottom seam */}
          <div
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent"
            aria-hidden
          />
          <div
            className="absolute inset-x-0 bottom-0 h-56"
            style={{
              background:
                'radial-gradient(60% 100% at 50% 100%, rgba(245,185,66,0.14), rgba(255,142,94,0.05) 55%, transparent 100%)',
            }}
            aria-hidden
          />
        </motion.div>
      </AnimatePresence>

      {!isLoaded ? (
        <div className="absolute inset-0 animate-pulse bg-navyLight/50" aria-hidden />
      ) : null}

      <div className="container-wide relative z-10 flex h-full flex-col justify-end pb-16 pt-32 sm:pb-24 sm:pt-40">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-lg border border-gold/35 bg-navy/70 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.28em] text-gold backdrop-blur-sm animate-fade-up opacity-0 [animation-delay:100ms]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-aurora shadow-[0_0_8px_rgba(111,227,193,0.9)]" aria-hidden />
            o7 citizen
          </p>
          <h1 className="heading-display text-4xl leading-[1.05] sm:text-6xl lg:text-7xl animate-fade-up opacity-0 [animation-delay:220ms]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-starwhite/85 sm:text-lg animate-fade-up opacity-0 [animation-delay:360ms]">
              {subtitle}
            </p>
          ) : null}
          {ctaLabel ? (
            <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up opacity-0 [animation-delay:480ms]">
              <CTAButton href={ctaHref} size="lg" trackingLabel="hero-primary">
                {ctaLabel}
              </CTAButton>
              <a
                href="#start-here"
                className="text-sm font-medium text-starwhite/80 underline-offset-4 hover:text-gold hover:underline"
              >
                or scroll down for the basics
              </a>
            </div>
          ) : null}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-300 ease-spring ${
              i === index
                ? 'w-10 bg-gradient-to-r from-ember to-gold shadow-[0_0_10px_rgba(245,185,66,0.6)]'
                : 'w-4 bg-starwhite/30 hover:bg-starwhite/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
