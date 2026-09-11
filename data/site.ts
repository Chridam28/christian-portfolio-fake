const contactEmail = 'christiandambrosio2002@gmail.com';
const contactWhatsapp = '+39 379 354 7457';
const contactInstagram = 'https://www.instagram.com/chri_dam/';
const whatsappMessage = 'Ciao Christian, vorrei parlarti di un progetto web.';

export const siteConfig = {
  name: 'Christian D’Ambrosio',
  role: 'Freelance web designer & developer',
  location: 'Trieste',
  availability: 'Disponibile per nuovi progetti',
  email: contactEmail,
  phone: contactWhatsapp,
  whatsapp: contactWhatsapp,
  instagram: contactInstagram,
  vat: process.env.NEXT_PUBLIC_VAT_NUMBER || '[INSERIRE DATI]',
  canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  responseTime: 'Generalmente entro poche ore.',
} as const;

export function whatsappUrl(value: string) {
  return `https://wa.me/${value.replace(/\D/g, '')}`;
}

export const contactLinks = {
  email: `mailto:${contactEmail}`,
  whatsapp: `${whatsappUrl(contactWhatsapp)}?text=${encodeURIComponent(whatsappMessage)}`,
  instagram: contactInstagram,
} as const;

export const navigation = [
  { label: 'Progetti', href: '/#progetti' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Metodo', href: '/#metodo' },
  { label: 'Chi sono', href: '/chi-sono' },
] as const;
