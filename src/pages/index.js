import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      ifapi {
        inicio {
          acf {
            tecnologia {
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
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1 className="has-text-primary is-primary is-size-1">
        {data.ifapi.inicio.acf.tecnologia.titulo}
      </h1>
      <p className="has-text-info is-info is-size-1">
        Welcome to your new Gatsby site.
      </p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
