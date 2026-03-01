// ─── CHAPTER METADATA ─────────────────────────────────────────────────────────
export const CHAPTERS = [
  { id: 'intro',       num: 'Intro',       title: 'Introduction & Mathematical Foundations' },
  { id: 'arc',         num: 'I',           title: 'The Swing as a Circular Arc' },
  { id: 'roc',         num: 'II',          title: 'Rate of Change — 1.2° Per Inch' },
  { id: 'spinloft',    num: 'III',         title: 'Spin Loft — The Master Equation' },
  { id: 'matrices',    num: 'IV',          title: 'The Wedge Performance Matrix' },
  { id: 'putter',      num: 'V',           title: 'Putter Face Precision' },
  { id: 'gate',        num: 'VI',          title: 'Practical Physics — The Gate Drill' },
  { id: 'reference',   num: 'VII',         title: 'Master Reference' },
  { id: 'vertical',    num: 'VIII',        title: 'Vertical Rate of Change' },
  { id: 'friction',    num: 'IX',          title: 'The Friction Limit — 45° Spin Loft' },
  { id: 'megapinch',   num: 'X',           title: 'The Mega-Pinch — Shaft Lean Calc' },
  { id: 'reaction',    num: 'XI',          title: 'Ball Reaction — Three Stages' },
]

