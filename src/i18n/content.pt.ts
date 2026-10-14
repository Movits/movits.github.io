import type { Content } from './types'

export const pt: Content = {
  nav: {
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    skills: 'Skills',
    contact: 'Contato',
    ariaLabel: 'Navegação principal',
  },
  hero: {
    greeting: 'Olá, eu sou',
    tagline: 'Desenvolvedor Full Stack · Automação & Chatbots com IA (Python/JS/TS)',
    location: 'Brasília, DF — Brasil',
    ctaProjects: 'Ver projetos',
    ctaContact: 'Entrar em contato',
    scrollHint: 'Role para explorar',
  },
  about: {
    title: 'Sobre mim',
    paragraphs: [
      'Sou desenvolvedor full stack baseado em Brasília, com mais de 3 anos criando bots, automações e integrações em Python e JavaScript/TypeScript.',
      'Atualmente sou estagiário de programação na Câmara Legislativa do DF (Assessoria de Projetos — ASSEPRO, Gestão de Pessoas), apoiando a arquitetura e os testes de uma ferramenta interna, e lidero o desenvolvimento da WRW, plataforma de networking com IA para empreendedoras. Também trabalho como freelancer full stack, entregando sites de alta performance, aplicativos com React Native/Expo e automações de processos.',
      'Atendo clientes em português, inglês e espanhol.',
    ],
    avatarAlt: 'Foto de perfil de Roberto',
  },
  experience: {
    title: 'Experiência',
    items: [
      {
        period: 'Ago 2026 — Atual',
        role: 'Desenvolvedor Full Stack e Líder de Projeto',
        org: 'WRW — Women Rocking the World',
        description:
          'Lidero uma equipe de 4 desenvolvedores e a comunicação com a cliente em uma plataforma de networking com IA para empreendedoras (React, tRPC, MySQL e Google Gemini). Primeira versão entregue em 16/09/2026.',
      },
      {
        period: 'Jun 2026 — Atual',
        role: 'Estagiário de Programação',
        org: 'Câmara Legislativa do DF · ASSEPRO, Gestão de Pessoas',
        description: 'Apoio à arquitetura e aos testes de uma ferramenta interna usada na Câmara.',
      },
      {
        period: '2025 — Atual',
        role: 'Desenvolvedor Full Stack Freelancer',
        org: 'Clientes diretos',
        description:
          'Sites de alta performance, landing pages e automações para clientes, em Python e JavaScript/TypeScript — atendimento em português, inglês e espanhol.',
      },
      {
        period: 'Jun 2020 — 2026',
        role: 'Professor de Inglês',
        org: 'Casa Marytza Macedo e Joyful Village',
        description:
          'Aulas individuais, em grupo e para empresas, online e presenciais; criação de materiais e de um curso preparatório para o Duolingo English Test.',
      },
    ],
  },
  projects: {
    title: 'Projetos em destaque',
    subtitle: 'Trabalho selecionado — cada projeto mostra uma competência diferente.',
    repoLabel: 'Código',
    liveLabel: 'Ver ao vivo',
    items: [
      {
        id: 'nimbus',
        name: 'NIMBUS',
        description:
          'Landing page 3D com rolagem cinematográfica para uma marca de streetwear premium — nuvens procedurais, cenas em crossfade e parallax construídos com React Three Fiber. Publicada com domínio próprio e loja integrada na Nuvemshop.',
        tags: ['React 18', 'TypeScript', 'Vite', 'React Three Fiber', 'GitHub Actions', 'Nuvemshop'],
        repoUrl: 'https://github.com/Movits/nimbus',
        liveUrl: 'https://nimbuswear.com.br',
        imageAlt: 'Página inicial 3D do site NIMBUS',
      },
      {
        id: 'apologetica',
        name: 'APPologética',
        description:
          'Aplicativo católico de apologética bilíngue, com todo o conteúdo disponível offline: 83 artigos com fontes, duas Bíblias completas, quiz e ferramentas de oração. Um único codebase React Native + Expo para Android, iOS e web — apps nas lojas em breve.',
        tags: ['React Native', 'Expo', 'React 19', 'Firebase', 'Sentry', 'i18n PT/EN'],
        repoUrl: 'https://github.com/Movits/apologetica-app',
        liveUrl: 'https://movits.github.io/apologetica-app/',
        imageAlt: 'Página do aplicativo APPologética',
      },
      {
        id: 'museu',
        name: 'Museu Virtual',
        description:
          'Museu de arte com 100 obras-primas em altíssima resolução: zoom profundo estilo Google Arts e lupas interativas que revelam a história e a técnica de cada pintura. Tiles distribuídos em repositórios-satélite para contornar o limite de 1 GB do GitHub Pages.',
        tags: ['React 18', 'Vite', 'OpenSeadragon', 'sharp', 'GitHub Actions'],
        repoUrl: 'https://github.com/Movits/museu-virtual',
        liveUrl: 'https://movits.github.io/museu-virtual/',
        imageAlt: 'Galeria do Museu Virtual',
      },
      {
        id: 'digitsbot',
        name: 'DigitsBot',
        description:
          'Bot de música para Discord em Python: busca pela API do YouTube, reprodução de áudio com yt-dlp + FFmpeg e respostas automáticas por usuário persistidas em MariaDB. Rodou hospedado em um Raspberry Pi (projeto de 2023).',
        tags: ['Python', 'discord.py', 'yt-dlp + FFmpeg', 'YouTube API', 'MariaDB', 'asyncio'],
        repoUrl: 'https://github.com/Movits/DigitsBot',
        terminal: [
          '$ /play lofi hip hop',
          '> Buscando no YouTube...',
          '> Tocando: lofi hip hop radio',
          '$ /addresponse "bom dia!"',
          '> Resposta salva no MariaDB',
        ],
      },
    ],
  },
  moreProjects: {
    title: 'Outros projetos',
    items: [
      {
        id: 'memora',
        name: 'memora',
        description:
          'PWA offline de repetição espaçada (sistema Leitner) para estudar com revisão ativa.',
        tags: ['JavaScript', 'PWA', 'offline-first'],
        repoUrl: 'https://github.com/Movits/memora',
        liveUrl: 'https://movits.github.io/memora/',
      },
      {
        id: 'loja-france',
        name: 'Boutique France',
        description:
          'Site vitrine desenvolvido como freelancer para uma loja real de Brasília.',
        tags: ['JavaScript', 'HTML/CSS', 'cliente real'],
        repoUrl: 'https://github.com/Movits/loja-france',
        liveUrl: 'https://movits.github.io/loja-france/',
      },
      {
        id: 'seja-meu-guia',
        name: 'Seja Meu Guia',
        description:
          'App de acessibilidade para pessoas cegas, com leitura de tela e síntese de voz.',
        tags: ['TypeScript', 'Expo', 'Firebase'],
        repoUrl: 'https://github.com/Movits/seja-meu-guia',
        status: 'Em desenvolvimento',
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
          'Acessibilidade',
        ],
      },
      {
        title: 'Mobile',
        skills: ['React Native', 'Expo (EAS)', 'Android · iOS · Web em um codebase'],
      },
      {
        title: 'Backend & Automação',
        skills: [
          'Python',
          'discord.py / asyncio',
          'Node.js (tooling)',
          'Firebase (Auth/Firestore)',
          'MySQL / MariaDB',
          'Integrações de API',
          'Bots & chatbots',
        ],
      },
      {
        title: 'DevOps & Ferramentas',
        skills: [
          'Git / GitHub',
          'GitHub Actions (CI/CD)',
          'GitHub Pages + domínio próprio',
          'ESLint',
          'Sentry',
        ],
      },
      {
        title: 'Idiomas',
        skills: ['Português (nativo)', 'Inglês (fluente)', 'Espanhol (intermediário-avançado)'],
      },
    ],
  },
  contact: {
    title: 'Vamos conversar sobre seu projeto',
    text: 'Estou disponível para freelas, colaborações e boas ideias. Me chame no e-mail ou em qualquer uma das redes abaixo.',
    ctaEmail: 'Enviar e-mail',
    footerNote: 'Feito com React, TypeScript e three.js',
  },
  a11y: {
    langToggle: 'Mudar idioma',
    skipToContent: 'Pular para o conteúdo',
  },
  meta: {
    title: 'Roberto França — Desenvolvedor Full Stack · Brasília',
    description:
      'Portfólio de Roberto França, desenvolvedor full stack em Brasília: automação, chatbots com IA, sites de alta performance e apps em Python, JavaScript e TypeScript.',
  },
}
