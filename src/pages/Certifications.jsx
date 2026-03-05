import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { certifications } from '../data/content'
import styles from './Gallery.module.css'

export default function Certifications() {
  return (
    <PageWrapper>
      <section className={`section ${styles.wrap}`}>
        <div className={styles.inner}>
          <div className="section-tag">Certifications</div>
          <h1 className={styles.heading}>Credentials</h1>
          <p className={styles.sub}>Microsoft Azure certifications earned through dedicated self-study alongside full-time engineering work.</p>

          <div className={styles.grid}>
            {certifications.map((c, i) => (
              <motion.div
                key={c.id}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Certificate photo */}
                <div className={styles.photoWrap}>
                  {c.photo
                    ? <img src={c.photo} alt={`${c.title} certificate`} className={styles.photo} />
                    : <div className={styles.photoPlaceholder}>📜</div>
                  }
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.certCode}>{c.code}</div>
                  <div className={styles.cardTitle}>{c.title}</div>
                  <div className={styles.cardOrg}>{c.issuer} · {c.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
