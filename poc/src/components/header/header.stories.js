import { html } from 'lit';
import './ms-header.js';

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
