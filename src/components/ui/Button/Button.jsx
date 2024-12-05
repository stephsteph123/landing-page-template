// Button.js
import React from "react";
import "./Button.scss";

export default function Button({
  label = "set label",
  variant = "primary",
  className = "",
  ariaLabel,
  onClick=() => console.log("hello world")
}) {
  return (
    <button
      className={`btn btn-${variant} ${className}`}
      aria-label={ariaLabel || label}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
