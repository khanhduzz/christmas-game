'use client'
import { useTeams } from '@/app/context/TeamContext'

export default function TeamBoard() {
  const { teamA, teamB, activePlayer, setActivePlayer } = useTeams()

  const render = (team: any, side: 'left' | 'right') => (
    <div className={`w-48 space-y-2 ${side === 'left' ? 'text-left' : 'text-right'}`}>
      <h3 className="font-bold">{team.name}</h3>
      {team.members.map((m: any) => (
        <div
          key={m.id}
          onClick={() => setActivePlayer(m.id)}
          className={`
            cursor-pointer px-3 py-1 rounded-xl transition
            ${activePlayer === m.id
              ? 'bg-yellow-300 scale-105'
              : 'bg-white hover:bg-gray-200'}
          `}
        >
          {m.name}
        </div>
      ))}
    </div>
  )

  return (
    <div className="absolute inset-y-0 flex justify-between items-center px-4">
      {render(teamA, 'left')}
      {render(teamB, 'right')}
    </div>
  )
}
