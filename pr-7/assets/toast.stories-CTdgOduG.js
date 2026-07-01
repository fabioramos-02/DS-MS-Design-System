import{C as s}from"./codePreview-Db2E5PIM.js";const h={title:"Feedback/Toast"},e={id:"ds-toast",status:"Estável",version:"1.0.0",category:"Feedback",updated:"2026-06-25"},a=["src/styles/variables.css","src/styles/typography.css","src/styles/spacing.css","src/styles/radius.css","src/styles/shadows.css","src/components/toast/toast.css"],o=["src/components/toast/toast.js"],t=["O Toast depende dos tokens globais do Design System MS.","Use Toast para mensagens temporárias e não bloqueantes.","O Toast deve ser usado para feedback rápido após uma ação do usuário.","Evite usar Toast para mensagens críticas que exigem decisão do usuário.","Quando houver botão de fechar, garanta que ele tenha rótulo acessível."],D=["Exibir feedback rápido após uma ação do usuário.","Confirmar sucesso, erro, atenção ou informação temporária.","Comunicar mensagens não bloqueantes.","Mostrar notificações discretas que não exigem tomada de decisão imediata."],H=["Para mensagens persistentes dentro da página, nesse caso utilize Alert.","Para decisões críticas, nesse caso utilize Modal.","Para validação específica de campos, use mensagens próximas ao campo.","Para conteúdo longo ou instruções detalhadas."],M=["<code>ds-toast--success</code> — operação concluída com sucesso.","<code>ds-toast--info</code> — informação temporária.","<code>ds-toast--warning</code> — aviso ou atenção.","<code>ds-toast--danger</code> — erro ou falha.","<code>ds-toast__close</code> — botão para fechar manualmente."];function l(T){return T.map(_=>`<li>${_}</li>`).join("")}function f(){return`
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Feedback
                    </span>

                    <h1>Toast</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para exibir mensagens temporárias, discretas
                        e não bloqueantes após ações do usuário.
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
                    <ul>${l(D)}</ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>${l(H)}</ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>${l(M)}</ul>
                </article>
            </section>
        </main>
    `}const n={name:"Documentação",render:()=>f()},m=`
<div class="ds-toast ds-toast--success" role="status">
    <div class="ds-toast__content">
        <strong class="ds-toast__title">Sucesso</strong>
        <p class="ds-toast__message">A operação foi realizada com sucesso.</p>
    </div>

    <button class="ds-toast__close" type="button" aria-label="Fechar">
        ×
    </button>
</div>
`,u=`
<div class="ds-toast ds-toast--info" role="status">
    <div class="ds-toast__content">
        <strong class="ds-toast__title">Informação</strong>
        <p class="ds-toast__message">Existe uma nova informação disponível.</p>
    </div>

    <button class="ds-toast__close" type="button" aria-label="Fechar">
        ×
    </button>
</div>
`,g=`
<div class="ds-toast ds-toast--warning" role="status">
    <div class="ds-toast__content">
        <strong class="ds-toast__title">Atenção</strong>
        <p class="ds-toast__message">Verifique as informações antes de continuar.</p>
    </div>

    <button class="ds-toast__close" type="button" aria-label="Fechar">
        ×
    </button>
</div>
`,v=`
<div class="ds-toast ds-toast--danger" role="alert">
    <div class="ds-toast__content">
        <strong class="ds-toast__title">Erro</strong>
        <p class="ds-toast__message">Não foi possível concluir a ação.</p>
    </div>

    <button class="ds-toast__close" type="button" aria-label="Fechar">
        ×
    </button>
</div>
`,b=`
<div style="display: grid; gap: 16px;">
    ${m}
    ${u}
    ${g}
    ${v}
</div>
`,r={name:"All",render:()=>s({title:"Toast - HTML",description:"Exemplo visual com todas as variações do componente Toast.",meta:e,preview:b,cssDependencies:a,jsDependencies:o,notes:t})},c={name:"Success",render:()=>s({title:"Toast Success - HTML",description:"Exemplo de HTML para replicar o Toast de sucesso.",meta:e,preview:m,code:m,language:"markup",cssDependencies:a,jsDependencies:o,notes:t})},d={name:"Info",render:()=>s({title:"Toast Info - HTML",description:"Exemplo de HTML para replicar o Toast informativo.",meta:e,preview:u,code:u,language:"markup",cssDependencies:a,jsDependencies:o,notes:t})},i={name:"Warning",render:()=>s({title:"Toast Warning - HTML",description:"Exemplo de HTML para replicar o Toast de atenção.",meta:e,preview:g,code:g,language:"markup",cssDependencies:a,jsDependencies:o,notes:t})},p={name:"Danger",render:()=>s({title:"Toast Danger - HTML",description:"Exemplo de HTML para replicar o Toast de erro.",meta:e,preview:v,code:v,language:"markup",cssDependencies:a,jsDependencies:o,notes:t})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Documentação',
  render: () => renderToastDocumentation()
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'All',
  render: () => CodePreview({
    title: 'Toast - HTML',
    description: 'Exemplo visual com todas as variações do componente Toast.',
    meta: toastMeta,
    preview: allToastsHtml,
    cssDependencies: toastCssDependencies,
    jsDependencies: toastJsDependencies,
    notes: toastNotes
  })
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Success',
  render: () => CodePreview({
    title: 'Toast Success - HTML',
    description: 'Exemplo de HTML para replicar o Toast de sucesso.',
    meta: toastMeta,
    preview: successHtml,
    code: successHtml,
    language: 'markup',
    cssDependencies: toastCssDependencies,
    jsDependencies: toastJsDependencies,
    notes: toastNotes
  })
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Info',
  render: () => CodePreview({
    title: 'Toast Info - HTML',
    description: 'Exemplo de HTML para replicar o Toast informativo.',
    meta: toastMeta,
    preview: infoHtml,
    code: infoHtml,
    language: 'markup',
    cssDependencies: toastCssDependencies,
    jsDependencies: toastJsDependencies,
    notes: toastNotes
  })
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Warning',
  render: () => CodePreview({
    title: 'Toast Warning - HTML',
    description: 'Exemplo de HTML para replicar o Toast de atenção.',
    meta: toastMeta,
    preview: warningHtml,
    code: warningHtml,
    language: 'markup',
    cssDependencies: toastCssDependencies,
    jsDependencies: toastJsDependencies,
    notes: toastNotes
  })
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Danger',
  render: () => CodePreview({
    title: 'Toast Danger - HTML',
    description: 'Exemplo de HTML para replicar o Toast de erro.',
    meta: toastMeta,
    preview: dangerHtml,
    code: dangerHtml,
    language: 'markup',
    cssDependencies: toastCssDependencies,
    jsDependencies: toastJsDependencies,
    notes: toastNotes
  })
}`,...p.parameters?.docs?.source}}};const x=["Documentacao","HTMLToasts","HTMLSuccess","HTMLInfo","HTMLWarning","HTMLDanger"];export{n as Documentacao,p as HTMLDanger,d as HTMLInfo,c as HTMLSuccess,r as HTMLToasts,i as HTMLWarning,x as __namedExportsOrder,h as default};
