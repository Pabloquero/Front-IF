import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React, { useState } from "react"
import classNames from "classnames"

const Header = () => {
  const menuLinks = [
    {
      texto: "INICIO",
      url: "",
    },
    {
      texto: "PROYECTOS",
      url: "proyectos",
    },
    {
      texto: "COMPRA DE PROPIEDADES",
      url: "compra-de-propiedades",
    },
    {
      texto: "CONTACTO",
      url: "contacto",
      form: "contacto",
    },
    {
      texto: "INVERSIONISTAS",
      url: "inversionistas",
      footer: true,
    },
    {
      texto: "OPORTUNIDADES",
      url: "oportunidades",
      footer: true,
    },
    {
      texto: "TRAYECTORIA",
      url: "trayectoria",
      footer: true,
    },
  ]

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header>
      <div className="has-background-success" id="menu">
        <div className="container">
          <nav
            className="navbar has-background-trasparent"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand logo-menu">
              <Link to="/">
                <img
                  src="http://www.betafuenzalida.bylcomunicaciones.com/wp-content/uploads/2019/03/logo.png"
                  alt="Inmobiliaria Fuenzalida"
                />
              </Link>

              <button
                className={classNames({
                  "navbar-burger is-transparent button": !toggleMenu,
                  "navbar-burger is-transparent button is-active": toggleMenu,
                })}
                aria-label="menu"
                aria-expanded="false"
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <span aria-hidden="true" className="has-text-white" />
                <span aria-hidden="true" className="has-text-white" />
                <span aria-hidden="true" className="has-text-white" />
              </button>
            </div>

            <div
              className={classNames({
                "navbar-menu has-background-success": !toggleMenu,
                "navbar-menu has-background-success is-active": toggleMenu,
              })}
            >
              <div className="navbar-end">
                {menuLinks.map((link, index) => (
                  <MenuLink key={index} link={link} />
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

function MenuLink({ link, index }) {
  let linkInterno = link.url !== "" ? `/${link.url}/` : `/`

  return (
    <Link
      className={classNames({
        "has-text-white navbar-item is-size-6": !link.footer,
        "has-text-white navbar-item is-size-6 is-hidden-desktop": link.footer,
      })}
      to={linkInterno}
      state={{
        state: link.form,
      }}
      activeClassName="linkActivo"
      style={{
        textDecoration: `none`,
      }}
      key={index}
    >
      <p className="has-text-centered-touch" style={{ margin: `auto` }}>
        {link.texto}
      </p>
    </Link>
  )
}

export default Header
