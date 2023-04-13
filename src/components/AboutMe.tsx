import './AboutMe.scss';
import { useEffect, useState } from 'react';

export const AboutMe = () => {
  const [isUnderlineEnabled, setIsUnderlineEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const aboutMeSection = document
        .querySelector('.section-container.about-me')
        ?.getBoundingClientRect();

      if (aboutMeSection) {
        if (
          aboutMeSection.top <= 150 &&
          -aboutMeSection.top <= aboutMeSection.height - 150
        ) {
          setIsUnderlineEnabled(true);
        } else {
          setIsUnderlineEnabled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section-container about-me">
      <h1 className="section-heading about-me">
        ABOUT ME
        <div
          className={
            'section-heading-underline about-me' +
            (isUnderlineEnabled ? ' enabled' : '')
          }
        />
      </h1>
      <ul className="section-list about-me">
        <li className="section-card-container about-me">
          <aside className="section-card-left about-me">
            <h2 className="about-me-section">Chanoon Na</h2>
            <div className="section-divider about-me" />
          </aside>
          <div className="section-card-right about-me">
            <p className="section-card-right-item about-me description">
              I like making things in more fun ways just because I can. I&apos;m
              a problem solver and love challenging complicated problems.
              Interests includes web development, large scale data processing,
              functional programming, and concurrency.
            </p>
            <h3>Languages</h3>
            <ul className="section-card-right-item about-me languages">
              {LANGUAGES.map((language) => (
                <li key={language} className="about-me-language">
                  {language}
                </li>
              ))}
            </ul>
            <h3>Other experiences</h3>
            <ul className="section-card-right-item about-me other-experiences">
              {OTHER_EXPERIENCES.map((experience) => (
                <li key={experience} className="other-experience">
                  {experience}
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

const LANGUAGES = ['Javascript', 'Typescript', 'C/C++', 'Haskell', 'Ruby'];
const OTHER_EXPERIENCES = [
  'React',
  'Redux',
  'Redux-saga',
  'webpack',
  'express',
  'Ruby on rails',
  'electron',
  'postgresql',
  'sqlite3'
];
