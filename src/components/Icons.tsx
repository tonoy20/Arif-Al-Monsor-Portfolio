import type { SVGProps } from 'react';
import type { IconName } from '@/data/portfolio';

type IconProps = SVGProps<SVGSVGElement>;

/* -------------------------------------------------------------------------- */
/*  Brand / social                                                             */
/* -------------------------------------------------------------------------- */

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.9 3.17 9.06 7.57 10.53.55.1.75-.24.75-.53v-1.9c-3.08.67-3.73-1.48-3.73-1.48-.5-1.29-1.23-1.63-1.23-1.63-1-.69.08-.67.08-.67 1.11.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.14a10.5 10.5 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.53.23 2.66.12 2.94.71.78 1.13 1.77 1.13 2.98 0 4.26-2.59 5.2-5.06 5.47.4.35.76 1.03.76 2.08v3.08c0 .3.2.64.76.53a11.11 11.11 0 0 0 7.56-10.53C23.1 5.33 18.27.5 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05a4.17 4.17 0 0 1 3.75-2.06c4 0 4.75 2.63 4.75 6.06V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.53 3h3.02l-6.6 7.54L21.75 21h-6.06l-4.75-6.2L5.5 21H2.47l7.06-8.07L2.25 3h6.22l4.29 5.67L17.53 3Zm-1.06 16.19h1.67L7.6 4.71H5.81l10.66 14.48Z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.26.07 1.64.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.26.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.98c-3.14 0-3.51.01-4.75.07-1.15.05-1.77.24-2.19.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.42-.35 1.04-.4 2.19-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.05 1.15.24 1.77.4 2.19.22.55.47.94.88 1.35.41.41.8.66 1.35.88.42.16 1.04.35 2.19.4 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c1.15-.05 1.77-.24 2.19-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.42.35-1.04.4-2.19.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.05-1.15-.24-1.77-.4-2.19a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.42-.16-1.04-.35-2.19-.4-1.24-.06-1.61-.07-4.75-.07Zm0 3.37a5.49 5.49 0 1 1 0 10.98 5.49 5.49 0 0 1 0-10.98Zm0 9.05a3.56 3.56 0 1 0 0-7.12 3.56 3.56 0 0 0 0 7.12Zm6.99-9.27a1.28 1.28 0 1 1-2.56 0 1.28 1.28 0 0 1 2.56 0Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 7 7.3 5.2a2 2 0 0 0 2.4 0L20.5 7" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
      <path
        d="M6.5 3h3l1.5 4-2 1.4a12 12 0 0 0 6.6 6.6L17 13l4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M3.5 10h17M8 3.5v3M16 3.5v3" strokeLinecap="round" />
    </svg>
  );
}

export function ExternalIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M14 4h6v6M20 4l-8.5 8.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 14.5V19a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V7.5A1.5 1.5 0 0 1 5 6h4.5" strokeLinecap="round" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M12 3.5v11M8 11l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 18.5h15" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true" {...props}>
      <path d="M5 12h13M12.5 5.5 19 12l-6.5 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true" {...props}>
      <path d="M12 19V5M5.5 11.5 12 5l6.5 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
      <path d="m8.5 8-4.5 4 4.5 4M15.5 8l4.5 4-4.5 4M13.5 5l-3 14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <path
        d="M12 3.5 13.6 9 19 10.5 13.6 12 12 17.5 10.4 12 5 10.5 10.4 9 12 3.5Z"
        strokeLinejoin="round"
      />
      <path d="M18.5 16.5 19.2 19l2.3.8-2.3.8-.7 2.4-.7-2.4-2.3-.8 2.3-.8.7-2.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="4.2" />
      <path
        d="M12 2.8v2M12 19.2v2M21.2 12h-2M4.8 12h-2M18.5 5.5 17 7M7 17l-1.5 1.5M18.5 18.5 17 17M7 7 5.5 5.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
      <path d="M20 14.2A8.4 8.4 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true" {...props}>
      <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <rect x="2.8" y="7.2" width="18.4" height="13" rx="2.5" />
      <path d="M8.5 7.2V5.7A2 2 0 0 1 10.4 3.7h3.2a2 2 0 0 1 1.9 2v1.5M2.8 12.4h18.4" strokeLinecap="round" />
    </svg>
  );
}

export function GraduationIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <path d="M12 4 2.8 8.4 12 12.8l9.2-4.4L12 4Z" strokeLinejoin="round" />
      <path d="M6.4 10.6v4.9c0 1.7 2.5 3.1 5.6 3.1s5.6-1.4 5.6-3.1v-4.9M20.6 8.9v5.4" strokeLinecap="round" />
    </svg>
  );
}

export function FolderIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <path d="M3.2 7.4A2.2 2.2 0 0 1 5.4 5.2h3.3l2 2.6h7.9a2.2 2.2 0 0 1 2.2 2.2v7.8a2.2 2.2 0 0 1-2.2 2.2H5.4a2.2 2.2 0 0 1-2.2-2.2V7.4Z" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.6 5.2C6.5 6.6 4.7 9.3 4.7 12.6c0 3.5 1.9 5.9 4.6 5.9 2.1 0 3.7-1.5 3.7-3.5 0-2-1.4-3.4-3.3-3.4-.4 0-.8 0-1 .1.4-1.6 1.6-3 3.3-3.9l-2.4-2.6Zm9 0c-3.1 1.4-4.9 4.1-4.9 7.4 0 3.5 1.9 5.9 4.6 5.9 2.1 0 3.7-1.5 3.7-3.5 0-2-1.4-3.4-3.3-3.4-.4 0-.8 0-1 .1.4-1.6 1.6-3 3.3-3.9l-2.4-2.6Z" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Lookup map                                                                 */
/* -------------------------------------------------------------------------- */

const registry: Record<IconName, (props: IconProps) => React.ReactElement> = {
  linkedin: LinkedInIcon,
  github: GithubIcon,
  x: XIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  pin: PinIcon,
  calendar: CalendarIcon,
  external: ExternalIcon,
  download: DownloadIcon,
  arrow: ArrowIcon,
  code: CodeIcon,
  sparkles: SparkleIcon,
};

export function Icon({ name, ...props }: IconProps & { name: IconName }) {
  const Component = registry[name];
  return <Component {...props} />;
}
