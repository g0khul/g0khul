import { projects } from '../data/projects';

// Work/Projects Page - Showcase with dummy data

const Work = () => {
  return (
    <div>
      <h1>Work/Projects</h1>
      {/* TODO: Build project showcase with dummy data */}
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
