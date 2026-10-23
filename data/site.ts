import { href, type Lang } from '@/lib/i18n';

const contactEmail = 'christiandambrosio2002@gmail.com';
const contactWhatsapp = '+39 379 354 7457';
const contactInstagram = 'https://www.instagram.com/chri_dam/';
const whatsappMessages: Record<Lang, string> = {
  it: 'Ciao Christian, vorrei parlarti di un progetto web.',
  en: 'Hi Christian, I’d like to talk to you about a website project.',
};

export const siteConfig = {
  name: 'Christian D’Ambrosio',
  role: { it: 'Web designer e sviluppatore freelance', en: 'Freelance web designer & developer' },
  location: 'Trieste',
  email: contactEmail,
  phone: contactWhatsapp,
  whatsapp: contactWhatsapp,
  instagram: contactInstagram,
  vat: '09207350720',
  canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  responseTime: { it: 'Rispondo di solito entro poche ore', en: 'I usually reply within a few hours' },
} as const;

export function whatsappUrl(value: string) {
  return `https://wa.me/${value.replace(/\D/g, '')}`;
}

export function contactLinks(lang: Lang) {
  return {
    email: `mailto:${contactEmail}`,
    whatsapp: `${whatsappUrl(contactWhatsapp)}?text=${encodeURIComponent(whatsappMessages[lang])}`,
    instagram: contactInstagram,
  } as const;
}

export function navigation(lang: Lang) {
  return lang === 'en'
    ? [
      { label: 'Work', href: href('projects', 'en') },
      { label: 'Services', href: href('services', 'en') },
      { label: 'Pricing', href: href('pricing', 'en') },
      { label: 'How it works', href: href('process', 'en') },
      { label: 'About', href: href('about', 'en') },
    ]
    : [
      { label: 'Progetti', href: href('projects', 'it') },
      { label: 'Servizi', href: href('services', 'it') },
      { label: 'Prezzi', href: href('pricing', 'it') },
      { label: 'Come funziona', href: href('process', 'it') },
      { label: 'Chi sono', href: href('about', 'it') },
    ];
}
