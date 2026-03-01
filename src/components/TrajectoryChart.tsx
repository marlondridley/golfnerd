'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts'

// Parabolic trajectory: y = x·tan(LA) - gx²/(2v²cos²LA)
// Simplified: for carry C and peak H, use: y = 4H·x(C-x)/C²
function trajectory(carry: number, peak: number, steps = 60) {
  return Array.from({ length: steps + 1 }, (_, i) => {
    const x = (i / steps) * carry
    const y = Math.max(0, 4 * peak * x * (carry - x) / (carry * carry))
    return { x: +x.toFixed(1), y: +y.toFixed(1) }
  })
}

const t_shallow = trajectory(120, 72, 60)  // -2° AoA
const t_tour    = trajectory(128, 95, 60)  // -4.8° tour ★
const t_steep   = trajectory(121, 80, 60)  // -8° steep

// Merge into single dataset
const merged = t_tour.map((pt, i) => ({
  x: pt.x,
  tour:    pt.y,
  shallow: t_shallow[i]?.y ?? 0,
  steep:   t_steep[i]?.y  ?? 0,
}))

export default function TrajectoryChart() {
  return (
    <div className="my-8 rounded-sm border p-6" style={{ background: '#ede6d6', borderColor: '#c8b89a' }}>
      <span className="font-mono text-xs tracking-widest uppercase block text-center mb-4"
            style={{ color: '#7a6a58' }}>
        Fig. 4 — Ball Flight Trajectories by AoA · 48° Wedge · 85 mph · 6° Shaft Lean
      </span>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={merged} margin={{ top: 20, right: 30, left: 10, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#c8b89a" strokeOpacity={0.5} />
          <XAxis
            dataKey="x"
            label={{ value: 'Carry distance (yards)', position: 'insideBottom', offset: -15, style: { fontFamily: 'serif', fontSize: 12, fill: '#7a6a58', fontStyle: 'italic' } }}
            tick={{ fontFamily: 'monospace', fontSize: 11, fill: '#3d3128' }}
            tickFormatter={v => `${v}yd`}
          />
          <YAxis
            label={{ value: 'Height (feet)', angle: -90, position: 'insideLeft', offset: 10, style: { fontFamily: 'serif', fontSize: 12, fill: '#7a6a58', fontStyle: 'italic' } }}
            tick={{ fontFamily: 'monospace', fontSize: 11, fill: '#3d3128' }}
            tickFormatter={v => `${v}ft`}
          />
          <Tooltip
            contentStyle={{ fontFamily: 'monospace', fontSize: 11, background: '#1a1410', border: 'none', color: '#f5f0e8' }}
            formatter={(v: number, name: string) => [`${v}ft`, name === 'tour' ? '-4.8° ★' : name === 'shallow' ? '-2° (shallow)' : '-8° (steep)']}
            labelFormatter={l => `${l} yds`}
          />
          <Legend
            formatter={(val) => val === 'tour' ? '-4.8° AoA (tour ★)' : val === 'shallow' ? '-2° AoA (shallow)' : '-8° AoA (steep)'}
            wrapperStyle={{ fontFamily: 'monospace', fontSize: 11 }}
          />
          <Line type="monotone" dataKey="shallow" stroke="#b8860b" strokeWidth={1.5} strokeDasharray="6 4" dot={false} />
          <Line type="monotone" dataKey="tour"    stroke="#8b1a1a" strokeWidth={2.5} dot={false} />
          <Line type="monotone" dataKey="steep"   stroke="#7a6a58" strokeWidth={1.5} strokeDasharray="3 3" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
