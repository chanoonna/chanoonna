import './Projects.scss';
import { useState, useEffect } from 'react';
import { BezieredContainer } from 'components';
import { SectionContainer } from '../shared/SectionContainer';
import { getHandleScroll } from '../utils';
import { ProjectCard, IProject } from './ProjectCard';
import { ID_PROJECTS } from '../constants';

export const Projects = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleScroll = getHandleScroll(
      projects.length,
      'career-section',
      setCurrent
    );

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SectionContainer pages={projects.length + 2} id={ID_PROJECTS}>
      <BezieredContainer className="sticky" height="240">
        <div className="project" id="project">
          <div
            className="project-overflow-container"
            style={{
              width: `${(projects.length + 2) * 100}%`,
              transform: `translateX(${-(current * 100)}vw)`
            }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </BezieredContainer>
    </SectionContainer>
  );
};

const projects: IProject[] = [
  {
    id: 1,
    title: 'Open House of Commons',
    imageFileName:
      'https://github.com/csb3/open-house-of-commons/raw/543ae6128638889587b7fca3c8ce877aaabfa6fa/docs/vote-view.png?raw=true',
    githubs: [
      {
        name: 'Frontend',
        url: 'https://github.com/chanoonna/open-house-of-commons'
      },
      {
        name: 'Backend',
        url: 'https://github.com/chanoonna/open-house-of-commons-api'
      }
    ],
    description:
      'Final project for the Web Development Bootcamp. Web app that allows users to search for their MP and view their voting records. The app uses the official data from the House of Commons of Canada in xml format. The data gets downloaded and parsed then stored in a postgresql database.',
    techStack: ['React', 'chart.js', 'sass', 'express', 'postgresql']
  },
  {
    id: 2,
    title: 'Interview Scheduler',
    imageFileName:
      'https://raw.githubusercontent.com/chanoonna/scheduler/master/docs/bookinterview.png',
    githubs: [
      {
        name: 'Frontend',
        url: 'https://github.com/chanoonna/scheduler'
      }
    ],
    description:
      'Interview Scheduler is a single page application built with React. It allows users to book, edit and cancel interviews. The app uses a websocket to update the state of the app in real time.',
    techStack: [
      'React',
      'node-sass',
      'jest',
      'cypress',
      'circleci',
      'storybook'
    ]
  },
  {
    id: 3,
    title: 'Point of Sale (On going project)',
    imageFileName: '',
    githubs: [
      {
        name: 'Desktop',
        url: 'https://github.com/chanoonna/pos-app'
      }
    ],
    description:
      'Point of Sale is a desktop application built with Electron. It allows users to make sales, manage their inventory and create invoices. The app also visualizes the sales data.',
    techStack: ['typescript', 'electon', 'React', 'sqlite3', 'webpack']
  }
];
