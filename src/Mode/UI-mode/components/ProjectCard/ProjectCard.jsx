import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, link, img }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="project-card">
        <div className="project-card__image-container">
          <img className="project-card__image" src={img} alt={title} />
        </div>
        <p className="project-card__title">{title}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
