import * as prismic from '@prismicio/client'

import { createClient } from '@/prismicio'
import {
  getPortfolioCopy,
  getProject,
  getProjects,
  locales,
  type Locale,
  type PortfolioCopy,
  type PortfolioProject,
} from '@/data/portfolio'

const isPrismicEnabled = process.env.PORTFOLIO_ENABLE_PRISMIC === 'true'

const prismicLocaleMap: Record<Locale, string> = {
  pt: 'pt-pt',
  en: 'en-us',
}

const accentThemes = {
  stone: 'from-stone-200 via-[#f4f1eb] to-[#d8d0c4]',
  ivory: 'from-stone-100 via-[#f6f3ee] to-[#d2cbc0]',
  sand: 'from-[#d8d1c6] via-[#f7f4ef] to-[#ece4d8]',
  amber: 'from-[#e5d5a8] via-[#f6f0e5] to-[#d8c7a2]',
} as const

type AccentTheme = keyof typeof accentThemes

type ProjectDocument = prismic.PrismicDocument
type SettingsDocument = prismic.PrismicDocument

type ProjectDocumentData = {
  title?: prismic.KeyTextField
  year?: prismic.NumberField
  location?: prismic.KeyTextField
  category?: prismic.KeyTextField
  area?: prismic.KeyTextField
  client?: prismic.KeyTextField
  status?: prismic.KeyTextField
  accent_theme?: prismic.SelectField
  summary?: prismic.RichTextField
  impact?: prismic.RichTextField
  intro?: prismic.RichTextField
  challenge?: prismic.RichTextField
  solution?: prismic.RichTextField
  result?: prismic.RichTextField
  before_after?: Array<{
    before?: prismic.KeyTextField
    after?: prismic.KeyTextField
  }>
  services?: Array<{
    item?: prismic.KeyTextField
  }>
  tools?: Array<{
    item?: prismic.KeyTextField
  }>
  deliverables?: Array<{
    item?: prismic.KeyTextField
  }>
  highlights?: Array<{
    item?: prismic.KeyTextField
  }>
  gallery?: Array<{
    image?: prismic.ImageField
    caption?: prismic.KeyTextField
  }>
}

type SettingsDocumentData = {
  site_title?: prismic.KeyTextField
  site_description?: prismic.RichTextField
  og_title?: prismic.KeyTextField
  og_description?: prismic.RichTextField
  name?: prismic.KeyTextField
  role?: prismic.KeyTextField
  hero_eyebrow?: prismic.KeyTextField
  hero_description?: prismic.RichTextField
  hero_note?: prismic.RichTextField
  intro_rows?: Array<{
    label?: prismic.KeyTextField
    value?: prismic.KeyTextField
  }>
  about_title?: prismic.KeyTextField
  about_paragraphs?: Array<{
    text?: prismic.RichTextField
  }>
  projects_title?: prismic.KeyTextField
  projects_description?: prismic.RichTextField
  services_title?: prismic.KeyTextField
  services_description?: prismic.RichTextField
  services_items?: Array<{
    title?: prismic.KeyTextField
    text?: prismic.RichTextField
  }>
  process_title?: prismic.KeyTextField
  process_description?: prismic.RichTextField
  process_steps?: Array<{
    number?: prismic.KeyTextField
    title?: prismic.KeyTextField
    text?: prismic.RichTextField
  }>
  contact_title?: prismic.KeyTextField
  contact_description?: prismic.RichTextField
  about_page_title?: prismic.KeyTextField
  about_page_intro?: prismic.RichTextField
  about_page_body?: Array<{
    text?: prismic.RichTextField
  }>
  about_page_stats?: Array<{
    label?: prismic.KeyTextField
    value?: prismic.KeyTextField
  }>
  services_page_title?: prismic.KeyTextField
  services_page_intro?: prismic.RichTextField
  services_page_sections?: Array<{
    title?: prismic.KeyTextField
    text?: prismic.RichTextField
  }>
  footer?: prismic.KeyTextField
}

export type PortfolioImage = {
  url: string
  alt: string
  caption?: string
}

export type CMSPortfolioProject = PortfolioProject & {
  images?: PortfolioImage[]
}

