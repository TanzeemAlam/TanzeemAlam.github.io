import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { projects } from '../data/content'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <PageWrapper>
      <section className={`section ${styles.wrap}`}>
        <div className={styles.inner}>
          <div className="section-tag">All Projects</div>
          <h1 className={styles.heading}>Things I've<span className={styles.outline}>Built</span></h1>
          <p className={styles.sub}>Production systems, not toy projects. Every project here was built to handle real load, real users, and real edge cases.</p>

          <div className={styles.grid}>
            {projects.map((p, i) => (
              <motion.div
                key={p.slug}
                className={styles.card}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * .1 }}
              >
                <div className={styles.cardHeader}>
                  <div>
                    <div className={styles.title}>{p.title}</div>
                    <div className={styles.subtitle}>{p.subtitle}</div>
                  </div>
                  {p.status === 'wip'
                    ? <span className={styles.wip}>⚙ In Progress</span>
                    : <span className={styles.done}>✓ Complete</span>
                  }
                </div>

                <p className={styles.summary}>{p.summary}</p>

                <div className={styles.tags}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>

                <div className={styles.actions}>
                  {p.status === 'complete'
                    ? <Link to={`/projects/${p.slug}`} className="btn btn-yellow">View Case Study →</Link>
                    : <span className={styles.wipNote}>Details coming soon</span>
                  }
                  <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-white">GitHub ↗</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
