import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './ValueCard.module.css'

export default function ValueCard({ emoji, title, summary, story }) {
  const [modalOpen, setModalOpen] = useState(false)

  // Lock body scroll while modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  // Close on Escape key
  useEffect(() => {
    if (!modalOpen) return
    const handler = (e) => { if (e.key === 'Escape') setModalOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [modalOpen])

  return (
    <>
      {/* ── CARD (fixed size) ── */}
      <button
        className={styles.card}
        onClick={() => setModalOpen(true)}
        aria-label={`Learn more about ${title}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <div className={styles.title}>{title}</div>
        <div className={styles.summary}>{summary}</div>
        <span className={styles.readMore}>Read story →</span>
      </button>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {modalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
            />

            {/* Centering wrapper — flex does the centering, Framer only animates opacity+scale */}
            <div className={styles.modalWrapper}>
              <motion.div
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-label={title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onClick={e => e.stopPropagation()}
              >
                <div className={styles.modalHeader}>
                  <div className={styles.modalTitle}>
                    <span>{emoji}</span> {title}
                  </div>
                  <button className={styles.close} onClick={() => setModalOpen(false)} aria-label="Close">✕</button>
                </div>

                <div className={styles.modalBody}>
                  <div className={styles.row}>
                    <span className={styles.rowLabel}>🔴 The Problem</span>
                    <p>{story.problem}</p>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.rowLabel}>🔵 What I Did</span>
                    <p>{story.action}</p>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.rowLabel}>🟢 Outcome</span>
                    <p><strong>{story.outcome}</strong></p>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
