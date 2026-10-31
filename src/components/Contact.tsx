import { useState } from 'react';
import { contact, position, site } from '@/data/portfolio';
import { Button, ButtonLink } from './Button';
import { MailIcon, PhoneIcon, PinIcon, SparkleIcon } from './Icons';
import { Reveal } from './Reveal';
import { Section } from './Section';
import { SocialLinks } from './SocialLinks';

type Status = 'idle' | 'sending' | 'sent';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  /**
   * The site is 100% static, so there is no server to POST to. This opens the
   * visitor's mail client with the message pre-filled instead.
   * To use a real form later (Formspree, Web3Forms, Google Apps Script),
   * replace this function with a fetch() to that endpoint.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n—\nName: ${form.name}\nEmail: ${form.email}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
    window.setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <Section
      id="contact"
      eyebrow="05 — Contact"
      title="Let's build"
      accent="something"
      description="Got an opportunity, a project, or just want to talk code? My inbox is open."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
        {/* ---------------- Left: contact details ---------------- */}
        <Reveal>
          <div className="flex h-full flex-col gap-5">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <div
                aria-hidden="true"
                className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-accent/10 blur-3xl"
              />
              <div className="relative">
                <h3 className="font-display text-xl font-bold">{position.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{position.body}</p>
                <div className="mt-5">
                  <SocialLinks size="sm" />
                </div>
              </div>
            </div>

            <ul className="space-y-2.5">
              <ContactRow
                icon={<MailIcon className="h-4.5 w-4.5" />}
                label="Email"
                value={contact.email}
                href={`mailto:${contact.email}`}
                dataCursor="write"
              />
              <ContactRow
                icon={<PhoneIcon className="h-4.5 w-4.5" />}
                label="Phone"
                value={contact.phone}
                href={`tel:${contact.phoneHref}`}
                dataCursor="call"
              />
              <ContactRow
                icon={<PinIcon className="h-4.5 w-4.5" />}
                label="Location"
                value={contact.address}
              />
            </ul>

            <div className="mt-auto rounded-2xl border border-dashed border-accent/45 bg-accent-soft/30 p-5">
              <p className="flex items-center gap-2 font-mono text-[11px] text-accent">
                <SparkleIcon className="h-3.5 w-3.5" />
                Tip
              </p>
              <p className="mt-2 text-sm text-fg-muted">
                Prefer a quick introduction? Send me a short message with what you are building
                and I will reply with a time.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ---------------- Right: form ---------------- */}
        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Your name"
                name="name"
                value={form.name}
                onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
                placeholder="Jane Doe"
                required
              />
              <Field
                label="Your email"
                name="email"
                type="email"
                value={form.email}
                onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
                placeholder="jane@company.com"
                required
              />
            </div>

            <div className="flex flex-1 flex-col">
              <Field
                label="Message"
                name="message"
                value={form.message}
                onChange={(value) => setForm((prev) => ({ ...prev, message: value }))}
                placeholder="Tell me about the project, role or idea…"
                required
                textarea
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button type="submit" disabled={status === 'sending'}>
                {status === 'sending'
                  ? 'Opening your mail app…'
                  : status === 'sent'
                    ? 'Mail app opened ✓'
                    : 'Send message'}
              </Button>
              <ButtonLink href={site.resume.href} variant="outline" external>
                {site.resume.label}
              </ButtonLink>
            </div>

            <p className="font-mono text-[11px] leading-relaxed text-fg-subtle">
              This form opens your default email client — nothing is stored or sent to a server.
            </p>
          </form>
        </Reveal>
      </div>

      {/* Marquee-style call to action strip */}
      <Reveal delay={160} className="mt-6">
        <div className="relative overflow-hidden rounded-2xl border border-inverse-border bg-inverse px-6 py-10 text-center sm:px-10 sm:py-14">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-25"
            style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, var(--accent), transparent 65%)' }}
          />
          <div className="relative">
            <h3 className="font-display text-2xl font-extrabold text-inverse-fg sm:text-3xl">
              Have a role that fits?
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-inverse-muted sm:text-base">
              I am open to frontend and fullstack roles where I can keep shipping product and grow
              as an engineer.
            </p>
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent('Opportunity — ')}`}
              data-cursor="email"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-inverse-fg px-6 py-3 text-sm font-semibold text-inverse transition-all duration-300 hover:-translate-y-0.5 hover:shadow-float"
            >
              <MailIcon className="h-4 w-4" />
              {contact.email}
            </a>
            <p className="mt-6 font-mono text-[11px] text-inverse-muted">
              Based in Dhaka · {contact.address}
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
  textarea = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const shared = `w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg placeholder:text-fg-subtle transition-colors duration-200 outline-none focus:border-accent ${
    textarea ? 'min-h-32 resize-y' : ''
  }`;

  return (
    <label className="block flex-1">
      <span className="mb-1.5 block font-mono text-[11px] tracking-[0.14em] text-fg-subtle uppercase">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          required={required}
          className={shared}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          required={required}
          className={shared}
        />
      )}
    </label>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  dataCursor,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  dataCursor?: string;
}) {
  const content = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface-2 text-fg-muted transition-colors duration-300 group-hover/row:bg-accent-soft group-hover/row:text-accent">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[10px] tracking-[0.16em] text-fg-subtle uppercase">{label}</p>
        <p className="truncate text-sm font-medium">{value}</p>
      </div>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          data-cursor={dataCursor}
          className="group/row flex items-center gap-3.5 rounded-xl border border-border bg-surface px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-soft"
        >
          {content}
        </a>
      ) : (
        <div className="group/row flex items-center gap-3.5 rounded-xl border border-border bg-surface px-4 py-3">
          {content}
        </div>
      )}
    </li>
  );
}
