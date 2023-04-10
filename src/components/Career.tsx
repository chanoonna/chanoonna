import './Career.scss';
import { Fragment } from 'react';
import { CAREER, ICareer } from '../data/career';

export const Career = () => {
  return (
    <section className="section-container career">
      <h1 className="section-heading career">
        CAREER
        <div className="section-heading-underline career show" />
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
