import './Career.scss';
import { CAREER } from '../data/career';

export const Career = () => {
  return (
    <div className="career-container">
      <h1>Career</h1>
      {CAREER.map((career) => (
        <></>
      ))}
    </div>
  );
};

const CareerCard = () => {
  return <div>Career Card</div>;
};
