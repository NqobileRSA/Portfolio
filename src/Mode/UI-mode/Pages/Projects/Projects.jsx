import React from "react";
import "./Projects.css";
import { ProjectCard } from "../../components/components";
import { motion } from "framer-motion";
import { projects } from "../../constants";

const Projects = () => {
  return (
    <section id="projects" className="wrapper container">
      <div className="archive-header">
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="heading-1">
          <span
            className="subheading"
            style={{ fontSize: "2rem", color: "#d0d0d0" }}>
            Deployed Pr
            <i className="bi bi-globe-europe-africa globe" />
            jects
          </span>
        </motion.h1>
      </div>
      <motion.div className="project-grid">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}>
            <ProjectCard img={item.image} title={item.title} link={item.link} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
