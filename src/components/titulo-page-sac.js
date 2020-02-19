import React from "react"
import classNames from "classnames"

export default function tituloPageSAC({ titulo: { tituloLight, tituloBold } }) {
  return (
    <div className="containerTwo tituloPage">
      <h2
        className={classNames(
          "has-text-white has-text-weight-light is-size-3 is-size-4-mobile has-text-centered-touch is-uppercase is-family-monospace",
          {
            "is-invisible": tituloLight === "_",
          }
        )}
      >
        {tituloLight}
      </h2>
      <h1 className="has-text-white has-text-weight-bold is-size-2 is-size-3-mobile has-text-centered-touch is-uppercase is-family-monospace">
        {tituloBold}
      </h1>
    </div>
  )
}
