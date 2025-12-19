// import { Team } from './Game'
// import { useTeams } from '@/app/context/TeamContext'

// export default function Result({
//   team,
//   score,
//   time,
// }: {
//   team: Team
//   score: number
//   time: number
// }) {
//   const { teamA, teamB } = useTeams()

//   const teamName = team === 'A' ? teamA : teamB

//   const mm = String(Math.max(0,Math.floor(time / 60))).padStart(2,'0')
//   const ss = String(Math.max(0,time % 60)).padStart(2,'0')

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="bg-white/10 backdrop-blur rounded-3xl p-10 text-center">
//         <h2 className="text-4xl font-extrabold mb-4">🏆 KẾT QUẢ</h2>
//         <p className="text-2xl">Đội {team}</p>
//         <p className="text-2xl">Điểm: {score}</p>
//         <p className="text-xl">Còn lại: {mm}:{ss}</p>
//         <button onClick={() => location.reload()} className="mt-6 px-6 py-3 bg-red-500 rounded-xl">Chơi lại</button>
//       </div>
//     </div>
//   )
// }

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
  const teamName = team === 'A' ? teamA : teamB

  const mm = String(Math.max(0, Math.floor(time / 60))).padStart(2, '0')
  const ss = String(Math.max(0, time % 60)).padStart(2, '0')

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur rounded-3xl p-10 text-center">
        <h2 className="text-4xl font-extrabold mb-4">🏆 KẾT QUẢ</h2>

        {/* ✅ use real team name */}
        <p className="text-2xl">Đội: {teamName}</p>

        <p className="text-2xl">Điểm: {score}</p>
        <p className="text-xl">Còn lại: {mm}:{ss}</p>

        <button
          onClick={() => router.push('/')}
          className="mt-6 px-6 py-3 bg-red-500 rounded-xl"
        >
          Chơi lại
        </button>
      </div>
    </div>
  )
}
