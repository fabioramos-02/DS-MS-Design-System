# POC — DS-MS no Storybook (19 componentes)

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

### Fiéis a `components.css` da raiz (10)

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
| **Header** | **Web Component** (`<ms-header>`, Lit, light DOM) | `.ds-header` + comportamento de menu mobile |
| Footer | CSS+HTML | `.ds-footer` |

### Implementados a partir da documentação pública de `designsystem.ms.gov.br` (9)

Sem origem em `components.css` da raiz — estrutura, variantes, estados e acessibilidade
extraídos do site oficial (não do Figma fonte, ainda bloqueado — ver
[`../docs/08-proximos-passos.md`](../docs/08-proximos-passos.md)). Cada `.mdx` documenta a
fonte e qualquer aproximação assumida.

| Componente | Tipo | Decisão técnica |
|---|---|---|
| Accordion | CSS+HTML | `<details>`/`<summary>` nativo — sem JS |
| Breadcrumb | CSS+HTML | `<nav><ol>` semântico |
| Segment Button | CSS+HTML | `input[type=radio]` + `label` (seleção exclusiva nativa) |
| Table | CSS+HTML | `<table>` semântica, status via `.tag` |
| Tiles | CSS+HTML | grid de `<a class="tile">` |
| Dropdown | CSS+HTML | "select" = alias de `.field-select`; "menu" = `<details>` |
| Label | CSS+HTML | standalone, alias dos tokens de `input.label.*` |
| **Menu** | **Web Component** (`<ms-menu>`, Lit, light DOM) | barra + submenu + toggle mobile |
| **Carousel** | **Web Component** (`<ms-carousel>`, Lit, light DOM) | autoplay pausável + controles + teclado |

**Restam 22/41 sem nenhuma implementação** (nem documentação pública, nem Figma).

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

# 4) Gera o BUNDLE PUBLICÁVEL (o que vai pro npm/CDN)
npm run build            # tokens -> dist/css/ds-sis.css + dist/js/ds-sis.js
```

`npm run build` roda 3 passos: gera os tokens, concatena `dist/css/tokens.css` + o CSS de todos os 19 componentes em **`dist/css/ds-sis.css`**, e empacota `<ms-header>`, `<ms-menu>` e `<ms-carousel>` (com Lit **bundlado dentro**, sem `import` externo) em **`dist/js/ds-sis.js`** via Vite (`vite.lib.config.js`). É esse par de arquivos que o consumidor final (PHP/Python/JS) carrega via CDN.

## Publicar (npm público + jsDelivr + GitHub Pages)

O pacote é `@design-system-ms/ds-sis`, publicado em **npm público** (não precisa de registry privado — é design system de governo, sem segredo a proteger). Custos detalhados em [`../docs/10-custos-publicacao-pacote.md`](../docs/10-custos-publicacao-pacote.md) (cenário recomendado: **R$ 0/mês**).

### Passos manuais (uma vez, feitos por quem tem acesso ao npm/GitHub — não automatizáveis por IA)
1. Gerar um **Automation token** (Read and write) na org/scope `dsms` em npmjs.com → Access Tokens. **Nunca cole o token em chat ou em arquivo versionado.**
2. Adicionar esse token como secret `NPM_TOKEN` em GitHub → Settings → Secrets and variables → Actions.
3. Em GitHub → Settings → Pages, definir Source = **"GitHub Actions"** (uma vez).
4. Se o npm reclamar que a org `dsms` não existe ou que não há permissão de escrita: criar a org gratuita em `npmjs.com/org/create` antes de tentar de novo.

### Fluxo automático (depois dos passos manuais)
- **Todo push em `main`** → `.github/workflows/ci.yml` builda tudo (valida) e `.github/workflows/pages.yml` publica o Storybook no GitHub Pages.
- **Toda tag `vX.Y.Z`** → `.github/workflows/publish-npm.yml` builda e publica no npm:
  ```bash
  git tag v0.1.0
  git push origin main --tags
  ```
- Depois do primeiro publish, a CDN funciona **automaticamente, sem configuração**:
  `https://cdn.jsdelivr.net/npm/@design-system-ms/ds-sis/dist/css/ds-sis.css`
  `https://cdn.jsdelivr.net/npm/@design-system-ms/ds-sis/dist/js/ds-sis.js`

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
- `<ms-header>`, `<ms-menu>` e `<ms-carousel>` são os 3 **Web Components** (Lit) — ver stories Mobile fechado/aberto (Header/Menu) e Manual/Autoplay (Carousel).

## Estrutura

```
poc/
  package.json                 nome @design-system-ms/ds-sis; scripts: tokens, build, storybook, build-storybook
  style-dictionary.config.js   formatos css/scss/js/php/python/json (+ PHP/Python custom)
  scripts/build-css.js         concatena tokens.css + CSS dos 19 componentes -> dist/css/ds-sis.css
  vite.lib.config.js           empacota src/index.js -> dist/js/ds-sis.js (lit bundlado, sem CSS duplicado)
  src/index.js                 entrada do pacote: registra <ms-header>, <ms-menu>, <ms-carousel>
  tokens/
    color.json                 paleta COMPLETA fiel a colors_and_type.css (primary/neutral/error/success/warning/support/info)
    button.json, input.json, search.json, selection.json,
    card.json, tag.json, notification.json, header.json   tokens por componente (referenciam color.*)
    accordion.json, breadcrumb.json, carousel.json, dropdown.json,
    label.json, menu.json, segment-button.json, table.json, tiles.json   tokens dos 9 novos
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
    accordion/, breadcrumb/, dropdown/, label/, segment-button/, table/, tiles/
                 <nome>.css, <nome>.stories.js, <nome>.mdx (CSS+HTML puro)
    menu/        menu.css, ms-menu.js (Web Component Lit, light DOM), menu.stories.js, menu.mdx
    carousel/    carousel.css, ms-carousel.js (Web Component Lit, light DOM), carousel.stories.js, carousel.mdx
  .storybook/                  main.js + preview.js (web-components-vite + a11y)
```

Pipeline real (CI/CD) está em `../.github/workflows/{ci,pages,publish-npm}.yml` — não mais `.gitlab-ci.yml` (removido; ver nota de pivot em [`../docs/05-pipeline-gitlab-ci.md`](../docs/05-pipeline-gitlab-ci.md)).

## Notas
- O formato de token aqui é o **nativo do Style Dictionary** (robusto e estável).
  Em produção, o Figma + **Tokens Studio** exporta **W3C DTCG** (`$value`/`$type`),
  também suportado pelo Style Dictionary v4. Ver [`../docs/01-arquitetura.md`](../docs/01-arquitetura.md).
- `dist/` e `storybook-static/` são **gerados** (estão no `.gitignore`) — rode `npm run build`/`npm run tokens`/`npm run build-storybook` para criá-los.
- `ms-header.js` importa `./header.css` só para o Storybook local funcionar isolado; o bundle publicado (`dist/js/ds-sis.js`) **não** inclui esse CSS — o componente espera herdar `ds-sis.css` já carregado na página (light DOM, decisão de arquitetura).
