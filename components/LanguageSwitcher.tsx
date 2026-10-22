'use client';

import { usePathname } from 'next/navigation';
import { languages, translatePath, type Lang } from '@/lib/i18n';

export function LanguageSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname() || '/';
  const label = lang === 'en' ? 'Language' : 'Lingua';
  return (
    <nav className="lang-switch" aria-label={label}>
      {(Object.keys(languages) as Lang[]).map((code) => (
        code === lang
          ? <span key={code} aria-current="true" lang={code} title={languages[code].name}>{languages[code].label}</span>
          : (
            <a
              key={code}
              href={translatePath(pathname, code)}
              hrefLang={code}
              lang={code}
              title={languages[code].name}
              aria-label={code === 'en' ? 'Read this page in English' : 'Leggi questa pagina in italiano'}
              data-no-transition
            >
              {languages[code].label}
            </a>
          )
      ))}
    </nav>
  );
}
