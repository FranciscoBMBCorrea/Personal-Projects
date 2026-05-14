export type { Locale, PortfolioCopy, PortfolioProject } from '@/data/portfolio-types'

import { getProfileCopy, contactLinks } from '@/data/profile'
import { getProject, getProjects, projectSlugs } from '@/data/projects'
import type { Locale } from '@/data/portfolio-types'

export const locales: Locale[] = ['pt', 'en']

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function getPortfolioCopy(locale: Locale) {
  return getProfileCopy(locale)
}

export { getProject, getProjects, projectSlugs }
