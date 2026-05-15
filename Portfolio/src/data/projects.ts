import type { Locale, PortfolioProject } from '@/data/portfolio-types'

const localizedProjects = [
  {
    slug: 'cabana',
    disciplineKey: 'projectista',
    year: '2016',
    location: 'Gerês',
    category: 'Academic',
    area: 'Área por definir',
    client: 'Projeto académico',
    status: 'Académico',
    accent: 'from-stone-200 via-stone-100 to-stone-300',
    pt: {
      discipline: 'Projectista',
      title: 'Cabana',
      summary:
        'Exercício académico para uma cabana no Gerês, desenvolvido como estudo de implantação, abrigo e relação direta com a paisagem.',
      impact: 'Demonstra uma abordagem inicial à implantação, à síntese espacial e à construção de atmosfera.',
      intro:
        'Projeto académico desenvolvido para testar como um programa mínimo pode responder ao lugar com clareza, contenção e precisão.',
      challenge:
        'O principal desafio foi inserir um abrigo de pequena escala na paisagem sem perder legibilidade espacial nem presença arquitetónica.',
      solution:
        'A proposta organiza o programa de forma compacta e estabelece uma relação direta entre implantação, percurso e enquadramento da envolvente natural.',
      result:
        'O resultado é um estudo contido e coerente sobre abrigo, escala e experiência sensorial no território.',
      services: ['Conceito espacial', 'Desenho 2D', 'Modelação 3D'],
      tools: ['Implantação', 'Estudo conceptual', 'Visualização'],
      beforeAfter: [
        'Exercício de implantação e abrigo em contexto natural.',
        'Proposta com leitura mais contida, clara e integrada no lugar.',
      ],
      deliverables: ['Implantação', 'Desenho 2D', 'Modelação 3D', 'Estudo conceptual'],
      highlights: ['Paisagem', 'Abrigo', 'Projeto académico'],
    },
    en: {
      discipline: 'Drafting and technical design',
      title: 'Cabana',
      summary:
        'An academic exercise for a cabin in Gerês, developed as a study of siting, shelter, and direct relationship with the landscape.',
      impact: 'It demonstrates an early approach to siting, spatial synthesis, and atmosphere building.',
      intro:
        'An academic project developed to test how a minimal program can respond to site with clarity, restraint, and precision.',
      challenge:
        'The main challenge was placing a small-scale shelter in the landscape without losing spatial legibility or architectural presence.',
      solution:
        'The proposal organizes the program compactly and builds a direct relationship between siting, movement, and framed views of the natural setting.',
      result:
        'The result is a restrained and coherent study of shelter, scale, and sensory experience in the landscape.',
      services: ['Spatial concept', '2D drafting', '3D modeling'],
      tools: ['Site plan', 'Concept study', 'Visualization'],
      beforeAfter: [
        'A shelter study placed within a natural setting.',
        'A more restrained and integrated proposal with clearer spatial intent.',
      ],
      deliverables: ['Site plan', '2D drafting', '3D modeling', 'Concept study'],
      highlights: ['Landscape', 'Shelter', 'Academic project'],
    },
  },
  {
    slug: 'acoustic-mirror',
    disciplineKey: 'projectista',
    year: '2017',
    location: 'Parque das Necessidades, Lisboa, Portugal',
    category: 'Academic',
    area: 'Área por definir',
    client: 'Projeto académico',
    status: 'Académico',
    accent: 'from-zinc-100 via-stone-50 to-stone-200',
    pt: {
      discipline: 'Projectista',
      title: 'Acoustic Mirror',
      summary:
        'Projeto académico concebido para o Parque das Necessidades, centrado na relação entre som, reflexão e presença escultórica no espaço.',
      impact: 'Demonstra uma abordagem mais conceptual ao desenho, próxima da instalação e da experiência percetiva.',
      intro:
        'Proposta experimental que cruza arquitetura e instalação para testar como forma, matéria e percurso podem produzir uma experiência acústica.',
      challenge:
        'O desafio principal foi transformar uma ideia abstrata ligada à acústica num objeto espacial legível e com impacto sensorial.',
      solution:
        'A solução traduz essa intenção num elemento escultórico implantado no parque, pensado para ativar a relação entre corpo, som e paisagem.',
      result:
        'O resultado consolida uma prática mais narrativa e conceptual, onde o espaço é pensado também como experiência percetiva.',
      services: ['Conceito espacial', 'Desenho 2D', 'Instalação conceptual'],
      tools: ['Modelação 3D', 'Estudo de implantação', 'Visualização'],
      beforeAfter: [
        'Pesquisa entre instalação e arquitetura em contexto de parque.',
        'Resultado mais escultórico e orientado para experiência acústica.',
      ],
      deliverables: ['Conceito espacial', 'Desenho 2D', 'Modelação 3D', 'Estudo de implantação'],
      highlights: ['Som', 'Instalação', 'Projeto académico'],
    },
    en: {
      discipline: 'Drafting and technical design',
      title: 'Acoustic Mirror',
      summary:
        'An academic project conceived for Parque das Necessidades, focused on the relationship between sound, reflection, and sculptural presence in space.',
      impact: 'It demonstrates a more conceptual design approach, closer to installation and perceptual experience.',
      intro:
        'An experimental proposal that crosses architecture and installation to test how form, material, and movement can produce an acoustic experience.',
      challenge:
        'The main challenge was turning an abstract acoustic idea into a legible spatial object with sensory impact.',
      solution:
        'The solution translates that intention into a sculptural element set within the park, designed to activate the relationship between body, sound, and landscape.',
      result:
        'The result strengthens a more narrative and conceptual approach, where space is also treated as perceptual experience.',
      services: ['Spatial concept', '2D drafting', 'Conceptual installation'],
      tools: ['3D modeling', 'Site study', 'Visualization'],
      beforeAfter: [
        'Research between installation and architecture in a park setting.',
        'A more sculptural outcome focused on acoustic experience.',
      ],
      deliverables: ['Spatial concept', '2D drafting', '3D modeling', 'Site study'],
      highlights: ['Sound', 'Installation', 'Academic project'],
    },
  },
  {
    slug: 'campolide',
    disciplineKey: 'interior-architecture',
    year: '2018',
    location: 'Campolide, Lisboa, Portugal',
    category: 'Retail',
    area: '1400 m²',
    client: 'Letreiro Galeria',
    status: 'Não concluído',
    accent: 'from-stone-200 via-stone-100 to-amber-50',
    pt: {
      discipline: 'Arquitetura de interiores',
      title: 'Campolide',
      summary:
        'Proposta para a Letreiro Galeria em Campolide, desenvolvida como estudo de organização espacial, escala expositiva e circulação.',
      impact: 'Mesmo não concluído, demonstra capacidade de estruturar programas amplos com clareza e hierarquia.',
      intro:
        'Projeto de maior escala pensado para articular programa, percurso e presença arquitetónica num contexto urbano específico.',
      challenge:
        'O desafio foi trabalhar uma área extensa sem perder orientação, ritmo e coerência entre zonas com usos distintos.',
      solution:
        'A proposta estrutura o conjunto através de percursos claros, hierarquia funcional e uma linguagem espacial sóbria.',
      result:
        'Apesar de não concluído, o projeto deixa uma base sólida de estudo sobre escala, uso público e articulação de ambientes.',
      services: ['Organização espacial', 'Desenho 2D', 'Visualização 3D'],
      tools: ['Layout de circulação', 'Estudo programático', 'Apresentação visual'],
      beforeAfter: [
        'Programa amplo com necessidade de legibilidade e organização.',
        'Estruturação espacial mais clara para uso expositivo e circulação.',
      ],
      deliverables: ['Layout de circulação', 'Desenho 2D', 'Estudo programático', 'Visualização 3D'],
      highlights: ['Escala', 'Galeria', 'Não concluído'],
    },
    en: {
      discipline: 'Interior architecture',
      title: 'Campolide',
      summary:
        'A proposal for Letreiro Galeria in Campolide, developed as a study in spatial organization, exhibition scale, and circulation.',
      impact: 'Although unbuilt, it demonstrates the ability to structure large programs with clarity and hierarchy.',
      intro:
        'A larger-scale project designed to articulate program, movement, and architectural presence within a specific urban context.',
      challenge:
        'The challenge was to work across an extensive area without losing orientation, rhythm, and coherence between zones with different uses.',
      solution:
        'The proposal structures the whole through clear circulation, functional hierarchy, and a restrained spatial language.',
      result:
        'Although unbuilt, the project leaves a solid study base around scale, public use, and the articulation of different environments.',
      services: ['Spatial organization', '2D drafting', '3D visualization'],
      tools: ['Circulation layout', 'Program study', 'Visual presentation'],
      beforeAfter: [
        'A large program requiring stronger legibility and organization.',
        'A clearer spatial structure for exhibition use and circulation.',
      ],
      deliverables: ['Circulation layout', '2D drafting', 'Program study', '3D visualization'],
      highlights: ['Scale', 'Gallery', 'Unbuilt'],
    },
  },
  {
    slug: 'casa-amarela',
    disciplineKey: 'interior-architecture',
    year: '2026',
    location: 'Laguna, Cabeçuda, SC, Brasil',
    category: 'Residential',
    area: 'Área por definir',
    client: 'Projeto próprio',
    status: 'Em fase de projeto',
    accent: 'from-amber-100 via-stone-50 to-yellow-100',
    pt: {
      discipline: 'Arquitetura de interiores',
      title: 'Casa Amarela',
      summary:
        'Projeto próprio em desenvolvimento para Laguna, pensado a partir de luz, memória doméstica e uma presença cromática contida.',
      impact: 'Demonstra uma pesquisa mais autoral, onde atmosfera, implantação e linguagem começam a convergir.',
      intro:
        'Casa concebida como exercício autoral, onde interior, implantação e materialidade são desenvolvidos de forma mais pessoal.',
      challenge:
        'O desafio está em consolidar uma linguagem própria, equilibrando contexto local, conforto doméstico e intenção arquitetónica.',
      solution:
        'A proposta parte de uma base luminosa e trabalha escala, vazios e materialidade para construir uma atmosfera quente e precisa.',
      result:
        'Ainda em fase de projeto, já funciona como síntese das intenções mais autorais presentes no portfolio.',
      services: ['Conceito espacial', 'Direção material', 'Desenho 2D'],
      tools: ['Estudo volumétrico', 'Visualização', 'Atmosfera'],
      beforeAfter: [
        'Primeira fase de estudo e definição de linguagem.',
        'Base conceptual orientada para desenvolvimento futuro.',
      ],
      deliverables: ['Conceito espacial', 'Desenho 2D', 'Estudo volumétrico', 'Direção material'],
      highlights: ['Projeto próprio', 'Em desenvolvimento', 'Atmosfera'],
    },
    en: {
      discipline: 'Interior architecture',
      title: 'Casa Amarela',
      summary:
        'A self-initiated project in development for Laguna, shaped through light, domestic memory, and restrained chromatic presence.',
      impact: 'It demonstrates a more authored line of research, where atmosphere, siting, and language begin to converge.',
      intro:
        'A house conceived as an authored exercise, where interior, siting, and material direction are developed in a more personal way.',
      challenge:
        'The challenge is to consolidate a distinct language while balancing local context, domestic comfort, and architectural intention.',
      solution:
        'The proposal begins from a luminous base and works through scale, voids, and material direction to build a warm yet precise atmosphere.',
      result:
        'Still in development, it already works as a synthesis of the most personal intentions present in the portfolio.',
      services: ['Spatial concept', 'Material direction', '2D drafting'],
      tools: ['Volumetric study', 'Visualization', 'Atmosphere'],
      beforeAfter: [
        'Initial phase of study and language definition.',
        'A conceptual base prepared for future development.',
      ],
      deliverables: ['Spatial concept', '2D drafting', 'Volumetric study', 'Material direction'],
      highlights: ['Self-initiated', 'In development', 'Atmosphere'],
    },
  },
] as const

export function getProjects(locale: Locale): PortfolioProject[] {
  return localizedProjects.map((project) => ({
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
  }))
}

export function getProject(locale: Locale, slug: string): PortfolioProject | null {
  const project = localizedProjects.find((item) => item.slug === slug)

  if (!project) {
    return null
  }

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

export const projectSlugs = localizedProjects.map((project) => project.slug)
