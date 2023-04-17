import { useEffect, useState } from 'react';

export const useIsSectionEnabled = (containerId: string) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const sectionElement = document
        .querySelector(`.${containerId}`)
        ?.getBoundingClientRect();

      if (sectionElement) {
        if (
          sectionElement.top <= 150 &&
          -sectionElement.top <= sectionElement.height - 150
        ) {
          setIsEnabled(true);
        } else {
          setIsEnabled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [containerId]);

  return isEnabled;
};
