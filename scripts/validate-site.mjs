import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const output = join(root, 'out');

if (!existsSync(output)) {
  throw new Error('Cartella out non trovata. Esegui prima `pnpm run build`.');
}

const requiredRoutes = [
  '/',
  '/portfolio',
  '/lavori',
  '/demo',
  '/servizi',
  '/chi-sono',
  '/contatti',
  '/privacy',
  '/cookie',
  '/progetti/federica-fadel',
  '/progetti/andrea-appierto',
  '/progetti/college-life-italia',
  '/progetti/casa-lume',
  '/progetti/studio-legale-aurea',
  '/progetti/studio-nutrizione',
  '/progetti/professionista-editoriale',
  '/en',
  '/en/services',
  '/en/about',
  '/en/contact',
  '/en/portfolio',
  '/en/privacy',
  '/en/cookies',
  '/en/projects/federica-fadel',
  '/en/projects/andrea-appierto',
  '/en/projects/college-life-italia',
  '/en/projects/casa-lume',
  '/en/projects/studio-legale-aurea',
  '/en/projects/studio-nutrizione',
  '/en/projects/professionista-editoriale',
];

const routeFile = (route) => route === '/'
  ? join(output, 'index.html')
  : join(output, route.replace(/^\//, ''), 'index.html');

for (const route of requiredRoutes) {
  if (!existsSync(routeFile(route))) throw new Error(`Pagina statica mancante: ${route}`);
}

const notFoundFile = join(output, '404.html');
if (!existsSync(notFoundFile)) throw new Error('Pagina statica 404 mancante: /404.html');

for (const asset of ['sitemap.xml', 'robots.txt', 'manifest.webmanifest', 'og-it.png', 'og-en.png']) {
  if (!existsSync(join(output, asset))) throw new Error(`Asset SEO mancante: /${asset}`);
}

const htmlFiles = [];
const collect = (directory) => {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) collect(path);
    else if (entry.endsWith('.html')) htmlFiles.push(path);
  }
};
collect(output);

const pages = new Map(htmlFiles.map((file) => [file, readFileSync(file, 'utf8')]));
const failures = [];

const resolveLocalPath = (pathname) => {
  pathname = pathname.split(/[?#]/, 1)[0];
  if (pathname === '/') return join(output, 'index.html');
  const clean = decodeURIComponent(pathname).replace(/^\//, '').replace(/\/$/, '');
  const direct = join(output, clean);
  if (existsSync(direct) && statSync(direct).isFile()) return direct;
  return join(direct, 'index.html');
};

const assetReferences = new Set();

for (const [file, html] of pages) {
  if (/href=["'][^"']*\[INSERIRE/i.test(html)) failures.push(`${file}: placeholder usato come link`);
  if (/(?:href|src)=["'][^"']*(?:undefined|NaN)|>(?:undefined|NaN)</.test(html)) {
    failures.push(`${file}: valore non valido presente nell’HTML visibile`);
  }

  for (const match of html.matchAll(/href=["']([^"']+)["']/g)) {
    const href = match[1];
    if (/^(https?:|mailto:|tel:|data:|javascript:)/.test(href)) continue;
    const [pathnamePart, hash = ''] = href.split('#');
    const targetFile = pathnamePart ? resolveLocalPath(pathnamePart) : file;
    if (!existsSync(targetFile)) {
      failures.push(`${file}: link locale non risolto ${href}`);
      continue;
    }
    if (hash && targetFile.endsWith('.html')) {
      const targetHtml = pages.get(targetFile) ?? readFileSync(targetFile, 'utf8');
      if (!new RegExp(`id=["']${hash.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`).test(targetHtml)) {
        failures.push(`${file}: ancora non trovata ${href}`);
      }
    }
  }

  for (const match of html.matchAll(/(?:src|poster)=["']([^"']+)["']/g)) {
    const reference = match[1];
    if (/^(https?:|data:|blob:)/.test(reference)) continue;
    assetReferences.add(reference);
    if (!existsSync(resolveLocalPath(reference))) failures.push(`${file}: risorsa statica non risolta ${reference}`);
  }

  for (const match of html.matchAll(/srcset=["']([^"']+)["']/g)) {
    for (const candidate of match[1].split(',').map((value) => value.trim().split(/\s+/, 1)[0])) {
      if (!candidate || /^(https?:|data:|blob:)/.test(candidate)) continue;
      assetReferences.add(candidate);
      if (!existsSync(resolveLocalPath(candidate))) failures.push(`${file}: risorsa srcset non risolta ${candidate}`);
    }
  }
}

const contactHtml = readFileSync(routeFile('/contatti'), 'utf8');
for (const requirement of [
  'Scrivimi. Ti rispondo io.',
  'mailto:christiandambrosio2002@gmail.com',
  'https://wa.me/393793547457?text=',
  'https://www.instagram.com/chri_dam/',
]) {
  if (!contactHtml.includes(requirement)) failures.push(`/contatti: contatto o contenuto mancante (${requirement})`);
}
if (/<form[\s>]/i.test(contactHtml)) failures.push('/contatti: il vecchio modulo è ancora presente');

const contactEnHtml = readFileSync(routeFile('/en/contact'), 'utf8');
for (const requirement of ['Message me. I’ll reply myself.', 'https://wa.me/393793547457?text=Hi%20Christian']) {
  if (!contactEnHtml.includes(requirement)) failures.push(`/en/contact: contatto o contenuto mancante (${requirement})`);
}

for (const route of requiredRoutes) {
  const html = readFileSync(routeFile(route), 'utf8');
  const expected = route === '/en' || route.startsWith('/en/') ? 'en' : 'it';
  if (!html.includes(`<html lang="${expected}"`)) failures.push(`${route}: attributo lang diverso da "${expected}"`);
  if (!/hreflang="en"/i.test(html) && !route.startsWith('/lavori') && !route.startsWith('/demo')) failures.push(`${route}: alternate hreflang mancante`);
}

if (!existsSync(join(output, '_headers')) || !readFileSync(join(output, '_headers'), 'utf8').includes('Content-Security-Policy')) {
  failures.push('out/_headers: Content Security Policy mancante (scripts/postbuild.mjs)');
}

const notFoundHtml = readFileSync(notFoundFile, 'utf8');
if (!notFoundHtml.includes('Errore / 404') || !notFoundHtml.includes('Torna alla homepage')) {
  failures.push('/404.html: contenuto personalizzato non trovato');
}


if (failures.length) throw new Error(`Validazione fallita:\n${failures.join('\n')}`);
console.log(`Validazione completata: ${htmlFiles.length} pagine HTML, ${requiredRoutes.length} route, pagina 404, contatti diretti, link e ${assetReferences.size} risorse locali controllati.`);
