/* ============================================================================
 *  PORTFOLIO DATA — single source of truth
 * ----------------------------------------------------------------------------
 *  Everything on this site comes from this file. There is no backend, no CMS
 *  and no API call. Edit the values below, save, and the site updates.
 *
 *  Tip: press  CTRL/CMD + F  and search for  "EDIT ME"  to jump between fields.
 * ========================================================================== */

/* -------------------------------------------------------------------------- */
/*  TYPES                                                                      */
/* -------------------------------------------------------------------------- */

export type IconName =
  | 'linkedin'
  | 'github'
  | 'x'
  | 'facebook'
  | 'instagram'
  | 'mail'
  | 'phone'
  | 'pin'
  | 'calendar'
  | 'external'
  | 'download'
  | 'arrow'
  | 'code'
  | 'sparkles';

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: IconName;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
  /** e.g. "2+", "12+" — keep the "+" so it reads as "and counting" */
  suffix?: string;
};

export type Skill = {
  name: string;
  /** 0–100. Drives the animated progress bar. */
  level: number;
};

export type SkillGroup = {
  id: string;
  title: string;
  icon: IconName;
  caption: string;
  skills: Skill[];
  /** placeholder: true -> renders as a dashed "fill me in" card. */
  placeholder?: boolean;
};

export type ExperienceItem = {
  id: string;
  role: string;
  organisation: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tech: string[];
  /**
   * placeholder: true  ->  renders as a dashed "fill me in" card.
   * Delete the whole entry once you replace it with a real job.
   */
  placeholder?: boolean;
};

export type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  note?: string;
  placeholder?: boolean;
};

export type ProjectCategory = 'frontend' | 'backend' | 'fullstack';

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  /** Drives the filter buttons above the grid. */
  category: ProjectCategory;
  /** Set at least one of these, otherwise the card's action row is hidden. */
  links?: { label: string; href: string; icon: IconName }[];
  featured?: boolean;
  year: string;
  placeholder?: boolean;
};

export type Repository = {
  id: string;
  title: string;
  description: string;
  language: string;
  topics: string[];
  href: string;
};

export type Achievement = {
  id: string;
  title: string;
  detail: string;
  icon: IconName;
};

/* -------------------------------------------------------------------------- */
/*  1. BASIC INFO  —  EDIT ME                                                  */
/* -------------------------------------------------------------------------- */

export const site = {
  name: 'Arif Al Monsor Tonoy',
  shortName: 'Arif Tonoy',
  initials: 'AT',
  role: 'Fullstack Web Developer & Competitive Programmer',
  tagline: 'I build things for the web — and solve hard problems for fun.',
  /** Shown in the browser tab and in search results. */
  title: 'Arif Al Monsor Tonoy — Fullstack Web Developer & Competitive Programmer',
  description:
    'Portfolio of Arif Al Monsor Tonoy, a Bangladeshi fullstack web developer and competitive programmer with 2+ years of professional experience building web applications with React, Node.js and modern CSS.',
  locale: 'en_US',
  resume: {
    label: 'Download CV',
    href: '/resume/Arif-Al-Monsor-Resume.pdf',
  },
  favicon: '/favicon.ico',
} as const;

/* -------------------------------------------------------------------------- */
/*  2. CONTACT  —  EDIT ME                                                    */
/* -------------------------------------------------------------------------- */

export const contact = {
  email: 'tonoyict20@gmail.com',
  phone: '+8801761718015',
  phoneHref: '+8801761718015',
  address: 'Mohakhali, Dhaka, Bangladesh',
  nationality: 'Bangladeshi',
  dateOfBirth: '10 July 1999',
  availability: 'Open to new opportunities',
} as const;

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    handle: '@tonoy20',
    href: 'https://github.com/tonoy20',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    handle: 'Arif Tonoy',
    href: 'https://www.linkedin.com/in/arif-tonoy-597b451a4/',
    icon: 'linkedin',
  },
  {
    label: 'X (Twitter)',
    handle: '@Monsor_Tonoy',
    href: 'https://twitter.com/Monsor_Tonoy',
    icon: 'x',
  },
  {
    label: 'Facebook',
    handle: 'tonoy.8',
    href: 'https://www.facebook.com/tonoy.8/',
    icon: 'facebook',
  },
  {
    label: 'Instagram',
    handle: '@arif_tonoy',
    href: 'https://www.instagram.com/arif_tonoy/',
    icon: 'instagram',
  },
  { label: 'Email', handle: contact.email, href: `mailto:${contact.email}`, icon: 'mail' },
];

