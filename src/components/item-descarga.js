import React from "react"

export default function ItemDescarga({
  descarga: { texto_descarga, link_descarga },
}) {
  return (
    <div
      className="columns is-marginless is-multiline is-vcentered"
      style={{
        paddingBottom: `20px`,
      }}
    >
      <div className="column is-paddingless is-8 has-text-right has-text-centered-mobile">
        {texto_descarga}
      </div>
      <div
        className=""
        style={{
          width: `30px`,
        }}
      />
      <div className="column is-paddingless is-3 has-text-centered-mobile">
        <a
          href={link_descarga}
          target="_blank"
          rel="noopener noreferrer"
          className="button is-primary has-text-white is-uppercase"
          style={{
            padding: `0px 15px`,
          }}
        >
          <span style={{ fontSize: `0.9em` }} className="is-family-code">
            descargar
          </span>
        </a>
      </div>
    </div>
  )
}
