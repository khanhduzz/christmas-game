import { useTeams } from "@/app/context/TeamContext"

export default function PickControls({
  onGreen,
  onRed,
  disabled,
}: {
  onGreen: () => void
  onRed: () => void
  disabled: boolean
}) {
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
    <div className="flex justify-center gap-12 mt-10">
      <button
        disabled={disabled}
        onClick={onGreen}
        className="px-10 py-5 bg-green-500 rounded-2xl text-2xl font-bold"
      >
        🟢 {teamA.name}
      </button>

      <button
        disabled={disabled}
        onClick={onRed}
        className="px-10 py-5 bg-red-500 rounded-2xl text-2xl font-bold"
      >
        🔴 {teamB.name}
      </button>
    </div>
  )
}
