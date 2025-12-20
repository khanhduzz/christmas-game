import { useRouter } from 'next/navigation'
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
  const router = useRouter()
  const teamData = team === 'A' ? teamA : teamB

  const mm = String(Math.max(0, Math.floor(time / 60))).padStart(2, '0')
  const ss = String(Math.max(0, time % 60)).padStart(2, '0')

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-12 md:p-16 text-center max-w-xl w-full shadow-2xl">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-extrabold mb-10 tracking-wide">
          🏆 KẾT QUẢ
        </h2>

        {/* Team */}
        <p className="text-4xl md:text-5xl font-extrabold text-white mb-10">
          {teamData.name}
        </p>

        {/* Score */}
        <div className="mb-8">
          <p className="text-2xl uppercase tracking-widest opacity-80 mb-2">
            Điểm số
          </p>
          <p className="text-6xl md:text-7xl font-extrabold text-yellow-300 drop-shadow">
            ⭐ {score}
          </p>
        </div>

        {/* Time */}
        <p className="text-xl md:text-2xl opacity-80 mb-12">
          ⏱ Thời gian còn lại: {mm}:{ss}
        </p>

        {/* Action */}
        <button
          onClick={() => router.push('/')}
          className="px-10 py-5 text-2xl font-bold rounded-2xl
                     bg-red-500 hover:bg-red-600 transition
                     shadow-lg"
        >
          Chơi lại
        </button>
      </div>
    </div>
  )
}
