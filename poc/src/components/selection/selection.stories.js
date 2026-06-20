import { html } from 'lit';
import './selection.css';

export default {
  title: 'Componentes/Selection',
  tags: ['autodocs'],
};

export const Checkbox = {
  render: () => html`
    <div style="display:flex; gap:16px; align-items:center;">
      <label style="display:flex; gap:8px; align-items:center;">
        <input class="checkbox" type="checkbox" /> Não marcado
      </label>
      <label style="display:flex; gap:8px; align-items:center;">
        <input class="checkbox" type="checkbox" checked /> Marcado
      </label>
    </div>
  `,
};

export const Radio = {
  render: () => html`
    <div style="display:flex; gap:16px; align-items:center;">
      <label style="display:flex; gap:8px; align-items:center;">
        <input class="radio" type="radio" name="r" /> Opção A
      </label>
      <label style="display:flex; gap:8px; align-items:center;">
        <input class="radio" type="radio" name="r" checked /> Opção B
      </label>
    </div>
  `,
};

export const Toggle = {
  render: () => html`
    <div style="display:flex; gap:16px; align-items:center;">
      <input class="toggle" type="checkbox" role="switch" aria-label="Notificações desligadas" />
      <input class="toggle" type="checkbox" role="switch" aria-label="Notificações ligadas" checked />
    </div>
  `,
};
