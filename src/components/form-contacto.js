import React from "react"

export default function formContacto() {
  return (
    <div>
      <form action="" style={{ paddingTop: `40px` }}>
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
              htmlFor="comentarios"
              className="is-family-code is-size-5 is-size-6-mobile"
            >
              Mensaje:
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
  )
}
