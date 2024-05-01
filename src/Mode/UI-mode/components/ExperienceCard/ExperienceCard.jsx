import React from "react";
import "./ExperienceCard.css";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="xp-container container">
      <h3 className="xp-heading">
        {experience.role}{" "}
        <span className="heading-highlight">@{experience.company}</span>
      </h3>
      <p className="xp-date">{experience.duration}</p>
      <ul className="xp-list">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index} className="xp-list-item">
            <span className="xp-list-item-icon">
              <i className="bi bi-arrow-right"></i>
            </span>
            {responsibility}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
