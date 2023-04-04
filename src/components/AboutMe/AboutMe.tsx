import './AboutMe.scss';
import { BezieredContainer } from 'components';
import { ID_ABOUT_ME } from '../constants';
import { SectionContainer } from 'components/shared/SectionContainer';

export const AboutMe = () => {
  return (
    <SectionContainer pages={1} className="about_me-section" id={ID_ABOUT_ME}>
      <BezieredContainer hasNoBottom height="120">
        <div className="about-me">About Me</div>
      </BezieredContainer>
    </SectionContainer>
  );
};
