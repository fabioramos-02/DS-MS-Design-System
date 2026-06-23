/* ============================================================================
   DS-MS — build de biblioteca (Vite, modo lib)
   Empacota src/index.js -> dist/js/ds-sis.js como ESM autocontido:
   lit fica BUNDLADO (sem bare imports — funciona puro via CDN/<script type=module>).

   CSS: ms-header.js importa "./header.css" só para conveniência do Storybook
   local. Web Components em light DOM (decisão de arquitetura: docs/01) devem
   herdar o CSS da página (ds-sis.css, gerado por scripts/build-css.js), não
   embutir cópia própria no bundle JS — duplicaria regras e desincronizaria
   versões. O plugin abaixo resolve qualquer import de *.css como módulo vazio
   SÓ nesta build (não afeta .storybook/main.js, que é config separada).
   ============================================================================ */
const path = require('path');

/** @type {import('vite').Plugin} */
const ignoreCssImports = {
  name: 'ds-ms-ignore-css-imports',
  resolveId(source) {
    if (source.endsWith('.css')) return source;
    return null;
  },
  load(id) {
    if (id.endsWith('.css')) return '';
    return null;
  },
};

module.exports = {
  plugins: [ignoreCssImports],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      formats: ['es'],
      fileName: () => 'ds-sis.js',
    },
    outDir: 'dist/js',
    emptyOutDir: false,
    minify: false,
    sourcemap: true,
    rollupOptions: {
      external: [],
    },
  },
};
