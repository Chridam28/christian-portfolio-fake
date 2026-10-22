import Link from 'next/link';
import { getTestimonials } from '@/data/projects';
import { projectHref, type Lang } from '@/lib/i18n';

export function Testimonials({ lang }: { lang: Lang }) {
  const testimonials = getTestimonials(lang);
  if (testimonials.length === 0) return null;
  const t = lang === 'en'
    ? { eyebrow: 'Kind words', title: <>In the words<br /><em>of my clients.</em></>, intro: 'Professionals who trusted me with their website and now use it every day.', link: 'See the website' }
    : { eyebrow: 'Dicono di me', title: <>Parola a chi<br /><em>ci ha lavorato.</em></>, intro: 'Professionisti che mi hanno affidato il loro sito e che oggi lo usano tutti i giorni.', link: 'Vedi il sito' };

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="shell">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow dark">{t.eyebrow}</p>
            <h2 id="testimonials-title">{t.title}</h2>
          </div>
          <p>{t.intro}</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <figure className="testimonial-card reveal" key={item.slug}>
              <blockquote>“{item.quote}”</blockquote>
              <figcaption>
                <span className="testimonial-initials" aria-hidden="true">{item.author.replace(/^(Dott\.(ssa)?|Dr\.?)\s+/, '').split(' ').map((word) => word[0]).join('').slice(0, 2)}</span>
                <span><strong>{item.author}</strong><small>{item.role}</small></span>
                <Link href={projectHref(item.slug, lang)}>{t.link} <span aria-hidden="true">↗</span></Link>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
