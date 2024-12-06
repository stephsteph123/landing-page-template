// components/Dialog.js

import React from "react";
import ButtonIcon from "../Icon/ButtonIcon";
import "./Dialog.scss";

const Dialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className={`dialog-content ${isOpen ? "show" : ""}`}>
        <header className="dialog-header">
          <h3>Thanks for checking out this demo! 👋</h3>
          <ButtonIcon
            onClick={onClose}
            icon="cancel"
            variant="primary"
            size="small"
          />
        </header>
        <div className="dialog-body">
          <p>
            If you&apos;re interested in collaborating on a project or have any
            questions, feel free to message me here:
          </p>
          <a
            href="mailto:stephrowesoft@gmail.com"
            className="popup-link"
            aria-label="Send me an email"
          >
            Message Me
          </a>
          <p>Want to see more? Check out my website here:</p>
          <a
            href="https://www.stephrowe.ca"
            className="popup-link"
            aria-label="Visit my website"
          >
            Visit My Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
