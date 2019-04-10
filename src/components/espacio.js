import React from "react"

export default function Espacio({
  espacio: { titulo, imagen, descripcion, alineacion },
}) {
  if (alineacion === "izq")
    return (
      <div className="column is-12 is-paddingless">
        <div className="columns is-marginless is-vcentered">
          <div className="column is-5 is-paddingless">
            <img src={imagen} alt="" />
          </div>
          <div className="column is-7 is-paddingless">
            <div style={{ paddingLeft: `25px` }}>
              <div
                style={{ paddingLeft: `20px`, borderLeft: `4px #470a68 solid` }}
              >
                <h1
                  className="is-uppercase is-size-3 is-size-4-touch has-text-primary is-family-code"
                  style={{ lineHeight: `1em` }}
                >
                  {titulo}
                </h1>
                <p
                  className="is-size-5 is-size-6-touch has-text-dark is-family-code"
                  style={{
                    paddingTop: `10px`,
                    textAlign: `justify`,
                    textAlignLast: `left`,
                  }}
                >
                  {descripcion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  else if (alineacion === "der") {
    return (
      <div className="column is-12 is-paddingless">
        <div className="columns is-marginless is-vcentered">
          <div className="column is-7 is-paddingless is-hidden-touch">
            <div style={{ paddingRight: `25px` }}>
              <div
                style={{
                  paddingRight: `20px`,
                  borderRight: `4px #470a68 solid`,
                }}
              >
                <h1
                  className="is-uppercase is-size-3 is-size-4-touch has-text-primary is-family-code has-text-right"
                  style={{ lineHeight: `1em` }}
                >
                  {titulo}
                </h1>
                <p
                  className="is-size-5 is-size-6-touch has-text-dark is-family-code"
                  style={{
                    paddingTop: `10px`,
                    textAlign: `justify`,
                    textAlignLast: `right`,
                  }}
                >
                  {descripcion}
                </p>
              </div>
            </div>
          </div>
          <div className="column is-5 is-paddingless">
            <img src={imagen} alt="" />
          </div>
          <div className="column is-7 is-paddingless is-hidden-desktop">
            <div style={{ paddingRight: `25px` }}>
              <div
                style={{
                  paddingRight: `20px`,
                  borderRight: `4px #470a68 solid`,
                }}
              >
                <h1
                  className="is-uppercase is-size-3 is-size-4-touch has-text-primary is-family-code has-text-right"
                  style={{ lineHeight: `1em` }}
                >
                  {titulo}
                </h1>
                <p
                  className="is-size-5 is-size-6-touch has-text-dark is-family-code has-text-right"
                  style={{ paddingTop: `10px` }}
                >
                  {descripcion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
