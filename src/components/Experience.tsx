import { education, experiences } from '@/data/portfolio';
import { PlaceholderNote, Tag } from './Button';
import { BriefcaseIcon, CheckIcon, GraduationIcon, PinIcon } from './Icons';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 — Experience"
      title="Where I have"
      accent="worked"
      description="One year of shipping product, plus the competitions that made me a better problem solver."
      className="border-y border-border bg-bg-alt"
    >
      <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
        {/* ---------------- Work experience timeline ---------------- */}
        <div>
          <ol className="relative space-y-5 sm:space-y-6">
            {/* One continuous rail running behind every node */}
            <span
              aria-hidden="true"
              className="absolute top-6 bottom-6 left-[18px] w-px bg-gradient-to-b from-accent via-border-strong to-transparent sm:left-5"
            />

            {experiences.map((item, index) => (
              <li key={item.id} className="relative">
                <Reveal delay={index * 70}>
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Timeline node — sits beside the card, not on it */}
                    <span
                      aria-hidden="true"
                      className={`mt-4 grid h-9 w-9 shrink-0 place-items-center rounded-full border-4 border-bg-alt sm:mt-5 sm:h-10 sm:w-10 ${
                        item.current
                          ? 'bg-accent text-accent-contrast'
                          : item.placeholder
                            ? 'border border-dashed border-accent/60 bg-surface text-accent'
                            : 'bg-surface-2 text-fg-muted'
                      }`}
                    >
                      <BriefcaseIcon className="h-4 w-4" />
                    </span>

                    <article
                      className={`min-w-0 flex-1 rounded-2xl border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card sm:p-6 ${
                        item.placeholder
                          ? 'border-dashed border-accent/45'
                          : 'border-border hover:border-accent/50'
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="font-display text-lg font-bold sm:text-xl">{item.role}</h3>
                        {item.current ? (
                          <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wide text-accent uppercase">
                            Current
                          </span>
                        ) : null}
                      </div>

                      <p className="mt-1 text-sm font-medium text-fg-muted">{item.organisation}</p>

                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-fg-subtle">
                        <span>
                          {item.startDate} — {item.endDate}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <PinIcon className="h-3 w-3" />
                          {item.location}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-fg-muted sm:text-[0.95rem]">
                        {item.summary}
                      </p>

                      {item.highlights.length > 0 ? (
                        <ul className="mt-4 space-y-2">
                          {item.highlights.map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className="flex items-start gap-2.5 text-sm text-fg-muted"
                            >
                              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {item.tech.length > 0 ? (
                        <ul className="mt-5 flex flex-wrap gap-1.5">
                          {item.tech.map((tech) => (
                            <li key={tech}>
                              <Tag>{tech}</Tag>
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {item.placeholder ? (
                        <div className="mt-5">
                          <PlaceholderNote text="Edit this entry in `experiences` (src/data/portfolio.ts) with your real job, then delete `placeholder: true`." />
                        </div>
                      ) : null}
                    </article>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* ---------------- Education ---------------- */}
        <div>
          <Reveal>
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-soft text-accent">
                <GraduationIcon className="h-4 w-4" />
              </span>
              <h3 className="font-display text-lg font-bold">Education</h3>
            </div>
          </Reveal>

          <ol className="mt-5 space-y-3">
            {education.map((item, index) => (
              <li key={item.id}>
                <Reveal delay={index * 80}>
                  <article
                    className={`group rounded-2xl border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-card ${
                      item.placeholder ? 'border-dashed border-accent/45' : 'border-border'
                    }`}
                  >
                    <h4 className="text-sm font-semibold sm:text-[0.95rem]">{item.degree}</h4>
                    <p className="mt-1.5 text-sm text-fg-muted">{item.institution}</p>
                    <p className="mt-2 font-mono text-[11px] text-fg-subtle">{item.period}</p>
                    {item.note ? (
                      <p className="mt-2 text-xs text-fg-subtle italic">{item.note}</p>
                    ) : null}
                    {item.placeholder ? (
                      <div className="mt-3">
                        <PlaceholderNote text="Fill in or delete from `education`." />
                      </div>
                    ) : null}
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
