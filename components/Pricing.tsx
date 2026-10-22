import Link from 'next/link';
import { maintenanceIncludes, pricingPackages } from '@/data/pricing';

type PricingProps = {
  index?: string;
  showFaqLink?: boolean;
};

export function Pricing({ index = 'Prezzi', showFaqLink = false }: PricingProps) {
  return (
    <section className="pricing-section" id="prezzi" aria-labelledby="pricing-title">
      <div className="shell">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow dark">{index}</p>
            <h2 id="pricing-title">Prezzi chiari,<br /><em>decisi prima.</em></h2>
          </div>
          <p>Scegli il pacchetto, mi mandi testi e immagini e in 48 ore vedi la prima demo funzionante del tuo sito.</p>
        </div>

        <div className="pricing-grid">
          {pricingPackages.map((item) => (
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
            <p className="eyebrow">Gestione annuale · 500 €/anno</p>
            <h3>Vuoi cambiare qualcosa? <em>Mi scrivi e lo faccio io.</em></h3>
            <p>Per tutto l’anno le modifiche ai contenuti sono incluse: testi, immagini, post, pagine già presenti. Nessun preventivo ogni volta, nessun pannello da imparare. Solo i lavori grossi, come nuove funzioni o un rifacimento, li valutiamo a parte.</p>
          </div>
          <div>
            <p className="list-title">Nella gestione è incluso anche</p>
            <ul>{maintenanceIncludes.map((line) => <li key={line}>{line}</li>)}</ul>
            <div className="maintenance-actions">
              <Link className="button button-accent" href="/contatti">Chiedimi un preventivo <span aria-hidden="true">↗</span></Link>
              {showFaqLink && <Link className="text-link light-link" href="/servizi#faq">Leggi le domande frequenti <span aria-hidden="true">↗</span></Link>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
