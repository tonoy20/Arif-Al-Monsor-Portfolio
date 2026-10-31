import { about, contact, marqueeItems, site, stats } from '@/data/portfolio';
import { useTilt } from '@/hooks/useTilt';
import { ButtonLink } from './Button';
import { DownloadIcon, MailIcon, SparkleIcon } from './Icons';
import { Reveal } from './Reveal';
import { SocialLinks } from './SocialLinks';

export function Hero() {
  const { ref, style } = useTilt<HTMLDivElement>({ max: 7 });

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-44 lg:pb-24">
      {/* Background layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-x" />
        <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/12 blur-[130px]" />
        <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-accent/8 blur-[100px]" />
      </div>

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* ---------------- Left: copy ---------------- */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface py-1.5 pr-4 pl-1.5 shadow-soft">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-fg-muted">{contact.availability}</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-8 font-mono text-sm tracking-wide text-fg-muted">
                {about.greeting}
                <span className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[0.2em] bg-accent animate-blink" />
              </p>
            </Reveal>

            <Reveal delay={140}>
              <h1 className="mt-3 text-[2.75rem] leading-[1.03] font-extrabold sm:text-6xl lg:text-7xl">
                <span className="text-gradient">{site.name}</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-4 font-display text-lg font-semibold text-fg sm:text-xl">
                {site.role}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
                {about.subheadline}
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink href="#contact" cursorLabel="say hi">
                  <MailIcon className="h-4 w-4" />
                  Get in touch
                </ButtonLink>
                <ButtonLink href={site.resume.href} variant="outline" external cursorLabel="cv">
                  <DownloadIcon className="h-4 w-4" />
                  {site.resume.label}
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-9">
                <SocialLinks />
              </div>
            </Reveal>
          </div>

          {/* ---------------- Right: portrait ---------------- */}
          <Reveal delay={200} className="relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Rotating accent ring */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2.5rem] border border-dashed border-border-strong animate-orbit sm:-inset-6"
              />

              <div
                ref={ref}
                style={style}
                className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-float"
              >
                <img
                  src={about.images.main}
                  alt={`${site.name}, ${site.role}`}
                  width={1100}
                  height={1375}
                  className="aspect-[4/5] w-full object-cover"
                  fetchPriority="high"
                />
                {/* Gradient wash: strong at the bottom for the role badge,
                    light at the top so the stat chip stays legible. */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/92 via-bg/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/45 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="glass inline-flex items-center gap-2 rounded-full border border-border px-4 py-2">
                    <SparkleIcon className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold">Fullstack Web Developer</span>
                  </div>
                </div>
              </div>

              {/* Floating stat chip — top-left corner, well clear of the role
                  badge at the bottom. */}
              <div className="absolute -top-6 -left-3 animate-float-slow sm:-top-7 sm:-left-6">
                <div className="glass rounded-2xl border border-border px-4 py-3 shadow-card">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-fg-subtle uppercase">
                    Experience
                  </p>
                  <p className="mt-0.5 font-display text-2xl font-extrabold">2+ years</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------------- Stats strip ---------------- */}
        <Reveal delay={120} className="mt-16 lg:mt-24">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-surface px-5 py-6 sm:px-7 sm:py-8">
                <dt className="order-2 mt-1 text-xs tracking-wide text-fg-muted uppercase sm:text-sm">
                  {stat.label}
                </dt>
                <dd className="font-display text-3xl font-extrabold sm:text-4xl">
                  {stat.value}
                  <span className="text-accent">{stat.suffix}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* ---------------- Scrolling tech marquee ---------------- */}
      <div className="mt-16 lg:mt-24">
        <div className="container-page mb-5">
          <p className="text-center font-mono text-[11px] tracking-[0.24em] text-fg-subtle uppercase">
            Technologies I work with
          </p>
        </div>
        <div
          className="group relative flex overflow-hidden border-y border-border bg-surface/50 py-4"
          aria-hidden="true"
        >
          <div className="flex shrink-0 animate-marquee items-center gap-3 pr-3 group-hover:[animation-play-state:paused]">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="flex items-center gap-3 whitespace-nowrap px-5 font-mono text-sm text-fg-muted"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-accent/60" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