/* -------------------------------------------------------------------------- */
/*  3. NAVIGATION                                                              */
/* -------------------------------------------------------------------------- */

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

/* -------------------------------------------------------------------------- */
/*  4. ABOUT  —  EDIT ME                                                       */
/* -------------------------------------------------------------------------- */

export const about = {
  greeting: 'Hi, my name is',
  headline: 'Arif Al Monsor Tonoy',
  subheadline: 'Competitive programmer who also builds things for the web.',
  paragraphs: [
    'Hello! I enjoy creating things that live on the internet. My interest in web development started in 2021 when I decided to try editing custom WordPress themes. I have also given a lot of my time to problem solving on Codeforces and other online judges.',
    'Fast forward to today: I have around 2 years of professional experience shipping web products, alongside building projects of my own. I picked up PHP and Python along the way, which helped me work comfortably on the backend as well as the frontend.',
  ],
  highlights: [
    { label: 'Role', value: 'Fullstack Web Developer' },
    { label: 'Experience', value: '2+ years' },
    { label: 'Focus', value: 'React · Node.js · Problem Solving' },
    { label: 'Status', value: 'Open to new work' },
  ],
  images: {
    main: '/images/profile-main.jpg',
    secondary: '/images/profile-secondary.jpg',
    portrait: '/images/portrait.jpg',
  },
};

/* -------------------------------------------------------------------------- */
/*  5. STATS  —  EDIT ME   (the numbers in the hero strip)                    */
/* -------------------------------------------------------------------------- */

export const stats: Stat[] = [
  { value: '2', suffix: '+', label: 'Years experience' },
  { value: '4', suffix: '+', label: 'Years programming' },
  { value: '20', suffix: '+', label: 'Projects built' },
  { value: '10', suffix: '+', label: 'Technologies' },
];

/* -------------------------------------------------------------------------- */
/*  6. ABOUT / POSITION MODAL                                                  */
/* -------------------------------------------------------------------------- */

export const position = {
  title: 'Current Position',
  body: 'Hard-working competitive programmer with a flair for creating elegant solutions in the least amount of time. As a fullstack web developer I currently build production web apps, ship my own side projects, and keep solving problems on online judges.',
};

