import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import mapboxgl from "mapbox-gl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TituloPage from "../components/titulo-page"
import FooterSpace from "../components/footer-top-space"
import ImagenFondo from "../components/fondo-pagina"
import ItemGal from "../components/item-galeria"

export default function TrayectoriaPage() {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2FtZXN0ZWJhbiIsImEiOiJjamQzMGc3dDcyNTRkMzNtd2xqeG5yamQxIn0.ETSluXXZBWgPZtHU0S_AGw"
    var map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/samesteban/cji1si39w01pm2slr4fd0fiet", // stylesheet location
      center: [-70.604226, -33.407916], // starting position [lng, lat]
      zoom: 12, // starting zoom
    })

    map.doubleClickZoom.disable()
    // 			map.scrollZoom.disable();

    map.on("click", "fuenzalida-trayectoria", function(e) {
      var coordinates = e.features[0].geometry.coordinates.slice()
      var description = e.features[0].properties.title

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
      }

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML("<h5>" + description + "</h5>")
        .addTo(map)
    })
    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on("mouseenter", "fuenzalida-trayectoria", function() {
      map.getCanvas().style.cursor = "pointer"
    })

    // Change it back to a pointer when it leaves.
    map.on("mouseleave", "fuenzalida-trayectoria", function() {
      map.getCanvas().style.cursor = ""
    })
  })

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
      <div id="map" style={{ border: 0, width: `100%`, height: `400px` }} />
    </Layout>
  )
}
