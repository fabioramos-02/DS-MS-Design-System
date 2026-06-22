import { html } from 'lit';
import './logo-mask.css';

export default { title: 'Componentes/LogoMask', tags: ['autodocs'] };

export const HorizontalSpec = {
  render: () => html`<div class="ds-logomask ds-logomask-horizontal is-spec">Logo</div>`,
};

export const SquaredSpec = {
  render: () => html`<div class="ds-logomask ds-logomask-squared is-spec">Logo</div>`,
};

export const HorizontalComLogo = {
  render: () => html`
    <div class="ds-logomask ds-logomask-horizontal" style="background:#004f9f; border-radius:4px;">
      <span style="color:#fff; font-weight:700; font-family:'Open Sans',sans-serif;">ms.gov.br</span>
    </div>
  `,
};
