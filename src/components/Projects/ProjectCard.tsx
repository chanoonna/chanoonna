import { GithubIcon } from '../shared/GithubIcon';

export interface IProject {
  id: number;
  title: string;
  githubs: { name: string; url: string }[];
  description: string;
  techStack: string[];
  imageFileName: string;
}

export const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <div id={project.id.toString()} className="project-card">
      <section className="project-card-section">
        <div className="left">
          {project.imageFileName ? (
            <img src={project.imageFileName} />
          ) : (
            'NO IMAGE'
          )}
        </div>
        <div className="right">
          <header className="project-card-header">
            <h2>{project.title}</h2>
            <div className="github-container">
              {project.githubs.map((github) => (
                <div
                  key={github.name}
                  title={github.name}
                  onClick={() => {
                    window.open(github.url, '_blank');
                  }}
                  className="github-icon-container"
                >
                  <GithubIcon />
                </div>
              ))}
            </div>
          </header>
          <ul className="project-card-stacks">
            {project.techStack.map((stack) => (
              <li key={stack}>{stack}</li>
            ))}
          </ul>
          <div className="project-card-description">
            <p>{project.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
