import { ContactBand } from '@/components/ContactBand';
import { PageHero } from '@/components/PageHero';
import { ProjectGallery } from '@/components/ProjectGallery';
import { getProjects } from '@/data/projects';
import type { Lang } from '@/lib/i18n';

const copy = {
  it: { eyebrow: 'Portfolio / Progetti', title: 'Lavori e demo.', intro: 'Siti già online per clienti veri e demo che puoi aprire e provare: guarda come potrebbe funzionare il tuo.', count: 'progetti' },
  en: { eyebrow: 'Portfolio / Work', title: 'Work and demos.', intro: 'Websites already live for real clients and demos you can open and try: see how yours could work.', count: 'projects' },
};

export function PortfolioPage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const items = getProjects(lang);
  return (
    <main>
      <PageHero eyebrow={t.eyebrow} title={t.title} intro={t.intro} meta={`${items.length} ${t.count}`} />
      <section className="listing-section shell"><ProjectGallery lang={lang} items={items} /></section>
      <ContactBand lang={lang} />
    </main>
  );
}
