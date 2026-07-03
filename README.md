# movits.github.io — Portfólio

Portfólio pessoal de **Roberto França** ([@Movits](https://github.com/Movits)) — desenvolvedor full stack em Brasília.

**Ao vivo:** https://movits.github.io

## Stack

- [Vite](https://vite.dev) + [React 18](https://react.dev) + TypeScript
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [drei](https://github.com/pmndrs/drei) — cena 3D dirigida por scroll (partículas, sólidos wireframe, anéis)
- CSS escrito à mão com design tokens (sem framework)
- Bilíngue PT-BR/EN com toggle persistido em `localStorage`
- Deploy automático no GitHub Pages via GitHub Actions

## Desenvolvimento

```bash
npm install
npm run dev        # dev server em localhost:5173
npm run build      # typecheck + build de produção
npm run preview    # serve o build localmente
```

## Scripts auxiliares

```bash
npm run shots                                   # regenera as thumbnails dos projetos (Playwright + sharp)
node scripts/capture-screenshots.mjs --og URL   # regenera public/og.png a partir do hero
node scripts/qa-local.mjs [pasta-saida]         # QA: screenshots por seção, console, toggle EN, reduced-motion
```

## Estrutura

```
src/
├── i18n/       conteúdo PT/EN tipado + LanguageContext
├── scene/      cena 3D (scrollStore, partículas, formas, camera rig)
├── sections/   Hero, Sobre, Experiência, Projetos, Skills, Contato
├── components/ Navbar, cards de projeto, terminal fake, ícones
├── hooks/      useInView, useActiveSection, useReducedMotion, useIsMobile
└── styles/     tokens.css, base.css, sections.css
```

A cena 3D respeita `prefers-reduced-motion` (desativa o canvas) e degrada para um backdrop CSS quando WebGL não está disponível.
