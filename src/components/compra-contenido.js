import React from "react"

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
            style={{ paddingBottom: `40px` }}
          >
            {descripcion}
          </p>
        </div>

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
                conéctate con{" "}
                <span className="is-family-primary">nosotros</span>
              </h1>
            </div>
          </div>
          <form action="">
            <div className="field">
              <div className="column  is-paddingless is-12">
                <label
                  htmlFor="nombre"
                  className="is-family-code is-size-5 is-size-6-mobile"
                >
                  Nombre:
                </label>
                <div className="control">
                  <input type="text" className="input" />
                </div>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="column is-6-mobile is-paddingless">
                <label
                  htmlFor="telefono"
                  className="is-family-code is-size-5 is-size-6-mobile"
                >
                  Teléfono:
                </label>
                <div className="control">
                  <input type="text" className="input" />
                </div>
              </div>
              <div
                className="column is-1 is-hidden-mobile is-paddingless"
                style={{ width: `30px` }}
              />
              <div className="column is-6-mobile is-paddingless">
                <label
                  htmlFor="mail"
                  className="is-family-code is-size-5 is-size-6-mobile"
                >
                  Mail:
                </label>
                <div className="control">
                  <input type="text" className="input" />
                </div>
              </div>
            </div>
            <div className="field">
              <div className="column is-paddingless is-12">
                <label
                  htmlFor="comuna"
                  className="is-family-code is-size-5 is-size-6-mobile"
                >
                  Comuna:
                </label>
                <div className="control">
                  <input type="text" className="input" />
                </div>
              </div>
            </div>
            <div className="field">
              <div className="column is-paddingless is-12">
                <label
                  htmlFor="comentarios"
                  className="is-family-code is-size-5 is-size-6-mobile"
                >
                  Comentarios:
                </label>
                <div className="control">
                  <textarea className="textarea" name="comentarios" rows="6" />
                </div>
              </div>
            </div>
            <div className="field" style={{ padding: `30px 0px 40px` }}>
              <div className="column is-paddingless is-12">
                <div className="control">
                  <button className="has-text-white is-fullwidth is-radiusless is-size-5 is-size-6-touch button is-black is-uppercase is-large">
                    enviar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
