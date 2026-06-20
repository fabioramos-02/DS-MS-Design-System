import { html } from 'lit';
import './footer.css';

export default { title: 'Componentes/Footer', tags: ['autodocs'] };

export const Padrao = {
  render: () => html`
    <footer class="ds-footer" role="contentinfo">
      <span>SETDIG — Secretaria-Executiva de Transformação Digital</span>
      <span class="footer-logo" aria-hidden="true"></span>
    </footer>
  `,
};
