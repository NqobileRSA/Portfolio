import React from "react";
import "./Projects.css";
import { ProjectCard } from "../../components/components";
import { motion } from "framer-motion";

const Projects = () => {
  const dummyProjects = [
    {
      title: "Project 1",
      description: "This is the description for Project 1.",
      technologies: ["React", "Node.js", "MongoDB"],
      imgUrl:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      githubUrl: "https://github.com/example/project1",
      liveUrl: "https://project1.example.com",
      videoUrl: "https://www.youtube.com/watch?v=abcdefghijk",
    },
  ];

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
            style={{
              fontSize: "2rem",
              color: "#d0d0d0",
            }}>
            Deployed Projects
          </span>
        </motion.h1>
      </div>
      <motion.div className="project-grid">
        {dummyProjects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}>
            <ProjectCard
              title={item.title}
              description={item.description}
              technologies={item.technologies}
              imgUrl={item.imgUrl}
              githubUrl={item.githubUrl}
              liveUrl={item.liveUrl}
              videoUrl={item.videoUrl}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
