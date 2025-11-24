import type { Project } from "../../types";

// Project Card Component

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div>
      {/* Image/GIF */}
      {project.image && <img src={project.image} alt={project.title} />}

      {/* Title */}
      <h3>{project.title}</h3>

      {/* Description */}
      <p>{project.description}</p>

      {/* Stack */}
      <div>
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      {/* Links */}
      <div>
        {project.codeLink && (
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        )}
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
