---
name: ds-ms-design
description: Gera interfaces e artefatos com identidade visual do Design System do Governo de Mato Grosso do Sul (SETDIG). Use para prototipar telas, criar componentes, montar mocks ou HTML de produção seguindo tokens --ds-*, prefixo .ds-, sem framework de UI. Aciona em "design system MS", "ds-ms", "storybook-ds-ms", "componente gov MS", "tela padrão SETDIG", "protótipo governo MS".
user-invocable: true
---

# Design System MS — Skill

Habilidade para gerar artefatos visuais (protótipos, mocks, componentes de produção) usando a identidade oficial do **Design System do Governo de Mato Grosso do Sul**, mantido pela **SETDIG**.

## Antes de agir

1. **Ler `CLAUDE.md`** deste repo — convenções, arquitetura, comandos.
2. **Abrir 1 componente existente** em `src/components/` (ex: `button/`) para replicar padrão.
3. **Ler tokens** em `src/styles/variables.css` (cores), `typography.css`, `spacing.css`, `radius.css`, `shadows.css`, `grid.css`.

Se o usuário pediu em pt-BR, responder em pt-BR. Se pediu artefato descartável (mock/tela), gerar HTML estático linkando `src/main.css`. Se pediu código de produção, seguir padrão canônico de componente (css + js + stories.js).

## Referência rápida

### Cor
- **Azul institucional:** `--ds-color-brand-skyline` `#004f9f` — cabeçalho, rodapé, CTA primário, links, estados ativos. Sem gradiente.
- **Amarelo institucional:** `--ds-color-brand-golden` `#ffd500` — acento, destaque.
- **Verde:** `--ds-color-secondary-600` `#007f31`.
- **Neutros:** `--ds-color-neutral-0` (branco) a `--ds-color-neutral-1000` (preto).
- **Texto padrão:** `--ds-color-text-primary` = `--ds-color-neutral-1000`.

### Tipografia
- **Heading:** `--ds-font-family-heading` (institucional, forte).
- **Body:** `--ds-font-family-body`.
- **Escala:** `--ds-heading-1-font-size` até `--ds-body-md-font-size`.
- **Nunca:** emoji, ícone-fonte proprietário, fonte externa fora do sistema.

### Espaçamento
- Base 4: `--ds-spacing-4`, `-8`, `-16`, `-24`, `-32`, `-40`, `-56`, `-64`.

### Radius
- `--ds-radius-sm` (inputs) · `--ds-radius-md` (botões/tags) · `--ds-radius-lg` (cards) · `--ds-radius-huge` (avatares).

### Sombra
- `--ds-shadow-card-sm`, `--ds-shadow-sm`, `--ds-shadow-md`.

### Ícones
- SVG inline via `public/icons.svg` (sprite Iconify).
- **Nunca** emoji, nunca ícone-fonte.

## Voz e tom

- pt-BR, institucional e claro. Segue Lei nº 15.263/2025 (linguagem simples).
- "Nós" para a equipe SETDIG, "você" para o cidadão.
- Sentence case em títulos.
- Frases curtas. Verbo no início.

## Componentes disponíveis (16)

`accordion`, `alert`, `badge`, `breadcrumb`, `button`, `card`, `carousel`, `checkbox`, `dropdown`, `header`, `input`, `link`, `search`, `select`, `textarea`, `toast`.

## Como criar componente novo

Padrão canônico (exemplo `alert`):

```
src/components/alert/
├── alert.css               .ds-alert { padding: var(--ds-spacing-16); border-radius: var(--ds-radius-md); ... }
├── alert.js                export function Alert({ title, description } = {}) { return `<div class="ds-alert">...</div>`; }
└── alert.stories.js        export default { title: 'Componentes/Alert' }; + variantes
```

Depois adicionar em `src/main.css`:
```css
@import "./components/alert/alert.css";
```

## Comandos

```bash
npm run storybook             # dev http://localhost:6006
npm run build-storybook       # build estático
npm run lint:css              # stylelint
```

## Regras absolutas

- **Sempre** usar tokens `var(--ds-*)`. **Nunca** valor hardcoded.
- **Sempre** prefixo `.ds-` em classe.
- **Nunca** React/Vue/Bootstrap/Tailwind.
- **Nunca** TypeScript (sem discussão).
- **Nunca** publicar npm (`private: true`).
- **Sempre** WCAG 2.1 AA + eMAG.
- **Sempre** commit em pt-BR, Conventional Commits, sem assinatura de IA.

## Quando o usuário invoca sem contexto

Perguntar em pt-BR:
1. O que quer construir? (protótipo, componente novo, tela real, mock de apresentação)
2. Contexto de uso? (sistema interno gov, portal cidadão, admin, landing)
3. Precisa ser produção (Storybook story) ou descartável (HTML solto)?

Depois agir como designer sênior, entregando o artefato + explicando escolhas de token.
