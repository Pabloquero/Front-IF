import React from "react"
import FooterNav from "./footer-nav"

export default function footer() {
  return (
    <footer className="footer has-background-dark">
      <div className="container">
        <div className="columns is-marginless">
          <div className="column is-6 is-offset-3">
            <FooterNav />
          </div>
        </div>
        <div className="has-text-centered has-text-white is-size-6 liFooter">
          © {new Date().getFullYear()} Inmobiliaria Fuenzalida ·{" "}
          <a href="https://goo.gl/maps/pWY1ENsABGr2p5KK7">
            Alonso de Córdova 5322, piso 17, Las Condes
          </a>{" "}
          · <a href="tel:+56233231020">+56 2 3323 1020</a> ·{" "}
          <a href="mailto:info@inmobiliariafuenzalida.com">
            info@inmobiliariafuenzalida.com
          </a>
        </div>
      </div>
    </footer>
  )
}
