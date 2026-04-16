'use client'

import Link from 'next/link'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

import type { Locale, PortfolioCopy } from '@/data/portfolio'

type Props = {
  locale: Locale
  copy: PortfolioCopy
  mode?: 'default' | 'revealOnScroll'
}

export function SiteHeader({ locale, copy, mode = 'default' }: Props) {
  const alternateLocale = locale === 'pt' ? 'en' : 'pt'
  const { scrollYProgress } = useScroll()
  const { scrollY } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.28,
  })
  const opacity = useTransform(scrollY, mode === 'revealOnScroll' ? [900, 1180] : [0, 1], [0, 1])
  const translateY = useTransform(scrollY, mode === 'revealOnScroll' ? [900, 1180] : [0, 1], [-18, 0])

  return (
    <motion.header
      initial={mode === 'default' ? { opacity: 0, y: -18 } : false}
      animate={mode === 'default' ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={mode === 'revealOnScroll' ? { opacity, y: translateY } : undefined}
      className={
        mode === 'revealOnScroll'
          ? 'pointer-events-none fixed inset-x-0 top-4 z-50 mx-auto w-full max-w-[92rem] px-4 sm:px-6 lg:px-10'
          : 'sticky top-4 z-40 mb-10'
      }
    >
      <div className="overflow-hidden rounded-[999px] border border-stone-900/12 bg-[rgba(247,241,212,0.74)] shadow-[0_20px_60px_-42px_rgba(53,38,19,0.42)] backdrop-blur-xl">
        <motion.div className="h-px origin-left bg-stone-900/45" style={{ scaleX }} />

        <div
          className={
            mode === 'revealOnScroll'
              ? 'pointer-events-auto flex items-center justify-between gap-4 px-4 py-3 sm:px-5'
              : 'flex items-center justify-between gap-4 px-4 py-3 sm:px-5'
          }
        >
          <div className="min-w-0">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-stone-500">
              {copy.role}
            </p>
            <Link
              href={`/${locale}`}
              className="block truncate text-sm tracking-[-0.05em] text-stone-950 sm:text-base"
            >
              {copy.name}
            </Link>
          </div>

          <Link
            href={`/${alternateLocale}`}
            className="rounded-full border border-stone-900/12 bg-white/60 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-stone-700 transition hover:border-stone-900/35 hover:text-stone-950"
          >
            {copy.switchLanguageLabel}
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
