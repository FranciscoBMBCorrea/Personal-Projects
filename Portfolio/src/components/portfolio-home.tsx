'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import {
  contactLinks,
  type Locale,
  type PortfolioCopy,
  type PortfolioProject,
} from '@/data/portfolio'

type Props = {
  locale: Locale
  copy: PortfolioCopy
  projects: PortfolioProject[]
}

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.68, ease: 'easeOut' as const },
}

export function PortfolioHome({ locale, copy, projects }: Props) {
  const [firstName, ...restName] = copy.name.split(' ')
  const lastName = restName.join(' ')
  const heroRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.46, 0.72, 0.94], [1, 1, 0.38, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.7, 1], [0, 48, 180])
  const heroScale = useTransform(scrollYProgress, [0, 0.78, 1], [1, 0.985, 0.94])
  const heroBlur = useTransform(scrollYProgress, [0, 0.7, 1], ['blur(0px)', 'blur(0px)', 'blur(10px)'])
  const titleSpacing = useTransform(scrollYProgress, [0, 0.82, 1], ['-0.03em', '-0.05em', '-0.08em'])
  const roleOpacity = useTransform(scrollYProgress, [0, 0.58, 0.9], [1, 0.92, 0.2])
  const signalScale = useTransform(scrollYProgress, [0, 0.6, 0.84], [1, 0.62, 0.08])
  const signalOpacity = useTransform(scrollYProgress, [0, 0.7, 0.92], [1, 0.55, 0])
  const coverOpacity = useTransform(scrollYProgress, [0.62, 0.9], [0, 1])
  const alternateLocale = locale === 'pt' ? 'en' : 'pt'

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-[-2rem] h-96 w-96 rounded-full bg-[#f8efb3]/70 blur-3xl" />
        <div className="absolute right-[-8rem] top-36 h-[30rem] w-[30rem] rounded-full bg-[#ecd777]/50 blur-3xl" />
        <div className="absolute bottom-24 left-1/3 h-80 w-80 rounded-full bg-[#fff1ba]/50 blur-3xl" />
      </div>

      <section ref={heroRef} className="relative z-10 min-h-[240vh]">
        <motion.div
          style={{ opacity: heroOpacity, y: heroY, scale: heroScale, filter: heroBlur }}
          className="sticky top-0 flex min-h-screen items-end overflow-hidden px-4 pb-10 pt-10 sm:px-6 lg:px-10 lg:pb-14 lg:pt-16"
        >
          <div className="grain-layer grain-layer-light" aria-hidden="true" />
          <motion.div
            style={{ opacity: coverOpacity }}
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(233,206,102,0.04),rgba(231,191,72,0.9))]"
          />

          <div className="relative mx-auto w-full max-w-[92rem]">
            <div className="flex min-h-[calc(100vh-4rem)] flex-col justify-between gap-10">
              <div className="flex items-start justify-between gap-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-stone-600 sm:text-[0.76rem]">
                  {copy.hero.eyebrow}
                </p>
                <div className="flex items-center gap-3">
                  <p className="hidden font-mono text-[0.68rem] uppercase tracking-[0.34em] text-stone-500 lg:block">
                    Portfolio 2026
                  </p>
                  <Link
                    href={`/${alternateLocale}`}
                    className="rounded-full border border-stone-900/12 bg-white/50 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-stone-700 transition hover:border-stone-900/35 hover:text-stone-950"
                  >
                    {copy.switchLanguageLabel}
                  </Link>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-1">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.04 }}
                    style={{ letterSpacing: titleSpacing }}
                    className="text-display text-[5rem] text-stone-950 sm:text-[8rem] lg:text-[12rem] xl:text-[15rem]"
                  >
                    {firstName}
                  </motion.h1>
                  <motion.h1
                    initial={{ opacity: 0, y: 36 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.94, ease: 'easeOut', delay: 0.1 }}
                    style={{ letterSpacing: titleSpacing }}
                    className="text-display text-accent text-[5rem] sm:text-[8rem] lg:text-[12rem] xl:text-[15rem]"
                  >
                    {lastName}
                  </motion.h1>
                </div>

                <motion.div
                  style={{ opacity: roleOpacity }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.84, ease: 'easeOut', delay: 0.18 }}
                  className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,23rem)] lg:items-end"
                >
                  <div className="space-y-6">
                    <p className="text-condensed max-w-5xl text-[2.2rem] leading-[0.9] text-stone-900 sm:text-[3.2rem] lg:text-[5.4rem]">
                      {copy.role}
                    </p>
                    <p className="max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
                      {copy.hero.description}
                    </p>
                  </div>

                  <div className="space-y-4 lg:text-right">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-stone-500">
                      Scroll to enter
                    </p>
                    <p className="max-w-sm text-sm leading-7 text-stone-700 lg:ml-auto">
                      {copy.hero.note}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.28 }}
                  className="flex items-center gap-4"
                >
                  <motion.span
                    style={{ opacity: signalOpacity }}
                    className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-stone-500"
                  >
                    Scroll
                  </motion.span>
                  <motion.span
                    style={{ scaleX: signalScale, opacity: signalOpacity }}
                    className="hero-signal-line origin-left relative h-px w-full max-w-[18rem] bg-[rgba(143,91,43,0.58)]"
                  />
                  <motion.span
                    style={{ opacity: signalOpacity }}
                    className="font-mono text-sm text-stone-600"
                  >
                    Enter portfolio
                  </motion.span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="relative z-20 mx-auto w-full max-w-[92rem] px-4 pb-20 sm:px-6 lg:px-10">
        <section className="border-t border-stone-900/15 py-10">
          <div className="grid gap-10 lg:grid-cols-[11rem_minmax(0,1fr)_minmax(16rem,22rem)]">
            <motion.p
              {...fadeUp}
              className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500"
            >
              Intro
            </motion.p>

            <motion.div {...fadeUp} className="space-y-6">
              <p className="max-w-4xl text-2xl leading-[1.18] tracking-[-0.05em] text-stone-900 sm:text-4xl">
                Interiors, 2D drafting, and 3D visualization presented with a calmer, more authored rhythm.
              </p>
              <div className="grid gap-6 border-t border-stone-900/12 pt-6 md:grid-cols-2">
                {copy.about.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-stone-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="space-y-3">
              {copy.introCard.rows.map(([label, value]) => (
                <div key={label} className="border-b border-stone-900/12 pb-3">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-stone-500">
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-800">{value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="projects" className="border-t border-stone-900/15 py-10">
          <div className="mb-12 grid gap-8 lg:grid-cols-[11rem_minmax(0,1fr)]">
            <motion.p
              {...fadeUp}
              className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500"
            >
              {copy.projects.label}
            </motion.p>
            <motion.div {...fadeUp} className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,22rem)]">
              <h2 className="max-w-4xl text-3xl leading-[0.95] tracking-[-0.08em] text-stone-950 sm:text-5xl lg:text-6xl">
                {copy.projects.title}
              </h2>
              <p className="max-w-md text-sm leading-7 text-stone-700">{copy.projects.description}</p>
            </motion.div>
          </div>

          <div>
            {projects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.62, ease: 'easeOut', delay: index * 0.04 }}
                className="group border-t border-stone-900/12 py-8"
              >
                <Link
                  href={`/${locale}/projects/${project.slug}`}
                  className="grid gap-8 lg:grid-cols-[11rem_minmax(0,1fr)_minmax(17rem,24rem)]"
                >
                  <div className="space-y-2">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500">
                      0{index + 1}
                    </p>
                    <p className="text-sm leading-7 text-stone-700">{project.year}</p>
                    <p className="text-sm leading-7 text-stone-700">{project.category}</p>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-stone-500">
                      {project.location}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-[2.7rem] leading-[0.9] tracking-[-0.08em] text-stone-950 transition duration-500 group-hover:translate-x-2 sm:text-[4rem] lg:text-[5.6rem]">
                        {project.title}
                      </h3>
                      <p className="max-w-3xl text-base leading-8 text-stone-700">{project.summary}</p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.highlights.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-stone-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between border-l border-stone-900/12 pl-0 lg:pl-8">
                    <div className={`min-h-[15rem] bg-gradient-to-br ${project.accent}`} />
                    <div className="mt-5 flex items-end justify-between border-t border-stone-900/12 pt-4">
                      <div className="space-y-1 text-sm text-stone-700">
                        <p>{project.area}</p>
                        <p>{project.client}</p>
                      </div>
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-stone-600">
                        {copy.projects.cta}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="services" className="border-t border-stone-900/15 py-10">
          <div className="grid gap-8 lg:grid-cols-[11rem_minmax(0,1fr)]">
            <motion.p
              {...fadeUp}
              className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500"
            >
              {copy.services.label}
            </motion.p>

            <div>
              <motion.div
                {...fadeUp}
                className="grid gap-6 border-b border-stone-900/12 pb-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(18rem,22rem)]"
              >
                <h2 className="max-w-4xl text-3xl leading-[0.95] tracking-[-0.08em] text-stone-950 sm:text-5xl">
                  {copy.services.title}
                </h2>
                <p className="max-w-md text-sm leading-7 text-stone-700">{copy.services.description}</p>
              </motion.div>

              {copy.services.items.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.58, ease: 'easeOut', delay: index * 0.04 }}
                  className="grid gap-5 border-b border-stone-900/12 py-5 lg:grid-cols-[4rem_minmax(0,24rem)_1fr]"
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-stone-500">
                    0{index + 1}
                  </p>
                  <h3 className="text-2xl tracking-[-0.06em] text-stone-950 sm:text-3xl">{service.title}</h3>
                  <p className="max-w-2xl text-sm leading-7 text-stone-700">{service.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="border-t border-stone-900/15 py-10">
          <div className="grid gap-8 lg:grid-cols-[11rem_minmax(0,1fr)]">
            <motion.p
              {...fadeUp}
              className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500"
            >
              {copy.process.label}
            </motion.p>

            <div>
              <motion.div
                {...fadeUp}
                className="grid gap-6 border-b border-stone-900/12 pb-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(18rem,22rem)]"
              >
                <h2 className="max-w-4xl text-3xl leading-[0.95] tracking-[-0.08em] text-stone-950 sm:text-5xl">
                  {copy.process.title}
                </h2>
                <p className="max-w-md text-sm leading-7 text-stone-700">{copy.process.description}</p>
              </motion.div>

              {copy.process.steps.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.58, ease: 'easeOut', delay: index * 0.04 }}
                  className="grid gap-5 border-b border-stone-900/12 py-5 lg:grid-cols-[4rem_minmax(0,24rem)_1fr]"
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-stone-500">
                    {step.number}
                  </p>
                  <h3 className="text-2xl tracking-[-0.06em] text-stone-950 sm:text-3xl">{step.title}</h3>
                  <p className="max-w-2xl text-sm leading-7 text-stone-700">{step.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-stone-900/15 py-10">
          <div className="grid gap-8 lg:grid-cols-[11rem_minmax(0,1fr)]">
            <motion.p
              {...fadeUp}
              className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500"
            >
              {copy.contact.label}
            </motion.p>

            <motion.div
              {...fadeUp}
              className="grid gap-8 border-b border-stone-900/12 pb-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,22rem)]"
            >
              <div className="space-y-6">
                <h2 className="max-w-4xl text-3xl leading-[0.95] tracking-[-0.08em] text-stone-950 sm:text-5xl lg:text-6xl">
                  {copy.contact.title}
                </h2>
                <p className="max-w-2xl text-base leading-8 text-stone-700">{copy.contact.description}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    className="rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-stone-800"
                    href={contactLinks[1]?.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {copy.contact.secondaryCta}
                  </a>
                  <a
                    className="rounded-full border border-stone-900/12 bg-white/60 px-6 py-3 text-sm font-medium text-stone-800 transition duration-300 hover:-translate-y-0.5 hover:border-stone-900/35"
                    href={contactLinks[2]?.href}
                  >
                    {copy.contact.primaryCta}
                  </a>
                </div>
              </div>

              <div>
                {contactLinks.map((contact) => (
                  <a
                    key={contact.label}
                    className="group flex items-end justify-between border-b border-stone-900/12 py-4"
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="text-2xl tracking-[-0.06em] text-stone-950">{contact.label}</span>
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-stone-600 transition duration-300 group-hover:translate-x-1">
                      Open
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
}