// ─── EQUATIONS ────────────────────────────────────────────────────────────────
export const EQUATIONS = [
  {
    num: 1,
    label: 'Vertical Position on Swing Arc',
    attribution: 'Euler / Classical Geometry (1736)',
    latex: 'y(x) = R - \\sqrt{R^2 - x^2}',
    explanation: 'Height of the clubhead above its lowest point as a function of horizontal displacement from the low point, for a swing arc of radius \\(R\\). Derived from the standard circle equation \\(x^2 + (y-R)^2 = R^2\\). When \\(|x| \\ll R\\), simplifies via Taylor expansion to \\(y \\approx \\frac{x^2}{2R}\\).',
    vars: [
      { sym: 'y(x)', def: 'vertical height of clubhead above low point (inches)' },
      { sym: 'x',    def: 'horizontal distance from low point; negative = behind ball' },
      { sym: 'R',    def: 'effective swing radius, hub to clubhead (~48 inches)' },
    ],
  },
  {
    num: 2,
    label: 'Angle of Attack — Small Angle Approximation',
    attribution: 'Newton / Leibniz Calculus (1687)',
    latex: '\\alpha(s) \\approx \\frac{s}{R}',
    explanation: 'Where \\(s\\) is arc-length position from the low point. For small angles, arc length \\(s \\approx x\\), so \\(\\alpha(x) \\approx \\frac{x}{R}\\) radians. Converting: \\(\\alpha_{\\deg} = \\frac{x}{R} \\cdot \\frac{180}{\\pi}\\). A negative \\(x\\) yields a negative \\(\\alpha\\) — the clubhead is descending at impact.',
    vars: [
      { sym: '\\alpha(s)', def: 'angle of attack (radians) at arc-length position s' },
      { sym: 's',          def: 'arc-length from low point (≈ x for small angles)' },
      { sym: 'R',          def: 'swing radius (inches); 45–50" for standard pitching wedge' },
    ],
  },
  {
    num: 3,
    label: 'Rate of Change of AoA',
    attribution: 'Leibniz Differential Calculus (1684)',
    latex: '\\frac{d\\alpha}{ds} = \\frac{1}{R}',
    explanation: 'Differentiating \\(\\alpha \\approx s/R\\) with respect to arc-length \\(s\\) yields a constant: the rate of change is the reciprocal of the swing radius. This is constant throughout the entire impact zone — a beautifully linear relationship emerging directly from circular geometry.',
    vars: [
      { sym: '\\frac{d\\alpha}{ds}', def: 'rate of change of AoA per unit of arc-length distance' },
      { sym: 'R',                    def: 'effective swing radius ≈ 48 inches' },
    ],
  },
  {
    num: 4,
    label: 'Numerical Rate of Change (R = 48")',
    attribution: 'Applied calculation',
    latex: '\\frac{d\\alpha}{ds} = \\frac{180°/\\pi}{48\\text{"}} = \\frac{57.296°}{48\\text{"}} \\approx 1.19°\\ \\text{per inch}',
    explanation: 'For every inch the ball is positioned further behind the low point, the Angle of Attack becomes 1.19° more negative. Essentially independent of wedge type — purely a function of swing geometry. A longer effective radius (52") gives ~1.10°/inch; shorter (44") gives ~1.30°/inch.',
    vars: [],
  },
  {
    num: 5,
    label: 'Spin Loft Identity',
    attribution: 'Hertz Contact Mechanics / Poisson (1817)',
    latex: '\\Omega_{SL} = \\theta_{DL} - \\theta_{LA}',
    explanation: 'Spin Loft \\(\\Omega_{SL}\\) governs backspin generation. Higher spin loft → more backspin; lower → running ball flight. The launch angle is itself a function of dynamic loft and AoA, making this a coupled system rooted in oblique-impact mechanics.',
    vars: [
      { sym: '\\Omega_{SL}',  def: 'spin loft (degrees)' },
      { sym: '\\theta_{DL}',  def: 'dynamic loft at impact' },
      { sym: '\\theta_{LA}',  def: 'ball launch angle' },
    ],
  },
  {
    num: 6,
    label: 'Launch Angle from Dynamic Loft and AoA',
    attribution: 'Empirical model from launch monitor data',
    latex: '\\theta_{LA} \\approx 0.70\\,\\theta_{DL} - 0.30\\,|\\alpha|',
    explanation: 'Launch angle tracks approximately 70% of dynamic loft, with a small reduction proportional to the magnitude of the descending AoA. Coefficients vary slightly with ball construction and groove friction (0.35–0.45).',
    vars: [
      { sym: '\\theta_{LA}', def: 'launch angle (degrees above horizontal)' },
      { sym: '\\theta_{DL}', def: 'dynamic loft' },
      { sym: '|\\alpha|',    def: 'magnitude of angle of attack (degrees)' },
    ],
  },
  {
    num: 7,
    label: 'Dynamic Loft from Static Loft and Shaft Lean',
    attribution: 'Geometric identity',
    latex: '\\theta_{DL} = \\theta_{static} - \\theta_{lean}',
    explanation: 'Forward shaft lean reduces effective delivered loft. Tour professionals average 5–8° forward lean with a pitching wedge, reducing the delivered loft from 48° to ~40–43°.',
    vars: [
      { sym: '\\theta_{DL}',     def: 'dynamic loft (degrees)' },
      { sym: '\\theta_{static}', def: 'manufacturer spec loft (e.g., 48°)' },
      { sym: '\\theta_{lean}',   def: 'forward shaft lean at impact (positive = hands ahead)' },
    ],
  },
  {
    num: 8,
    label: 'Backspin Rate',
    attribution: 'Coulomb (1781) / Hertz (1882)',
    latex: '\\omega = \\frac{v \\cdot \\sin(\\Omega_{SL})}{r_{ball}} \\cdot k_{\\mu}',
    explanation: 'At 85 mph and spin loft of 14°, yields ~8,500–10,000 RPM. Convert to RPM: multiply rad/s by \\(\\frac{60}{2\\pi}\\). The friction model applies Coulomb\'s law \\(F_f = \\mu F_N\\); normal force derives from Hertz contact mechanics for a sphere impacting a flat surface.',
    vars: [
      { sym: '\\omega',       def: 'backspin angular velocity (rad/s)' },
      { sym: 'v',             def: 'clubhead speed (m/s); 85 mph = 38.0 m/s' },
      { sym: 'k_{\\mu}',     def: 'groove-ball friction coefficient; 0.35–0.45 fresh grooves' },
      { sym: 'r_{ball}',     def: 'ball radius = 0.0214 m (regulation min. 1.68")' },
    ],
  },
  {
    num: 11,
    label: 'Clubhead Height — Parabolic Approximation',
    attribution: 'Taylor Series Expansion (1715)',
    latex: 'h(x) \\approx \\frac{x^2}{2R}',
    explanation: 'Derived by Taylor-expanding \\(y = R - \\sqrt{R^2 - x^2}\\). At \\(x = -8.3"\\) (needed for \\(-10°\\) AoA): \\(h = (8.3)^2/(2 \\times 48) \\approx 0.72"\\) above ground. The clubhead is descending steeply at that height — a powerful compressing strike.',
    vars: [
      { sym: 'h(x)', def: 'height of clubhead above low point / ground (inches)' },
      { sym: 'x',    def: 'ball position from low point (inches); negative = behind' },
      { sym: 'R',    def: 'swing radius = 48 inches' },
    ],
  },
  {
    num: 12,
    label: 'Coulomb Friction Limit — Spin Loft Ceiling',
    attribution: 'Coulomb Friction Law (1781)',
    latex: '\\Omega_{SL}^{max} = \\arctan(\\mu) \\approx \\arctan(0.45) \\approx 45°',
    explanation: 'When spin loft exceeds this angle, the groove can no longer "grab" — the horizontal friction force cannot overcome the vertical sliding tendency. At macroscopic level (accounting for groove geometry and ball deformation), the effective ceiling is ~45° spin loft for a standard V-groove wedge.',
    vars: [
      { sym: '\\mu',              def: 'friction coefficient; 0.35–0.45 fresh grooves' },
      { sym: '\\Omega_{SL}^{max}', def: 'maximum effective spin loft ≈ 45° for fresh wedge grooves' },
    ],
  },
  {
    num: 16,
    label: 'Sliding Velocity at Contact',
    attribution: "Newton's Second Law + Coulomb Friction",
    latex: 'V_s = V_h - (r_{ball} \\times \\omega)',
    explanation: 'Positive \\(V_s\\): contact point slides forward (the "hop") — backspin hasn\'t overcome forward momentum. Negative \\(V_s\\): backspin is so high that the bottom of the ball moves backward faster than the ball moves forward — producing the characteristic "check" and backward roll.',
    vars: [
      { sym: 'V_s',      def: 'sliding velocity (m/s); positive = forward, negative = check/zip' },
      { sym: 'V_h',      def: 'horizontal velocity of ball center at landing (m/s)' },
      { sym: 'r_{ball}', def: 'ball radius = 0.0214 m' },
      { sym: '\\omega',  def: 'backspin in rad/s; RPM × 2π/60' },
    ],
  },
]

