import { projects } from '../data/projects';

const Work = () => {
  return (
    <div>
      <h1>Work/Projects</h1>
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
