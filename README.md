# Arif Al Monsor Tonoy — Portfolio

A modern, fully static developer portfolio built with **React 19 + TypeScript + Vite + Tailwind CSS v4**.

No backend, no database, no API calls. Every piece of content lives in one TypeScript file, so
the site can be hosted free on GitHub Pages.

---

## Quick start

```bash
npm install     # install dependencies
npm run dev     # start local dev server at http://localhost:5173
npm run build   # typecheck + build to /dist
npm run preview # preview the production build
npm run lint    # eslint
```

---

## ✏️ How to edit your content

**Everything you will ever need to change is in one file:**

```
src/data/portfolio.ts
```

Open it, and search for `EDIT ME` (`Ctrl/Cmd + F`) to jump between each section.

| What you want to change | What to edit |
| --- | --- |
| Your name, role, page title, résumé link | `site` |
| Email, phone, address, availability | `contact` |
| Social links (GitHub, LinkedIn, X, …) | `socials` |
| Navbar links | `navItems` |
| About text and personal details | `about` |
| The numbers in the hero strip | `stats` |
| Skills and proficiency bars | `skillGroups` |
| Work experience / jobs | `experiences` |
| Education | `education` |
| Projects | `projects` |
| Certifications | `certifications` |
| Highlights list | `achievements` |
| The scrolling tech marquee | `marqueeItems` |

### Dashed cards = empty slots

Some cards render with a **dashed accent border** and a `✎` note. Those are placeholders waiting
for your real content. Once you fill one in, delete the line `placeholder: true,` from that
object and it becomes a normal card. If you don't need the slot at all, just delete the whole
object.

### Adding a project

1. Drop your screenshot into `public/images/projects/` (e.g. `my-app.jpg`).
2. Duplicate a block in the `projects` array in `src/data/portfolio.ts`.
3. Set `title`, `tagline`, `description`, `tech`, `category`, `year`, `image`, `links`.
4. Remove `placeholder: true`.

> Tip: use a **16:10** image so the cards line up nicely.

### Adding a job

Duplicate any object in `experiences`. Set `current: true` if you still work there — it renders a
"Current" badge and a filled timeline dot.

### Adding a skill group

Duplicate any object in `skillGroups` and give it a new `id` and `title`. Skill `level` is 0–100
and drives the animated bar.

---

## 🚀 Deploying to GitHub Pages

A GitHub Actions workflow is already included at `.github/workflows/deploy.yml`.

**1. Create the repo**

```bash
cd portfolio-v2
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

**2. Turn on Pages**

Repo → **Settings** → **Pages** → Build and deployment → Source → **GitHub Actions**.

Every push to `main` will now build and publish automatically. Your site will be live at:

```
https://<your-username>.github.io/<your-repo>/
```

**3. (If the links 404) Set the base path**

If assets fail to load, open `vite.config.ts` and change:

```ts
base: '/',                              // user/org site: https://you.github.io
base: '/<your-repo>/',                  // project site:  https://you.github.io/repo
```

Commit and push again.

---

## 🖼️ Images

| Path | Used for |
| --- | --- |
| `public/images/profile-main.jpg` | Hero portrait (4:5) |
| `public/images/profile-secondary.jpg` | About section wide photo (4:3) |
| `public/images/portrait.jpg` | About section small overlapping photo (4:5) |
| `public/images/projects/*.jpg` | Project thumbnails (16:10) |
| `public/resume/Arif-Al-Monsor-Resume.pdf` | Résumé download button |

Replace the files using the **same names** and nothing else needs to change. If you use different
names, update the paths in `src/data/portfolio.ts`.

Images are already compressed — a 4.2 MB original was reduced to 125 KB.

---

## ✨ Features

- **Light / dark theme** with a toggle, saved to `localStorage`, respects system preference, and
  applies before first paint so there's no white flash.
- **Custom cursor** — a dot that tracks exactly plus a ring that eases behind it, which expands
  and shows a label over interactive elements. Automatically disabled on touch devices.
- **Scroll reveal** animations on every section (IntersectionObserver, no library).
- **Animated skill bars** that fill when scrolled into view.
- **3D tilt** on the project cards and hero portrait.
- **Reading progress bar** in the navbar and active-section highlighting.
- **Filterable project grid**.
- **Scroll-reveal marquee** of technologies that pauses on hover.
- **Accessible** — semantic landmarks, skip link, ARIA labels, visible focus rings, and full
  `prefers-reduced-motion` support.
- **SEO** — meta tags, Open Graph, and JSON-LD `Person` structured data.
- **Tiny bundle** — ~86 KB gzipped JS + CSS total.

---

## 📁 Project structure

```
portfolio-v2/
├── .github/workflows/deploy.yml   # auto-deploy to GitHub Pages
├── public/
│   ├── images/                    # photos and project thumbnails
│   ├── resume/                    # PDF résumé
│   ├── favicon.ico
│   └── icon-512.png
├── src/
│   ├── data/portfolio.ts          # ⭐ ALL YOUR CONTENT IS HERE
│   ├── hooks/                     # useTheme, useInView, useScroll, useTilt, useActiveSection
│   ├── components/
│   │   ├── Cursor.tsx             # custom cursor
│   │   ├── Navbar.tsx  Hero.tsx   # layout + hero
│   │   ├── About.tsx   Experience.tsx
│   │   ├── Skills.tsx  Projects.tsx
│   │   ├── Contact.tsx Footer.tsx
│   │   ├── Button.tsx  Section.tsx  Reveal.tsx  SocialLinks.tsx
│   │   └── Icons.tsx              # inline SVGs, no icon library
│   ├── App.tsx
│   ├── index.css                  # design tokens, theme, animations
│   └── main.tsx
├── index.html                     # meta tags, fonts, JSON-LD, theme script
├── vite.config.ts
└── package.json
```

---

## 🎨 Making it yours

**Change the accent colour** — open `src/index.css` and edit `--accent` in both `:root` and
`.dark`. One value changes the whole site.

```css
:root  { --accent: #5b3df5; }   /* light */
.dark { --accent: #8b7bff; }   /* dark  */
```

**Change fonts** — update the `--font-display` / `--font-sans` / `--font-mono` variables in
`@theme inline`, and the Google Fonts `<link>` in `index.html`.

**Turn off the custom cursor** — delete `<Cursor />` from `src/App.tsx`.

**Connect a real contact form** — in `src/components/Contact.tsx`, replace the body of
`handleSubmit` with a `fetch()` to a service like [Formspree](https://formspree.io),
[Web3Forms](https://web3forms.com) or a Google Apps Script endpoint. Then the form works without
a mail client.
