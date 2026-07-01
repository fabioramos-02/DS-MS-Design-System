import{C as a}from"./codePreview-Db2E5PIM.js";const _={title:"Componentes/Badge"},e={id:"ds-badge",status:"Estável",version:"1.0.0",category:"Components",updated:"2026-06-25"},s=["src/styles/variables.css","src/styles/typography.css","src/styles/spacing.css","src/styles/radius.css","src/components/badge/badge.css"],n=["Nenhum JavaScript obrigatório para uso visual do Badge."],d=["O Badge depende dos tokens globais do Design System MS.","A classe base obrigatória é <code>ds-badge</code>.","Use classes modificadoras como <code>ds-badge--primary</code>, <code>ds-badge--success</code> e <code>ds-badge--danger</code>.","Use <code>ds-badge--sm</code>, <code>ds-badge--md</code> ou <code>ds-badge--lg</code> para controlar o tamanho.","Use <code>ds-badge--pill</code> para formato arredondado."],S=["Destacar status, categorias ou classificações curtas.","Exibir estados como ativo, concluído, pendente, novo ou indisponível.","Complementar títulos, cards, listas ou tabelas com informação contextual.","Indicar uma informação visual de baixo peso sem criar uma ação."],C=["Para executar ações, nesse caso utilize Button.","Para mensagens longas ou avisos importantes, nesse caso utilize Alert.","Para informações temporárias flutuantes, nesse caso utilize Toast.","Para textos extensos ou descrições completas."],E=["<code>ds-badge--primary</code> — destaque principal.","<code>ds-badge--secondary</code> — destaque secundário.","<code>ds-badge--success</code> — sucesso ou concluído.","<code>ds-badge--warning</code> — atenção ou pendência.","<code>ds-badge--danger</code> — erro, risco ou indisponibilidade.","<code>ds-badge--info</code> — informação.","<code>ds-badge--neutral</code> — informação neutra.","<code>ds-badge--outline</code> — variação com borda.","<code>ds-badge--pill</code> — formato arredondado."];function H(B){return B.map(P=>`<li>${P}</li>`).join("")}function j(){return`
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Badge</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para destacar status, categorias, classificações
                        e pequenas informações contextuais dentro da interface.
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
                        ${H(C)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${H(E)}
                    </ul>
                </article>
            </section>
        </main>
    `}const r={name:"Documentação",render:()=>j()},N=`
<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
    <span class="ds-badge ds-badge--primary ds-badge--md">Primary</span>
    <span class="ds-badge ds-badge--secondary ds-badge--md">Secondary</span>
    <span class="ds-badge ds-badge--success ds-badge--md">Success</span>
    <span class="ds-badge ds-badge--warning ds-badge--md">Warning</span>
    <span class="ds-badge ds-badge--danger ds-badge--md">Danger</span>
    <span class="ds-badge ds-badge--info ds-badge--md">Info</span>
    <span class="ds-badge ds-badge--neutral ds-badge--md">Neutral</span>
    <span class="ds-badge ds-badge--outline ds-badge--md">Outline</span>
    <span class="ds-badge ds-badge--primary ds-badge--md ds-badge--pill">Pill</span>
</div>
`,o={name:"All",render:()=>a({title:"Badge - HTML",description:"Exemplo visual com todas as variações do componente Badge.",meta:e,preview:N,cssDependencies:s,jsDependencies:n,notes:d})},D='<span class="ds-badge ds-badge--primary ds-badge--md">Primary</span>',c={name:"Primary",render:()=>a({title:"Badge Primary - HTML",description:"Exemplo de HTML para replicar o badge primário.",meta:e,preview:D,code:D,language:"markup",cssDependencies:s,jsDependencies:n,notes:d})},M='<span class="ds-badge ds-badge--secondary ds-badge--md">Secondary</span>',t={name:"Secondary",render:()=>a({title:"Badge Secondary - HTML",description:"Exemplo de HTML para replicar o badge secundário.",meta:e,preview:M,code:M,language:"markup",cssDependencies:s,jsDependencies:n,notes:d})},v='<span class="ds-badge ds-badge--success ds-badge--md">Success</span>',i={name:"Success",render:()=>a({title:"Badge Success - HTML",description:"Exemplo de HTML para replicar o badge de sucesso.",meta:e,preview:v,code:v,language:"markup",cssDependencies:s,jsDependencies:n,notes:d})},L='<span class="ds-badge ds-badge--warning ds-badge--md">Warning</span>',p={name:"Warning",render:()=>a({title:"Badge Warning - HTML",description:"Exemplo de HTML para replicar o badge de alerta.",meta:e,preview:L,code:L,language:"markup",cssDependencies:s,jsDependencies:n,notes:d})},T='<span class="ds-badge ds-badge--danger ds-badge--md">Danger</span>',l={name:"Danger",render:()=>a({title:"Badge Danger - HTML",description:"Exemplo de HTML para replicar o badge de erro ou perigo.",meta:e,preview:T,code:T,language:"markup",cssDependencies:s,jsDependencies:n,notes:d})},y='<span class="ds-badge ds-badge--info ds-badge--md">Info</span>',g={name:"Info",render:()=>a({title:"Badge Info - HTML",description:"Exemplo de HTML para replicar o badge informativo.",meta:e,preview:y,code:y,language:"markup",cssDependencies:s,jsDependencies:n,notes:d})},w='<span class="ds-badge ds-badge--neutral ds-badge--md">Neutral</span>',m={name:"Neutral",render:()=>a({title:"Badge Neutral - HTML",description:"Exemplo de HTML para replicar o badge neutro.",meta:e,preview:w,code:w,language:"markup",cssDependencies:s,jsDependencies:n,notes:d})},x='<span class="ds-badge ds-badge--outline ds-badge--md">Outline</span>',u={name:"Outline",render:()=>a({title:"Badge Outline - HTML",description:"Exemplo de HTML para replicar o badge outline.",meta:e,preview:x,code:x,language:"markup",cssDependencies:s,jsDependencies:n,notes:d})},f='<span class="ds-badge ds-badge--primary ds-badge--md ds-badge--pill">Pill</span>',b={name:"Pill",render:()=>a({title:"Badge Pill - HTML",description:"Exemplo de HTML para replicar o badge em formato pill.",meta:e,preview:f,code:f,language:"markup",cssDependencies:s,jsDependencies:n,notes:d})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Documentação',
  render: () => renderBadgeDocumentation()
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'All',
  render: () => CodePreview({
    title: 'Badge - HTML',
    description: 'Exemplo visual com todas as variações do componente Badge.',
    meta: badgeMeta,
    preview: allBadgesHtml,
    cssDependencies: badgeCssDependencies,
    jsDependencies: badgeJsDependencies,
    notes: badgeNotes
  })
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Primary',
  render: () => CodePreview({
    title: 'Badge Primary - HTML',
    description: 'Exemplo de HTML para replicar o badge primário.',
    meta: badgeMeta,
    preview: primaryHtml,
    code: primaryHtml,
    language: 'markup',
    cssDependencies: badgeCssDependencies,
    jsDependencies: badgeJsDependencies,
    notes: badgeNotes
  })
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Secondary',
  render: () => CodePreview({
    title: 'Badge Secondary - HTML',
    description: 'Exemplo de HTML para replicar o badge secundário.',
    meta: badgeMeta,
    preview: secondaryHtml,
    code: secondaryHtml,
    language: 'markup',
    cssDependencies: badgeCssDependencies,
    jsDependencies: badgeJsDependencies,
    notes: badgeNotes
  })
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Success',
  render: () => CodePreview({
    title: 'Badge Success - HTML',
    description: 'Exemplo de HTML para replicar o badge de sucesso.',
    meta: badgeMeta,
    preview: successHtml,
    code: successHtml,
    language: 'markup',
    cssDependencies: badgeCssDependencies,
    jsDependencies: badgeJsDependencies,
    notes: badgeNotes
  })
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Warning',
  render: () => CodePreview({
    title: 'Badge Warning - HTML',
    description: 'Exemplo de HTML para replicar o badge de alerta.',
    meta: badgeMeta,
    preview: warningHtml,
    code: warningHtml,
    language: 'markup',
    cssDependencies: badgeCssDependencies,
    jsDependencies: badgeJsDependencies,
    notes: badgeNotes
  })
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Danger',
  render: () => CodePreview({
    title: 'Badge Danger - HTML',
    description: 'Exemplo de HTML para replicar o badge de erro ou perigo.',
    meta: badgeMeta,
    preview: dangerHtml,
    code: dangerHtml,
    language: 'markup',
    cssDependencies: badgeCssDependencies,
    jsDependencies: badgeJsDependencies,
    notes: badgeNotes
  })
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Info',
  render: () => CodePreview({
    title: 'Badge Info - HTML',
    description: 'Exemplo de HTML para replicar o badge informativo.',
    meta: badgeMeta,
    preview: infoHtml,
    code: infoHtml,
    language: 'markup',
    cssDependencies: badgeCssDependencies,
    jsDependencies: badgeJsDependencies,
    notes: badgeNotes
  })
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Neutral',
  render: () => CodePreview({
    title: 'Badge Neutral - HTML',
    description: 'Exemplo de HTML para replicar o badge neutro.',
    meta: badgeMeta,
    preview: neutralHtml,
    code: neutralHtml,
    language: 'markup',
    cssDependencies: badgeCssDependencies,
    jsDependencies: badgeJsDependencies,
    notes: badgeNotes
  })
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Outline',
  render: () => CodePreview({
    title: 'Badge Outline - HTML',
    description: 'Exemplo de HTML para replicar o badge outline.',
    meta: badgeMeta,
    preview: outlineHtml,
    code: outlineHtml,
    language: 'markup',
    cssDependencies: badgeCssDependencies,
    jsDependencies: badgeJsDependencies,
    notes: badgeNotes
  })
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Pill',
  render: () => CodePreview({
    title: 'Badge Pill - HTML',
    description: 'Exemplo de HTML para replicar o badge em formato pill.',
    meta: badgeMeta,
    preview: pillHtml,
    code: pillHtml,
    language: 'markup',
    cssDependencies: badgeCssDependencies,
    jsDependencies: badgeJsDependencies,
    notes: badgeNotes
  })
}`,...b.parameters?.docs?.source}}};const h=["Documentacao","HTMLBadges","HTMLPrimary","HTMLSecondary","HTMLSuccess","HTMLWarning","HTMLDanger","HTMLInfo","HTMLNeutral","HTMLOutline","HTMLPill"];export{r as Documentacao,o as HTMLBadges,l as HTMLDanger,g as HTMLInfo,m as HTMLNeutral,u as HTMLOutline,b as HTMLPill,c as HTMLPrimary,t as HTMLSecondary,i as HTMLSuccess,p as HTMLWarning,h as __namedExportsOrder,_ as default};
