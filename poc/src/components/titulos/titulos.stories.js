import { html as staticHtml, unsafeStatic } from 'lit/static-html.js';
import './titulos.css';

/**
 * Títulos (H1–H6) do DS-MS — hierarquia semântica de organização visual.
 * Classe CSS + tag HTML nativa (h1..h6), fiel à escala de typography.json.
 * Usa lit/static-html porque lit-html não permite nome de tag dinâmico em bindings comuns.
 */
const NIVEIS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export default {
  title: 'Diretrizes de design/Títulos',
  tags: ['autodocs'],
  render: ({ nivel, texto }) => {
    const tag = unsafeStatic(nivel);
    return staticHtml`<${tag} class="ds-titulo ${nivel}">${texto}</${tag}>`;
  },
  argTypes: {
    nivel: { control: { type: 'select' }, options: NIVEIS, description: 'Nível semântico (h1–h6)' },
    texto: { control: 'text' },
  },
  args: { nivel: 'h1', texto: 'Título principal da página' },
};

export const Titulo = {};

/** Hierarquia completa — H1 único por página, sem saltar níveis. */
export const Hierarquia = {
  render: () =>
    staticHtml`${NIVEIS.map((n) => {
      const tag = unsafeStatic(n);
      return staticHtml`<${tag} class="ds-titulo ${n}">${n.toUpperCase()} — nível de organização</${tag}>`;
    })}`,
};
