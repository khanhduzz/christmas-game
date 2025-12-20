'use client'

import { useTeams } from "@/app/context/TeamContext"

export default function GameOverOverlay({
    scoreA,
    scoreB,
}: {
    scoreA: number
    scoreB: number
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

    const winner =
        scoreA > scoreB ? teamA :
            scoreB > scoreA ? teamB :
                'HÒA'

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
            <div className="bg-white rounded-3xl p-12 text-center min-w-[400px] text-black">

                <h1 className="text-4xl font-bold mb-6 text-green-600">
                    🎉 KẾT THÚC 🎉
                </h1>

                <div className="text-2xl mb-4">
                    {teamA.name}: <b>{scoreA}</b> điểm
                </div>

                <div className="text-2xl mb-6">
                    {teamB.name}: <b>{scoreB}</b> điểm
                </div>

                <div className="text-3xl font-bold text-red-600">
                    🏆 {winner != 'HÒA' ? winner.name : 'HÒA'}
                </div>

            </div>
        </div>
    )
}
