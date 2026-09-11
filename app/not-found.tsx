import Link from 'next/link';

export default function NotFound() {
  return <main className="not-found"><div className="shell"><p className="eyebrow page-enter page-enter-1">Errore / 404</p><span className="page-enter page-enter-2" aria-hidden="true">404</span><h1 className="page-enter page-enter-3">Questa pagina non è nel progetto.</h1><p className="page-enter page-enter-4">Il collegamento potrebbe essere cambiato oppure la pagina non esiste.</p><div className="page-enter page-enter-5"><Link className="button button-accent" href="/">Torna alla homepage <b aria-hidden="true">↗</b></Link></div></div></main>;
}
