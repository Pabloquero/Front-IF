import React, { useRef, useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import classNames from "classnames"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FiArrowLeftCircle } from "react-icons/fi"
import { FiArrowRightCircle } from "react-icons/fi"
import { IoIosArrowDropdown } from "react-icons/io"
import { IoIosArrowDropup } from "react-icons/io"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TituloPage from "../components/titulo-page"
import FooterSpace from "../components/footer-top-space"
import ImagenFondo from "../components/fondo-pagina"
import Bullet from "../components/bullet_sac"

export default function SACPage() {
  const data = useStaticQuery(graphql`
    query {
      ifapi {
        pagSAC {
          acf {
            imagen_de_fondo
            enunciado_bullets_1
            enunciado_bullets_2
            bullet_sac_1 {
              icono
              texto
            }
            bullet_sac_2 {
              icono
              texto
            }
            bullet_sac_3 {
              icono
              texto
            }
            titulo_vivienda_1
            titulo_vivienda_2
            texto_vivienda
            carrousel_1
            carrousel_2
            carrousel_3
            carrousel_4
            carrousel_5
          }
        }
      }
    }
  `)
  const titulo = {
    tituloLight: "Servicio",
    tituloBold: "Al Cliente",
  }

  var settingsSlick = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const theSlider = useRef(null)

  const [longText, setLongText] = useState(false)
  const [mostrar, setMostrar] = useState("MOSTRAR MÁS")

  useEffect(() => {
    if (longText) {
      setMostrar("MOSTRAR MENOS")
    } else {
      setMostrar("MOSTRAR MÁS")
    }
  })

  return (
    <Layout>
      <SEO
        title="Servicio al Cliente"
        keywords={[`fuenzalida`, `inmobiliaria`, `edificios`]}
      />
      <ImagenFondo imgf={data.ifapi.pagSAC.acf.imagen_de_fondo} />
      <TituloPage titulo={titulo} />
      <div
        className="container has-background-grey"
        style={{ paddingTop: `10px` }}
      >
        <div
          className="columns is-marginless is-marginless is-multiline"
          style={{ padding: `30px 23px` }}
        >
          <div className="column is-paddingless is-12-desktop is-10-widescreen is-offset-1-widescreen is-paddingless">
            <div className="columns is-marginless is-marginless is-mobile is-multiline">
              <div className="column is-paddingless is-2 is-paddingless" />
              <div
                className="column is-paddingless is-8 is-paddingless has-text-centered"
                style={{ margin: `30px 0px 30px` }}
              >
                <h1 className="is-family-secondary is-size-4 is-size-5-touch">
                  {data.ifapi.pagSAC.acf.enunciado_bullets_1}
                </h1>
                <h1 className="is-family-secondary is-size-4 is-size-5-touch">
                  {data.ifapi.pagSAC.acf.enunciado_bullets_2}
                </h1>
              </div>
              <div className="column is-paddingless is-2 is-paddingless" />
              <Bullet bullet={data.ifapi.pagSAC.acf.bullet_sac_1} />
              <Bullet bullet={data.ifapi.pagSAC.acf.bullet_sac_2} />
              <Bullet bullet={data.ifapi.pagSAC.acf.bullet_sac_3} />
            </div>
          </div>
        </div>
      </div>
      <div className="container has-background-white">
        <div className="columns is-marginless is-multiline">
          <div className="column is-paddingless is-12">
            <h2
              className="has-text-primary has-text-weight-light is-size-3 is-size-4-touch has-text-centered-touch is-uppercase is-family-monospace"
              style={{ paddingTop: `40px` }}
            >
              {data.ifapi.pagSAC.acf.titulo_vivienda_1}
            </h2>
            <h1
              className="has-text-primary has-text-weight-bold is-size-2 is-size-3-touch has-text-centered-touch is-uppercase is-family-monospace"
              style={{ lineHeight: `0.7em` }}
            >
              {data.ifapi.pagSAC.acf.titulo_vivienda_2}
            </h1>
          </div>
          <div className="column is-paddingless is-10 is-offset-1 is-10-touch is-offset-1-touch">
            <p
              className="is-size-5 is-size-6-touch has-text-centered-touch"
              style={{
                padding: `40px 0px 30px`,
                borderBottom: `2px solid grey`,
              }}
            >
              {data.ifapi.pagSAC.acf.texto_vivienda}
            </p>
          </div>
          <div className="column is-10 is-offset-1">
            <div className="columns is-marginless is-multiline is-mobile is-vcentered">
              <div className="column is-paddingless is-1 has-text-left is-hidden-touch">
                <span
                  style={{
                    height: `40px`,
                    width: `40px`,
                  }}
                  onClick={() => {
                    theSlider.current.slickPrev()
                  }}
                  className="has-text-primary"
                >
                  <FiArrowLeftCircle
                    style={{
                      height: `40px`,
                      width: `40px`,
                    }}
                  />
                </span>
              </div>
              <div className="column is-paddingless is-10-desktop is-12-touch">
                <Slider {...settingsSlick} ref={theSlider}>
                  <div>
                    <img src={data.ifapi.pagSAC.acf.carrousel_1} alt="" />
                  </div>
                  <div>
                    <img src={data.ifapi.pagSAC.acf.carrousel_2} alt="" />
                  </div>
                  <div>
                    <img src={data.ifapi.pagSAC.acf.carrousel_3} alt="" />
                  </div>
                  <div>
                    <img src={data.ifapi.pagSAC.acf.carrousel_4} alt="" />
                  </div>
                  <div>
                    <img src={data.ifapi.pagSAC.acf.carrousel_5} alt="" />
                  </div>
                </Slider>
              </div>
              <div className="column is-paddingless is-1  is-hidden-touch has-text-right">
                <span
                  style={{
                    height: `40px`,
                    width: `40px`,
                  }}
                  onClick={() => {
                    theSlider.current.slickNext()
                  }}
                  className="has-text-primary"
                >
                  <FiArrowRightCircle
                    style={{
                      height: `40px`,
                      width: `40px`,
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            className="column is-paddingless is-10 is-offset-1 is-10-touch is-offset-1-touch"
            style={{ borderTop: `2px solid grey` }}
          />
        </div>
      </div>
      <div className="has-background-grey" style={{ marginTop: `40px` }}>
        <div className="container">
          <h1
            className="has-text-primary has-text-weight-bold is-size-2 is-size-3-touch has-text-centered-touch is-uppercase is-family-monospace"
            style={{ lineHeight: `1em`, padding: `40px 0px 40px` }}
          >
            Garantía
          </h1>
          <div className="columns is-marginless is-mobile is-multiline">
            <div className="column is-10 is-10-touch is-offset-1 is-offset-1-touch">
              <h3 className="has-text-left is-uppercase is-size-5 has-text-weight-bold">
                garantías de construcción
              </h3>
            </div>
            <div className="column is-10 is-10-touch is-offset-1 is-offset-1-touch">
              <p
                className="is-size-5 is-family-code"
                style={{
                  textAlign: `justify`,
                  textAlignLast: `center`,
                  paddingBottom: `40px`,
                }}
              >
                Durante el proceso de entrega, nuestro ejecutivo otorga el
                tiempo necesario para revisar el inmueble y realizar todo tipo
                de consultas respecto al funcionamiento y garantías asociadas,
                parte importante de la labor de la persona encargada del
                proceso, es capacitar al cliente en cuanto al funcionamiento,
                cuidado y correcto uso de la vivienda, con el objetivo de
                orientar en aspectos generales y específicos en el cómo
                resguardar su inversión. Todo lo antes descrito, tiene lugar
                antes de la entrega de llaves. Las o bservaciones que puedan
                aparecer durante este proceso deberán quedar consignadas en el
                acta de entrega, documento que debe ser firmado por ambas partes
                para, con posterioridad, proceder al levantamiento de los ítems
                que correspondan a una garantía de Construcción.
              </p>

              <div
                className={classNames({
                  "is-hidden": !longText,
                })}
              >
                <p
                  className="is-size-5 is-family-code"
                  style={{
                    textAlign: `justify`,
                    textAlignLast: `center`,
                    paddingBottom: `40px`,
                  }}
                >
                  Se deja constancia que las observaciones que pudieran haberse
                  producido con posterioridad a la entrega de la vivienda y que
                  no hayan sido declaradas en el “Acta de Recepción o Entrega”,
                  no estarán sujetas a Post Venta, como por ejemplo rotura de:
                  cerámicas, vidrios, artefactos sanitarios, enchufes e
                  interruptores, puertas, grifería y quincallería. La atención o
                  prestación del servicio de Postventa con posterioridad a la
                  recepción de llaves SOLO considera y contempla lo descrito en
                  la legislación vigente, por lo tanto, solo se repararán FALLAS
                  O DEFECTOS DE CONSTRUCCIÓN, de acuerdo al siguiente detalle:
                </p>
                <p
                  className="is-size-5 is-family-code"
                  style={{
                    textAlign: `left`,
                    textAlignLast: `left`,
                    paddingBottom: `40px`,
                  }}
                >
                  •{"\u00A0\u00A0\u00A0\u00A0"}10 AÑOS: en el caso de fallas o
                  defectos que afecten a la ESTRUCTURA SOPORTANTE de tu
                  vivienda.
                  <br />•{"\u00A0\u00A0\u00A0\u00A0"}5 AÑOS: Cuando se trate de
                  fallas o defectos de los ELEMENTOS CONSTRUCTIVOS O DE LAS
                  INSTALACIONES.
                  <br />•{"\u00A0\u00A0\u00A0\u00A0"}3 AÑOS: Si hubiesen fallas
                  o defectos que afecten a ELEMENTOS DE TERMINACIONES O DE
                  ACABADO de las obras. Se deja constancia que LAS FALLAS O
                  DEFECTOS DE CONSTRUCCIÓN se refieren a errores que se hayan
                  producido al momento de ejecutarse la obra y que con el tiempo
                  hayan podido ser visibles, por lo que en este caso no se
                  considera el desgaste propio de los materiales o el daño que
                  pueda producirse por un mal uso, la falta de mantención o la
                  intervención de terceros.
                </p>
                <h3
                  className="has-text-left is-uppercase is-size-5 has-text-weight-bold"
                  style={{
                    paddingBottom: `40px`,
                  }}
                >
                  CONDICIONES PARA HACER EFECTIVA UNA GARANTÍA DE POSTVENTA
                </h3>
                <p
                  className="is-size-5 has-text-centered is-family-code"
                  style={{
                    paddingBottom: `40px`,
                  }}
                >
                  Para hacer efectiva una garantía de POST VENTA, la vivienda
                  debe contar con sus mantenciones al día según manual de la
                  Cámara Chilena de la Construcción entregado y explicado antes
                  de la entrega de llaves por
                  <br />
                  INMOBILIARIA FUENZALIDA.
                </p>
                <p
                  className="is-size-5 is-family-code"
                  style={{
                    textAlign: `left`,
                    textAlignLast: `left`,
                    paddingBottom: `40px`,
                  }}
                >
                  •{"\u00A0\u00A0\u00A0\u00A0"}El propietario deberá contar con
                  los comprobantes que confirmen los mantenimientos efectuados
                  <br />•{"\u00A0\u00A0\u00A0\u00A0"}La coordinación y trabajos
                  de Post Venta se realizarán directamente con el propietario de
                  la vivienda.
                </p>
                <h3
                  className="has-text-left is-uppercase is-size-5 has-text-weight-bold"
                  style={{
                    paddingBottom: `40px`,
                  }}
                >
                  EXCLUSIONES DE POST VENTA
                </h3>
                <p
                  className="is-size-5 is-family-code"
                  style={{
                    textAlign: `left`,
                    textAlignLast: `left`,
                    paddingBottom: `40px`,
                  }}
                >
                  •{"\u00A0\u00A0\u00A0\u00A0"}Observaciones sobre aspectos de
                  terminaciones visibles al momento de la recepción de la
                  vivienda (que no fueron indicadas en Acta Entrega o Recepción)
                  <br />•{"\u00A0\u00A0\u00A0\u00A0"}Desgaste o daño de
                  elementos o revestimientos ocasionados por el uso normal de la
                  vivienda.
                  <br />•{"\u00A0\u00A0\u00A0\u00A0"}Daños causados por terceros
                  o por modificaciones realizadas a la vivienda.
                  <br />•{"\u00A0\u00A0\u00A0\u00A0"}Filtraciones que sean
                  responsabilidad de propietarios de pisos superiores y no estén
                  relacionadas con falla en la ejecución de las instalaciones
                  por parte de la Constructora.
                  <br />•{"\u00A0\u00A0\u00A0\u00A0"}Empleo de materiales o
                  productos no autorizados por el fabricante, proveedor o
                  contravención a las instrucciones indicadas en el manual de
                  uso de la vivienda, de los servicios técnicos autorizados, o
                  falta del adecuado cuidado que el propietario debe realizar en
                  su vivienda.
                </p>
              </div>
              <div className="column is-10 is-10-touch is-offset-1 is-offset-1-touch has-text-centered">
                <p className="is-uppercase has-text-primary has-text-weight-bold">
                  {mostrar}
                </p>

                <span
                  style={{
                    height: `80px`,
                    width: `80px`,
                  }}
                  onClick={() => {
                    setLongText(false)
                  }}
                  className={classNames("has-text-primary", {
                    "is-hidden": !longText,
                  })}
                >
                  <IoIosArrowDropup
                    style={{
                      height: `80px`,
                      width: `80px`,
                    }}
                  />
                </span>
                <span
                  style={{
                    height: `80px`,
                    width: `80px`,
                  }}
                  onClick={() => {
                    setLongText(true)
                  }}
                  className={classNames("has-text-primary", {
                    "is-hidden": longText,
                  })}
                >
                  <IoIosArrowDropdown
                    style={{
                      height: `80px`,
                      width: `80px`,
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSpace />
    </Layout>
  )
}
