import type { Metadata } from 'next'

import { PortfolioHome } from '@/components/portfolio-home'
import { StructuredData } from '@/components/seo/structured-data'
import { locales } from '@/data/portfolio'
import { getPortfolioProjects, getPortfolioSiteCopy } from '@/lib/portfolio-content'
import { resolveLocale, resolveOptionalLocale } from '@/lib/route-params'
import {
  buildPageMetadata,
  createBreadcrumbSchema,
  createPersonSchema,
  createProfessionalServiceSchema,
  createWebsiteSchema,
} from '@/lib/seo'

type Props = {
  params: Promise<{
    locale: string
  }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveOptionalLocale(params)

  if (!locale) {
    return {}
  }

  const copy = await getPortfolioSiteCopy(locale)

  return buildPageMetadata({
    locale,
    path: `/${locale}`,
    title: copy.siteTitle,
    description: copy.siteDescription,
    ogTitle: copy.ogTitle,
    ogDescription: copy.ogDescription,
    type: 'website',
  })
}

export default async function LocaleHomePage({ params }: Props) {
  const locale = await resolveLocale(params)
  const copy = await getPortfolioSiteCopy(locale)
  const projects = await getPortfolioProjects(locale)
  const schemas = [
    createWebsiteSchema(copy, locale),
    createPersonSchema(copy),
    createProfessionalServiceSchema(copy, locale),
    createBreadcrumbSchema([{ name: copy.nav.home, path: `/${locale}` }]),
  ]

  return (
    <>
      <StructuredData data={schemas} />
      <PortfolioHome
        locale={locale}
        copy={copy}
        projects={projects}
      />
    </>
  )
}
