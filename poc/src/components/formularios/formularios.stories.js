import { html } from 'lit';
import '../input/input.css';
import '../label/label.css';
import '../button/button.css';
import './formularios.css';

/**
 * Formulários do DS-MS — padrão de COMPOSIÇÃO. Reusa Input/Label/Button já
 * existentes; aqui só documenta grid, seções e bloco de ações.
 */
export default {
  title: 'Diretrizes de design/Formulários',
  tags: ['autodocs'],
};

export const SecaoComGrid = {
  render: () => html`
    <fieldset class="ds-form-section" style="border:0; max-width:640px;">
      <legend>Dados pessoais</legend>
      <div class="ds-form-grid">
        <div class="field">
          <label class="field-label" for="f-nome">Nome completo <span class="ds-form-required" aria-hidden="true">*</span></label>
          <input class="field-input" id="f-nome" type="text" placeholder="Digite seu nome" />
        </div>
        <div class="field">
          <label class="field-label" for="f-cpf">CPF <span class="ds-form-required" aria-hidden="true">*</span></label>
          <input class="field-input" id="f-cpf" type="text" placeholder="000.000.000-00" />
        </div>
      </div>
    </fieldset>
  `,
};

export const CampoComErro = {
  render: () => html`
    <div class="field" style="max-width:360px">
      <label class="field-label" for="f-email">E-mail</label>
      <input class="field-input is-error" id="f-email" type="text" value="invalido@" />
      <span class="ds-form-help is-error">E-mail inválido. Verifique o formato digitado.</span>
    </div>
  `,
};

export const CampoComSucesso = {
  render: () => html`
    <div class="field" style="max-width:360px">
      <label class="field-label" for="f-protocolo">Protocolo</label>
      <input class="field-input" id="f-protocolo" type="text" value="2026.000123" />
      <span class="ds-form-help is-success">Protocolo validado com sucesso.</span>
    </div>
  `,
};

/** Bloco de ações — primária à direita, cancelar/secundárias à esquerda. */
export const BlocoDeAcoes = {
  render: () => html`
    <div class="ds-form-actions" style="max-width:640px;">
      <div class="secondary-actions">
        <button class="btn btn-neutral btn-tertiary btn-md">Cancelar</button>
      </div>
      <div class="primary-actions">
        <button class="btn btn-neutral btn-secondary btn-md">Salvar rascunho</button>
        <button class="btn btn-primary-palette btn-primary btn-md">Continuar</button>
      </div>
    </div>
  `,
};
