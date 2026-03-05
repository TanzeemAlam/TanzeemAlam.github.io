import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { awards } from '../data/content'
import styles from './Gallery.module.css'

export default function Awards() {
  return (
    <PageWrapper>
      <section className={`section ${styles.wrap}`}>
        <div className={styles.inner}>
          <div className="section-tag">Awards & Honours</div>
          <h1 className={styles.heading}>Recognition</h1>
          <p className={styles.sub}>Awards received for engineering leadership, delivery excellence, and long-term commitment.</p>

          <div className={styles.grid}>
            {awards.map((a, i) => (
              <motion.div
                key={a.id}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * .08 }}
              >
                {/* Photo placeholder — replace with actual <img> when you have photos */}
                <div className={styles.photoWrap}>
                  {a.photo
                    ? <img src={a.photo} alt={a.title} className={styles.photo} />
                    : <div className={styles.photoPlaceholder}>🏆</div>
                  }
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardYear}>{a.year}</div>
                  <div className={styles.cardTitle}>{a.title}</div>
                  <div className={styles.cardOrg}>{a.org}</div>
                  <p className={styles.cardDesc}>{a.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
