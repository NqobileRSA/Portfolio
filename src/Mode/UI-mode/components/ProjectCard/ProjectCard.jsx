import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import "./ProjectCard.css";

const ProjectCard = ({
  title,
  description,
  technologies,
  imgUrl,
  githubUrl,
  liveUrl,
  videoUrl,
}) => {
  return (
    <section className="projects-section">
      {/* <SectionTitle title="Some Things I have Built" titleNo="03" /> */}
      {/* ============ project One Start here ================ */}
      <div className="projects-container">
        <div className="project-item">
          <a
            className="project-image-container group"
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer">
            <div>
              <img className="project-image" src={imgUrl} alt={title} />
              <div className="project-overlay"></div>
            </div>
          </a>
          <div className="project-details">
            <div>
              <p className="project-tag">Featured Project</p>
              <h3 className="project-title">{title}</h3>
            </div>
            <p className="project-description">{description}</p>
            <ul className="project-tech-list">
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              <a
                className="project-link"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer">
                <TbBrandGithub />
              </a>
              {videoUrl && (
                <a
                  className="project-link"
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  <AiOutlineYoutube />
                </a>
              )}
              <a
                className="project-link"
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer">
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
