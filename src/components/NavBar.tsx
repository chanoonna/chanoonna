import './NavBar.scss';
import { useState, useEffect } from 'react';
import { LinkedInIcon } from './shared/LinkedInIcon';
import { GithubIcon } from './shared/GithubIcon';

export const NavBar = () => {
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const innerHeight = window.innerHeight;
      const yMargin = innerHeight * 0.05;
      if (window.scrollY <= yMargin) {
        setIsOnTop(true);
      } else {
        setIsOnTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={'navbar-container' + (isOnTop ? ' on-top' : '')}>
      <ul className="nav-item-container left">
        <li
          className="nav-item"
          onClick={() => {
            window.open('https://github.com/chanoonna', '_blank');
          }}
        >
          <GithubIcon width="30" height="30" />
        </li>
        <li
          className="nav-item"
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/chanoon-na-2482a6208',
              '_blank'
            );
          }}
        >
          <LinkedInIcon />
        </li>
      </ul>
      <ul className="nav-item-container right">
        <li className="nav-item">WORK</li>
        <li className="nav-item">PROJECTS</li>
        <li className="nav-item">ABOUT ME</li>
        <li className="nav-item">CV</li>
        <li className="nav-item">
          <a href="mailto:chanoonna@gmail.com">EMAIL</a>
        </li>
      </ul>
    </nav>
  );
};
