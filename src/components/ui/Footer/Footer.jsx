// "use client";
import React from "react";
import ButtonIcon from "../Icon/ButtonIcon";
import "./Footer.scss";
import Dialog from "@/components/ui/Dialog/Dialog";

function Footer({
  companyLogo = "/images/placeholder-logo.png",
  address = `404 Imaginary Lane<br />Floor 99<br />Faketown, ZZ 12345<br />(000) 867-5309`,
  logoHeight = "5rem",
  icons = ["email", "insta"],
}) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="row-1">
          <div className="leftside">
            <img
              className="footer-logo"
              src={companyLogo}
              style={{ height: logoHeight }}
              alt="company logo"
            />
            <div
              className="row-1-address"
              dangerouslySetInnerHTML={{ __html: address }}
            ></div>
          </div>
          <div className="symbols">
            {icons.map((item, index) => (
              <ButtonIcon icon={item} key={index}/>
            ))}
          </div>
        </div>
        <div className="row-2">
          <p className="copy-right">
            Copyright &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
