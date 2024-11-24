"use client";

import React, { useState, useEffect } from "react";
import BannerTitle from "./Title/BannerTitle";
import BannerLogo from "./Logo/BannerLogo";
import "./Banner.scss";
import Image from "next/image";

export default function Banner({
  titlePosition,
  bannerImage = "/images/placeholder-image-1-public.png",
  blurDataURL = "/images/placeholder-image-1-public-pixel.png",
  variant,
  fontFamily,
  showLogo = true,
  bannerLogo = "/images/placeholder-banner-logo-public.png",
  opacity,
}) {
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState(800);
  const [logoHeight, setLogoHight] = useState(150);
  const [logoWidth, setLogoWidth] = useState(400);
  const [fontSize, setFontSize] = useState("40px");
  const [logoPosition, setLogoPositionn] = useState("left-top");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newScale = Math.max(1 - scrollPosition / 2000, 0.65);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const screenSize = window.innerWidth;
      const newHeight = Math.max(screenSize / 2);
      const newFontSize = Math.max(screenSize / 40);
      const newLogoHeight = Math.max(screenSize / 8);
      const newLogoWidth = Math.max(screenSize / 4);
      setHeight(newHeight);
      setLogoWidth(newLogoWidth);
      setFontSize(newFontSize);
      setLogoHight(newLogoHeight);
      if (screenSize < 800) {
        setLogoPositionn("center-bottom");
      } else {
        setLogoPositionn("left-top");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="banner" style={{ transform: `scale(${scale})` }}>
      <div className="banner-content">
        <Image
          src={bannerImage}
          alt="Background Image"
          height={height}
          width={100}
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
      {showLogo ? (
        <BannerLogo
          bannerLogo={bannerLogo}
          logoPosition={logoPosition}
          opacity={opacity}
          logoHeight={logoHeight}
          logoWidth={logoWidth}
        />
      ) : (
        <BannerTitle
          fontSize={fontSize}
          titlePosition={titlePosition}
          variant={variant}
          fontFamily={fontFamily}
        />
      )}
    </header>
  );
}
