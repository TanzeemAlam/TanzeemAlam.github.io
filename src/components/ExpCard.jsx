import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './ExpCard.module.css'

export default function ExpCard({ role, company, location, period, tags, points, allTags }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`${styles.card} ${open ? styles.open : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={styles.trigger}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <div className={styles.left}>
          <div className={styles.role}>{role}</div>
          <div className={styles.meta}>
            <span className={styles.company}>{company} · {location}</span>
          </div>
          <div className={styles.tagRow}>
            {tags.map(t => <span key={t} className={styles.etag}>{t}</span>)}
          </div>
        </div>
        <div className={styles.right}>
          <span className={styles.period}>{period}</span>
          <span className={styles.chevron}>{open ? '▲' : '▼'}</span>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.body}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: .28 }}
          >
            <div className={styles.inner}>
              <div className={styles.points}>
                {points.map((p, i) => (
                  <div key={i} className={styles.point}>
                    <span className={styles.arrow}>→</span>
                    <span dangerouslySetInnerHTML={{ __html: p }} />
                  </div>
                ))}
              </div>
              <div className={styles.allTags}>
                {allTags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
