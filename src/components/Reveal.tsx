import type { ElementType, ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/** Fades + lifts its children into view once, when scrolled into the viewport. */
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ ['--reveal-delay' as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
