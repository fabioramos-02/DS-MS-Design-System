# 08 — Próximos passos (status atual e o que vem depois)

> Este documento reflete o estado **real** do projeto agora, depois da implementação dos componentes no Storybook. O [`07-roadmap.md`](07-roadmap.md) é o plano original (mantido como referência histórica); este aqui é o "onde estamos / o que falta".

## O que já está pronto

### Tokens
- `poc/tokens/color.json` foi expandido para ser **fiel** ao `colors_and_type.css` da raiz: escalas completas de `primary`, `neutral` (100–1000), `error` (100–800), `success`, `warning`, `support` e `info` (100–700) — mesmos nomes e hex do arquivo-fonte.
- Cada componente tem seu próprio arquivo de token (`button.json`, `input.json`, `search.json`, `selection.json`, `card.json`, `tag.json`, `notification.json`, `header.json`), todos referenciando `color.*` em vez de repetir hex.
- `npm run tokens` gera **6 saídas** (`css`, `scss`, `js`+`.d.ts`, `php`, `python`, `json`) a partir desse conjunto — confirmado rodando e inspecionando `dist/`.

### Componentes no Storybook (19)
**Da fonte `components.css` da raiz (10):** Button, Input, Search, Selection (checkbox/radio/toggle), Link, Card, Tag, Notification, Header (`<ms-header>`, Web Component) e Footer.

**Implementados a partir da documentação pública de `designsystem.ms.gov.br` (9, nesta rodada):** Accordion (`<details>` nativo), Breadcrumb, Carousel (`<ms-carousel>`, Web Component), Dropdown (select + menu via `<details>`), Label (standalone), Menu (`<ms-menu>`, Web Component), Segment Button (radio nativo), Table, Tiles. Sem origem no `components.css` da raiz — implementados a partir da estrutura/estados/acessibilidade documentados publicamente no site oficial, **não** do Figma fonte (ver seção 1 abaixo, bloqueio ainda vale para os 22 restantes). Cada `.mdx` documenta a fonte e qualquer aproximação assumida (ex.: cor de fundo do Menu).

`npm run build-storybook` roda sem erro (verificado nesta sessão) — confirma que o pipeline token → CSS → Storybook funciona ponta a ponta para os 19 componentes.

### Decisão de arquitetura provada
`<ms-header>`, `<ms-menu>` e `<ms-carousel>` são os 3 Web Components (Lit, **light DOM** — `createRenderRoot()` retorna `this` para herdar o CSS global em vez de isolar em Shadow DOM). Prova o modelo híbrido descrito em [`01-arquitetura.md`](01-arquitetura.md): CSS+HTML para o grosso, Web Component só onde há comportamento real (menu mobile, submenu, autoplay/controles de carrossel).

## O que falta — por bloqueio, não por falta de esforço

### 1. Componentes sem origem fiel ao Figma
A documentação do vault (`fundamentos-e-componentes.md`) lista **41 componentes** no DS-MS oficial. Os 9 listados acima (Accordion, Breadcrumb, Carousel, Dropdown, Label, Menu, Segment Button, Table, Tiles) já foram implementados nesta rodada a partir da documentação **pública** do site oficial — mas ainda não do Figma fonte. **Restam 22 componentes** sem nenhuma implementação (nem por documentação pública, nem por Figma).

Fidelidade total (cores exatas, espaçamentos, estados visuais) para os 9 já implementados e para os 22 restantes exigiria abrir o Figma oficial (`Documentacao-Design-System-Figma.pdf` em `uploads/`, ou o arquivo Figma "Template-Site-DS" mencionado no `README.md` da raiz). **Ação:** solicitar acesso ao Figma (ver [`acesso-e-governanca`](../../../../10-conhecimento/design-system-ms/acesso-e-governanca.md) no vault) para validar/ajustar os 9 e continuar com os 22 restantes.

### 2. Tokens ainda não vêm do Figma de verdade
Os tokens em `poc/tokens/*.json` foram **transcritos manualmente** do `colors_and_type.css` da raiz (que por sua vez já foi derivado do Figma em sessão anterior). Não há ainda um pipeline Figma → Tokens Studio → JSON automático. **Ação:** configurar o plugin Tokens Studio no arquivo Figma oficial e validar que o export bate com os valores aqui.

### 3. Nada disso está em produção
POC roda **local**. Não há repositório GitLab real, não há CI executando, não há pacote publicado em npm/CDN. O `.gitlab-ci.yml` é só leitura/referência. **Ação:** decidir se o GitLab institucional da SETDIG recebe este repositório (ou um novo) e dar o primeiro push.

### 4. Snippets multi-stack só existem para o Button
Os outros 18 componentes têm CSS+HTML genérico (funciona em qualquer stack por ser HTML puro), mas não têm os arquivos `snippets/{html,blade,jinja,react}` dedicados como o Button tem. **Ação:** replicar o padrão quando o piloto avançar — é trabalho mecânico, não exploratório.

## Próximos passos concretos, em ordem

1. **Pedir acesso ao Figma oficial do DS-MS** — pré-requisito de tudo abaixo. Sem isso, fica-se travado na fidelidade dos 9 componentes implementados via documentação pública e nos 22 ainda sem nenhuma implementação.
2. **Validar com a SGD/SETDIG** se os tokens aqui (`color.json` expandido) batem 100% com o Figma vigente — pode haver componentes/cores adicionados desde a última extração, e os 9 novos (Accordion/Breadcrumb/Carousel/Dropdown/Label/Menu/Segment Button/Table/Tiles) precisam de ajuste fino quando o Figma estiver acessível (ex.: cor de fundo do Menu, hoje aproximada).
3. **Configurar Tokens Studio** no Figma e gerar o primeiro export real — substitui a transcrição manual.
4. **Decidir o repositório** (GitLab institucional vs. novo projeto) e fazer o primeiro push real do que está em `poc/`.
5. **Implementar os 22 componentes restantes** a partir do Figma, seguindo o mesmo padrão (`tokens/*.json` → `css` → `stories.js` → `mdx`).
6. **Ligar o gate de acessibilidade no CI** (`@storybook/test-runner` + axe) — hoje o painel a11y só roda manualmente no Storybook local.
7. **Publicar o Storybook** como site (GitLab Pages) e decidir se substitui `designsystem.ms.gov.br` ou roda em paralelo até a virada.
8. **Apresentar à gestora** (pitch já preparado em `apresentacao/DS-MS-Apresentacao.pptx`) para destravar os pontos 1 e 4, que dependem de aval institucional.

## O que isso significa para o pitch

Os pontos 1 e 4 (acesso ao Figma, decisão de repositório) **não são técnicos** — são decisões de gestão. A POC já prova que a parte técnica funciona (tokens multi-stack + Storybook + Web Component). O gargalo agora é institucional, não de engenharia.
