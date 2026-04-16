'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import type { Locale, PortfolioCopy, PortfolioProject } from '@/data/portfolio'

type Props = {
  locale: Locale
  copy: PortfolioCopy
  project: PortfolioProject
}

export function ProjectPage({ locale, copy, project }: Props) {
  const labels =
    locale === 'pt'
      ? {
          back: 'Fechar projeto',
          summary: 'Resumo',
          challenge: 'Desafio',
          solution: 'Solução',
          deliverables: 'Entregáveis',
          area: 'Área',
          client: 'Cliente',
          year: 'Ano',
          location: 'Local',
          result: 'Resultado',
          images: 'Sequência visual',
          galleryNote: 'Página em formato editorial, preparada para receber fotografias, renders e pranchas reais.',
        }
      : {
          back: 'Close project',
          summary: 'Overview',
          challenge: 'Challenge',
          solution: 'Solution',
          deliverables: 'Deliverables',
          area: 'Area',
          client: 'Client',
          year: 'Year',
          location: 'Location',
          result: 'Result',
          images: 'Visual sequence',
          galleryNote: 'Editorial project page ready to receive real photography, renders, and presentation boards.',
        }

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-4 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[rgba(31,24,11,0.16)]" />
        <div className="absolute left-[-8rem] top-10 h-80 w-80 rounded-full bg-white/28 blur-3xl" />
        <div className="absolute right-[-6rem] top-24 h-[28rem] w-[28rem] rounded-full bg-[#f7efb8]/30 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 26, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative mx-auto max-w-[92rem] rounded-[2rem] border border-stone-900/12 bg-[rgba(249,244,220,0.82)] shadow-[0_30px_120px_-60px_rgba(38,27,11,0.52)] backdrop-blur-2xl"
      >
        <div className="sticky top-4 z-30 flex items-center justify-between gap-4 border-b border-stone-900/10 bg-[rgba(249,244,220,0.72)] px-5 py-4 backdrop-blur-xl sm:px-7">
          <Link
            href={`/${locale}#projects`}
            className="rounded-full border border-stone-900/12 bg-white/55 px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-stone-700 transition hover:border-stone-900/35 hover:text-stone-950"
          >
            {labels.back}
          </Link>

          <Link
            href={`/${locale === 'pt' ? 'en' : 'pt'}/projects/${project.slug}`}
            className="rounded-full border border-stone-900/12 bg-white/55 px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-stone-700 transition hover:border-stone-900/35 hover:text-stone-950"
          >
            {copy.switchLanguageLabel}
          </Link>
        </div>

        <div className="px-5 pb-10 pt-8 sm:px-7 sm:pb-14">
          <section className="grid gap-8 border-b border-stone-900/10 pb-10 lg:grid-cols-[11rem_minmax(0,1fr)_minmax(17rem,21rem)]">
            <div className="space-y-2">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500">
                {project.category}
              </p>
              <p className="text-sm leading-7 text-stone-700">{project.year}</p>
              <p className="text-sm leading-7 text-stone-700">{project.location}</p>
            </div>

            <div className="space-y-6">
              <h1 className="text-[3rem] leading-[0.9] tracking-[-0.09em] text-stone-950 sm:text-[4.8rem] lg:text-[7rem]">
                {project.title}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-stone-800">{project.summary}</p>
            </div>

            <div className="space-y-4 border-l border-stone-900/10 pl-0 lg:pl-8">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-stone-500">{labels.area}</p>
                <p className="mt-2 text-base text-stone-900">{project.area}</p>
              </div>
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-stone-500">{labels.client}</p>
                <p className="mt-2 text-base text-stone-900">{project.client}</p>
              </div>
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-stone-500">{labels.location}</p>
                <p className="mt-2 text-base text-stone-900">{project.location}</p>
              </div>
            </div>
          </section>

          <section className="grid gap-8 border-b border-stone-900/10 py-10 lg:grid-cols-[11rem_minmax(0,1fr)]">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500">
              {labels.images}
            </p>

            <div className="space-y-6">
              <div className={`min-h-[30rem] bg-gradient-to-br ${project.accent}`} />
              <div className="grid gap-6 md:grid-cols-2">
                <div className={`min-h-[22rem] bg-gradient-to-br ${project.accent}`} />
                <div className="grid gap-6">
                  <div className={`min-h-[10rem] bg-gradient-to-br ${project.accent}`} />
                  <div className={`min-h-[10rem] bg-gradient-to-br ${project.accent}`} />
                </div>
              </div>
              <p className="max-w-2xl font-mono text-[0.72rem] uppercase tracking-[0.22em] text-stone-600">
                {labels.galleryNote}
              </p>
            </div>
          </section>

          <section className="grid gap-8 border-b border-stone-900/10 py-10 lg:grid-cols-[11rem_minmax(0,1fr)]">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500">
              {labels.summary}
            </p>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.7fr)]">
              <div className="space-y-6">
                <p className="text-base leading-8 text-stone-800">{project.intro}</p>
                <p className="text-base leading-8 text-stone-700">{project.result}</p>
              </div>

              <div className="space-y-6 border-l border-stone-900/10 pl-0 lg:pl-8">
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-stone-500">
                    {labels.challenge}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-700">{project.challenge}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-stone-500">
                    {labels.solution}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-700">{project.solution}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-stone-500">
                    {labels.result}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-700">{project.impact}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-8 py-10 lg:grid-cols-[11rem_minmax(0,1fr)]">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500">
              {labels.deliverables}
            </p>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {project.deliverables.map((item, index) => (
                <div key={item} className="border-t border-stone-900/12 pt-4">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-stone-500">
                    0{index + 1}
                  </p>
                  <p className="mt-4 text-base leading-7 text-stone-800">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </main>
  )
}
