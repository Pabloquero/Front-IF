import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TituloPage from "../components/titulo-page"
import FooterSpace from "../components/footer-top-space"
import ImagenFondo from "../components/fondo-pagina"
import ConveniosContainer from "../components/convenios_container"

export default function ProyectosPage() {
  const data = useStaticQuery(graphql`
    query {
      ifapi {
        pagOportunidades {
          acf {
            imagen_de_fondo
            titulo_oportunidades
            texto_oportunidades
          }
        }
      }
    }
  `)

  const titulo = {
    tituloLight: " ",
    tituloBold: "Oportunidades",
  }

  return (
    <Layout>
      <SEO
        title="Oportunidades"
        keywords={[`fuenzalida`, `inmobiliaria`, `edificios`]}
      />
      <ImagenFondo imgf={data.ifapi.pagOportunidades.acf.imagen_de_fondo} />
      <TituloPage titulo={titulo} />

      <div
        className="container has-background-grey"
        style={{ paddingTop: `10px` }}
      >
        <div className="columns is-marginless" style={{ padding: `10px 23px` }}>
          <div className="column is-10 is-offset-1 is-paddingless">
            <div className="columns is-marginless is-mobile is-multiline">
              <div className="column is-2 is-paddingless" />
              <div
                className="column is-8 is-paddingless has-text-centered"
                style={{ margin: `30px 0px 30px` }}
              >
                <h1 className="is-family-secondary is-size-4 is-size-5-touch">
                  {data.ifapi.pagOportunidades.acf.titulo_oportunidades}
                </h1>
              </div>
              <div className="column is-2 is-paddingless" />
              <div className="column is-12">
                <p
                  className="is-size-5 is-size-6-mobile has-text-centered is-family-code"
                  style={{ paddingBottom: `40px` }}
                >
                  {data.ifapi.pagOportunidades.acf.texto_oportunidades}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-marginless is-multiline">
          <ConveniosContainer />
        </div>
      </div>
      <FooterSpace />
    </Layout>
  )
}
