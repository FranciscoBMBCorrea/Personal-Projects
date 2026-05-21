'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useMemo } from 'react'

import type { Locale, PortfolioCopy } from '@/data/portfolio'
import type { CMSPortfolioProject } from '@/lib/portfolio-content'
import { motionTokens } from '@/lib/constants'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { AboutSection } from '@/components/sections/About'
import { ContactSection } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { ProcessSection } from '@/components/sections/Process'
import { ProjectsSection } from '@/components/sections/Projects'
import { ServicesSection } from '@/components/sections/Services'

type Props = {
  locale: Locale
  copy: PortfolioCopy
  projects: CMSPortfolioProject[]
}

export function PortfolioHome({ locale, copy, projects }: Props) {
  const reduceMotion = useReducedMotion()

  const navItems = useMemo(
    () => [
      { href: `/${locale}#about`, label: copy.nav.about },
      { href: `/${locale}#projects`, label: copy.nav.projects },
      { href: `/${locale}#services`, label: copy.nav.services },
      { href: `/${locale}#process`, label: copy.nav.process },
      { href: `/${locale}#contact`, label: copy.nav.contact },
    ],
    [copy.nav, locale],
  )

  return (
    <main
      className="relative min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]"
      id="top"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.045),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(0,0,0,0.04),transparent_24%)]" />

      <div className="relative">
        <div className="mx-auto w-full max-w-[94rem] px-4 pb-16 sm:px-6 lg:px-10 lg:pb-20">
          <Hero
            copy={copy}
            locale={locale}
          />

        <Header
          alternateLocaleLabel={copy.switchLanguageLabel}
          introComplete
          locale={locale}
          name={copy.name}
          navItems={navItems}
        />

          <motion.div
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="pt-10 sm:pt-14 lg:pt-16"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            transition={{
              duration: reduceMotion ? 0 : motionTokens.duration.slow,
              ease: motionTokens.easing,
              delay: reduceMotion ? 0 : 0.14,
            }}
          >
            <AboutSection
              copy={copy.about}
              introCard={copy.introCard}
            />
            <ProjectsSection
              copy={copy.projects}
              locale={locale}
              projects={projects}
            />
            <ServicesSection copy={copy.services} />
            <ProcessSection copy={copy.process} />
            <ContactSection copy={copy.contact} />
          </motion.div>
        </div>

        <Footer note={copy.footer} />
      </div>
    </main>
  )
}
