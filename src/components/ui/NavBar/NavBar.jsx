"use client";

import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import ButtonIcon from "../Icon/ButtonIcon";
import Dialog from "@/components/ui/Dialog/Dialog";

export default function NavBar({
  topVariant = "--white-transparent",
  items = [
    { href: "/", name: "Home" },
    { href: "/", name: "About" },
    { href: "/", name: "Product" },
    { href: "/", name: "Services" },
    { href: "/", name: "Contact" },
  ],
}) {
  const [showNavBar, setShowNavBar] = useState(false);
  const [top, setTop] = useState(true);
  const [menuPosition, setMenuPosition] = useState(80);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  //decode props
  const biVariant = {
    "--primary-gradient": "primary",
    "--primary-transparent": "primary",
    "--secondary-gradient": "secondary",
    "--secondary-transparent": "secondary",
    "--white-gradient": "primary",
    "--white-transparent": "primary",
    "--black-gradient": "primary",
    "--black-transparent": "primary",
  };

  const arrowVariant = {
    "--primary-gradient": "secondary",
    "--primary-transparent": "secondary",
    "--secondary-gradient": "primary",
    "--secondary-transparent": "primary",
    "--white-gradient": "secondary",
    "--white-transparent": "secondary",
    "--black-gradient": "secondary",
    "--black-transparent": "secondary",
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenSize = window.innerWidth;
      const newPosition = Math.max(screenSize / 25);
      if (scrollPosition > 100) {
        setTop(false);
      } else {
        setTop(true);
      }
      if (screenSize < 800) {
        setTop(false);
      } else if (scrollPosition <= 100) {
        setTop(true);
      }
      setMenuPosition(newPosition);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  function onClick(hello) {
    console.log(hello);
    setShowNavBar(!showNavBar);
  }

  // Dialog Logic
  const openDialog = () => {
    event.preventDefault();
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  // hooks
  // toggles no scroll on overflow

  useEffect(() => {
    // If either isDialogOpen or showNavBar is true, disable scrolling
    if (isDialogOpen || (showNavBar && !top)) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }

    // Cleanup on unmount or when dependencies change
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isDialogOpen, showNavBar, top]);

  return (
    <>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog}></Dialog>
      <nav
        className={`top-nav-bar ${top ? "show" : ""} top-nav-bar${topVariant}`}
      >
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
        <>
          <div className={`nav-bar-overlay ${showNavBar ? "show" : ""}`} />
          <div
            className="nav-bar-menu-button"
            style={{ top: menuPosition, right: menuPosition }}
          >
            <ButtonIcon
              onClick={onClick}
              icon="menu"
              variant={biVariant[topVariant]}
            />
          </div>
          <div className={`nav-bar-dialog ${showNavBar ? "show" : ""}`}>
            <nav className={`nav-bar-parent nav-bar-parent${topVariant}`}>
              <div className="nav-bar-cancel">
                <ButtonIcon
                  onClick={onClick}
                  icon="cancel"
                  variant={biVariant[topVariant]}
                  size="small"
                />
              </div>
              <ul>
                {items.map((item, index) => (
                  <li key={index} onClick={() => openDialog()}>
                    <a href="#home">{item.name}</a>
                    <div className="navbar-arrow">
                      <ButtonIcon
                        icon="arrow"
                        variant={arrowVariant[topVariant]}
                        size="large"
                        transparent
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
