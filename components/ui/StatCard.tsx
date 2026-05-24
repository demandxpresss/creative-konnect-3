interface StatCardProps {
  num:    string
  label:  string
  light?: boolean
}

export function StatCard({ num, label, light = false }: StatCardProps) {
  return (
    <div className={`rounded-[8px] p-3.5 text-center min-w-[72px] ${
      light
        ? 'bg-white/10 border border-white/20'
        : 'bg-ck-blue/12 border border-ck-electric/20'
    }`}>
      <div className={`text-xl font-black leading-none ${light ? 'text-white' : 'text-ck-electric'}`}>
        {num}
      </div>
      <div className="text-[10px] text-[#4a7090] mt-1.5">{label}</div>
    </div>
  )
}

interface StatRowProps {
  stats: { num: string; label: string }[]
  light?: boolean
  cols?: number
}

export function StatRow({ stats, light = false, cols }: StatRowProps) {
  const gridCols = cols ?? stats.length
  return (
    <div className={`grid gap-3`} style={{ gridTemplateColumns: `repeat(${gridCols}, 1fr)` }}>
      {stats.map(s => (
        <StatCard key={s.label} num={s.num} label={s.label} light={light} />
      ))}
    </div>
  )
}
