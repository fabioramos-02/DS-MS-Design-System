/* ============================================================================
   <ms-header> — Web Component (Lit) do DS-MS.
   1º componente do modelo híbrido a usar Web Component (docs/01-arquitetura.md):
   markup + comportamento do menu mobile centralizados aqui — "atualiza num
   lugar só". Renderiza em LIGHT DOM (createRenderRoot retorna this) para
   herdar o CSS global do design system (header.css / components.css),
   em vez de encapsular em Shadow DOM.
   ============================================================================ */
import { LitElement, html } from 'lit';
import './header.css';

export class MsHeader extends LitElement {
  static properties = {
    secretaria: { type: String },
    version: { type: String },
    forceMobile: { type: Boolean, attribute: 'force-mobile' },
    open: { type: Boolean, state: true },
  };

  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.secretaria = 'Governo de\nMato Grosso do Sul';
    this.version = 'v2.0.0';
    this.forceMobile = false;
    this.open = false;
  }

  _toggle() {
    this.open = !this.open;
  }

  render() {
    const cls = this.forceMobile ? 'ds-header is-mobile' : 'ds-header';
    return html`
      <header class="${cls}" role="banner">
        <div class="brand">
          <span class="ds-ms-logo" aria-hidden="true"></span>
          <span class="brand-sub">${this.secretaria}</span>
        </div>
        <nav aria-label="Navegação principal" class="${this.open ? 'is-open' : ''}" id="ms-header-nav">
          <a href="#">Início</a>
          <a href="#">Componentes</a>
          <a href="#">Documentação</a>
          <a href="#">Contato</a>
        </nav>
        <div class="right">
          <span class="version">${this.version}</span>
        </div>
        <button
          class="menu-toggle"
          type="button"
          aria-expanded=${this.open}
          aria-controls="ms-header-nav"
          aria-label=${this.open ? 'Fechar menu' : 'Abrir menu'}
          @click=${() => this._toggle()}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </header>
    `;
  }
}

if (!customElements.get('ms-header')) {
  customElements.define('ms-header', MsHeader);
}
