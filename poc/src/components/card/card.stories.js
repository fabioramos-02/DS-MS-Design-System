import { html } from 'lit';
import './card.css';

export default { title: 'Componentes/Card', tags: ['autodocs'] };

export const Basico = {
  render: () => html`
    <div class="card" style="max-width:360px">
      <p style="margin:0; font-family:Roboto; font-size:14px;">Conteúdo livre dentro do card — bloco branco com borda 1px e raio 8px.</p>
    </div>
  `,
};

export const Link = {
  render: () => html`
    <a class="card-link" href="#" style="max-width:360px">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
      </svg>
      <span>
        <span class="card-link-title" style="display:block;">Documentação</span>
        <span class="card-link-body">Acesse o guia completo de componentes.</span>
      </span>
    </a>
  `,
};
