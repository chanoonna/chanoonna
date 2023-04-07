import './NavBar.scss';

export const NavBar = () => {
  return (
    <nav className="navbar-container">
      <p className="nav-name">Chanoon Na</p>
      <ul className="nav-item-container">
        <li className="nav-item">WORK</li>
        <li className="nav-item">PROJECTS</li>
        <li className="nav-item">ABOUT ME</li>
        <li className="nav-item">RESUME</li>
        <li className="nav-item">CONTACT</li>
      </ul>
    </nav>
  );
};
