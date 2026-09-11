import Link from 'next/link';

export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="shell contact-band-grid reveal">
        <p className="section-index">Pronto quando vuoi</p>
        <div>
          <h2>Hai un progetto in mente?<br /><em>Mettiamolo a fuoco.</em></h2>
          <p>Raccontami cosa ti serve, anche se è ancora solo un’idea. Ti rispondo con domande concrete e un primo orientamento.</p>
          <Link className="button button-accent" href="/contatti">Raccontami il tuo progetto <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
