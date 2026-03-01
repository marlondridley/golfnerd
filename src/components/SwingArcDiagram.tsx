export default function SwingArcDiagram() {
  return (
    <div className="my-8 rounded-sm border p-6" style={{ background: '#ede6d6', borderColor: '#c8b89a' }}>
      <span className="font-mono text-xs tracking-widest uppercase block text-center mb-4"
            style={{ color: '#7a6a58' }}>
        Fig. 1 — Circular Swing Arc · Geometry of the Impact Zone
      </span>
      <svg viewBox="0 0 820 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <rect width="820" height="420" fill="#ede6d6"/>
        <line x1="60" y1="310" x2="760" y2="310" stroke="#7a6a58" strokeWidth="2"/>
        <text x="770" y="314" fontFamily="monospace" fontSize="11" fill="#7a6a58">ground</text>
        <rect x="60" y="310" width="700" height="20" fill="rgba(45,80,22,0.12)"/>
        <path d="M 130 310 Q 410 190 690 310" fill="none" stroke="#8b1a1a" strokeWidth="2.5" strokeDasharray="8,4"/>
        <line x1="410" y1="70" x2="410" y2="310" stroke="#b8860b" strokeWidth="1.5" strokeDasharray="5,3"/>
        <text x="418" y="196" fontFamily="serif" fontStyle="italic" fontSize="14" fill="#b8860b">R ≈ 48&quot;</text>
        <circle cx="410" cy="62" r="10" fill="#1a1410" stroke="#b8860b" strokeWidth="2"/>
        <text x="424" y="60" fontFamily="monospace" fontSize="11" fill="#1a1410">Hub (lead shoulder)</text>
        <text x="424" y="74" fontFamily="monospace" fontSize="10" fill="#7a6a58">center of rotation</text>
        <line x1="410" y1="300" x2="410" y2="320" stroke="#2d5016" strokeWidth="2"/>
        <circle cx="410" cy="310" r="5" fill="#2d5016"/>
        <text x="390" y="340" fontFamily="monospace" fontSize="11" fill="#2d5016" textAnchor="middle">Low Point</text>
        <text x="390" y="353" fontFamily="monospace" fontSize="10" fill="#7a6a58" textAnchor="middle">AoA = 0°</text>
        <circle cx="362" cy="308" r="8" fill="#f5f0e8" stroke="#1a1410" strokeWidth="2"/>
        <text x="345" y="345" fontFamily="serif" fontSize="12" fill="#1a1410" textAnchor="middle">Ball</text>
        <text x="345" y="358" fontFamily="monospace" fontSize="10" fill="#7a6a58" textAnchor="middle">x = -4&quot;</text>
        <line x1="310" y1="282" x2="383" y2="315" stroke="#8b1a1a" strokeWidth="2.5" markerEnd="url(#arr-red)"/>
        <text x="272" y="272" fontFamily="serif" fontStyle="italic" fontSize="13" fill="#8b1a1a">clubhead velocity</text>
        <path d="M 380 310 A 20 20 0 0 0 368 293" fill="none" stroke="#8b1a1a" strokeWidth="1.5"/>
        <text x="348" y="295" fontFamily="monospace" fontSize="12" fill="#8b1a1a">-4.8°</text>
        <text x="332" y="307" fontFamily="monospace" fontSize="10" fill="#8b1a1a">AoA</text>
        <rect x="362" y="310" width="72" height="8" fill="rgba(45,80,22,0.4)" rx="1"/>
        <text x="398" y="334" fontFamily="monospace" fontSize="10" fill="#2d5016" textAnchor="middle">divot zone →</text>
        <line x1="362" y1="365" x2="410" y2="365" stroke="#b8860b" strokeWidth="1"/>
        <line x1="362" y1="360" x2="362" y2="370" stroke="#b8860b" strokeWidth="1"/>
        <line x1="410" y1="360" x2="410" y2="370" stroke="#b8860b" strokeWidth="1"/>
        <text x="386" y="380" fontFamily="monospace" fontSize="10" fill="#b8860b" textAnchor="middle">x ≈ 4 inches</text>
        <line x1="580" y1="50" x2="610" y2="50" stroke="#8b1a1a" strokeWidth="2" strokeDasharray="8,4"/>
        <text x="618" y="54" fontFamily="serif" fontSize="12" fill="#3d3128">Swing Arc Path</text>
        <line x1="580" y1="70" x2="610" y2="70" stroke="#b8860b" strokeWidth="1.5" strokeDasharray="5,3"/>
        <text x="618" y="74" fontFamily="serif" fontSize="12" fill="#3d3128">Swing Radius R</text>
        <circle cx="595" cy="90" r="5" fill="#f5f0e8" stroke="#1a1410" strokeWidth="1.5"/>
        <text x="618" y="94" fontFamily="serif" fontSize="12" fill="#3d3128">Golf Ball</text>
        <rect x="588" y="105" width="14" height="6" fill="rgba(45,80,22,0.4)"/>
        <text x="618" y="114" fontFamily="serif" fontSize="12" fill="#3d3128">Divot Zone</text>
        <defs>
          <marker id="arr-red" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#8b1a1a"/>
          </marker>
        </defs>
      </svg>
    </div>
  )
}
