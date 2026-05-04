import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <div className="hero__eyebrow">
          <span className="hero__dot" />
          <span>Buenos Aires</span>
          <span className="hero__sep">·</span>
          <span>Argentina</span>
        </div>

        <h1 className="hero__name">
          <span className="hero__name-line">Mariana</span>
          <span className="hero__name-line hero__name-line--indent">Rasdolsky</span>
        </h1>

        <div className="hero__foot">
          <div className="hero__rule" />
          <p className="hero__discipline">Fotógrafa</p>
          <p className="hero__years">2018 — 2025</p>
        </div>
      </div>

      <a href="#work" className="hero__scroll" aria-label="Ir al trabajo">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-arrow">↓</span>
      </a>
    </section>
  )
}
