import{C as n}from"./codePreview-Db2E5PIM.js";/* empty css              */const I={title:"Componentes/Input"},a=["src/styles/variables.css","src/styles/typography.css","src/styles/spacing.css","src/styles/radius.css","src/components/input/input.css"],s=["Nenhum JavaScript obrigatório para uso visual do Input."],e={id:"ds-input",status:"Estável",version:"1.0.0",category:"Components",updated:"2026-06-25"},t=["O Input depende dos tokens globais do Design System MS.","Use <code>ds-field</code> para agrupar label, campo e mensagens auxiliares.","Use <code>ds-input</code> no elemento <code>input</code>.","Associe o label ao input usando <code>for</code> e <code>id</code>.",'Para erro, use <code>aria-invalid="true"</code> e relacione a mensagem com <code>aria-describedby</code>.',"Campos obrigatórios devem indicar visualmente a obrigatoriedade e manter informação acessível."],M=["Coletar dados curtos em formulários.","Permitir entrada de texto simples, e-mail, CPF, telefone ou outros valores objetivos.","Capturar informações em páginas de cadastro, contato, filtros ou solicitações.","Exibir campos com label, ajuda, erro, estado desabilitado ou somente leitura."],x=["Para textos longos ou descrições extensas, nesse caso utilize Textarea.","Para seleção entre opções predefinidas, nesse caso utilize Select, Checkbox ou Radio.","Para executar ações, nesse caso utilize Button.","Para busca com ícone e comportamento específico, nesse caso utilize Search."],C=["<code>Default</code> — campo simples.","<code>Com label</code> — campo associado a um rótulo.","<code>Com ajuda</code> — campo com texto auxiliar.","<code>Erro</code> — campo inválido com mensagem relacionada.","<code>Desabilitado</code> — campo indisponível para edição.","<code>Somente leitura</code> — campo visível, mas não editável."];function u(g){return g.map(L=>`<li>${L}</li>`).join("")}function T(){return`
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Input</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para coletar dados curtos do usuário em formulários,
                        filtros, cadastros e páginas de atendimento.
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
                        ${u(M)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${u(x)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${u(C)}
                    </ul>
                </article>
            </section>
        </main>
    `}const o={name:"Documentação",render:()=>T()},m=`
<input
    class="ds-input"
    type="text"
    name="nome"
    placeholder="Digite seu nome"
>
`,i={name:"Default",render:()=>n({title:"Input Default - HTML",description:"Exemplo de HTML para replicar o campo de texto padrão.",meta:e,preview:m,code:m,language:"markup",cssDependencies:a,jsDependencies:s,notes:t})},D=`
<div class="ds-field">
    <label class="ds-field__label" for="input-nome">
        Nome completo
    </label>

    <input
        class="ds-input"
        id="input-nome"
        type="text"
        name="nome"
        placeholder="Digite seu nome completo"
    >
</div>
`,r={name:"Com label",render:()=>n({title:"Input com Label - HTML",description:"Exemplo de HTML para replicar o Input com label.",meta:e,preview:D,code:D,language:"markup",cssDependencies:a,jsDependencies:s,notes:t})},b=`
<div class="ds-field">
    <label class="ds-field__label" for="input-email">
        E-mail
    </label>

    <input
        class="ds-input"
        id="input-email"
        type="email"
        name="email"
        placeholder="nome@exemplo.com"
        aria-describedby="input-email-help"
    >

    <p class="ds-field__help" id="input-email-help">
        Informe um e-mail válido para contato.
    </p>
</div>
`,d={name:"Com ajuda",render:()=>n({title:"Input com Ajuda - HTML",description:"Exemplo de HTML para replicar o Input com texto auxiliar.",meta:e,preview:b,code:b,language:"markup",cssDependencies:a,jsDependencies:s,notes:t})},v=`
<div class="ds-field is-error">
    <label class="ds-field__label" for="input-cpf">
        CPF <span class="ds-field__required" aria-hidden="true">*</span>
    </label>

    <input
        class="ds-input"
        id="input-cpf"
        type="text"
        name="cpf"
        placeholder="000.000.000-00"
        aria-invalid="true"
        aria-describedby="input-cpf-error"
        required
    >

    <p class="ds-field__error" id="input-cpf-error">
        Informe um CPF válido.
    </p>
</div>
`,p={name:"Erro",render:()=>n({title:"Input com Erro - HTML",description:"Exemplo de HTML para replicar o Input em estado de erro.",meta:e,preview:v,code:v,language:"markup",cssDependencies:a,jsDependencies:s,notes:t})},H=`
<div class="ds-field">
    <label class="ds-field__label" for="input-disabled">
        Campo desabilitado
    </label>

    <input
        class="ds-input"
        id="input-disabled"
        type="text"
        name="disabled"
        value="Informação indisponível"
        disabled
    >
</div>
`,c={name:"Desabilitado",render:()=>n({title:"Input Desabilitado - HTML",description:"Exemplo de HTML para replicar o Input desabilitado.",meta:e,preview:H,code:H,language:"markup",cssDependencies:a,jsDependencies:s,notes:t})},f=`
<div class="ds-field">
    <label class="ds-field__label" for="input-readonly">
        Somente leitura
    </label>

    <input
        class="ds-input"
        id="input-readonly"
        type="text"
        name="readonly"
        value="Mato Grosso do Sul"
        readonly
    >
</div>
`,l={name:"Somente leitura",render:()=>n({title:"Input Somente Leitura - HTML",description:"Exemplo de HTML para replicar o Input somente leitura.",meta:e,preview:f,code:f,language:"markup",cssDependencies:a,jsDependencies:s,notes:t})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Documentação',
  render: () => renderInputDocumentation()
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => CodePreview({
    title: 'Input Default - HTML',
    description: 'Exemplo de HTML para replicar o campo de texto padrão.',
    meta: inputMeta,
    preview: inputDefaultHtml,
    code: inputDefaultHtml,
    language: 'markup',
    cssDependencies: inputCssDependencies,
    jsDependencies: inputJsDependencies,
    notes: inputNotes
  })
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Com label',
  render: () => CodePreview({
    title: 'Input com Label - HTML',
    description: 'Exemplo de HTML para replicar o Input com label.',
    meta: inputMeta,
    preview: inputWithLabelHtml,
    code: inputWithLabelHtml,
    language: 'markup',
    cssDependencies: inputCssDependencies,
    jsDependencies: inputJsDependencies,
    notes: inputNotes
  })
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Com ajuda',
  render: () => CodePreview({
    title: 'Input com Ajuda - HTML',
    description: 'Exemplo de HTML para replicar o Input com texto auxiliar.',
    meta: inputMeta,
    preview: inputWithHelpHtml,
    code: inputWithHelpHtml,
    language: 'markup',
    cssDependencies: inputCssDependencies,
    jsDependencies: inputJsDependencies,
    notes: inputNotes
  })
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Erro',
  render: () => CodePreview({
    title: 'Input com Erro - HTML',
    description: 'Exemplo de HTML para replicar o Input em estado de erro.',
    meta: inputMeta,
    preview: inputErrorHtml,
    code: inputErrorHtml,
    language: 'markup',
    cssDependencies: inputCssDependencies,
    jsDependencies: inputJsDependencies,
    notes: inputNotes
  })
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Desabilitado',
  render: () => CodePreview({
    title: 'Input Desabilitado - HTML',
    description: 'Exemplo de HTML para replicar o Input desabilitado.',
    meta: inputMeta,
    preview: inputDisabledHtml,
    code: inputDisabledHtml,
    language: 'markup',
    cssDependencies: inputCssDependencies,
    jsDependencies: inputJsDependencies,
    notes: inputNotes
  })
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Somente leitura',
  render: () => CodePreview({
    title: 'Input Somente Leitura - HTML',
    description: 'Exemplo de HTML para replicar o Input somente leitura.',
    meta: inputMeta,
    preview: inputReadonlyHtml,
    code: inputReadonlyHtml,
    language: 'markup',
    cssDependencies: inputCssDependencies,
    jsDependencies: inputJsDependencies,
    notes: inputNotes
  })
}`,...l.parameters?.docs?.source}}};const E=["Documentacao","HTMLDefault","HTMLComLabel","HTMLComAjuda","HTMLErro","HTMLDesabilitado","HTMLSomenteLeitura"];export{o as Documentacao,d as HTMLComAjuda,r as HTMLComLabel,i as HTMLDefault,c as HTMLDesabilitado,p as HTMLErro,l as HTMLSomenteLeitura,E as __namedExportsOrder,I as default};
