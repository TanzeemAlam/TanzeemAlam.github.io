import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import PageWrapper from '../components/PageWrapper'
import { projects } from '../data/content'
import styles from './ProjectDetail.module.css'

/* ── Interactive HLD Diagram ── */
function HLDViewer({ nodes, image }) {
  const [selected, setSelected] = useState(null)
  const sel = nodes.find(n => n.id === selected)

  return (
    <div className={styles.hldWrap}>
      <div className={styles.hldTop}>
        {/* Diagram image with clickable overlay nodes */}
        <div className={styles.hldDiagram}>
          <img src={image} alt="High-level architecture diagram" className={styles.hldImg} />
          {/* Clickable node buttons positioned over diagram */}
          <div className={styles.hldOverlay}>
            {nodes.map(node => (
              <button
                key={node.id}
                className={`${styles.hldNode} ${selected === node.id ? styles.hldNodeActive : ''}`}
                style={{ left: `${node.x}%`, top: `${node.y}%`, '--node-color': node.color }}
                onClick={() => setSelected(selected === node.id ? null : node.id)}
                title={node.label}
              >
                {node.label}
              </button>
            ))}
          </div>
        </div>

        {/* Info panel */}
        <AnimatePresence mode="wait">
          {sel ? (
            <motion.div
              key={sel.id}
              className={styles.hldPanel}
              style={{ borderColor: sel.color, boxShadow: `4px 4px 0 ${sel.color}` }}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: .2 }}
            >
              <div className={styles.hldPanelHeader} style={{ background: sel.color }}>
                {sel.label}
                <button onClick={() => setSelected(null)} className={styles.hldClose}>✕</button>
              </div>
              <p className={styles.hldDesc}>{sel.desc}</p>
            </motion.div>
          ) : (
            <motion.div
              className={styles.hldHint}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span>👆</span>
              <p>Click any service node on the diagram to see what it does and why it was chosen.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ── Code Snippet ── */
function CodeBlock({ title, description, lang, code }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={styles.snippet}>
      <div className={styles.snippetHeader}>
        <div>
          <div className={styles.snippetTitle}>{title}</div>
          <div className={styles.snippetDesc}>{description}</div>
        </div>
        <button onClick={copy} className={styles.copyBtn}>
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <SyntaxHighlighter
        language={lang}
        style={vscDarkPlus}
        customStyle={{ margin: 0, borderRadius: 0, fontSize: '.78rem', lineHeight: 1.6, border: 'none' }}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

/* ── Main Page ── */
export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  const [activeTab, setActiveTab] = useState('diagram')

  if (!project) return (
    <PageWrapper>
      <div className={`section ${styles.notFound}`}>
        <h2>Project not found</h2>
        <Link to="/projects" className="btn btn-yellow">← Back to Projects</Link>
      </div>
    </PageWrapper>
  )

  const tabs = [
    { id: 'diagram',  label: '🗺 Architecture' },
    { id: 'study',    label: '📝 Case Study' },
    { id: 'code',     label: '💻 Code Snippets' },
  ]

  return (
    <PageWrapper>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerMeta}>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.subtitle}>{project.subtitle}</p>
            <div className={styles.tags}>
              {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
          <div className={styles.headerActions}>
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-yellow">GitHub ↗</a>
            <span className={styles.statusBadge}>✓ Complete</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabBar}>
        <div className={styles.tabInner}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className={`section ${styles.content}`}>
        <div className={styles.contentInner}>

          <AnimatePresence mode="wait">

            {/* ── ARCHITECTURE TAB ── */}
            {activeTab === 'diagram' && (
              <motion.div key="diagram" initial={{ opacity:0,y:12 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0 }} transition={{ duration:.25 }}>
                <p className={styles.tabIntro}>
                  An event-driven microservices platform. Services communicate via Kafka — no synchronous inter-service calls. Click any node to understand its role and design rationale.
                </p>
                <HLDViewer nodes={project.hldNodes} image={project.hldImage} />
              </motion.div>
            )}

            {/* ── CASE STUDY TAB ── */}
            {activeTab === 'study' && (
              <motion.div key="study" initial={{ opacity:0,y:12 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0 }} transition={{ duration:.25 }}>
                <div className={styles.caseStudy}>
                  <div className={styles.problem}>
                    <div className={styles.caseLabel}>🔴 The Problem</div>
                    <p>{project.caseStudy.problem}</p>
                  </div>

                  <div className={styles.caseLabel} style={{ marginBottom: '1rem' }}>🔵 Key Engineering Decisions</div>
                  {project.caseStudy.decisions.map((d, i) => (
                    <details key={i} className={styles.decision}>
                      <summary className={styles.decisionTitle}>{d.title}</summary>
                      <p className={styles.decisionBody}>{d.body}</p>
                    </details>
                  ))}

                  <div className={styles.outcomes}>
                    <div className={styles.caseLabel} style={{ marginBottom: '1.2rem' }}>🟢 Outcomes</div>
                    <div className={styles.metricsGrid}>
                      {project.caseStudy.outcomes.map(o => (
                        <div key={o.label} className={styles.metric}>
                          <div className={styles.metricNum}>{o.metric}</div>
                          <div className={styles.metricLabel}>{o.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── CODE SNIPPETS TAB ── */}
            {activeTab === 'code' && (
              <motion.div key="code" initial={{ opacity:0,y:12 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0 }} transition={{ duration:.25 }}>
                <p className={styles.tabIntro}>Real production code from this project. These aren't toy examples — they reflect actual patterns used in the system.</p>
                <div className={styles.snippetList}>
                  {project.snippets.map((s, i) => <CodeBlock key={i} {...s} />)}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </PageWrapper>
  )
}
