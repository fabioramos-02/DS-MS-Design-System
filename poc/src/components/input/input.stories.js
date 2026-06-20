import { html } from 'lit';
import './input.css';

/**
 * Input do DS-MS (POC). Texto, textarea e select — modelo "CSS classes + HTML".
 * Fiel ao Property1InputTexto do Figma (espelhado em components.css da raiz).
 */
export default {
  title: 'Componentes/Input',
  tags: ['autodocs'],
};

export const Texto = {
  render: () => html`
    <div class="field" style="max-width:360px">
      <label class="field-label" for="nome">Nome completo</label>
      <input class="field-input" id="nome" type="text" placeholder="Digite seu nome" />
      <span class="field-helper">Como aparece no seu documento.</span>
    </div>
  `,
};

export const ComErro = {
  render: () => html`
    <div class="field" style="max-width:360px">
      <label class="field-label" for="cpf">CPF</label>
      <input class="field-input is-error" id="cpf" type="text" value="123.456" />
      <span class="field-helper is-error">CPF inválido. Verifique os números digitados.</span>
    </div>
  `,
};

export const Desabilitado = {
  render: () => html`
    <div class="field" style="max-width:360px">
      <label class="field-label" for="protocolo">Protocolo</label>
      <input class="field-input" id="protocolo" type="text" value="2026.000123" disabled />
    </div>
  `,
};

export const Textarea = {
  render: () => html`
    <div class="field" style="max-width:480px">
      <label class="field-label" for="msg">Mensagem</label>
      <textarea class="field-textarea" id="msg" placeholder="Descreva sua solicitação"></textarea>
    </div>
  `,
};

export const Select = {
  render: () => html`
    <div class="field" style="max-width:360px">
      <label class="field-label" for="secretaria">Secretaria</label>
      <select class="field-select" id="secretaria">
        <option>SETDIG</option>
        <option>SEFAZ</option>
        <option>SEJUSP</option>
      </select>
    </div>
  `,
};
