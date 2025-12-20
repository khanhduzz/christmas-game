'use client'
import { useTeams } from '@/app/context/TeamContext'

export default function TeamSetup({ onDone }: { onDone: () => void }) {
  // const { teamA, teamB, setTeamA, setTeamB } = useTeams()
  const {
  teamA,
  teamB,
  setTeamAName,
  setTeamBName,
  setTeamAMembers,
  setTeamBMembers,
  activePlayer,
  setActivePlayer
} = useTeams()


  return (
    <div className="bg-white p-8 rounded-3xl text-black w-[420px] text-center">
      <h1 className="text-3xl font-bold mb-6">🎄 Đặt tên đội 🎄</h1>

      <input
        value={teamA.name}
        onChange={e => setTeamAName(e.target.value)}
        className="w-full p-3 border rounded-xl mb-4 text-lg"
        placeholder="Tên đội A"
      />

      <input
        value={teamB.name}
        onChange={e => setTeamBName(e.target.value)}
        className="w-full p-3 border rounded-xl mb-6 text-lg"
        placeholder="Tên đội B"
      />

      <button
        onClick={onDone}
        className="w-full py-3 bg-green-600 text-white rounded-xl text-xl"
      >
        Tiếp tục 🎮
      </button>
    </div>
  )
}
