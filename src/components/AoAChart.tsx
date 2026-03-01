'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ReferenceLine, ReferenceDot, Tooltip, ResponsiveContainer } from 'recharts'

const data = Array.from({ length: 17 }, (_, i) => {
  const x = (i - 2) * -1  // from +2 to -14
  const aoa = +(x / 48 * (180 / Math.PI)).toFixed(2)
  return { x: +x.toFixed(1), aoa }
}).reverse()

export default function AoAChart() {
  return (
    <div className="my-8 rounded-sm border p-6" style={{ background: '#ede6d6', borderColor: '#c8b89a' }}>
      <span className="font-mono text-xs tracking-widest uppercase block text-center mb-4"
            style={{ color: '#7a6a58' }}>
        Fig. 2 — Angle of Attack vs. Ball Position from Low Point · R = 48&quot;
      </span>
      <ResponsiveContainer width="100%" height={320}>
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
            label={{ value: 'Angle of Attack (°)', angle: -90, position: 'insideLeft', offset: 10, style: { fontFamily: 'serif', fontSize: 12, fill: '#7a6a58', fontStyle: 'italic' } }}
            tick={{ fontFamily: 'monospace', fontSize: 11, fill: '#3d3128' }}
            tickFormatter={v => `${v}°`}
          />
          <Tooltip
            formatter={(v: number) => [`${v}°`, 'AoA']}
            labelFormatter={l => `Ball pos: ${l}"`}
            contentStyle={{ fontFamily: 'monospace', fontSize: 12, background: '#1a1410', border: 'none', color: '#f5f0e8' }}
          />
          <ReferenceLine y={0} stroke="#2d5016" strokeWidth={1.5} strokeDasharray="4 3" label={{ value: 'Low Point', position: 'right', style: { fontSize: 10, fontFamily: 'monospace', fill: '#2d5016' } }} />
          <ReferenceDot x={-4} y={-4.77} r={6} fill="#8b1a1a" stroke="#f5f0e8" strokeWidth={1.5} label={{ value: 'Tour -4.8°', position: 'top', style: { fontSize: 10, fontFamily: 'monospace', fill: '#8b1a1a' } }} />
          <ReferenceDot x={-8.38} y={-10} r={5} fill="#b8860b" stroke="#f5f0e8" strokeWidth={1.5} label={{ value: '-10° AoA', position: 'right', style: { fontSize: 10, fontFamily: 'monospace', fill: '#b8860b' } }} />
          <Line
            type="linear"
            dataKey="aoa"
            stroke="#8b1a1a"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 4, fill: '#8b1a1a' }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-center font-mono text-xs mt-2" style={{ color: '#7a6a58' }}>
        Slope = 1/R = 1.19°/inch — constant throughout the impact zone
      </p>
    </div>
  )
}
