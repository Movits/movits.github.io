import type { Content } from './types'

export const en: Content = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    ariaLabel: 'Main navigation',
  },
  hero: {
    greeting: "Hi, I'm",
    tagline: 'Full Stack Developer · Automation & AI Chatbots (Python/JS/TS)',
    location: 'Brasília, Brazil',
    ctaProjects: 'View projects',
    ctaContact: 'Get in touch',
    scrollHint: 'Scroll to explore',
  },
  about: {
    title: 'About me',
    paragraphs: [
      "I'm a full stack developer based in Brasília, Brazil, with 3+ years building bots, automations and integrations in Python and JavaScript/TypeScript.",
      "I currently work as a programming intern at the Legislative Chamber of the Federal District (Project Advisory Office — ASSEPRO, People Management), focusing on the architecture and testing of an internal tool. I also work as a freelance full stack developer, delivering high-performance websites, React Native/Expo apps and process automation.",
      "I'm a member of the AI Council of the Federal District Trade Association, and I work with clients in Portuguese, English and Spanish.",
    ],
    avatarAlt: "Roberto's profile picture",
  },
  experience: {
    title: 'Experience',
    items: [
      {
        period: 'Present',
        role: 'Programming Intern',
        org: 'Legislative Chamber of the Federal District · ASSEPRO, People Management',
        description:
          'Architecture and testing of an internal tool used at the Chamber, taking part in the software development cycle in the public sector.',
      },
      {
        period: 'Jan 2024 — Present',
        role: 'Freelance Full Stack Developer',
        org: 'Workana',
        description:
          'High-performance websites, bots and automations for clients, in Python and JavaScript/TypeScript — serving clients in Portuguese, English and Spanish.',
      },
      {
        period: '2021 — Present',
        role: 'Member',
        org: 'AI Council & ACDF Jovem · Federal District Trade Association',
        description: 'Participation in technology and innovation programs and events.',
      },
    ],
  },
  projects: {
    title: 'Featured projects',
    subtitle: 'Selected work — each project shows a different skill set.',
    repoLabel: 'Code',
    liveLabel: 'View live',
    items: [
      {
        id: 'nimbus',
        name: 'NIMBUS',
        description:
          'A 3D landing page with cinematic scrolling for a premium streetwear brand — procedural clouds, crossfading scenes and parallax built with React Three Fiber. Shipped on a custom domain with an integrated Nuvemshop store.',
        tags: ['React 18', 'TypeScript', 'Vite', 'React Three Fiber', 'GitHub Actions', 'Nuvemshop'],
        repoUrl: 'https://github.com/Movits/nimbus',
        liveUrl: 'https://nimbuswear.com.br',
        imageAlt: 'NIMBUS 3D landing page',
      },
      {
        id: 'apologetica',
        name: 'APPologética',
        description:
          'A fully offline, bilingual Catholic apologetics app: 85+ sourced articles, a complete Bible, quizzes and prayer tools. A single React Native + Expo codebase for Android, iOS and web — store releases coming soon.',
        tags: ['React Native', 'Expo', 'React 19', 'Firebase', 'Sentry', 'i18n PT/EN'],
        repoUrl: 'https://github.com/Movits/apologetica-app',
        liveUrl: 'https://movits.github.io/apologetica-app/',
        imageAlt: 'APPologética app page',
      },
      {
        id: 'museu',
        name: 'Museu Virtual',
        description:
          'A virtual art museum with 100 masterpieces in ultra-high resolution: Google Arts-style deep zoom and interactive magnifiers revealing the history and technique behind each painting. Tiles sharded across satellite repositories to work around GitHub Pages\' 1 GB limit.',
        tags: ['React 18', 'Vite', 'OpenSeadragon', 'sharp', 'GitHub Actions'],
        repoUrl: 'https://github.com/Movits/museu-virtual',
        liveUrl: 'https://movits.github.io/museu-virtual/',
        imageAlt: 'Museu Virtual gallery',
      },
      {
        id: 'digitsbot',
        name: 'DigitsBot',
        description:
          'A Discord music bot in Python: YouTube API search, audio playback with yt-dlp + FFmpeg, and per-user auto-replies persisted in MariaDB. Self-hosted on a Raspberry Pi (2023 project).',
        tags: ['Python', 'discord.py', 'yt-dlp + FFmpeg', 'YouTube API', 'MariaDB', 'asyncio'],
        repoUrl: 'https://github.com/Movits/DigitsBot',
        terminal: [
          '$ /play lofi hip hop',
          '> Searching YouTube...',
          '> Now playing: lofi hip hop radio',
          '$ /addresponse "good morning!"',
          '> Reply saved to MariaDB',
        ],
      },
    ],
  },
  moreProjects: {
    title: 'Other projects',
    items: [
      {
        id: 'memora',
        name: 'memora',
        description:
          'An offline spaced-repetition PWA (Leitner system) for studying with active recall.',
        tags: ['JavaScript', 'PWA', 'offline-first'],
        repoUrl: 'https://github.com/Movits/memora',
        liveUrl: 'https://movits.github.io/memora/',
      },
      {
        id: 'loja-france',
        name: 'Boutique France',
        description: 'A storefront website built as a freelancer for a real store in Brasília.',
        tags: ['JavaScript', 'HTML/CSS', 'client work'],
        repoUrl: 'https://github.com/Movits/loja-france',
        liveUrl: 'https://movits.github.io/loja-france/',
      },
      {
        id: 'seja-meu-guia',
        name: 'Seja Meu Guia',
        description:
          'An accessibility app for blind users, with screen-reader support and text-to-speech.',
        tags: ['TypeScript', 'Expo', 'Firebase'],
        repoUrl: 'https://github.com/Movits/seja-meu-guia',
        status: 'In development',
      },
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        title: 'Frontend',
        skills: [
          'JavaScript (ES6+)',
          'TypeScript',
          'HTML5',
          'CSS',
          'React 18/19',
          'Vite',
          'React Three Fiber / three.js',
          'PWA',
          'Accessibility',
        ],
      },
      {
        title: 'Mobile',
        skills: ['React Native', 'Expo (EAS)', 'Android · iOS · Web in one codebase'],
      },
      {
        title: 'Backend & Automation',
        skills: [
          'Python',
          'discord.py / asyncio',
          'Node.js (tooling)',
          'Firebase (Auth/Firestore)',
          'MySQL / MariaDB',
          'API integrations',
          'Bots & chatbots',
        ],
      },
      {
        title: 'DevOps & Tools',
        skills: [
          'Git / GitHub',
          'GitHub Actions (CI/CD)',
          'GitHub Pages + custom domain',
          'ESLint',
          'Sentry',
        ],
      },
      {
        title: 'Languages',
        skills: ['Portuguese (native)', 'English (fluent)', 'Spanish (upper-intermediate)'],
      },
    ],
  },
  contact: {
    title: "Let's talk about your project",
    text: "I'm available for freelance work, collaborations and good ideas. Reach out by email or on any of the networks below.",
    ctaEmail: 'Send email',
    footerNote: 'Built with React, TypeScript and three.js',
  },
  a11y: {
    langToggle: 'Switch language',
    skipToContent: 'Skip to content',
  },
  meta: {
    title: 'Roberto França — Full Stack Developer · Brasília, Brazil',
    description:
      'Portfolio of Roberto França, full stack developer in Brasília: automation, AI chatbots, high-performance websites and apps in Python, JavaScript and TypeScript.',
  },
}
