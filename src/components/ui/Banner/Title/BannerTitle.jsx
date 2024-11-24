import React from "react";
import "./BannerTitle.scss";

export default function BannerTitle({
  fontSize = "20px",
  titlePosition = "center-bottom",
  variant = "primary",
  label = "Placeholder",
}) {
  return (
    <div
      className={`title-${variant} title-${titlePosition}`}
      style={{ fontSize: fontSize }}
    >
      <div className="title-title" style={{ fontSize: fontSize }}>
        {label}
      </div>
    </div>
  );
}
