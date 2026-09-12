import Link from 'next/link';

export default function NotFound() {
  return <main className="not-found"><div className="shell"><p className="eyebrow">Errore / 404</p><span aria-hidden="true">404</span><h1>Questa pagina non è nel progetto.</h1><p>Il collegamento potrebbe essere cambiato oppure la pagina non esiste.</p><Link className="button button-accent" href="/">Torna alla homepage <b aria-hidden="true">↗</b></Link></div></main>;
}
