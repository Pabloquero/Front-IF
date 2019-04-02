import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Espacios from "../components/espacios"
import Portada from "../components/portada"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Inicio"
        keywords={[`fuenzalida`, `inmobiliaria`, `edificios`]}
      />
      <Portada />
      <section className="hero has-background-white">
        <div className="hero-body">
          <Espacios />
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
