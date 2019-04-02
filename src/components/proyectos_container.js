import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Proyecto from "./proyecto"

export default function proyectosContainer() {
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
    <React.Fragment>
      {data.ifapi.proyectos.map(proyecto => {
        if (proyecto.status === "publish")
          return <Proyecto key={proyecto.id} proyecto={proyecto} />
      })}
    </React.Fragment>
  )
}
