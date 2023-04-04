import {
  BezierEffect,
  NavBar,
  Introduction,
  Career,
  AboutMe,
  Projects
} from 'components';

export const App = () => (
  <div className="app-container">
    <NavBar />
    <BezierEffect />
    <Introduction />
    <Career />
    <Projects />
    <AboutMe />
  </div>
);
