import { Team } from './Game'
import { useTeams } from '@/app/context/TeamContext'

export default function Result({
  team,
  score,
  time,
}: {
  team: Team
  score: number
  time: number
}) {
  const { teamA, teamB } = useTeams()

  const teamName = team === 'A' ? teamA : teamB

  return (
    <div>
      <h1>Đội {teamName}</h1>
      <p>Điểm: {score}</p>
      <p>Thời gian còn: {time}s</p>
    </div>
  )
}
