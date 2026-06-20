import { html } from 'lit';
import './link.css';

export default { title: 'Componentes/Link', tags: ['autodocs'] };

export const Padrao = {
  render: () => html`<a class="link" href="#">Saiba mais sobre o Design System</a>`,
};

export const ComIcone = {
  render: () => html`
    <a class="link" href="#">
      Acessar documentação
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 19L19 5M19 5H9M19 5v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  `,
};
