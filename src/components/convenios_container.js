import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ConvenioUno from "./convenio"
import ConvenioDos from "./convenio_dos"

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

  let orden = 0

  function oddOrEven(x) {
    return x & 1 ? "impar" : "par"
  }

  return (
    <React.Fragment>
      {// eslint-disable-next-line
      data.ifapi.convenios.map(convenio => {
        if (convenio.status === "publish") {
          orden = orden + 1
          let parOimpar = oddOrEven(orden)
          if (parOimpar === "par") {
            return <ConvenioDos key={convenio.id} convenio={convenio} />
          } else {
            return <ConvenioUno key={convenio.id} convenio={convenio} />
          }
        }
      })}
    </React.Fragment>
  )
}
