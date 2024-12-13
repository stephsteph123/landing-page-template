import React from "react";
import "./Title.scss";

export default function Title({
  title = "Add Title",
  color = "secondary",
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

  return (
    <div
      className="title-parent"
      style={{
        color: updatedColor,
      }}
    >
      {title}
    </div>
  );
}
