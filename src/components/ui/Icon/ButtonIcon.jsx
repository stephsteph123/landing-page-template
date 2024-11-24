'use client'

import React from "react";
import "./ButtonIcon.scss";
import "@fortawesome/fontawesome-free/css/all.css";

export default function ButtonIcon({
  icon = "",
  onClick = () => console.log("hello world"),
  transparent = false,
  variant = "primary",
  ariaLabel,
  size = "medium",
}) {
  const sizes = {
    small: "fa-xs",
    large: "fa-xl",
    medium: "",
  };

  // Define icon mapping to use based on the selected option
  const iconMapping = {
    delete: <i className={`fa-regular fa-trash-can ${sizes[size]}`}></i>,
    edit: <i className={`fa-regular fa-pen-to-square ${sizes[size]}`}></i>,
    save: <i className={`fa-regular fa-floppy-disk ${sizes[size]}`}></i>,
    home: <i className={`fa-solid fa-house ${sizes[size]}`}></i>,
    settings: <i className={`fa-solid fa-gear ${sizes[size]}`}></i>,
    user: <i className={`fa-regular fa-user ${sizes[size]}`}></i>,
    heart: <i className={`fa-regular fa-heart ${sizes[size]}`}></i>,
    download: <i className={`fa-solid fa-file-arrow-down ${sizes[size]}`}></i>,
    refresh: <i className={`fa-solid fa-arrows-rotate ${sizes[size]}`}></i>,
    info: <i className={`fa-solid fa-circle-info ${sizes[size]}`}></i>,
    lockOpen: <i className={`fa-solid fa-lock-open ${sizes[size]}`}></i>,
    lockClosed: <i className={`fa-solid fa-lock ${sizes[size]}`}></i>,
    calendar: <i className={`fa-regular fa-calendar ${sizes[size]}`}></i>,
    chat: <i className={`fa-regular fa-comments ${sizes[size]}`}></i>,
    flag: <i className={`fa-regular fa-flag ${sizes[size]}`}></i>,
    share: <i className={`fa-solid fa-share-nodes ${sizes[size]}`}></i>,
    bell: <i className={`fa-regular fa-bell ${sizes[size]}`}></i>,
    menu: <i className={`fa-solid fa-bars ${sizes[size]}`}></i>,
    insta: <i className={`fa-brands fa-instagram ${sizes[size]}`}></i>,
    facebook: <i className={`fa-brands fa-facebook ${sizes[size]}`}></i>,
    email: <i className={`fa-regular fa-envelope ${sizes[size]}`}></i>,
    linkedin: <i className={`fa-brands fa-linkedin ${sizes[size]}`}></i>,
    cancel: <i className={`fa-solid fa-x ${sizes[size]}`}></i>,
    arrow: <i className={`fa-solid fa-arrow-right ${sizes[size]}`}></i>,
  };

  return (
    <button
      className={`icon icon-${variant} ${transparent ? "transparent" : ""}`}
      onClick={onClick}
      aria-label={ariaLabel || variant}
    >
      {iconMapping[icon]}
    </button>
  );
}
