import { useEffect, useState } from 'react';
import { navItems, site } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScroll } from '@/hooks/useScroll';
import { useTheme } from '@/hooks/useTheme';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons';

const sectionIds = navItems.map((item) => item.href.replace('#', ''));

export function Navbar() {
  const { scrolled, progress } = useScroll();
  const active = useActiveSection(sectionIds);
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu when the viewport grows past the breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass border-b border-border py-3 shadow-soft' : 'py-5'
        }`}
      >
        <nav className="container-page flex items-center justify-between gap-4">
          {/* Logo / wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2.5"
            aria-label={`${site.name} — home`}
            data-cursor="top"
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-fg font-display text-sm font-extrabold text-bg transition-transform duration-500 group-hover:rotate-[-8deg]">
              {site.initials}
            </span>
            <span className="hidden font-display text-base font-bold tracking-tight sm:block">
              {site.shortName}
              <span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.href.replace('#', '');
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive ? 'text-fg' : 'text-fg-muted hover:text-fg'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              data-cursor="theme"
              className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-border bg-surface text-fg-muted transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <SunIcon
                className={`absolute h-[1.15rem] w-[1.15rem] transition-all duration-500 ${
                  theme === 'light' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                }`}
              />
              <MoonIcon
                className={`absolute h-[1.15rem] w-[1.15rem] transition-all duration-500 ${
                  theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
                }`}
              />
            </button>

            <a
              href={site.resume.href}
              target="_blank"
              rel="noreferrer noopener"
              data-cursor="cv"
              className="hidden rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-contrast sm:block"
            >
              Résumé
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-fg lg:hidden"
            >
              {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Reading-progress bar */}
        <div
          className={`absolute inset-x-0 bottom-0 h-px origin-left bg-accent transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${menuOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-bg/80 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-x-0 top-0 glass border-b border-border px-5 pt-24 pb-10 transition-all duration-400 ${
            menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-4 border-b border-border/70 py-4 font-display text-2xl font-bold tracking-tight transition-colors hover:text-accent"
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  <span className="font-mono text-xs text-fg-subtle">
                    0{index + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.resume.href}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 block rounded-full bg-fg px-6 py-3.5 text-center text-sm font-semibold text-bg"
          >
            Download résumé
          </a>
        </div>
      </div>
    </>
  );
}