// ─── AoA BY BALL POSITION TABLE ───────────────────────────────────────────────
export const AOA_TABLE = [
  { pos: '+2" (ahead)',  aoa: '+2.4°', rad: '+0.042', cls: 'ascending',  who: 'Topped / thin shots',       color: 'high' },
  { pos: '+1" (ahead)',  aoa: '+1.2°', rad: '+0.021', cls: 'ascending',  who: 'Heavy "scooping"',           color: 'high' },
  { pos: '0" (low pt)',  aoa:  '0.0°', rad:  '0.000', cls: 'level',      who: 'Sweepers / fairway wood',    color: 'mid'  },
  { pos: '-1"',          aoa: '-1.2°', rad: '-0.021', cls: 'descending', who: 'High-handicap wedge',        color: 'low'  },
  { pos: '-2"',          aoa: '-2.4°', rad: '-0.042', cls: 'descending', who: 'Mid-amateur',                color: 'low'  },
  { pos: '-3"',          aoa: '-3.6°', rad: '-0.063', cls: 'descending ✓', who: 'Solid amateur',            color: 'low'  },
  { pos: '-4" ★',        aoa: '-4.8°', rad: '-0.084', cls: 'Tour standard ★', who: 'PGA Tour average',     color: 'tour' },
  { pos: '-5"',          aoa: '-6.0°', rad: '-0.105', cls: 'steep ✓',    who: 'Tour / steep strikers',      color: 'low'  },
  { pos: '-6"',          aoa: '-7.2°', rad: '-0.126', cls: 'very steep', who: 'Deliberate dig shots',       color: 'mid'  },
  { pos: '-8.4"',        aoa: '-10.0°', rad: '-0.1745', cls: 'extreme ⚠', who: 'Drill / bunker training',  color: 'high' },
  { pos: '-12.6"',       aoa: '-15.0°', rad: '-0.2618', cls: 'ultra ⚠⚠', who: 'Deliberate steep drill only', color: 'danger' },
]

