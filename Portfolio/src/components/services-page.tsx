'use client'

import { motion } from 'framer-motion'

import { SiteHeader } from '@/components/site-header'
import type { Locale, PortfolioCopy } from '@/data/portfolio'

type Props = {
  locale: Locale
  copy: PortfolioCopy
}

export function ServicesPage({ locale, copy }: Props) {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-7rem] top-[-5rem] h-72 w-72 rounded-full bg-stone-200/45 blur-3xl" />
        <div className="absolute right-[-7rem] top-24 h-80 w-80 rounded-full bg-amber-100/45 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-20 pt-8 sm:px-8 lg:px-12">
        <SiteHeader copy={copy} locale={locale} />

        <section className="border-b border-stone-300/70 pb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="text-[0.76rem] uppercase tracking-[0.3em] text-stone-500"
          >
            {copy.servicesPage.label}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.06 }}
            className="mt-4 max-w-5xl text-5xl font-semibold tracking-[-0.08em] text-stone-950 sm:text-7xl lg:leading-[0.94]"
          >
            {copy.servicesPage.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.12 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-stone-600"
          >
            {copy.servicesPage.intro}
          </motion.p>
        </section>

        <section className="grid gap-5 py-16 lg:grid-cols-3">
          {copy.servicesPage.sections.map((section, index) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.05 }}
              className="rounded-[1.75rem] border border-stone-200 bg-white/75 p-6"
            >
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-stone-500">
                0{index + 1}
              </p>
              <h2 className="mt-5 text-2xl font-medium tracking-[-0.05em] text-stone-950">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-stone-600">{section.text}</p>
            </motion.article>
          ))}
        </section>
      </div>
    </main>
  )
}
