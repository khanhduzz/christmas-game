
import { useTeams } from '@/app/context/TeamContext'
import { Team } from './Game'
export default function TeamSelect({ onSelect }: { onSelect: (t: Team) => void }) {
  // const { teamA, teamB } = useTeams()
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
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-extrabold">🎄 Christmas Game 🎄</h1>
      <div className="flex gap-6">
        <button onClick={() => onSelect('A')}
          className="px-10 py-5 bg-green-500 rounded-2xl text-2xl font-bold">
          {teamA.name}
        </button>
        <button onClick={() => onSelect('B')}
          className="px-10 py-5 bg-red-500 rounded-2xl text-2xl font-bold">
          {teamB.name}
        </button>
      </div>
    </div>
  )
}
