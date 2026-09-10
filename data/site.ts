export const siteConfig = {
  name: 'Christian D’Ambrosio',
  role: 'Freelance web designer & developer',
  location: 'Trieste',
  availability: 'Disponibile per nuovi progetti',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '[INSERIRE EMAIL]',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '[INSERIRE NUMERO]',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '[INSERIRE NUMERO]',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '[INSERIRE URL]',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || '[INSERIRE URL]',
  vat: process.env.NEXT_PUBLIC_VAT_NUMBER || '[INSERIRE DATI]',
  canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  responseTime: 'Di solito rispondo entro 1–2 giorni lavorativi.',
} as const;

export function isConfigured(value: string) {
  return !value.startsWith('[INSERIRE');
}

export function whatsappUrl(value: string) {
  return `https://wa.me/${value.replace(/\D/g, '')}`;
}

export const navigation = [
  { label: 'Lavori', href: '/lavori' },
  { label: 'Demo', href: '/demo' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Metodo', href: '/#metodo' },
  { label: 'Chi sono', href: '/chi-sono' },
] as const;

export const contactProjectTypes = [
  'Sito web professionale',
  'Landing page',
  'Restyling',
  'Sito con prenotazioni',
  'Strumento digitale / web app',
  'Manutenzione e aggiornamenti',
  'Non lo so ancora',
] as const;

export const budgetRanges = [
  'Da definire insieme',
  'Fino a 1.500 €',
  '1.500–3.000 €',
  '3.000–5.000 €',
  'Oltre 5.000 €',
] as const;
