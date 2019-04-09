import React from "react"

export default function item({ item: { imagen, proyecto, comuna } }) {
  if (proyecto !== "" && comuna !== "") {
    return (
      <div
        className="column is-paddingless is-4-desktop is-6-tablet is-12-mobile has-text-left"
        style={{
          height: `250px`,
          backgroundImage: `url(${imagen})`,
          backgroundPosition: `center center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          position: `relative`,
        }}
      >
        <div
          className="degradado"
          style={{
            width: `100%`,
            paddingTop: `30px`,
            bottom: `0`,
            position: `absolute`,
          }}
        >
          <p
            className="is-family-code is-size-5 has-text-white"
            style={{ padding: `0px 0px 5px 10px` }}
          >
            {proyecto} ·
            <span className="is-family-secondary is-uppercase"> {comuna}</span>
          </p>
        </div>
      </div>
    )
  } else {
    return (
      <div
        className="column is-paddingless is-hidden-touch is-4-desktop is-6-tablet is-12-mobile has-text-left"
        style={{
          height: `250px`,
          backgroundImage: `url(${imagen})`,
          backgroundPosition: `center center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          position: `relative`,
        }}
      />
    )
  }
}
