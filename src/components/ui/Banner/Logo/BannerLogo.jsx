import Image from "next/image";
import React from "react";
import "./BannerLogo.scss";

export default function BannerLogo({
  bannerLogo,
  logoPosition = "left-top",
  opacity = "1",
  logoHeight = 150,
  logoWidth= 400
}) {
  return (
    <Image
      className={`banner-logo banner-${logoPosition}`}
      style={{ opacity: opacity }}
      height={logoHeight}
      src={bannerLogo}
      width={logoWidth}
      alt="Banner Logo"
    />
  );
}
