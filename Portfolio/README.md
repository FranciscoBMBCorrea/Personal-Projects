# Francisco Beça Múrias Portfolio

Portfolio pessoal construído com Next.js, Tailwind CSS, TypeScript e Prismic
para apresentar projetos de design de interiores, desenho 2D e visualização 3D
numa experiência editorial, minimalista e responsiva.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- GSAP
- Prismic
- TypeScript

## Conteúdo

O site usa agora duas fontes de conteúdo:

- `Prismic` preparado para projetos e conteúdo global
- `src/data/portfolio.ts` como fallback local enquanto o CMS não estiver preenchido

Por agora, o projeto usa o conteúdo local por defeito. A integração com Prismic
fica preparada, mas desativada até ser explicitamente ligada por variável de ambiente.

## Desenvolvimento

```bash
npm install
npm run dev
```

Aplicação disponível em [http://localhost:3000](http://localhost:3000).

## Prismic

Por defeito, o Prismic está desativado no runtime.

Para o ativar no futuro:

```bash
PORTFOLIO_ENABLE_PRISMIC=true
```

Sem essa variável, o site usa apenas os dados locais.

O repositório Prismic configurado no projeto é:

- `francisco-correa-portfolio`

Podes sobrescrever isso com:

```bash
NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME=francisco-correa-portfolio
```

Os modelos de conteúdo do projeto estão em:

- [customtypes/project/index.json](/Users/franciscocorrea/Programming/Projects/Personal-Projects/Portfolio/customtypes/project/index.json)
- [customtypes/settings/index.json](/Users/franciscocorrea/Programming/Projects/Personal-Projects/Portfolio/customtypes/settings/index.json)

### Como adicionar um novo projeto online

1. Entrar no Prismic e criar um novo documento do tipo `Project`
2. Escolher o idioma do documento (`pt-pt` ou `en-us`)
3. Preencher os campos principais:
   - `title`
   - `year`
   - `location`
   - `category`
   - `area`
   - `client`
   - `status`
   - `accent_theme`
4. Preencher os blocos editoriais:
   - `summary`
   - `impact`
   - `intro`
   - `challenge`
   - `solution`
   - `result`
5. Adicionar listas em:
   - `before_after`
   - `deliverables`
   - `highlights`
   - `gallery`
6. Publicar o documento

Depois de publicado:

- o projeto aparece na home
- a página própria fica disponível em `/pt/projects/<uid>` ou `/en/projects/<uid>`
- se adicionares imagens na `gallery`, elas passam a aparecer automaticamente na listagem e na página do projeto

### Como editar home, about e services online

1. No Prismic, cria ou edita o documento singleton `Settings`
2. Escolhe o idioma do documento (`pt-pt` ou `en-us`)
3. Preenche os campos que quiseres controlar no CMS:
   - identidade: `site_title`, `site_description`, `og_title`, `og_description`, `name`, `role`
   - home: `hero_*`, `intro_rows`, `about_*`, `projects_*`, `services_*`, `process_*`, `contact_*`
   - about: `about_page_*`
   - services: `services_page_*`
   - rodapé: `footer`
4. Publica

Quando o Prismic estiver ativado, o site faz merge automático:

- se um campo existir no `Settings`, ele ganha prioridade
- se faltar, continua a usar o valor local como fallback

### Notas importantes

- Para conteúdo bilingue, cria uma versão `pt-pt` e outra `en-us` do mesmo projeto
- O `uid` do Prismic passa a ser a slug da página
- Enquanto o Prismic estiver desativado ou vazio, o site mantém os projetos atuais como fallback

## Próximos passos sugeridos

- Adicionar imagens reais à `gallery` de cada projeto
- Afinar o documento `settings` no CMS para controlar toda a home com conteúdo final

## Licença

Projeto licenciado sob a [MIT License](LICENSE).
