'use client'

import { motion } from 'framer-motion'

import { SiteHeader } from '@/components/site-header'
import type { Locale, PortfolioCopy } from '@/data/portfolio'

type Props = {
  locale: Locale
  copy: PortfolioCopy
}

export function AboutPage({ locale, copy }: Props) {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6rem] top-[-4rem] h-72 w-72 rounded-full bg-amber-200/35 blur-3xl" />
        <div className="absolute right-[-7rem] top-20 h-80 w-80 rounded-full bg-stone-200/45 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-20 pt-8 sm:px-8 lg:px-12">
        <SiteHeader copy={copy} locale={locale} />

        <section className="grid gap-10 border-b border-stone-300/70 pb-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <p className="text-[0.76rem] uppercase tracking-[0.3em] text-stone-500">
              {copy.aboutPage.label}
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.08em] text-stone-950 sm:text-7xl lg:leading-[0.94]">
              {copy.aboutPage.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600">
              {copy.aboutPage.intro}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.12 }}
            className="rounded-[2rem] border border-stone-200 bg-white/80 p-6"
          >
            <div className="space-y-4">
              {copy.aboutPage.stats.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-stone-500">{label}</p>
                  <p className="mt-2 text-lg text-stone-900">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="grid gap-5 py-16 md:grid-cols-2">
          {copy.aboutPage.body.map((paragraph, index) => (
            <motion.article
              key={paragraph}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.05 }}
              className="rounded-[1.75rem] border border-stone-200 bg-white/75 p-6 text-base leading-8 text-stone-600"
            >
              {paragraph}
            </motion.article>
          ))}
        </section>
      </div>
    </main>
  )
}
