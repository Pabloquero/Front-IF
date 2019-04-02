import React from "react"
import { Link } from "gatsby"

export default function CompraPropiedades() {
  return (
    <section
      className="hero is-medium has-background-warning"
      id="compraPropiedadesBanner"
    >
      <div className="hero-body">
        <div className="container">
          <div className="columns is-marginless">
            <div className="column is-10 is-offset-1  has-text-centered">
              <h1
                className="is-uppercase compraTerrenosTitle has-text-white is-size-3 is-size-5-touch"
                style={{ paddingBottom: `50px` }}
              >
                ¿Eres dueño de una propiedad donde podamos desarrollar un
                proyecto inmobiliario?
              </h1>
              <h1 className="is-size-5">
                <Link
                  className="has-text-dark is-radiusless is-size-6 is-size-7-touch button is-white is-uppercase is-large"
                  to="/compra-de-propiedades/"
                  style={{ padding: `25px 25px` }}
                >
                  Contáctanos acá
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
