import type { ReactNode } from 'react';
import { ArrowIcon } from './Icons';

type BaseProps = {
  children: ReactNode;
  className?: string;
  /** Text shown in the custom cursor ring while hovering. */
  cursorLabel?: string;
};

type ButtonLinkProps = BaseProps & {
  href: string;
  variant?: 'primary' | 'outline' | 'ghost';
  external?: boolean;
  download?: boolean;
};

const variants: Record<NonNullable<ButtonLinkProps['variant']>, string> = {
  primary:
    'bg-fg text-bg hover:bg-accent hover:text-accent-contrast border border-transparent shadow-soft hover:shadow-card',
  outline:
    'border border-border-strong text-fg hover:border-accent hover:text-accent bg-surface',
  ghost: 'border border-transparent text-fg-muted hover:text-fg',
};

const base =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0';

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
  external = false,
  download = false,
  cursorLabel = '',
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      data-cursor={cursorLabel || undefined}
      download={download || undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
}

type ButtonProps = BaseProps & {
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  type?: 'button' | 'submit';
  disabled?: boolean;
};

export function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
  cursorLabel = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-cursor={cursorLabel || undefined}
      className={`${base} ${variants[variant]} ${disabled ? 'pointer-events-none opacity-50' : ''} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}

/** Small pill used for tech stacks across project and experience cards. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] tracking-wide text-fg-muted">
      {children}
    </span>
  );
}

/** A dashed card marking a slot you still need to fill in. */
export function PlaceholderNote({ text }: { text: string }) {
  return (
    <p className="flex items-start gap-2 rounded-xl border border-dashed border-accent/45 bg-accent-soft/45 px-3 py-2 font-mono text-[11px] leading-relaxed text-accent">
      <span aria-hidden="true">✎</span>
      <span>{text}</span>
    </p>
  );
}

/** Text link with a sliding arrow. */
export function ArrowLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      data-cursor="open"
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      className="group/al inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
    >
      {children}
      <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover/al:translate-x-1" />
    </a>
  );
}
