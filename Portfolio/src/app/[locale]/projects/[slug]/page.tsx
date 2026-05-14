import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ProjectPage } from '@/components/project-page'
import { StructuredData } from '@/components/seo/structured-data'
import {
  getPortfolioProject,
  getPortfolioProjectSlugs,
  getPortfolioSiteCopy,
} from '@/lib/portfolio-content'
import { parseLocale, resolveLocaleValue } from '@/lib/route-params'
import {
  buildPageMetadata,
  createBreadcrumbSchema,
  createCreativeWorkSchema,
} from '@/lib/seo'

type Props = {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateStaticParams() {
  return await getPortfolioProjectSlugs()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const resolvedLocale = parseLocale(locale)

  if (!resolvedLocale) {
    return {}
  }

  const project = await getPortfolioProject(resolvedLocale, slug)

  if (!project) {
    return {}
  }

  return buildPageMetadata({
    locale: resolvedLocale,
    path: `/${resolvedLocale}/projects/${slug}`,
    title: `${project.title} | Francisco Beça Múrias`,
    description: project.summary,
    ogTitle: `${project.title} | Francisco Beça Múrias`,
    ogDescription: project.summary,
    type: 'article',
  })
}

export default async function ProjectRoutePage({ params }: Props) {
  const { locale, slug } = await params
  const resolvedLocale = resolveLocaleValue(locale)
  const copy = await getPortfolioSiteCopy(resolvedLocale)

  const project = await getPortfolioProject(resolvedLocale, slug)

  if (!project) {
    notFound()
  }

  const schema = [
    createCreativeWorkSchema(project, resolvedLocale),
    createBreadcrumbSchema([
      { name: copy.nav.home, path: `/${resolvedLocale}` },
      { name: copy.nav.projects, path: `/${resolvedLocale}#projects` },
      { name: project.title, path: `/${resolvedLocale}/projects/${project.slug}` },
    ]),
  ]

  return (
    <>
      <StructuredData data={schema} />
      <ProjectPage
        locale={resolvedLocale}
        copy={copy}
        project={project}
      />
    </>
  )
}
