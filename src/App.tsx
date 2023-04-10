import './App.scss';
import { useState, useEffect } from 'react';
import { NavBar, Introduction, Career, Projects } from 'components';

export const App = () => {
  const [currentSection, setCurrentSection] = useState('welcome');

  return (
    <div className="app-container">
      <NavBar />
      <Introduction />
      <Career />
      <Projects />
    </div>
  );
};
