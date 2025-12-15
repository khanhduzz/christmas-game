
import { Team } from './Game'
export default function TeamSelect({ onSelect }: { onSelect: (t: Team) => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-extrabold">🎄 Christmas Game 🎄</h1>
      <div className="flex gap-6">
        <button onClick={() => onSelect('A')} className="px-10 py-5 bg-green-500 rounded-2xl text-2xl font-bold">ĐỘI A</button>
        <button onClick={() => onSelect('B')} className="px-10 py-5 bg-red-500 rounded-2xl text-2xl font-bold">ĐỘI B</button>
      </div>
    </div>
  )
}
