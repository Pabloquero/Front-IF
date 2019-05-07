import React from "react"
import FormularioCompraPropiedades from "./form-compraprop"

export default function compraContenido({
  info: { titulo, descripcion, imagen_destacada },
}) {
  return (
    <div>
      <div className="columns is-marginless is-multiline is-touch">
        <div className="column is-12">
          <h1 className="has-text-centered has-text-black-ter is-size-4 is-size-5-mobile">
            {titulo}
          </h1>
        </div>
        <div className="column is-10 is-offset-1">
          <p
            className="is-size-5 is-size-6-mobile has-text-centered is-family-code"
            style={{ paddingBottom: `30px` }}
          >
            {descripcion}
          </p>
        </div>
      </div>
      <div className="columns is-marginless is-multiline is-touch has-background-white">
        <div className="column is-paddingless is-12">
          <img src={imagen_destacada} alt="" />
        </div>
        <div className="column is-paddingless is-10 is-offset-1">
          <div
            className="columns is-marginless is-multiline"
            style={{ padding: `30px 0px` }}
          >
            <div className="column is-paddingless is-12 has-text-centered">
              <h1 className="is-uppercase is-size-4 is-size-5-mobile is-family-monospace">
                contáctate con{" "}
                <span className="is-family-primary">nosotros</span>
              </h1>
            </div>
          </div>
          <div className="columns is-marginless">
            <div className="column is-paddingless is-12 is-10-mobile is-offset-1-mobile">
              <FormularioCompraPropiedades />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
