import{C as t}from"./codePreview-Db2E5PIM.js";const j={title:"Componentes/Button"},n=["src/styles/variables.css","src/styles/typography.css","src/styles/spacing.css","src/styles/radius.css","src/components/button/button.css"],e={id:"ds-button",status:"Estável",version:"1.0.0",category:"Components",updated:"2026-06-25"},o=["Nenhum JavaScript obrigatório para uso visual do Button."],s=["O Button depende dos tokens globais do Design System MS.","As classes obrigatórias são <code>ds-button</code>, <code>ds-button--variant</code> e <code>ds-button--size</code>.","Use <code>&lt;a&gt;</code> quando a ação for navegação.","Use <code>&lt;button&gt;</code> quando a ação executar comportamento na página, como enviar, abrir ou confirmar.",'Para estado desabilitado em links, use <code>aria-disabled="true"</code>, <code>tabindex="-1"</code> e a classe <code>is-disabled</code>.'],C=["Executar uma ação principal da página.","Enviar, confirmar ou cancelar ações.","Destacar uma chamada para ação importante.","Criar links de navegação com maior destaque visual."],S=["Para textos informativos sem ação.","Para navegação comum dentro de parágrafos.","Para seleção múltipla de opções.","Para agrupar conteúdos visuais, nesse caso utilize Card."],f=["<code>ds-button--primary</code> — ação principal.","<code>ds-button--secondary</code> — ação secundária.","<code>ds-button--tertiary</code> — ação complementar.","<code>ds-button--outline</code> — ação com menor peso visual.","<code>ds-button--ghost</code> — ação discreta.","<code>ds-button--sm</code>, <code>ds-button--md</code> e <code>ds-button--lg</code> — tamanhos disponíveis."],_=`
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
    <a
        class="ds-button ds-button--primary ds-button--md"
        href="/?path=/story/components-button--html-primary"
        target="_top"
    >
        Acessar serviço
    </a>

    <a
        class="ds-button ds-button--secondary ds-button--md"
        href="/?path=/story/components-button--html-secondary"
        target="_top"
    >
        Saiba mais
    </a>

    <a
        class="ds-button ds-button--tertiary ds-button--md"
        href="/?path=/story/components-button--html-tertiary"
        target="_top"
    >
        Continuar
    </a>

    <a
        class="ds-button ds-button--outline ds-button--md"
        href="/?path=/story/components-button--html-outline"
        target="_top"
    >
        Ver detalhes
    </a>

    <a
        class="ds-button ds-button--ghost ds-button--md"
        href="/?path=/story/components-button--html-ghost"
        target="_top"
    >
        Ler mais
    </a>

    <a
        class="ds-button ds-button--primary ds-button--sm"
        href="/?path=/story/components-button--html-small"
        target="_top"
    >
        Botão pequeno
    </a>

    <a
        class="ds-button ds-button--primary ds-button--lg"
        href="/?path=/story/components-button--html-large"
        target="_top"
    >
        Botão grande
    </a>

    <a
        class="ds-button ds-button--primary ds-button--md is-disabled"
        href="/?path=/story/components-button--html-disabled"
        aria-disabled="true"
        tabindex="-1"
    >
        Indisponível
    </a>

    <button
        class="ds-button ds-button--primary ds-button--md"
        type="button"
    >
        Enviar
    </button>
</div>
`;function H(E){return E.map(w=>`<li>${w}</li>`).join("")}function k(){return`
    
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Button</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para ações principais, secundárias e links de navegação com destaque visual.
                    </p>
                </div>

                <dl class="ds-component-doc__meta">
                    <div>
                        <dt>Status</dt>
                        <dd>${e.status}</dd>
                    </div>

                    <div>
                        <dt>Versão</dt>
                        <dd>${e.version}</dd>
                    </div>

                    <div>
                        <dt>Atualizado</dt>
                        <dd>${e.updated}</dd>
                    </div>
                </dl>
            </header>

            <section class="ds-component-doc__grid">
                <article class="ds-component-doc__card">
                    <h2>Quando usar</h2>
                    <ul>
                        ${H(C)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${H(S)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${H(f)}
                    </ul>
                </article>
            </section>
        </main>
    `}const a={name:"Documentação",render:()=>k()},r={name:"All",render:()=>t({title:"Button - HTML",description:"Exemplo de HTML para replicar todas as variações do componente Button em uma página.",meta:e,preview:_,cssDependencies:n,jsDependencies:o,notes:s})},D=`
<a class="ds-button ds-button--primary ds-button--md" href="#">
    Acessar serviço
</a>
`,d={name:"Primary",render:()=>t({title:"Button Primary - HTML",description:"Exemplo de HTML para replicar o botão primário.",meta:e,preview:D,code:D,language:"markup",cssDependencies:n,jsDependencies:o,notes:s})},M=`
<a class="ds-button ds-button--secondary ds-button--md" href="#">
    Saiba mais
</a>
`,c={name:"Secondary",render:()=>t({title:"Button Secondary - HTML",description:"Exemplo de HTML para replicar o botão secundário.",meta:e,preview:M,code:M,language:"markup",cssDependencies:n,jsDependencies:o,notes:s})},v=`
<a class="ds-button ds-button--tertiary ds-button--md" href="#">
    Continuar
</a>
`,i={name:"Tertiary",render:()=>t({title:"Button Tertiary - HTML",description:"Exemplo de HTML para replicar o botão terciário.",meta:e,preview:v,code:v,language:"markup",cssDependencies:n,jsDependencies:o,notes:s})},L=`
<a class="ds-button ds-button--outline ds-button--md" href="#">
    Ver detalhes
</a>
`,p={name:"Outline",render:()=>t({title:"Button Outline - HTML",description:"Exemplo de HTML para replicar o botão outline.",meta:e,preview:L,code:L,language:"markup",cssDependencies:n,jsDependencies:o,notes:s})},y=`
<a class="ds-button ds-button--ghost ds-button--md" href="#">
    Ler mais
</a>
`,u={name:"Ghost",render:()=>t({title:"Button Ghost - HTML",description:"Exemplo de HTML para replicar o botão ghost.",meta:e,preview:y,code:y,language:"markup",cssDependencies:n,jsDependencies:o,notes:s})},h=`
<a class="ds-button ds-button--primary ds-button--sm" href="#">
    Botão pequeno
</a>
`,m={name:"Small",render:()=>t({title:"Button Small - HTML",description:"Exemplo de HTML para replicar o botão pequeno.",meta:e,preview:h,code:h,language:"markup",cssDependencies:n,jsDependencies:o,notes:s})},T=`
<a class="ds-button ds-button--primary ds-button--lg" href="#">
    Botão grande
</a>
`,l={name:"Large",render:()=>t({title:"Button Large - HTML",description:"Exemplo de HTML para replicar o botão grande.",meta:e,preview:T,code:T,language:"markup",cssDependencies:n,jsDependencies:o,notes:s})},x=`
<a
    class="ds-button ds-button--primary ds-button--md is-disabled"
    href="#"
    aria-disabled="true"
    tabindex="-1"
>
    Indisponível
</a>
`,b={name:"Disabled",render:()=>t({title:"Button Disabled - HTML",description:"Exemplo de HTML para replicar o botão desabilitado.",meta:e,preview:x,code:x,language:"markup",cssDependencies:n,jsDependencies:o,notes:s})},B=`
<button class="ds-button ds-button--primary ds-button--md" type="button">
    Enviar
</button>
`,g={name:"As Button",render:()=>t({title:"Button como Button - HTML",description:"Exemplo de HTML usando a tag button em vez de link.",meta:e,preview:B,code:B,language:"markup",cssDependencies:n,jsDependencies:o,notes:s})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Documentação',
  render: () => renderButtonDocumentation()
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'All',
  render: () => CodePreview({
    title: 'Button - HTML',
    description: 'Exemplo de HTML para replicar todas as variações do componente Button em uma página.',
    meta: buttonMeta,
    preview: allButtonsHtml,
    cssDependencies: buttonCssDependencies,
    jsDependencies: buttonJsDependencies,
    notes: buttonNotes
  })
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Primary',
  render: () => CodePreview({
    title: 'Button Primary - HTML',
    description: 'Exemplo de HTML para replicar o botão primário.',
    meta: buttonMeta,
    preview: primaryHtml,
    code: primaryHtml,
    language: 'markup',
    cssDependencies: buttonCssDependencies,
    jsDependencies: buttonJsDependencies,
    notes: buttonNotes
  })
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Secondary',
  render: () => CodePreview({
    title: 'Button Secondary - HTML',
    description: 'Exemplo de HTML para replicar o botão secundário.',
    meta: buttonMeta,
    preview: secondaryHtml,
    code: secondaryHtml,
    language: 'markup',
    cssDependencies: buttonCssDependencies,
    jsDependencies: buttonJsDependencies,
    notes: buttonNotes
  })
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Tertiary',
  render: () => CodePreview({
    title: 'Button Tertiary - HTML',
    description: 'Exemplo de HTML para replicar o botão terciário.',
    meta: buttonMeta,
    preview: tertiaryHtml,
    code: tertiaryHtml,
    language: 'markup',
    cssDependencies: buttonCssDependencies,
    jsDependencies: buttonJsDependencies,
    notes: buttonNotes
  })
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Outline',
  render: () => CodePreview({
    title: 'Button Outline - HTML',
    description: 'Exemplo de HTML para replicar o botão outline.',
    meta: buttonMeta,
    preview: outlineHtml,
    code: outlineHtml,
    language: 'markup',
    cssDependencies: buttonCssDependencies,
    jsDependencies: buttonJsDependencies,
    notes: buttonNotes
  })
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Ghost',
  render: () => CodePreview({
    title: 'Button Ghost - HTML',
    description: 'Exemplo de HTML para replicar o botão ghost.',
    meta: buttonMeta,
    preview: ghostHtml,
    code: ghostHtml,
    language: 'markup',
    cssDependencies: buttonCssDependencies,
    jsDependencies: buttonJsDependencies,
    notes: buttonNotes
  })
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Small',
  render: () => CodePreview({
    title: 'Button Small - HTML',
    description: 'Exemplo de HTML para replicar o botão pequeno.',
    meta: buttonMeta,
    preview: smallHtml,
    code: smallHtml,
    language: 'markup',
    cssDependencies: buttonCssDependencies,
    jsDependencies: buttonJsDependencies,
    notes: buttonNotes
  })
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Large',
  render: () => CodePreview({
    title: 'Button Large - HTML',
    description: 'Exemplo de HTML para replicar o botão grande.',
    meta: buttonMeta,
    preview: largeHtml,
    code: largeHtml,
    language: 'markup',
    cssDependencies: buttonCssDependencies,
    jsDependencies: buttonJsDependencies,
    notes: buttonNotes
  })
}`,...l.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => CodePreview({
    title: 'Button Disabled - HTML',
    description: 'Exemplo de HTML para replicar o botão desabilitado.',
    meta: buttonMeta,
    preview: disabledHtml,
    code: disabledHtml,
    language: 'markup',
    cssDependencies: buttonCssDependencies,
    jsDependencies: buttonJsDependencies,
    notes: buttonNotes
  })
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'As Button',
  render: () => CodePreview({
    title: 'Button como Button - HTML',
    description: 'Exemplo de HTML usando a tag button em vez de link.',
    meta: buttonMeta,
    preview: asButtonHtml,
    code: asButtonHtml,
    language: 'markup',
    cssDependencies: buttonCssDependencies,
    jsDependencies: buttonJsDependencies,
    notes: buttonNotes
  })
}`,...g.parameters?.docs?.source}}};const N=["Documentacao","HTMLBotoes","HTMLPrimary","HTMLSecondary","HTMLTertiary","HTMLOutline","HTMLGhost","HTMLSmall","HTMLLarge","HTMLDisabled","HTMLAsButton"];export{a as Documentacao,g as HTMLAsButton,r as HTMLBotoes,b as HTMLDisabled,u as HTMLGhost,l as HTMLLarge,p as HTMLOutline,d as HTMLPrimary,c as HTMLSecondary,m as HTMLSmall,i as HTMLTertiary,N as __namedExportsOrder,j as default};
