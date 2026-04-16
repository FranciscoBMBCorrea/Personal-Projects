import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ProjectPage } from '@/components/project-page'
import {
  getPortfolioCopy,
  getProject,
  isLocale,
  locales,
  projects,
  type Locale,
} from '@/data/portfolio'

type Props = {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    })),
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params

  if (!isLocale(locale)) {
    return {}
  }

  const project = getProject(locale as Locale, slug)

  if (!project) {
    return {}
  }

  return {
    title: `${project.title} | Francisco Beça Múrias`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: 'article',
    },
  }
}

export default async function ProjectRoutePage({ params }: Props) {
  const { locale, slug } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const project = getProject(locale as Locale, slug)

  if (!project) {
    notFound()
  }

  return (
    <ProjectPage
      locale={locale as Locale}
      copy={getPortfolioCopy(locale as Locale)}
      project={project}
    />
  )
}
