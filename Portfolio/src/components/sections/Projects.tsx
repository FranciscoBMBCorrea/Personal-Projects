import Image from 'next/image'
import Link from 'next/link'

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
            <p className="max-w-[18rem] text-sm leading-[1.7] text-black/78">
              {copy.description}
            </p>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className="group py-8"
              >
                <Link
                  className="grid gap-8 lg:grid-cols-[9rem_minmax(0,1fr)_minmax(14rem,20rem)]"
                  href={`/${locale}/projects/${project.slug}`}
                >
                  <div className="space-y-2">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-black/54">
                      0{index + 1}
                    </p>
                    <p className="text-sm leading-[1.6] text-black/74">{project.year}</p>
                    <p className="text-sm leading-[1.6] text-black/74">{project.category}</p>
                    {project.status ? (
                      <p className="text-sm leading-[1.6] text-black/74">{project.status}</p>
                    ) : null}
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-black/54">
                      {project.location}
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-4">
                      <h3 className="text-[2.35rem] leading-[0.98] tracking-[-0.055em] text-black transition duration-300 group-hover:translate-x-1 sm:text-[3.5rem] lg:text-[4.6rem]">
                        {project.title}
                      </h3>
                      <p className="max-w-[36rem] text-base leading-[1.76] text-black/82">
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
        </div>
      </div>
    </AnimatedSection>
  )
}
