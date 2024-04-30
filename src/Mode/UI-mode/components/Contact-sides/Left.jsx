import React from "react";
import "./ContactSides.css";

const Left = () => {
  return (
    <div className="left-side">
      <div className="social-links">
        <a
          href="https://github.com/noorjsdivs"
          target="_blank"
          rel="noopener noreferrer">
          <span className="social-icon">
            <i className="bi bi-github"></i>
          </span>
        </a>
        <a
          href="https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"
          target="_blank"
          rel="noopener noreferrer">
          <span className="social-icon">
            <i className="bi bi-youtube"></i>
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
          target="_blank"
          rel="noopener noreferrer">
          <span className="social-icon">
            <i className="bi bi-linkedin"></i>
          </span>
        </a>
        <a
          href="https://www.facebook.com/Noorlalu143/"
          target="_blank"
          rel="noopener noreferrer">
          <span className="social-icon">
            <i className="bi bi-facebook"></i>
          </span>
        </a>
        <a
          href="https://www.instagram.com/simplenoor143/"
          target="_blank"
          rel="noopener noreferrer">
          <span className="social-icon">
            <i className="bi bi-instagram"></i>
          </span>
        </a>
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default Left;
