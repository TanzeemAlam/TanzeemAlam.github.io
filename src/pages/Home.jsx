import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import OrbitPhoto from '../components/OrbitPhoto'
import SkillGraph from '../components/SkillGraph'
import ValueCard from '../components/ValueCard'
import ExpCard from '../components/ExpCard'
import { personal, values, experience, education, certifications, awards, projects } from '../data/content'
import styles from './Home.module.css'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: .45, delay, ease: 'easeOut' } },
})

export default function Home() {
  return (
    <PageWrapper>
      {/* ── HERO ── */}
      <section className={styles.hero} aria-label="Introduction">
        <div className={styles.heroText}>
          <motion.div className={styles.availability} {...fade(0)}>
            <span className={styles.dot} /> Open to Opportunities · {personal.location}
          </motion.div>
          <motion.h1 className={styles.h1} {...fade(.08)}>
            {personal.name.split(' ')[0]}<span className={styles.outline}>{personal.name.split(' ')[1]}</span>
          </motion.h1>
          <motion.div className={styles.heroRole} {...fade(.15)}>
            <strong>{personal.role}</strong>
            <span className={styles.sep}>·</span> Full-Stack Java &amp; Cloud
            <span className={styles.sep}>·</span> 6.8 Years
          </motion.div>
          <motion.p className={styles.heroBio} {...fade(.22)}>{personal.bio}</motion.p>
          <motion.div className={styles.ctas} {...fade(.3)}>
            <a href={`mailto:${personal.email}`} className="btn btn-black">✉ Get In Touch</a>
            <a href="#skills"      className="btn btn-yellow">Skills ↓</a>
            <a href="#experience"  className="btn btn-yellow">Experience ↓</a>
            <a href="#projects"    className="btn btn-yellow">Projects ↓</a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-white">LinkedIn ↗</a>
            <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-white">GitHub ↗</a>
            <a href={personal.leetcode} target="_blank" rel="noreferrer" className="btn btn-white">LeetCode ↗</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .55, delay: .1 }}>
          <OrbitPhoto />
        </motion.div>
      </section>

      {/* ── SKILLS ── */}
      <section className={`section ${styles.darkBg}`} id="skills" aria-label="Technical Skills">
        <div className={styles.sectionInner}>
          <div className="section-tag" style={{ color: 'var(--yellow)', borderColor: 'rgba(245,200,0,.4)' }}>Technical Stack</div>
          <SkillGraph />
        </div>
      </section>

      {/* ── ABOUT / WHO I AM ── */}
      <section className="section" id="about" aria-label="About Me">
        <div className={styles.sectionInner}>
          <div className="section-tag">Who I Am</div>

          {/* Two quote cards */}
          <div className={styles.quoteGrid}>
            <div className={styles.quoteCard} style={{ borderColor: 'var(--yellow)', boxShadow: '5px 5px 0 var(--yellow)' }}>
              <div className={styles.quoteMark}>"</div>
              <p className={styles.quoteText}>
                I value <em>simplicity in design</em> — I'd rather build a <em>solid modular monolith</em> than overengineer early. Strong fundamentals beat trendy architectures every time.
              </p>
            </div>
            <div className={styles.quoteCard} style={{ borderColor: '#4ade80', boxShadow: '5px 5px 0 #4ade80' }}>
              <div className={styles.quoteMark} style={{ color: 'rgba(74,222,128,.12)' }}>"</div>
              <p className={styles.quoteText}>
                I enjoy going to the <em style={{ color: '#16a34a' }}>gym</em> — it keeps me <em style={{ color: '#16a34a' }}>disciplined and mentally sharp</em>. The same consistency I bring to the bar, I bring to the codebase.
              </p>
            </div>
          </div>

          <p className={styles.valueHint}>Click any card below to see the real story behind each trait ↓</p>
          <div className={styles.valueGrid}>
            {values.map(v => <ValueCard key={v.title} {...v} />)}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className={`section ${styles.greyBg}`} id="experience" aria-label="Work Experience">
        <div className={styles.sectionInner}>
          <div className="section-tag">Work Experience</div>
          {experience.map(exp => <ExpCard key={exp.id} {...exp} />)}
        </div>
      </section>

      {/* ── PROJECTS PREVIEW ── */}
      <section className="section" id="projects" aria-label="Projects">
        <div className={styles.sectionInner}>
          <div className="section-tag">Projects</div>
          <div className={styles.projectGrid}>
            {projects.map(p => (
              <div key={p.slug} className={styles.projCard}>
                <div className={styles.projHeader}>
                  <div>
                    <div className={styles.projTitle}>{p.title}</div>
                    <div className={styles.projSub}>{p.subtitle}</div>
                  </div>
                  {p.status === 'wip' && <span className={styles.wip}>⚙ WIP</span>}
                </div>
                <p className={styles.projSummary}>{p.summary}</p>
                <div className={styles.projTags}>
                  {p.tags.slice(0,5).map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                {p.status === 'complete' && (
                  <div className={styles.projActions}>
                    <Link to={`/projects/${p.slug}`} className="btn btn-yellow">View Project →</Link>
                    <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-white">GitHub ↗</a>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/projects" className="btn btn-black">See All Projects →</Link>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className={`section ${styles.greyBg}`} id="education" aria-label="Education">
        <div className={styles.sectionInner}>
          <div className="section-tag">Education</div>
          <div className={styles.eduWrap}>
            {/* Timeline */}
            <div className={styles.timeline}>
              {education.milestones.map((m, i) => (
                <div key={i} className={styles.milestone}>
                  <div className={styles.milestoneYear}>{m.year}</div>
                  <div className={styles.milestoneDot} />
                  <div className={styles.milestoneLabel}>{m.label}</div>
                </div>
              ))}
            </div>
            {/* Edu card */}
            <div className={styles.eduCard}>
              <div className={styles.eduHeader}>
                <div>
                  <div className={styles.eduDegree}>{education.degree}</div>
                  <div className={styles.eduUni}>{education.university}</div>
                  <div className={styles.eduMeta}>{education.location} · {education.period} · Grade: {education.grade}</div>
                </div>
                <span className={styles.eduBadge}>{education.period.split('–')[1].trim()}</span>
              </div>
              <div className={styles.eduSubjects}>
                <div className={styles.eduSubLabel}>Relevant Coursework</div>
                <div className={styles.subjectTags}>
                  {education.subjects.map(s => <span key={s} className="tag">{s}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECOGNITION ── */}
      <section className="section" id="recognition" aria-label="Awards and Certifications">
        <div className={styles.sectionInner}>
          <div className="section-tag">Recognition</div>
          <div className={styles.recGrid}>
            {/* Awards */}
            <div className={styles.recCard}>
              <div className={styles.recHeader}>🏆 Awards</div>
              {awards.slice(0,2).map(a => (
                <div key={a.id} className={styles.recItem}>
                  <span className={styles.recEmoji}>🏆</span>
                  <div>
                    <div className={styles.recName}>{a.title}</div>
                    <div className={styles.recSub}>{a.org} · {a.year}</div>
                  </div>
                </div>
              ))}
              <div className={styles.recFooter}>
                <Link to="/awards" className="btn btn-white" style={{ fontSize: '.62rem' }}>See All Awards →</Link>
              </div>
            </div>
            {/* Certifications */}
            <div className={styles.recCard}>
              <div className={styles.recHeader}>📜 Certifications</div>
              {certifications.map(c => (
                <div key={c.id} className={styles.recItem}>
                  <span className={styles.recEmoji}>📜</span>
                  <div>
                    <div className={styles.recName}>{c.title}</div>
                    <div className={styles.recSub}>{c.issuer} · {c.date} · {c.code}</div>
                  </div>
                </div>
              ))}
              <div className={styles.recFooter}>
                <Link to="/certifications" className="btn btn-white" style={{ fontSize: '.62rem' }}>See All Certs →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className={`section ${styles.darkBg}`} id="contact" aria-label="Contact">
        <div className={styles.sectionInner}>
          <div className={styles.contactHeading}>
            LET'S<span className={styles.contactOutline}>TALK</span>
          </div>
          <p className={styles.contactSub}>Open to senior/staff engineering roles, architecture discussions, and interesting problems.</p>
          <div className={styles.contactLinks}>
            <a href={`mailto:${personal.email}`} className="btn btn-yellow">✉ Email Me</a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-white">LinkedIn ↗</a>
            <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-white">GitHub ↗</a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>© 2026 <strong>Tanzeem Alam</strong> · Delhi, India</div>
        <div>Hosted on <strong>Cloudflare</strong> ⚡</div>
      </footer>
    </PageWrapper>
  )
}
