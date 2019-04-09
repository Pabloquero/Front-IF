import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TituloPage from "../components/titulo-page"
import FooterSpace from "../components/footer-top-space"
import ImagenFondo from "../components/fondo-pagina"
import Bullet from "../components/bullet"

export default function InversionistasPage() {
  const data = useStaticQuery(graphql`
    query {
      ifapi {
        pagInversionistas {
          acf {
            imagen_de_fondo
            grafico
            titulo_bullets
            bullet_1 {
              icono
              texto
            }
            bullet_2 {
              icono
              texto
            }
            bullet_3 {
              icono
              texto
            }
            bullet_4 {
              icono
              texto
            }
            bullet_5 {
              icono
              texto
            }
            bullet_6 {
              icono
              texto
            }
          }
        }
      }
    }
  `)
  const titulo = {
    tituloLight: "Sé un",
    tituloBold: "Inversionista",
  }
  return (
    <Layout>
      <SEO
        title="Inversionistas"
        keywords={[`fuenzalida`, `inmobiliaria`, `edificios`]}
      />
      <ImagenFondo imgf={data.ifapi.pagInversionistas.acf.imagen_de_fondo} />
      <TituloPage titulo={titulo} />
      <div
        className="container has-background-grey"
        style={{ paddingTop: `10px` }}
      >
        <div
          className="columns is-marginless is-multiline"
          style={{ padding: `10px 23px` }}
        >
          <div className="column is-12-desktop is-10-widescreen is-offset-1-widescreen is-paddingless">
            <div className="columns is-marginless is-mobile is-multiline">
              <div className="column is-2 is-paddingless" />
              <div
                className="column is-8 is-paddingless has-text-centered"
                style={{ margin: `30px 0px 30px` }}
              >
                <h1 className="is-family-secondary is-size-4 is-size-5-touch">
                  {data.ifapi.pagInversionistas.acf.titulo_bullets}
                </h1>
              </div>
              <div className="column is-2 is-paddingless" />
              <Bullet bullet={data.ifapi.pagInversionistas.acf.bullet_1} />
              <Bullet bullet={data.ifapi.pagInversionistas.acf.bullet_2} />
              <Bullet bullet={data.ifapi.pagInversionistas.acf.bullet_3} />
              <Bullet bullet={data.ifapi.pagInversionistas.acf.bullet_4} />
              <Bullet bullet={data.ifapi.pagInversionistas.acf.bullet_5} />
              <Bullet bullet={data.ifapi.pagInversionistas.acf.bullet_6} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="columns is-marginless">
          <div className="column is-paddingless is-10 is-offset-1">
            <h1
              className="is-family-code is-uppercase is-size-4 is-size-5-touch has-text-left has-text-centered-touch"
              style={{ padding: `30px  0px 10px` }}
            >
              <span className="is-family-secondary">rentabiliadad</span> en el
              mercado
            </h1>
            <div className="columns is-marginless is-vcentered">
              <div className="column is-paddingless is-6">
                <img src={data.ifapi.pagInversionistas.acf.grafico} alt="" />
              </div>
              <div className="column is-hidden-mobile is-paddingless is-offset-2 is-4 has-background-dark has-text-white">
                <div
                  className="has-text-centered"
                  style={{ padding: `15px 10px` }}
                >
                  <h1 className="is-size-5 is-size-6-mobile is-family-code is-uppercase">
                    ¿Estás pensando
                    <br />
                    <span className="is-family-secondary">en invertir?</span>
                  </h1>
                  <p className="is-size-6 is-family-code">
                    Queremos asesorarte
                    <br />
                    de la mejor manera
                  </p>
                  <div
                    style={{
                      padding: `5px`,
                    }}
                  >
                    <Link
                      className="is-size-5 has-text-white is-uppercase"
                      to="/contacto/"
                      state={{
                        state: "inversionistas",
                      }}
                      style={{
                        textDecoration: `none`,
                        borderBottom: `1px solid white`,
                      }}
                    >
                      escribenos acá
                    </Link>
                  </div>
                </div>
              </div>
              <div className="column is-hidden-tablet is-paddingless is-offset-2 is-4 has-background-white has-text-dark">
                <div
                  className="has-text-centered"
                  style={{ padding: `15px 10px` }}
                >
                  <h1 className="is-size-5 is-size-6-mobile is-family-code is-uppercase">
                    ¿Estás pensando
                    <br />
                    <span className="is-family-secondary">en invertir?</span>
                  </h1>
                  <p className="is-size-6 is-family-code">
                    Queremos asesorarte
                    <br />
                    de la mejor manera
                  </p>
                  <div
                    style={{
                      padding: `5px`,
                    }}
                  >
                    <Link
                      className="is-size-5 has-text-primary is-uppercase"
                      to="/contacto/"
                      state={{
                        state: "inversionistas",
                      }}
                      style={{
                        textDecoration: `none`,
                        borderBottom: `1px solid #470a68`,
                      }}
                    >
                      escribenos acá
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSpace />
    </Layout>
  )
}
