import{C as a}from"./codePreview-Db2E5PIM.js";const D={info:"i",success:"✓",warning:"!",danger:"!",neutral:"i"};function t({title:_="Título do alerta",description:g="Descrição breve da mensagem de alerta.",variant:f="info",size:H="md",icon:h=""}={}){const A=["ds-alert",`ds-alert--${f}`,`ds-alert--${H}`].filter(Boolean).join(" "),L=h||D[f]||D.info;return`
        <div class="${A}" role="status">
            <span class="ds-alert__icon" aria-hidden="true">
                ${L}
            </span>

            <div class="ds-alert__content">
                <h3 class="ds-alert__title">${_}</h3>

                <p class="ds-alert__description">
                    ${g}
                </p>
            </div>
        </div>
    `}const y={title:"Componentes/Alert"},e={id:"ds-alert",status:"Estável",version:"1.0.0",category:"Components",updated:"2026-06-25"},s=["src/styles/variables.css","src/styles/typography.css","src/styles/spacing.css","src/styles/radius.css","src/components/alert/alert.css"],r=["Nenhum JavaScript obrigatório para uso visual do Alert."],n=["O Alert depende dos tokens globais do Design System MS.","A classe base obrigatória é <code>ds-alert</code>.","Use classes modificadoras como <code>ds-alert--info</code>, <code>ds-alert--success</code>, <code>ds-alert--warning</code>, <code>ds-alert--danger</code> e <code>ds-alert--neutral</code>.",'Use <code>role="status"</code> para mensagens informativas não críticas.','Para mensagens críticas ou erros importantes, avalie usar <code>role="alert"</code>.',"O ícone deve ser decorativo quando a mensagem textual já comunica o estado."],T=["Comunicar informações importantes dentro do fluxo da página.","Exibir mensagens de sucesso, atenção, erro ou informação.","Orientar o usuário antes ou depois de uma ação.","Destacar avisos que precisam ser percebidos sem bloquear a interface."],x=["Para mensagens temporárias flutuantes, nesse caso utilize Toast.","Para confirmar uma decisão crítica, nesse caso utilize Modal.","Para textos comuns de conteúdo editorial.","Para validação específica de campo, nesse caso utilize mensagens do formulário."],E=["<code>ds-alert--info</code> — informação.","<code>ds-alert--success</code> — sucesso.","<code>ds-alert--warning</code> — atenção.","<code>ds-alert--danger</code> — erro ou perigo.","<code>ds-alert--neutral</code> — mensagem neutra.","<code>ds-alert--sm</code>, <code>ds-alert--md</code> e <code>ds-alert--lg</code> — tamanhos disponíveis."];function M(_){return _.map(g=>`<li>${g}</li>`).join("")}function w(){return`
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Alert</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para comunicar mensagens importantes,
                        contextuais e persistentes dentro da interface.
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
                        ${M(T)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${M(x)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${M(E)}
                    </ul>
                </article>
            </section>
        </main>
    `}const o={name:"Documentação",render:()=>w()},S=`
<div style="display: grid; gap: 16px;">
    <div class="ds-alert ds-alert--info ds-alert--md" role="status">
        <span class="ds-alert__icon" aria-hidden="true">i</span>

        <div class="ds-alert__content">
            <h3 class="ds-alert__title">Informação</h3>
            <p class="ds-alert__description">Mensagem informativa para orientar o usuário.</p>
        </div>
    </div>

    <div class="ds-alert ds-alert--success ds-alert--md" role="status">
        <span class="ds-alert__icon" aria-hidden="true">✓</span>

        <div class="ds-alert__content">
            <h3 class="ds-alert__title">Sucesso</h3>
            <p class="ds-alert__description">Ação concluída com sucesso.</p>
        </div>
    </div>

    <div class="ds-alert ds-alert--warning ds-alert--md" role="status">
        <span class="ds-alert__icon" aria-hidden="true">!</span>

        <div class="ds-alert__content">
            <h3 class="ds-alert__title">Atenção</h3>
            <p class="ds-alert__description">Verifique as informações antes de continuar.</p>
        </div>
    </div>

    <div class="ds-alert ds-alert--danger ds-alert--md" role="alert">
        <span class="ds-alert__icon" aria-hidden="true">!</span>

        <div class="ds-alert__content">
            <h3 class="ds-alert__title">Erro</h3>
            <p class="ds-alert__description">Não foi possível concluir a ação solicitada.</p>
        </div>
    </div>

    <div class="ds-alert ds-alert--neutral ds-alert--md" role="status">
        <span class="ds-alert__icon" aria-hidden="true">i</span>

        <div class="ds-alert__content">
            <h3 class="ds-alert__title">Aviso</h3>
            <p class="ds-alert__description">Mensagem neutra para informação complementar.</p>
        </div>
    </div>
</div>
`,i={name:"All",render:()=>a({title:"Alert - HTML",description:"Exemplo visual com todas as variações do componente Alert.",meta:e,preview:S,cssDependencies:s,jsDependencies:r,notes:n})},C=`
<div class="ds-alert ds-alert--info ds-alert--md" role="status">
    <span class="ds-alert__icon" aria-hidden="true">i</span>

    <div class="ds-alert__content">
        <h3 class="ds-alert__title">Informação</h3>
        <p class="ds-alert__description">Mensagem informativa para orientar o usuário.</p>
    </div>
</div>
`,d={name:"Info",render:()=>a({title:"Alert Info - HTML",description:"Exemplo de HTML para replicar o alerta informativo.",meta:e,preview:t({title:"Informação",description:"Mensagem informativa para orientar o usuário.",variant:"info"}),code:C,language:"markup",cssDependencies:s,jsDependencies:r,notes:n})},N=`
<div class="ds-alert ds-alert--success ds-alert--md" role="status">
    <span class="ds-alert__icon" aria-hidden="true">✓</span>

    <div class="ds-alert__content">
        <h3 class="ds-alert__title">Sucesso</h3>
        <p class="ds-alert__description">Ação concluída com sucesso.</p>
    </div>
</div>
`,l={name:"Success",render:()=>a({title:"Alert Success - HTML",description:"Exemplo de HTML para replicar o alerta de sucesso.",meta:e,preview:t({title:"Sucesso",description:"Ação concluída com sucesso.",variant:"success"}),code:N,language:"markup",cssDependencies:s,jsDependencies:r,notes:n})},j=`
<div class="ds-alert ds-alert--warning ds-alert--md" role="status">
    <span class="ds-alert__icon" aria-hidden="true">!</span>

    <div class="ds-alert__content">
        <h3 class="ds-alert__title">Atenção</h3>
        <p class="ds-alert__description">Verifique as informações antes de continuar.</p>
    </div>
</div>
`,c={name:"Warning",render:()=>a({title:"Alert Warning - HTML",description:"Exemplo de HTML para replicar o alerta de atenção.",meta:e,preview:t({title:"Atenção",description:"Verifique as informações antes de continuar.",variant:"warning"}),code:j,language:"markup",cssDependencies:s,jsDependencies:r,notes:n})},k=`
<div class="ds-alert ds-alert--danger ds-alert--md" role="alert">
    <span class="ds-alert__icon" aria-hidden="true">!</span>

    <div class="ds-alert__content">
        <h3 class="ds-alert__title">Erro</h3>
        <p class="ds-alert__description">Não foi possível concluir a ação solicitada.</p>
    </div>
</div>
`,p={name:"Danger",render:()=>a({title:"Alert Danger - HTML",description:"Exemplo de HTML para replicar o alerta de erro ou perigo.",meta:e,preview:t({title:"Erro",description:"Não foi possível concluir a ação solicitada.",variant:"danger"}),code:k,language:"markup",cssDependencies:s,jsDependencies:r,notes:n})},q=`
<div class="ds-alert ds-alert--neutral ds-alert--md" role="status">
    <span class="ds-alert__icon" aria-hidden="true">i</span>

    <div class="ds-alert__content">
        <h3 class="ds-alert__title">Aviso</h3>
        <p class="ds-alert__description">Mensagem neutra para informação complementar.</p>
    </div>
</div>
`,m={name:"Neutral",render:()=>a({title:"Alert Neutral - HTML",description:"Exemplo de HTML para replicar o alerta neutro.",meta:e,preview:t({title:"Aviso",description:"Mensagem neutra para informação complementar.",variant:"neutral"}),code:q,language:"markup",cssDependencies:s,jsDependencies:r,notes:n})},P=`
<div class="ds-alert ds-alert--info ds-alert--sm" role="status">
    <span class="ds-alert__icon" aria-hidden="true">i</span>

    <div class="ds-alert__content">
        <h3 class="ds-alert__title">Alerta pequeno</h3>
        <p class="ds-alert__description">Mensagem em tamanho reduzido.</p>
    </div>
</div>
`,u={name:"Small",render:()=>a({title:"Alert Small - HTML",description:"Exemplo de HTML para replicar o alerta pequeno.",meta:e,preview:t({title:"Alerta pequeno",description:"Mensagem em tamanho reduzido.",variant:"info",size:"sm"}),code:P,language:"markup",cssDependencies:s,jsDependencies:r,notes:n})},$=`
<div class="ds-alert ds-alert--info ds-alert--lg" role="status">
    <span class="ds-alert__icon" aria-hidden="true">i</span>

    <div class="ds-alert__content">
        <h3 class="ds-alert__title">Alerta grande</h3>
        <p class="ds-alert__description">Mensagem em tamanho maior para maior destaque.</p>
    </div>
</div>
`,v={name:"Large",render:()=>a({title:"Alert Large - HTML",description:"Exemplo de HTML para replicar o alerta grande.",meta:e,preview:t({title:"Alerta grande",description:"Mensagem em tamanho maior para maior destaque.",variant:"info",size:"lg"}),code:$,language:"markup",cssDependencies:s,jsDependencies:r,notes:n})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Documentação',
  render: () => renderAlertDocumentation()
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'All',
  render: () => CodePreview({
    title: 'Alert - HTML',
    description: 'Exemplo visual com todas as variações do componente Alert.',
    meta: alertMeta,
    preview: allAlertsHtml,
    cssDependencies: alertCssDependencies,
    jsDependencies: alertJsDependencies,
    notes: alertNotes
  })
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Info',
  render: () => CodePreview({
    title: 'Alert Info - HTML',
    description: 'Exemplo de HTML para replicar o alerta informativo.',
    meta: alertMeta,
    preview: Alert({
      title: 'Informação',
      description: 'Mensagem informativa para orientar o usuário.',
      variant: 'info'
    }),
    code: infoHtml,
    language: 'markup',
    cssDependencies: alertCssDependencies,
    jsDependencies: alertJsDependencies,
    notes: alertNotes
  })
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Success',
  render: () => CodePreview({
    title: 'Alert Success - HTML',
    description: 'Exemplo de HTML para replicar o alerta de sucesso.',
    meta: alertMeta,
    preview: Alert({
      title: 'Sucesso',
      description: 'Ação concluída com sucesso.',
      variant: 'success'
    }),
    code: successHtml,
    language: 'markup',
    cssDependencies: alertCssDependencies,
    jsDependencies: alertJsDependencies,
    notes: alertNotes
  })
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Warning',
  render: () => CodePreview({
    title: 'Alert Warning - HTML',
    description: 'Exemplo de HTML para replicar o alerta de atenção.',
    meta: alertMeta,
    preview: Alert({
      title: 'Atenção',
      description: 'Verifique as informações antes de continuar.',
      variant: 'warning'
    }),
    code: warningHtml,
    language: 'markup',
    cssDependencies: alertCssDependencies,
    jsDependencies: alertJsDependencies,
    notes: alertNotes
  })
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Danger',
  render: () => CodePreview({
    title: 'Alert Danger - HTML',
    description: 'Exemplo de HTML para replicar o alerta de erro ou perigo.',
    meta: alertMeta,
    preview: Alert({
      title: 'Erro',
      description: 'Não foi possível concluir a ação solicitada.',
      variant: 'danger'
    }),
    code: dangerHtml,
    language: 'markup',
    cssDependencies: alertCssDependencies,
    jsDependencies: alertJsDependencies,
    notes: alertNotes
  })
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Neutral',
  render: () => CodePreview({
    title: 'Alert Neutral - HTML',
    description: 'Exemplo de HTML para replicar o alerta neutro.',
    meta: alertMeta,
    preview: Alert({
      title: 'Aviso',
      description: 'Mensagem neutra para informação complementar.',
      variant: 'neutral'
    }),
    code: neutralHtml,
    language: 'markup',
    cssDependencies: alertCssDependencies,
    jsDependencies: alertJsDependencies,
    notes: alertNotes
  })
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Small',
  render: () => CodePreview({
    title: 'Alert Small - HTML',
    description: 'Exemplo de HTML para replicar o alerta pequeno.',
    meta: alertMeta,
    preview: Alert({
      title: 'Alerta pequeno',
      description: 'Mensagem em tamanho reduzido.',
      variant: 'info',
      size: 'sm'
    }),
    code: smallHtml,
    language: 'markup',
    cssDependencies: alertCssDependencies,
    jsDependencies: alertJsDependencies,
    notes: alertNotes
  })
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Large',
  render: () => CodePreview({
    title: 'Alert Large - HTML',
    description: 'Exemplo de HTML para replicar o alerta grande.',
    meta: alertMeta,
    preview: Alert({
      title: 'Alerta grande',
      description: 'Mensagem em tamanho maior para maior destaque.',
      variant: 'info',
      size: 'lg'
    }),
    code: largeHtml,
    language: 'markup',
    cssDependencies: alertCssDependencies,
    jsDependencies: alertJsDependencies,
    notes: alertNotes
  })
}`,...v.parameters?.docs?.source}}};const b=["Documentacao","HTMLAlerts","HTMLInfo","HTMLSuccess","HTMLWarning","HTMLDanger","HTMLNeutral","HTMLSmall","HTMLLarge"];export{o as Documentacao,i as HTMLAlerts,p as HTMLDanger,d as HTMLInfo,v as HTMLLarge,m as HTMLNeutral,u as HTMLSmall,l as HTMLSuccess,c as HTMLWarning,b as __namedExportsOrder,y as default};
