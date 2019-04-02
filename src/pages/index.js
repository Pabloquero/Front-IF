import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Espacios from "../components/espacios"
import Portada from "../components/portada"
import Proyectos from "../components/proyectos"
import CompraPropiedades from "../components/compra-propiedades"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Inicio"
        keywords={[`fuenzalida`, `inmobiliaria`, `edificios`]}
      />
      <Portada />
      <section className="hero has-background-grey">
        <div className="hero-body">
          <Proyectos />
        </div>
      </section>
      <section className="hero has-background-white">
        <div className="hero-body">
          <Espacios />
        </div>
      </section>
      <CompraPropiedades />
    </Layout>
  )
}

export default IndexPage
