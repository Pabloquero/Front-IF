import React from "react"

export default function Portada() {
  return (
    <div>
      <section
        className="hero is-fullheight"
        style={{
          backgroundImage: `url(http://www.betafuenzalida.bylcomunicaciones.com/wp-content/uploads/2019/05/22222.jpg)`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center center`,
          backgroundSize: `cover`,
        }}
      >
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="is-size-2 is-size-4-touch has-text-white is-uppercase">
              espacios de vida
            </h1>
            <h1 className="is-size-2 is-size-4-touch has-text-white is-uppercase">
              para los que buscan más
            </h1>
          </div>
        </div>
      </section>
    </div>
  )
}
