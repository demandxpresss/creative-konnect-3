// TickerStrip.tsx
export function TickerStrip() {
  const items = ['360 Video','AI Booths','Glambot','VR Games','AR Experiences','Guest Engagement','Custom Merch','Mirror Booth','Car Simulator','Ring Booth']
  const doubled = [...items, ...items]
  return (
    <div className="bg-ck-sky border-b border-[#c0d8ee] overflow-hidden">
      <div className="ticker-track py-3">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-4 pr-8">
            <div className="w-1.5 h-1.5 rounded-full bg-ck-blue flex-shrink-0" />
            <span className="text-xs font-semibold text-ck-deep whitespace-nowrap">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
