import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Espacio from "./espacio"

export default function Espacios() {
  const data = useStaticQuery(graphql`
    query {
      ifapi {
        inicio {
          acf {
            diseno {
              titulo
              imagen
              descripcion
              alineacion
            }
            ubicacion {
              titulo
              imagen
              descripcion
              alineacion
            }
            tecnologia {
              titulo
              imagen
              descripcion
              alineacion
            }
            terminaciones {
              titulo
              imagen
              descripcion
              alineacion
            }
          }
        }
      }
    }
  `)
  return (
    <div className="container">
      <h2 className="has-text-primary has-text-weight-light is-size-2 is-size-4-touch has-text-centered-touch is-uppercase is-family-monospace">
        Creamos
      </h2>
      <h1
        className="has-text-primary has-text-weight-bold is-size-1 is-size-2-touch has-text-centered-touch is-uppercase is-family-monospace"
        style={{ lineHeight: `0.7em`, paddingBottom: `30px` }}
      >
        Espacios{" "}
        <span
          className="has-text-primary has-text-weight-bold is-size-7 has-text-centered-touch is-uppercase is-family-monospace"
          style={{ lineHeight: `0.7em` }}
        >
          de vida
        </span>
      </h1>
      <div
        className="columns is-marginless is-multiline"
        style={{ paddingTop: `40px` }}
      >
        <div className="columns is-marginless">
          <div className="column is-10 is-offset-1 is-paddingless">
            <React.Fragment>
              <Espacio espacio={data.ifapi.inicio.acf.diseno} />
              <Espacio espacio={data.ifapi.inicio.acf.ubicacion} />
              <Espacio espacio={data.ifapi.inicio.acf.tecnologia} />
              <Espacio espacio={data.ifapi.inicio.acf.terminaciones} />
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  )
}
