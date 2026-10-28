'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { analyticsEnabled, CONSENT_OPEN_EVENT, readConsent, saveConsent, startAnalytics, stopAnalytics, type ConsentStatus } from '@/lib/analytics';
import { href, type Lang } from '@/lib/i18n';

const copy = {
  it: {
    title: 'Posso usare i cookie statistici?',
    text: 'Uso Google Analytics per capire quali pagine e progetti interessano di più. Solo statistiche, nessuna pubblicità. Puoi cambiare idea quando vuoi da “Preferenze cookie” in fondo alla pagina.',
    policy: 'Cookie policy',
    accept: 'Accetta',
    reject: 'Rifiuta',
    close: 'Chiudi e rifiuta',
    label: 'Preferenze cookie',
  },
  en: {
    title: 'May I use analytics cookies?',
    text: 'I use Google Analytics to see which pages and projects people find most useful. Statistics only, no advertising. You can change your mind at any time from “Cookie preferences” at the bottom of the page.',
    policy: 'Cookie policy',
    accept: 'Accept',
    reject: 'Reject',
    close: 'Close and reject',
    label: 'Cookie preferences',
  },
};

export function CookieConsent({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [open, setOpen] = useState(false);
  const [reopened, setReopened] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!analyticsEnabled) return;
    const saved = readConsent();
    if (saved === 'granted') startAnalytics();
    if (saved === null) setOpen(true);
    const reopen = () => { setReopened(true); setOpen(true); };
    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
  }, []);

  useEffect(() => {
    // Move focus only when the visitor reopened the panel; on first load it must not steal focus.
    if (open && reopened) panelRef.current?.querySelector<HTMLButtonElement>('.cookie-actions button')?.focus({ preventScroll: true });
  }, [open, reopened]);

  if (!analyticsEnabled || !open) return null;

  const choose = (status: ConsentStatus) => {
    saveConsent(status);
    if (status === 'granted') startAnalytics();
    else stopAnalytics();
    setOpen(false);
  };

  return (
    <div className="cookie-banner" role="dialog" aria-modal="false" aria-labelledby="cookie-title" aria-describedby="cookie-text" ref={panelRef}>
      <button type="button" className="cookie-close" onClick={() => choose('denied')} aria-label={t.close}>×</button>
      <p className="cookie-title" id="cookie-title">{t.title}</p>
      <p className="cookie-text" id="cookie-text">{t.text} <Link href={href('cookie', lang)}>{t.policy}</Link></p>
      <div className="cookie-actions">
        <button type="button" className="cookie-button" onClick={() => choose('denied')}>{t.reject}</button>
        <button type="button" className="cookie-button" onClick={() => choose('granted')}>{t.accept}</button>
      </div>
    </div>
  );
}

export function CookiePreferencesButton({ lang, className }: { lang: Lang; className?: string }) {
  if (!analyticsEnabled) return null;
  return (
    <button type="button" className={className ?? 'cookie-preferences-link'} onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))}>
      {copy[lang].label}
    </button>
  );
}
