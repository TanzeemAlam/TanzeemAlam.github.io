import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personal } from '../data/content'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <Link to="/" className={styles.logo}>
        {personal.name}
      </Link>

      <div className={styles.links}>
        <Link to="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>Home</Link>
        <a href={`mailto:${personal.email}`} className="btn btn-yellow" style={{ fontSize: '.65rem' }}>
          Hire Me ↗
        </a>
      </div>

      <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label="Toggle menu" aria-expanded={open}>
        <span /><span /><span />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div className={styles.mobile} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <Link to="/" className={styles.mobileLink} onClick={() => setOpen(false)}>Home</Link>
            <a href={`mailto:${personal.email}`} className={styles.mobileLink} onClick={() => setOpen(false)}>Hire Me ↗</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
