// AboutUs.js

"use client";

import React, { useState, useEffect, useRef } from "react";
import Picture from "./Picture";
import "./AboutUs.scss";

export default function AboutUs({
  images = [
    { src: "/images/shop-1.jpg", offset: 50 },
    { src: "/images/shop-2.jpg", offset: 100 },
    { src: "/images/shop-3.jpg", offset: 150 },
  ],
  backgroundColor = "primary",
  color = "white",
  mobile = false,
}) {
  // Handling moving pieces
  const [viewed, setViewed] = useState(new Array(images.length).fill(false));
  //  Handle resize
  const [resize, setResize] = useState(400);

  // Create refs and observe visibility for each image
  const refs = useRef([]); // Array of refs for images

  // Observers setup
  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !viewed[index]) {
            setViewed((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.9,
        }
      );

      observer.observe(ref);

      return observer;
    });

    // Cleanup observers
    return () => {
      observers.forEach((observer) => observer && observer.disconnect());
    };
  }, [images, viewed]);

  // about-us-write-up background logic
  let updatedBackgroundColor = backgroundColor;
  const backgroundColorOptions = {
    primary: `var(--primary-color)`,
    secondary: `var(--secondary-color)`,
  };

  if (backgroundColor === "primary" || backgroundColor === "secondary") {
    updatedBackgroundColor = backgroundColorOptions[backgroundColor];
  }

  // Handling resize
  useEffect(() => {
    const handleResize = () => {
      const screenSize = window.innerWidth;
      const newSize = Math.max(screenSize / 2.5);
      setResize(newSize);
    };

    window.addEventListener("resize", handleResize);

    return () => [window.removeEventListener("resize", handleResize)];
  }, []);

  return (
    <div>
      {mobile ? (
        <>
          <div className="about-us-parent-mobile">
            <div>
              {images.map((image, index) => (
                <div key={index}>
                  <img className="about-us-img-mobile" src={image.src} />
                </div>
              ))}
            </div>
            <div
              className="about-us-write-up-mobile"
              style={{
                backgroundColor: updatedBackgroundColor,
                color: color,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              posuere purus sed ipsum mattis posuere. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Sed rutrum laoreet luctus.
              Nulla commodo dui id tempor maximus.
            </div>
          </div>
        </>
      ) : (
        <div className="about-us-parent">
          {images.map((image, index) => (
            <div
              key={index}
              className="about-us-child"
              ref={(el) => {
                refs.current[index] = el;
              }}
              style={{
                transform: `translateX(${
                  viewed[index] ? `${image.offset}px` : "0"
                })`,
                transition: "transform 1s ease-out",
              }}
            >
              <Picture img={image.src} size={resize} />
              <div
                className="about-us-write-up"
                style={{
                  backgroundColor: updatedBackgroundColor,
                  color: color,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                posuere purus sed ipsum mattis posuere. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Sed rutrum laoreet
                luctus. Nulla commodo dui id tempor maximus. Vivamus faucibus
                blandit elit, eget ultrices dolor viverra non. Suspendisse
                tincidunt aliquet sem vitae sollicitudin.
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
