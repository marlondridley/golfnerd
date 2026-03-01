# ⛳ Golf Physics — Technical Field Guide

> **📖 [View the Full HTML Blog →](https://marlondridley.github.io/golfnerd/)**  
> The complete physics reference is published as an HTML blog on GitHub Pages.

A production-ready **Next.js 14 / TypeScript / Tailwind** app rendering the complete physics of wedge ball-striking, with LaTeX equations, interactive Recharts visualizations, and a sticky sidebar — ready to open in **Cursor** and run immediately.

**The main content (`index.html`) is a self-contained HTML blog** featuring 11 chapters, 17 equations, and comprehensive physics explanations. This HTML file is automatically deployed to GitHub Pages and serves as the primary publication.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:3000
```

---

## 🌐 GitHub Pages Blog

**Your HTML blog is the main publication** and is automatically hosted on GitHub Pages.

### Live Site:
**👉 [https://marlondridley.github.io/golfnerd/](https://marlondridley.github.io/golfnerd/)**

The `index.html` file contains the complete 11-chapter physics reference with:
- 17 mathematical equations (rendered with MathJax)
- Data tables and performance matrices
- Full physics explanations
- Print-optimized styling

### Setup (if not already enabled):

1. **Enable GitHub Pages** in repository settings:
   - Go to: `Settings` → `Pages`
   - Under "Source", select **GitHub Actions**
   - Save

2. **Automatic Deployment**: The workflow (`.github/workflows/deploy.yml`) automatically deploys `index.html` whenever you push to `main`.

According to [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), when using GitHub Actions, your `index.html` file will be served as the root page of your site.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (metadata, global CSS)
│   └── page.tsx            # Full 11-chapter document
├── components/
│   ├── AoAChart.tsx        # AoA vs ball position — Recharts LineChart
│   ├── Callout.tsx         # Gold / red / green info boxes
│   ├── DataTable.tsx       # Reusable data table with color coding
│   ├── EquationBlock.tsx   # Dark equation block with KaTeX LaTeX
│   ├── HeightChart.tsx     # Clubhead height parabola — Recharts
│   ├── PhysicistBox.tsx    # Dark recommendation box with calc list
│   ├── Sidebar.tsx         # Sticky scrollspy nav (xl screens)
│   ├── SpinHeatmap.tsx     # Backspin RPM color heatmap
│   ├── SwingArcDiagram.tsx # SVG swing geometry diagram
│   └── TrajectoryChart.tsx # Ball flight trajectories — Recharts
├── lib/
│   └── physics-data.ts     # All equations, tables, matrices as typed constants
└── styles/
    └── globals.css         # Grid background, KaTeX import, table styles
```

---

## 📐 Physics Content (11 Chapters)

| Chapter | Topic |
|---------|-------|
| Intro   | Mathematical foundations + attribution |
| I       | Swing as a circular arc — Eq. 1 & 2 |
| II      | Rate of change 1.19°/inch — Eq. 3 & 4 |
| III     | Spin Loft master equation — Eq. 5–8 |
| IV      | Performance matrices (spin RPM heatmap, carry, full matrix) |
| V       | Putter face precision — Eq. 9 |
| VI      | Gate drill tolerance — Eq. 10 |
| VII     | Master reference tables |
| VIII    | Vertical rate of change h(x)=x²/2R — Eq. 11 |
| IX      | Friction limit at 45° spin loft — Eq. 12 |
| X       | Mega-Pinch shaft lean calculation — Eq. 14 |
| XI      | Three-stage ball reaction model — Eq. 15–17 |

---

## 🔧 Key Technologies

| Package | Purpose |
|---------|---------|
| `next@14` | App Router, SSR/CSR split |
| `react-katex` + `katex` | LaTeX equation rendering |
| `recharts` | AoA chart, height parabola, trajectory, heatmap |
| `tailwindcss` | Utility styling (extended with custom design tokens) |
| `framer-motion` | (installed, ready for animation) |
| `typescript` | Full type safety throughout |

---

## 🎨 Design System

Custom design tokens in `tailwind.config.ts`:

```
paper    #f5f0e8   — cream background
ink      #1a1410   — near-black text
accent   #8b1a1a   — deep crimson (chapters, highlights)
gold     #b8860b   — dark gold (equations, callouts)
green    #2d5016   — fairway green (positive values)
rule     #c8b89a   — warm tan (borders, dividers)
```

Grid background overlay in `globals.css` (fixed, pointer-events: none).

---

## 📊 Adding New Equations

In `src/lib/physics-data.ts`, add to the `EQUATIONS` array:

```ts
{
  num: 18,
  label: 'My New Equation',
  attribution: 'Euler (1736)',
  latex: 'E = mc^2',
  explanation: 'Description of what it means.',
  vars: [
    { sym: 'E', def: 'energy' },
    { sym: 'm', def: 'mass' },
  ],
}
```

Then in `page.tsx`:
```tsx
<EquationBlock {...eq(18)} />
```

---

## 📊 Adding New Tables

Use the `DataTable` component — just pass `columns` and `rows`:

```tsx
<DataTable
  label="My Table"
  columns={[
    { key: 'name', label: 'Name', mono: false },
    { key: 'val',  label: 'Value', align: 'right' },
  ]}
  rows={[
    { name: 'Tour Standard', val: '-4.8°', tour: true },
  ]}
  tourKey="tour"
/>
```

---

## 🖨️ PDF Export

Run `npm run build && npm start`, then use browser Print → Save as PDF.  
The design is print-optimized with `@media print` styles.

---

## Mathematical Attribution

All equations derived from first principles with historical attribution:

- **Euler (1736)** — differential geometry of curves
- **Newton / Leibniz (1687/1684)** — calculus, rate of change
- **Taylor (1715)** — Taylor series / parabolic approximation
- **Coulomb (1781)** — friction law F = μN
- **Hertz (1882)** — contact mechanics, normal force
- **Poisson (1817)** — oblique impact mechanics

---

*Built as a Cursor project — all source files are clean TypeScript, no generated code, fully editable.*
# golfnerd
