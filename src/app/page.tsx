'use client'
import dynamic from 'next/dynamic'
import { InlineMath } from 'react-katex'
import Sidebar from '@/components/Sidebar'
import Callout from '@/components/Callout'
import EquationBlock from '@/components/EquationBlock'
import DataTable from '@/components/DataTable'
import PhysicistBox from '@/components/PhysicistBox'
import SpinHeatmap from '@/components/SpinHeatmap'
import SwingArcDiagram from '@/components/SwingArcDiagram'
import { EQUATIONS, AOA_TABLE, CARRY_MATRIX, FULL_MATRIX, HEIGHT_TABLE, MEGAPINCH_TABLE, REACTION_TABLE, PUTTER_TABLE } from '@/lib/physics-data'

// Charts are client-only (Recharts needs browser)
const AoAChart       = dynamic(() => import('@/components/AoAChart'),       { ssr: false })
const HeightChart    = dynamic(() => import('@/components/HeightChart'),     { ssr: false })
const TrajectoryChart= dynamic(() => import('@/components/TrajectoryChart'), { ssr: false })

const eq = (n: number) => EQUATIONS.find(e => e.num === n)!

const Divider = ({ symbol = '✦' }: { symbol?: string }) => (
  <div className="flex items-center gap-4 my-14" style={{ color: '#c8b89a' }}>
    <div className="flex-1 h-px" style={{ background: '#c8b89a' }} />
    <span style={{ fontFamily: 'var(--font-playfair)', fontSize: 22, color: '#b8860b' }}>{symbol}</span>
    <div className="flex-1 h-px" style={{ background: '#c8b89a' }} />
  </div>
)

const ChapterLabel = ({ num }: { num: string }) => (
  <span className="font-mono text-xs tracking-widest uppercase block mb-1.5" style={{ color: '#8b1a1a' }}>
    Chapter {num}
  </span>
)

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="pb-3 mb-6 text-4xl font-bold leading-tight"
      style={{ fontFamily: 'var(--font-playfair)', color: '#1a1410', borderBottom: '2px solid #c8b89a' }}>
    {children}
  </h2>
)

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xl font-bold italic mt-10 mb-3" style={{ fontFamily: 'var(--font-playfair)', color: '#8b1a1a' }}>
    {children}
  </h3>
)

const P = ({ children, indent = false }: { children: React.ReactNode; indent?: boolean }) => (
  <p className={`mb-4 leading-relaxed ${indent ? 'text-indent' : ''}`}
     style={{ color: '#3d3128', fontFamily: 'var(--font-source-serif)', fontSize: 17, lineHeight: 1.8 }}>
    {children}
  </p>
)

