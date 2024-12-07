'use client'

import React, { useEffect } from "react";

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

  // Darken by 40%
  const primaryColorDark = darkenColor(primaryColor, 0.4);
  const secondaryColorDark = darkenColor(secondaryColor, 0.4);

  useEffect(() => {
    // Set the global CSS variables on the root element
    const root = document.documentElement;
    root.style.setProperty("--primary-color", primaryColor);
    root.style.setProperty("--secondary-color", secondaryColor);
    root.style.setProperty("--font-family", fontFamily);
    root.style.setProperty("--primary-color-rgb", primaryColorRBG);
    root.style.setProperty("--secondary-color-rgb", secondaryColorRBG);
    root.style.setProperty("--primary-color-dark", primaryColorDark);
    root.style.setProperty("--secondary-color-dark", secondaryColorDark);
  }, [primaryColor, secondaryColor, fontFamily, primaryColorRBG, secondaryColorRBG, primaryColorDark, secondaryColorDark]);

  return <>{children}</>;
};

export default ThemeProvider;
