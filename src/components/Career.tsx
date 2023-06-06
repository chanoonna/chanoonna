import './Career.scss';
import { Fragment } from 'react';
import { useIsSectionEnabled } from './hooks/useIsSectionEnabled';

export const Career = () => {
  const isSectionEnabled = useIsSectionEnabled('section-container.career');

  return (
    <section className="section-container career">
      <h1 className="section-heading career">
        WORK
        <div
          className={
            'section-heading-underline career' +
            (isSectionEnabled ? ' enabled' : '')
          }
        />
      </h1>
      <ul className="section-list career">
        {CAREER.map((career) => (
          <Fragment key={career.id}>
            <CareerCard career={career} />
          </Fragment>
        ))}
      </ul>
    </section>
  );
};

const CareerCard = ({ career }: { career: ICareer }) => {
  return (
    <li className="section-card-container career">
      <aside className="section-card-left career">
        <h2
          className="company-name"
          onClick={() => {
            window.open(career.url, '_blank');
          }}
        >
          {career.company}
        </h2>
        <h3>{career.position}</h3>
        <h4>{career.description}</h4>
        <p>{career.period}</p>
        <div className="section-divider" />
      </aside>
      <ul className="section-card-right career">
        {career.achievements.map((achievement, index) => (
          <li key={index} className="section-card-right-item career">
            <ul className="career-card-right-responsibilities">
              <li key={achievement}>
                <span>◇ </span>
                <p>{achievement}</p>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </li>
  );
};

interface ICareer {
  id: number;
  company: string;
  description: string;
  url: string;
  position: string;
  period: string;
  achievements: string[];
  skills: string[];
}

const CAREER: ICareer[] = [
  {
    id: 1,
    company: 'Mosaic Inc.',
    description: 'AI-powered Project, Budget and Employee Management Solution',
    position: 'Software Developer',
    url: 'https://www.mosaicapp.com/',
    period: '2021.04 - 2023.04',
    achievements: [
      'Worked on the development of the Organization Chart feature to help users visualize and structure their organization effectively. Used React-Flow and ELKJS to support auto-layout and drag-and-drop functionalities. Implemented specialized layouts for handling co-managers and applied a memoization technique to optimize performance during drag-and-drop operations.',
      "Implemented logic to assist users in exporting or printing current charts, particularly when dealing with virtualized lists that don't typically render all elements. Introduced a mechanism to temporarily disable virtualization and render the complete list for printing purposes.",
      'Improved efficiency in writing E2E test cases for the team by researching and documenting best practices for the Low-Code Test Automation solution Mabl. Also, created reusable code snippets for shared test steps, resulting in reduced development time.',
      'Performed thorough security audits on sections displaying user-provided data, mitigating XSS vulnerabilities by utilizing a string escape library for proper content escaping. Additionally, addressed potential security risks by implementing permission checks in previously unchecked API calls. Rectified instances of incorrect string escaping, ensuring the correct display of content across the application.',
      'Managed tickets to enhance team efficiency by prioritizing them based on complexity and estimated time. Achieved this by creating and linking JIRA tickets to relevant Slack messages, streamlining communication and task management processes.'
    ],
    skills: [
      'Javascript',
      'Typescript',
      'React',
      'Redux',
      'Ruby on Rails',
      'PostgreSQL',
      'Task Management'
    ]
  }
];
