import React from "react";
import FooterNav from "./footer-nav";

export default function footer() {
  return (
    <footer className="footer has-background-dark">
      <div className="container">
        <div className="columns is-marginless">
          <div className="column is-6 is-offset-3">
            <FooterNav />
          </div>
        </div>
        <div className="content has-text-centered has-text-white is-size-6">
          © {new Date().getFullYear()} · Inmobiliaria Fuenzalida · Alonso de
          Córdova 5322, piso 17, Las Condes · +56 2 3323 1020 ·
          info@inmobiliariafuenzalida.com
        </div>
      </div>
    </footer>
  );
}
