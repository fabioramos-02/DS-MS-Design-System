import { html } from 'lit';
import './ms-header.js';
import './header.css';
import '../topmenu/topmenu.css';
import '../logo-mask/logo-mask.css';

const brasao = html`<svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 2L3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6l-9-4z"/></svg>`;

/** Heading bar — fiel ao Figma (node 77:135390), type=secretaria/projetos/ms.gov. */
const headingBar = (type) => html`
  <div class="ds-header-bar">
    <div class="ds-header-bar-logo">
      <div class="ds-header-bar-logo-pill">${brasao}</div>
      <div class="ds-header-bar-org">
        <span class="ds-header-bar-org-item"><strong>SEGOV</strong><span>Secretaria de Estado de Governo e Gestão Estratégica</span></span>
        ${type === 'secretaria'
          ? html`<span class="ds-header-bar-org-item"><strong>SPPM</strong><span>Subsecretaria de Políticas Públicas para Mulheres</span></span>`
          : ''}
      </div>
    </div>
  </div>
`;

/**
 * <ms-header> — único Web Component da POC (decisão de arquitetura:
 * modelo híbrido, Web Component só nos interativos). Menu mobile e
 * comportamento ficam centralizados no custom element.
 */
export default {
  title: 'Componentes/Header',
  tags: ['autodocs'],
  argTypes: {
    secretaria: { control: 'text' },
    version: { control: 'text' },
  },
  args: { secretaria: 'Governo de\nMato Grosso do Sul', version: 'v2.0.0' },
};

export const Desktop = {
  render: ({ secretaria, version }) => html`
    <ms-header secretaria=${secretaria} version=${version}></ms-header>
  `,
};

export const MobileFechado = {
  render: () => html`
    <div style="max-width:375px; border:1px solid #D4D7D8;">
      <ms-header force-mobile></ms-header>
    </div>
  `,
};

export const MobileAberto = {
  render: () => html`
    <div style="max-width:375px; border:1px solid #D4D7D8;">
      <ms-header force-mobile open></ms-header>
    </div>
  `,
};

/** Heading bar fiel ao Figma — type=ms.gov (faixa azul, sem subsetor). */
export const HeadingMsGov = { render: () => headingBar('ms.gov') };

/** type=secretaria — soma o bloco SPPM ao lado de SEGOV. */
export const HeadingSecretaria = { render: () => headingBar('secretaria') };

/** type=projetos — mesma estrutura de ms.gov (Figma trata os dois iguais). */
export const HeadingProjetos = { render: () => headingBar('projetos') };
