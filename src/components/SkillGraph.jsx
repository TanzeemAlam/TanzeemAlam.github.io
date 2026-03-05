import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './SkillGraph.module.css'

/* Static node positions — matching the original draw.io layout */
const NODES = [
  /* ── HUB NODES ── */
  { id: 'backend',  label: 'Backend',       x: 340, y: 270, r: 58, hub: true,  color: '#f5c800', textColor: '#78350f', sub: 'Java · Spring · API',   years: null },
  { id: 'frontend', label: 'Frontend',      x: 930, y: 270, r: 58, hub: true,  color: '#a5f3fc', textColor: '#155e75', sub: 'Angular · React · TS',   years: null },
  { id: 'cloud',    label: 'Cloud & DevOps',x: 200, y: 660, r: 56, hub: true,  color: '#bbf7d0', textColor: '#14532d', sub: 'AWS · Docker · K8s',     years: null },
  { id: 'arch',     label: 'Architecture',  x: 940, y: 660, r: 56, hub: true,  color: '#e9d5ff', textColor: '#581c87', sub: 'Design · Kafka · Agile',  years: null },

  /* ── BACKEND SKILLS ── */
  { id: 'java',      label: 'Java 17',       x: 195, y: 148, r: 34, color: '#fef9c3', textColor: '#0a0a0a', years: 6 },
  { id: 'spring',    label: 'Spring Boot',   x: 340, y: 105, r: 36, color: '#fef9c3', textColor: '#0a0a0a', years: 6 },
  { id: 'api',       label: 'REST APIs',     x: 480, y: 148, r: 32, color: '#fef9c3', textColor: '#0a0a0a', years: 6 },
  { id: 'oauth',     label: 'OAuth2/JWT',    x: 520, y: 290, r: 30, color: '#fef9c3', textColor: '#0a0a0a', years: 4 },
  { id: 'security',  label: 'Spring Security',   x: 380, y: 390, r: 38, color: '#fef9c3', textColor: '#0a0a0a', years: 5 },
  { id: 'jpa',       label: 'Spring JPA',   x: 200, y: 360, r: 28, color: '#fef9c3', textColor: '#0a0a0a', years: 5 },
  { id: 'threads',   label: 'Multithreading',x:140, y: 250, r: 38, color: '#fef9c3', textColor: '#0a0a0a', years: 4 },

  /* ── FRONTEND SKILLS ── */
  { id: 'react',     label: 'React.js',      x: 790, y: 130, r: 32, color: '#cffafe', textColor: '#0a0a0a', years: 3 },
  { id: 'angular',   label: 'Angular',       x: 930, y: 100, r: 34, color: '#cffafe', textColor: '#0a0a0a', years: 4 },
  { id: 'ts',        label: 'TypeScript',    x:1065, y: 148, r: 30, color: '#cffafe', textColor: '#0a0a0a', years: 4 },
  { id: 'node',      label: 'Node.js',       x:1120, y: 290, r: 28, color: '#cffafe', textColor: '#0a0a0a', years: 2 },
  { id: 'js',        label: 'JavaScript',    x:1065, y: 390, r: 30, color: '#cffafe', textColor: '#0a0a0a', years: 5 },
  { id: 'css',       label: 'HTML/CSS',      x: 790, y: 390, r: 28, color: '#cffafe', textColor: '#0a0a0a', years: 6 },

  /* ── CLOUD SKILLS ── */
  { id: 'aws',       label: 'AWS',           x:  90, y: 560, r: 32, color: '#dcfce7', textColor: '#0a0a0a', years: 4 },
  { id: 'docker',    label: 'Docker',        x:  55, y: 680, r: 30, color: '#dcfce7', textColor: '#0a0a0a', years: 4 },
  { id: 'k8s',       label: 'Kubernetes',    x: 110, y: 800, r: 30, color: '#dcfce7', textColor: '#0a0a0a', years: 3 },
  { id: 'jenkins',   label: 'Jenkins',       x: 260, y: 810, r: 28, color: '#dcfce7', textColor: '#0a0a0a', years: 4 },
  { id: 'azure',     label: 'Azure',         x: 340, y: 740, r: 28, color: '#dcfce7', textColor: '#0a0a0a', years: 3 },
  { id: 'cwatch',    label: 'CloudWatch',    x: 340, y: 590, r: 30, color: '#dcfce7', textColor: '#0a0a0a', years: 3 },

  /* ── ARCHITECTURE SKILLS ── */
  { id: 'kafka',     label: 'Kafka',         x:1100, y: 540, r: 32, color: '#f3e8ff', textColor: '#0a0a0a', years: 4 },
  { id: 'micro',     label: 'Microservices', x:750, y: 700, r: 34, color: '#f3e8ff', textColor: '#0a0a0a', years: 5 },
  { id: 'sysdesign', label: 'System Design',    x:1100, y: 800, r: 36, color: '#f3e8ff', textColor: '#0a0a0a', years: 5 },
  { id: 'hld',       label: 'HLD/LLD',       x: 960, y: 800, r: 28, color: '#f3e8ff', textColor: '#0a0a0a', years: 4 },
  { id: 'agile',     label: 'Agile/Scrum',   x: 800, y: 760, r: 28, color: '#f3e8ff', textColor: '#0a0a0a', years: 6 },
  { id: 'mysql',     label: 'MySQL',         x: 740, y: 600, r: 28, color: '#f3e8ff', textColor: '#0a0a0a', years: 6 },
  { id: 'pg',        label: 'PostgreSQL',    x: 820, y: 550, r: 28, color: '#f3e8ff', textColor: '#0a0a0a', years: 3 },
]

