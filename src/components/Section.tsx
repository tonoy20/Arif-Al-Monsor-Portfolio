import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionProps = {
  id: string;
  /** Small mono label above the heading, e.g. "02 — About". */
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

/** Consistent section shell: anchor id, eyebrow, heading and content grid. */
export function Section({
  id,
  eyebrow,
  title,
  accent,
  description,
  children,
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-20 sm:py-28 lg:py-32 ${className}`}>
      <div className="container-page">
        <Reveal className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="font-mono text-xs tracking-[0.22em] text-accent uppercase">{eyebrow}</span>
          </div>
          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem]">
            {title}
            {accent ? <span className="text-accent"> {accent}</span> : null}
          </h2>
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
