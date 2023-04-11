import './Projects.scss';
import { Fragment, useState, useEffect } from 'react';
import { PROJECTS, IProject } from '../data/projects';
import { GithubIcon } from './shared/GithubIcon';

export const Projects = () => {
  const [isUnderlineEnabled, setIsUnderlineEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const projectSection = document
        .querySelector('.section-container.projects')
        ?.getBoundingClientRect();

      if (projectSection) {
        if (
          projectSection.top <= 150 &&
          -projectSection.top <= projectSection.height - 150
        ) {
          setIsUnderlineEnabled(true);
        } else {
          setIsUnderlineEnabled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section-container projects">
      <h1 className="section-heading projects">
        PROJECTS
        <div
          className={
            'section-heading-underline projects' +
            (isUnderlineEnabled ? ' enabled' : '')
          }
        />
      </h1>
      <ul className="section-list projects">
        {PROJECTS.map((project) => (
          <Fragment key={project.id}>
            <ProjectCard project={project} />
          </Fragment>
        ))}
      </ul>
    </section>
  );
};

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <li className="section-card-container projects">
      <aside className="section-card-left project">
        <div className="project-name-container">
          <h2 className="project-name">{project.name}</h2>
          <div
            onClick={() => {
              window.open(project.github, '_blank');
            }}
            className="github-icon-container"
          >
            <GithubIcon />
          </div>
        </div>
        <div className="section-divider" />
        <ul className="project-stacks-container">
          {project.stacks.map((stack) => (
            <li key={stack}>{stack}</li>
          ))}
        </ul>
      </aside>
      <div className="section-card-right projects">
        <div className="section-card-right-item projects image-container">
          {project.imageLinks.map((imageLink, index) => (
            <img key={index} src={imageLink} />
          ))}
        </div>
        <div className="section-card-right-item projects description">
          {project.description}
        </div>
      </div>
    </li>
  );
};