/* -------------------------------------------------------------------------- */
/*  7. SKILLS  —  EDIT ME                                                      */
/*  Copy/paste a whole `skillGroups` block to add a new category.             */
/* -------------------------------------------------------------------------- */

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'code',
    caption: 'Interfaces, layouts and the pixel work in between.',
    skills: [
      { name: 'HTML', level: 92 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'SCSS / Tailwind CSS', level: 82 },
      { name: 'Bootstrap', level: 75 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'code',
    caption: 'APIs, databases and keeping the data honest.',
    skills: [
      { name: 'Node.js / Express', level: 75 },
      { name: 'PHP', level: 65 },
      { name: 'Python', level: 68 },
      { name: 'MySQL', level: 74 },
      { name: 'MongoDB', level: 72 },
      { name: 'REST & JWT Auth', level: 76 },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    icon: 'sparkles',
    caption: 'Where the logic actually gets written.',
    skills: [
      { name: 'C', level: 88 },
      { name: 'C++', level: 85 },
      { name: 'Data Structures', level: 84 },
      { name: 'Algorithms', level: 86 },
      { name: 'OOP', level: 82 },
      { name: 'Java', level: 65 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    icon: 'code',
    caption: 'The boring-but-important part that ships code.',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Postman', level: 80 },
      { name: 'Figma', level: 62 },
      { name: 'Vite / Webpack', level: 70 },
      { name: 'Linux / CLI', level: 70 },
      { name: 'MySQL Workbench', level: 72 },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  8. EXPERIENCE  —  EDIT ME                                                  */
/*  The first entry is filled in from your old portfolio. The dashed ones are  */
/*  empty slots for the ~2 years of professional work you mentioned.          */
/* -------------------------------------------------------------------------- */

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-current',
    role: 'Fullstack Web Developer',
    organisation: 'ByteEver',
    location: 'Dhaka, Bangladesh',
    startDate: '2025',
    endDate: 'Present',
    current: true,
    summary:
      'Working across the full stack to build and improve modern web solutions, with a focus on plugin development, responsive interfaces, and reliable client-facing product support.',
    highlights: [
      'Developed and maintained WordPress and WooCommerce plugins using PHP and React.',
      'Implemented responsive UI improvements and feature updates for client projects.',
      'Resolved bugs and deployed fixes while supporting live product stability.',
      'Collaborated on product enhancement work to improve functionality and user experience.',
    ],
    tech: ['PHP', 'React', 'WordPress', 'WooCommerce', 'JavaScript', 'MySQL', 'Git'],
  },
  {
    id: 'exp-1',
    role: 'Web Application Developer',
    organisation: 'Unified Core Ltd',
    location: 'Dhaka, Bangladesh',
    startDate: '03/2024',
    endDate: '11/2024',
    summary:
      'Designed and developed responsive websites and web applications with a strong focus on functionality, usability, and clean front-end implementation for real user needs.',
    highlights: [
      'Built and maintained various websites with modern, responsive layouts and user-friendly interfaces.',
      'Translated client requirements into working web solutions using practical, maintainable front-end development practices.',
      'Created polished experiences with HTML, CSS, JavaScript, and PHP to deliver functional web products.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL', 'Git'],
  },
  {
    id: 'exp-2',
    role: 'Web Application Developer Intern',
    organisation: 'Unified Core Ltd',
    location: 'Dhaka, Bangladesh',
    startDate: '09/2023',
    endDate: '03/2024',
    summary:
      'Gained hands-on experience with the web development lifecycle by working on real projects, learning industry workflows, and contributing to website development under team guidance.',
    highlights: [
      'Learned and applied core web technologies including HTML, CSS, JavaScript, and PHP in practical project work.',
      'Contributed to live project development and supported UI implementation for real-world use cases.',
      'Developed a stronger understanding of project structure, collaboration, and quality-focused development practices.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'Git'],
  },
  {
    id: 'exp-3',
    role: 'Team Lead & Mentor — RUET Technocracy 2019',
    organisation: 'Mawlana Bhashani Science & Technology University',
    location: 'Gopalganj, Bangladesh',
    startDate: '2019',
    endDate: '2019',
    summary:
      'Contest team captain (mbstu_bijoyangon) for the RUET Technocracy project showcasing contest. Trained junior students in C, C++, algorithms and data structures.',
    highlights: [
      'Mentored junior students in C, C++, algorithms and data structures.',
      'Led a four-person team through a competitive project showcase.',
    ],
    tech: ['C', 'C++', 'Algorithms', 'Data Structures'],
  },
  /* ---- ADD MORE JOBS: copy any block above and edit it --------------------- */
];

/* -------------------------------------------------------------------------- */
/*  9. EDUCATION  —  EDIT ME                                                   */
/* -------------------------------------------------------------------------- */

export const education: EducationItem[] = [
  {
    id: 'edu-bsc',
    degree: 'B.Sc. in Information & Communication Technology',
    institution: 'Mawlana Bhashani Science & Technology University',
    period: '2017 — 2022',
    note: '1 year of academic delay due to the COVID-19 pandemic.',
  },
  {
    id: 'edu-se',
    degree: 'Software Engineering Bootcamp',
    institution: 'Algorithm Learner',
    period: '2018 — 2020',
  },
  {
    id: 'edu-web',
    degree: 'Web Developer Bootcamp',
    institution: 'Learn Code',
    period: '2020 — 2021',
  },
  /* ---- ADD MORE EDUCATION ENTRIES HERE ------------------------------------ */
];

/* -------------------------------------------------------------------------- */
/*  10. PROJECTS  —  EDIT ME                                                   */
/*  These three come from your old portfolio. Duplicate a block for the new    */
/*  ones you want to show off. Drop an image in public/images/projects/.       */
/* -------------------------------------------------------------------------- */

export const projects: Project[] = [
  {
    id: 'wc-review-for-discount',
    title: 'WC Review for Discount',
    tagline: 'WooCommerce review-based coupon reward solution',
    description:
      'A WooCommerce plugin designed to improve customer engagement by rewarding verified product reviews with personalized discount coupons. It helps stores build trust, collect authentic feedback, and drive repeat purchases through an automated and customer-friendly review incentive system.',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'MySQL'],
    category: 'fullstack',
    year: '2024',
    featured: true,
    links: [
      {
        label: 'Plugin site',
        href: 'https://pluginever.com/plugins/wc-review-for-discount/',
        icon: 'external',
      },
      {
        label: 'WordPress.org',
        href: 'https://wordpress.org/plugins/wc-review-for-discount/',
        icon: 'external',
      },
    ],
  },
  {
    id: 'min-max-quantities',
    title: 'Min Max Quantities for WooCommerce',
    tagline: 'WooCommerce quantity control and purchase rule plugin',
    description:
      'A WooCommerce business logic plugin that helps store owners enforce minimum and maximum purchase limits, quantity step rules, and cart-level restrictions. It improves inventory control, prevents overselling or underselling, and creates a smoother and more reliable shopping experience for both customers and administrators.',
    image:
      'https://ps.w.org/wc-min-max-quantities/assets/banner-772x250.png?rev=3145694',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'MySQL'],
    category: 'fullstack',
    year: '2024',
    featured: true,
    links: [
      {
        label: 'WordPress.org',
        href: 'https://wordpress.org/plugins/wc-min-max-quantities/',
        icon: 'external',
      },
      {
        label: 'Documentation',
        href: 'https://pluginever.com/docs/wc-min-max-quantities/',
        icon: 'external',
      },
    ],
  },
  {
    id: 'serial-numbers',
    title: 'Serial Numbers for WooCommerce',
    tagline: 'WooCommerce serial key and digital licensing plugin',
    description:
      'A WooCommerce licensing plugin built for selling digital products, software, and downloadable content with secure serial key generation and assignment. It enables controlled product access, automated key delivery, activation tracking, and a more professional workflow for digital product businesses.',
    image: 'https://ps.w.org/wc-serial-numbers/assets/banner-772x250.png?rev=3135444',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'MySQL'],
    category: 'fullstack',
    year: '2024',
    featured: true,
    links: [
      {
        label: 'WordPress.org',
        href: 'https://wordpress.org/plugins/wc-serial-numbers/',
        icon: 'external',
      },
      {
        label: 'Documentation',
        href: 'https://pluginever.com/docs/woocommerce-serial-numbers',
        icon: 'external',
      },
    ],
  },
  {
    id: 'fern-valley-farms',
    title: 'Fern Valley Farms',
    tagline: 'Dynamic farm website and business platform',
    description:
      'A dynamic farm management and promotional website built to present agricultural products, showcase operations, and support a more engaging customer-facing experience. The project combines a clean front-end experience with backend-driven content management to make the brand feel modern, trustworthy, and accessible to online buyers.',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML', 'CSS'],
    category: 'fullstack',
    year: '2024',
    featured: true,
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/tonoy20/Fern-Vally-Farms-Dynamic',
        icon: 'github',
      },
    ],
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    tagline: 'Academic records and administration dashboard',
    description:
      'A practical academic management system for organizing student information, tracking records, and managing day-to-day administrative tasks efficiently. The application focuses on usability and data flow, helping educational institutions maintain structured student data with a cleaner and more systematic workflow.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML', 'CSS'],
    category: 'fullstack',
    year: '2023',
    featured: true,
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/tonoy20/Student-Management-System',
        icon: 'github',
      },
    ],
  },
  {
    id: 'proshop',
    title: 'Online Shopping Mart',
    tagline: 'Fullstack e-commerce application',
    description:
      'A complete online shopping platform with product browsing, cart and checkout flows, secured with JSON Web Tokens so every user only sees their own orders. Built to practise authentication and data modelling end-to-end.',
    image: '/images/projects/proshop.jpg',
    tech: ['Node.js', 'MongoDB', 'JWT', 'Express'],
    category: 'fullstack',
    year: '2024',
    featured: true,
    links: [
      { label: 'Source code', href: 'https://github.com/tonoy20/Proshop', icon: 'github' },
    ],
  },
  {
    id: 'blood-management',
    title: 'Blood Management System',
    tagline: 'Desktop application for donor registration',
    description:
      'A blood bank management system that stores donor records and makes them searchable by blood group and location, so patients and donors can be matched quickly when someone actually needs help.',
    image: '/images/projects/blood-management.jpg',
    tech: ['Java', 'JavaScript', 'XML', 'CSS'],
    category: 'fullstack',
    year: '2023',
    featured: true,
    links: [
      {
        label: 'Source code',
        href: 'https://github.com/tonoy20/Blood-Management',
        icon: 'github',
      },
    ],
  },
  {
    id: 'restaurant',
    title: 'Restaurant Website',
    tagline: 'Responsive front-end built with React',
    description:
      'A clean, fully responsive restaurant site — menu, gallery and reservation sections — built as a first serious React project, with components split for reuse and layout that holds up on mobile.',
    image: '/images/projects/restaurant.jpg',
    tech: ['React', 'HTML', 'CSS', 'Bootstrap'],
    category: 'frontend',
    year: '2023',
    links: [
      {
        label: 'Source code',
        href: 'https://github.com/tonoy20/Restaurent_website_React',
        icon: 'github',
      },
    ],
  },
  /* ---- ADD YOUR NEWER PROJECTS HERE ---------------------------------------- */

];

