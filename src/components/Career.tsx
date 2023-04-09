import './Career.scss';
import { CAREER, ICareer } from '../data/career';

export const Career = () => {
  return (
    <section className="career-container">
      <h1>Career</h1>
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
  return <div>Career Card</div>;
};
