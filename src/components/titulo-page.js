import React from "react";

export default function tituloPage({ titulo: { tituloLight, tituloBold } }) {
  return (
    <div className="container" style={{ paddingTop: `140px` }}>
      <h2 className="has-text-white has-text-weight-light is-size-3 is-size-4-mobile has-text-centered-mobile is-uppercase is-family-monospace">
        {tituloLight}
      </h2>
      <h1
        className="has-text-white has-text-weight-bold is-size-2 is-size-3-mobile has-text-centered-mobile is-uppercase is-family-monospace"
        style={{ lineHeight: `0.7em`, paddingBottom: `40px` }}
      >
        {tituloBold}
      </h1>
    </div>
  );
}
