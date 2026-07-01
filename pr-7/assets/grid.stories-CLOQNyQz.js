const l={title:"Tokens/Grid"},a=[{name:"Desktop",breakpoint:"1440px",columns:"12 colunas",container:"1216px",gutter:"32px",margin:"112px",tokenColumns:"--ds-grid-desktop-columns",tokenContainer:"--ds-grid-desktop-container",tokenGutter:"--ds-grid-desktop-gutter",tokenMargin:"--ds-grid-desktop-margin",previewColumns:12},{name:"Tablet",breakpoint:"744px",columns:"8 colunas",container:"Auto",gutter:"20px",margin:"48px",tokenColumns:"--ds-grid-tablet-columns",tokenContainer:"-",tokenGutter:"--ds-grid-tablet-gutter",tokenMargin:"--ds-grid-tablet-margin",previewColumns:8},{name:"Mobile",breakpoint:"375px",columns:"4 colunas",container:"Auto",gutter:"20px",margin:"12px",tokenColumns:"--ds-grid-mobile-columns",tokenContainer:"-",tokenGutter:"--ds-grid-mobile-gutter",tokenMargin:"--ds-grid-mobile-margin",previewColumns:4}],i=[["Mobile","--ds-breakpoint-mobile","375px"],["Tablet","--ds-breakpoint-tablet","744px"],["Desktop","--ds-breakpoint-desktop","1440px"]];function t(n){return`
        <div style="
            display: grid;
            grid-template-columns: repeat(${n}, 1fr);
            gap: 8px;
            width: 100%;
            height: 96px;
        ">
            ${Array.from({length:n}).map(()=>`
                <div style="
                    height: 96px;
                    border-radius: var(--ds-radius-xsm);
                    background: var(--ds-color-primary-600);
                    opacity: 0.18;
                "></div>
            `).join("")}
        </div>
    `}function d(n){return`
        <article style="
            padding: 24px;
            border: 1px solid var(--ds-color-border);
            border-radius: var(--ds-radius-md);
            background: var(--ds-color-background);
            box-shadow: var(--ds-shadow-card-sm);
        ">
            <header style="margin-bottom: 24px;">
                <h2 style="
                    margin: 0 0 8px;
                    font-family: var(--ds-font-family-heading);
                    font-size: var(--ds-heading-3-font-size);
                    line-height: var(--ds-heading-3-line-height);
                    color: var(--ds-color-text-primary);
                ">
                    ${n.name}
                </h2>

                <p style="
                    margin: 0;
                    color: var(--ds-color-text-secondary);
                    font-size: var(--ds-body-md-font-size);
                    line-height: var(--ds-body-md-line-height);
                ">
                    Breakpoint base: <strong>${n.breakpoint}</strong>
                </p>
            </header>

            <div style="margin-bottom: 24px;">
                ${t(n.previewColumns)}
            </div>

            <div style="
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 16px;
            ">
                <div>
                    <strong>Colunas</strong>
                    <p>${n.columns}</p>
                    <code>${n.tokenColumns}</code>
                </div>

                <div>
                    <strong>Container</strong>
                    <p>${n.container}</p>
                    <code>${n.tokenContainer}</code>
                </div>

                <div>
                    <strong>Gutter</strong>
                    <p>${n.gutter}</p>
                    <code>${n.tokenGutter}</code>
                </div>

                <div>
                    <strong>Margem lateral</strong>
                    <p>${n.margin}</p>
                    <code>${n.tokenMargin}</code>
                </div>
            </div>
        </article>
    `}function s([n,r,o]){return`
        <article style="
            display: grid;
            grid-template-columns: 160px 240px 1fr;
            align-items: center;
            gap: 24px;
            padding: 20px 0;
            border-bottom: 1px solid var(--ds-color-border);
        ">
            <strong>${n}</strong>

            <code style="
                display: inline-flex;
                width: max-content;
                padding: 4px 8px;
                border-radius: var(--ds-radius-xsm);
                background: var(--ds-color-background-muted);
                font-size: 12px;
                color: var(--ds-color-text-primary);
            ">
                ${r}
            </code>

            <span style="
                color: var(--ds-color-text-secondary);
                font-size: var(--ds-font-size-sm);
                line-height: var(--ds-line-height-20);
            ">
                ${o}
            </span>
        </article>
    `}const e={render:()=>`
        <main style="
            max-width: 1200px;
            padding: 48px;
            font-family: var(--ds-font-family-body);
            color: var(--ds-color-text-primary);
        ">
            <header style="margin-bottom: 48px;">
                <h1 style="
                    margin: 0 0 16px;
                    font-family: var(--ds-font-family-heading);
                    font-size: var(--ds-heading-1-font-size);
                    line-height: var(--ds-heading-1-line-height);
                ">
                    Tokens de Grid
                </h1>

                <p style="
                    max-width: 760px;
                    margin: 0;
                    color: var(--ds-color-text-secondary);
                    font-size: var(--ds-body-md-font-size);
                    line-height: var(--ds-body-md-line-height);
                ">
                    Esta página documenta a estrutura de grid utilizada no Design System MS,
                    incluindo colunas, gutters, margens laterais e breakpoints principais.
                </p>
            </header>

            <section style="
                display: grid;
                grid-template-columns: 1fr;
                gap: 32px;
                margin-bottom: 56px;
            ">
                ${a.map(d).join("")}
            </section>

            <section style="
                padding: 32px;
                border: 1px solid var(--ds-color-border);
                border-radius: var(--ds-radius-md);
                background: var(--ds-color-background);
            ">
                <header style="margin-bottom: 24px;">
                    <h2 style="
                        margin: 0 0 8px;
                        font-family: var(--ds-font-family-heading);
                        font-size: var(--ds-heading-3-font-size);
                        line-height: var(--ds-heading-3-line-height);
                    ">
                        Breakpoints
                    </h2>

                    <p style="
                        margin: 0;
                        color: var(--ds-color-text-secondary);
                        font-size: var(--ds-body-md-font-size);
                        line-height: var(--ds-body-md-line-height);
                    ">
                        Pontos principais usados para adaptação responsiva dos componentes e layouts.
                    </p>
                </header>

                ${i.map(s).join("")}
            </section>
        </main>
    `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => \`
        <main style="
            max-width: 1200px;
            padding: 48px;
            font-family: var(--ds-font-family-body);
            color: var(--ds-color-text-primary);
        ">
            <header style="margin-bottom: 48px;">
                <h1 style="
                    margin: 0 0 16px;
                    font-family: var(--ds-font-family-heading);
                    font-size: var(--ds-heading-1-font-size);
                    line-height: var(--ds-heading-1-line-height);
                ">
                    Tokens de Grid
                </h1>

                <p style="
                    max-width: 760px;
                    margin: 0;
                    color: var(--ds-color-text-secondary);
                    font-size: var(--ds-body-md-font-size);
                    line-height: var(--ds-body-md-line-height);
                ">
                    Esta página documenta a estrutura de grid utilizada no Design System MS,
                    incluindo colunas, gutters, margens laterais e breakpoints principais.
                </p>
            </header>

            <section style="
                display: grid;
                grid-template-columns: 1fr;
                gap: 32px;
                margin-bottom: 56px;
            ">
                \${grids.map(gridCard).join('')}
            </section>

            <section style="
                padding: 32px;
                border: 1px solid var(--ds-color-border);
                border-radius: var(--ds-radius-md);
                background: var(--ds-color-background);
            ">
                <header style="margin-bottom: 24px;">
                    <h2 style="
                        margin: 0 0 8px;
                        font-family: var(--ds-font-family-heading);
                        font-size: var(--ds-heading-3-font-size);
                        line-height: var(--ds-heading-3-line-height);
                    ">
                        Breakpoints
                    </h2>

                    <p style="
                        margin: 0;
                        color: var(--ds-color-text-secondary);
                        font-size: var(--ds-body-md-font-size);
                        line-height: var(--ds-body-md-line-height);
                    ">
                        Pontos principais usados para adaptação responsiva dos componentes e layouts.
                    </p>
                </header>

                \${breakpoints.map(breakpointItem).join('')}
            </section>
        </main>
    \`
}`,...e.parameters?.docs?.source}}};const p=["Grid"];export{e as Grid,p as __namedExportsOrder,l as default};
