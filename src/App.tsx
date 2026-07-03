import { lazy, Suspense, useEffect, useState } from 'react'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { OtherProjects } from './sections/OtherProjects'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'
import { SITE_NAME } from './data/site'
import { startScrollTracking } from './scene/scrollStore'
import { supportsWebGL } from './scene/util'
import { useReducedMotion } from './hooks/useReducedMotion'

const SceneCanvas = lazy(() =>
  import('./scene/SceneCanvas').then((m) => ({ default: m.SceneCanvas })),
)

function Page() {
  const { content } = useLanguage()
  const reduced = useReducedMotion()
  const [webgl] = useState(supportsWebGL)

  useEffect(() => {
    startScrollTracking()
  }, [])

  const show3D = webgl && !reduced

  return (
    <>
      <a className="skip-link" href="#main">
        {content.a11y.skipToContent}
      </a>
      {show3D && (
        <Suspense fallback={null}>
          <SceneCanvas />
        </Suspense>
      )}
      <div className="page">
        <Navbar />
        <main id="main" tabIndex={-1}>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <OtherProjects />
          <Skills />
          <Contact />
        </main>
        <footer className="footer">
          <div className="container">
            <p>
              {'©'} {new Date().getFullYear()} {SITE_NAME} {'·'} {content.contact.footerNote}
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  )
}
