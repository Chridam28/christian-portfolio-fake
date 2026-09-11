type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  meta?: string;
};

export function PageHero({ eyebrow, title, intro, meta }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-grid">
        <p className="eyebrow page-enter page-enter-1">{eyebrow}</p>
        <div>
          <h1 className="page-enter page-enter-2">{title}</h1>
          <p className="page-enter page-enter-3">{intro}</p>
        </div>
        {meta && <p className="page-hero-meta page-enter page-enter-4">{meta}</p>}
      </div>
    </section>
  );
}
