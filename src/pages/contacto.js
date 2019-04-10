import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TituloPage from "../components/titulo-page"
import FooterSpace from "../components/footer-top-space"
import ImagenFondo from "../components/fondo-pagina"
import FormContacto from "../components/form-contacto"

import { MdLocalPhone } from "react-icons/md"
import { IoIosMail } from "react-icons/io"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

export default function Contacto(props) {
  const data = useStaticQuery(graphql`
    query {
      ifapi {
        pagContacto {
          acf {
            imagen_de_fondo
            texto_contacto
            texto_sac
            texto_inversionistas
            fono
            email_1
            link_mapa
          }
        }
      }
    }
  `)

  const titulo = {
    tituloLight: "contáctate con",
    tituloBold: "nosotros",
  }

  let estadoForm =
    typeof window === "undefined" ? "contacto" : props.location.state.state

  const [formulario, setFormulario] = useState(estadoForm)

  let texto_formulario

  switch (formulario) {
    case "contacto":
      texto_formulario = data.ifapi.pagContacto.acf.texto_contacto
      break
    case "servicio":
      texto_formulario = data.ifapi.pagContacto.acf.texto_sac
      break
    case "inversionistas":
      texto_formulario = data.ifapi.pagContacto.acf.texto_inversionistas
      break
    default:
      texto_formulario = "ERROR"
  }

  return (
    <Layout>
      <SEO
        title="Contacto"
        keywords={[`fuenzalida`, `inmobiliaria`, `edificios`]}
      />
      <ImagenFondo imgf={data.ifapi.pagContacto.acf.imagen_de_fondo} />
      <TituloPage titulo={titulo} />
      <div
        className="container has-background-grey"
        style={{ paddingBottom: `30px` }}
      >
        <div className="columns is-marginless" style={{ padding: `10px 23px` }}>
          <div className="column is-10 is-offset-1 is-paddingless">
            <div className="columns is-marginless">
              <div className="column is-12 is-paddingless">
                <p
                  style={{ padding: `5vh 0` }}
                  className="has-text-centered is-size-5 is-size-6-touch has-text-dark is-family-code"
                >
                  {texto_formulario}
                </p>
              </div>
            </div>
            <div className="columns is-marginless">
              <div className="column is-paddingless">
                <button
                  onClick={() => setFormulario("contacto")}
                  style={{ border: `2px #d8d9dd solid` }}
                  className={classNames(
                    "button is-size-5 is-size-6-mobile is-radiusless is-uppercase is-fullwidth is-family-code",
                    {
                      "is-white has-text-grey-dark": formulario !== "contacto",
                      "is-primary has-text-white": formulario === "contacto",
                    }
                  )}
                >
                  contacto
                </button>
              </div>
              <div className="column is-paddingless">
                <button
                  onClick={() => setFormulario("servicio")}
                  style={{ border: `2px #d8d9dd solid` }}
                  className={classNames(
                    "button is-size-5 is-size-6-mobile is-radiusless is-uppercase is-fullwidth is-family-code",
                    {
                      "is-white has-text-grey-dark": formulario !== "servicio",
                      "is-primary has-text-white": formulario === "servicio",
                    }
                  )}
                >
                  post venta
                </button>
              </div>
              <div className="column is-paddingless">
                <button
                  onClick={() => setFormulario("inversionistas")}
                  style={{ border: `2px #d8d9dd solid` }}
                  className={classNames(
                    "button is-size-5 is-size-6-mobile is-radiusless is-uppercase is-fullwidth is-family-code",
                    {
                      "is-white has-text-grey-dark":
                        formulario !== "inversionistas",
                      "is-primary has-text-white":
                        formulario === "inversionistas",
                    }
                  )}
                >
                  Inversionistas
                </button>
              </div>
            </div>
            <div
              className="columns is-marginless has-background-white"
              style={{ border: `2px #d8d9dd solid` }}
            >
              <div className="column is-10 is-offset-1">
                <FormContacto />
              </div>
            </div>
            <div
              className="columns is-marginless"
              style={{ paddingTop: `40px`, lineHeight: `50px` }}
            >
              <div className="has-text-centered is-family-code has-text-dark column">
                <p
                  style={{
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                  }}
                >
                  <MdLocalPhone
                    style={{
                      paddingRight: `8px`,
                      fontSize: `2.7em`,
                    }}
                  />{" "}
                  <span className="is-size-5-widescreen is-size-6-tablet">
                    +562 3323 1020
                  </span>
                </p>
              </div>
              <div
                className="has-text-centered is-family-code has-text-dark column is-5"
                style={{
                  borderLeft: `1px solid black`,
                  borderRight: `1px solid black`,
                }}
              >
                <p
                  style={{
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                  }}
                >
                  <IoIosMail
                    style={{
                      paddingRight: `8px`,
                      fontSize: `3em`,
                    }}
                  />{" "}
                  <span className="is-size-5-widescreen is-size-6-tablet">
                    info@inmobiliariafuenzalida.com
                  </span>
                </p>
              </div>
              <div className="has-text-dark column">
                <div className="level is-mobile">
                  <FaFacebook
                    className="level-item"
                    style={{
                      fontSize: `2.5em`,
                    }}
                  />{" "}
                  <FaInstagram
                    className="level-item"
                    style={{
                      fontSize: `2.6em`,
                    }}
                  />{" "}
                  <FaLinkedin
                    className="level-item"
                    style={{
                      fontSize: `2.5em`,
                    }}
                  />{" "}
                  <FaYoutube
                    className="level-item"
                    style={{
                      fontSize: `2.9em`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSpace />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.648133762172!2d-70.57641678480186!3d-33.406342980786604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf27538cab01%3A0x726db94261be52c7!2sAlonso+de+C%C3%B3rdova+5320%2C+Las+Condes%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1ses!2scl!4v1551890153887"
        frameBorder="0"
        title="googlemap"
        style={{ border: 0, width: `100%`, height: `400px` }}
        allowFullScreen
      />
    </Layout>
  )
}
