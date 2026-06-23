import { html } from 'lit';
import './citacoes.css';

export default {
  title: 'Diretrizes de design/Citações',
  tags: ['autodocs'],
  render: ({ texto, autor }) => html`
    <blockquote class="ds-citacao">
      <p>${texto}</p>
      ${autor ? html`<cite>— ${autor}</cite>` : ''}
    </blockquote>
  `,
  argTypes: {
    texto: { control: 'text' },
    autor: { control: 'text' },
  },
  args: {
    texto: 'A transformação digital do estado começa pela simplificação do acesso aos serviços públicos.',
    autor: 'SETDIG — Secretaria-Executiva de Transformação Digital',
  },
};

export const Citacao = {};
export const SemAutor = { args: { autor: '' } };
