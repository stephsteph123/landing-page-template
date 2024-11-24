import React from "react";

// Utility to convert hex to RGB
const hexToRgb = (hex) => {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
};

// Function to darken a color
const darkenColor = (hex, percentage) => {
  const rgb = hexToRgb(hex).split(", ");
  return rgb
    .map((value) =>
      Math.max(0, Math.min(255, Math.round(value * (1 - percentage))))
    )
    .join(", ");
};

const ThemeProvider = ({
  children,
  primaryColor,
  secondaryColor,
  fontFamily,
}) => {
  // Convert hex colors to RGB format
  const primaryColorRBG = hexToRgb(primaryColor);
  const secondaryColorRBG = hexToRgb(secondaryColor);

  // Darken by 15%
  const primaryColorDark = darkenColor(primaryColor, 0.2);
  const secondaryColorDark = darkenColor(secondaryColor, 0.2);

  const themeStyles = {
    "--primary-color": primaryColor,
    "--secondary-color": secondaryColor,
    "--font-family": fontFamily,
    "--primary-color-rgb": primaryColorRBG,
    "--secondary-color-rgb": secondaryColorRBG,
    "--primary-color-dark": primaryColorDark,
    "--secondary-color-dark": secondaryColorDark,
  };

  return <div style={themeStyles}>{children}</div>;
};

export default ThemeProvider;
