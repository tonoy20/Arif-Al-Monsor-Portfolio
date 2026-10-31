import { navItems, site } from '@/data/portfolio';
import { SocialLinks } from './SocialLinks';

export function Footer() {

  return (
    <footer className="relative border-t border-border bg-bg-alt">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-fg font-display text-sm font-extrabold text-bg">
                {site.initials}
              </span>
              <span className="font-display text-base font-bold">
                {site.shortName}
                <span className="text-accent">.</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">{site.tagline}</p>
            <div className="mt-5">
              <SocialLinks size="sm" />
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Footer">
            <h3 className="font-mono text-[11px] tracking-[0.18em] text-fg-subtle uppercase">Navigate</h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-fg-muted transition-colors duration-200 hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[11px] tracking-[0.18em] text-fg-subtle uppercase">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-fg-muted">
              <li>
                <a href={`mailto:${'tonoyict20@gmail.com'}`} className="transition-colors hover:text-accent">
                  tonoyict20@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801761718015"
                  className="transition-colors hover:text-accent"
                >
                  +880 1761 718015
                </a>
              </li>
              <li>Mohakhali, Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-center text-xs text-fg-subtle sm:text-left">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
