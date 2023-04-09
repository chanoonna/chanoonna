import './Career.scss';
import { CAREER, ICareer } from '../data/career';

export const Career = () => {
  return (
    <section className="career-container">
      <h1>CAREER</h1>
      <ul className="career-list">
        {CAREER.map((career) => (
          <li key={career.id} className="career-list-item">
            <CareerCard career={career} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const CareerCard = ({ career }: { career: ICareer }) => {
  return (
    <div className="career-card-container">
      <div className="career-card-left">
        <h2>{career.company}</h2>
        <h3>{career.position}</h3>
        <p>{career.period}</p>
      </div>
      <div className="career-card-right">
        <ul className="career-card-right-roles">
          {career.roles.map((role) => (
            <li key={role.name} className="career-card-right-role-item">
              <h3>{role.name}</h3>
              <h4>{role.description}</h4>
              <ul className="career-card-right-responsibilities">
                {role.responsibilities.map((responsibility) => (
                  <li key={responsibility}>
                    <p>◇ {responsibility}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
