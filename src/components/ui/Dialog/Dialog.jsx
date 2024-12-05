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
            If you're interested in collaborating on a project or have any
            questions, feel free to message me here:
          </p>
          <a href="mailto:your-email@example.com" className="popup-link">
            Message Me
          </a>
          <p>Want to see more? Check out my website here:</p>
          <a href="https://your-website.com" className="popup-link">
            Visit My Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
