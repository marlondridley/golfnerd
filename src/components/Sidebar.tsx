'use client'
import { useEffect, useState } from 'react'
import { CHAPTERS } from '@/lib/physics-data'

export default function Sidebar() {
  const [active, setActive] = useState('intro')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    CHAPTERS.forEach(c => {
      const el = document.getElementById(c.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <nav className="sticky top-8 w-56 shrink-0 hidden xl:block">
      <div className="font-mono text-xs tracking-widest uppercase mb-4"
           style={{ color: '#7a6a58' }}>
        Contents
      </div>
      <ul className="space-y-0.5">
        {CHAPTERS.map(c => (
          <li key={c.id}>
            <a
              href={`#${c.id}`}
              className={`
                flex gap-2 items-start py-1.5 px-3 text-xs leading-snug
                border-l-2 transition-all duration-200 hover:border-l-red-800
                ${active === c.id ? 'nav-active font-semibold' : 'border-l-transparent'}
              `}
              style={{
                color: active === c.id ? '#8b1a1a' : '#7a6a58',
                fontFamily: 'var(--font-source-serif)',
              }}
            >
              <span className="font-mono shrink-0 text-xs opacity-60 w-6">{c.num}</span>
              <span>{c.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
