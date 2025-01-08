"use client";

import React, { useState, useEffect } from "react";
import BannerLogo from "./Logo/BannerLogo";
import "./Banner.scss";
import Image from "next/image";

export default function Banner({
  bannerImage,
  blurDataURL,
  bannerLogo,
  bannerTitle,
  opacity,
  logoHeight = 150,
  logoWidth = 300,
}) {
  const [scale, setScale] = useState(1);
  // const [height, setHeight] = useState(800);
  const [newLogoHeight, setNewLogoHight] = useState(logoHeight);
  const [newLogoWidth, setNewLogoWidth] = useState(logoWidth);
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
      // const newHeight = Math.max(screenSize / 2);
      const newFontSize = Math.max(screenSize / 20);
      const newLogoHeight = Math.max(screenSize / 7);
      const newLogoWidth = Math.max(screenSize / 4);
      // setHeight(newHeight);
      setNewLogoWidth(newLogoWidth);
      setFontSize(newFontSize);
      setNewLogoHight(newLogoHeight);
      if (screenSize < 800) {
        setLogoPositionn("center-bottom");
      } else {
        setLogoPositionn("left-top");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(bannerTitle);

  return (
    <header className="banner" style={{ transform: `scale(${scale})` }}>
      <div className="banner-content">
        {bannerLogo && (
          <BannerLogo
            bannerLogo={bannerLogo}
            logoPosition={logoPosition}
            opacity={opacity}
            logoHeight={newLogoHeight}
            logoWidth={newLogoWidth}
          />
        )}
        <div className="banner-img">
          {bannerImage && (
            <Image
              alt="Background Image"
              src={bannerImage}
              layout="fill"
              objectFit="cover"
              blurDataURL={blurDataURL}
              placeholder="blur"
              quality={100}
            />
          )}
        </div>
        {bannerTitle && (
          <h2 className="title" style={{ fontSize: fontSize }}>
            {bannerTitle}
          </h2>
        )}
      </div>
    </header>
  );
}
