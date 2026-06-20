import { html } from 'lit';
import './search.css';

const icon = html`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
  <path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`;

export default {
  title: 'Componentes/Search',
  tags: ['autodocs'],
};

export const Padrao = {
  render: () => html`
    <form class="search" role="search" style="width:280px">
      ${icon}
      <input type="search" placeholder="Buscar no Design System" aria-label="Buscar" />
    </form>
  `,
};

export const ComValor = {
  render: () => html`
    <form class="search" role="search" style="width:280px">
      ${icon}
      <input type="search" value="header" aria-label="Buscar" />
    </form>
  `,
};
