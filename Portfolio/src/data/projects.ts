import projectsData from '@/data/projects.json'
import type {
  Locale,
  PortfolioProject,
  PortfolioProjectDisciplineKey,
} from '@/types/portfolio'

type LocalizedProjectRecord = {
  slug: string
  disciplineKey: PortfolioProjectDisciplineKey
  year: string
  location: string
  category: string
  area: string
  client: string
  status?: string
  accent: string
  pt: Omit<PortfolioProject, 'slug' | 'disciplineKey' | 'year' | 'location' | 'category' | 'area' | 'client' | 'status' | 'accent'>
  en: Omit<PortfolioProject, 'slug' | 'disciplineKey' | 'year' | 'location' | 'category' | 'area' | 'client' | 'status' | 'accent'>
}

const localizedProjects = projectsData as LocalizedProjectRecord[]

function mapLocalizedProject(
  project: LocalizedProjectRecord,
  locale: Locale,
): PortfolioProject {
  return {
    slug: project.slug,
    disciplineKey: project.disciplineKey,
    year: project.year,
    location: project.location,
    category: project.category,
    area: project.area,
    client: project.client,
    status: project.status,
    accent: project.accent,
    ...project[locale],
  }
}

export function getProjects(locale: Locale): PortfolioProject[] {
  return localizedProjects.map((project) => mapLocalizedProject(project, locale))
}

export function getProject(locale: Locale, slug: string): PortfolioProject | null {
  const project = localizedProjects.find((item) => item.slug === slug)

  if (!project) {
    return null
  }

  return mapLocalizedProject(project, locale)
}

export const projectSlugs = localizedProjects.map((project) => project.slug)
