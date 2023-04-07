import './Main.scss';
import { useState, useEffect } from 'react';
import { Introduction } from './Introduction';
import { getHandleScroll } from './utils';

export const Main = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = getHandleScroll(setCurrentSection);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="main-container">
      <Introduction />
    </main>
  );
};
