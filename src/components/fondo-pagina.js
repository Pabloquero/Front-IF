import React from "react";

export default function fondoPagina({ imgf }) {
  return (
    <div
      className="imagenFondoPaginas"
      style={{
        backgroundImage: `url(${imgf})`,
        height: `700px`,
        width: `100%`,
        position: `absolute`
      }}
    >
      <div
        className="has-background-warning"
        style={{
          height: `700px`,
          width: `100%`
        }}
      />
    </div>
  );
}
