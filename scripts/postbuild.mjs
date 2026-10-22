// Runs after `next build` (static export in ./out):
// 1. sets <html lang="en"> on the English pages, so the static HTML declares the right language;
// 2. writes a strict, per-page Content Security Policy to out/_headers, allowing only the
//    inline scripts Next.js actually generated (by SHA-256 hash) instead of 'unsafe-inline'.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const out = join(process.cwd(), 'out');
if (!existsSync(out)) throw new Error('Cartella out non trovata: esegui prima `next build`.');

const htmlFiles = [];
const walk = (directory) => {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) walk(path);
    else if (entry.endsWith('.html')) htmlFiles.push(path);
  }
};
walk(out);

const policy = (scriptHashes) => [
  "default-src 'self'",
  `script-src 'self' ${scriptHashes.join(' ')}`.trim(),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "manifest-src 'self'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ');

const rules = [];
let englishPages = 0;

for (const file of htmlFiles) {
  const route = `/${relative(out, file).split(sep).join('/')}`;
  let html = readFileSync(file, 'utf8');

  if (route.startsWith('/en/')) {
    const updated = html.replace(/<html lang="it"/, '<html lang="en"');
    if (updated !== html) {
      html = updated;
      writeFileSync(file, html);
      englishPages += 1;
    }
  }

  const hashes = new Set();
  for (const match of html.matchAll(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g)) {
    const attributes = match[1];
    const content = match[2];
    if (/type=["']application\/(ld\+)?json["']/.test(attributes) || content.length === 0) continue;
    hashes.add(`'sha256-${createHash('sha256').update(content, 'utf8').digest('base64')}'`);
  }

  if (route === '/404.html') continue;
  const paths = route.endsWith('/index.html')
    ? [route.slice(0, -'index.html'.length)]
    : [route];
  if (paths[0] !== '/' && paths[0].endsWith('/')) paths.push(paths[0].slice(0, -1));

  for (const path of paths) {
    rules.push(`${path}\n  Content-Security-Policy: ${policy([...hashes])}`);
  }
}

const headersFile = join(out, '_headers');
const existing = existsSync(headersFile) ? `${readFileSync(headersFile, 'utf8').trim()}\n\n` : '';
writeFileSync(headersFile, `${existing}${rules.join('\n\n')}\n`);
console.log(`Postbuild: lang="en" impostato su ${englishPages} pagine, CSP per ${rules.length} percorsi in out/_headers.`);
