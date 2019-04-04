import React from "react"
import { Link } from "gatsby"

function FooterLink({ link, index }) {
  return (
    <div key={index} className="column is-paddingless has-text-centered">
      <h1 style={{ margin: 0 }}>
        <Link
          className="has-text-white is-size-6"
          to={`/${link.url}/`}
          activeStyle={{ borderBottom: `1px solid white` }}
          style={{
            textDecoration: `none`,
          }}
        >
          {link.texto}
        </Link>
      </h1>
    </div>
  )
}

export default function FooterLinks() {
  const footerLinks = [
    {
      texto: "INVERSIONISTAS",
      url: "inversionistas",
      form: "inversionistas",
    },
    {
      texto: "OPORTUNIDADES",
      url: "oportunidades",
    },
    {
      texto: "TRAYECTORIA",
      url: "trayectoria",
    },
  ]
  return (
    <div className="columns is-marginless" style={{ paddingBottom: 5 }}>
      {footerLinks.map((link, index) => (
        <FooterLink key={index} link={link} />
      ))}
    </div>
  )
}
