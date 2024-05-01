import React from "react";
import "./SocialLinks.css";

const SocialLink = ({ title, link, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link">
      <span className="social-link-text">{title}</span>
      <i className={`bi ${icon} social-link-icon`}></i>
    </a>
  );
};

export default SocialLink;
