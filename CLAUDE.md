# CLAUDE.md — storybook-ds-ms

Instruções para Claude Code neste repositório. Ler antes de qualquer tarefa.

## O que é este projeto

Storybook de documentação viva do **Design System do Governo de Mato Grosso do Sul**, mantido pela **SETDIG — Secretaria-Executiva de Transformação Digital** (vinculada à SEGOV).

- **Stack:** Storybook 10 (`@storybook/html-vite`) + Vite 7 + HTML/CSS/JavaScript puros.
- **Sem framework de UI** (React/Vue/Bootstrap fora).
- **Sem publicação npm.** `package.json` é `private: true`. Consumo é por cópia HTML+CSS, clone ou submodule.
- **Publicado em:** https://fabioramos-02.github.io/storybook-ds-ms/

## Comandos essenciais

```bash
npm install                   # deps
npm run storybook             # dev em http://localhost:6006
npm run build-storybook       # build estático -> storybook-static/
npm run lint:css              # stylelint em src/**/*.css
```

## Arquitetura

```
src/
├── styles/         Tokens globais (--ds-*). Editar aqui muda o sistema todo.
├── components/     Um componente por pasta: component.{css,js,stories.js}
├── docs/           Páginas institucionais (introdução, tokens, assets)
├── utils/          Helpers de story (CodePreview)
├── assets/         Imagens/fontes usadas em stories
├── main.js         Entry Vite (importa main.css)
└── main.css        Agrega import de tokens + CSS de componentes

.storybook/
├── main.js         Config Storybook (stories glob, framework, viteFinal base)
├── preview.js      CSS global + ordem de menu
├── manager.js      Tema do manager (brandTitle, brandImage)
└── manager-head.html   Favicon

public/             Servido em `/` (favicon-ms.svg, favicon.ico, icons.svg)

.github/workflows/
├── deploy-pages.yml    push main -> build + deploy GitHub Pages
├── ci.yml              PR -> npm ci + lint:css + build-storybook
└── pr-preview.yml      PR -> deploy preview em subpath /pr-N/
```

## Convenções obrigatórias

### CSS
- **Prefixo de classe:** `.ds-` (`.ds-button`, `.ds-card`, `.ds-alert`).
- **Prefixo de custom property:** `--ds-` (`--ds-color-primary-600`, `--ds-spacing-16`).
- **Nunca valor hardcoded.** Sempre `var(--ds-*)`. Se o token não existe, criar em `src/styles/` antes de usar.
- **Sem `!important`** exceto em reset/utility de última milha.

### Componente (padrão canônico)
```
src/components/<nome>/
├── <nome>.css          .ds-<nome> { padding: var(--ds-spacing-16); ... }
├── <nome>.js           export function <Nome>({ prop = default } = {}) { return `<div class="ds-<nome>">...</div>`; }
└── <nome>.stories.js   export default { title: 'Componentes/<Nome>' }; + variantes
```

Componente JS **retorna HTML string** — não é React, não é Web Component. Vite bundla imports estáticos (`import img from './x.png'` funciona).

### Story
- `title: 'Componentes/<Nome>'` (categoria em português, título capitalizado).
- Sempre uma story `Documentacao` (renderiza `ComponentPage` com meta) + variantes técnicas usando `CodePreview` (`src/utils/codePreview`).
- Meta obrigatório: `{ id, status, version, category, updated }`.

### Acessibilidade
- **WCAG 2.1 AA + eMAG** são o piso, não o teto.
- Contraste 4.5:1 em texto normal, 3:1 em large text.
- Foco visível em todo elemento interativo.
- Semântica correta (`<button>` clicável, `<a>` navegável, `<nav>` navegação).
- Teclado: Tab/Shift+Tab/Enter/Escape funcionam em qualquer interativo.

## Como Claude deve trabalhar aqui

### Sempre fazer
1. **Ler o padrão antes de criar.** Antes de escrever componente novo, abrir 1 componente existente (ex: `button/`) e replicar estrutura exata.
2. **Rodar `npm run lint:css` antes de commit.** Zero erro obrigatório.
3. **Rodar `npm run build-storybook` antes de PR.** Sem erro obrigatório.
4. **Commits em português, imperativo, Conventional Commits** (`feat:`, `fix:`, `refactor:`, `docs:`, `chore:`).
5. **PR contra `main`** com corpo em português, screenshots das variações, checklist de acessibilidade.

### Nunca fazer
- **Adicionar framework de UI** (React/Vue/Bootstrap/Tailwind).
- **Introduzir TypeScript** sem discussão explícita.
- **Publicar npm.** `package.json` continua `private: true`.
- **Criar componente sem story.**
- **Assinar commits com IA** — nada de `Co-Authored-By: Claude`, `Anthropic`, etc.

## Base path

Storybook builda com base path conforme env var:

```bash
STORYBOOK_BASE_PATH=/storybook-ds-ms/ npm run build-storybook
```

Workflows GH Actions já setam. Local sem env = base `/`.

Arquivos em `public/` ficam disponíveis no root do base path. Refs internas usar `./favicon-ms.svg` (relativo) — nunca `/favicon-ms.svg` (quebra em subpath).

## Governança

- **SGD** (Superintendência de Governo Digital) mantém tokens e diretrizes.
- **STI** (Superintendência de Tecnologia da Informação) mantém infra.
- Mudanças em token/nome de classe são **breaking** (major bump).
- Adição de token/componente é **minor**.
- Correção interna sem quebra de API pública é **patch**.

## Contexto legal

- Lei nº 6.035/2022 e Decreto nº 16.166/2023 instituem SETDIG.
- Lei nº 15.263/2025 (linguagem simples) aplica-se a textos institucionais do Storybook.
