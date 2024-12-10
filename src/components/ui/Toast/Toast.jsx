// Toast.js

"use client";

import React, { useEffect, useState } from "react";
import ButtonIcon from "../Icon/ButtonIcon";
import "./Toast.scss";

export default function Toast({
  children = "Notifications: Available and Customizable",
  icon = "notice",
}) {
  const [showMsg, setShowMsg] = useState(false);
  const [mobile, setMobile] = useState(false);
  const iconMapping = {
    notice: <i className="fa-solid fa-circle-info"></i>,
  };

  function setCustomTimeout(callback, delay) {
    const timeoutId = setTimeout(() => {
      callback();
      clearTimeout(timeoutId);
    }, delay);
  }

  useEffect(() => {
    // Example usage
    setCustomTimeout(() => {
      setShowMsg(true);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleResize=() => {
      const screenSize = window.innerWidth;
    }
  },[])

  return (
        <div className={`wrapper ${showMsg ? "" : "gone"}`}>
          <div className={`toastWrapper ${showMsg ? "show" : ""}`}>
            <div className={`toast notice`}>
              <div className="iconContainer">{iconMapping[icon]}</div>
              <p className="content">{children}</p>
              <ButtonIcon
                className="closeButton"
                onClick={() => setShowMsg(false)}
                transparent={true}
                icon="cancel"
                variant="black"
                size="small"
                aria-label="Dismiss Toast Message"
              />
            </div>
          </div>
        </div>
  );
}