function mapAccentTheme(value?: prismic.SelectField): string {
  if (!value || !(value in accentThemes)) {
    return accentThemes.stone
  }

  return accentThemes[value as AccentTheme]
}

function asText(field: prismic.RichTextField | prismic.KeyTextField | null | undefined) {
  if (!field) {
    return ''
  }

  return typeof field === 'string' ? field : prismic.asText(field)
}

function mapProjectDocument(document: ProjectDocument): CMSPortfolioProject | null {
  if (!document.uid) {
    return null
  }

  const data = document.data as ProjectDocumentData
  const title = asText(data.title) || document.uid

  return {
    slug: document.uid,
    title,
    year: String(data.year ?? ''),
    location: asText(data.location) || 'Location pending',
    category: asText(data.category) || 'Project',
    area: asText(data.area) || 'Area pending',
    client: asText(data.client) || 'Client pending',
    status: asText(data.status) || undefined,
    accent: mapAccentTheme(data.accent_theme),
    summary: asText(data.summary),
    impact: asText(data.impact),
    intro: asText(data.intro),
    challenge: asText(data.challenge),
    solution: asText(data.solution),
    result: asText(data.result),
    services: (data.services ?? [])
      .map((item) => item.item)
      .filter((item): item is string => Boolean(item)),
    tools: (data.tools ?? [])
      .map((item) => item.item)
      .filter((item): item is string => Boolean(item)),
    beforeAfter: (data.before_after ?? [])
      .map((item) => [item.before, item.after])
      .flat()
      .filter((item): item is string => Boolean(item)),
    deliverables: (data.deliverables ?? [])
      .map((item) => item.item)
      .filter((item): item is string => Boolean(item)),
    highlights: (data.highlights ?? [])
      .map((item) => item.item)
      .filter((item): item is string => Boolean(item)),
    images: (data.gallery ?? [])
      .map<PortfolioImage | null>((item) => {
        if (!item.image?.url) {
          return null
        }

        const alt = typeof item.image.alt === 'string' ? item.image.alt : title

        return {
          url: item.image.url,
          alt,
          caption: item.caption || undefined,
        }
      })
      .filter((item): item is PortfolioImage => Boolean(item)),
  }
}

function mapSettingsDocument(document: SettingsDocument, fallback: PortfolioCopy): PortfolioCopy {
  const data = document.data as SettingsDocumentData

  return {
    ...fallback,
    siteTitle: asText(data.site_title) || fallback.siteTitle,
    siteDescription: asText(data.site_description) || fallback.siteDescription,
    ogTitle: asText(data.og_title) || fallback.ogTitle,
    ogDescription: asText(data.og_description) || fallback.ogDescription,
    name: asText(data.name) || fallback.name,
    role: asText(data.role) || fallback.role,
    hero: {
      ...fallback.hero,
      eyebrow: asText(data.hero_eyebrow) || fallback.hero.eyebrow,
      description: asText(data.hero_description) || fallback.hero.description,
      note: asText(data.hero_note) || fallback.hero.note,
    },
    introCard: {
      ...fallback.introCard,
      rows:
        data.intro_rows
          ?.map((item) => [item.label, item.value])
          .filter((item): item is string[] => item.every(Boolean)) ?? fallback.introCard.rows,
    },
    about: {
      ...fallback.about,
      title: asText(data.about_title) || fallback.about.title,
      paragraphs:
        data.about_paragraphs
          ?.map((item) => asText(item.text))
          .filter(Boolean) ?? fallback.about.paragraphs,
    },
    projects: {
      ...fallback.projects,
      title: asText(data.projects_title) || fallback.projects.title,
      description: asText(data.projects_description) || fallback.projects.description,
    },
    services: {
      ...fallback.services,
      title: asText(data.services_title) || fallback.services.title,
      description: asText(data.services_description) || fallback.services.description,
      items:
        data.services_items
          ?.map((item) => ({
            title: asText(item.title),
            text: asText(item.text),
          }))
          .filter((item) => item.title && item.text) ?? fallback.services.items,
    },
    process: {
      ...fallback.process,
      title: asText(data.process_title) || fallback.process.title,
      description: asText(data.process_description) || fallback.process.description,
      steps:
        data.process_steps
          ?.map((item) => ({
            number: asText(item.number),
            title: asText(item.title),
            text: asText(item.text),
          }))
          .filter((item) => item.number && item.title && item.text) ?? fallback.process.steps,
    },
    contact: {
      ...fallback.contact,
      title: asText(data.contact_title) || fallback.contact.title,
      description: asText(data.contact_description) || fallback.contact.description,
    },
    aboutPage: {
      ...fallback.aboutPage,
      title: asText(data.about_page_title) || fallback.aboutPage.title,
      intro: asText(data.about_page_intro) || fallback.aboutPage.intro,
      body:
        data.about_page_body
          ?.map((item) => asText(item.text))
          .filter(Boolean) ?? fallback.aboutPage.body,
      stats:
        data.about_page_stats
          ?.map((item) => [item.label, item.value])
          .filter((item): item is string[] => item.every(Boolean)) ?? fallback.aboutPage.stats,
    },
    servicesPage: {
      ...fallback.servicesPage,
      title: asText(data.services_page_title) || fallback.servicesPage.title,
      intro: asText(data.services_page_intro) || fallback.servicesPage.intro,
      sections:
        data.services_page_sections
          ?.map((item) => ({
            title: asText(item.title),
            text: asText(item.text),
          }))
          .filter((item) => item.title && item.text) ?? fallback.servicesPage.sections,
    },
    footer: asText(data.footer) || fallback.footer,
  }
}