/* Edges: [from, to] */
const EDGES = [
  // Backend hub
  ['backend','java'],['backend','spring'],['backend','api'],
  ['backend','oauth'],['backend','security'],['backend','jpa'],['backend','threads'],
  // Frontend hub
  ['frontend','react'],['frontend','angular'],['frontend','ts'],
  ['frontend','node'],['frontend','js'],['frontend','css'],
  // Cloud hub
  ['cloud','aws'],['cloud','docker'],['cloud','k8s'],
  ['cloud','jenkins'],['cloud','azure'],['cloud','cwatch'],
  // Arch hub
  ['arch','kafka'],['arch','micro'],['arch','sysdesign'],
  ['arch','hld'],['arch','agile'],['arch','mysql'],['arch','pg'],
  // Cross-hub
  ['backend','micro'],['backend','kafka'],
  ['cloud','micro'],['frontend','ts'],
]

const nodeMap = Object.fromEntries(NODES.map(n => [n.id, n]))

export default function SkillGraph() {
  const [hovered, setHovered] = useState(null)

  const hoveredNode = hovered ? nodeMap[hovered] : null

  return (
    <div className={styles.wrap}>
      <div className={styles.svgContainer}>
        <svg
          viewBox="0 0 1300 870"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svg}
          aria-label="Interactive skill network diagram"
          role="img"
        >
          {/* Zone backgrounds */}
          <rect x="60"  y="60"  width="570" height="430" rx="0" fill="#fffbeb" stroke="#0a0a0a" strokeWidth="2" opacity="0.6"/>
          <rect x="670" y="60"  width="570" height="430" rx="0" fill="#ecfeff" stroke="#0a0a0a" strokeWidth="2" opacity="0.6"/>
          <rect x="20"  y="500" width="430" height="350" rx="0" fill="#f0fdf4" stroke="#0a0a0a" strokeWidth="2" opacity="0.6"/>
          <rect x="700" y="500" width="560" height="350" rx="0" fill="#faf5ff" stroke="#0a0a0a" strokeWidth="2" opacity="0.6"/>

          {/* Zone labels */}
          <text x="80"  y="90"  fontFamily="Bebas Neue,sans-serif" fontSize="13" fill="#0a0a0a" letterSpacing="2">BACKEND</text>
          <text x="690" y="90"  fontFamily="Bebas Neue,sans-serif" fontSize="13" fill="#0a0a0a" letterSpacing="2">FRONTEND</text>
          <text x="40"  y="518" fontFamily="Bebas Neue,sans-serif" fontSize="13" fill="#0a0a0a" letterSpacing="2">CLOUD & DEVOPS</text>
          <text x="720" y="518" fontFamily="Bebas Neue,sans-serif" fontSize="13" fill="#0a0a0a" letterSpacing="2">ARCHITECTURE</text>

          {/* Edges */}
          {EDGES.map(([a, b]) => {
            const na = nodeMap[a], nb = nodeMap[b]
            if (!na || !nb) return null
            const isHighlighted = hovered === a || hovered === b
            return (
              <line
                key={`${a}-${b}`}
                x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                stroke={isHighlighted ? '#0a0a0a' : '#c8ccd4'}
                strokeWidth={isHighlighted ? 2 : 1}
                opacity={hovered && !isHighlighted ? 0.2 : 1}
                style={{ transition: 'all 0.2s' }}
              />
            )
          })}

          {/* Nodes */}
          {NODES.map(node => {
            const isHovered = hovered === node.id
            const isConnected = hovered && EDGES.some(([a, b]) => (a === hovered && b === node.id) || (b === hovered && a === node.id))
            const isDimmed = hovered && !isHovered && !isConnected

            return (
              <g
                key={node.id}
                style={{ cursor: 'default' }}
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <circle
                  cx={node.x} cy={node.y}
                  r={isHovered ? node.r * 1.18 : node.r}
                  fill={node.color}
                  stroke="#0a0a0a"
                  strokeWidth={isHovered ? 3 : node.hub ? 2.5 : 1.8}
                  opacity={isDimmed ? 0.25 : 1}
                  style={{ transition: 'all 0.18s', filter: isHovered ? 'drop-shadow(3px 3px 0 rgba(0,0,0,0.25))' : 'none' }}
                />
                <text
                  x={node.x} y={node.hub ? node.y - 6 : node.y}
                  textAnchor="middle"
                  dominantBaseline={node.hub ? 'auto' : 'middle'}
                  fontFamily="DM Sans,sans-serif"
                  fontSize={node.hub ? (isHovered ? 14 : 12) : (isHovered ? 11 : 9.5)}
                  fontWeight={node.hub ? '700' : isHovered ? '700' : '500'}
                  fill={node.textColor}
                  opacity={isDimmed ? 0.25 : 1}
                  style={{ transition: 'all 0.18s', pointerEvents: 'none' }}
                >
                  {node.label}
                </text>
                {node.hub && node.sub && (
                  <text
                    x={node.x} y={node.y + 10}
                    textAnchor="middle"
                    fontFamily="DM Sans,sans-serif"
                    fontSize="8"
                    fill="#0a0a0a"
                    opacity={isDimmed ? 0.2 : 0.65}
                    style={{ pointerEvents: 'none' }}
                  >
                    {node.sub}
                  </text>
                )}
              </g>
            )
          })}

          {/* Tooltip anchored directly to the node's SVG coordinates */}
          {hoveredNode && !hoveredNode.hub && hoveredNode.years !== null && (() => {
            // Position tooltip above the node; flip below if near top edge
            const tipY = hoveredNode.y - hoveredNode.r - 8
            const tipX = hoveredNode.x
            const above = tipY > 50  // enough room above
            const ty = above ? tipY - 36 : hoveredNode.y + hoveredNode.r + 8
            return (
              <g transform={`translate(${tipX}, ${ty})`} style={{ pointerEvents: 'none' }}>
                {/* Shadow rect */}
                <rect x="-62" y="-2" width="124" height="38" fill="#0a0a0a"/>
                {/* Main rect */}
                <rect x="-64" y="-4" width="124" height="38" fill="#f5c800" stroke="#0a0a0a" strokeWidth="2"/>
                <text x="0" y="10" textAnchor="middle" fontFamily="Bebas Neue,sans-serif" fontSize="12" fill="#0a0a0a" letterSpacing="1">
                  {hoveredNode.label}
                </text>
                <text x="0" y="26" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="10" fontWeight="600" fill="#0a0a0a">
                  {hoveredNode.years} yr{hoveredNode.years !== 1 ? 's' : ''} experience
                </text>
              </g>
            )
          })()}
        </svg>
      </div>
      <p className={styles.hint}>Hover any skill node to see years of experience</p>
    </div>
  )
}
