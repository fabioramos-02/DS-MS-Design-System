import{C as n}from"./codePreview-Db2E5PIM.js";/* empty css               */const x={title:"Componentes/Search"},t=["src/styles/variables.css","src/styles/typography.css","src/styles/spacing.css","src/styles/radius.css","src/components/search/search.css"],e={id:"ds-search",status:"Estável",version:"1.0.0",category:"Components",updated:"2026-06-25"},d=["Nenhum JavaScript obrigatório para uso visual do Search."],i=["O Search depende dos tokens globais do Design System MS.","A classe principal obrigatória é <code>ds-search</code>.","O campo de busca deve usar a classe <code>ds-search__input</code>.","O botão da lupa deve usar a classe <code>ds-search__button</code>.",'Use <code>role="search"</code> no formulário para melhorar a acessibilidade.',"Use <code>aria-label</code> no botão para indicar a ação de pesquisa."],_=["Permitir que o usuário pesquise conteúdos dentro do site ou sistema.","Buscar notícias, serviços, páginas ou informações institucionais.","Criar campo de busca global ou busca contextual em uma seção.","Quando o usuário precisa localizar conteúdo por palavra-chave."],g=["Para filtros estruturados com opções fixas, nesse caso utilize Select, Checkbox ou Radio.","Para entrada comum de texto em formulários, nesse caso utilize Input.","Para navegação entre páginas, nesse caso utilize Link ou Breadcrumb.","Para ações sem consulta textual."],D=["<code>Default</code> — campo de busca padrão.","<code>Focus</code> — estado visual quando o campo está em foco.","<code>Com valor</code> — campo preenchido.","<code>ds-search__input</code> — campo de busca.","<code>ds-search__button</code> — botão de envio da busca.","<code>ds-search__icon</code> — ícone de lupa."];function l(v){return v.map(b=>`<li>${b}</li>`).join("")}function f(){return`
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Search</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para permitir a busca de conteúdos,
                        serviços, páginas ou informações por palavra-chave.
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
                        ${l(_)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${l(g)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${l(D)}
                    </ul>
                </article>
            </section>
        </main>
    `}const a={name:"Documentação",render:()=>f()},p=`
<form class="ds-search" role="search" action="#" method="get">
    <input
        class="ds-search__input"
        type="search"
        name="s"
        placeholder="Pesquisar..."
        aria-label="Pesquisar"
    >

    <button class="ds-search__button" type="submit" aria-label="Pesquisar">
        <svg
            class="ds-search__icon"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
        >
            <circle cx="11" cy="11" r="7"></circle>
            <path d="M16.5 16.5L21 21"></path>
        </svg>
    </button>
</form>
`,s={name:"Default",render:()=>n({title:"Search Default - HTML",description:"Exemplo de HTML para replicar o campo de busca padrão.",meta:e,preview:p,code:p,language:"markup",cssDependencies:t,jsDependencies:d,notes:i})},u=`
<form class="ds-search is-focused" role="search" action="#" method="get">
    <input
        class="ds-search__input"
        type="search"
        name="s"
        placeholder="Pesquisar..."
        aria-label="Pesquisar"
    >

    <button class="ds-search__button" type="submit" aria-label="Pesquisar">
        <svg
            class="ds-search__icon"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
        >
            <circle cx="11" cy="11" r="7"></circle>
            <path d="M16.5 16.5L21 21"></path>
        </svg>
    </button>
</form>
`,c={name:"Focus",render:()=>n({title:"Search Focus - HTML",description:"Exemplo de HTML para replicar o campo de busca em estado de foco.",meta:e,preview:u,code:u,language:"markup",cssDependencies:t,jsDependencies:d,notes:i})},m=`
<form class="ds-search" role="search" action="#" method="get">
    <input
        class="ds-search__input"
        type="search"
        name="s"
        value="Mato Grosso do Sul"
        placeholder="Pesquisar..."
        aria-label="Pesquisar"
    >

    <button class="ds-search__button" type="submit" aria-label="Pesquisar">
        <svg
            class="ds-search__icon"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
        >
            <circle cx="11" cy="11" r="7"></circle>
            <path d="M16.5 16.5L21 21"></path>
        </svg>
    </button>
</form>
`,o={name:"Com valor",render:()=>n({title:"Search com Valor - HTML",description:"Exemplo de HTML para replicar o campo de busca preenchido.",meta:e,preview:m,code:m,language:"markup",cssDependencies:t,jsDependencies:d,notes:i})},h=`
<div style="display: flex; flex-direction: column; gap: 32px; max-width: 560px;">
    ${p}
    ${u}
    ${m}
</div>
`,r={name:"All",render:()=>n({title:"Search - HTML",description:"Exemplo de HTML para replicar todas as variações do componente Search em uma página.",meta:e,preview:h,code:h,language:"markup",cssDependencies:t,jsDependencies:d,notes:i})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Documentação',
  render: () => renderSearchDocumentation()
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => CodePreview({
    title: 'Search Default - HTML',
    description: 'Exemplo de HTML para replicar o campo de busca padrão.',
    meta: searchMeta,
    preview: searchDefaultHtml,
    code: searchDefaultHtml,
    language: 'markup',
    cssDependencies: searchCssDependencies,
    jsDependencies: searchJsDependencies,
    notes: searchNotes
  })
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Focus',
  render: () => CodePreview({
    title: 'Search Focus - HTML',
    description: 'Exemplo de HTML para replicar o campo de busca em estado de foco.',
    meta: searchMeta,
    preview: searchFocusHtml,
    code: searchFocusHtml,
    language: 'markup',
    cssDependencies: searchCssDependencies,
    jsDependencies: searchJsDependencies,
    notes: searchNotes
  })
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Com valor',
  render: () => CodePreview({
    title: 'Search com Valor - HTML',
    description: 'Exemplo de HTML para replicar o campo de busca preenchido.',
    meta: searchMeta,
    preview: searchWithValueHtml,
    code: searchWithValueHtml,
    language: 'markup',
    cssDependencies: searchCssDependencies,
    jsDependencies: searchJsDependencies,
    notes: searchNotes
  })
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'All',
  render: () => CodePreview({
    title: 'Search - HTML',
    description: 'Exemplo de HTML para replicar todas as variações do componente Search em uma página.',
    meta: searchMeta,
    preview: searchAllHtml,
    code: searchAllHtml,
    language: 'markup',
    cssDependencies: searchCssDependencies,
    jsDependencies: searchJsDependencies,
    notes: searchNotes
  })
}`,...r.parameters?.docs?.source}}};const L=["Documentacao","HTMLDefault","HTMLFocus","HTMLComValor","HTMLSearch"];export{a as Documentacao,o as HTMLComValor,s as HTMLDefault,c as HTMLFocus,r as HTMLSearch,L as __namedExportsOrder,x as default};
