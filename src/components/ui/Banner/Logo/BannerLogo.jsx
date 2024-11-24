import Image from "next/image";
import React from "react";
import logo from "../../../../assets/placeholder-logo.png";
import "./BannerLogo.scss";

export default function BannerLogo({
  bannerLogo = logo,
  logoPosition = "left-top",
  opacity = ".7",
  logoHeight = 150,
  logoWidth= 500
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
