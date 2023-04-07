export const getHandleScroll =
  (setCurrentSection: (sectionNumber: number) => void) => () => {
    const y = window.scrollY;
    const innerHeight = window.innerHeight;
    const pageNumber = Math.floor(y / innerHeight);

    setCurrentSection(pageNumber);
  };
