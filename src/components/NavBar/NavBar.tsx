import './NavBar.scss';
import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';
import { ID_ABOUT_ME, ID_CAREER, ID_PROJECTS } from 'components/constants';

export const NavBar = () => {
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (document.scrollingElement?.scrollTop !== undefined) {
        if (document.scrollingElement.scrollTop < 25) {
          setIsOnTop(true);
        } else if (document.scrollingElement.scrollTop >= 25) {
          setIsOnTop(false);
        }
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      const top = element.getBoundingClientRect().top - 40;
      window.scrollTo({ top });
    }
  };

  return (
    <div className="nav-bar-container">
      <div className={'nav-bar' + (isOnTop ? '' : ' collapsed')}>
        <div className="nav-bar-item">
          <span
            onClick={() => {
              scrollTo(ID_CAREER);
            }}
          >
            Career
          </span>
        </div>
        <div className="nav-bar-item">
          <span
            onClick={() => {
              scrollTo(ID_PROJECTS);
            }}
          >
            Projects
          </span>
        </div>
        <div className="nav-bar-item">
          <span
            onClick={() => {
              scrollTo(ID_ABOUT_ME);
            }}
          >
            About Me
          </span>
        </div>
        <div className="arrow-to-top">
          <span
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
          >
            &uarr;
          </span>
        </div>
      </div>
    </div>
  );
};
