import type { MetadataRoute } from 'next'

import { locales } from '@/data/portfolio'
import { getPortfolioProjectSlugs } from '@/lib/portfolio-content'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://franciscobecamurias.com'
  const projectSlugs = await getPortfolioProjectSlugs()
  const getProjectEntries = (locale: (typeof locales)[number]) =>
    projectSlugs
      .filter((project) => project.locale === locale)
      .map((project) => ({
        url: `${baseUrl}/${locale}/projects/${project.slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      }))

  const localizedPages = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/${locale}/about`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/services`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    ...getProjectEntries(locale),
  ])

  return [
    {
      url: baseUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...localizedPages,
  ]
}
