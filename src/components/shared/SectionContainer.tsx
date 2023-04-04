import './SectionContainer.scss';
import type { ReactNode } from 'react';

export const SectionContainer = ({
  pages,
  className,
  id,
  children
}: {
  pages: number;
  children: ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <div
      id={id}
      className="section-container"
      style={{ height: `calc(${pages * 100}vh - 80px)` }}
    >
      {children}
    </div>
  );
};
