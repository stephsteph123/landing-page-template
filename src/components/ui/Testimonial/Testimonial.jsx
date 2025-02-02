import React from "react";
import "./Testimonial.scss";

export default function Testimonial({ mobile }) {
  return (
    <div className={`testimonial-parent ${mobile ? "mobile" : ""}`}>
      <div className={`testimonial ${mobile ? "mobile" : ""}`}>
        <span className="top border"></span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          suscipit odio eu maximus finibus. Quisque nec felis ligula. Quisque
          quis augue vel ipsum convallis egestas.
        </p>
        <p className="source">&mdash; Testimonial Source</p>
        <span className="bottom border"></span>
      </div>
    </div>
  );
}
