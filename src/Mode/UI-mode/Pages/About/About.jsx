import React from "react";
import "./About.css";
import profileImg from "../../../../assets/code-snaps/hero-snap.png";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-title">
        <h2>About Me</h2>
        <span>01</span>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! My name is Noor Mohammad and I enjoy creating things that
            live on the internet. My interest in web development started back in
            2012 when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I had the privilege of working at an
            advertising agency, a start-up,{" "}
            <span className="text-green">
              a huge corporation, and a student-led design studio.
            </span>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem
            accusantium fugiat veritatis, quidem repellat{" "}
            <span className="text-green">
              ab natus possimus? Sint, accusamus!
            </span>
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            ullam eligendi dolorum nostrum possimus quos iusto magnam ut esse
            recusandae.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="technologies-list">
            <li>
              <span className="text-green">
                <i className="bi bi-lightning"></i>
              </span>
              JavaScript (ES6+)
            </li>
            <li>
              <span className="text-green">
                <i className="bi bi-lightning"></i>
              </span>
              Next.js
            </li>
            <li>
              <span className="text-green">
                <i className="bi bi-lightning"></i>
              </span>
              React
            </li>
            <li>
              <span className="text-green">
                <i className="bi bi-lightning"></i>
              </span>
              Node.js
            </li>
            <li>
              <span className="text-green">
                <i className="bi bi-lightning"></i>
              </span>
              TypeScript
            </li>
            <li>
              <span className="text-green">
                <i className="bi bi-lightning"></i>
              </span>
              Express.js
            </li>
            <li>
              <span className="text-green">
                <i className="bi bi-lightning"></i>
              </span>
              MongoDB
            </li>
            <li>
              <span className="text-green">
                <i className="bi bi-lightning"></i>
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        {/* <div className="about-image">
          <img src={profileImg} alt="Profile" />
          <div className="image-overlay"></div>
          <div className="image-border"></div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
