'use client';

import { siteConfig } from '@/data/site';

type GtagArgs = [string, ...unknown[]];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArgs) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

export type ConsentStatus = 'granted' | 'denied';

const STORAGE_KEY = 'cd-cookie-consent';
/** Choices are remembered for six months, as suggested by the Italian DPA's cookie guidelines. */
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182;
export const CONSENT_OPEN_EVENT = 'cookie-preferences:open';
export const CONSENT_CHANGE_EVENT = 'cookie-preferences:change';

const measurementId = siteConfig.gaMeasurementId;
export const analyticsEnabled = /^G-[A-Z0-9]+$/.test(measurementId);

export function readConsent(): ConsentStatus | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw) as { status?: ConsentStatus; at?: number };
    if (!saved.status || !saved.at || Date.now() - saved.at > MAX_AGE_MS) return null;
    return saved.status;
  } catch {
    return null;
  }
}

export function saveConsent(status: ConsentStatus) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ status, at: Date.now() }));
  } catch {
    // Storage unavailable (private mode): the choice still applies to this visit.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: status }));
}

let loaded = false;

/** Loads Google Analytics only after consent (no Google request happens before). */
export function startAnalytics() {
  if (!analyticsEnabled) return;
  window[`ga-disable-${measurementId}`] = false;
  if (loaded) {
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    return;
  }
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the Arguments object, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { allow_google_signals: false, allow_ad_personalization_signals: false });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}

/** Stops tracking and removes the Google Analytics cookies set on this domain. */
export function stopAnalytics() {
  if (!analyticsEnabled) return;
  window[`ga-disable-${measurementId}`] = true;
  window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
  const host = window.location.hostname;
  const domains = ['', host, `.${host}`, `.${host.replace(/^www\./, '')}`];
  document.cookie.split(';').map((c) => c.split('=')[0].trim()).filter((name) => name === '_ga' || name.startsWith('_ga_')).forEach((name) => {
    domains.forEach((domain) => {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`;
    });
  });
}

/** Sends a GA4 event, only when Analytics has been loaded after consent. */
export function track(name: string, params: Record<string, string | number | undefined> = {}) {
  if (!loaded || !window.gtag || window[`ga-disable-${measurementId}`]) return;
  const clean = Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined && value !== ''));
  window.gtag('event', name, clean);
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}
