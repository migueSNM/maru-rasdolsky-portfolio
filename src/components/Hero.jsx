import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" />

      <div className="hero__content">
        <div className="hero__eyebrow">
          <span className="hero__dot" />
          <span>Buenos Aires, Argentina</span>
          <span className="hero__sep">·</span>
          <span>Est. 2018</span>
        </div>

        <h1 className="hero__name">
          <span className="hero__name-first">Mariana</span>
          <span className="hero__name-last">Rasdolsky</span>
        </h1>

        <div className="hero__tagline-wrap">
          <div className="hero__rule" />
          <p className="hero__tagline">Photographer</p>
        </div>

        <p className="hero__description">
          Visual storytelling through light, shadow,<br className="hero__br" /> and human connection.
        </p>
      </div>

      <div className="hero__scroll">
        <a href="#work" className="hero__scroll-link">
          <span className="hero__scroll-label">Scroll</span>
          <span className="hero__scroll-arrow">↓</span>
        </a>
      </div>

      <div className="hero__index">
        <span>2018 — 2025</span>
      </div>
    </section>
  )
}
