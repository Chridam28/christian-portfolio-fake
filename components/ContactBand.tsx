import Link from 'next/link';

export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="shell contact-band-grid reveal">
        <p className="section-index">Preventivo senza impegno</p>
        <div>
          <h2>Ti serve un sito?<br /><em>Scrivimi.</em></h2>
          <p>Raccontami in due righe di cosa ti occupi e cosa ti serve: ti rispondo con una proposta e un prezzo. La prima demo è pronta in 48 ore da quando mi mandi testi e immagini.</p>
          <Link className="button button-accent" href="/contatti">Scrivimi ora <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
