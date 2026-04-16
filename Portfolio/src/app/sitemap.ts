import type { MetadataRoute } from 'next'

import { locales, projects } from '@/data/portfolio'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://franciscobecamurias.com'

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
    ...projects.map((project) => ({
      url: `${baseUrl}/${locale}/projects/${project.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
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
