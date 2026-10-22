import Link from 'next/link';
import { SiteChrome } from '@/components/SiteChrome';

export default function NotFound() {
  return (
    <SiteChrome lang="it">
      <main className="not-found"><div className="shell"><p className="eyebrow">Errore / 404</p><span aria-hidden="true">404</span><h1>Questa pagina non è nel progetto.</h1><p>Il collegamento potrebbe essere cambiato oppure la pagina non esiste.</p><Link className="button button-accent" href="/">Torna alla homepage <b aria-hidden="true">↗</b></Link><p lang="en" className="not-found-en">Page not found. <Link href="/en/">Go to the English homepage ↗</Link></p></div></main>
    </SiteChrome>
  );
}
