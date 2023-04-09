import './Career.scss';
import { Fragment } from 'react';
import { CAREER, ICareer } from '../data/career';

export const Career = () => {
  return (
    <section className="career-container">
      <h1>CAREER</h1>
      <ul className="career-list">
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
    <li className="career-card-list">
      <aside className="career-card-list-left">
        <h2>{career.company}</h2>
        <h3>{career.position}</h3>
        <p>{career.period}</p>
        <div className="company-divider" />
      </aside>
      <ul className="career-card-list-right">
        {career.roles.map((role) => (
          <li key={role.name} className="career-card-right-role-item">
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
