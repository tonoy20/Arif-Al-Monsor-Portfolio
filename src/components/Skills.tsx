import { skillGroups } from '@/data/portfolio';
import { useInView } from '@/hooks/useInView';
import { PlaceholderNote } from './Button';
import { Icon } from './Icons';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="03 — Skills"
      title="What I"
      accent="work with"
      description="The stack I reach for, and how confident I am in each part of it."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.id} delay={index * 80}>
            <article
              className={`group h-full rounded-2xl border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-float sm:p-7 ${
                group.placeholder
                  ? 'border-dashed border-accent/45 hover:border-accent'
                  : 'border-border hover:border-accent/50'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent transition-transform duration-500 group-hover:rotate-6">
                  <Icon name={group.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold">{group.title}</h3>
                  <p className="mt-1 text-sm text-fg-muted">{group.caption}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3.5">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <SkillBar name={skill.name} level={skill.level} />
                  </li>
                ))}
              </ul>

              {group.placeholder ? (
                <div className="mt-6">
                  <PlaceholderNote text="Duplicate a skill group above and rename it — or delete this block." />
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  // Animates the bar from 0 to `level` the first time it scrolls into view.
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium">{name}</span>
        <span className="font-mono text-[11px] text-fg-subtle tabular-nums">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent/60 transition-[width] duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: inView ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}
