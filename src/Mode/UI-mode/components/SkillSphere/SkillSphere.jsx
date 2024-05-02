import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { skills } from "../../constants";

import "./SkillSpere.css";

const SkillSphere = () => {
  useEffect(() => {
    const $ = window.jQuery;

    if (
      !$("#myCanvas").tagcanvas(
        {
          textColour: "#08fdd8",
          outlineColour: "transparent",
          reverse: true,
          depth: 0.8,
          maxSpeed: 0.05,
          weight: true,
        },
        "tags"
      )
    ) {
      // something went wrong, hide the canvas container
      $("#myCanvasContainer").hide();
    }
  }, []);

  return (
    <motion.section
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      id="section-skills">
      <div className="skills-charts container ">
        <div id="myCanvasContainer">
          <canvas width="500" height="500" id="myCanvas">
            <ul id="tags">
              {skills.map((item) => (
                <li key={item.id} className="skill">
                  <a href="#section-skills" target="_blank">
                    {item.skill}
                  </a>
                </li>
              ))}
            </ul>
          </canvas>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillSphere;
