import{C as n}from"./codePreview-Db2E5PIM.js";const h={title:"Componentes/Breadcrumb"},t=["src/styles/variables.css","src/styles/typography.css","src/styles/spacing.css","src/styles/radius.css","src/components/breadcrumb/breadcrumb.css"],e={id:"ds-breadcrumb",status:"Estável",version:"1.0.0",category:"Components",updated:"2026-06-25"},i=["Nenhum JavaScript obrigatório para uso visual do Breadcrumb."],u=["O Breadcrumb depende dos tokens globais do Design System MS.",'Use <code>nav</code> com <code>aria-label="Breadcrumb"</code> para indicar a navegação estrutural.',"A lista deve usar a classe <code>ds-breadcrumb__list</code>.",'O item atual deve usar <code>aria-current="page"</code>.','O separador deve ser ocultado de leitores de tela com <code>aria-hidden="true"</code>.'],b=["Indicar a localização atual do usuário dentro da estrutura do site.","Facilitar o retorno para páginas superiores da hierarquia.","Apoiar navegação em páginas internas, serviços, notícias ou conteúdos institucionais.","Exibir o caminho percorrido até a página atual."],p=["Como menu principal de navegação.","Em páginas muito rasas, com apenas um nível de navegação.","Para ações de formulário ou botões de fluxo.","Como substituto de paginação ou abas."],_=["<code>ds-breadcrumb</code> — estrutura principal.","<code>ds-breadcrumb__back</code> — botão de voltar.","<code>ds-breadcrumb__list</code> — lista de navegação.","<code>ds-breadcrumb__link</code> — link navegável.","<code>ds-breadcrumb__current</code> — página atual."];function d(l){return l.map(m=>`<li>${m}</li>`).join("")}function v(){return`
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Breadcrumb</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para indicar a posição atual do usuário
                        dentro da estrutura de navegação do site.
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
                        ${d(b)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${d(p)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${d(_)}
                    </ul>
                </article>
            </section>
        </main>
    `}const a={name:"Documentação",render:()=>v()},c=`
<nav class="ds-breadcrumb" aria-label="Breadcrumb">
    <div class="ds-breadcrumb__nav">
        <a class="ds-breadcrumb__back" href="#" aria-label="Voltar">
            <svg class="ds-breadcrumb__back-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 18L9 12L15 6"></path>
            </svg>
        </a>

        <ol class="ds-breadcrumb__list">
            <li class="ds-breadcrumb__item">
                <a class="ds-breadcrumb__link" href="#" aria-label="Início">
                    <svg class="ds-breadcrumb__icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 11L12 4L21 11V21H15V15H9V21H3V11Z"></path>
                    </svg>
                </a>

                <span class="ds-breadcrumb__separator" aria-hidden="true">›</span>
            </li>

            <li class="ds-breadcrumb__item">
                <span class="ds-breadcrumb__current" aria-current="page">
                    Fale Conosco
                </span>
            </li>
        </ol>
    </div>
</nav>
`,r={name:"Default",render:()=>n({title:"Breadcrumb Default - HTML",description:"Exemplo de HTML para replicar o componente Breadcrumb.",meta:e,preview:c,code:c,language:"markup",cssDependencies:t,jsDependencies:i,notes:u})},o=`
<nav class="ds-breadcrumb" aria-label="Breadcrumb">
    <div class="ds-breadcrumb__nav">
        <a class="ds-breadcrumb__back" href="#" aria-label="Voltar">
            <svg class="ds-breadcrumb__back-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 18L9 12L15 6"></path>
            </svg>
        </a>

        <ol class="ds-breadcrumb__list">
            <li class="ds-breadcrumb__item">
                <a class="ds-breadcrumb__link" href="#" aria-label="Início">
                    <svg class="ds-breadcrumb__icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 11L12 4L21 11V21H15V15H9V21H3V11Z"></path>
                    </svg>
                </a>

                <span class="ds-breadcrumb__separator" aria-hidden="true">›</span>
            </li>

            <li class="ds-breadcrumb__item">
                <span class="ds-breadcrumb__current" aria-current="page">
                    Fale Conosco
                </span>
            </li>
        </ol>
    </div>
</nav>
`,s={name:"Mobile",render:()=>n({title:"Breadcrumb Mobile - HTML",description:"Exemplo de HTML para verificar o comportamento responsivo do Breadcrumb.",meta:e,preview:o,code:o,language:"markup",cssDependencies:t,jsDependencies:i,notes:u})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Documentação',
  render: () => renderBreadcrumbDocumentation()
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => CodePreview({
    title: 'Breadcrumb Default - HTML',
    description: 'Exemplo de HTML para replicar o componente Breadcrumb.',
    meta: breadcrumbMeta,
    preview: breadcrumbDefaultHtml,
    code: breadcrumbDefaultHtml,
    language: 'markup',
    cssDependencies: breadcrumbCssDependencies,
    jsDependencies: breadcrumbJsDependencies,
    notes: breadcrumbNotes
  })
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Mobile',
  render: () => CodePreview({
    title: 'Breadcrumb Mobile - HTML',
    description: 'Exemplo de HTML para verificar o comportamento responsivo do Breadcrumb.',
    meta: breadcrumbMeta,
    preview: breadcrumbMobileHtml,
    code: breadcrumbMobileHtml,
    language: 'markup',
    cssDependencies: breadcrumbCssDependencies,
    jsDependencies: breadcrumbJsDependencies,
    notes: breadcrumbNotes
  })
}`,...s.parameters?.docs?.source}}};const D=["Documentacao","HTMLDefault","HTMLMobile"];export{a as Documentacao,r as HTMLDefault,s as HTMLMobile,D as __namedExportsOrder,h as default};