// ─── BACKSPIN RPM MATRIX ──────────────────────────────────────────────────────
export const SPIN_MATRIX = {
  leans: ['0°', '2°', '4°', '6° ★', '8°', '10°'],
  rows: [
    { aoa: '0° (level)',         vals: [5800,  6200,  6700,  7100,  7600,  8000],  tour: false },
    { aoa: '-1°',                vals: [6100,  6500,  7000,  7500,  8000,  8400],  tour: false },
    { aoa: '-2°',                vals: [6400,  6900,  7400,  7900,  8400,  8800],  tour: false },
    { aoa: '-3°',                vals: [6800,  7300,  7800,  8300,  8800,  9200],  tour: false },
    { aoa: '-4.8° ★ (tour avg)', vals: [7400,  7900,  8500,  9200,  9800, 10300],  tour: true  },
    { aoa: '-6°',                vals: [7900,  8500,  9100,  9700, 10200, 10700],  tour: false },
    { aoa: '-8° (steep)',        vals: [8600,  9200,  9800, 10400, 10900, 11300],  tour: false },
    { aoa: '-10° (extreme) ⚠',  vals: [9300,  9900, 10600, 11200, 11700, 12100],  tour: false },
    { aoa: '-15° (ultra) ⚠⚠',  vals: [10200,10800, 11500, 12100, 12600, 13000],  tour: false },
  ],
}

// ─── CARRY DISTANCE MATRIX ────────────────────────────────────────────────────
export const CARRY_MATRIX = {
  speeds: ['70', '75', '80', '85★', '90', '95', '100'],
  rows: [
    { aoa: '-2° (shallow)',   vals: [96,  104, 112, 120, 128, 136, 144], tour: false },
    { aoa: '-3°',             vals: [100, 108, 116, 124, 132, 140, 148], tour: false },
    { aoa: '-4.8° ★ (tour)', vals: [104, 112, 120, 128, 137, 146, 155], tour: true  },
    { aoa: '-6°',             vals: [102, 110, 118, 126, 135, 143, 152], tour: false },
    { aoa: '-8°',             vals: [97,  105, 113, 121, 129, 137, 145], tour: false },
    { aoa: '-10° ⚠',         vals: [81,   92, 104, 116, 129, 141, 154], tour: false },
    { aoa: '-15° ⚠⚠',        vals: [73,   84,  95, 107, 119, 131, 143], tour: false },
  ],
}

// ─── FULL PERFORMANCE MATRIX ──────────────────────────────────────────────────
export const FULL_MATRIX = [
  { player: 'High handicap',      speed: '68',  aoa: '-1°',    lean: '2°',  dl: '46°', la: '31°', sl: '15°', rpm: 6200,  carry: '90',  tour: false  },
  { player: 'Mid-amateur',        speed: '74',  aoa: '-2.5°',  lean: '4°',  dl: '44°', la: '30°', sl: '14°', rpm: 7400,  carry: '105', tour: false  },
  { player: 'Low handicap',       speed: '80',  aoa: '-4°',    lean: '5°',  dl: '43°', la: '29°', sl: '14°', rpm: 8600,  carry: '118', tour: false  },
  { player: 'PGA Tour avg ★',     speed: '85',  aoa: '-4.8°',  lean: '6°',  dl: '42°', la: '28°', sl: '14°', rpm: 9500,  carry: '128', tour: true   },
  { player: 'Tour (steep)',        speed: '87',  aoa: '-6°',    lean: '7°',  dl: '41°', la: '27°', sl: '14°', rpm: 10200, carry: '130', tour: false  },
  { player: 'Tour (long hitter)', speed: '96',  aoa: '-5°',    lean: '6°',  dl: '42°', la: '28°', sl: '14°', rpm: 10500, carry: '148', tour: false  },
  { player: 'Extreme drill ⚠',   speed: '85',  aoa: '-10°',   lean: '8°',  dl: '40°', la: '25°', sl: '15°', rpm: 11200, carry: '116', tour: false  },
  { player: 'Ultra steep ⚠⚠',    speed: '85',  aoa: '-15°',   lean: '10°', dl: '38°', la: '22°', sl: '16°', rpm: 12100, carry: '107', tour: false  },
]

