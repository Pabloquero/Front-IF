import React from "react"

export default function bullet({ bullet: { icono, texto } }) {
  return (
    <div
      className="column is-paddingless is-4-desktop is-6-tablet is-12-mobile has-text-centered"
      style={{ margin: `30px 0px` }}
    >
      <div className="has-text-centered">
        <div
          style={{
            backgroundColor: `white`,
            height: `110px`,
            width: `110px`,
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
              paddingTop: `15px`,
            }}
          />
        </div>
      </div>
      <p
        className="is-family-primary is-size-6"
        style={{ padding: `10px 35px` }}
      >
        {texto}
      </p>
    </div>
  )
}
