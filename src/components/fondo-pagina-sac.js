import React from "react"

export default function fondoPagina({ imgf }) {
  return (
    <div
      className="imagenFondoPaginasSAC"
      style={{
        backgroundImage: `url(${imgf})`,
        width: `100%`,
        position: `absolute`,
      }}
    >
      <div
        className="has-background-warning"
        style={{
          height: `600px`,
          width: `100%`,
        }}
      />
    </div>
  )
}
