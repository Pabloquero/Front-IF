import React from "react"

export default function bullet({ bullet: { icono, texto } }) {
  return (
    <div
      className="column is-paddingless is-4-desktop is-4-tablet is-12-mobile has-text-centered"
      style={{ margin: `20px 0px 30px` }}
    >
      <div className="has-text-centered">
        <div
          style={{
            backgroundColor: `white`,
            height: `90px`,
            width: `90px`,
            margin: `auto`,
            borderRadius: `50%`,
          }}
        >
          <img
            src={icono}
            alt=""
            className="image"
            style={{
              height: `90px`,
              margin: `auto`,
            }}
          />
        </div>
      </div>
      <p
        className="is-family-primary is-size-5"
        style={{ padding: `5px 70px`, lineHeight: `1em` }}
      >
        {texto}
      </p>
    </div>
  )
}
