import Image from "next/image";
import React from "react";
import "./BannerLogo.scss";

export default function BannerLogo({
  bannerLogo,
  logoPosition = "left-top",
  opacity = "1",
  logoHeight,
  logoWidth,
}) {
  const customLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 80}`;
  };

  return (
    <Image
      loader={customLoader}
      className={`banner-logo banner-${logoPosition}`}
      style={{ opacity: opacity }}
      height={logoHeight}
      src={bannerLogo}
      width={logoWidth}
      alt="Banner Logo"
    />
  );
}