export default function Home() {
  return (
    <div className="relative z-10">
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="flex gap-12">

          {/* ── SIDEBAR ── */}
          <Sidebar />

          {/* ── MAIN CONTENT ── */}
          <main className="flex-1 min-w-0">

            {/* MASTHEAD */}
            <header className="pt-10 pb-6 mb-0 text-center border-b-2" style={{ borderBottomColor: '#8b1a1a', borderBottomStyle: 'double' }}>
              <p className="font-mono text-xs tracking-widest uppercase mb-5" style={{ color: '#7a6a58' }}>
                Technical Field Guide · Short Game Physics · Vol. I
              </p>
              <h1 className="font-bold leading-none tracking-tight"
                  style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(40px,7vw,72px)', color: '#1a1410' }}>
                The Physics of<br />
                <em style={{ color: '#8b1a1a', fontStyle: 'italic' }}>The Wedge</em>
              </h1>
              <p className="mt-3 text-xl italic font-light" style={{ fontFamily: 'var(--font-playfair)', color: '#7a6a58' }}>
                Angle of Attack, Spin Loft, and the Mathematics of Precision Striking
              </p>
              <div className="flex items-center justify-center gap-6 mt-5 pt-4 font-mono text-xs tracking-widest uppercase"
                   style={{ borderTop: '1px solid #c8b89a', color: '#7a6a58' }}>
                <span style={{ color: '#b8860b' }}>48° Pitching Wedge</span>
                <span style={{ color: '#c8b89a' }}>◆</span>
                <span style={{ color: '#b8860b' }}>Circular Arc Mechanics</span>
                <span style={{ color: '#c8b89a' }}>◆</span>
                <span style={{ color: '#b8860b' }}>Friction Limit · Ball Reaction</span>
              </div>
            </header>

            {/* ── INTRO ── */}
            <section id="intro" className="mt-12 scroll-mt-8">
              <P>
                Every wedge shot is a physics problem disguised as an athletic act. The moment the clubhead enters
                the impact zone — that critical 6-inch corridor where everything is decided — a cascade of
                interrelated forces, angles, and rates of change determine whether the ball checks up on the flag
                or bounces through the green. Understanding the underlying mathematics reveals exactly <em>why</em>{' '}
                small errors compound into large misses, and precisely how tour professionals achieve consistency
                that appears, from the gallery, almost supernatural.
              </P>
              <P>
                This guide develops the full physical model from first principles: the geometry of the swing arc,
                the differential equations governing angle of attack, the spin loft identity, the Coulomb friction
                ceiling at <InlineMath math="45°" /> spin loft, and the complete three-stage ball-reaction model.
              </P>

              <Callout label="Mathematical Foundations" variant="gold">
                <p>
                  The circular arc model derives from classical Newtonian mechanics and circular motion geometry,
                  formalized for golf biomechanics by <strong>Theodore Jorgensen</strong> (<em>The Physics of Golf</em>, 1994)
                  and <strong>A.R. Penner</strong> (Reports on Progress in Physics, 2003). The rate-of-change formula{' '}
                  <InlineMath math="\frac{d\alpha}{ds} = \frac{1}{R}" /> is a direct application of{' '}
                  <strong>Leibniz&apos;s</strong> differential calculus (1684).{' '}
                  The spin-loft and launch-angle relationships draw on oblique-impact mechanics by <strong>Hertz</strong> (1882)
                  and <strong>Poisson</strong> (1817). The ball-reaction model applies <strong>Newton&apos;s second law</strong>{' '}
                  and <strong>Coulomb&apos;s friction law</strong> (1781) to successive landing phases.
                </p>
              </Callout>
            </section>

            <Divider symbol="❧" />

            {/* ── CHAPTER I ── */}
            <section id="arc" className="scroll-mt-8">
              <ChapterLabel num="I" />
              <H2>The Swing as a Circular Arc</H2>

              <P>
                The foundational assumption of wedge physics is elegant in its simplicity:{' '}
                <strong>the clubhead travels along a circular path.</strong> The center of that circle is
                approximately the lead shoulder — the &ldquo;hub&rdquo; of the swing. The radius is the effective
                arm-plus-shaft length from that hub to the clubhead at impact.
              </P>
              <P>
                For the purposes of modeling the impact zone — the region from roughly four inches behind the ball
                to two inches past it — the circular arc model is accurate to well within one degree of angle of
                attack, which is sufficient precision for all analysis in this guide.
              </P>

              <SwingArcDiagram />

              <H3>Defining the Angle of Attack</H3>
              <P>
                Let the low point sit at the origin. Let <InlineMath math="x" /> represent horizontal distance
                from that low point, with negative values indicating positions <em>behind</em> it. The clubhead&apos;s
                vertical position on the arc:
              </P>

              <EquationBlock {...eq(1)} />

              <P>
                The direction of the clubhead&apos;s velocity vector — always tangent to the arc — gives us the
                Angle of Attack. For small angles (valid for wedge AoA values of{' '}
                <InlineMath math="-15°" /> to <InlineMath math="+5°" />):
              </P>

              <EquationBlock {...eq(2)} />
            </section>

            <Divider />

            {/* ── CHAPTER II ── */}
            <section id="roc" className="scroll-mt-8">
              <ChapterLabel num="II" />
              <H2>The Rate of Change — 1.2° Per Inch</H2>

              <P>
                The single most consequential number in wedge physics is the rate at which the Angle of Attack
                changes as the clubhead moves through the impact zone. Derivable in one line of calculus, it
                determines how sensitive your ball flight is to variations in ball position and low-point control.
              </P>

              <EquationBlock {...eq(3)} />

              <H3>Rate of Change Calculation</H3>
              <P>
                For a standard pitching wedge, the <strong>&ldquo;Effective Radius&rdquo;</strong> — the distance
                from the lead shoulder to the clubhead — is typically <strong>45 to 50 inches</strong> (approx.
                1.14 to 1.27 m). Substituting <InlineMath math="R = 48" /> inches and converting to degrees:
              </P>

              <EquationBlock {...eq(4)} />

              <DataTable
                label="Table 0 — The Physics Model: Swing Radius Reference"
                columns={[
                  { key: 'variable', label: 'Variable', mono: false },
                  { key: 'imperial', label: 'Imperial',  align: 'right' },
                  { key: 'metric',   label: 'Metric',    align: 'right' },
                ]}
                rows={[
                  { variable: 'Swing Radius (R)',          imperial: '48"',             metric: '1.22 m' },
                  { variable: 'Rate of Change dα/ds',      imperial: '1.19° per inch',  metric: '~46.9° per meter' },
                  { variable: 'Effective radius range',    imperial: '45–50"',          metric: '1.14–1.27 m' },
                  { variable: 'Rate range (45"–50")',      imperial: '1.14°–1.27°/in',  metric: '44.9–50.0°/m' },
                ]}
              />

              <AoAChart />

              <DataTable
                label="Table 1 — AoA by Ball Position · R = 48″ · 48° Pitching Wedge"
                columns={[
                  { key: 'pos', label: 'Ball Position', mono: false },
                  { key: 'aoa', label: 'AoA (°)',      align: 'right' },
                  { key: 'rad', label: 'AoA (rad)',    align: 'right' },
                  { key: 'cls', label: 'Classification', mono: false },
                  { key: 'who', label: 'Who Achieves This', mono: false },
                ]}
                rows={AOA_TABLE}
                tourKey="tour"
              />
            </section>

            <Divider />

            {/* ── CHAPTER III ── */}
            <section id="spinloft" className="scroll-mt-8">
              <ChapterLabel num="III" />
              <H2>Spin Loft — The Master Equation</H2>

              <P>
                Backspin is not created by clubhead speed. It is created by <strong>Spin Loft</strong> — the
                angular difference between the direction the face points and the direction the clubhead is moving.
                This single variable, more than any other, determines whether the ball checks up, releases, or zips
                back on landing.
              </P>

              <EquationBlock {...eq(5)} />
              <EquationBlock {...eq(6)} />
              <EquationBlock {...eq(7)} />
              <EquationBlock {...eq(8)} />
            </section>

            <Divider />

            {/* ── CHAPTER IV ── */}
            <section id="matrices" className="scroll-mt-8">
              <ChapterLabel num="IV" />
              <H2>The Wedge Performance Matrices</H2>

              <P>
                The following matrices map the interaction between AoA, shaft lean, and clubhead speed across
                the full spectrum of player types — from high-handicap to extreme steep drill.
              </P>

              <SpinHeatmap />

              <Callout label="Physics Note" variant="gold">
                <p>
                  Spin rates above approximately 11,000 RPM approach the aerodynamic ceiling for a 48° wedge on
                  a tour ball. Excessive spin induces a &ldquo;balloon&rdquo; trajectory that reduces carry. Tour
                  professionals target 8,500–10,000 RPM — <em>useful</em> spin, not maximum spin. At{' '}
                  <InlineMath math="-10°" /> and <InlineMath math="-15°" /> AoA, spin climbs to 12,000–13,000 RPM,
                  approaching this ceiling — achievable with fresh grooves and a urethane ball, but at significant
                  carry cost.
                </p>
              </Callout>

              <H3>Matrix II — Carry Distance vs. AoA and Club Speed</H3>
              <DataTable
                label="Table 3 — Carry Distance (yards) · 48° Wedge · 6° Shaft Lean"
                columns={[
                  { key: 'aoa', label: 'AoA ↓ / Speed →', mono: false },
                  ...CARRY_MATRIX.speeds.map(s => ({ key: s, label: `${s} mph`, align: 'right' as const })),
                ]}
                rows={CARRY_MATRIX.rows.map(r => ({
                  aoa: r.aoa,
                  ...Object.fromEntries(CARRY_MATRIX.speeds.map((s, i) => [s, r.vals[i]])),
                  tour: r.tour,
                }))}
                tourKey="tour"
              />

              <P>
                Notice the non-monotonic relationship: at tour speeds (85–100 mph), the optimal AoA for carry
                is around <InlineMath math="-4°" /> to <InlineMath math="-5°" />, not <InlineMath math="-8°" />.
                At <InlineMath math="-10°" /> AoA, carry at tour speed drops to 116 yards — a loss of 12 yards
                purely from AoA inefficiency. At <InlineMath math="-15°" />, carry falls further to 107 yards.
              </P>

              <TrajectoryChart />

              <H3>Full Wedge Performance Matrix</H3>
              <DataTable
                label="Table 7 — Full Wedge Performance Matrix · 48° PW · All Key Variables"
                columns={[
                  { key: 'player', label: 'Player Type',   mono: false },
                  { key: 'speed',  label: 'Speed',         align: 'right' },
                  { key: 'aoa',    label: 'AoA',           align: 'right' },
                  { key: 'lean',   label: 'Lean',          align: 'right' },
                  { key: 'dl',     label: 'Dyn. Loft',     align: 'right' },
                  { key: 'la',     label: 'Launch',        align: 'right' },
                  { key: 'sl',     label: 'Spin Loft',     align: 'right' },
                  { key: 'rpm',    label: 'Spin (RPM)',    align: 'right' },
                  { key: 'carry',  label: 'Carry (yd)',    align: 'right' },
                ]}
                rows={FULL_MATRIX}
                tourKey="tour"
              />

              <Callout label="Key Insight" variant="gold">
                <p>
                  Across all skill levels, Spin Loft remains approximately constant at ~14° — the
                  &ldquo;invariant&rdquo; of the wedge impact equation. Tour players achieve it through high shaft
                  lean and deep AoA working together; amateurs stumble into it with low shaft lean and shallow AoA.
                  The <InlineMath math="-10°" /> and <InlineMath math="-15°" /> rows break this invariance — spin loft
                  climbs to 15–16°, generating spin rates that border on the aerodynamic ceiling.
                </p>
              </Callout>
            </section>

            <Divider />

            {/* ── CHAPTER V ── */}
            <section id="putter" className="scroll-mt-8">
              <ChapterLabel num="V" />
              <H2>Putter Face Precision</H2>

              <P>
                The same arc geometry that governs wedge ball-striking illuminates the terrifyingly small
                tolerances of the putting stroke. Here the consequences are measured not in yards of carry but
                in fractions of an inch of lateral miss at the hole.
              </P>

              <EquationBlock
                num={9}
                label="Lateral Deflection from Face Angle Error"
                attribution="Small Angle Geometry"
                latex="\Delta y = D \cdot \tan(\theta_{face}) \approx D \cdot \theta_{face}"
                explanation="The lateral miss at the hole is the putting distance D multiplied by the tangent of the face angle error. At 8 feet (96 inches) with a 1° error: Δy = 96 × tan(1°) ≈ 1.68 inches."
                vars={[
                  { sym: '\\Delta y',       def: 'lateral miss at hole (inches)' },
                  { sym: 'D',               def: 'putt distance (inches); 8 feet = 96 inches' },
                  { sym: '\\theta_{face}',  def: 'face angle error (radians); 1° = 0.01745 rad' },
                ]}
              />

              <EquationBlock
                num={'9a' as unknown as number}
                label="Numerical Verification — 8-Foot Putt at 1°"
                attribution=""
                latex="\Delta y = 96\text{''} \times \tan(1°) = 96 \times 0.01746 \approx \boxed{1.68\text{'' miss}}"
                explanation="At 8 feet, a 1° open face angle deflects the ball 1.68 inches — just inside the 2.125-inch hole radius. At 2°, the miss is 3.35 inches, well outside the cup."
                vars={[]}
              />

              <DataTable
                label="Table 4 — Putter Face Angle Tolerance · Lateral Miss at Various Distances"
                columns={[
                  { key: 'angle',  label: 'Face Angle Error', mono: false },
                  { key: 'offset', label: 'Corner Offset',    align: 'right' },
                  { key: 'miss6',  label: 'Miss @ 6ft',       align: 'right' },
                  { key: 'miss8',  label: 'Miss @ 8ft',       align: 'right' },
                  { key: 'miss10', label: 'Miss @ 10ft',      align: 'right' },
                  { key: 'miss15', label: 'Miss @ 15ft',      align: 'right' },
                  { key: 'result', label: 'Result',           mono: false },
                ]}
                rows={PUTTER_TABLE}
              />
            </section>

            <Divider />

            {/* ── CHAPTER VI ── */}
            <section id="gate" className="scroll-mt-8">
              <ChapterLabel num="VI" />
              <H2>Practical Physics — The Gate Drill</H2>

              <P>
                The gate drill translates the abstract mathematics of face angle tolerance into a tangible
                practice tool. Two tees placed just wider than a golf ball at a set distance from address
                create a physical gate whose angular tolerance can be precisely calculated.
              </P>

              <EquationBlock
                num={10}
                label="Gate Drill Tolerance Angle"
                attribution="Applied Geometry"
                latex="\theta_{tol} = \arctan\!\left(\frac{G - d_{ball}}{2 \cdot D_{gate}}\right)"
                explanation="The maximum face angle error that passes through the gate. For a gate 12 inches ahead with 0.5-inch clearance each side: θ = arctan(0.5/12) ≈ 2.4° total tolerance, or ±1.2° — matching tour-standard precision."
                vars={[
                  { sym: 'G',          def: 'gate width (inches); typically ball diameter + 0.5"–1"' },
                  { sym: 'd_{ball}',   def: 'ball diameter = 1.68 inches (regulation minimum)' },
                  { sym: 'D_{gate}',   def: 'distance of gate from ball at address (inches)' },
                ]}
              />
            </section>

            <Divider />

            {/* ── CHAPTER VII ── */}
            <section id="reference" className="scroll-mt-8">
              <ChapterLabel num="VII" />
              <H2>Master Reference — Physics Parameters</H2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DataTable
                  label="Table 5 — Physical Constants"
                  columns={[
                    { key: 'param',    label: 'Parameter',     mono: false },
                    { key: 'imperial', label: 'Imperial',      align: 'right' },
                    { key: 'metric',   label: 'Metric',        align: 'right' },
                  ]}
                  rows={[
                    { param: 'Swing Radius (R)',       imperial: '48"',          metric: '1.22 m'    },
                    { param: 'AoA rate of change',     imperial: '1.19°/inch',   metric: '46.9°/m'   },
                    { param: 'Ball diameter',          imperial: '1.68"',        metric: '42.7 mm'   },
                    { param: 'Hole diameter',          imperial: '4.25"',        metric: '108 mm'    },
                    { param: 'Groove friction (μ)',    imperial: '0.35–0.45',    metric: '—'         },
                    { param: 'Tour avg AoA (PW)',      imperial: '-4° to -5°',   metric: '-4° to -5°'},
                    { param: 'Tour avg spin (PW)',     imperial: '9,000–10,500', metric: 'RPM'       },
                  ]}
                />

                <DataTable
                  label="Table 6 — Equation Quick Reference"
                  columns={[
                    { key: 'name',   label: 'Equation',  mono: false },
                    { key: 'source', label: 'Origin',    mono: false },
                  ]}
                  rows={[
                    { name: 'Arc height y = R−√(R²−x²)',   source: 'Euler (1736)'       },
                    { name: 'Parabolic approx h = x²/2R',  source: 'Taylor (1715)'      },
                    { name: 'AoA α ≈ s/R',                  source: 'Newton/Leibniz'     },
                    { name: 'dα/ds = 1/R',                   source: 'Calculus'           },
                    { name: 'Spin Loft = DL − LA',           source: 'Hertz/Poisson'      },
                    { name: 'LA ≈ 0.70·DL − 0.30·|α|',     source: 'Empirical'          },
                    { name: 'Friction limit arctan(μ)≈45°', source: 'Coulomb (1781)'     },
                    { name: 'Vs = Vh − r·ω',                source: 'Newton 2nd Law'     },
                    { name: 'Δy = D·tan(θ_face)',            source: 'Geometry'           },
                  ]}
                />
              </div>
            </section>

            <Divider />

            {/* ── CHAPTER VIII ── */}
            <section id="vertical" className="scroll-mt-8">
              <ChapterLabel num="VIII" />
              <H2>Vertical Rate of Change — Height Above Ground</H2>

              <P>
                As meaningful as the angle of attack is knowing exactly <em>where the bottom of the clubface
                is</em> as it approaches the ball. This is the vertical rate of change: how high above the ground
                is the clubhead at any point in the impact zone?
              </P>
              <P>
                To hit the ball with a <InlineMath math="-10°" /> AoA, the clubhead must be descending sharply.
                From Eq. 1, applying the Taylor expansion{' '}
                <InlineMath math="\sqrt{R^2-x^2} \approx R - \frac{x^2}{2R}" />:
              </P>

              <EquationBlock {...eq(11)} />

              <Callout label="At Impact: −10° AoA" variant="red">
                <p>
                  <strong>Ball position:</strong> To achieve <InlineMath math="-10°" /> AoA with R = 48&quot;, the ball
                  must be positioned <strong>~8.3 inches behind</strong> the center of the swing arc.
                </p>
                <p className="mt-2">
                  <strong>The Descent:</strong> At that 8.3-inch mark,{' '}
                  <InlineMath math="h = (8.3)^2/96 \approx 0.72" />&quot; (18.3 mm) above the ground. The clubface
                  is moving sharply downward at this height — compressing the ball against the turf before the low
                  point is reached, generating a deep divot and peak groove contact pressure.
                </p>
              </Callout>

              <HeightChart />

              <DataTable
                label="Table 8 — Clubhead Height vs. Ball Position · R = 48″"
                columns={[
                  { key: 'pos',    label: 'Ball Position', mono: false },
                  { key: 'aoa',    label: 'AoA',           align: 'right' },
                  { key: 'h_in',   label: 'Height (in)',   align: 'right' },
                  { key: 'h_mm',   label: 'Height (mm)',   align: 'right' },
                  { key: 'rate',   label: 'Descent Rate',  align: 'right' },
                  { key: 'strike', label: 'Strike',        mono: false },
                ]}
                rows={HEIGHT_TABLE}
                dangerKey="danger"
              />
            </section>

            <Divider />

            {/* ── CHAPTER IX ── */}
            <section id="friction" className="scroll-mt-8">
              <ChapterLabel num="IX" />
              <H2>The Friction Limit — Where Spin Loft Crosses 45°</H2>

              <P>
                There is a physics ceiling to how much backspin a grooved clubface can generate. Understanding it
                separates a precision check shot from a dead, sliding balloon.
              </P>

              <Callout label="The Computational Physicist's Warning" variant="red">
                <p>
                  Once Spin Loft exceeds <InlineMath math="45°" />, you encounter the <strong>Point of Diminishing
                  Returns</strong>. At <InlineMath math="55°" /> Spin Loft, the ball begins to <em>slide</em> up
                  the face rather than <em>grabbing</em> the grooves. This results in a &ldquo;dead wedge shot&rdquo;
                  — higher, shorter, and with less effective spin. The physics reason: Coulomb&apos;s friction law
                  breaks the grip when the sliding tendency exceeds the groove&apos;s normal force component.
                </p>
              </Callout>

              <EquationBlock {...eq(12)} />

              <H3>The Ideal &ldquo;Max Friction&rdquo; Map — 50°, 56°, and 60° Wedges</H3>

              <DataTable
                label="Table 9 — Max Friction Strike Map · Target Spin Loft = 45°"
                columns={[
                  { key: 'wedge',    label: 'Wedge',           mono: false },
                  { key: 'static',   label: 'Static Loft',     align: 'right' },
                  { key: 'aoa',      label: 'AoA',             align: 'right' },
                  { key: 'dl',       label: 'Reqd. DL',        align: 'right' },
                  { key: 'lean',     label: 'Reqd. Lean',      align: 'right' },
                  { key: 'la',       label: 'Launch',          align: 'right' },
                  { key: 'sl',       label: 'Spin Loft',       align: 'right' },
                  { key: 'rpm',      label: 'Est. RPM',        align: 'right' },
                  { key: 'limit',    label: 'Friction Status', mono: false },
                ]}
                rows={[
                  { wedge: '50° Gap Wedge',    static: '50°', aoa: '-4.8°', dl: '37°', lean: '13°', la: '22.6°', sl: '14.4°', rpm: '9,200',  limit: 'Normal zone ✓',          tour: false },
                  { wedge: '56° Sand ★',        static: '56°', aoa: '-10°',  dl: '35°', lean: '21°', la: '21.5°', sl: '~45°',   rpm: '11,200', limit: 'Mega-Pinch limit ⚠',     tour: true  },
                  { wedge: '56° Sand Wedge',   static: '56°', aoa: '-4.8°', dl: '42°', lean: '14°', la: '24.1°', sl: '17.9°', rpm: '10,100', limit: 'Normal zone ✓',          tour: false },
                  { wedge: '60° Lob Wedge',    static: '60°', aoa: '-4.8°', dl: '45°', lean: '15°', la: '25.6°', sl: '19.4°', rpm: '10,500', limit: 'Normal zone ✓',          tour: false },
                  { wedge: '60° Lob Wedge',    static: '60°', aoa: '-10°',  dl: '38°', lean: '22°', la: '23.6°', sl: '~44°',   rpm: '11,800', limit: 'Approaching limit ⚠',    tour: false },
                ]}
                tourKey="tour"
              />

              <Callout label="Why −10° AoA Crosses the Friction Limit" variant="red">
                <p>
                  At <InlineMath math="-10°" /> AoA with a 56° wedge, achieving the necessary Dynamic Loft of 35°
                  requires 21° of forward shaft lean. The grooves are presented at an extreme angle to the ball.
                  Effective spin loft climbs toward <InlineMath math="45°" /> — the Coulomb friction ceiling. Beyond
                  this point, grooves can no longer grab; they slide. The ball launches slightly higher with{' '}
                  <em>less</em> spin than a more controlled <InlineMath math="-6°" /> AoA strike.
                </p>
              </Callout>
            </section>

            <Divider />

            {/* ── CHAPTER X ── */}
            <section id="megapinch" className="scroll-mt-8">
              <ChapterLabel num="X" />
              <H2>The Mega-Pinch — Shaft Lean for a 56° Wedge</H2>

              <P>
                The &ldquo;Mega-Pinch&rdquo; describes a deliberate, extreme combination of steep AoA and aggressive
                forward shaft lean, designed to compress the ball with maximum groove contact at the friction
                limit. Engineered for maximum spin and predictable stopping power on firm greens.
              </P>

              <PhysicistBox
                heading="The Computational Physicist's Recommendation — 56° Wedge · Mega-Pinch Geometry"
                intro="Precise geometry required for the Mega-Pinch strike at the Coulomb friction limit:"
                items={[
                  { label: 'Target Spin Loft Ω_SL',    value: '45°',           note: 'Coulomb friction limit' },
                  { label: 'Angle of Attack α',         value: '−10°',          note: 'specified steepness' },
                  { label: 'Required Dynamic Loft θ_DL',value: '35°',           note: 'Spin Loft + AoA correction' },
                  { label: 'Static Loft of Wedge',      value: '56°',           note: 'manufacturer spec' },
                  { label: 'Required Shaft Lean θ_lean',value: '21° Forward',   note: '= 56° − 35°' },
                ]}
              />

              <EquationBlock
                num={14}
                label="Mega-Pinch Shaft Lean Derivation"
                attribution="Geometric identity"
                latex="\theta_{lean} = \theta_{static} - \theta_{DL}^{target} = 56° - 35° = \boxed{21°\ \text{Forward}}"
                explanation="Required Shaft Lean = Static Loft − Required Dynamic Loft. With 21° forward lean and -10° AoA, the effective spin loft reaches exactly 45° — the maximum groove friction condition. One inch of ball position error shifts spin loft by 1.19°, crossing the friction limit."
                vars={[]}
              />

              <H3>The Rate-of-Change Map for the Mega-Pinch Strike</H3>
              <P>
                Because the ball is struck so steeply, the <em>window for a perfect strike is extremely small</em>.
                Here is the complete map of the clubhead one inch before and at impact:
              </P>

              <DataTable
                label="Table 10 — Rate of Change Map · Mega-Pinch · 56° Wedge · R = 48″"
                columns={[
                  { key: 'variable',   label: 'Variable',             mono: false },
                  { key: 'atImpact',   label: 'At Impact (−10° AoA)', align: 'right' },
                  { key: 'oneBefore',  label: '1 Inch Before Impact',  align: 'right' },
                  { key: 'note',       label: 'Physics Explanation',   mono: false },
                ]}
                rows={MEGAPINCH_TABLE}
              />

              <Callout label="The Precision Window" variant="red">
                <p>
                  At <InlineMath math="-10°" /> AoA, a single inch of ball-position error translates to a 1.19°
                  shift in AoA <em>and</em> a corresponding 1.19° shift in Spin Loft. One inch too far back and
                  Spin Loft crosses <InlineMath math="46°+" />, triggering partial groove sliding and a dead strike.
                  This is the most sensitive impact window in all of wedge play — tighter than the{' '}
                  <InlineMath math="-4.8°" /> tour strike, because you are operating right at the Coulomb friction
                  ceiling.
                </p>
              </Callout>
            </section>

            <Divider />

            {/* ── CHAPTER XI ── */}
            <section id="reaction" className="scroll-mt-8">
              <ChapterLabel num="XI" />
              <H2>The Ball Reaction Model — Three Stages of the Stop</H2>

              <P>
                The spin delivered at impact is only the beginning. What the ball does on the green is determined
                by a three-stage mechanical process governed by Newton&apos;s second law, the landing angle vector,
                and Coulomb&apos;s friction law applied to a spinning sphere.
              </P>

              <H3>Stage 1 — The Landing Angle Vector</H3>
              <P>
                The angle at which the ball pierces the turf governs the partition between vertical impact force
                and forward momentum.
              </P>

              <EquationBlock
                num={15}
                label="Landing Angle and Momentum Partition"
                attribution="Newtonian Mechanics"
                latex="\beta_{land} = \arctan\!\left(\frac{V_{vertical}}{V_{horizontal}}\right)"
                explanation="If β > 45°: vertical force dominates → forward momentum killed on first bounce. If β < 45°: ball still wants to skip forward at least once. At 43° (a typical 70-yard tour wedge), the ball is just below the threshold — retaining some forward momentum for one hop before the backspin grabs."
                vars={[
                  { sym: '\\beta_{land}',     def: 'landing angle above horizontal (degrees)' },
                  { sym: 'V_{vertical}',      def: 'vertical component of ball velocity at landing' },
                  { sym: 'V_{horizontal}',    def: 'horizontal component of ball velocity at landing' },
                ]}
              />

              <H3>Stage 2 — The Friction Coefficient and Sliding Velocity</H3>

              <EquationBlock {...eq(16)} />

              <Callout label="Worked Example — 8,900 RPM at 61 mph" variant="green">
                <p>
                  <InlineMath math="\omega = 8900 \times \frac{2\pi}{60} = 932" /> rad/s<br />
                  <InlineMath math="r \cdot \omega = 0.0214 \times 932 = 19.9" /> m/s<br />
                  <InlineMath math="V_h \approx 61 \text{ mph} \times 0.447 \times \cos(43°) \approx 9.97" /> m/s<br />
                  Since <InlineMath math="V_h < r\omega" />:{' '}
                  <InlineMath math="V_s \approx -9.9 \text{ m/s}" /> — <strong>strongly negative → ball checks</strong>
                </p>
              </Callout>

              <H3>Stage 3 — The Three-Stage Reaction</H3>

              <div className="space-y-4 my-8">
                {[
                  {
                    n: '1', title: 'The First Hop (Impact)',
                    body: `Ball hits at 43°. Below the 45° threshold, the ball retains some forward momentum. Part of the backspin absorbs into turf friction, but a large shear force is created. The ball briefly lifts off — one small hop.`
                  },
                  {
                    n: '2', title: 'The Check (The Grab)',
                    body: `Because Spin Loft was near 45° at impact, backspin is high: r·ω > Vh so Vs < 0. The turf exerts a backward friction force. Instead of a second skip, the ball grabs the grass and decelerates sharply.`
                  },
                  {
                    n: '3', title: 'The Release / Zip (Surface Dependent)',
                    body: `On firm greens: μ_turf ≈ 0.25 — ball hops twice and stops. On soft greens: ball plugs slightly; backspin is stronger than remaining forward momentum, rolling the ball backward — the "zip back."`
                  },
                ].map(step => (
                  <div key={step.n} className="flex gap-5 p-5 rounded-sm border"
                       style={{ borderColor: '#c8b89a', background: '#ede6d6' }}>
                    <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center font-mono text-sm font-bold text-white"
                         style={{ background: '#8b1a1a' }}>
                      {step.n}
                    </div>
                    <div>
                      <h4 className="font-bold italic mb-1.5" style={{ fontFamily: 'var(--font-playfair)', fontSize: 17 }}>{step.title}</h4>
                      <P>{step.body}</P>
                    </div>
                  </div>
                ))}
              </div>

              <H3>Why −7° AoA Is the &ldquo;Stopping&rdquo; Sweet Spot</H3>

              <EquationBlock
                num={17}
                label="The Check Threshold Condition"
                attribution="Newton's 2nd Law + Coulomb Friction"
                latex="\text{Check occurs when:}\quad r_{ball} \cdot \omega > V_h \cdot \cos(\beta_{land})"
                explanation="At −7° AoA with 8,900 RPM: ω = 932 rad/s, Vh ≈ 20.0 m/s. Ratio: 932/20.0 = 46.6 rad/(m/s) — above the threshold of ~34. The ball checks. At −2° AoA with 6,000 RPM: ratio = 23.4 — below threshold. The ball runs forward. Steep AoA with high spin is the only combination that reliably places the spin-to-velocity ratio above the check threshold across a range of green conditions."
                vars={[
                  { sym: 'r_{ball} \\cdot \\omega', def: 'peripheral speed of ball (backward, from backspin)' },
                  { sym: 'V_h \\cdot \\cos(\\beta)', def: 'effective forward sliding speed at contact' },
                ]}
              />

              <DataTable
                label="Table 11 — Ball Reaction Summary · AoA Comparison · 85 mph, 70-yard shot"
                columns={[
                  { key: 'aoa',   label: 'AoA',              mono: false },
                  { key: 'rpm',   label: 'Spin (RPM)',        align: 'right' },
                  { key: 'land',  label: 'Landing Angle',     align: 'right' },
                  { key: 'vs',    label: 'Vs Direction',      mono: false },
                  { key: 'hop',   label: 'First Hop',         mono: false },
                  { key: 'firm',  label: 'On Firm Green',     mono: false },
                  { key: 'soft',  label: 'On Soft Green',     mono: false },
                ]}
                rows={REACTION_TABLE}
              />
            </section>

            {/* FOOTER */}
            <Divider symbol="❧" />
            <footer className="text-center border-t-2 pt-6" style={{ borderTopColor: '#8b1a1a', borderTopStyle: 'double' }}>
              <p className="font-mono text-xs tracking-widest uppercase" style={{ color: '#1a1410' }}>
                The Physics of the Wedge · Technical Field Guide · Vol. I
              </p>
              <p className="font-mono text-xs mt-2" style={{ color: '#7a6a58' }}>
                11 Chapters · 17 Equations · Circular Arc Mechanics · Spin Loft · Friction Limit · Ball Reaction Model
              </p>
              <p className="font-mono text-xs mt-1" style={{ color: '#c8b89a' }}>
                Mathematical foundations: Euler (1736) · Newton/Leibniz (1687) · Taylor (1715) · Coulomb (1781) · Hertz (1882) · Poisson (1817)
              </p>
              <p className="font-mono text-xs mt-3" style={{ color: '#b8860b' }}>
                github.com · short-game-physics
              </p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  )
}
