'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useMemo, useState } from 'react'

import { headerReveal } from '@/lib/animations'
import { layoutTokens, motionTokens } from '@/lib/constants'
import { cn, swapLocaleInPathname } from '@/lib/utils'

type NavItem = {
  href: string
  label: string
}

type Props = {
  alternateLocaleLabel: string
  introComplete?: boolean
  locale: string
  name: string
  navItems: NavItem[]
}

export function Header({
  alternateLocaleLabel,
  introComplete = true,
  locale,
  name,
  navItems,
}: Props) {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nextLocalePath = useMemo(() => swapLocaleInPathname(pathname, locale === 'pt' ? 'en' : 'pt'), [locale, pathname])
  const shouldShowSurface = introComplete && isScrolled

  const headerContent = (
    <div
      className={cn(
        layoutTokens.page,
        'sticky top-0 z-40 pt-3 sm:pt-4',
      )}
    >
      <div
        className={cn(
          'transition-[background-color,border-color,backdrop-filter] duration-300',
          shouldShowSurface
            ? 'border-t border-black/10 bg-[rgba(255,253,248,0.88)] backdrop-blur'
            : 'border-transparent bg-transparent',
        )}
      >
        <div className="flex items-center justify-between gap-4 px-0 py-2">
          <Link
            className="min-w-0 rounded-full px-1 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/25"
            href={`/${locale}`}
          >
            <span className="block truncate text-[0.92rem] font-medium tracking-[-0.04em] text-black sm:text-[0.98rem]">
              {name}
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <nav
              aria-label="Primary"
              className="flex items-center gap-3"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className="inline-flex min-h-11 items-center rounded-full px-1 py-2 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-black/56 transition hover:translate-x-[2px] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/20"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              className="inline-flex min-h-11 items-center rounded-full px-1 py-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-black/46 transition hover:translate-x-[2px] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/20"
              href={nextLocalePath}
            >
              {alternateLocaleLabel}
            </Link>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/56 transition hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/20 md:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            type="button"
          >
            Index
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isMenuOpen ? (
            <motion.div
              animate={{ opacity: 1, height: 'auto' }}
              className="overflow-hidden border-t border-black/10 md:hidden"
              exit={{ opacity: 0, height: 0 }}
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              transition={{
                duration: reduceMotion ? 0 : motionTokens.duration.base,
                ease: motionTokens.easing,
              }}
            >
              <nav
                aria-label="Mobile"
                className="flex flex-col px-1 py-3"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    className="inline-flex min-h-11 items-center rounded-xl px-4 py-3 font-mono text-[0.74rem] uppercase tracking-[0.18em] text-black/72 transition hover:bg-black/[0.03] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/20"
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  className="mt-2 inline-flex min-h-11 items-center rounded-xl px-4 py-3 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-black/62 transition hover:bg-black/[0.03] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/20"
                  href={nextLocalePath}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {alternateLocaleLabel}
                </Link>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )

  if (reduceMotion) {
    return headerContent
  }

  return (
    <motion.header
      animate="visible"
      initial="hidden"
      variants={headerReveal}
    >
      {headerContent}
    </motion.header>
  )
}
