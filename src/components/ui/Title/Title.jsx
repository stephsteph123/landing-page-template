import React from "react";
import "./Title.scss";

export default function Title({
  title = "Add Title",
  color = "primary",
  glow = "light",
}) {
  // color logic
  let updatedColor = color;
  const colorOptions = {
    primary: `var(--primary-color)`,
    secondary: `var(--secondary-color)`,
  };

  if (color === "primary" || color === "secondary") {
    updatedColor = colorOptions[color];
  }

  // glow logic
  let updatedGlow = glow;
  const glowOptions = {
    dark: `0 0 10px rgba(0, 0, 0, 1), 0 0 20px rgba(0, 0, 0, 0.5)`,
    light: `0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 0.5)`,
  };
  updatedGlow = glowOptions[glow];

  return (
    <div
      className="title-parent"
      style={{
        color: updatedColor,
        textShadow: updatedGlow,
      }}
    >
      {title}
    </div>
  );
}
