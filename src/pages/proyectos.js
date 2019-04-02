import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TituloPage from "../components/titulo-page"
import FooterSpace from "../components/footer-top-space"
import ImagenFondo from "../components/fondo-pagina"
import ProyectoContainer from "../components/proyectos_container"

export default function ProyectosPage() {
  const data = useStaticQuery(graphql`
    query {
      ifapi {
        pagProyectos {
          acf {
            imagen_de_fondo
          }
        }
      }
    }
  `)

  const titulo = {
    tituloLight: "Nuestros",
    tituloBold: "Proyectos",
  }

  return (
    <Layout>
      <SEO
        title="Proyectos"
        keywords={[`fuenzalida`, `inmobiliaria`, `edificios`]}
      />
      <ImagenFondo imgf={data.ifapi.pagProyectos.acf.imagen_de_fondo} />
      <TituloPage titulo={titulo} />

      <div
        className="container has-background-grey"
        style={{ paddingTop: `10px` }}
      >
        <div className="columns is-marginless" style={{ padding: `10px 23px` }}>
          <div className="column is-12 is-paddingless">
            <div className="columns is-marginless is-multiline is-centered">
              <ProyectoContainer />
            </div>
          </div>
        </div>
      </div>
      <FooterSpace />
    </Layout>
  )
}
