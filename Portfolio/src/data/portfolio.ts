export type Locale = 'pt' | 'en'

export const locales: Locale[] = ['pt', 'en']

export const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/francisco-corr%C3%AAa/',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5548933002821',
  },
  {
    label: 'Mail',
    href: 'mailto:franciscobmbc@gmail.com',
  },
]

export const portfolioContent = {
  pt: {
    languageLabel: 'PT',
    switchLanguageLabel: 'EN',
    name: 'Francisco Beça Múrias',
    role: 'Design de interiores · 2D · 3D',
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      services: 'Serviços',
      process: 'Processo',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'Interior designer · 2D drafting · 3D visualization',
      title: 'Interiores pensados com calma, detalhe e presença.',
      description:
        'Portfolio bilingue de Francisco Beça Múrias, orientado para design de interiores, visualização 2D/3D e apresentações espaciais com linguagem minimalista e sofisticada.',
      primaryCta: 'Ver projetos',
      secondaryCta: 'Contactar',
      note: 'Disponível para projetos residenciais, hospitality e colaboração criativa.',
    },
    introCard: {
      title: 'Perfil',
      rows: [
        ['Foco', 'Interiores residenciais e comerciais'],
        ['Entrega', 'Plantas, renders e direção material'],
        ['Estética', 'Clara, editorial e contemporânea'],
      ],
    },
    about: {
      label: 'Sobre',
      title: 'Uma apresentação mais serena, mais luminosa e mais espacial.',
      paragraphs: [
        'O site foi redesenhado para funcionar como portfolio de interiores, com ritmo visual, melhor hierarquia e espaço para projetos aprofundados.',
        'A linguagem é minimalista, mas não fria: há mais leveza no fundo, mais respiro na composição e animações subtis para apoiar a narrativa.',
      ],
    },
    projects: {
      label: 'Projetos',
      title: 'Quatro projetos com página própria e mais profundidade.',
      description:
        'Cada projeto abre uma página dedicada com conceito, desafio, solução, entregáveis e blocos visuais preparados para imagens reais.',
      cta: 'Abrir projeto',
    },
    services: {
      label: 'Serviços',
      title: 'Áreas de trabalho pensadas para clientes, estúdios e colaborações.',
      description:
        'A secção ajuda a comunicar valor de forma simples, sem transformar o portfolio numa página comercial pesada.',
      items: [
        {
          title: 'Interior design',
          text: 'Conceito, composição espacial e direção visual para ambientes residenciais ou comerciais.',
        },
        {
          title: 'Desenho 2D',
          text: 'Layouts, plantas e comunicação técnica com foco em clareza e organização espacial.',
        },
        {
          title: 'Visualização 3D',
          text: 'Renders e perspetivas com materialidade, luz e atmosfera trabalhadas com cuidado.',
        },
      ],
    },
    process: {
      label: 'Processo',
      title: 'Um processo claro, da ideia à imagem final.',
      description:
        'Uma estrutura simples para mostrar que existe método, escuta e intenção em cada fase do projeto.',
      steps: [
        {
          number: '01',
          title: 'Briefing e leitura do espaço',
          text: 'Compreensão do programa, necessidades, atmosfera desejada e referências visuais.',
        },
        {
          number: '02',
          title: 'Layout e conceito',
          text: 'Organização da circulação, proporção dos ambientes e definição da linguagem do projeto.',
        },
        {
          number: '03',
          title: 'Materialidade e imagem',
          text: 'Seleção de acabamentos, mobiliário e visualização 2D/3D para apresentação final.',
        },
      ],
    },
    contact: {
      label: 'Contacto',
      title: 'Disponível para conversar sobre interiores, visualização e colaboração.',
      description:
        'A próxima melhoria natural é substituir os placeholders visuais por imagens reais de projetos, plantas, renders e moodboards.',
    },
    footer: 'Portfolio de design de interiores e visualização 2D/3D.',
  },
  en: {
    languageLabel: 'EN',
    switchLanguageLabel: 'PT',
    name: 'Francisco Beça Múrias',
    role: 'Interior design · 2D · 3D',
    nav: {
      about: 'About',
      projects: 'Projects',
      services: 'Services',
      process: 'Process',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Interior designer · 2D drafting · 3D visualization',
      title: 'Interiors shaped with calm, detail, and visual presence.',
      description:
        'Bilingual portfolio for Francisco Beça Múrias, focused on interior design, 2D/3D visualization, and spatial presentations with a minimal and refined visual language.',
      primaryCta: 'View projects',
      secondaryCta: 'Get in touch',
      note: 'Available for residential, hospitality, and collaborative design work.',
    },
    introCard: {
      title: 'Profile',
      rows: [
        ['Focus', 'Residential and commercial interiors'],
        ['Output', 'Plans, renders, and material direction'],
        ['Approach', 'Clear, editorial, and contemporary'],
      ],
    },
    about: {
      label: 'About',
      title: 'A brighter, calmer, and more spatial presentation.',
      paragraphs: [
        'The site has been reshaped to work as an interior design portfolio, with better rhythm, clearer hierarchy, and room for deeper project storytelling.',
        'The visual direction stays minimal without feeling cold: lighter surfaces, softer background tones, and subtle motion that supports the content.',
      ],
    },
    projects: {
      label: 'Projects',
      title: 'Four projects, each with its own page and richer context.',
      description:
        'Each project opens into a dedicated page with concept, challenge, solution, deliverables, and visual blocks ready for real imagery.',
      cta: 'Open project',
    },
    services: {
      label: 'Services',
      title: 'A clear overview of how I work and what I deliver.',
      description:
        'This section communicates value in a straightforward way, without turning the portfolio into a heavy commercial page.',
      items: [
        {
          title: 'Interior design',
          text: 'Concept, spatial composition, and visual direction for residential or commercial environments.',
        },
        {
          title: '2D drafting',
          text: 'Layouts, plans, and technical communication focused on clarity and spatial organization.',
        },
        {
          title: '3D visualization',
          text: 'Renders and perspectives built around atmosphere, materiality, and carefully controlled light.',
        },
      ],
    },
    process: {
      label: 'Process',
      title: 'A simple path from idea to final image.',
      description:
        'A clear process helps show that every project is driven by listening, structure, and visual intention.',
      steps: [
        {
          number: '01',
          title: 'Briefing and spatial reading',
          text: 'Understanding the program, needs, desired atmosphere, and visual references.',
        },
        {
          number: '02',
          title: 'Layout and concept',
          text: 'Defining circulation, proportions, and the overall language of the project.',
        },
        {
          number: '03',
          title: 'Materiality and image',
          text: 'Finishes, furniture direction, and 2D/3D visualization for final presentation.',
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Available for interior design, visualization, and creative collaborations.',
      description:
        'The next natural upgrade is replacing the visual placeholders with real project imagery, plans, renders, and moodboards.',
    },
    footer: 'Interior design and 2D/3D visualization portfolio.',
  },
} as const

export type PortfolioCopy = (typeof portfolioContent)[Locale]

export const projects = [
  {
    slug: 'casa-luz',
    year: '2025',
    location: 'Lisboa, Portugal',
    category: 'Residential',
    accent: 'from-stone-200 via-white to-amber-100',
    pt: {
      title: 'Casa Luz',
      summary:
        'Projeto residencial concebido para valorizar luz natural, materiais suaves e uma atmosfera tranquila.',
      impact: 'Reorganização da área social e identidade material mais clara.',
      intro:
        'Uma casa com linguagem contemporânea e paleta suave, pensada para equilibrar conforto, elegância e fluidez no quotidiano.',
      challenge:
        'O espaço precisava de maior continuidade entre zonas, melhor leitura de circulação e uma imagem mais coesa.',
      solution:
        'A proposta reorganiza a área comum, simplifica a composição visual e reforça a sensação de amplitude com materiais luminosos.',
      deliverables: ['Layout 2D', 'Moodboard', 'Visualização 3D', 'Seleção de materiais'],
      highlights: ['Luz natural', 'Paleta clara', 'Ambiente sereno'],
    },
    en: {
      title: 'Casa Luz',
      summary:
        'A residential project shaped around natural light, soft materials, and a calm interior atmosphere.',
      impact: 'Social area reorganization and a more focused material identity.',
      intro:
        'A contemporary home built around comfort, elegance, and smoother daily flow through a restrained visual language.',
      challenge:
        'The space required better continuity between zones, clearer circulation, and a stronger visual coherence.',
      solution:
        'The proposal reorganizes the shared area, simplifies the visual composition, and increases the sense of openness through lighter finishes.',
      deliverables: ['2D layout', 'Moodboard', '3D visualization', 'Material selection'],
      highlights: ['Natural light', 'Light palette', 'Calm atmosphere'],
    },
  },
  {
    slug: 'atelier-urbano',
    year: '2024',
    location: 'Porto, Portugal',
    category: 'Studio',
    accent: 'from-stone-100 via-zinc-50 to-neutral-100',
    pt: {
      title: 'Atelier Urbano',
      summary:
        'Conceito para um estúdio criativo compacto, com foco em funcionalidade, armazenamento e ritmo visual.',
      impact: 'Maior clareza funcional sem perder carácter editorial.',
      intro:
        'Um espaço pequeno pensado para trabalho, reunião e produção criativa, com desenho contido e forte atenção ao detalhe.',
      challenge:
        'Era necessário reunir diferentes funções num espaço reduzido, evitando ruído visual e sobrecarga.',
      solution:
        'A solução aposta numa organização rigorosa, mobiliário integrado e contrastes subtis para reforçar profundidade.',
      deliverables: ['Planta funcional', 'Estudo de mobiliário', 'Perspetivas interiores', 'Paleta de acabamentos'],
      highlights: ['Compacto', 'Editorial', 'Funcional'],
    },
    en: {
      title: 'Urban Atelier',
      summary:
        'A compact creative studio concept focused on functionality, storage, and controlled visual rhythm.',
      impact: 'Stronger functional clarity without losing editorial character.',
      intro:
        'A small space designed for work, meetings, and creative production, with a restrained visual language and detailed composition.',
      challenge:
        'Multiple functions had to coexist in a reduced footprint without creating visual noise or overload.',
      solution:
        'The proposal relies on disciplined organization, integrated furniture, and subtle contrast to create depth.',
      deliverables: ['Functional plan', 'Furniture study', 'Interior perspectives', 'Finish palette'],
      highlights: ['Compact', 'Editorial', 'Functional'],
    },
  },
  {
    slug: 'suite-costeira',
    year: '2024',
    location: 'Florianópolis, Brasil',
    category: 'Hospitality',
    accent: 'from-sky-50 via-white to-stone-100',
    pt: {
      title: 'Suite Costeira',
      summary:
        'Quarto de hotel com atmosfera leve, inspirado pela proximidade ao mar e por uma estética descontraída mas refinada.',
      impact: 'Imagem mais memorável e experiência espacial mais suave.',
      intro:
        'Uma proposta de hospitality com texturas naturais, tons luminosos e uma composição pensada para descanso.',
      challenge:
        'O ambiente precisava de reforçar personalidade sem cair em soluções temáticas ou excessivamente decorativas.',
      solution:
        'A resposta foi uma linguagem contida, com materiais orgânicos, luz suave e detalhes táteis.',
      deliverables: ['Conceito de interior', 'Render hero', 'Detalhe de materiais', 'Direção de styling'],
      highlights: ['Hospitality', 'Textura', 'Luz suave'],
    },
    en: {
      title: 'Coastal Suite',
      summary:
        'A hotel suite with a light atmosphere inspired by the sea and a relaxed yet refined aesthetic.',
      impact: 'More memorable imagery and a softer guest experience.',
      intro:
        'A hospitality proposal built around natural textures, light tones, and a restful spatial composition.',
      challenge:
        'The space needed a stronger identity without becoming themed or overly decorative.',
      solution:
        'The answer was a restrained language built with organic materials, soft light, and tactile details.',
      deliverables: ['Interior concept', 'Hero render', 'Material detail', 'Styling direction'],
      highlights: ['Hospitality', 'Texture', 'Soft light'],
    },
  },
  {
    slug: 'galeria-serena',
    year: '2023',
    location: 'Madrid, Espanha',
    category: 'Retail',
    accent: 'from-amber-50 via-white to-stone-100',
    pt: {
      title: 'Galeria Serena',
      summary:
        'Conceito para espaço expositivo e retail com circulação limpa, textura subtil e presença arquitetónica.',
      impact: 'Experiência mais clara entre exposição, pausa e descoberta.',
      intro:
        'Um interior pensado para valorizar peças, criar pausas visuais e permitir uma leitura tranquila do espaço.',
      challenge:
        'Era preciso equilibrar neutralidade, identidade de marca e uma boa experiência de percurso.',
      solution:
        'A proposta usa volumes discretos, iluminação pontual e materiais silenciosos para deixar o conteúdo respirar.',
      deliverables: ['Conceito espacial', 'Layout de circulação', 'Estudo de iluminação', 'Renders de detalhe'],
      highlights: ['Retail', 'Circulação', 'Leitura limpa'],
    },
    en: {
      title: 'Serene Gallery',
      summary:
        'An exhibition and retail concept built around clear circulation, subtle texture, and architectural presence.',
      impact: 'A calmer experience between display, pause, and discovery.',
      intro:
        'An interior designed to frame the pieces, create visual pauses, and support a quieter reading of space.',
      challenge:
        'The project had to balance neutrality, brand identity, and a strong visitor journey.',
      solution:
        'The proposal uses restrained volumes, focused lighting, and quiet materials so the content can breathe.',
      deliverables: ['Spatial concept', 'Circulation layout', 'Lighting study', 'Detail renders'],
      highlights: ['Retail', 'Circulation', 'Clean reading'],
    },
  },
] as const

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function getPortfolioCopy(locale: Locale) {
  return portfolioContent[locale]
}

export function getProjects(locale: Locale) {
  return projects.map((project) => ({
    slug: project.slug,
    year: project.year,
    location: project.location,
    category: project.category,
    accent: project.accent,
    ...project[locale],
  }))
}

export type PortfolioProject = ReturnType<typeof getProjects>[number]

export function getProject(locale: Locale, slug: string) {
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return null
  }

  return {
    slug: project.slug,
    year: project.year,
    location: project.location,
    category: project.category,
    accent: project.accent,
    ...project[locale],
  }
}
