'use client'

interface Column {
  key: string
  label: string
  align?: 'left' | 'right' | 'center'
  mono?: boolean
}

interface DataTableProps {
  label: string
  columns: Column[]
  rows: Record<string, string | number | boolean>[]
  tourKey?: string      // key that marks a row as "tour standard"
  dangerKey?: string    // key that marks a row as dangerous/warning
}

const numColor = (v: string | number) => {
  if (typeof v === 'string' && v.includes('⚠⚠')) return 'text-red-700 font-bold'
  if (typeof v === 'string' && v.includes('⚠'))  return 'text-amber-700 font-bold'
  if (typeof v === 'string' && v.includes('★'))   return 'text-green-700 font-bold'
  return ''
}

export default function DataTable({ label, columns, rows, tourKey, dangerKey }: DataTableProps) {
  return (
    <div className="my-8">
      <span className="font-mono text-xs tracking-widest uppercase block mb-2"
            style={{ color: '#7a6a58' }}>
        {label}
      </span>
      <div className="overflow-x-auto rounded-sm border" style={{ borderColor: '#c8b89a' }}>
        <table className="w-full text-sm">
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col.key}
                    className={`text-${col.align ?? 'left'}`}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => {
              const isTour   = tourKey   && row[tourKey]
              const isDanger = dangerKey && row[dangerKey]
              return (
                <tr key={ri} className={
                  isTour   ? 'bg-red-50/60 border-l-2 border-l-red-800' :
                  isDanger ? 'opacity-80' : ''
                }>
                  {columns.map(col => {
                    const val = row[col.key]
                    if (typeof val === 'boolean') return null
                    const cls = `${col.mono !== false ? 'font-mono' : ''} text-${col.align ?? 'left'} ${numColor(val)}`
                    return (
                      <td key={col.key} className={cls}
                          style={{ color: isTour && col.key === columns[0].key ? '#8b1a1a' : undefined }}>
                        {String(val)}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
