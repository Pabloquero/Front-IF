import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TituloPage from "../components/titulo-page"
import FooterSpace from "../components/footer-top-space"
import ImagenFondo from "../components/fondo-pagina"
import ItemGal from "../components/item-galeria"

export default function TrayectoriaPage() {
  const data = useStaticQuery(graphql`
    query {
      ifapi {
        pagTrayectoria {
          acf {
            imagen_de_fondo
            titulo_trayectoria
            texto_trayectoria
            item_galeria_1 {
              imagen
              proyecto
              comuna
            }
            item_galeria_2 {
              imagen
              proyecto
              comuna
            }
            item_galeria_3 {
              imagen
              proyecto
              comuna
            }
            item_galeria_4 {
              imagen
              proyecto
              comuna
            }
            item_galeria_5 {
              imagen
              proyecto
              comuna
            }
            item_galeria_6 {
              imagen
              proyecto
              comuna
            }
            item_galeria_7 {
              imagen
              proyecto
              comuna
            }
            item_galeria_8 {
              imagen
              proyecto
              comuna
            }
            item_galeria_9 {
              imagen
              proyecto
              comuna
            }
          }
        }
      }
    }
  `)
  const titulo = {
    tituloLight: "nuestra",
    tituloBold: "trayectoria",
  }
  return (
    <Layout>
      <SEO
        title="Trayectoria"
        keywords={[`fuenzalida`, `inmobiliaria`, `edificios`]}
      />
      <ImagenFondo imgf={data.ifapi.pagTrayectoria.acf.imagen_de_fondo} />
      <TituloPage titulo={titulo} />
      <div
        className="container has-background-grey"
        style={{ paddingTop: `10px` }}
      >
        <div
          className="columns is-marginless is-multiline"
          style={{ padding: `10px 23px` }}
        >
          <div className="column is-10 is-offset-1 is-paddingless">
            <div>
              <div className="columns is-marginless is-mobile is-multiline">
                <div className="column is-2 is-paddingless" />
                <div
                  className="column is-8 is-paddingless has-text-centered"
                  style={{ margin: `30px 0px 30px` }}
                >
                  <h1 className="is-family-secondary is-size-4 is-size-5-touch">
                    {data.ifapi.pagTrayectoria.acf.titulo_trayectoria}
                  </h1>
                </div>
                <div className="column is-2 is-paddingless" />
                <div className="column is-12">
                  <p
                    className="is-size-5 is-size-6-mobile has-text-centered has-text-justified is-family-code"
                    style={{ paddingBottom: `40px`, textAlignLast: `center` }}
                  >
                    {data.ifapi.pagTrayectoria.acf.texto_trayectoria}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="columns is-marginless is-multiline">
          <ItemGal item={data.ifapi.pagTrayectoria.acf.item_galeria_1} />
          <ItemGal item={data.ifapi.pagTrayectoria.acf.item_galeria_2} />
          <ItemGal item={data.ifapi.pagTrayectoria.acf.item_galeria_3} />
          <ItemGal item={data.ifapi.pagTrayectoria.acf.item_galeria_4} />
          <ItemGal item={data.ifapi.pagTrayectoria.acf.item_galeria_5} />
          <ItemGal item={data.ifapi.pagTrayectoria.acf.item_galeria_6} />
          <ItemGal item={data.ifapi.pagTrayectoria.acf.item_galeria_7} />
          <ItemGal item={data.ifapi.pagTrayectoria.acf.item_galeria_8} />
          <ItemGal item={data.ifapi.pagTrayectoria.acf.item_galeria_9} />
        </div>
      </div>
      <FooterSpace />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.648133762172!2d-70.57641678480186!3d-33.406342980786604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf27538cab01%3A0x726db94261be52c7!2sAlonso+de+C%C3%B3rdova+5320%2C+Las+Condes%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1ses!2scl!4v1551890153887"
        frameBorder="0"
        title="mapbox"
        style={{ border: 0, width: `100%`, height: `400px` }}
        allowFullScreen
      />
    </Layout>
  )
}
