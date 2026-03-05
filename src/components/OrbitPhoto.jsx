import { useEffect, useRef } from 'react'
import styles from './OrbitPhoto.module.css'
import profilePhoto from '../images/profile_photo.png'

const ICONS = [
  { emoji: '☕', label: 'Java' },
  { emoji: '🌿', label: 'Spring' },
  { emoji: '⚛️', label: 'React' },
  { emoji: '🔷', label: 'Angular' },
  { emoji: '☁️', label: 'AWS' },
  { emoji: '🐳', label: 'Docker' },
  { emoji: '⚡', label: 'Kafka' },
  { emoji: '🗄️', label: 'MySQL' },
  { emoji: '🔐', label: 'OAuth2' },
  { emoji: '🔧', label: 'Jenkins' },
]

export default function OrbitPhoto() {
  const wrapRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const cx = 150, cy = 150
    const radii = [110, 150]

    ICONS.forEach((ic, i) => {
      const r = i < 6 ? radii[0] : radii[1]
      const total = i < 6 ? 6 : 4
      const idx = i < 6 ? i : i - 6
      const angle = (idx / total) * 2 * Math.PI - Math.PI / 2
      const x = cx + r * Math.cos(angle) - 20
      const y = cy + r * Math.sin(angle) - 20
      const el = document.createElement('div')
      el.className = styles.icon
      el.title = ic.label
      el.textContent = ic.emoji
      el.style.left = x + 'px'
      el.style.top = y + 'px'
      wrap.appendChild(el)
    })

    return () => {
      wrap.querySelectorAll(`.${styles.icon}`).forEach(e => e.remove())
    }
  }, [])

  return (
    <div className={styles.wrap} ref={wrapRef} aria-hidden="true">
      <div className={styles.ring1} />
      <div className={styles.ring2} />
      <div className={styles.photo}>
        <img
          src={profilePhoto}
          alt="Tanzeem Alam"
          width={150} height={150}
          onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex' }}
        />
        <div className={styles.fallback}>🧑‍💻</div>
      </div>
    </div>
  )
}
