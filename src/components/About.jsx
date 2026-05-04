import './About.css'

export default function About() {
  return (
    <div className="about-wrap" id="about">
      <div className="section">
        <div className="about__layout">
          {/* Left: portrait */}
          <div className="about__photo">
            <div className="about__photo-placeholder">
              <span className="about__photo-label">Retrato</span>
            </div>
            <p className="about__photo-caption">Buenos Aires, 2024</p>
          </div>

          {/* Right: bio */}
          <div className="about__text">
            <p className="label" style={{ marginBottom: '1.5rem' }}>Bio</p>

            <div className="about__bio">
              <p>
                Mariana Rasdolsky (Buenos Aires, 1993) es fotógrafa. Vive y trabaja
                en Buenos Aires.
              </p>
              <p>
                Se formó en fotografía en la Universidad de Buenos Aires (UBA) y
                participó en seminarios y talleres con referentes de la fotografía
                latinoamericana contemporánea. Su práctica abarca el retrato, el
                documental urbano y las series conceptuales.
              </p>
              <p>
                Su trabajo ha sido exhibido en galerías de Argentina y publicado en
                medios editoriales independientes. Desde 2020 desarrolla una práctica
                fotográfica independiente, con comisiones editoriales, de retrato y
                comerciales para clientes del ámbito cultural y las artes.
              </p>
            </div>

            <table className="about__facts">
              <tbody>
                <tr>
                  <td className="about__fact-label">Basada en</td>
                  <td className="about__fact-value">Buenos Aires, Argentina</td>
                </tr>
                <tr>
                  <td className="about__fact-label">Práctica</td>
                  <td className="about__fact-value">Retratos · Documental · Conceptual</td>
                </tr>
                <tr>
                  <td className="about__fact-label">Medio</td>
                  <td className="about__fact-value">Analógica 35mm · Formato medio · Digital</td>
                </tr>
                <tr>
                  <td className="about__fact-label">Idiomas</td>
                  <td className="about__fact-value">Español · Inglés</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}
