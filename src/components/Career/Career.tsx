import './Career.scss';
import { useState, useEffect } from 'react';
import { BezieredContainer } from 'components';
import { SectionContainer } from '../shared/SectionContainer';
import { getHandleScroll } from '../utils';
import { CareerCard, ICareer } from './CareerCard';
import { ID_CAREER } from '../constants';

export const Career = () => {
  const [current, setCurrent] = useState(0);

  return (
    <SectionContainer pages={careers.length} id={ID_CAREER}>
      <BezieredContainer className="sticky" height="240">
        <div className="career">
          <div
            className="career-overflow-container"
            style={{
              width: `${(careers.length + 2) * 100}%`,
              transform: `translateX(${-(current * 100)}vw)`
            }}
          >
            {careers.map((career) => (
              <CareerCard key={career.id} career={career} />
            ))}
          </div>
        </div>
      </BezieredContainer>
    </SectionContainer>
  );
};

const careers: ICareer[] = [
  {
    id: 1,
    company: 'Mosaic Inc.',
    jobTitle: 'Frontend Developer',
    fromTo: 'Apr 2021 - Feb 2023 (Full-time) / Feb 2023 - Present (Part-time)',
    tasks: [
      {
        description:
          'Developing new user-facing freatures with data creation and visualization',
        notableWork: [
          'Interactive Org Chart with auto layout by using graph-like data structure',
          'Multiple types of charts: bar, line, pie, etc.',
          '2D table showing relationships between 2 entities with responsive column size by browser width',
          'Dashboard with multiple widgets containing summarized data',
          'Page exporting to PDF'
        ]
      },
      {
        description:
          'Code quality improvement: refactoring, unit testing, code review, etc.',
        notableWork: [
          'Unit test creation for existing features and setting up example tests for others to follow',
          'Refactoring legacy code to improve readability and maintainability'
        ]
      },
      {
        description:
          'Task management: planning, estimation, prioritization, etc.'
      }
    ]
  }
];
