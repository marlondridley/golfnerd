interface CalcItem {
  label: string
  value: string
  note?: string
}

interface PhysicistBoxProps {
  heading: string
  intro?: string
  items: CalcItem[]
}

export default function PhysicistBox({ heading, intro, items }: PhysicistBoxProps) {
  return (
    <div className="relative my-8 rounded-sm overflow-hidden" style={{ background: '#1a1410' }}>
      <div className="h-0.5 w-full"
           style={{ background: 'linear-gradient(90deg, #b8860b, #8b1a1a, #b8860b)' }} />
      <div className="px-8 py-6">
        <span className="font-mono text-xs tracking-widest uppercase block mb-3"
              style={{ color: '#b8860b' }}>
          {heading}
        </span>
        {intro && (
          <p className="text-sm mb-4 italic" style={{ color: '#c0b090', fontFamily: 'var(--font-source-serif)' }}>
            {intro}
          </p>
        )}
        <ul className="divide-y" style={{ borderColor: 'rgba(200,184,154,0.15)' }}>
          {items.map((item, i) => (
            <li key={i} className="flex items-center justify-between gap-4 py-3">
              <span className="font-mono text-xs" style={{ color: '#b0a080' }}>{item.label}</span>
              <div className="text-right">
                <span className="font-mono text-sm font-semibold" style={{ color: '#d4a017' }}>
                  {item.value}
                </span>
                {item.note && (
                  <span className="block font-mono text-xs" style={{ color: '#5a4a38' }}>
                    {item.note}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
