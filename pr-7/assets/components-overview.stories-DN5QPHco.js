const r={title:"Design System MS/VisãoGeral"},s={name:"Visão Geral",render:()=>`
        <section class="ds-content container">
            <span class="ds-content__eyebrow">
                Diretrizes de design
            </span>

            <h1>Visão geral</h1>

            <div class="ds-article-content">
                <h2 id="introducao-2">Introdução</h2>

                <p>
                    As diretrizes de design de um design system são um conjunto de princípios
                    e regras que orientam a criação e manutenção de interfaces de usuário
                    consistentes e coesas. Aqui está um resumo curto:
                </p>

                <div class="ds-overview-grid">
                    ${e("https://www.designsystem.ms.gov.br/wp-content/uploads/2025/12/Icon-3.png","Identidade visual","Define cores, tipografia, logotipos e outros elementos visuais que representam a marca.")}
                    ${e("https://www.designsystem.ms.gov.br/wp-content/uploads/2025/12/info-6.png","Componentes","Lista de elementos reutilizáveis, como botões, campos de formulário e ícones, com orientações de uso.")}
                    ${e("https://www.designsystem.ms.gov.br/wp-content/uploads/2025/12/info-8.png","Padrões gerais","Descreve como os usuários interagem com componentes e sistemas, incluindo animações e respostas visuais.")}
                    ${e("https://www.designsystem.ms.gov.br/wp-content/uploads/2025/12/info-5.png","Acessibilidade","Regras para garantir que o design seja inclusivo e utilizável por pessoas com diversas habilidades.")}
                    ${e("https://www.designsystem.ms.gov.br/wp-content/uploads/2025/12/info-7.png","Templates e Layouts","Estruturas para organizar conteúdo de forma clara e eficiente.")}
                </div>

                <h2 id="links-relacionados">Links Relacionados</h2>

                <p>
                    Ativar/desativar/ocultar ações: Estados do elemento da interface do usuário
                </p>

                <p>Botões:</p>

                <ul>
                    <li>Quando usar botões de texto ou botões de ícone: Botão – Componentes</li>
                    <li>Diretrizes para botões de texto e ícone: Botão – Diretrizes</li>
                    <li>Rótulos de ação padrão: Terminologia para ações comuns</li>
                </ul>

                <p>Barras de ferramentas:</p>

                <ul>
                    <li>Visão geral da barra de ferramentas</li>
                    <li>Barra de ferramentas de rodapé</li>
                    <li>Barra de ferramentas Tabela</li>
                    <li>Barra de ferramentas do gráfico</li>
                    <li>Barra de ferramentas do cabeçalho</li>
                </ul>
            </div>
        </section>
    `};function e(a,o,n){return`
        <div class="ds-overview-card">
            <img
                src="${a}"
                alt=""
                class="ds-overview-card__image"
            >

            <div class="ds-overview-card__content">
                <h3>${o}</h3>
                <p>${n}</p>
                <a href="#" class="ds-overview-card__link" aria-label="${o}"></a>
            </div>
        </div>
    `}s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Visão Geral',
  render: () => \`
        <section class="ds-content container">
            <span class="ds-content__eyebrow">
                Diretrizes de design
            </span>

            <h1>Visão geral</h1>

            <div class="ds-article-content">
                <h2 id="introducao-2">Introdução</h2>

                <p>
                    As diretrizes de design de um design system são um conjunto de princípios
                    e regras que orientam a criação e manutenção de interfaces de usuário
                    consistentes e coesas. Aqui está um resumo curto:
                </p>

                <div class="ds-overview-grid">
                    \${overviewCard('https://www.designsystem.ms.gov.br/wp-content/uploads/2025/12/Icon-3.png', 'Identidade visual', 'Define cores, tipografia, logotipos e outros elementos visuais que representam a marca.')}
                    \${overviewCard('https://www.designsystem.ms.gov.br/wp-content/uploads/2025/12/info-6.png', 'Componentes', 'Lista de elementos reutilizáveis, como botões, campos de formulário e ícones, com orientações de uso.')}
                    \${overviewCard('https://www.designsystem.ms.gov.br/wp-content/uploads/2025/12/info-8.png', 'Padrões gerais', 'Descreve como os usuários interagem com componentes e sistemas, incluindo animações e respostas visuais.')}
                    \${overviewCard('https://www.designsystem.ms.gov.br/wp-content/uploads/2025/12/info-5.png', 'Acessibilidade', 'Regras para garantir que o design seja inclusivo e utilizável por pessoas com diversas habilidades.')}
                    \${overviewCard('https://www.designsystem.ms.gov.br/wp-content/uploads/2025/12/info-7.png', 'Templates e Layouts', 'Estruturas para organizar conteúdo de forma clara e eficiente.')}
                </div>

                <h2 id="links-relacionados">Links Relacionados</h2>

                <p>
                    Ativar/desativar/ocultar ações: Estados do elemento da interface do usuário
                </p>

                <p>Botões:</p>

                <ul>
                    <li>Quando usar botões de texto ou botões de ícone: Botão – Componentes</li>
                    <li>Diretrizes para botões de texto e ícone: Botão – Diretrizes</li>
                    <li>Rótulos de ação padrão: Terminologia para ações comuns</li>
                </ul>

                <p>Barras de ferramentas:</p>

                <ul>
                    <li>Visão geral da barra de ferramentas</li>
                    <li>Barra de ferramentas de rodapé</li>
                    <li>Barra de ferramentas Tabela</li>
                    <li>Barra de ferramentas do gráfico</li>
                    <li>Barra de ferramentas do cabeçalho</li>
                </ul>
            </div>
        </section>
    \`
}`,...s.parameters?.docs?.source}}};const i=["VisaoGeral"];export{s as VisaoGeral,i as __namedExportsOrder,r as default};
