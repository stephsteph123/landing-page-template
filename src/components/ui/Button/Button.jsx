// Button.js
import React from "react";
import "./Button.scss";

export default function Button({
  label = "set label",
  variant = "primary",
  className = "",
  ariaLabel,
}) {
  return (
    <button
      className={`btn btn-${variant} ${className}`}
      aria-label={ariaLabel || label}
    >
      {label}
    </button>
  );
}
