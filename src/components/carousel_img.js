import React from "react"

export default function CarouselImg({ imgCarousel }) {
  return (
    <div>
      <img
        src={imgCarousel}
        alt=""
        style={{
          margin: `auto`,
        }}
      />
    </div>
  )
}
