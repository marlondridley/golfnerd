'use client'
import { BlockMath, InlineMath } from 'react-katex'

interface EquationBlockProps {
  num: number
  label: string
  attribution: string
  latex: string
  explanation: string
  vars?: { sym: string; def: string }[]
}

export default function EquationBlock({
  num, label, attribution, latex, explanation, vars = []
}: EquationBlockProps) {
  return (
    <div className="relative rounded-sm overflow-hidden my-8" style={{ background: '#1a1410' }}>
      {/* Top gradient bar */}
      <div className="h-0.5 w-full" style={{
        background: 'linear-gradient(90deg, #8b1a1a, #b8860b, #4a7c2f)'
      }} />
      <div className="px-8 py-6">
        {/* Header */}
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#b8860b' }}>
            Eq. {num}
          </span>
          <span className="font-mono text-xs tracking-wider" style={{ color: '#7a6a58' }}>—</span>
          <span className="font-mono text-xs tracking-wide" style={{ color: '#c0b090' }}>{label}</span>
          <span className="font-mono text-xs italic ml-auto" style={{ color: '#5a4a38' }}>
            {attribution}
          </span>
        </div>

        {/* KaTeX rendered equation */}
        <div className="eq-dark text-center py-4 overflow-x-auto">
          <BlockMath math={latex} />
        </div>

        {/* Explanation */}
        <p className="text-sm italic leading-relaxed mt-4" style={{ color: '#c0b090', fontFamily: 'var(--font-source-serif)' }}>
          {explanation}
        </p>

        {/* Variables */}
        {vars.length > 0 && (
          <div className="mt-5 pt-4 border-t" style={{ borderColor: 'rgba(200,184,154,0.2)' }}>
            <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: '#7a6a58' }}>
              Variables
            </span>
            <div className="grid gap-y-2">
              {vars.map((v, i) => (
                <div key={i} className="flex gap-4">
                  <span className="font-mono text-sm shrink-0 w-32" style={{ color: '#d4a017' }}>
                    <InlineMath math={v.sym} />
                  </span>
                  <span className="text-sm" style={{ color: '#b0a080', fontFamily: 'var(--font-source-serif)' }}>
                    {v.def}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
