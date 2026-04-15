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
  project: PortfolioProject
}

export function ProjectPage({ locale, copy, project }: Props) {
  const alternateLocale = locale === 'pt' ? 'en' : 'pt'
  const labels =
    locale === 'pt'
      ? {
          back: 'Voltar ao portfolio',
          summary: 'Resumo',
          challenge: 'Desafio',
          solution: 'Solução',
          deliverables: 'Entregáveis',
          contact: 'Contacto',
          year: 'Ano',
          highlights: 'Destaques',
          deliverablesTitle: 'Páginas preparadas para receber imagens, plantas e detalhes reais.',
          placeholder: 'Placeholder visual principal',
          placeholderText: 'Espaço reservado para a imagem principal do projeto.',
        }
      : {
          back: 'Back to portfolio',
          summary: 'Overview',
          challenge: 'Challenge',
          solution: 'Solution',
          deliverables: 'Deliverables',
          contact: 'Contact',
          year: 'Year',
          highlights: 'Highlights',
          deliverablesTitle: 'Pages ready to receive real imagery, plans, and detailed visuals.',
          placeholder: 'Main visual placeholder',
          placeholderText: 'Reserved space for the main project image.',
        }

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className={`absolute inset-x-0 top-0 h-[32rem] bg-gradient-to-br ${project.accent} opacity-90`} />
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.62),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.1),transparent)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-20 pt-8 sm:px-8 lg:px-12">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
        >
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.35em] text-stone-600">{copy.role}</p>
            <Link
              href={`/${locale}`}
              className="inline-block text-3xl font-semibold tracking-[-0.06em] text-stone-950 transition duration-300 hover:translate-x-1 sm:text-5xl"
            >
              {copy.name}
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`/${locale}`}
              className="rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-sm font-medium text-stone-800 transition hover:border-stone-900"
            >
              {labels.back}
            </Link>
            <Link
              href={`/${alternateLocale}/projects/${project.slug}`}
              className="rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
            >
              {copy.switchLanguageLabel}
            </Link>
          </div>
        </motion.header>

        <section className="grid gap-10 border-b border-stone-300/70 pb-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(300px,0.7fr)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="mb-6 text-[0.78rem] uppercase tracking-[0.34em] text-stone-600">
              {project.category} · {project.location}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.08em] text-stone-950 sm:text-7xl lg:text-[6rem] lg:leading-[0.92]">
              {project.title}
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
              {project.summary}
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 backdrop-blur"
          >
            <div className="space-y-4">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">{labels.year}</p>
                <p className="mt-2 text-lg text-stone-900">{project.year}</p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">{labels.highlights}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-stone-200 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-stone-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </section>

        <section className="grid gap-6 border-b border-stone-300/70 py-16 lg:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="rounded-[1.75rem] border border-stone-200 bg-white/75 p-6"
          >
            <p className="text-[0.72rem] uppercase tracking-[0.3em] text-stone-500">{labels.summary}</p>
            <p className="mt-5 text-sm leading-7 text-stone-600">{project.intro}</p>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
            className="rounded-[1.75rem] border border-stone-200 bg-white/75 p-6"
          >
            <p className="text-[0.72rem] uppercase tracking-[0.3em] text-stone-500">{labels.challenge}</p>
            <p className="mt-5 text-sm leading-7 text-stone-600">{project.challenge}</p>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            className="rounded-[1.75rem] border border-stone-200 bg-white/75 p-6"
          >
            <p className="text-[0.72rem] uppercase tracking-[0.3em] text-stone-500">{labels.solution}</p>
            <p className="mt-5 text-sm leading-7 text-stone-600">{project.solution}</p>
          </motion.article>
        </section>

        <section className="border-b border-stone-300/70 py-16">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.76rem] uppercase tracking-[0.3em] text-stone-500">
                {labels.deliverables}
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.06em] text-stone-950 sm:text-5xl">
                {labels.deliverablesTitle}
              </h2>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className={`relative min-h-[22rem] overflow-hidden rounded-[2rem] bg-gradient-to-br ${project.accent} p-6`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.6),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.32))]" />
              <div className="relative flex h-full flex-col justify-between">
                <span className="w-fit rounded-full border border-stone-300/60 bg-white/60 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-stone-600">
                  {labels.placeholder}
                </span>
                <div>
                  <p className="max-w-md text-sm leading-7 text-stone-700">
                    {labels.placeholderText}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-5">
              {project.deliverables.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
                  className="rounded-[1.5rem] border border-stone-200 bg-white/75 p-5"
                >
                  <p className="text-[0.72rem] uppercase tracking-[0.26em] text-stone-500">
                    0{index + 1}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-stone-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-8 sm:p-10">
            <p className="text-[0.76rem] uppercase tracking-[0.3em] text-stone-500">{labels.contact}</p>
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
        </section>
      </div>
    </main>
  )
}
