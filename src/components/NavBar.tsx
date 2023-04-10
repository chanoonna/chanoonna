import './NavBar.scss';
import { LinkedInIcon } from './shared/LinkedInIcon';
import { GithubIcon } from './shared/GithubIcon';

export const NavBar = () => {
  return (
    <nav className="navbar-container">
      <ul className="nav-item-container">
        <li className="nav-item">WORK</li>
        <li className="nav-item">PROJECTS</li>
        <li className="nav-item">CV</li>
        <li className="nav-item">
          <a href="mailto:chanoonna@gmail.com">EMAIL</a>
        </li>
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
    </nav>
  );
};
