import{C as n}from"./codePreview-Db2E5PIM.js";function t({items:M=[{title:"O que é o programa?",content:"Este programa reúne informações, serviços e orientações para facilitar o acesso do cidadão."},{title:"Quem pode participar?",content:"A participação depende dos critérios definidos pelo órgão responsável pelo serviço."},{title:"Como acessar?",content:"O acesso pode ser feito pelo portal oficial, presencialmente ou pelos canais de atendimento informados."}],allowMultiple:A=!1,firstOpen:L=!1,variant:O="default"}={}){const l=`ds-accordion-${Math.random().toString(36).substring(2,9)}`,T=["ds-accordion",O!=="default"?`ds-accordion--${O}`:""].filter(Boolean).join(" ");setTimeout(()=>{const i=document.getElementById(l);if(!i)return;const a=i.querySelectorAll(".ds-accordion__button");a.forEach(o=>{o.addEventListener("click",()=>{const m=o.getAttribute("aria-controls"),d=document.getElementById(m),x=o.getAttribute("aria-expanded")==="true";A||a.forEach(H=>{const C=H.getAttribute("aria-controls"),E=document.getElementById(C);H.setAttribute("aria-expanded","false"),E&&E.classList.remove("is-open")}),o.setAttribute("aria-expanded",String(!x)),d&&d.classList.toggle("is-open",!x)})})},0);const k=M.map((i,a)=>{const o=`${l}-button-${a}`,m=`${l}-panel-${a}`,d=L&&a===0;return`
            <div class="ds-accordion__item">
                <h3 class="ds-accordion__heading">
                    <button
                        id="${o}"
                        class="ds-accordion__button"
                        type="button"
                        aria-expanded="${d?"true":"false"}"
                        aria-controls="${m}"
                    >
                        <span>${i.title}</span>
                        <span class="ds-accordion__icon" aria-hidden="true">+</span>
                    </button>
                </h3>

                <div
                    id="${m}"
                    class="ds-accordion__panel ${d?"is-open":""}"
                    role="region"
                    aria-labelledby="${o}"
                >
                    <p>${i.content}</p>
                </div>
            </div>
        `}).join("");return`
        <div id="${l}" class="${T}">
            ${k}
        </div>
    `}const V={title:"Componentes/Accordion"},p=[{title:"O que é o programa?",content:"Este programa reúne informações, serviços e orientações para facilitar o acesso do cidadão."},{title:"Quem pode participar?",content:"A participação depende dos critérios definidos pelo órgão responsável pelo serviço."},{title:"Como acessar?",content:"O acesso pode ser feito pelo portal oficial, presencialmente ou pelos canais de atendimento informados."}],s=["src/styles/variables.css","src/styles/typography.css","src/styles/spacing.css","src/styles/radius.css","src/components/accordion/accordion.css"],e={id:"ds-accordion",status:"Estável",version:"1.0.0",category:"Components",updated:"2026-06-25"},c=["src/components/accordion/accordion.js"],r=["O Accordion depende dos tokens globais do Design System MS.","A classe base obrigatória é <code>ds-accordion</code>.","Cada item deve usar <code>ds-accordion__item</code>.","O botão de abertura deve usar <code>ds-accordion__button</code>.","Use <code>aria-expanded</code> para indicar se o item está aberto.","Use <code>aria-controls</code> para vincular o botão ao painel correspondente.","O painel de conteúdo deve usar <code>ds-accordion__panel</code>.",'Para abrir um painel inicialmente, adicione a classe <code>is-open</code> e use <code>aria-expanded="true"</code>.'],w=["Organizar conteúdos longos em seções expansíveis.","Exibir perguntas frequentes, orientações ou detalhes complementares.","Reduzir a altura visual de páginas com muito conteúdo.","Permitir que o usuário escolha quais informações deseja visualizar."],$=["Para conteúdos essenciais que devem estar sempre visíveis.","Para navegação principal do site.","Para ações simples, nesse caso utilize Button ou Link.","Para conteúdos muito curtos que não precisam ser ocultados."],B=["<code>ds-accordion</code> — variação padrão.","<code>firstOpen</code> — primeiro item inicia aberto.","<code>allowMultiple</code> — permite múltiplos itens abertos.","<code>ds-accordion--borderless</code> — remove a borda externa.","<code>ds-accordion--compact</code> — reduz espaçamentos e altura dos itens."],j=["Comportamento padrão: apenas um item permanece aberto por vez.","Ao abrir um item, os demais são fechados.","O JavaScript controla a troca de <code>aria-expanded</code> e da classe <code>is-open</code>."],q=["O primeiro item inicia aberto.",'O botão inicial usa <code>aria-expanded="true"</code>.',"O painel inicial recebe a classe <code>is-open</code>."],S=["Permite que vários itens fiquem abertos ao mesmo tempo.","Cada item funciona de forma independente.","Esse comportamento depende da configuração JavaScript <code>allowMultiple</code>."],P=["Remove a borda externa do Accordion.","Mantém separação entre os itens.","Use a classe modificadora <code>ds-accordion--borderless</code>."],J=["Reduz altura, padding e tamanho de texto.","Indicado para áreas com pouco espaço.","Use a classe modificadora <code>ds-accordion--compact</code>."];function D(M){return M.map(A=>`<li>${A}</li>`).join("")}function z(){return`
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Accordion</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para organizar conteúdos expansíveis em seções,
                        permitindo que o usuário abra e feche informações conforme sua necessidade.
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
                        ${D(w)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${D($)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${D(B)}
                    </ul>
                </article>
            </section>
        </main>
    `}const u={name:"Documentação",render:()=>z()},I=`
<div style="display: grid; gap: 32px;">
    <a
        class="ds-link ds-link--md ds-link--primary"
        href="/?path=/story/components-accordion--html-default"
        target="_top"
    >
        <span>Accordion Default</span>
        <span class="ds-link__icon" aria-hidden="true">→</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--primary"
        href="/?path=/story/components-accordion--html-first-open"
        target="_top"
    >
        <span>Accordion First Open</span>
        <span class="ds-link__icon" aria-hidden="true">→</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--primary"
        href="/?path=/story/components-accordion--html-multiple-open"
        target="_top"
    >
        <span>Accordion Multiple Open</span>
        <span class="ds-link__icon" aria-hidden="true">→</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--primary"
        href="/?path=/story/components-accordion--html-borderless"
        target="_top"
    >
        <span>Accordion Borderless</span>
        <span class="ds-link__icon" aria-hidden="true">→</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--primary"
        href="/?path=/story/components-accordion--html-compact"
        target="_top"
    >
        <span>Accordion Compact</span>
        <span class="ds-link__icon" aria-hidden="true">→</span>
    </a>
</div>
`,v={name:"All",render:()=>n({title:"Accordion - HTML",description:"Exemplo visual com todas as variações do componente Accordion. Clique em uma opção para abrir sua documentação específica.",meta:e,preview:I,cssDependencies:s,jsDependencies:c,notes:r})},y=`
<div class="ds-accordion">
    <div class="ds-accordion__item">
        <h3 class="ds-accordion__heading">
            <button
                id="accordion-button-1"
                class="ds-accordion__button"
                type="button"
                aria-expanded="false"
                aria-controls="accordion-panel-1"
            >
                <span>O que é o programa?</span>
                <span class="ds-accordion__icon" aria-hidden="true">+</span>
            </button>
        </h3>

        <div
            id="accordion-panel-1"
            class="ds-accordion__panel"
            role="region"
            aria-labelledby="accordion-button-1"
        >
            <p>Este programa reúne informações, serviços e orientações para facilitar o acesso do cidadão.</p>
        </div>
    </div>

    <div class="ds-accordion__item">
        <h3 class="ds-accordion__heading">
            <button
                id="accordion-button-2"
                class="ds-accordion__button"
                type="button"
                aria-expanded="false"
                aria-controls="accordion-panel-2"
            >
                <span>Quem pode participar?</span>
                <span class="ds-accordion__icon" aria-hidden="true">+</span>
            </button>
        </h3>

        <div
            id="accordion-panel-2"
            class="ds-accordion__panel"
            role="region"
            aria-labelledby="accordion-button-2"
        >
            <p>A participação depende dos critérios definidos pelo órgão responsável pelo serviço.</p>
        </div>
    </div>
</div>
`,f={name:"Default",render:()=>n({title:"Accordion Default - HTML",description:"Exemplo de HTML para replicar o Accordion padrão.",meta:e,preview:t({items:p,allowMultiple:!1,firstOpen:!1,variant:"default"}),code:y,language:"markup",cssDependencies:s,jsDependencies:c,notes:[...r,...j]})},F=`
<div class="ds-accordion">
    <div class="ds-accordion__item">
        <h3 class="ds-accordion__heading">
            <button
                id="accordion-button-1"
                class="ds-accordion__button"
                type="button"
                aria-expanded="true"
                aria-controls="accordion-panel-1"
            >
                <span>O que é o programa?</span>
                <span class="ds-accordion__icon" aria-hidden="true">+</span>
            </button>
        </h3>

        <div
            id="accordion-panel-1"
            class="ds-accordion__panel is-open"
            role="region"
            aria-labelledby="accordion-button-1"
        >
            <p>Este programa reúne informações, serviços e orientações para facilitar o acesso do cidadão.</p>
        </div>
    </div>

    <div class="ds-accordion__item">
        <h3 class="ds-accordion__heading">
            <button
                id="accordion-button-2"
                class="ds-accordion__button"
                type="button"
                aria-expanded="false"
                aria-controls="accordion-panel-2"
            >
                <span>Quem pode participar?</span>
                <span class="ds-accordion__icon" aria-hidden="true">+</span>
            </button>
        </h3>

        <div
            id="accordion-panel-2"
            class="ds-accordion__panel"
            role="region"
            aria-labelledby="accordion-button-2"
        >
            <p>A participação depende dos critérios definidos pelo órgão responsável pelo serviço.</p>
        </div>
    </div>
</div>
`,_={name:"First Open",render:()=>n({title:"Accordion First Open - HTML",description:"Exemplo de HTML para replicar o Accordion iniciando com o primeiro item aberto.",meta:e,preview:t({items:p,allowMultiple:!1,firstOpen:!0,variant:"default"}),code:F,language:"markup",cssDependencies:s,jsDependencies:c,notes:[...r,...q]})},N=y,b={name:"Multiple Open",render:()=>n({title:"Accordion Multiple Open - HTML",description:"Exemplo de HTML para Accordion com múltiplos itens abertos. O comportamento depende da configuração JavaScript.",meta:e,preview:t({items:p,allowMultiple:!0,firstOpen:!1,variant:"default"}),code:N,language:"markup",cssDependencies:s,jsDependencies:c,notes:[...r,...S]})},Q=`
<div class="ds-accordion ds-accordion--borderless">
    <div class="ds-accordion__item">
        <h3 class="ds-accordion__heading">
            <button
                id="accordion-borderless-button-1"
                class="ds-accordion__button"
                type="button"
                aria-expanded="false"
                aria-controls="accordion-borderless-panel-1"
            >
                <span>O que é o programa?</span>
                <span class="ds-accordion__icon" aria-hidden="true">+</span>
            </button>
        </h3>

        <div
            id="accordion-borderless-panel-1"
            class="ds-accordion__panel"
            role="region"
            aria-labelledby="accordion-borderless-button-1"
        >
            <p>Este programa reúne informações, serviços e orientações para facilitar o acesso do cidadão.</p>
        </div>
    </div>
</div>
`,g={name:"Borderless",render:()=>n({title:"Accordion Borderless - HTML",description:"Exemplo de HTML para replicar o Accordion sem borda externa.",meta:e,preview:t({items:p,allowMultiple:!1,firstOpen:!1,variant:"borderless"}),code:Q,language:"markup",cssDependencies:s,jsDependencies:c,notes:[...r,...P]})},U=`
<div class="ds-accordion ds-accordion--compact">
    <div class="ds-accordion__item">
        <h3 class="ds-accordion__heading">
            <button
                id="accordion-compact-button-1"
                class="ds-accordion__button"
                type="button"
                aria-expanded="false"
                aria-controls="accordion-compact-panel-1"
            >
                <span>O que é o programa?</span>
                <span class="ds-accordion__icon" aria-hidden="true">+</span>
            </button>
        </h3>

        <div
            id="accordion-compact-panel-1"
            class="ds-accordion__panel"
            role="region"
            aria-labelledby="accordion-compact-button-1"
        >
            <p>Este programa reúne informações, serviços e orientações para facilitar o acesso do cidadão.</p>
        </div>
    </div>
</div>
`,h={name:"Compact",render:()=>n({title:"Accordion Compact - HTML",description:"Exemplo de HTML para replicar o Accordion compacto.",meta:e,preview:t({items:p,allowMultiple:!1,firstOpen:!1,variant:"compact"}),code:U,language:"markup",cssDependencies:s,jsDependencies:c,notes:[...r,...J]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Documentação',
  render: () => renderAccordionDocumentation()
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'All',
  render: () => CodePreview({
    title: 'Accordion - HTML',
    description: 'Exemplo visual com todas as variações do componente Accordion. Clique em uma opção para abrir sua documentação específica.',
    meta: accordionMeta,
    preview: allAccordionHtml,
    cssDependencies: accordionCssDependencies,
    jsDependencies: accordionJsDependencies,
    notes: accordionNotes
  })
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => CodePreview({
    title: 'Accordion Default - HTML',
    description: 'Exemplo de HTML para replicar o Accordion padrão.',
    meta: accordionMeta,
    preview: Accordion({
      items,
      allowMultiple: false,
      firstOpen: false,
      variant: 'default'
    }),
    code: defaultHtml,
    language: 'markup',
    cssDependencies: accordionCssDependencies,
    jsDependencies: accordionJsDependencies,
    notes: [...accordionNotes, ...defaultBehavior]
  })
}`,...f.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'First Open',
  render: () => CodePreview({
    title: 'Accordion First Open - HTML',
    description: 'Exemplo de HTML para replicar o Accordion iniciando com o primeiro item aberto.',
    meta: accordionMeta,
    preview: Accordion({
      items,
      allowMultiple: false,
      firstOpen: true,
      variant: 'default'
    }),
    code: firstOpenHtml,
    language: 'markup',
    cssDependencies: accordionCssDependencies,
    jsDependencies: accordionJsDependencies,
    notes: [...accordionNotes, ...firstOpenBehavior]
  })
}`,..._.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Multiple Open',
  render: () => CodePreview({
    title: 'Accordion Multiple Open - HTML',
    description: 'Exemplo de HTML para Accordion com múltiplos itens abertos. O comportamento depende da configuração JavaScript.',
    meta: accordionMeta,
    preview: Accordion({
      items,
      allowMultiple: true,
      firstOpen: false,
      variant: 'default'
    }),
    code: multipleOpenHtml,
    language: 'markup',
    cssDependencies: accordionCssDependencies,
    jsDependencies: accordionJsDependencies,
    notes: [...accordionNotes, ...multipleBehavior]
  })
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Borderless',
  render: () => CodePreview({
    title: 'Accordion Borderless - HTML',
    description: 'Exemplo de HTML para replicar o Accordion sem borda externa.',
    meta: accordionMeta,
    preview: Accordion({
      items,
      allowMultiple: false,
      firstOpen: false,
      variant: 'borderless'
    }),
    code: borderlessHtml,
    language: 'markup',
    cssDependencies: accordionCssDependencies,
    jsDependencies: accordionJsDependencies,
    notes: [...accordionNotes, ...borderlessBehavior]
  })
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Compact',
  render: () => CodePreview({
    title: 'Accordion Compact - HTML',
    description: 'Exemplo de HTML para replicar o Accordion compacto.',
    meta: accordionMeta,
    preview: Accordion({
      items,
      allowMultiple: false,
      firstOpen: false,
      variant: 'compact'
    }),
    code: compactHtml,
    language: 'markup',
    cssDependencies: accordionCssDependencies,
    jsDependencies: accordionJsDependencies,
    notes: [...accordionNotes, ...compactBehavior]
  })
}`,...h.parameters?.docs?.source}}};const W=["Documentacao","HTMLAccordions","HTMLDefault","HTMLFirstOpen","HTMLMultipleOpen","HTMLBorderless","HTMLCompact"];export{u as Documentacao,v as HTMLAccordions,g as HTMLBorderless,h as HTMLCompact,f as HTMLDefault,_ as HTMLFirstOpen,b as HTMLMultipleOpen,W as __namedExportsOrder,V as default};
