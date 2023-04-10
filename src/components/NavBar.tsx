import './NavBar.scss';
import { LinkedInIcon } from './shared/LinkedInIcon';
import { GithubIcon } from './shared/GithubIcon';

export const NavBar = () => {
  return (
    <nav className="navbar-container">
      <ul className="nav-item-container">
        <li className="nav-item">WORK</li>
        <li className="nav-item">PROJECTS</li>
        <li className="nav-item">ABOUT ME</li>
        <li
          className="nav-item"
          onClick={() => {
            window.open('https://github.com/chanoonna', '_blank');
          }}
        >
          <GithubIcon width="25" height="25" />
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
    </nav>
  );
};
