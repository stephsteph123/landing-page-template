import React from "react";

export default function Picture({ img, size }) {

  return (
    <img
      className="about-us-img"
      src={img}
      style={{
        maxWidth:`${size}px`
      }}
    />
  );
}
