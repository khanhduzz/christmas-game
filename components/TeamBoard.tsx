'use client'
import { useTeams } from '@/app/context/TeamContext'

export default function TeamBoard() {
  const { teamA, teamB, activePlayer, setActivePlayer } = useTeams()

  const render = (
    team: any,
    side: 'left' | 'right',
    color: 'green' | 'red'
  ) => {
    const baseBg =
      color === 'green'
        ? 'bg-green-600'
        : 'bg-red-600'

    const hoverBg =
      color === 'green'
        ? 'hover:bg-green-500'
        : 'hover:bg-red-500'

    return (
      <div
        className={`
          fixed top-1/2 -translate-y-1/2
          ${side === 'left' ? 'left-4' : 'right-4'}
          w-56 space-y-3
        `}
      >
        <h3 className="font-bold text-white text-lg mb-2 text-center">
          {team.name}
        </h3>

        {team.members.map((m: any) => (
          <div
            key={m.id}
            onClick={() => setActivePlayer(m.id)}
            className={`
              cursor-pointer px-4 py-2 rounded-xl
              text-white font-semibold text-center
              transition-all
              ${baseBg} ${hoverBg}
            `}
          >
            {m.name}
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      {render(teamA, 'left', 'green')}
      {render(teamB, 'right', 'red')}
    </>
  )
}


            //   ${
            //     activePlayer === m.id
            //       ? 'bg-yellow-300 text-black scale-105 shadow-lg'
            //       : `${baseBg} ${hoverBg}`
            //   }