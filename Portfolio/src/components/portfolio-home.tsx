'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

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
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.65, ease: 'easeOut' as const },
}

export function PortfolioHome({ locale, copy, projects }: Props) {
  const alternateLocale = locale === 'pt' ? 'en' : 'pt'

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-stone-400/30" />
        <div className="absolute left-[-6rem] top-[-4rem] h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute right-[-8rem] top-24 h-80 w-80 rounded-full bg-rose-100/45 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-stone-200/45 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-20 pt-8 sm:px-8 lg:px-12">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
        >
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              {copy.role}
            </p>
            <Link
              href={`/${locale}`}
              className="inline-block text-3xl font-semibold tracking-[-0.06em] text-stone-900 transition duration-300 hover:translate-x-1 sm:text-5xl"
            >
              {copy.name}
            </Link>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-base text-stone-600 sm:text-lg">
              <a className="transition hover:text-stone-900" href="#about">
                {copy.nav.about}
              </a>
              <a className="transition hover:text-stone-900" href="#projects">
                {copy.nav.projects}
              </a>
              <a className="transition hover:text-stone-900" href="#services">
                {copy.nav.services}
              </a>
              <a className="transition hover:text-stone-900" href="#process">
                {copy.nav.process}
              </a>
              <a className="transition hover:text-stone-900" href="#contact">
                {copy.nav.contact}
              </a>
            </nav>

            <Link
              href={`/${alternateLocale}`}
              className="rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-stone-700 backdrop-blur transition hover:border-stone-900 hover:text-stone-900"
            >
              {copy.switchLanguageLabel}
            </Link>
          </div>
        </motion.header>

        <section className="grid items-end gap-10 border-b border-stone-300/70 pb-16 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.72fr)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
            className="max-w-4xl"
          >
            <p className="mb-6 text-[0.78rem] uppercase tracking-[0.34em] text-stone-500">
              {copy.hero.eyebrow}
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.08em] text-stone-950 sm:text-7xl lg:text-[6.4rem] lg:leading-[0.92]">
              {copy.hero.title}
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
              {copy.hero.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                className="rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-stone-800"
                href="#projects"
              >
                {copy.hero.primaryCta}
              </a>
              <a
                className="rounded-full border border-stone-300 bg-white/70 px-6 py-3 text-sm font-medium text-stone-800 transition duration-300 hover:-translate-y-0.5 hover:border-stone-900"
                href="#contact"
              >
                {copy.hero.secondaryCta}
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.18 }}
            className="rounded-[2rem] border border-stone-300/80 bg-white/75 p-6 shadow-[0_30px_80px_-40px_rgba(70,50,20,0.25)] backdrop-blur"
          >
            <p className="text-[0.72rem] uppercase tracking-[0.26em] text-stone-500">
              {copy.introCard.title}
            </p>
            <div className="mt-8 space-y-4">
              {copy.introCard.rows.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50/70 px-4 py-3"
                >
                  <span className="text-sm text-stone-500">{label}</span>
                  <span className="text-sm text-stone-900">{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm leading-7 text-stone-600">{copy.hero.note}</p>
          </motion.aside>
        </section>

        <motion.section
          id="about"
          {...fadeUp}
          className="grid gap-8 border-b border-stone-300/70 py-16 lg:grid-cols-[0.82fr_minmax(0,1fr)]"
        >
          <div>
            <p className="text-[0.76rem] uppercase tracking-[0.3em] text-stone-500">
              {copy.about.label}
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.06em] text-stone-950 sm:text-5xl">
              {copy.about.title}
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {copy.about.paragraphs.map((paragraph) => (
              <div
                key={paragraph}
                className="rounded-[1.75rem] border border-stone-200 bg-white/70 p-6 text-base leading-8 text-stone-600"
              >
                {paragraph}
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" {...fadeUp} className="border-b border-stone-300/70 py-16">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.76rem] uppercase tracking-[0.3em] text-stone-500">
                {copy.projects.label}
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.06em] text-stone-950 sm:text-5xl">
                {copy.projects.title}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-stone-500">
              {copy.projects.description}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.05 }}
                className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white/75 shadow-[0_30px_90px_-50px_rgba(70,50,20,0.24)]"
              >
                <div className={`relative min-h-[16rem] bg-gradient-to-br ${project.accent} p-6`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.35))]" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between text-sm uppercase tracking-[0.24em] text-stone-600">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-3xl font-medium tracking-[-0.05em] text-stone-950">
                        {project.title}
                      </h3>
                      <p className="max-w-lg text-sm leading-7 text-stone-700">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 p-6">
                  <p className="text-sm leading-7 text-stone-600">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-stone-200 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-stone-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/${locale}/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 transition group-hover:translate-x-1"
                  >
                    {copy.projects.cta}
                    <span aria-hidden="true">+</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="services"
          {...fadeUp}
          className="grid gap-8 border-b border-stone-300/70 py-16 lg:grid-cols-[0.82fr_minmax(0,1fr)]"
        >
          <div>
            <p className="text-[0.76rem] uppercase tracking-[0.3em] text-stone-500">
              {copy.services.label}
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.06em] text-stone-950 sm:text-5xl">
              {copy.services.title}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-stone-500">
              {copy.services.description}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {copy.services.items.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
                className="rounded-[1.75rem] border border-stone-200 bg-white/75 p-6"
              >
                <p className="text-[0.72rem] uppercase tracking-[0.24em] text-stone-500">
                  0{index + 1}
                </p>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.05em] text-stone-950">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{service.text}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="process" {...fadeUp} className="border-b border-stone-300/70 py-16">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.76rem] uppercase tracking-[0.3em] text-stone-500">
                {copy.process.label}
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.06em] text-stone-950 sm:text-5xl">
                {copy.process.title}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-stone-500">
              {copy.process.description}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {copy.process.steps.map((step) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="rounded-[1.75rem] border border-stone-200 bg-stone-50/75 p-6"
              >
                <p className="text-sm uppercase tracking-[0.34em] text-stone-500">{step.number}</p>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.05em] text-stone-950">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{step.text}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" {...fadeUp} className="py-16">
          <div className="rounded-[2rem] border border-stone-200 bg-white/75 p-8 shadow-[0_30px_90px_-50px_rgba(70,50,20,0.24)] sm:p-10">
            <p className="text-[0.76rem] uppercase tracking-[0.3em] text-stone-500">
              {copy.contact.label}
            </p>
            <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.06em] text-stone-950 sm:text-5xl">
                  {copy.contact.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
                  {copy.contact.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {contactLinks.map((contact, index) => (
                  <a
                    key={contact.label}
                    className={
                      index === 0
                        ? 'rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-stone-800'
                        : 'rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition duration-300 hover:-translate-y-0.5 hover:border-stone-900'
                    }
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contact.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm leading-7 text-stone-500">{copy.footer}</p>
        </motion.section>
      </div>
    </main>
  )
}
