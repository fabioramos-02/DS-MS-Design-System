import{C as _}from"./codePreview-Db2E5PIM.js";function D(s){const e=s instanceof HTMLElement?s:document.querySelector(s);if(!e)return null;const d=e.querySelector(".ds-dropdown__trigger"),f=e.querySelector(".ds-dropdown__menu"),n=Array.from(e.querySelectorAll(".ds-dropdown__link"));if(!d||!f)return null;function a(){e.classList.add("is-open"),d.setAttribute("aria-expanded","true")}function r(){e.classList.remove("is-open"),d.setAttribute("aria-expanded","false")}function u(){e.classList.contains("is-open")?r():a()}return d.addEventListener("click",o=>{o.preventDefault(),u()}),document.addEventListener("click",o=>{e.contains(o.target)||r()}),e.addEventListener("keydown",o=>{o.key==="Escape"&&(r(),d.focus()),o.key==="ArrowDown"&&(o.preventDefault(),a(),n[0]?.focus()),o.key==="ArrowUp"&&(o.preventDefault(),a(),n[n.length-1]?.focus())}),n.forEach((o,m)=>{o.addEventListener("keydown",t=>{t.key==="ArrowDown"&&(t.preventDefault(),n[(m+1)%n.length]?.focus()),t.key==="ArrowUp"&&(t.preventDefault(),n[(m-1+n.length)%n.length]?.focus())})}),r(),{open:a,close:r,toggle:u}}function v(){return Array.from(document.querySelectorAll(".ds-dropdown")).map(s=>D(s))}const S={title:"Componentes/Dropdown"},g=["src/styles/variables.css","src/styles/typography.css","src/styles/spacing.css","src/styles/radius.css","src/styles/shadows.css","src/components/dropdown/dropdown.css"],h=["src/components/dropdown/dropdown.js"],l={id:"ds-dropdown",status:"Estável",version:"1.0.0",category:"Components",updated:"2026-06-25"},y=["O Dropdown depende dos tokens globais do Design System MS.","A classe principal obrigatória é <code>ds-dropdown</code>.","O botão deve usar <code>aria-expanded</code> e <code>aria-controls</code>.",'O menu deve usar <code>role="menu"</code>.','Cada item interativo deve usar <code>role="menuitem"</code>.',"O componente fecha com a tecla <code>Esc</code>."],k=["Agrupar ações ou links relacionados em uma lista expansível.","Exibir opções secundárias sem ocupar espaço permanente na tela.","Criar menus contextuais simples.","Organizar atalhos, filtros ou opções de navegação compactas."],x=["Para navegação principal complexa, nesse caso utilize Menu ou Mega Menu.","Para listas muito longas ou com busca interna.","Para seleção de valores em formulários, nesse caso utilize Select.","Para conteúdo importante que precisa estar sempre visível."],b=["<code>Default</code> — dropdown padrão com botão e menu.","<code>aria-expanded</code> — indica se o menu está aberto.","<code>aria-controls</code> — relaciona o botão ao menu.","<code>Esc</code> — fecha o menu.","<code>ArrowDown</code> e <code>ArrowUp</code> — navegação entre itens."];function p(s){return s.map(e=>`<li>${e}</li>`).join("")}function L(){return`
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Dropdown</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para exibir uma lista de ações, links ou opções
                        relacionadas a partir de um botão acionador.
                    </p>
                </div>

                <dl class="ds-component-doc__meta">
                    <div>
                        <dt>Status</dt>
                        <dd>${l.status}</dd>
                    </div>

                    <div>
                        <dt>Versão</dt>
                        <dd>${l.version}</dd>
                    </div>

                    <div>
                        <dt>Atualizado</dt>
                        <dd>${l.updated}</dd>
                    </div>
                </dl>
            </header>

            <section class="ds-component-doc__grid">
                <article class="ds-component-doc__card">
                    <h2>Quando usar</h2>
                    <ul>
                        ${p(k)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${p(x)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${p(b)}
                    </ul>
                </article>
            </section>
        </main>
    `}const c={name:"Documentação",render:()=>L()},w=`
<div class="ds-dropdown">
    <button
        class="ds-dropdown__trigger"
        type="button"
        aria-expanded="false"
        aria-controls="dropdown-menu-example"
    >
        Sistemas

        <svg class="ds-dropdown__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 9L12 15L18 9"></path>
        </svg>
    </button>

    <ul class="ds-dropdown__menu" id="dropdown-menu-example" role="menu">
        <li class="ds-dropdown__item" role="none">
            <a class="ds-dropdown__link" href="#" role="menuitem">Sistema 1</a>
        </li>

        <li class="ds-dropdown__item" role="none">
            <a class="ds-dropdown__link" href="#" role="menuitem">Sistema 2</a>
        </li>

        <li class="ds-dropdown__item" role="none">
            <a class="ds-dropdown__link" href="#" role="menuitem">Sistema 3</a>
        </li>
    </ul>
</div>
`;function A(){setTimeout(()=>{v()},0)}const i={name:"Default",render:()=>(A(),_({title:"Dropdown Default - HTML",description:"Exemplo de HTML para replicar o componente Dropdown.",meta:l,preview:w,code:w,language:"markup",cssDependencies:g,jsDependencies:h,notes:y}))};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Documentação',
  render: () => renderDropdownDocumentation()
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => {
    initPreview();
    return CodePreview({
      title: 'Dropdown Default - HTML',
      description: 'Exemplo de HTML para replicar o componente Dropdown.',
      meta: dropdownMeta,
      preview: dropdownHtml,
      code: dropdownHtml,
      language: 'markup',
      cssDependencies: dropdownCssDependencies,
      jsDependencies: dropdownJsDependencies,
      notes: dropdownNotes
    });
  }
}`,...i.parameters?.docs?.source}}};const M=["Documentacao","HTMLDefault"];export{c as Documentacao,i as HTMLDefault,M as __namedExportsOrder,S as default};
