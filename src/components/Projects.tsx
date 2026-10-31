import { useState } from 'react';
import { projects, type ProjectCategory } from '@/data/portfolio';
import { useTilt } from '@/hooks/useTilt';
import { PlaceholderNote, Tag } from './Button';
import { ArrowIcon, ExternalIcon, FolderIcon, GithubIcon } from './Icons';
import { Reveal } from './Reveal';
import { Section } from './Section';

const filters = ['All', 'Fullstack', 'Frontend', 'Backend'] as const;
type Filter = (typeof filters)[number];

function matches(category: ProjectCategory, filter: Filter) {
  if (filter === 'All') return true;
  return category === filter.toLowerCase();
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');

  const visible = projects.filter((project) => {
    // Keep the "fill me in" slots visible only under the All tab.
    if (project.placeholder) return filter === 'All';
    return matches(project.category, filter);
  });

  return (
    <Section
      id="projects"
      eyebrow="04 — Projects"
      title="Things I have"
      accent="built"
      description="A mix of fullstack applications, front-end work and problem-solving practice."
      className="border-y border-border bg-bg-alt"
    >
      {/* Filter pills */}
      <Reveal className="mb-8 flex flex-wrap gap-2">
        {filters.map((item) => {
          const isActive = filter === item;
          return (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${isActive
                  ? 'border-transparent bg-fg text-bg'
                  : 'border-border bg-surface text-fg-muted hover:border-accent/60 hover:text-fg'
                }`}
            >
              {item}
            </button>
          );
        })}
      </Reveal>

      {visible.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border py-14 text-center text-sm text-fg-muted">
          No projects in this category yet.
        </p>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <Reveal className="mt-8">
            <div className="overflow-hidden rounded-2xl border border-dashed border-accent/45 bg-gradient-to-r from-accent-soft/70 via-surface to-surface p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                    More Projects
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-fg sm:text-3xl">
                    5+ projects delivered across web, e-commerce, and business systems
                  </h3>
                </div>

                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-accent/50 bg-surface text-2xl font-bold text-accent shadow-card">
                  5+
                </div>
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-fg-muted sm:text-[0.95rem]">
                Beyond the featured builds, I have also developed additional client and personal
                projects focused on responsive web experiences, business logic, and reliable digital
                solutions for real-world needs.
              </p>
            </div>
          </Reveal>
        </>
      )}
    </Section>
  );
}

type CardProps = {
  project: (typeof projects)[number];
  index: number;
};

function ProjectCard({ project, index }: CardProps) {
  const { ref, style } = useTilt<HTMLDivElement>({ max: 5 });

  return (
    <Reveal delay={index * 70} className="h-full">
      <article
        className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-float ${project.placeholder ? 'border-dashed border-accent/45' : 'border-border hover:border-accent/50'
          }`}
      >
        {/* Thumbnail */}
        <div ref={ref} style={style} className="relative overflow-hidden">
          <div className="aspect-[16/10] w-full overflow-hidden bg-surface-2">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {project.featured && !project.placeholder ? (
            <span className="absolute top-3 left-3 rounded-full bg-bg/85 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide text-accent uppercase backdrop-blur">
              Featured
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-display text-lg font-bold leading-snug">{project.title}</h3>
              <p className="mt-0.5 font-mono text-[11px] text-fg-subtle">
                {project.tagline} · {project.year}
              </p>
            </div>
            <span className="mt-0.5 shrink-0 text-fg-subtle transition-colors duration-300 group-hover:text-accent">
              <FolderIcon className="h-5 w-5" />
            </span>
          </div>

          <p className="mt-3.5 flex-1 text-sm leading-relaxed text-fg-muted">{project.description}</p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>

          {project.placeholder ? (
            <div className="mt-5">
              <PlaceholderNote text="Add your project in the `projects` array, drop an image into /public/images/projects/, then delete `placeholder: true`." />
            </div>
          ) : project.links && project.links.length > 0 ? (
            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cursor="view"
                  className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-fg transition-colors hover:text-accent"
                >
                  {link.icon === 'github' ? (
                    <GithubIcon className="h-4 w-4" />
                  ) : (
                    <ExternalIcon className="h-4 w-4" />
                  )}
                  {link.label}
                  <ArrowIcon className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}