async function getCMSProjects(locale: Locale) {
  if (!isPrismicEnabled) {
    return []
  }

  const client = createClient()

  try {
    const documents = await client.getAllByType('project', {
      lang: prismicLocaleMap[locale],
      orderings: {
        field: 'my.project.year',
        direction: 'desc',
      },
    })

    return documents.map(mapProjectDocument).filter((item): item is CMSPortfolioProject => Boolean(item))
  } catch (error) {
    console.warn('Prismic projects unavailable, using local fallback.', error)
    return []
  }
}

async function getCMSSettings(locale: Locale, fallback: PortfolioCopy) {
  if (!isPrismicEnabled) {
    return fallback
  }

  const client = createClient()

  try {
    const document = await client.getSingle('settings', {
      lang: prismicLocaleMap[locale],
    })

    return mapSettingsDocument(document, fallback)
  } catch {
    return fallback
  }
}

export async function getPortfolioProjects(locale: Locale): Promise<CMSPortfolioProject[]> {
  const cmsProjects = await getCMSProjects(locale)

  if (cmsProjects.length > 0) {
    return cmsProjects
  }

  return getProjects(locale)
}

export async function getPortfolioProject(locale: Locale, slug: string) {
  const cmsProjects = await getCMSProjects(locale)

  if (cmsProjects.length > 0) {
    return cmsProjects.find((project) => project.slug === slug) ?? null
  }

  return getProject(locale, slug)
}

export async function getPortfolioProjectSlugs() {
  const localSlugs = locales.flatMap((locale) =>
    getProjects(locale).map((project) => ({
      locale,
      slug: project.slug,
    })),
  )

  if (!isPrismicEnabled) {
    return localSlugs
  }

  const client = createClient()

  try {
    const documents = await client.getAllByType('project', {
      lang: '*',
    })

    const cmsSlugs = documents
      .filter((document) => document.uid)
      .map((document) => ({
        locale: (document.lang === prismicLocaleMap.pt ? 'pt' : 'en') as Locale,
        slug: document.uid ?? '',
      }))

    const unique = new Map<string, { locale: Locale; slug: string }>()

    ;[...localSlugs, ...cmsSlugs].forEach((item) => {
      unique.set(`${item.locale}:${item.slug}`, item)
    })

    return [...unique.values()]
  } catch (error) {
    console.warn('Prismic slugs unavailable, using local fallback.', error)
    return localSlugs
  }
}

export async function getPortfolioSiteCopy(locale: Locale): Promise<PortfolioCopy> {
  const fallback = getPortfolioCopy(locale)
  return await getCMSSettings(locale, fallback)
}
