import './App.scss';
import { NavBar, Introduction, Career, Projects } from 'components';

export const App = () => (
  <div className="app-container">
    <NavBar />
    <Introduction />
    <Career />
    <Projects />
  </div>
);
