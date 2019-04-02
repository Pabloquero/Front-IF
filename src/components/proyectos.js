import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Proyecto from "./proyecto"

export default function Proyectos() {
  const data = useStaticQuery(graphql`
    query {
      ifapi {
        proyectos {
          id
          status
          acf {
            imagen_proyecto
            imagen_logo
            nombre_proyecto
            ubicacion
            bajada
            caracteristicas_1
            caracteristicas_2
            link
          }
        }
      }
    }
  `)
  return (
    <div className="container">
      <h2 className="has-text-primary has-text-weight-light is-size-2 is-size-3-touch has-text-centered-touch is-uppercase is-family-monospace">
        Nuestros
      </h2>
      <h1
        className="has-text-primary has-text-weight-bold is-size-1 is-size-2-touch has-text-centered-touch is-uppercase is-family-monospace"
        style={{ lineHeight: `0.7em` }}
      >
        Proyectos
      </h1>
      <div className="columns is-marginless" style={{ paddingTop: `50px` }}>
        <div className="column is-12 is-paddingless">
          <div className="columns is-marginless is-multiline is-centered">
            {(() => {
              return (
                <React.Fragment>
                  {data.ifapi.proyectos.map(proyecto => {
                    if (proyecto.status === "publish")
                      return <Proyecto key={proyecto.id} proyecto={proyecto} />
                  })}
                </React.Fragment>
              )
            })()}
          </div>
        </div>
      </div>
    </div>
  )
}
