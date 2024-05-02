import React from "react";
import { SocialLink } from "../../components/components";
import { socials } from "../../constants";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="wrapper container" id="contact">
      <div className="contact-content">
        <h2 className="contact-header">Ready To Collaborate?</h2>
        {/* <p className="text-lg tracking-wider font-medium text-center">
          I'm always up for delving into your project, boosting your online
          presence, or tackling website design and conversion challenges.
        </p> */}
        <a href="NqobileNgobeni72@gmail.com">
          <button className="contact-button duration-300">
            Let's Get Started.
          </button>
        </a>
      </div>
      <div className="contact-icons ">
        {socials.map((item) => (
          <SocialLink
            title={item.id}
            link={item.link}
            icon={item.icon}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
