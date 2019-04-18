import React from "react"

export default function Convenio({
  convenio: {
    acf: { enunciado, proyectos, logo, fondo, texto },
  },
}) {
  return (
    <div
      className="column is-12 is-paddingless"
      style={{
        backgroundImage: `url(${fondo})`,
        width: `100%`,
        position: `absolute`,
      }}
    >
      <section className="hero">
        <div className="hero-body">
          <div className="columns is-marginless">
            <div className="column is-paddingless is-offset-1 is-10">
              <div className="columns is-marginless">
                <div className="column is-7 is-paddingless has-text-centered-mobile">
                  <img src={logo} alt="" style={{ maxHeight: `100px` }} />
                </div>
                <div className="column is-5 is-paddingless has-background-warning">
                  <div style={{ padding: `30px` }}>
                    <h1
                      className="has-text-white is-size-5 has-text-right is-family-secondary  has-text-centered-mobile"
                      style={{ lineHeight: `1.8em` }}
                    >
                      {enunciado}
                    </h1>
                    <h1 className="has-text-white is-size-6 has-text-right is-family-code has-text-centered-mobile">
                      {texto}
                    </h1>
                    <h1 className="has-text-white is-size-6 has-text-right is-family-secondary has-text-centered-mobile">
                      {proyectos}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
