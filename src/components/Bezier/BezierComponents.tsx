import './BezierComponents.scss';
import type { ReactNode } from 'react';

export const BezierEffect = () => {
  return (
    <svg width="0" height="0">
      <defs>
        <clipPath id="bezier-top" clipPathUnits="objectBoundingBox">
          <path d="M0,0 L0,1 L1,1 C0.75,1 0.25,0 0,0 Z" />
        </clipPath>
      </defs>
      <defs>
        <clipPath id="bezier-bottom" clipPathUnits="objectBoundingBox">
          <path d="M0,0 L1,0 L1,1 C0.75,1 0.25,0 0,0 Z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const BezierTop = ({ height = '5rem' }: { height?: string }) => (
  <header className="bezier-top" style={{ height }} />
);
export const BezierBottom = ({ height = '5rem' }: { height?: string }) => (
  <footer className="bezier-bottom" style={{ height }} />
);

export const BezieredContainer = ({
  hasNoTop,
  hasNoBottom,
  children,
  className,
  height = '120'
}: {
  hasNoTop?: boolean;
  hasNoBottom?: boolean;
  children: ReactNode;
  className?: string;
  height?: string;
}) => {
  return (
    <div className={'beziered-container' + (className ? ` ${className}` : '')}>
      {!hasNoTop && <BezierTop />}
      <div className={`beziered-main height-${height}`}>{children}</div>
      {!hasNoBottom && <BezierBottom />}
    </div>
  );
};
