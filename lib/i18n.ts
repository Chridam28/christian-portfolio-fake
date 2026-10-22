export type Lang = 'it' | 'en';

export const languages: Record<Lang, { label: string; name: string; locale: string }> = {
  it: { label: 'IT', name: 'Italiano', locale: 'it_IT' },
  en: { label: 'EN', name: 'English', locale: 'en_GB' },
};

/** Pagine equivalenti nelle due lingue (senza slash finale, tranne la home). */
const pagePairs: Array<[string, string]> = [
  ['/', '/en/'],
  ['/servizi', '/en/services'],
  ['/chi-sono', '/en/about'],
  ['/contatti', '/en/contact'],
  ['/portfolio', '/en/portfolio'],
  ['/lavori', '/en/portfolio'],
  ['/demo', '/en/portfolio'],
  ['/privacy', '/en/privacy'],
  ['/cookie', '/en/cookies'],
];

export const paths = {
  home: { it: '/', en: '/en/' },
  services: { it: '/servizi/', en: '/en/services/' },
  pricing: { it: '/servizi/#prezzi', en: '/en/services/#pricing' },
  faq: { it: '/servizi/#faq', en: '/en/services/#faq' },
  projects: { it: '/#progetti', en: '/en/#projects' },
  process: { it: '/#metodo', en: '/en/#process' },
  about: { it: '/chi-sono/', en: '/en/about/' },
  contact: { it: '/contatti/', en: '/en/contact/' },
  portfolio: { it: '/portfolio/', en: '/en/portfolio/' },
  privacy: { it: '/privacy/', en: '/en/privacy/' },
  cookie: { it: '/cookie/', en: '/en/cookies/' },
} as const;

export type PathKey = keyof typeof paths;

export function href(key: PathKey, lang: Lang) {
  return paths[key][lang];
}

export function projectHref(slug: string, lang: Lang) {
  return lang === 'en' ? `/en/projects/${slug}/` : `/progetti/${slug}/`;
}

/** Section ids used for in-page anchors, so English URLs don't carry Italian fragments. */
export const sectionIds = {
  projects: { it: 'progetti', en: 'projects' },
  services: { it: 'servizi', en: 'services' },
  pricing: { it: 'prezzi', en: 'pricing' },
  process: { it: 'metodo', en: 'process' },
  faq: { it: 'faq', en: 'faq' },
  variant: { it: 'variante', en: 'variant' },
} as const;

function normalise(pathname: string) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '');
}

/** Returns the equivalent page in the other language, used by the language switcher. */
export function translatePath(pathname: string, target: Lang) {
  const current = normalise(pathname);
  const project = current.match(/^\/(?:en\/projects|progetti)\/([^/]+)$/);
  if (project) return projectHref(project[1], target);

  for (const [it, en] of pagePairs) {
    if (current === normalise(it) || current === normalise(en)) {
      const destination = target === 'en' ? en : it;
      return destination === '/' || destination.endsWith('/') ? destination : `${destination}/`;
    }
  }
  return paths.home[target];
}

export function langFromPath(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'it';
}

/** hreflang alternates for page metadata. */
export function alternates(itPath: string, enPath: string, lang: Lang) {
  return {
    canonical: lang === 'en' ? enPath : itPath,
    languages: { it: itPath, en: enPath, 'x-default': itPath },
  };
}
