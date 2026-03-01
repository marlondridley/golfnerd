'use client'
import { SPIN_MATRIX } from '@/lib/physics-data'

function spinColor(val: number): string {
  if (val >= 11000) return 'bg-red-700 text-white'
  if (val >= 10000) return 'bg-red-500 text-white'
  if (val >= 9000)  return 'bg-amber-600 text-white'
  if (val >= 8000)  return 'bg-amber-400 text-ink'
  if (val >= 7000)  return 'bg-yellow-200 text-ink'
  return 'bg-green-100 text-ink'
}

export default function SpinHeatmap() {
  return (
    <div className="my-8">
      <span className="font-mono text-xs tracking-widest uppercase block mb-2"
            style={{ color: '#7a6a58' }}>
        Table 2 — Backspin RPM Heatmap · 48° Wedge · 85 mph · AoA vs Shaft Lean
      </span>
      <div className="overflow-x-auto rounded-sm border" style={{ borderColor: '#c8b89a' }}>
        <table className="w-full text-xs font-mono">
          <thead>
            <tr>
              <th className="text-left px-3 py-3" style={{ minWidth: 160 }}>AoA ↓ / Lean →</th>
              {SPIN_MATRIX.leans.map(l => (
                <th key={l} className="text-center px-2 py-3" style={{ minWidth: 70 }}>{l}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SPIN_MATRIX.rows.map((row, ri) => (
              <tr key={ri} className={row.tour ? 'ring-2 ring-inset ring-red-800' : ''}>
                <td className="px-3 py-2 font-mono text-xs border-r" style={{ borderColor: '#c8b89a', color: row.tour ? '#8b1a1a' : '#3d3128', fontWeight: row.tour ? 700 : 400 }}>
                  {row.aoa}
                </td>
                {row.vals.map((v, vi) => (
                  <td key={vi} className={`text-center px-2 py-2 ${spinColor(v)}`}>
                    {v.toLocaleString()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap gap-3 mt-3">
        {[
          { color: 'bg-green-100', label: '< 7,000' },
          { color: 'bg-yellow-200', label: '7,000–8,000' },
          { color: 'bg-amber-400', label: '8,000–9,000' },
          { color: 'bg-amber-600 text-white', label: '9,000–10,000' },
          { color: 'bg-red-500 text-white', label: '10,000–11,000' },
          { color: 'bg-red-700 text-white', label: '11,000+' },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            <div className={`w-4 h-4 rounded-sm ${color}`} />
            <span className="font-mono text-xs" style={{ color: '#7a6a58' }}>{label} RPM</span>
          </div>
        ))}
      </div>
    </div>
  )
}
