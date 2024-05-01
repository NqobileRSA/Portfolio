import React from "react";
import heroSnap from "../../../../assets/amazonClone.webp";
import "./Projects.css";
import { ProjectCard } from "../../components/components";

const Projects = () => {
  return (
    <section id="projects" className="wrapper container">
      <div className="archive-header">
        <h2 className="archive-title">Live Projects</h2>
        {/* <p className="archive-subtitle">view the archive</p> */}
      </div>
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
    </section>
  );
};

export default Projects;
