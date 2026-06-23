import { html } from 'lit';
import './paragrafos.css';

/**
 * Parágrafos do DS-MS — variantes Padrão/Secundário/Destaque.
 * Classe CSS + <p> nativo, fiel à escala de typography.json.
 */
export default {
  title: 'Diretrizes de design/Parágrafos',
  tags: ['autodocs'],
  render: ({ variante, texto }) => html`<p class="ds-paragrafo ${variante}">${texto}</p>`,
  argTypes: {
    variante: { control: { type: 'select' }, options: ['padrao', 'secundario', 'destaque'], description: 'Variante de parágrafo' },
    texto: { control: 'text' },
  },
  args: {
    variante: 'padrao',
    texto: 'Texto institucional corrido, com largura máxima alinhada à diretriz de 60–80 caracteres por linha.',
  },
};

export const Paragrafo = {};
export const Secundario = { args: { variante: 'secundario', texto: 'Atualizado em 23/06/2026 às 09h00.' } };
export const Destaque = { args: { variante: 'destaque', texto: 'Atenção: o prazo de inscrição termina nesta sexta-feira.' } };
