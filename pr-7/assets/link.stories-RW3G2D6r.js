import{C as n}from"./codePreview-Db2E5PIM.js";const q={title:"Componentes/Link"},s=["src/styles/variables.css","src/styles/typography.css","src/styles/spacing.css","src/styles/radius.css","src/components/link/link.css"],e={id:"ds-link",status:"Estável",version:"1.0.0",category:"Components",updated:"2026-06-25"},a=["Nenhum JavaScript obrigatório para uso visual do Link."],i=["O Link depende dos tokens globais do Design System MS.","As classes obrigatórias são <code>ds-link</code>, <code>ds-link--size</code> e <code>ds-link--variant</code>.","Use <code>&lt;a&gt;</code> quando o elemento tiver função de navegação.",'Para abrir em nova aba, use <code>target="_blank"</code> e recomenda-se adicionar <code>rel="noopener noreferrer"</code>.','Para link desabilitado, use <code>aria-disabled="true"</code>, <code>tabindex="-1"</code> e a classe <code>ds-link--disabled</code>.'],S=["Navegar para outra página, seção, documento ou recurso externo.","Indicar caminhos de acesso dentro de textos, cards, listas ou áreas de conteúdo.","Criar ações de navegação com menor destaque visual que Button.","Exibir links com ou sem ícone, conforme o contexto."],N=["Para executar ações na própria página, nesse caso utilize Button.","Para destacar a ação principal de uma tela, nesse caso utilize Button Primary.","Para abrir menus ou conteúdos expansíveis, nesse caso utilize Dropdown ou Accordion.","Para texto sem função de navegação."],P=["<code>ds-link--primary</code> — link principal.","<code>ds-link--secondary</code> — link secundário.","<code>ds-link--neutral</code> — link neutro.","<code>ds-link--inverse</code> — link sobre fundo escuro.","<code>ds-link--sm</code>, <code>ds-link--md</code> e <code>ds-link--lg</code> — tamanhos disponíveis.","<code>ds-link__icon</code> — ícone à esquerda ou à direita.","<code>ds-link--no-underline</code> — sem sublinhado inicial.","<code>ds-link--disabled</code> — estado desabilitado."];function H(_){return _.map(C=>`<li>${C}</li>`).join("")}function j(){return`
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Link</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para navegação entre páginas, seções,
                        documentos ou recursos internos e externos.
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
                        ${H(S)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${H(N)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${H(P)}
                    </ul>
                </article>
            </section>
        </main>
    `}const r={name:"Documentação",render:()=>j()},D=`
<div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center;">
    <a
        class="ds-link ds-link--md ds-link--primary"
        href="/?path=/story/components-link--html-primary"
        target="_top"
    >
        <span>Saiba mais</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--secondary"
        href="/?path=/story/components-link--html-secondary"
        target="_top"
    >
        <span>Ver detalhes</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--neutral"
        href="/?path=/story/components-link--html-neutral"
        target="_top"
    >
        <span>Acessar conteúdo</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--primary"
        href="/?path=/story/components-link--html-with-icon"
        target="_top"
    >
        <span>Abrir serviço</span>
        <span class="ds-link__icon" aria-hidden="true">→</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--primary"
        href="/?path=/story/components-link--html-icon-left"
        target="_top"
    >
        <span class="ds-link__icon" aria-hidden="true">←</span>
        <span>Voltar</span>
    </a>

    <a
        class="ds-link ds-link--sm ds-link--primary"
        href="/?path=/story/components-link--html-small"
        target="_top"
    >
        <span>Link pequeno</span>
    </a>

    <a
        class="ds-link ds-link--lg ds-link--primary"
        href="/?path=/story/components-link--html-large"
        target="_top"
    >
        <span>Link grande</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--primary ds-link--no-underline"
        href="/?path=/story/components-link--html-no-underline"
        target="_top"
    >
        <span>Link sem sublinhado</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--primary ds-link--disabled"
        href="/?path=/story/components-link--html-disabled"
        aria-disabled="true"
        tabindex="-1"
    >
        <span>Link desabilitado</span>
    </a>
</div>
`,o={name:"All",render:()=>n({title:"Link - HTML",description:"Exemplo visual com todas as variações do componente Link. Clique em um link para abrir sua documentação específica.",meta:e,preview:D,code:D,language:"markup",cssDependencies:s,jsDependencies:a,notes:i})},v=`
<a class="ds-link ds-link--md ds-link--primary" href="#">
    <span>Saiba mais</span>
</a>
`,d={name:"Primary",render:()=>n({title:"Link Primary - HTML",description:"Exemplo de HTML para replicar o link primário.",meta:e,preview:v,code:v,language:"markup",cssDependencies:s,jsDependencies:a,notes:i})},M=`
<a class="ds-link ds-link--md ds-link--secondary" href="#">
    <span>Ver detalhes</span>
</a>
`,c={name:"Secondary",render:()=>n({title:"Link Secondary - HTML",description:"Exemplo de HTML para replicar o link secundário.",meta:e,preview:M,code:M,language:"markup",cssDependencies:s,jsDependencies:a,notes:i})},h=`
<a class="ds-link ds-link--md ds-link--neutral" href="#">
    <span>Acessar conteúdo</span>
</a>
`,l={name:"Neutral",render:()=>n({title:"Link Neutral - HTML",description:"Exemplo de HTML para replicar o link neutro.",meta:e,preview:h,code:h,language:"markup",cssDependencies:s,jsDependencies:a,notes:i})},T=`
<a class="ds-link ds-link--md ds-link--primary" href="#">
    <span>Abrir serviço</span>
    <span class="ds-link__icon" aria-hidden="true">→</span>
</a>
`,t={name:"With Icon",render:()=>n({title:"Link com ícone - HTML",description:"Exemplo de HTML para replicar o link com ícone à direita.",meta:e,preview:T,code:T,language:"markup",cssDependencies:s,jsDependencies:a,notes:i})},y=`
<a class="ds-link ds-link--md ds-link--primary" href="#">
    <span class="ds-link__icon" aria-hidden="true">←</span>
    <span>Voltar</span>
</a>
`,p={name:"Icon Left",render:()=>n({title:"Link com ícone à esquerda - HTML",description:"Exemplo de HTML para replicar o link com ícone à esquerda.",meta:e,preview:y,code:y,language:"markup",cssDependencies:s,jsDependencies:a,notes:i})},b=`
<a class="ds-link ds-link--sm ds-link--primary" href="#">
    <span>Link pequeno</span>
</a>
`,m={name:"Small",render:()=>n({title:"Link Small - HTML",description:"Exemplo de HTML para replicar o link pequeno.",meta:e,preview:b,code:b,language:"markup",cssDependencies:s,jsDependencies:a,notes:i})},x=`
<a class="ds-link ds-link--lg ds-link--primary" href="#">
    <span>Link grande</span>
</a>
`,k={name:"Large",render:()=>n({title:"Link Large - HTML",description:"Exemplo de HTML para replicar o link grande.",meta:e,preview:x,code:x,language:"markup",cssDependencies:s,jsDependencies:a,notes:i})},f=`
<a class="ds-link ds-link--md ds-link--primary ds-link--no-underline" href="#">
    <span>Link sem sublinhado</span>
</a>
`,u={name:"No Underline",render:()=>n({title:"Link sem sublinhado - HTML",description:"Exemplo de HTML para replicar o link sem sublinhado inicial.",meta:e,preview:f,code:f,language:"markup",cssDependencies:s,jsDependencies:a,notes:i})},w=`
<a
    class="ds-link ds-link--md ds-link--primary ds-link--disabled"
    href="#"
    aria-disabled="true"
    tabindex="-1"
>
    <span>Link desabilitado</span>
</a>
`,L={name:"Disabled",render:()=>n({title:"Link Disabled - HTML",description:"Exemplo de HTML para replicar o link desabilitado.",meta:e,preview:w,code:w,language:"markup",cssDependencies:s,jsDependencies:a,notes:i})},E=`
<div style="padding: 24px; background: var(--ds-color-primary-600); border-radius: var(--ds-radius-md);">
    <a class="ds-link ds-link--md ds-link--inverse" href="#">
        <span>Link sobre fundo escuro</span>
        <span class="ds-link__icon" aria-hidden="true">→</span>
    </a>
</div>
`,g={name:"Inverse",render:()=>n({title:"Link Inverse - HTML",description:"Exemplo de HTML para replicar o link sobre fundo escuro.",meta:e,preview:E,code:E,language:"markup",cssDependencies:s,jsDependencies:a,notes:i})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Documentação',
  render: () => renderLinkDocumentation()
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'All',
  render: () => CodePreview({
    title: 'Link - HTML',
    description: 'Exemplo visual com todas as variações do componente Link. Clique em um link para abrir sua documentação específica.',
    meta: linkMeta,
    preview: allLinksHtml,
    code: allLinksHtml,
    language: 'markup',
    cssDependencies: linkCssDependencies,
    jsDependencies: linkJsDependencies,
    notes: linkNotes
  })
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Primary',
  render: () => CodePreview({
    title: 'Link Primary - HTML',
    description: 'Exemplo de HTML para replicar o link primário.',
    meta: linkMeta,
    preview: primaryHtml,
    code: primaryHtml,
    language: 'markup',
    cssDependencies: linkCssDependencies,
    jsDependencies: linkJsDependencies,
    notes: linkNotes
  })
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Secondary',
  render: () => CodePreview({
    title: 'Link Secondary - HTML',
    description: 'Exemplo de HTML para replicar o link secundário.',
    meta: linkMeta,
    preview: secondaryHtml,
    code: secondaryHtml,
    language: 'markup',
    cssDependencies: linkCssDependencies,
    jsDependencies: linkJsDependencies,
    notes: linkNotes
  })
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Neutral',
  render: () => CodePreview({
    title: 'Link Neutral - HTML',
    description: 'Exemplo de HTML para replicar o link neutro.',
    meta: linkMeta,
    preview: neutralHtml,
    code: neutralHtml,
    language: 'markup',
    cssDependencies: linkCssDependencies,
    jsDependencies: linkJsDependencies,
    notes: linkNotes
  })
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'With Icon',
  render: () => CodePreview({
    title: 'Link com ícone - HTML',
    description: 'Exemplo de HTML para replicar o link com ícone à direita.',
    meta: linkMeta,
    preview: withIconHtml,
    code: withIconHtml,
    language: 'markup',
    cssDependencies: linkCssDependencies,
    jsDependencies: linkJsDependencies,
    notes: linkNotes
  })
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Icon Left',
  render: () => CodePreview({
    title: 'Link com ícone à esquerda - HTML',
    description: 'Exemplo de HTML para replicar o link com ícone à esquerda.',
    meta: linkMeta,
    preview: iconLeftHtml,
    code: iconLeftHtml,
    language: 'markup',
    cssDependencies: linkCssDependencies,
    jsDependencies: linkJsDependencies,
    notes: linkNotes
  })
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Small',
  render: () => CodePreview({
    title: 'Link Small - HTML',
    description: 'Exemplo de HTML para replicar o link pequeno.',
    meta: linkMeta,
    preview: smallHtml,
    code: smallHtml,
    language: 'markup',
    cssDependencies: linkCssDependencies,
    jsDependencies: linkJsDependencies,
    notes: linkNotes
  })
}`,...m.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Large',
  render: () => CodePreview({
    title: 'Link Large - HTML',
    description: 'Exemplo de HTML para replicar o link grande.',
    meta: linkMeta,
    preview: largeHtml,
    code: largeHtml,
    language: 'markup',
    cssDependencies: linkCssDependencies,
    jsDependencies: linkJsDependencies,
    notes: linkNotes
  })
}`,...k.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'No Underline',
  render: () => CodePreview({
    title: 'Link sem sublinhado - HTML',
    description: 'Exemplo de HTML para replicar o link sem sublinhado inicial.',
    meta: linkMeta,
    preview: noUnderlineHtml,
    code: noUnderlineHtml,
    language: 'markup',
    cssDependencies: linkCssDependencies,
    jsDependencies: linkJsDependencies,
    notes: linkNotes
  })
}`,...u.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => CodePreview({
    title: 'Link Disabled - HTML',
    description: 'Exemplo de HTML para replicar o link desabilitado.',
    meta: linkMeta,
    preview: disabledHtml,
    code: disabledHtml,
    language: 'markup',
    cssDependencies: linkCssDependencies,
    jsDependencies: linkJsDependencies,
    notes: linkNotes
  })
}`,...L.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Inverse',
  render: () => CodePreview({
    title: 'Link Inverse - HTML',
    description: 'Exemplo de HTML para replicar o link sobre fundo escuro.',
    meta: linkMeta,
    preview: inverseHtml,
    code: inverseHtml,
    language: 'markup',
    cssDependencies: linkCssDependencies,
    jsDependencies: linkJsDependencies,
    notes: linkNotes
  })
}`,...g.parameters?.docs?.source}}};const J=["Documentacao","HTMLLinks","HTMLPrimary","HTMLSecondary","HTMLNeutral","HTMLWithIcon","HTMLIconLeft","HTMLSmall","HTMLLarge","HTMLNoUnderline","HTMLDisabled","HTMLInverse"];export{r as Documentacao,L as HTMLDisabled,p as HTMLIconLeft,g as HTMLInverse,k as HTMLLarge,o as HTMLLinks,l as HTMLNeutral,u as HTMLNoUnderline,d as HTMLPrimary,c as HTMLSecondary,m as HTMLSmall,t as HTMLWithIcon,J as __namedExportsOrder,q as default};
