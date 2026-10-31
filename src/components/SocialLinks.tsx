import { socials } from '@/data/portfolio';
import { Icon } from './Icons';

type Props = {
  /** Adds a subtle fill on hover. */
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

/** Row of social links, driven by the `socials` array in the data file. */
export function SocialLinks({ size = 'md', className = '' }: Props) {
  const sizes = {
    sm: 'h-9 w-9',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  } as const;

  return (
    <ul className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target={social.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
            aria-label={`${social.label} — ${social.handle}`}
            title={`${social.label}: ${social.handle}`}
            data-cursor="visit"
            className={`group flex ${sizes[size]} items-center justify-center rounded-full border border-border bg-surface text-fg-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-contrast hover:shadow-card`}
          >
            <Icon name={social.icon} className="h-[1.05rem] w-[1.05rem]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
