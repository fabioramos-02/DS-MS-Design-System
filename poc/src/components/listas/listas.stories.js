import { html } from 'lit';
import './listas.css';

const ITENS = ['Documento de identidade', 'Comprovante de residência', 'Comprovante de matrícula'];

export default {
  title: 'Diretrizes de design/Listas',
  tags: ['autodocs'],
  render: () => html`
    <ul class="ds-lista">
      ${ITENS.map((i) => html`<li>${i}</li>`)}
    </ul>
  `,
};

export const NaoOrdenada = {};

export const Ordenada = {
  render: () => html`
    <ol class="ds-lista">
      ${ITENS.map((i) => html`<li>${i}</li>`)}
    </ol>
  `,
};

export const ComIcone = {
  render: () => html`
    <ul class="ds-lista com-icone">
      ${ITENS.map((i) => html`<li>${i}</li>`)}
    </ul>
  `,
};

/** Variante compacta — usada dentro de cards, accordions e modais. */
export const Compacta = {
  render: () => html`
    <ul class="ds-lista compacta">
      ${ITENS.map((i) => html`<li>${i}</li>`)}
    </ul>
  `,
};
