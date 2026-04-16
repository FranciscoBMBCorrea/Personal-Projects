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
] as const

export const portfolioContent = {
  pt: {
    languageLabel: 'PT',
    switchLanguageLabel: 'EN',
    localeLabel: 'pt_PT',
    siteTitle: 'Francisco Beça Múrias | Portfolio',
    siteDescription:
      'Portfolio pessoal de Francisco Beça Múrias com foco em design de interiores, desenho 2D e visualização 3D.',
    ogTitle: 'Francisco Beça Múrias | Interior Design Portfolio',
    ogDescription:
      'Portfolio bilingue de design de interiores, desenho 2D e visualização 3D com linguagem minimalista e elegante.',
    name: 'Francisco Beça Múrias',
    role: 'Design de interiores · 2D · 3D',
    nav: {
      home: 'Início',
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
      primaryCta: 'Pedir proposta',
      secondaryCta: 'Falar no WhatsApp',
    },
    aboutPage: {
      label: 'Sobre',
      title: 'Uma abordagem centrada em atmosfera, proporção e clareza espacial.',
      intro:
        'Francisco Beça Múrias trabalha entre design de interiores, desenho 2D e visualização 3D, com interesse particular por espaços que conciliam contenção formal e experiência sensorial.',
      body: [
        'O portfolio foi pensado para comunicar não apenas o resultado final, mas também o raciocínio por trás de cada ambiente: leitura do espaço, fluxo, materialidade e composição.',
        'A apresentação privilegia um tom editorial, mais próximo de um caderno de estúdio do que de um site promocional genérico, ajudando a posicionar o trabalho de forma mais autoral.',
      ],
      stats: [
        ['Base', 'Portugal / Brasil'],
        ['Foco', 'Residencial, hospitality, retail'],
        ['Ferramentas', 'Layout 2D, renders, material boards'],
      ],
    },
    servicesPage: {
      label: 'Serviços',
      title: 'Serviços estruturados para transformar uma ideia em apresentação clara e convincente.',
      intro:
        'As páginas de serviço dão contexto ao teu trabalho e ajudam clientes ou estúdios a perceber rapidamente o teu papel em diferentes fases do projeto.',
      sections: [
        {
          title: 'Conceito e direção',
          text: 'Definição da linguagem visual do espaço, referências, materiais e atmosfera geral do projeto.',
        },
        {
          title: 'Desenho e organização',
          text: 'Plantas, layouts e estudos funcionais com foco em circulação, proporção e legibilidade espacial.',
        },
        {
          title: 'Visualização e apresentação',
          text: 'Renders, cenas de detalhe e imagens preparadas para comunicar o projeto com maior impacto visual.',
        },
      ],
    },
    footer: 'Portfolio de design de interiores e visualização 2D/3D.',
  },
  en: {
    languageLabel: 'EN',
    switchLanguageLabel: 'PT',
    localeLabel: 'en_US',
    siteTitle: 'Francisco Beça Múrias | Portfolio',
    siteDescription:
      'Personal portfolio for Francisco Beça Múrias focused on interior design, 2D drafting, and 3D visualization.',
    ogTitle: 'Francisco Beça Múrias | Interior Design Portfolio',
    ogDescription:
      'Bilingual portfolio focused on interior design, 2D drafting, and 3D visualization with a refined minimal visual language.',
    name: 'Francisco Beça Múrias',
    role: 'Interior design · 2D · 3D',
    nav: {
      home: 'Home',
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
      primaryCta: 'Request proposal',
      secondaryCta: 'Chat on WhatsApp',
    },
    aboutPage: {
      label: 'About',
      title: 'An approach centered on atmosphere, proportion, and spatial clarity.',
      intro:
        'Francisco Beça Múrias works between interior design, 2D drafting, and 3D visualization, with a particular interest in spaces that balance formal restraint and sensory experience.',
      body: [
        'The portfolio is designed to communicate not only final outcomes, but also the thinking behind each environment: spatial reading, flow, materiality, and composition.',
        'The presentation leans toward an editorial tone, closer to a studio notebook than a generic promotional website, helping position the work in a more authored way.',
      ],
      stats: [
        ['Base', 'Portugal / Brazil'],
        ['Focus', 'Residential, hospitality, retail'],
        ['Tools', '2D layout, renders, material boards'],
      ],
    },
    servicesPage: {
      label: 'Services',
      title: 'Services structured to turn an idea into a clear and convincing presentation.',
      intro:
        'These service pages help clients or studios quickly understand your role across different phases of a project.',
      sections: [
        {
          title: 'Concept and direction',
          text: 'Defining the project language, references, materials, and the overall atmosphere of the space.',
        },
        {
          title: 'Drafting and organization',
          text: 'Plans, layouts, and functional studies focused on circulation, proportion, and spatial legibility.',
        },
        {
          title: 'Visualization and presentation',
          text: 'Renders, detail scenes, and visual outputs prepared to communicate the project with stronger impact.',
        },
      ],
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
    area: '185 m²',
    client: 'Private client',
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
      result:
        'O projeto ganhou uma leitura mais calma, uma zona social mais fluida e uma atmosfera coerente entre arquitetura e styling.',
      beforeAfter: [
        'Área social fragmentada e com pouca continuidade visual.',
        'Nova composição mais aberta, luminosa e articulada.',
      ],
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
      result:
        'The project gained a calmer reading, a more fluid social core, and a stronger connection between architecture and styling.',
      beforeAfter: [
        'Fragmented social area with limited visual continuity.',
        'A new composition that feels more open, luminous, and connected.',
      ],
      deliverables: ['2D layout', 'Moodboard', '3D visualization', 'Material selection'],
      highlights: ['Natural light', 'Light palette', 'Calm atmosphere'],
    },
  },
  {
    slug: 'atelier-urbano',
    year: '2024',
    location: 'Porto, Portugal',
    category: 'Studio',
    area: '72 m²',
    client: 'Creative practice',
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
      result:
        'O estúdio tornou-se mais legível, mais eficiente para uso diário e visualmente mais alinhado com a identidade da marca.',
      beforeAfter: [
        'Acumulação de funções sem hierarquia clara.',
        'Uso mais disciplinado do espaço com zonas bem definidas.',
      ],
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
      result:
        'The studio became easier to read, more efficient in daily use, and more aligned with the brand identity.',
      beforeAfter: [
        'Overlapping functions without clear hierarchy.',
        'A more disciplined use of space with clearly defined zones.',
      ],
      deliverables: ['Functional plan', 'Furniture study', 'Interior perspectives', 'Finish palette'],
      highlights: ['Compact', 'Editorial', 'Functional'],
    },
  },
  {
    slug: 'suite-costeira',
    year: '2024',
    location: 'Florianópolis, Brasil',
    category: 'Hospitality',
    area: '48 m²',
    client: 'Boutique hotel',
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
      result:
        'A suite ganhou identidade mais clara, melhor sensação de conforto e uma apresentação visual mais memorável para o cliente.',
      beforeAfter: [
        'Ambiente genérico e pouco ligado ao contexto do lugar.',
        'Nova identidade sensível, leve e mais distintiva.',
      ],
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
      result:
        'The suite gained a clearer identity, a better sense of comfort, and a more memorable presentation for the client.',
      beforeAfter: [
        'Generic space with weak connection to its location.',
        'A more sensitive, lighter, and more distinctive identity.',
      ],
      deliverables: ['Interior concept', 'Hero render', 'Material detail', 'Styling direction'],
      highlights: ['Hospitality', 'Texture', 'Soft light'],
    },
  },
  {
    slug: 'galeria-serena',
    year: '2023',
    location: 'Madrid, Espanha',
    category: 'Retail',
    area: '130 m²',
    client: 'Independent brand',
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
      result:
        'O resultado é uma experiência mais pausada e clara, onde produto, circulação e atmosfera coexistem sem conflito.',
      beforeAfter: [
        'Percurso pouco definido e excesso de estímulo visual.',
        'Ambiente mais focado, com leitura limpa e pausas mais bem distribuídas.',
      ],
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
      result:
        'The final experience feels calmer and more legible, allowing product, circulation, and atmosphere to coexist without friction.',
      beforeAfter: [
        'Weak visitor path and too much visual stimulation.',
        'A more focused setting with cleaner reading and better moments of pause.',
      ],
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
    area: project.area,
    client: project.client,
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
    area: project.area,
    client: project.client,
    accent: project.accent,
    ...project[locale],
  }
}
