import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TituloPage from "../components/titulo-page"
import FooterSpace from "../components/footer-top-space"
import ImagenFondo from "../components/fondo-pagina"
import CompraContenido from "../components/compra-contenido"

export default function Compra() {
  const data = useStaticQuery(graphql`
    query {
      ifapi {
        pagCompra {
          acf {
            imagen_de_fondo
            titulo
            descripcion
            imagen_destacada
          }
        }
      }
    }
  `)
  const titulo = {
    tituloLight: "Compra de",
    tituloBold: "Propiedades",
  }
  return (
    <Layout>
      <SEO
        title="Compra de Propiedades"
        keywords={[`fuenzalida`, `inmobiliaria`, `edificios`]}
      />
      <ImagenFondo imgf={data.ifapi.pagCompra.acf.imagen_de_fondo} />
      <TituloPage titulo={titulo} />
      <div className="container has-background-grey">
        <div className="columns is-marginless" style={{ padding: `10px 23px` }}>
          <div className="column is-10 is-offset-1 is-paddingless">
            <div className="columns is-marginless is-multiline is-centered">
              <CompraContenido info={data.ifapi.pagCompra.acf} />
            </div>
          </div>
        </div>
      </div>
      <FooterSpace />
    </Layout>
  )
}
