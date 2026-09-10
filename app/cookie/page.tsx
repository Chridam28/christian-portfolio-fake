import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = { title: 'Cookie policy', robots: { index: false, follow: true }, alternates: { canonical: '/cookie' } };

export default function CookiePage() {
  return <main><PageHero eyebrow="Informativa / Cookie" title="Cookie policy." intro="Il progetto non attiva strumenti di profilazione o analytics finché non vengono forniti identificativi e configurazione privacy." meta="Nessun banner necessario nella configurazione attuale" /><article className="legal-page shell"><h2>1. Configurazione attuale</h2><p>Il sito, nella configurazione consegnata, non imposta cookie pubblicitari, di profilazione o analytics di terze parti.</p><h2>2. Funzioni tecniche</h2><p>Il sito è statico. Il modulo di contatto è predisposto per Netlify Forms e include un campo honeypot antispam. Verificare le funzioni eventualmente applicate dal provider nella configurazione definitiva.</p><h2>3. Analytics predisposti ma non attivi</h2><p>Il codice espone eventi tecnici per apertura progetti e demo, clic esterni, WhatsApp, apertura e invio del modulo. Nessun dato viene trasmesso a servizi analytics finché non viene collegato uno strumento e aggiornata l’informativa.</p><h2>4. Modifiche future</h2><p>Se verranno attivati servizi che usano cookie non tecnici, questa informativa dovrà essere aggiornata e andrà introdotto un meccanismo di consenso conforme.</p></article></main>;
}
