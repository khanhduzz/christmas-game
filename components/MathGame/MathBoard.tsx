'use client'
import { useTeams } from '@/context/TeamContext'


type Props = {
  time: number
  question: string
  scoreA: number
  scoreB: number
  onTeamA: () => void
  onTeamB: () => void
}

export default function MathBoard({
  time, question, scoreA, scoreB, onTeamA, onTeamB
}: Props) {
  const mm = String(Math.floor(time / 60)).padStart(2, '0')
  const ss = String(time % 60).padStart(2, '0')
  // const { teamA, teamB, addGreen, addRed } = useTeams()
  const {
  teamA,
  teamB,
  addGreen,
  addRed,
  setTeamAName,
  setTeamBName,
  setTeamAMembers,
  setTeamBMembers,
  activePlayer,
  setActivePlayer
} = useTeams()


  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex justify-between w-full max-w-4xl mb-8 text-2xl">
        <div>🟢 {teamA.name}: {scoreA}</div>
        <div>⏱ {mm}:{ss}</div>
        <div>🔴 {teamB.name}: {scoreB}</div>
      </div>

      <div className="text-6xl font-bold mb-12">{question}</div>

      <div className="flex gap-10">
        <button
          onClick={() => {
            addGreen()
            onTeamA()
          }}
          className="team-btn green"
        >
          {teamA.name}
        </button>

        <button
          onClick={() => {
            addRed()
            onTeamB()
          }}
          className="team-btn red"
        >
          {teamB.name}
        </button>
      </div>
    </div>
  )
}