import React from "react";
import "./ContactSides.css";

const Left = () => {
  const socials = [
    {
      id: "github",
      link: "#",
      icon: "bi bi-github",
    },
    {
      id: "linkedin",
      link: "#",
      icon: "bi bi-linkedin",
    },
    {
      id: "whatsapp",
      link: "#",
      icon: "bi bi-whatsapp",
    },
    {
      id: "facebook",
      link: "#",
      icon: "bi bi-facebook",
    },
    {
      id: "twitter",
      link: "#",
      icon: "bi bi-twitter-x",
    },
  ];
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
