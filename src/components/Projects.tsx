import './Projects.scss';
import { Fragment, useState, useEffect } from 'react';
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
      <aside className="section-card-left projects">
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
        <div className="section-card-right-item projects description">
          {project.description}
        </div>
        <div className="section-card-right-item projects image-container">
          {project.imageLinks.map((imageLink, index) => (
            <img key={index} src={imageLink} />
          ))}
        </div>
      </div>
    </li>
  );
};

interface IProject {
  id: number;
  name: string;
  description: string;
  imageLinks: string[];
  github: string;
  stacks: string[];
}

const PROJECTS: IProject[] = [
  {
    id: 3,
    name: 'Point of sale (Ongoing)',
    description:
      'An electron desktop application that allows users to manage their sales, inventory. Users can create, edit, and delete sales and their products. It also visualizes user data with multiple types of charts.',
    imageLinks: [
      'https://github.com/chanoonna/pos-app/blob/main/docs/Screenshot%202023-04-04%20at%204.25.53%20PM.png?raw=true',
      'https://github.com/chanoonna/pos-app/blob/main/docs/Screenshot%202023-04-04%20at%204.26.47%20PM.png?raw=true',
      'https://github.com/chanoonna/pos-app/blob/main/docs/Screenshot%202023-04-04%20at%204.26.57%20PM.png?raw=true'
    ],
    github: 'https://github.com/chanoonna/pos-app',
    stacks: [
      'typescript',
      'electon',
      'React',
      'sqlite3',
      'webpack',
      'material-ui'
    ]
  },
  {
    id: 2,
    name: 'Open house of commons',
    description:
      'A project with both frontend and backend. The frontend is a multi-page react application that allows users to search for their MPs and see their voting records by visualizing voting data. The backend is a node.js API server that downloads data from the official parliament website, parses the data, and stores it to postgres database. The frontend and backend are connected through REST API.',
    imageLinks: [
      'https://github.com/csb3/open-house-of-commons/raw/543ae6128638889587b7fca3c8ce877aaabfa6fa/docs/vote-view.png?raw=true'
    ],
    github: 'https://github.com/chanoonna/open-house-of-commons',
    stacks: ['React', 'chart.js', 'sass', 'node.js', 'express', 'postgresql']
  },
  {
    id: 1,
    name: 'Interview schedulear',
    description:
      'A single page react application that allows users to schedule interviews with real-time updates by using websocket. Users can create, edit, and delete interviews. Users can also switch between days and see the schedule for each day.',
    imageLinks: [
      'https://raw.githubusercontent.com/chanoonna/scheduler/master/docs/bookinterview.png'
    ],
    github: 'https://github.com/chanoonna/scheduler',
    stacks: ['React', 'sass', 'jest', 'cypress', 'circleci', 'storybook']
  }
];
