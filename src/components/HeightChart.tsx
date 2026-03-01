'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ReferenceLine, ReferenceDot, Tooltip, ResponsiveContainer } from 'recharts'

const R = 48
const data = Array.from({ length: 26 }, (_, i) => {
  const x = -(i * 0.6)  // 0 to -15 in steps of 0.6
  const h = +(x * x / (2 * R)).toFixed(4)
  return { x: +x.toFixed(1), h }
})

export default function HeightChart() {
  return (
    <div className="my-8 rounded-sm border p-6" style={{ background: '#ede6d6', borderColor: '#c8b89a' }}>
      <span className="font-mono text-xs tracking-widest uppercase block text-center mb-4"
            style={{ color: '#7a6a58' }}>
        Fig. 7 — Clubhead Height h(x) = x²/2R · Parabolic Approximation · R = 48&quot;
      </span>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#c8b89a" strokeOpacity={0.5} />
          <XAxis
            dataKey="x"
            label={{ value: 'Ball position from Low Point (inches)', position: 'insideBottom', offset: -15, style: { fontFamily: 'serif', fontSize: 12, fill: '#7a6a58', fontStyle: 'italic' } }}
            tickFormatter={v => `${v}"`}
            tick={{ fontFamily: 'monospace', fontSize: 11, fill: '#3d3128' }}
            reversed
          />
          <YAxis
            label={{ value: 'Clubhead Height (inches)', angle: -90, position: 'insideLeft', offset: 10, style: { fontFamily: 'serif', fontSize: 12, fill: '#7a6a58', fontStyle: 'italic' } }}
            tick={{ fontFamily: 'monospace', fontSize: 11, fill: '#3d3128' }}
            tickFormatter={v => `${v}"`}
          />
          <Tooltip
            formatter={(v: number) => [`${v}"`, 'Height h']}
            labelFormatter={l => `Ball pos: ${l}"`}
            contentStyle={{ fontFamily: 'monospace', fontSize: 12, background: '#1a1410', border: 'none', color: '#f5f0e8' }}
          />
          <ReferenceDot x={-4} y={0.167} r={5} fill="#b8860b" stroke="#f5f0e8" strokeWidth={1.5}
            label={{ value: 'Tour: 0.17"', position: 'right', style: { fontSize: 10, fontFamily: 'monospace', fill: '#b8860b' } }} />
          <ReferenceDot x={-8.4} y={0.735} r={6} fill="#8b1a1a" stroke="#f5f0e8" strokeWidth={1.5}
            label={{ value: '-10°: 0.72"', position: 'right', style: { fontSize: 10, fontFamily: 'monospace', fill: '#8b1a1a' } }} />
          <Line
            type="monotone"
            dataKey="h"
            stroke="#8b1a1a"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 4, fill: '#8b1a1a' }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-center font-mono text-xs mt-2" style={{ color: '#7a6a58' }}>
        At −10° AoA (x = −8.3&quot;): h = (8.3)²/96 ≈ 0.72&quot; (18.3mm) above ground
      </p>
    </div>
  )
}
