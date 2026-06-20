# POC — DS-MS no Storybook (10 componentes)

Prova de conceito do plano em [`../docs/`](../docs/). Demonstra a tese central:

> **Uma fonte única de tokens (JSON) gera código para CSS, SCSS, JS, PHP e Python**,
> e cada componente é documentado vivo no Storybook, **fiel** a `components.css`/`colors_and_type.css` da raiz.

```
tokens/*.json  ──Style Dictionary──►  dist/{css,scss,js,php,python,json}
                                              │
                          componentes (css) consomem os tokens gerados
                                              │
                                  Storybook (web-components + a11y)
                                              │
                    snippets multi-stack (button) · mdx de acessibilidade (todos)
```

## Componentes implementados

| Componente | Tipo | Origem fiel |
|---|---|---|
| Button | CSS+HTML | `.btn*` |
| Input (texto/textarea/select) | CSS+HTML | `.field*` |
| Search | CSS+HTML | `.search` |
| Selection (checkbox/radio/toggle) | CSS+HTML | `.checkbox`/`.radio`/`.toggle` |
| Link | CSS+HTML | `.link` |
| Card (+ card-link) | CSS+HTML | `.card`/`.card-link` |
| Tag | CSS+HTML | `.tag*` |
| Notification | CSS+HTML | `.notification*` |
| **Header** | **Web Component** (`<ms-header>`, Lit, light DOM) | `.ds-header` + comportamento de menu mobile novo |
| Footer | CSS+HTML | `.ds-footer` |

> de `components.css` da raiz. **Não implementados** (sem CSS de origem no repo — exigem ida ao Figma): Accordion, Breadcrumb, Carousel, Dropdown, Menu, Segment Button, Table, Tiles. Ver [`../docs/08-proximos-passos.md`](../docs/08-proximos-passos.md).

## Pré-requisitos
- Node.js 18+ e npm.

## Rodar

```bash
cd poc
npm install

# 1) Gera os tokens para TODAS as linguagens (núcleo da prova)
npm run tokens

# 2) Sobe o Storybook (documentação viva + painel de acessibilidade)
npm run storybook        # http://localhost:6006

# 3) Gera o site estático de docs (o que iria pro deploy)
npm run build-storybook  # saída em storybook-static/
```

## O que conferir (verificação)

Após `npm run tokens`, o mesmo token sai em cada linguagem:

| Arquivo gerado | Trecho esperado |
|---|---|
| `dist/css/tokens.css` | `--color-primary-500: #004F9F;` |
| `dist/scss/_tokens.scss` | `$color-primary-500: #004F9F;` |
| `dist/js/tokens.js` | `export const ColorPrimary500 = "#004F9F";` |
| `dist/php/Tokens.php` | `const COLOR_PRIMARY_500 = "#004F9F";` |
| `dist/python/tokens.py` | `COLOR_PRIMARY_500 = "#004F9F"` |

→ É a prova do **"uma fonte, várias linguagens"** que resolve a dor multi-stack.

No Storybook (`npm run storybook`):
- Cada componente em **Componentes/⟨Nome⟩** renderiza variantes/tamanhos/estados.
- Painel **Accessibility** (axe) sem violações.
- Página **⟨Nome⟩/Acessibilidade & uso** com notas de eMAG/WCAG e código (snippets completos multi-stack só no Button — os demais usam o mesmo padrão, documentado em [`04-multistack.md`](../docs/04-multistack.md)).
- `<ms-header>` é o único **Web Component** (Lit) — ver stories Mobile fechado/aberto.

## Estrutura

```
poc/
  package.json                 scripts: tokens, storybook, build-storybook
  style-dictionary.config.js   formatos css/scss/js/php/python/json (+ PHP/Python custom)
  tokens/
    color.json                 paleta COMPLETA fiel a colors_and_type.css (primary/neutral/error/success/warning/support/info)
    button.json, input.json, search.json, selection.json,
    card.json, tag.json, notification.json, header.json   tokens por componente (referenciam color.*)
  src/components/
    button/      button.css, button.stories.js, button.mdx, snippets/ (html/blade/jinja/react)
    input/       input.css, input.stories.js, input.mdx
    search/      search.css, search.stories.js, search.mdx
    selection/   selection.css, selection.stories.js, selection.mdx
    link/        link.css, link.stories.js, link.mdx
    card/        card.css, card.stories.js
    tag/         tag.css, tag.stories.js
    notification/ notification.css, notification.stories.js, notification.mdx
    header/      header.css, ms-header.js (Web Component Lit, light DOM), header.stories.js, header.mdx
    footer/      footer.css, footer.stories.js
  .storybook/                  main.js + preview.js (web-components-vite + a11y)
  .gitlab-ci.yml               pipeline de referência
```

## Notas
- O formato de token aqui é o **nativo do Style Dictionary** (robusto e estável).
  Em produção, o Figma + **Tokens Studio** exporta **W3C DTCG** (`$value`/`$type`),
  também suportado pelo Style Dictionary v4. Ver [`../docs/01-arquitetura.md`](../docs/01-arquitetura.md).
- `dist/` é **gerado** (está no `.gitignore`) — rode `npm run tokens` para criá-lo.
- O `.gitlab-ci.yml` é referência; rodar de verdade exige um runner GitLab.
