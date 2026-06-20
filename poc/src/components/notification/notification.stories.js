import { html } from 'lit';
import './notification.css';

export default { title: 'Componentes/Notification', tags: ['autodocs'] };

export const Info = {
  render: () => html`<div class="notification" role="status">Informação: sua solicitação está em análise.</div>`,
};
export const Sucesso = {
  render: () => html`<div class="notification is-success" role="status">Sucesso: solicitação enviada com êxito.</div>`,
};
export const Erro = {
  render: () => html`<div class="notification is-error" role="alert">Erro: não foi possível enviar a solicitação.</div>`,
};
export const Alerta = {
  render: () => html`<div class="notification is-warning" role="alert">Atenção: o prazo encerra em 2 dias.</div>`,
};
