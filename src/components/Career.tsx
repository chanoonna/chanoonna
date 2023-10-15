import './Career.scss';
import { Fragment, useMemo } from 'react';
import { useIsSectionEnabled } from './hooks/useIsSectionEnabled';

export const Career = () => {
  const isSectionEnabled = useIsSectionEnabled('section-container.career');

  const career = useMemo(() => {
    const reversed = [...CAREER].reverse();

    return reversed;
  }, []);

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
        {career.map((career) => (
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
      'Improved the performance of one of the data visualization features by implementing virtualization and lazy loading techniques. This resulted in a 20% decrease in network response time due to a reduced initial data fetching size and 10% faster rendering.',
      "Implemented logic to assist users in exporting or printing current charts, particularly when dealing with virtualized lists that don't typically render all elements. Introduced a mechanism to temporarily disable virtualization and render the complete list for printing purposes.",
      'Improved efficiency in writing E2E test cases for the team by researching and documenting best practices for the Low-Code Test Automation solution Mabl. Also, created reusable code snippets for shared test steps, resulting in reduced development time.',
      'Performed thorough security audits on sections displaying user-provided data, mitigating XSS vulnerabilities by utilizing a string escape library for proper content escaping. Additionally, addressed potential security risks by implementing permission checks in previously unchecked API calls. Rectified instances of incorrect string escaping, ensuring the correct display of content across the application.',
      'Managed tickets to enhance team efficiency by prioritizing them based on complexity and estimated time. Achieved this by creating and linking JIRA tickets to relevant Slack messages, streamlining communication and task management processes.',
      'Developed several new features mainly for data creation, modification and visualization with various types of charts.'
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
  },
  {
    id: 2,
    company: 'EBS Bookstore',
    description: 'Educational Book Supply',
    position: 'Software Developer Contractor',
    url: 'https://www.ebsbookstore.com/',
    period: '2023.10 - Current',
    achievements: [
      'Currently working on building a new POS system with ElectronJS, React, and SQLite3 that has general POS functionalities, inventory management, and sales data analysis and reporting. It will integrate with Shopify database for synching inventory.',
      'Updated the Shopify-based application to include additional functionalities for efficient product management. This resulted in a 50% reduction in the time required for writing product details for the online store manager.',
      'Analyzed and improved SEO (Search Engine Optimization) to increase traffic to its online store by implementing SEO best practices. This resulted in a 100% increase in user traffic.'
    ],
    skills: [
      'Javascript',
      'Typescript',
      'Liquid',
      'Electron',
      'React',
      'SQLite3'
    ]
  }
];
