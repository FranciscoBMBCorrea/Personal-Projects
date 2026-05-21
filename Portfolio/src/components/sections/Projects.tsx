'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import type { PortfolioCopy } from '@/data/portfolio'
import type { CMSPortfolioProject } from '@/lib/portfolio-content'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Tag } from '@/components/ui/Tag'
import { Heading } from '@/components/typography/Heading'

type Props = {
  copy: PortfolioCopy['projects']
  locale: 'pt' | 'en'
  projects: CMSPortfolioProject[]
}

export function ProjectsSection({ copy, locale, projects }: Props) {
  const [activeGroup, setActiveGroup] = useState<'all' | 'interior-architecture' | 'projectista'>('all')
  const groups = [
    {
      key: 'interior-architecture',
      label:
        locale === 'pt' ? 'Arquitetura de interiores' : 'Interior architecture',
      description:
        locale === 'pt'
          ? 'Projetos com foco em espaço, atmosfera, materialidade e experiência interior.'
          : 'Projects focused on space, atmosphere, materiality, and interior experience.',
    },
    {
      key: 'projectista',
      label:
        locale === 'pt' ? 'Projectista' : 'Drafting and technical design',
      description:
        locale === 'pt'
          ? 'Projetos com ênfase em desenho, estruturação técnica, implantação e clareza construtiva.'
          : 'Projects centered on drafting, technical structure, siting, and construction clarity.',
    },
  ] as const

  const filterLabels =
    locale === 'pt'
      ? {
          all: 'Todos',
        }
      : {
          all: 'All',
        }

  const visibleGroups = (() => {
    if (activeGroup === 'all') {
      return groups
    }

    return groups.filter((group) => group.key === activeGroup)
  })()

  return (
    <AnimatedSection
      className="border-t border-black/10 py-12 sm:py-16 lg:py-20"
      id="projects"
    >
      <div className="grid gap-10 lg:grid-cols-[11rem_minmax(0,1fr)]">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-black/56">
          {copy.label}
        </p>

        <div className="space-y-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(16rem,19rem)]">
            <Heading
              as="h2"
              size="section"
            >
              {copy.title}
            </Heading>
            <p className="measure-narrow text-sm leading-[1.7] text-black/78">
              {copy.description}
            </p>
          </div>

          <div className="-mx-1 flex flex-nowrap items-center gap-5 overflow-x-auto border-y border-black/10 px-1 py-4 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            <button
              aria-pressed={activeGroup === 'all'}
              className={`min-h-11 shrink-0 px-0 py-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] transition ${
                activeGroup === 'all'
                  ? 'text-black'
                  : 'text-black/42 hover:text-black'
              }`}
              onClick={() => setActiveGroup('all')}
              type="button"
            >
              00 / {filterLabels.all}
            </button>
            {groups.map((group) => (
              <button
                aria-pressed={activeGroup === group.key}
                key={group.key}
                className={`min-h-11 shrink-0 px-0 py-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] transition ${
                  activeGroup === group.key
                    ? 'text-black'
                    : 'text-black/42 hover:text-black'
                }`}
                onClick={() => setActiveGroup(group.key)}
                type="button"
              >
                {group.key === 'interior-architecture' ? '01 / ' : '02 / '}
                {group.label}
              </button>
            ))}
          </div>

          <div className="space-y-14">
            {visibleGroups.map((group) => {
              const groupedProjects = projects.filter((project) => project.disciplineKey === group.key)

              if (!groupedProjects.length) {
                return null
              }

              return (
                <section
                  key={group.key}
                  className="space-y-5"
                >
                  <div className="grid gap-4 border-t border-black/10 pt-5 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,20rem)]">
                    <div className="space-y-2">
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/54">
                        {group.label}
                      </p>
                      <p className="max-w-[34rem] text-sm leading-[1.7] text-black/76">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="divide-y divide-black/10 border-y border-black/10">
                    {groupedProjects.map((project, index) => (
                      <article
                        key={project.slug}
                        className="group py-8"
                      >
                        <Link
                          className="grid gap-8 rounded-[1.4rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black/20 lg:grid-cols-[9rem_minmax(0,1fr)_minmax(14rem,20rem)] lg:items-start"
                          href={`/${locale}/projects/${project.slug}`}
                        >
                          <div className="space-y-2">
                            <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-black/54">
                              0{index + 1}
                            </p>
                            <p className="text-sm leading-[1.6] text-black/74">{project.year}</p>
                            <p className="text-sm leading-[1.6] text-black/74">{project.category}</p>
                            <p className="text-sm leading-[1.6] text-black/74">{project.discipline}</p>
                            {project.status ? (
                              <p className="text-sm leading-[1.6] text-black/74">{project.status}</p>
                            ) : null}
                            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-black/54">
                              {project.location}
                            </p>
                          </div>

                          <div className="space-y-5">
                            <div className="space-y-5">
                              <h3 className="text-serif text-[2.15rem] leading-[0.98] tracking-[-0.05em] text-black transition duration-300 group-hover:translate-x-1 sm:text-[3.2rem] lg:text-[4.15rem]">
                                {project.title}
                              </h3>
                              <p className="measure-copy text-[var(--font-size-body)] leading-[var(--line-height-body)] tracking-[var(--tracking-body)] text-black/82">
                                {project.summary}
                              </p>
                              <p className="max-w-[28rem] font-mono text-[0.68rem] uppercase tracking-[0.16em] text-black/58">
                                {project.impact}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {project.highlights.map((highlight) => (
                                <Tag key={highlight}>{highlight}</Tag>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-col justify-between gap-5 lg:border-l lg:border-black/10 lg:pl-8">
                            {project.images?.[0]?.url ? (
                              <div className="overflow-hidden rounded-[1.3rem] bg-black/4">
                                <Image
                                  alt={project.images[0].alt}
                                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                                  height={1200}
                                  loading="lazy"
                                  sizes="(max-width: 1024px) 100vw, 320px"
                                  src={project.images[0].url}
                                  width={960}
                                />
                              </div>
                            ) : (
                              <div className={`aspect-[4/5] rounded-[1.3rem] bg-gradient-to-br ${project.accent}`} />
                            )}

                            <div className="flex items-end justify-between border-t border-black/10 pt-4">
                              <div className="space-y-1 text-sm text-black/78">
                                <p>{project.area}</p>
                                <p>{project.client}</p>
                              </div>
                              <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/60">
                                {copy.cta}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
