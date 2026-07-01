import{C as s}from"./codePreview-Db2E5PIM.js";/* empty css              */const h={title:"Componentes/Select"},a=["src/styles/variables.css","src/styles/typography.css","src/styles/spacing.css","src/styles/radius.css","src/components/input/input.css","src/components/select/select.css"],o=["Nenhum JavaScript obrigatório para uso visual do Select."],e={id:"ds-select",status:"Estável",version:"1.0.0",category:"Components",updated:"2026-06-25"},t=["O Select depende dos tokens globais do Design System MS.","Use <code>ds-field</code> para agrupar label, campo e mensagens auxiliares.","Use <code>ds-select</code> no elemento <code>select</code>.","Associe o label ao select usando <code>for</code> e <code>id</code>.",'Para erro, use <code>aria-invalid="true"</code> e relacione a mensagem com <code>aria-describedby</code>.'],S=["Permitir a escolha de uma opção dentro de uma lista predefinida.","Reduzir o espaço visual quando há várias opções disponíveis.","Coletar informações em formulários, filtros ou cadastros.","Selecionar cidade, serviço, categoria, assunto ou outros valores objetivos."],L=["Para entrada livre de texto, nesse caso utilize Input.","Para múltiplas escolhas simultâneas, nesse caso utilize Checkbox.","Para escolher uma única opção visível entre poucas alternativas, avalie usar Radio.","Para listas muito longas com busca, avalie usar Autocomplete."],f=["<code>Default</code> — select simples.","<code>Com label</code> — select associado a um rótulo.","<code>Com ajuda</code> — select com texto auxiliar.","<code>Erro</code> — select inválido com mensagem relacionada.","<code>Desabilitado</code> — select indisponível para interação."];function p(H){return H.map(g=>`<li>${g}</li>`).join("")}function M(){return`
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Select</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para permitir que o usuário escolha uma opção
                        dentro de uma lista predefinida em formulários e filtros.
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
                        ${p(S)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${p(L)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${p(f)}
                    </ul>
                </article>
            </section>
        </main>
    `}const c={name:"Documentação",render:()=>M()},m=`
<select class="ds-select" name="cidade">
    <option value="">Selecione uma opção</option>
    <option value="campo-grande">Campo Grande</option>
    <option value="dourados">Dourados</option>
    <option value="tres-lagoas">Três Lagoas</option>
</select>
`,n={name:"Default",render:()=>s({title:"Select Default - HTML",description:"Exemplo de HTML para replicar o Select padrão.",meta:e,preview:m,code:m,language:"markup",cssDependencies:a,jsDependencies:o,notes:t})},u=`
<div class="ds-field">
    <label class="ds-field__label" for="select-cidade">
        Cidade
    </label>

    <select class="ds-select" id="select-cidade" name="cidade">
        <option value="">Selecione uma cidade</option>
        <option value="campo-grande">Campo Grande</option>
        <option value="dourados">Dourados</option>
        <option value="tres-lagoas">Três Lagoas</option>
    </select>
</div>
`,l={name:"Com label",render:()=>s({title:"Select com Label - HTML",description:"Exemplo de HTML para replicar o Select com label.",meta:e,preview:u,code:u,language:"markup",cssDependencies:a,jsDependencies:o,notes:t})},v=`
<div class="ds-field">
    <label class="ds-field__label" for="select-servico">
        Serviço
    </label>

    <select
        class="ds-select"
        id="select-servico"
        name="servico"
        aria-describedby="select-servico-help"
    >
        <option value="">Selecione um serviço</option>
        <option value="documentos">Documentos</option>
        <option value="saude">Saúde</option>
        <option value="educacao">Educação</option>
    </select>

    <p class="ds-field__help" id="select-servico-help">
        Escolha o serviço desejado para continuar.
    </p>
</div>
`,r={name:"Com ajuda",render:()=>s({title:"Select com Ajuda - HTML",description:"Exemplo de HTML para replicar o Select com texto auxiliar.",meta:e,preview:v,code:v,language:"markup",cssDependencies:a,jsDependencies:o,notes:t})},D=`
<div class="ds-field is-error">
    <label class="ds-field__label" for="select-assunto">
        Assunto <span class="ds-field__required" aria-hidden="true">*</span>
    </label>

    <select
        class="ds-select"
        id="select-assunto"
        name="assunto"
        aria-invalid="true"
        aria-describedby="select-assunto-error"
        required
    >
        <option value="">Selecione um assunto</option>
        <option value="duvida">Dúvida</option>
        <option value="solicitacao">Solicitação</option>
        <option value="reclamacao">Reclamação</option>
    </select>

    <p class="ds-field__error" id="select-assunto-error">
        Selecione uma opção para continuar.
    </p>
</div>
`,i={name:"Erro",render:()=>s({title:"Select com Erro - HTML",description:"Exemplo de HTML para replicar o Select em estado de erro.",meta:e,preview:D,code:D,language:"markup",cssDependencies:a,jsDependencies:o,notes:t})},b=`
<div class="ds-field">
    <label class="ds-field__label" for="select-disabled">
        Campo desabilitado
    </label>

    <select class="ds-select" id="select-disabled" name="disabled" disabled>
        <option value="">Informação indisponível</option>
    </select>
</div>
`,d={name:"Desabilitado",render:()=>s({title:"Select Desabilitado - HTML",description:"Exemplo de HTML para replicar o Select desabilitado.",meta:e,preview:b,code:b,language:"markup",cssDependencies:a,jsDependencies:o,notes:t})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Documentação',
  render: () => renderSelectDocumentation()
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => CodePreview({
    title: 'Select Default - HTML',
    description: 'Exemplo de HTML para replicar o Select padrão.',
    meta: selectMeta,
    preview: selectDefaultHtml,
    code: selectDefaultHtml,
    language: 'markup',
    cssDependencies: selectCssDependencies,
    jsDependencies: selectJsDependencies,
    notes: selectNotes
  })
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Com label',
  render: () => CodePreview({
    title: 'Select com Label - HTML',
    description: 'Exemplo de HTML para replicar o Select com label.',
    meta: selectMeta,
    preview: selectWithLabelHtml,
    code: selectWithLabelHtml,
    language: 'markup',
    cssDependencies: selectCssDependencies,
    jsDependencies: selectJsDependencies,
    notes: selectNotes
  })
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Com ajuda',
  render: () => CodePreview({
    title: 'Select com Ajuda - HTML',
    description: 'Exemplo de HTML para replicar o Select com texto auxiliar.',
    meta: selectMeta,
    preview: selectWithHelpHtml,
    code: selectWithHelpHtml,
    language: 'markup',
    cssDependencies: selectCssDependencies,
    jsDependencies: selectJsDependencies,
    notes: selectNotes
  })
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Erro',
  render: () => CodePreview({
    title: 'Select com Erro - HTML',
    description: 'Exemplo de HTML para replicar o Select em estado de erro.',
    meta: selectMeta,
    preview: selectErrorHtml,
    code: selectErrorHtml,
    language: 'markup',
    cssDependencies: selectCssDependencies,
    jsDependencies: selectJsDependencies,
    notes: selectNotes
  })
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Desabilitado',
  render: () => CodePreview({
    title: 'Select Desabilitado - HTML',
    description: 'Exemplo de HTML para replicar o Select desabilitado.',
    meta: selectMeta,
    preview: selectDisabledHtml,
    code: selectDisabledHtml,
    language: 'markup',
    cssDependencies: selectCssDependencies,
    jsDependencies: selectJsDependencies,
    notes: selectNotes
  })
}`,...d.parameters?.docs?.source}}};const T=["Documentacao","HTMLDefault","HTMLComLabel","HTMLComAjuda","HTMLErro","HTMLDesabilitado"];export{c as Documentacao,r as HTMLComAjuda,l as HTMLComLabel,n as HTMLDefault,d as HTMLDesabilitado,i as HTMLErro,T as __namedExportsOrder,h as default};
