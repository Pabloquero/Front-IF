import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"

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
  ]

  return (
    <header>
      <div className="has-background-success" id="menu">
        <div className="container">
          <nav
            className="navbar has-background-trasparent"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand" style={{ padding: `15px 15px` }}>
              <Link to="/">
                <img
                  style={{
                    maxHeight: `60px`,
                    height: `auto`,
                    maxWidth: `100%`,
                  }}
                  src="http://www.betafuenzalida.bylcomunicaciones.com/wp-content/uploads/2019/03/logo.png"
                  alt="Inmobiliaria Fuenzalida"
                />
              </Link>

              <button
                className="navbar-burger is-transparent button"
                aria-label="menu"
                aria-expanded="false"
              >
                <span aria-hidden="true" className="has-text-white" />
                <span aria-hidden="true" className="has-text-white" />
                <span aria-hidden="true" className="has-text-white" />
              </button>
            </div>

            <div className="navbar-end is-hidden-touch">
              {menuLinks.map((link, index) => (
                <MenuLink key={index} link={link} />
              ))}
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
      className="has-text-white navbar-item is-size-6"
      to={linkInterno}
      state={{
        state: link.form,
      }}
      activeStyle={{ borderBottom: `3px solid white` }}
      style={{
        textDecoration: `none`,
      }}
      key={index}
    >
      {link.texto}
    </Link>
  )
}

export default Header
