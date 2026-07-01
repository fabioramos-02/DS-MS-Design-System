import{C as D}from"./codePreview-Db2E5PIM.js";function M(o){const e=o instanceof HTMLElement?o:document.querySelector(o);if(!e)return null;const L=e.querySelector(".ds-carousel__track"),p=Array.from(e.querySelectorAll(".ds-carousel__slide")),x=e.querySelector(".ds-carousel__control--prev"),w=e.querySelector(".ds-carousel__control--next"),y=Array.from(e.querySelectorAll(".ds-carousel__dot")),H=e.dataset.autoplay==="true",S=Number(e.dataset.interval||4e3);let s=0,l=null,t=!1;function f(){L.style.transform=`translateX(-${s*100}%)`,p.forEach((a,n)=>{a.setAttribute("aria-hidden",String(n!==s))}),y.forEach((a,n)=>{a.setAttribute("aria-current",String(n===s))})}function r(a){s=(a+p.length)%p.length,f()}function g(){m(),H&&(l=window.setInterval(()=>{t||r(s+1)},S))}function m(){l&&(window.clearInterval(l),l=null)}return x?.addEventListener("click",()=>{r(s-1)}),w?.addEventListener("click",()=>{r(s+1)}),y.forEach((a,n)=>{a.addEventListener("click",()=>{r(n)})}),e.addEventListener("mouseenter",()=>{t=!0}),e.addEventListener("mouseleave",()=>{t=!1}),e.addEventListener("focusin",()=>{t=!0}),e.addEventListener("focusout",()=>{t=!1}),e.addEventListener("keydown",a=>{a.key==="ArrowLeft"&&(a.preventDefault(),r(s-1)),a.key==="ArrowRight"&&(a.preventDefault(),r(s+1))}),f(),g(),{goTo:r,startAutoplay:g,stopAutoplay:m,destroy(){m()}}}function k(){return Array.from(document.querySelectorAll(".ds-carousel")).map(o=>M(o))}const j={title:"Componentes/Carousel"},h=["src/styles/variables.css","src/styles/typography.css","src/styles/spacing.css","src/styles/radius.css","src/styles/shadows.css","src/components/carousel/carousel.css"],C=["src/components/carousel/carousel.js"],c={id:"ds-carousel",status:"Estável",version:"1.0.0",category:"Components",updated:"2026-06-25"},A=["O Carousel depende dos tokens globais do Design System MS.","A classe principal obrigatória é <code>ds-carousel</code>.","Use <code>ds-carousel__track</code> para agrupar os slides.","Cada slide deve usar a classe <code>ds-carousel__slide</code>.",'Use <code>aria-roledescription="carousel"</code> para descrever o componente para leitores de tela.',"O autoplay deve pausar ao passar o mouse ou focar o componente.","A navegação por teclado usa as setas esquerda e direita."],T=["Destacar conteúdos importantes em uma área limitada da página.","Apresentar banners institucionais ou campanhas.","Exibir notícias, serviços ou cards em sequência.","Permitir navegação manual ou automática entre conteúdos relacionados."],q=["Para poucos conteúdos (1 ou 2 itens).","Quando todos os conteúdos devem permanecer visíveis simultaneamente.","Para navegação principal do portal.","Quando o usuário precisa comparar conteúdos lado a lado."],P=["<code>Default</code> — navegação manual.","<code>Autoplay</code> — troca automática dos slides.","<code>Controles anterior/próximo</code>.","<code>Indicadores (dots)</code>.","<code>Suporte à navegação por teclado.</code>"];function _(o){return o.map(e=>`<li>${e}</li>`).join("")}function I(){return`
        <main class="ds-component-doc">

            <header class="ds-component-doc__hero">

                <div>

                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Carousel</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para apresentar uma sequência de conteúdos,
                        permitindo navegação manual ou automática entre os slides.
                    </p>

                </div>

                <dl class="ds-component-doc__meta">

                    <div>
                        <dt>Status</dt>
                        <dd>${c.status}</dd>
                    </div>

                    <div>
                        <dt>Versão</dt>
                        <dd>${c.version}</dd>
                    </div>

                    <div>
                        <dt>Atualizado</dt>
                        <dd>${c.updated}</dd>
                    </div>

                </dl>

            </header>

            <section class="ds-component-doc__grid">

                <article class="ds-component-doc__card">
                    <h2>Quando usar</h2>

                    <ul>
                        ${_(T)}
                    </ul>

                </article>

                <article class="ds-component-doc__card">

                    <h2>Quando não usar</h2>

                    <ul>
                        ${_(q)}
                    </ul>

                </article>

                <article class="ds-component-doc__card">

                    <h2>Variantes</h2>

                    <ul>
                        ${_(P)}
                    </ul>

                </article>

            </section>

        </main>
    `}const d={name:"Documentação",render:()=>I()},v=`
<section
    class="ds-carousel"
    role="region"
    aria-roledescription="carousel"
    aria-label="Destaques"
    tabindex="0"
    data-autoplay="false"
>
    <div class="ds-carousel__viewport">
        <div class="ds-carousel__track">
            <article class="ds-carousel__slide" role="group" aria-roledescription="slide" aria-label="1 de 3">
                <div class="ds-carousel__content">
                    <h3 class="ds-carousel__title">Campanha de vacinação</h3>
                    <p class="ds-carousel__text">Postos abertos em todo o estado até o fim do mês.</p>
                </div>
            </article>

            <article class="ds-carousel__slide" role="group" aria-roledescription="slide" aria-label="2 de 3">
                <div class="ds-carousel__content">
                    <h3 class="ds-carousel__title">Edital de concurso</h3>
                    <p class="ds-carousel__text">Inscrições abertas para a Secretaria de Educação.</p>
                </div>
            </article>

            <article class="ds-carousel__slide" role="group" aria-roledescription="slide" aria-label="3 de 3">
                <div class="ds-carousel__content">
                    <h3 class="ds-carousel__title">Novo portal de serviços</h3>
                    <p class="ds-carousel__text">Mais de 200 serviços digitais em um só lugar.</p>
                </div>
            </article>
        </div>
    </div>

    <button class="ds-carousel__control ds-carousel__control--prev" type="button" aria-label="Slide anterior">
        ‹
    </button>

    <button class="ds-carousel__control ds-carousel__control--next" type="button" aria-label="Próximo slide">
        ›
    </button>

    <div class="ds-carousel__dots" aria-label="Selecionar slide">
        <button class="ds-carousel__dot" type="button" aria-label="Ir para slide 1"></button>
        <button class="ds-carousel__dot" type="button" aria-label="Ir para slide 2"></button>
        <button class="ds-carousel__dot" type="button" aria-label="Ir para slide 3"></button>
    </div>
</section>
`,b=v.replace('data-autoplay="false"','data-autoplay="true" data-interval="3000"');function E(){setTimeout(()=>{k()},0)}const i={name:"Default",render:()=>(E(),D({title:"Carousel Default - HTML",description:"Exemplo de HTML para replicar o Carousel com navegação manual.",meta:c,preview:v,code:v,language:"markup",cssDependencies:h,jsDependencies:C,notes:A}))},u={name:"Autoplay",render:()=>(E(),D({title:"Carousel Autoplay - HTML",description:"Exemplo de HTML para replicar o Carousel com autoplay pausável.",meta:c,preview:b,code:b,language:"markup",cssDependencies:h,jsDependencies:C,notes:A}))};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Documentação',
  render: () => renderCarouselDocumentation()
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => {
    initPreview();
    return CodePreview({
      title: 'Carousel Default - HTML',
      description: 'Exemplo de HTML para replicar o Carousel com navegação manual.',
      meta: carouselMeta,
      preview: carouselHtml,
      code: carouselHtml,
      language: 'markup',
      cssDependencies: carouselCssDependencies,
      jsDependencies: carouselJsDependencies,
      notes: carouselNotes
    });
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Autoplay',
  render: () => {
    initPreview();
    return CodePreview({
      title: 'Carousel Autoplay - HTML',
      description: 'Exemplo de HTML para replicar o Carousel com autoplay pausável.',
      meta: carouselMeta,
      preview: carouselAutoplayHtml,
      code: carouselAutoplayHtml,
      language: 'markup',
      cssDependencies: carouselCssDependencies,
      jsDependencies: carouselJsDependencies,
      notes: carouselNotes
    });
  }
}`,...u.parameters?.docs?.source}}};const N=["Documentacao","HTMLDefault","HTMLAutoplay"];export{d as Documentacao,u as HTMLAutoplay,i as HTMLDefault,N as __namedExportsOrder,j as default};
