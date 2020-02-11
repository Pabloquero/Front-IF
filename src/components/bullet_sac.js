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
            height: `120px`,
            width: `120px`,
            margin: `auto`,
            borderRadius: `50%`,
          }}
        >
          <img
            src={icono}
            alt=""
            className="image"
            style={{
              height: `120px`,
              margin: `auto`,
            }}
          />
        </div>
      </div>
      <p
        className="is-family-primary is-size-4"
        style={{ padding: `10px 70px`, lineHeight: `1.2em` }}
      >
        {texto}
      </p>
    </div>
  )
}
