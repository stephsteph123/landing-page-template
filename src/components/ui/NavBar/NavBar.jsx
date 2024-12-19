"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Dialog from "../Dialog/Dialog";
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
  // const { height } = useDimensions(containerRef);
  const [top, setTop] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

  // Dialog Logic
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  // Scroll and Resize Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const resize = window.innerWidth;
      if (scrollY < 100 && resize > 800) {
        setTop(true);
      } else {
        setTop(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // size logic
  useEffect(() => {
    const handleResize = () => {
      const resize = window.innerWidth;
      if (resize < 800) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className={`top-nav-bar ${top ? "show" : ""}`}>
        <Dialog isOpen={isDialogOpen} onClose={closeDialog}></Dialog>
        <ul className="top-nav-bar-list">
          {items.map((item, index) => (
            <li
              key={index}
              className="top-nav-bar-list-item"
              onClick={() => openDialog()}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
      {!top && (
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          ref={containerRef}
        >
          <motion.div
            className={`nav-bar-dialog ${isOpen ? "show" : ""}`}
            onClick={() => toggleOpen()}
          />
          <Navigation isOpen={isOpen} items={items} mobile={mobile} />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      )}
    </>
  );
};

export default NavBar;
