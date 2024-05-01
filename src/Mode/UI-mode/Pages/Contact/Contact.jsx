import React from "react";
import { SocialLink } from "../../components/components";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="wrapper container" id="contact">
      <div className="max-width-container mx-auto flex flex-col gap items-center justify-center">
        <h2 className="text-xl font-bold">Ready To Collaborate!</h2>
        <p className="text-lg tracking-wider font-medium text-center">
          I'm always up for delving into your project, boosting your online
          presence, or tackling website design and conversion challenges.
        </p>
        <a href="NqobileNgobeni72@gmail.com">
          <button className="button-gradient text-xl font-bold text-white rounded hover-gradient duration-300">
            Say Hello
          </button>
        </a>
      </div>
      <div className="margin-top flex items-center flex-wrap gap justify-center">
        <SocialLink
          title="Github"
          link="https://github.com/noorjsdivs"
          icon="bi-github"
        />
        <SocialLink
          title="Youtube"
          link="https://www.youtube.com/@reactjsBD"
          icon="bi-youtube"
        />
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
          icon="bi-linkedin"
        />
        <SocialLink
          title="Facebook"
          link="https://www.facebook.com/Noorlalu143/"
          icon="bi-facebook"
        />
        <SocialLink
          title="Nextjs"
          link="https://vercel.com/noorjsdivs"
          icon="bi-globe"
        />
      </div>
    </div>
  );
};

export default Contact;
