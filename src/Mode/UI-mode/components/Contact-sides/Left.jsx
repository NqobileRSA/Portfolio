import React from "react";
import "./ContactSides.css";
import { socials } from "../../constants";

const Left = () => {
  return (
    <div className="left-side">
      <div className="social-links">
        {socials.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={item.id}>
            <span className="social-icon">
              <i className={item.icon}></i>
            </span>
          </a>
        ))}
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default Left;
