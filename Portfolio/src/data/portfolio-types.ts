export type Locale = 'pt' | 'en'

export type PortfolioCopy = {
  languageLabel: string
  switchLanguageLabel: string
  localeLabel: string
  siteTitle: string
  siteDescription: string
  ogTitle: string
  ogDescription: string
  name: string
  role: string
  nav: {
    home: string
    about: string
    projects: string
    services: string
    process: string
    contact: string
  }
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
    note: string
  }
  introCard: {
    title: string
    rows: string[][]
  }
  about: {
    label: string
    title: string
    paragraphs: string[]
  }
  projects: {
    label: string
    title: string
    description: string
    cta: string
  }
  services: {
    label: string
    title: string
    description: string
    items: Array<{
      title: string
      text: string
    }>
  }
  process: {
    label: string
    title: string
    description: string
    steps: Array<{
      number: string
      title: string
      text: string
    }>
  }
  contact: {
    label: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
  }
  aboutPage: {
    label: string
    title: string
    intro: string
    body: string[]
    stats: string[][]
  }
  servicesPage: {
    label: string
    title: string
    intro: string
    sections: Array<{
      title: string
      text: string
    }>
  }
  footer: string
}

export type PortfolioProject = {
  slug: string
  disciplineKey: 'interior-architecture' | 'projectista'
  discipline: string
  year: string
  location: string
  category: string
  area: string
  client: string
  status?: string
  accent: string
  title: string
  summary: string
  impact: string
  intro: string
  challenge: string
  solution: string
  result: string
  services: readonly string[]
  tools: readonly string[]
  beforeAfter: readonly string[]
  deliverables: readonly string[]
  highlights: readonly string[]
}
