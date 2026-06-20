/* ============================================================================
   DS-MS — build-css.js
   Concatena dist/css/tokens.css (gerado pelo Style Dictionary) + o CSS de
   cada pasta em src/components numa única folha publicavel: dist/css/ds-sis.css.
   Remove as linhas "@import .../tokens.css" de cada componente (os tokens
   ja entram uma vez so, no topo do arquivo final).
   ============================================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TOKENS_CSS = path.join(ROOT, 'dist', 'css', 'tokens.css');
const COMPONENTS_DIR = path.join(ROOT, 'src', 'components');
const OUT_FILE = path.join(ROOT, 'dist', 'css', 'ds-sis.css');

const IMPORT_TOKENS_RE = /@import\s+["'][^"']*tokens\.css["'];?\s*\n?/g;

function readComponentCss(componentName) {
  const cssPath = path.join(COMPONENTS_DIR, componentName, `${componentName}.css`);
  if (!fs.existsSync(cssPath)) return null;
  return fs.readFileSync(cssPath, 'utf8').replace(IMPORT_TOKENS_RE, '');
}

function main() {
  if (!fs.existsSync(TOKENS_CSS)) {
    console.error('dist/css/tokens.css não encontrado — rode "npm run tokens" antes.');
    process.exit(1);
  }

  const tokensCss = fs.readFileSync(TOKENS_CSS, 'utf8');
  const componentNames = fs
    .readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  const parts = [
    '/* ============================================================================\n   DS-MS — ds-sis.css (GERADO por scripts/build-css.js — não edite à mão)\n   Tokens + todos os componentes, nessa ordem.\n   ============================================================================ */',
    tokensCss,
  ];

  for (const name of componentNames) {
    const css = readComponentCss(name);
    if (css) {
      parts.push(`/* ---- componente: ${name} ---- */`);
      parts.push(css.trim());
    }
  }

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, parts.join('\n\n') + '\n');
  console.log(`OK: ${path.relative(ROOT, OUT_FILE)} gerado (${componentNames.length} componentes).`);
}

main();
