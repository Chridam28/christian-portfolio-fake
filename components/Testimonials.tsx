import Link from 'next/link';
import { testimonials } from '@/data/projects';

export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="shell">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow dark">Dicono di me</p>
            <h2 id="testimonials-title">Parola a chi<br /><em>ci ha lavorato.</em></h2>
          </div>
          <p>Professionisti che mi hanno affidato il loro sito e che oggi lo usano tutti i giorni.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <figure className="testimonial-card reveal" key={item.slug}>
              <blockquote>“{item.quote}”</blockquote>
              <figcaption>
                <span className="testimonial-initials" aria-hidden="true">{item.author.replace(/^Dott\.(ssa)?\s+/, '').split(' ').map((word) => word[0]).join('').slice(0, 2)}</span>
                <span><strong>{item.author}</strong><small>{item.role}</small></span>
                <Link href={`/progetti/${item.slug}`}>Vedi il sito <span aria-hidden="true">↗</span></Link>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
