import { html } from 'lit';
import './tag.css';

export default { title: 'Componentes/Tag', tags: ['autodocs'] };

export const Variantes = {
  render: () => html`
    <div style="display:flex; gap:8px;">
      <span class="tag">Padrão</span>
      <span class="tag tag-success">Sucesso</span>
      <span class="tag tag-error">Erro</span>
      <span class="tag tag-warning">Alerta</span>
      <span class="tag tag-info">Info</span>
    </div>
  `,
};
