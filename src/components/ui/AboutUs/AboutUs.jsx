"use client";

import React, { useState } from "react";
import Picture from "./Picture";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import "./AboutUs.scss";

export default function AboutUs({
  images = [
    { src: "/images/shop-1.jpg", offset: 50 },
    { src: "/images/shop-2.jpg", offset: 100 },
    { src: "/images/shop-3.jpg", offset: 150 },
  ],
  backgroundColor = "primary",
  color = "white",
}) {
  const [viewed, setViewed] = useState(new Array(images.length).fill(false)); // One `viewed` value per image.

  // Create refs and observe visibility for each image dynamically
  const refs = images.map((_, index) => {
    const [ref, isVisible] = useIntersectionObserver({
      root: null,
      rootMargin: "0px",
      threshold: 0.9, // Trigger when 90% is visible
    });

    // Update state when visible
    if (isVisible && !viewed[index]) {
      setViewed((prev) => {
        const updated = [...prev];
        updated[index] = true;
        return updated;
      });
    }

    return ref;
  });


  // about-us-write-up background logic
  let updatedBackgroundColor = backgroundColor;
  const backgroundColorOptions = {
    primary: `var(--primary-color)`,
    secondary: `var(--secondary-color)`,
  };

  if (backgroundColor === "primary" || backgroundColor === "secondary") {
    updatedBackgroundColor = backgroundColorOptions[backgroundColor];
  }

  return (
    <div className="about-us-parent">
      {images.map((image, index) => (
        <div
          key={index}
          className="about-us-child"
          ref={refs[index]}
          style={{
            transform: `translateX(${
              viewed[index] ? `${image.offset}px` : "0"
            })`,
            transition: "transform 1s ease-out",
          }}
        >
          <Picture img={image.src} xValue={image.offset} />
          <div
            className="about-us-write-up"
            style={{ backgroundColor: updatedBackgroundColor, color: color }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            posuere purus sed ipsum mattis posuere. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Sed rutrum laoreet luctus. Nulla
            commodo dui id tempor maximus. Vivamus faucibus blandit elit, eget
            ultrices dolor viverra non. Suspendisse tincidunt aliquet sem vitae
            sollicitudin.
          </div>
        </div>
      ))}
    </div>
  );
}