// ─── CLUBHEAD HEIGHT TABLE ─────────────────────────────────────────────────────
export const HEIGHT_TABLE = [
  { pos: '-1"',   aoa: '-1.2°',  h_in: '0.010"', h_mm: '0.26',  rate: '0.024"/in', strike: 'Barely descending', danger: false },
  { pos: '-2"',   aoa: '-2.4°',  h_in: '0.042"', h_mm: '1.07',  rate: '0.042"/in', strike: 'Shallow descend',   danger: false },
  { pos: '-3"',   aoa: '-3.6°',  h_in: '0.094"', h_mm: '2.38',  rate: '0.063"/in', strike: 'Good amateur',      danger: false },
  { pos: '-4" ★', aoa: '-4.8°',  h_in: '0.167"', h_mm: '4.24',  rate: '0.083"/in', strike: 'Tour standard ★',   danger: false },
  { pos: '-5"',   aoa: '-6.0°',  h_in: '0.260"', h_mm: '6.60',  rate: '0.104"/in', strike: 'Steep tour',        danger: false },
  { pos: '-6"',   aoa: '-7.2°',  h_in: '0.375"', h_mm: '9.53',  rate: '0.125"/in', strike: 'Digging',           danger: false },
  { pos: '-8.3"', aoa: '-10.0°', h_in: '0.718"', h_mm: '18.3',  rate: '0.173"/in', strike: 'Extreme dig ⚠',     danger: true  },
  { pos: '-12.6"',aoa: '-15.0°', h_in: '1.654"', h_mm: '42.0',  rate: '0.262"/in', strike: 'Ultra steep ⚠⚠',    danger: true  },
]

// ─── MEGA-PINCH TABLE ─────────────────────────────────────────────────────────
export const MEGAPINCH_TABLE = [
  { variable: 'Angle of Attack (α)',  atImpact: '-10.0°',           oneBefore: '-11.19°',             note: 'Rate: 1.19°/inch steeper as you move back' },
  { variable: 'Clubhead Height h',    atImpact: '0.72" above gnd',  oneBefore: '0.90" above gnd',     note: 'h(-9.3") = (9.3)²/96 = 0.902"' },
  { variable: 'Shaft Lean θ_lean',    atImpact: '21° Forward',      oneBefore: '21° Forward',         note: 'Set at address — does not change' },
  { variable: 'Dynamic Loft θ_DL',   atImpact: '35°',              oneBefore: '~35°',                 note: 'Constant through impact window' },
  { variable: 'Spin Loft Ω_SL ★',    atImpact: '45° — Max Friction', oneBefore: '46.2° — Slight Sliding', note: '1.2° increase per inch back = spin slides' },
  { variable: 'Effective k_μ',        atImpact: '0.45 (full grip)', oneBefore: '0.38 (partial slip)', note: 'Groove contact degrades 1" before impact' },
]

// ─── BALL REACTION TABLE ──────────────────────────────────────────────────────
export const REACTION_TABLE = [
  { aoa: '-2° (shallow)',  rpm: '~6,000',  land: '~38°', vs: 'Positive (fwd)', hop: 'Skips fwd',  firm: 'Bounces 2–3x, rolls', soft: 'Bounces, modest stop' },
  { aoa: '-4.8° (tour)',   rpm: '~9,500',  land: '~41°', vs: 'Slightly neg.',  hop: 'One hop',    firm: 'One hop, check',      soft: 'One hop, stops' },
  { aoa: '-7° (sweet ★)',  rpm: '~10,400', land: '~43°', vs: 'Strongly neg.',  hop: 'Micro-hop',  firm: 'Hops 2x, stops',      soft: 'Checks hard, zips back' },
  { aoa: '-10° (extreme)', rpm: '~11,200', land: '~46°', vs: 'Strongly neg.',  hop: 'Plugs',      firm: 'Stops dead',           soft: 'Zips back aggressively' },
]

// ─── PUTTER TOLERANCE TABLE ───────────────────────────────────────────────────
export const PUTTER_TABLE = [
  { angle: '0.25° open', offset: '<0.5mm', miss6: '0.63"', miss8: '0.84"', miss10: '1.05"', miss15: '1.57"', result: 'Center cut possible' },
  { angle: '0.5° open',  offset: '<0.9mm', miss6: '1.26"', miss8: '1.68"', miss10: '2.10"', miss15: '3.14"', result: 'Edge of cup' },
  { angle: '1.0° open ★',offset: '0.9mm',  miss6: '1.26"', miss8: '1.68"', miss10: '2.09"', miss15: '3.14"', result: 'Miss at 8ft+' },
  { angle: '1.5° open',  offset: '1.3mm',  miss6: '1.89"', miss8: '2.51"', miss10: '3.14"', miss15: '4.71"', result: 'Miss at 6ft+' },
  { angle: '2.0° open',  offset: '1.7mm',  miss6: '2.51"', miss8: '3.35"', miss10: '4.19"', miss15: '6.28"', result: 'Miss all distances' },
  { angle: '3.0° open',  offset: '2.6mm',  miss6: '3.77"', miss8: '5.03"', miss10: '6.28"', miss15: '9.42"', result: 'Severe miss' },
]
