import { html } from 'lit';
import './navbar.css';
import '../logo-mask/logo-mask.css';
import '../breadcrumb/breadcrumb.css';

const chevron = html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>`;
const bars = html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
const search = html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>`;
const back = html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M19 12H5M5 12l7-7M5 12l7 7"/></svg>`;
const facebook = html`<svg viewBox="0 0 24 24" fill="#1877F2"><circle cx="12" cy="12" r="10"/></svg>`;
const x = html`<svg viewBox="0 0 24 24" fill="#000"><circle cx="12" cy="12" r="10"/></svg>`;
const instagram = html`<svg viewBox="0 0 24 24" fill="#E1306C"><circle cx="12" cy="12" r="10"/></svg>`;

const breadcrumbRow = () => html`
  <nav class="ds-breadcrumb" aria-label="breadcrumb" style="border-top:none;">
    <button class="ds-breadcrumb-back" aria-label="Voltar">${back}</button>
    <ol class="ds-breadcrumb-list">
      <li><a href="#">Início</a><span class="ds-breadcrumb-sep">›</span></li>
      <li><a href="#">Lista de Órgãos</a><span class="ds-breadcrumb-sep">›</span></li>
      <li><span class="ds-breadcrumb-current">Secretaria de Estado de Governo e Gestão Estratégica</span></li>
    </ol>
  </nav>
`;

export default { title: 'Componentes/Navbar', tags: ['autodocs'] };

export const Desktop = {
  render: () => html`
    <div class="ds-navbar">
      <div class="ds-navbar-menu">
        <div class="ds-navbar-left">
          <span class="ds-navbar-secretaria"><strong>SEGOV</strong><span>Secretaria de Estado de Governo e Gestão Estratégica</span></span>
          <div class="ds-logomask ds-logomask-horizontal is-spec">Logo</div>
          <nav class="ds-navbar-items">
            <button class="ds-navbar-item">Institucional ${chevron}</button>
            <button class="ds-navbar-item">Serviços</button>
            <button class="ds-navbar-item">Programas e Projetos</button>
            <button class="ds-navbar-item">Informativos</button>
            <button class="ds-navbar-item">Fale Conosco ${chevron}</button>
            <button class="ds-navbar-item">⋯</button>
          </nav>
        </div>
        <div class="ds-navbar-right">
          <button class="ds-navbar-search">
            <span style="flex:1 0 0; text-align:left;">Pesquisar...</span>
            <span class="ds-navbar-search-btn">${search}</span>
          </button>
        </div>
      </div>
      ${breadcrumbRow()}
    </div>
  `,
};

export const Colapsado = {
  render: () => html`
    <div class="ds-navbar">
      <div class="ds-navbar-menu">
        <div class="ds-navbar-left">
          <button class="ds-navbar-menu-toggle">${bars} Menu</button>
        </div>
        <div class="ds-navbar-right">
          <div class="ds-navbar-social">${facebook}${x}${instagram}</div>
          <button class="ds-navbar-search">
            <span style="flex:1 0 0; text-align:left;">Pesquisar...</span>
            <span class="ds-navbar-search-btn">${search}</span>
          </button>
        </div>
      </div>
      ${breadcrumbRow()}
    </div>
  `,
};

export const Mobile = {
  render: () => html`
    <div style="max-width:375px; border:1px solid #D4D7D8;">
      <div class="ds-navbar is-mobile">
        <div class="ds-navbar-menu">
          <div class="ds-navbar-mobile-row">
            <div class="ds-logomask ds-logomask-horizontal is-spec">Logo</div>
          </div>
          <div class="ds-navbar-mobile-row">
            <button class="ds-navbar-mobile-toggle" aria-label="Menu">${bars}</button>
            <div class="ds-navbar-social">${facebook}${x}${instagram}</div>
            <button class="ds-navbar-search">
              <span style="flex:1 0 0; text-align:left;">Pesquisar...</span>
              <span class="ds-navbar-search-btn">${search}</span>
            </button>
          </div>
        </div>
        ${breadcrumbRow()}
      </div>
    </div>
  `,
};
