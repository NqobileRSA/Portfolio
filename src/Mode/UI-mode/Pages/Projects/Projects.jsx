import React from "react";
import heroSnap from "../../../../assets/amazonClone.webp";

import "./Projects.css";
import { ProjectCard } from "../../components/components";

const Projects = () => {
  return (
    <div className="wrapper container">
      <div className="project-grid">
        <ProjectCard
          img={heroSnap}
          title="Amazon Clone"
          link="https://amazonclone.reactbd.com/"
        />
        <ProjectCard
          img={heroSnap}
          title="Amazon Clone"
          link="https://amazonclone.reactbd.com/"
        />
        <ProjectCard
          img={heroSnap}
          title="Amazon Clone"
          link="https://amazonclone.reactbd.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
