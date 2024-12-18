"use client";

import React, { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import "./NavBar.scss";

export const NavBar = ({
  items = [
    { href: "/", name: "Home" },
    { href: "/", name: "About" },
    { href: "/", name: "Product" },
    { href: "/", name: "Services" },
    { href: "/", name: "Contact" },
  ],
}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    // If either isDialogOpen or showNavBar is true, disable scrolling
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }

    // Cleanup on unmount or when dependencies change
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className={`nav-bar-overlay show`} />
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          className={`nav-bar-dialog ${isOpen ? "show" : ""}`}
          onClick={() => toggleOpen()}
        />
        <Navigation isOpen={isOpen} items={items} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
};

export default NavBar;