/* -------------------------------------------------------------------------- */
/*  11. CODE REPOSITORIES  —  EDIT ME                                          */
/* -------------------------------------------------------------------------- */

export const repositories: Repository[] = [
  {
    id: 'repo-codeforces',
    title: 'Codeforces Solutions',
    description:
      'A growing collection of Codeforces problems solved in C++ — kept as a personal reference for algorithms, data structures and contest techniques.',
    language: 'C++',
    topics: ['Competitive Programming', 'Algorithms'],
    href: 'https://github.com/tonoy20/Codeforces-Solution',
  },
  {
    id: 'repo-judges',
    title: 'LeetCode, HackerRank & Others',
    description:
      'Solutions to problems from LeetCode, HackerRank and other online judges, written in C++ and organised by topic for quick revision.',
    language: 'C++',
    topics: ['Problem Solving', 'Data Structures'],
    href: 'https://github.com/tonoy20/leetcode-hackerrank-others',
  },
  {
    id: 'repo-graph',
    title: 'Graph Algorithms',
    description:
      'Clean C++ implementations of graph algorithms and data structures — traversals, shortest paths, spanning trees and more.',
    language: 'C++',
    topics: ['Graphs', 'Algorithms'],
    href: 'https://github.com/tonoy20/Graph',
  },
];

/* -------------------------------------------------------------------------- */
/*  12. HIGHLIGHTS / ACHIEVEMENTS  —  EDIT ME                                   */
/* -------------------------------------------------------------------------- */

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'RUET Technocracy 2019',
    detail: 'Project showcase contest — team captain for mbstu_bijoyangon.',
    icon: 'sparkles',
  },
  {
    id: 'ach-2',
    title: 'Competitive programming',
    detail: '4+ years solving problems on Codeforces and other online judges.',
    icon: 'code',
  },
  {
    id: 'ach-3',
    title: '1+ year shipping product',
    detail: 'Professional web development across frontend and backend.',
    icon: 'arrow',
  },
];

/* -------------------------------------------------------------------------- */
/*  13. MARQUEE (scrolling strip in the hero)                                  */
/* -------------------------------------------------------------------------- */

export const marqueeItems: string[] = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express',
  'MongoDB',
  'MySQL',
  'Tailwind CSS',
  'SCSS',
  'Python',
  'PHP',
  'Java',
  'C',
  'C++',
  'Git',
  'Figma',
];
