'use client'
import { useTeams } from '@/app/context/TeamContext'

type Member = { id: string; name: string }

export default function TeamArea({
  team,
  members,
  color
}: {
  team: 'A' | 'B'
  members: Member[]
  color: 'green' | 'red'
}) {
  const { teamA, teamB } = useTeams()

  const teamName = team === 'A' ? teamA.name : teamB.name

  return (
    <div
      className={`rounded-3xl p-4 bg-${color}-100 text-gray-900`}
    >
      <h2 className="text-2xl font-bold text-center mb-4">
        {teamName}
      </h2>

      <ul className="space-y-2">
        {members.map(m => (
          <li
            key={m.id}
            className="bg-white rounded-xl px-4 py-2 shadow"
          >
            {m.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

