import Link from 'next/link';
import { navigation } from '@/data/site';

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link className="wordmark" href="/" aria-label="Christian D’Ambrosio, home">
        <span>Christian</span>
        <span>D’Ambrosio</span>
      </Link>
      <nav className="desktop-nav" aria-label="Navigazione principale">
        {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <Link className="header-cta desktop-cta" href="/contatti">Parliamone <span aria-hidden="true">↗</span></Link>
      <details className="mobile-menu">
        <summary>Menu <span aria-hidden="true">+</span></summary>
        <nav aria-label="Navigazione mobile">
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href}><span>0{index + 1}</span>{item.label}</Link>
          ))}
          <Link href="/contatti"><span>06</span>Contatti</Link>
        </nav>
      </details>
    </header>
  );
}
