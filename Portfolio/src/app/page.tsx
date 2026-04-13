'use client'

import { motion } from 'framer-motion'

const featuredProjects = [
  {
    title: 'Residencial contemporaneo',
    description:
      'Projeto pensado para apresentar conceito, distribuição espacial, materiais e atmosfera com imagens 2D e visualizações 3D.',
    impact: 'Layout, materiais e narrativa visual do espaço.',
    stack: ['Interior Design', '3D Visualization', 'Material Board'],
  },
  {
    title: 'Hospitality concept',
    description:
      'Espaço preparado para mostrar propostas de restaurante, hotel ou showroom com foco em identidade, circulação e experiência do utilizador.',
    impact: 'Mood, funcionalidade e coerencia do ambiente.',
    stack: ['Concept Design', '2D Plans', '3D Styling'],
  },
  {
    title: 'Visualizacao e detalhe',
    description:
      'Secção ideal para destacar renders, elevações, perspectivas e estudos de detalhe com um acabamento mais editorial.',
    impact: 'Comunica processo, sensibilidade e precisao.',
    stack: ['Rendering', 'Interior Styling', 'Spatial Detail'],
  },
]

const capabilities = [
  'Conceitos de interiores com linguagem visual contemporanea',
  'Desenho 2D para layouts, circulacao e organizacao espacial',
  'Modelacao e visualizacao 3D com foco em atmosfera e detalhe',
  'Curadoria de materiais, cores, mobiliario e narrativa do projeto',
]

const contactLinks = [
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

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-stone-200/10 blur-3xl" />
        <div className="absolute right-[-3rem] top-32 h-80 w-80 rounded-full bg-amber-100/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-20 pt-8 sm:px-8 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-16 flex items-center justify-between"
        >
          <a
            href="#top"
            className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-neutral-400 transition hover:text-white"
          >
            Francisco Correa
          </a>
          <nav className="hidden items-center gap-6 text-sm text-neutral-400 md:flex">
            <a className="transition hover:text-white" href="#sobre">
              Sobre
            </a>
            <a className="transition hover:text-white" href="#projetos">
              Projetos
            </a>
            <a className="transition hover:text-white" href="#contacto">
              Contacto
            </a>
          </nav>
        </motion.header>

        <section
          id="top"
          className="grid items-end gap-12 border-b border-white/10 pb-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.7fr)]"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="max-w-3xl"
          >
            <p className="mb-6 text-[0.72rem] uppercase tracking-[0.32em] text-stone-500">
              Interior design · 2D drafting · 3D visualization
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-[6.5rem] lg:leading-[0.9]">
              Espacos pensados com rigor, atmosfera e sensibilidade visual.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
              Portfolio de design de interiores e designer 2D/3D, criado para
              apresentar conceitos, layouts, materialidade e visualizacoes com
              uma linguagem minimalista e elegante.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                className="rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition duration-300 hover:-translate-y-0.5 hover:bg-stone-200"
                href="#projetos"
              >
                Ver portfolio
              </a>
              <a
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/90 transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5"
                href="#contacto"
                target="_blank"
                rel="noreferrer"
              >
                Contacto
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.2 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20"
          >
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-amber-50/10 blur-2xl" />
            <p className="text-[0.68rem] uppercase tracking-[0.26em] text-stone-500">
              Perfil criativo
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <span className="text-sm text-stone-400">Foco</span>
                <span className="text-sm text-white">Interiores residenciais e comerciais</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <span className="text-sm text-stone-400">Entrega</span>
                <span className="text-sm text-white">2D plans, renders e conceito</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <span className="text-sm text-stone-400">Abordagem</span>
                <span className="text-sm text-white">Minimal, editorial e espacial</span>
              </div>
            </div>
            <div className="mt-10 flex items-center gap-3">
              <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-amber-200" />
              <p className="text-sm text-stone-400">
                Estrutura pronta para receber projetos reais e imagens.
              </p>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="sobre"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid gap-8 border-b border-white/10 py-16 lg:grid-cols-[0.75fr_minmax(0,1fr)]"
        >
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.3em] text-stone-500">
              Sobre
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Uma presenca calma, sofisticada e visualmente precisa.
            </h2>
          </div>
          <div className="grid gap-6 text-base leading-8 text-stone-300 sm:grid-cols-2">
            <p className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              Este portfolio foi reposicionado para comunicar design de
              interiores, composicao espacial e visualizacao 2D/3D com uma
              leitura mais editorial e menos tecnologica.
            </p>
            <p className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              O foco esta em deixar o trabalho respirar: tipografia forte,
              espacamento generoso, movimento subtil e uma estrutura pronta para
              destacar imagens, plantas e renders.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="projetos"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="border-b border-white/10 py-16"
        >
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.3em] text-stone-500">
                Projetos
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                Espaco para mostrar conceito, processo e atmosfera.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-stone-500">
              Cada bloco pode evoluir para um estudo de caso com imagens,
              plantas, materiais, renders e narrativa do projeto.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-stone-500">
                  {project.impact}
                </p>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.04em] text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-300">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-stone-400"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid gap-8 border-b border-white/10 py-16 lg:grid-cols-[0.9fr_minmax(0,1fr)]"
        >
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.3em] text-stone-500">
              Competências
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              O tipo de linguagem e entrega que este portfolio deve transmitir.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-stone-300"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contacto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="py-16"
        >
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 sm:p-10">
            <p className="text-[0.72rem] uppercase tracking-[0.3em] text-stone-500">
              Contacto
            </p>
            <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                  Uma base elegante para apresentar interiores, imagens e processo criativo.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300">
                  O proximo passo ideal e adicionar renders, plantas, moodboards
                  e os teus projetos reais para que o portfolio passe de base
                  visual a apresentacao profissional completa.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {contactLinks.map((contact, index) => (
                  <a
                    key={contact.label}
                    className={
                      index === 0
                        ? 'rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition duration-300 hover:-translate-y-0.5 hover:bg-stone-200'
                        : 'rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/90 transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5'
                    }
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contact.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  )
}
