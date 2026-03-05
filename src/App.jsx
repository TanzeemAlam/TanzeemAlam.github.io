import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Awards from './pages/Awards'
import Certifications from './pages/Certifications'

export default function App() {
  const location = useLocation()
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"                          element={<Home />} />
            <Route path="/projects"                  element={<Projects />} />
            <Route path="/projects/:slug"            element={<ProjectDetail />} />
            <Route path="/awards"                    element={<Awards />} />
            <Route path="/certifications"            element={<Certifications />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  )
}
