import type { Metadata } from 'next'

import type { Locale, PortfolioCopy, PortfolioProject } from '@/data/portfolio'

export const siteUrl = 'https://franciscobecamurias.com'

export const seoKeywords = [
  'designer de interiores',
  'móveis planejados',
  'desenho 2D',
  'modelação 3D',
  'renderização 3D',
  'visualização de interiores',
  'freelance',
  'arquitetura de interiores',
  'custom furniture',
  'interior designer',
  '2D drafting',
  '3D visualization',
]

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString()
}

export function buildOgImageUrl(input: {
  locale: Locale
  title: string
  description: string
  type?: string
}) {
  const params = new URLSearchParams({
    locale: input.locale,
    title: input.title,
    description: input.description,
    type: input.type ?? 'Portfolio',
  })

  return absoluteUrl(`/api/og?${params.toString()}`)
}

export function buildPageMetadata(input: {
  locale: Locale
  path: string
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
  type?: 'website' | 'article'
}) {
  const canonical = absoluteUrl(input.path)
  const image = buildOgImageUrl({
    locale: input.locale,
    title: input.ogTitle ?? input.title,
    description: input.ogDescription ?? input.description,
    type: input.type === 'article' ? 'Project' : 'Portfolio',
  })

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical,
      languages: {
        pt: absoluteUrl(input.path.replace(/^\/(pt|en)/, '/pt')),
        en: absoluteUrl(input.path.replace(/^\/(pt|en)/, '/en')),
      },
    },
    openGraph: {
      title: input.ogTitle ?? input.title,
      description: input.ogDescription ?? input.description,
      url: canonical,
      type: input.type ?? 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: input.ogTitle ?? input.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: input.ogTitle ?? input.title,
      description: input.ogDescription ?? input.description,
      images: [image],
    },
  } satisfies Metadata
}

export function createPersonSchema(copy: PortfolioCopy) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}#person`,
    name: copy.name,
    url: siteUrl,
    jobTitle: copy.role,
    description: copy.siteDescription,
    knowsAbout: seoKeywords,
    sameAs: [
      'https://www.linkedin.com/in/francisco-corr%C3%AAa/',
    ],
    email: 'franciscobmbc@gmail.com',
  }
}

export function createProfessionalServiceSchema(copy: PortfolioCopy, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}#service`,
    name: copy.name,
    url: absoluteUrl(`/${locale}`),
    image: buildOgImageUrl({
      locale,
      title: copy.ogTitle,
      description: copy.ogDescription,
      type: 'Service',
    }),
    description: copy.siteDescription,
    areaServed: ['Portugal', 'Brazil'],
    serviceType: [
      'designer de interiores',
      'móveis planejados',
      'desenho 2D',
      'modelação 3D',
      'renderização 3D',
      'visualização de interiores',
    ],
  }
}

export function createWebsiteSchema(copy: PortfolioCopy, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    name: copy.siteTitle,
    url: absoluteUrl(`/${locale}`),
    description: copy.siteDescription,
    inLanguage: locale === 'pt' ? 'pt-PT' : 'en-US',
  }
}

export function createCreativeWorkSchema(project: PortfolioProject, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': absoluteUrl(`/${locale}/projects/${project.slug}`),
    name: project.title,
    headline: project.title,
    description: project.summary,
    datePublished: project.year,
    creator: {
      '@id': `${siteUrl}#person`,
    },
    about: [project.category, ...project.highlights],
    keywords: [...project.services, ...project.tools, ...project.highlights],
    genre: project.category,
    locationCreated: project.location,
  }
}

export function createBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
