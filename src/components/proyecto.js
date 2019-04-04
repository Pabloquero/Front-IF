import React from "react"

export default function Proyecto({
  proyecto: {
    acf: {
      imagen_proyecto,
      imagen_logo,
      nombre_proyecto,
      ubicacion,
      bajada,
      caracteristicas_1,
      caracteristicas_2,
      link,
    },
  },
}) {
  let botonLink
  if (!Object.values({ link }).includes("")) {
    botonLink = (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="button is-primary has-text-white is-uppercase is-radiusless"
      >
        <span
          style={{ padding: `8px 25px 10px`, fontSize: `1.3em` }}
          className="is-family-code"
        >
          ver mas
        </span>
      </a>
    )
  } else {
    botonLink = (
      <span
        style={{ padding: `8px 25px 10px`, fontSize: `1.3em` }}
        className="is-family-code has-text-primary is-uppercase"
      >
        proximamente
      </span>
    )
  }

  let logoImg
  if (!Object.values({ imagen_logo }).includes("false")) {
    logoImg = (
      <div className="columns is-marginless is-mobile is-vcentered">
        <div className="column is-paddingless is-3 is-offset-1">
          <img
            src={imagen_logo}
            alt=""
            style={{ border: `1px solid #666666` }}
          />
        </div>
        <div className="column is-paddingless is-7">
          <div style={{ paddingLeft: `15px`, lineHeight: `1.5em` }}>
            <h1
              className="has-text-dark is-family-code is-uppercase"
              style={{ fontSize: `1.5em` }}
            >
              {nombre_proyecto}
            </h1>
            <h1
              className="has-text-primary is-family-code is-uppercase"
              style={{ fontSize: `1.5em` }}
            >
              {ubicacion}
            </h1>
            <p
              className="has-text-dark is-family-secondary is-uppercase"
              style={{ fontSize: `0.65em` }}
            >
              {bajada}
            </p>
          </div>
        </div>
      </div>
    )
  } else {
    logoImg = (
      <div className="columns is-marginless is-mobile is-vcentered">
        <div className="column is-paddingless is-12">
          <div style={{ lineHeight: `1.5em` }}>
            <h1
              className="has-text-dark is-family-code is-uppercase has-text-centered"
              style={{ fontSize: `1.5em` }}
            >
              {nombre_proyecto}
            </h1>
            <h1
              className="has-text-primary is-family-code is-uppercase has-text-centered"
              style={{ fontSize: `1.5em` }}
            >
              {ubicacion}
            </h1>
            <p
              className="has-text-dark is-family-secondary is-uppercase has-text-centered"
              style={{ fontSize: `0.65em` }}
            >
              {bajada}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="column is-4-desktop is-6-tablet is-paddingless">
      <div className="innerProyecto">
        <div
          className="columns is-marginless is-multiline is-mobile has-background-white"
          style={{ border: `1px solid #666666` }}
        >
          <div
            className="column is-paddingless is-12 is-mobile"
            style={{
              height: `250px`,
              backgroundImage: `url(${imagen_proyecto})`,
              backgroundPosition: `center center`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
              position: `relative`,
            }}
          />
          <div className="column is-paddingless is-12 is-mobile">
            <div className="innerInfo">
              {logoImg}
              <div className="columns is-marginless is-mobile">
                <div className="column is-12 has-text-centered">
                  <p
                    className="has-text-dark has-text-weight-normal"
                    style={{ fontSize: `0.65em` }}
                  >
                    {caracteristicas_1}
                  </p>
                  <p
                    className="has-text-dark has-text-weight-normal is-uppercase"
                    style={{ fontSize: `0.55em` }}
                  >
                    {caracteristicas_2}
                  </p>
                </div>
              </div>
              <div className="columns is-marginless is-mobile">
                <div className="column is-12 has-text-centered">
                  {botonLink}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
