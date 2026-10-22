'use client';

import { useEffect } from 'react';
import type { Lang } from '@/lib/i18n';

/** Keeps <html lang> in sync after client-side navigation (the static HTML is already correct). */
export function HtmlLang({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
