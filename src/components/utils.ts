export const getHandleScroll =
  (
    lastSectionNum: number,
    containerId: string,
    setCurrentSection: (sectionNumber: number) => void
  ) =>
  () => {
    const element = document
      .getElementById(containerId)
      ?.getBoundingClientRect();

    if (element) {
      const innerHeight = window.innerHeight;
      const y = element.y;
      const pageNumber = Math.min(
        Math.max(0, Math.floor(-y / innerHeight / 1.5)),
        lastSectionNum - 1
      );

      setCurrentSection(pageNumber);
    }
  };
