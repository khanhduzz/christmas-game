export default function WaitingArea({ members }: { members: any[] }) {
  return (
    <div className="bg-white/10 rounded-2xl p-4">
      <h3 className="text-xl font-bold mb-3">⏳ Waiting</h3>
      {members.map(m => (
        <div key={m.id} className="py-1">{m.name}</div>
      ))}
    </div>
  )
}
