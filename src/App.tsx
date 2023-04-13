import './App.scss';
import { NavBar, Introduction, Career, Projects, AboutMe } from 'components';

export const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <Introduction />
      <Career />
      <Projects />
      <AboutMe />
    </div>
  );
};
