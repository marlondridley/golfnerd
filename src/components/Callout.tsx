interface CalloutProps {
  label: string
  variant?: 'gold' | 'red' | 'green'
  children: React.ReactNode
}

export default function Callout({ label, variant = 'gold', children }: CalloutProps) {
  const colors = {
    gold:  { border: '#b8860b', bg: 'rgba(184,134,11,0.06)',  tag: '#b8860b'  },
    red:   { border: '#8b1a1a', bg: 'rgba(139,26,26,0.06)',   tag: '#8b1a1a'  },
    green: { border: '#2d5016', bg: 'rgba(45,80,22,0.06)',    tag: '#2d5016'  },
  }
  const c = colors[variant]

  return (
    <div className="relative my-8 rounded-sm p-6"
         style={{ border: `1px solid ${c.border}`, background: c.bg }}>
      <span
        className="absolute -top-[9px] left-4 px-2 font-mono text-xs tracking-widest uppercase"
        style={{ background: '#f5f0e8', color: c.tag }}
      >
        {label}
      </span>
      <div className="text-sm leading-relaxed space-y-2"
           style={{ color: '#3d3128', fontFamily: 'var(--font-source-serif)' }}>
        {children}
      </div>
    </div>
  )
}
