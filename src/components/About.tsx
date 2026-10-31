import { about, achievements, contact, repositories } from '@/data/portfolio';
import { Reveal } from './Reveal';
import { Section } from './Section';
import { ArrowUpIcon, CalendarIcon, CodeIcon, GithubIcon, PinIcon, SparkleIcon } from './Icons';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title="A little"
      accent="about me"
      description="Developer by day, competitive programmer by habit."
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* ---------------- Images ---------------- */}
        <Reveal className="relative">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-card">
              <img
                src={about.images.secondary}
                alt="Arif Al Monsor Tonoy at work"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            {/* Overlapping second photo */}
            <div className="absolute -right-4 -bottom-10 w-40 overflow-hidden rounded-2xl border-4 border-bg bg-surface shadow-float sm:w-48 sm:-right-8">
              <img
                src={about.images.portrait}
                alt="Portrait of Arif Al Monsor Tonoy"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          {/* Personal details card */}
          <Reveal delay={120} className="mt-16 sm:mt-14 lg:mt-16">
            <dl className="grid gap-3 rounded-2xl border border-border bg-surface p-5 sm:grid-cols-2">
              <Detail icon={<CalendarIcon className="h-4 w-4" />} label="Date of birth" value={contact.dateOfBirth} />
              <Detail icon={<PinIcon className="h-4 w-4" />} label="Nationality" value={contact.nationality} />
              <Detail icon={<PinIcon className="h-4 w-4" />} label="Location" value={contact.address} />
              <Detail icon={<CodeIcon className="h-4 w-4" />} label="Languages" value="Bangla, English" />
            </dl>
          </Reveal>
        </Reveal>

        {/* ---------------- Text ---------------- */}
        <div>
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-fg-muted sm:text-lg">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          {/* Highlights */}
          <Reveal delay={100} className="mt-9 grid gap-3 sm:grid-cols-2">
            {about.highlights.map((item) => (
              <div
                key={item.label}
                className="group rounded-2xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-card"
              >
                <p className="font-mono text-[10px] tracking-[0.18em] text-fg-subtle uppercase">
                  {item.label}
                </p>
                <p className="mt-1.5 text-sm font-semibold">{item.value}</p>
              </div>
            ))}
          </Reveal>

          {/* Achievements */}
          <Reveal delay={160} className="mt-9">
            <h3 className="font-display text-sm font-bold tracking-wide text-fg uppercase">
              Highlights
            </h3>
            <ul className="mt-4 space-y-3">
              {achievements.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                    {item.icon === 'code' ? (
                      <CodeIcon className="h-4 w-4" />
                    ) : item.icon === 'arrow' ? (
                      <ArrowUpIcon className="h-4 w-4" />
                    ) : (
                      <SparkleIcon className="h-4 w-4" />
                    )}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-sm text-fg-muted">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Code repositories */}
          {repositories.length > 0 && (
            <Reveal delay={200} className="mt-9">
              <h3 className="font-display text-sm font-bold tracking-wide text-fg uppercase">
                Code Repositories
              </h3>
              <ul className="mt-4 space-y-2">
                {repositories.map((repo) => (
                  <li key={repo.id}>
                    <a
                      href={repo.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex h-full items-start gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/60"
                    >
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                        <GithubIcon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-3">
                          <span className="text-sm font-semibold">{repo.title}</span>
                          <span className="flex shrink-0 items-center gap-2">
                            <span className="rounded-full bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-fg-muted">
                              {repo.language}
                            </span>
                            <ArrowUpIcon className="h-4 w-4 -rotate-45 text-fg-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                          </span>
                        </span>
                        <span className="mt-1 block text-sm text-fg-muted">{repo.description}</span>
                        <span className="mt-2 flex flex-wrap gap-1.5">
                          {repo.topics.map((topic) => (
                            <span
                              key={topic}
                              className="rounded-full border border-border px-2 py-0.5 text-[10px] text-fg-subtle"
                            >
                              {topic}
                            </span>
                          ))}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </div>
    </Section>
  );
}

function Detail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface-2 text-fg-muted">
        {icon}
      </span>
      <div className="min-w-0">
        <dt className="font-mono text-[10px] tracking-[0.16em] text-fg-subtle uppercase">{label}</dt>
        <dd className="truncate text-sm font-medium">{value}</dd>
      </div>
    </div>
  );
}
