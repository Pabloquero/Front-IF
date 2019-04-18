import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Convenio from "./convenio"

export default function conveniosContainer() {
  const data = useStaticQuery(graphql`
    query {
      ifapi {
        convenios {
          id
          status
          acf {
            enunciado
            proyectos
            logo
            fondo
            texto
          }
        }
      }
    }
  `)
  return (
    <React.Fragment>
      {// eslint-disable-next-line
      data.ifapi.convenios.map(convenio => {
        if (convenio.status === "publish")
          return <Convenio key={convenio.id} convenio={convenio} />
      })}
    </React.Fragment>
  )
}
