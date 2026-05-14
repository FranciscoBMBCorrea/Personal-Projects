import Image from 'next/image'

import type { Locale, PortfolioCopy } from '@/data/portfolio'
import type { CMSPortfolioProject } from '@/lib/portfolio-content'

import { PageShell } from '@/components/layout/PageShell'
import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Heading } from '@/components/typography/Heading'

type Props = {
  locale: Locale
  copy: PortfolioCopy
  project: CMSPortfolioProject
}

export function ProjectPage({ locale, copy, project }: Props) {
  const navItems = [
    { href: `/${locale}`, label: copy.nav.home },
    { href: `/${locale}#projects`, label: copy.nav.projects },
    { href: `/${locale}/about`, label: copy.nav.about },
    { href: `/${locale}/services`, label: copy.nav.services },
  ]

  const labels =
    locale === 'pt'
      ? {
          overview: 'Leitura do projeto',
          challenge: 'Questão central',
          solution: 'Resposta',
          result: 'O que demonstra',
          services: 'Serviços',
          tools: 'Ferramentas',
          deliverables: 'Conteúdo apresentado',
          sequence: 'Sequência visual',
          back: 'Voltar aos projetos',
        }
      : {
          overview: 'Project reading',
          challenge: 'Core question',
          solution: 'Response',
          result: 'What it demonstrates',
          services: 'Services',
          tools: 'Tools',
          deliverables: 'Included material',
          sequence: 'Visual sequence',
          back: 'Back to projects',
        }

  return (
    <PageShell
      copy={copy}
      locale={locale}
      navItems={navItems}
    >
      <article>
        <AnimatedSection className="border-b border-black/10 pb-12 sm:pb-16">
          <div className="grid gap-10 lg:grid-cols-[10rem_minmax(0,1fr)_minmax(16rem,20rem)]">
          <div className="space-y-2">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/56">
              {project.category}
            </p>
            <p className="text-sm leading-[1.6] text-black/76">{project.year}</p>
            <p className="text-sm leading-[1.6] text-black/76">{project.location}</p>
          </div>

          <div className="space-y-6">
            <Heading
              as="h1"
              size="section"
            >
              {project.title}
            </Heading>
            <p className="max-w-[40rem] text-lg leading-[1.72] text-black/82">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((highlight) => (
                <Tag key={highlight}>{highlight}</Tag>
              ))}
            </div>
          </div>

          <div className="space-y-4 border-l border-black/10 pl-0 lg:pl-8">
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/56">
                {locale === 'pt' ? 'Área' : 'Area'}
              </p>
              <p className="mt-2 text-base leading-[1.6] text-black/84">{project.area}</p>
            </div>
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/56">
                {locale === 'pt' ? 'Cliente' : 'Client'}
              </p>
              <p className="mt-2 text-base leading-[1.6] text-black/84">{project.client}</p>
            </div>
            {project.status ? (
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/56">
                  {locale === 'pt' ? 'Estado' : 'Status'}
                </p>
                <p className="mt-2 text-base leading-[1.6] text-black/84">{project.status}</p>
              </div>
            ) : null}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-black/10 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[10rem_minmax(0,1fr)]">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-black/56">
            {labels.sequence}
          </p>

          <div className="space-y-6">
            {project.images?.length ? (
              <>
                <div className="overflow-hidden rounded-[1.7rem] bg-black/4">
                  <Image
                    alt={project.images[0].alt}
                    className="aspect-[16/10] w-full object-cover"
                    height={1200}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 72vw, 960px"
                    src={project.images[0].url}
                    width={1800}
                  />
                </div>
                {project.images[0].caption ? (
                  <p className="max-w-[34rem] text-sm leading-[1.68] text-black/80">
                    {project.images[0].caption}
                  </p>
                ) : null}
                {project.images.length > 1 ? (
                  <div className="grid gap-5 md:grid-cols-2">
                    {project.images.slice(1, 5).map((image) => (
                      <figure
                        key={image.url}
                        className="space-y-3"
                      >
                        <div className="overflow-hidden rounded-[1.4rem] bg-black/4">
                          <Image
                            alt={image.alt}
                            className="aspect-[4/5] w-full object-cover"
                            height={1100}
                            sizes="(max-width: 768px) 100vw, 44vw"
                            src={image.url}
                            width={880}
                          />
                        </div>
                        {image.caption ? (
                          <figcaption className="text-sm leading-[1.68] text-black/80">
                            {image.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    ))}
                  </div>
                ) : null}
              </>
            ) : (
              <div className={`aspect-[16/10] rounded-[1.7rem] bg-gradient-to-br ${project.accent}`} />
            )}
          </div>
        </div>
        </AnimatedSection>

        <AnimatedSection className="border-b border-black/10 py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[10rem_minmax(0,1fr)]">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-black/56">
            {labels.overview}
          </p>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.8fr)]">
            <div className="space-y-5">
              <p className="text-base leading-[1.78] text-black/82">{project.intro}</p>
              <p className="text-base leading-[1.78] text-black/82">{project.result}</p>
            </div>

            <div className="space-y-6 border-l border-black/10 pl-0 lg:pl-8">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/56">
                  {labels.services}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <Tag key={service}>{service}</Tag>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/56">
                  {labels.tools}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Tag key={tool}>{tool}</Tag>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/56">
                  {labels.challenge}
                </p>
                <p className="mt-3 text-sm leading-[1.68] text-black/80">{project.challenge}</p>
              </div>
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/56">
                  {labels.solution}
                </p>
                <p className="mt-3 text-sm leading-[1.68] text-black/80">{project.solution}</p>
              </div>
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/56">
                  {labels.result}
                </p>
                <p className="mt-3 text-sm leading-[1.68] text-black/80">{project.impact}</p>
              </div>
            </div>
          </div>
        </div>
        </AnimatedSection>

        <AnimatedSection className="py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[10rem_minmax(0,1fr)]">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-black/56">
            {labels.deliverables}
          </p>

          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {project.deliverables.map((item, index) => (
                <div
                  key={item}
                  className="border-t border-black/10 pt-4"
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/56">
                    0{index + 1}
                  </p>
                  <p className="mt-4 text-base leading-[1.64] text-black/84">{item}</p>
                </div>
              ))}
            </div>

            <Button
              href={`/${locale}#projects`}
              variant="secondary"
            >
              {labels.back}
            </Button>
          </div>
          </div>
        </AnimatedSection>
      </article>
    </PageShell>
  )
}
