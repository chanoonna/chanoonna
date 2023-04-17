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
        <p>{career.period}</p>
        <div className="section-divider" />
      </aside>
      <ul className="section-card-right career">
        {career.roles.map((role) => (
          <li key={role.name} className="section-card-right-item career">
            <h3>{role.name}</h3>
            <h4>{role.description}</h4>
            <ul className="career-card-right-responsibilities">
              {role.responsibilities.map((responsibility) => (
                <li key={responsibility}>
                  <span>◇ </span>
                  <p>{responsibility}</p>
                </li>
              ))}
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
  url: string;
  position: string;
  period: string;
  roles: {
    name: string;
    description: string;
    responsibilities: string[];
  }[];
}

const CAREER: ICareer[] = [
  {
    id: 1,
    company: 'Mosaic Inc.',
    position: 'Frontend Developer',
    url: 'https://www.mosaicapp.com/',
    period: '2021.04 - 2023.04',
    roles: [
      {
        name: 'New feature development management',
        description: 'Drive the success of ongoing feature development',
        responsibilities: [
          'Requirement analysis',
          'Document writing for associated teams',
          'Prioritization of related tasks',
          'Reassessment & adjustment of the tasks as of requirement changes'
        ]
      },
      {
        name: 'Frontend development',
        description:
          'Implement new frontend features; generally for data creation, modification and visualization',
        responsibilities: [
          'New features and functionalities development',
          'Bug fixes, quality improvements, and maintenance',
          'Feedback to other developers',
          'Test writing',
          'Code reviews'
        ]
      },
      {
        name: 'Task management',
        description:
          'Manage non-feature development: bug fixes, maintenance, etc.',
        responsibilities: [
          'Estimatimation of required time and complexity',
          'Task prioritiztion and assignment'
        ]
      }
    ]
  }
];
