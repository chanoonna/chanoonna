import './Introduction.scss';
import { BezieredContainer } from 'components';

export const Introduction = () => {
  return (
    <BezieredContainer hasNoTop>
      <div className="introduction">
        <h1>Hi, I&apos;m Chanoon.</h1>
        <h2>I am a Frontend developer,</h2>
        <h2>Welcome to my portfolio!</h2>
      </div>
    </BezieredContainer>
  );
};
