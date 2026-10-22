import Link from 'next/link';
import { pricing } from '@/data/pricing';
import { href, sectionIds, type Lang } from '@/lib/i18n';

type PricingProps = {
  lang: Lang;
  index: string;
  showFaqLink?: boolean;
};

export function Pricing({ lang, index, showFaqLink = false }: PricingProps) {
  const { packages, maintenanceIncludes } = pricing[lang];
  const t = lang === 'en'
    ? {
      title: <>Clear prices,<br /><em>agreed upfront.</em></>,
      intro: 'Choose a package, send me your copy and images, and within 48 hours you’ll see the first working demo of your website.',
      planLabel: 'Annual care plan · €500/year',
      planTitle: <>Want to change something? <em>Message me and it’s done.</em></>,
      planText: 'All year round, content edits are included: copy, images, posts and existing pages. No quote every time, no dashboard to learn. Only major work, such as new features or a redesign, is quoted separately.',
      planList: 'The plan also covers',
      cta: 'Get a quote',
      faq: 'Read the FAQs',
    }
    : {
      title: <>Prezzi chiari,<br /><em>decisi prima.</em></>,
      intro: 'Scegli il pacchetto, mi mandi testi e immagini e in 48 ore vedi la prima demo funzionante del tuo sito.',
      planLabel: 'Gestione annuale · 500 €/anno',
      planTitle: <>Vuoi cambiare qualcosa? <em>Mi scrivi e lo faccio io.</em></>,
      planText: 'Per tutto l’anno le modifiche ai contenuti sono incluse: testi, immagini, post, pagine già presenti. Nessun preventivo ogni volta, nessun pannello da imparare. Solo i lavori grossi, come nuove funzioni o un rifacimento, li valutiamo a parte.',
      planList: 'Nella gestione è incluso anche',
      cta: 'Chiedimi un preventivo',
      faq: 'Leggi le domande frequenti',
    };

  return (
    <section className="pricing-section" id={sectionIds.pricing[lang]} aria-labelledby="pricing-title">
      <div className="shell">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow dark">{index}</p>
            <h2 id="pricing-title">{t.title}</h2>
          </div>
          <p>{t.intro}</p>
        </div>

        <div className="pricing-grid">
          {packages.map((item) => (
            <article className={`pricing-card reveal${item.highlight ? ' is-highlight' : ''}`} key={item.id}>
              <h3>{item.name}</h3>
              <p className="pricing-price"><strong>{item.price}</strong><span>{item.priceNote}</span></p>
              {item.maintenance && <p className="pricing-maintenance">{item.maintenance}</p>}
              <p className="pricing-pitch">{item.pitch}</p>
              <ul>{item.includes.map((line) => <li key={line}>{line}</li>)}</ul>
            </article>
          ))}
        </div>

        <div className="maintenance-box reveal">
          <div>
            <p className="eyebrow">{t.planLabel}</p>
            <h3>{t.planTitle}</h3>
            <p>{t.planText}</p>
          </div>
          <div>
            <p className="list-title">{t.planList}</p>
            <ul>{maintenanceIncludes.map((line) => <li key={line}>{line}</li>)}</ul>
            <div className="maintenance-actions">
              <Link className="button button-accent" href={href('contact', lang)}>{t.cta} <span aria-hidden="true">↗</span></Link>
              {showFaqLink && <Link className="text-link light-link" href={href('faq', lang)}>{t.faq} <span aria-hidden="true">↗</span></Link>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
