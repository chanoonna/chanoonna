import './Projects.scss';
import { Fragment } from 'react';
import { GithubIcon } from './shared/GithubIcon';
import { useIsSectionEnabled } from './hooks/useIsSectionEnabled';

export const Projects = () => {
  const isSectionEnabled = useIsSectionEnabled('section-container.projects');

  return (
    <section className="section-container projects">
      <h1 className="section-heading projects">
        PROJECTS
        <div
          className={
            'section-heading-underline projects' +
            (isSectionEnabled ? ' enabled' : '')
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
      'Electron desktop application for general Point of Sale application. The goal of the project is to make sales simple and easy and visualizing the sales data so that users can see how their business is doing.',
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
      'Project with multi-page react app for the front-end and back-end with express. The app visualizes how MPs of Canadian parliament voted on different bills. Back-end data is from the official data from the parliament website provided in xml format. The app downloads all the files, parce them, and store them in the database.',
    imageLinks: [
      'https://raw.githubusercontent.com/csb3/open-house-of-commons/543ae6128638889587b7fca3c8ce877aaabfa6fa/docs/homepage.png',
      'https://raw.githubusercontent.com/csb3/open-house-of-commons/543ae6128638889587b7fca3c8ce877aaabfa6fa/docs/vote-view.png'
    ],
    github: 'https://github.com/chanoonna/open-house-of-commons',
    stacks: ['React', 'chart.js', 'sass', 'node.js', 'express', 'postgresql']
  },
  {
    id: 1,
    name: 'Interview schedulear',
    description:
      'A single page react application that allows users to schedule interviews. The app uses websocket for real-time updates. Users can create, edit, delete interviews.',
    imageLinks: [
      'https://raw.githubusercontent.com/chanoonna/scheduler/master/docs/displayinterview.png',
      'https://raw.githubusercontent.com/chanoonna/scheduler/master/docs/bookinterview.png',
      'https://raw.githubusercontent.com/chanoonna/scheduler/master/docs/cancelinterview.png'
    ],
    github: 'https://github.com/chanoonna/scheduler',
    stacks: ['React', 'sass', 'jest', 'cypress', 'circleci', 'storybook']
  }
];
