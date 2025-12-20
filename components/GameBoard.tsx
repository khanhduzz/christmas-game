// import { useTeams } from "@/app/context/TeamContext"

// export default function GameBoard({
//   team, question, score, time, onCorrect, onSkip
// }: any) {

//   if (!question) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-2xl">
//         ⏳ Đang tổng kết kết quả...
//       </div>
//     )
//   }

//   const mm = String(Math.floor(time / 60)).padStart(2, '0')
//   const ss = String(time % 60).padStart(2, '0')
//   const { teamA, teamB, addGreen, addRed } = useTeams()


//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="bg-white/10 backdrop-blur rounded-3xl p-10 max-w-3xl w-full">
//         <div className="flex justify-between mb-6">
//           <div>{team.name}</div>
//           <div>⏱ {mm}:{ss}</div>
//           <div>⭐ {score}</div>
//         </div>

//         <div className="text-center text-4xl md:text-5xl font-bold p-8 leading-snug">
//           “{question.text}”
//         </div>

//         <div className="flex justify-center gap-6">
//           <button onClick={() => {
//             onCorrect
//             team === teamA ? addGreen() : addRed()
//           }} className="px-10 py-5 text-2xl bg-green-500 rounded-xl">
//             ✔ ĐÚNG
//           </button>
//           <button onClick={onSkip} className="px-10 py-5 text-2xl bg-yellow-400 text-black rounded-xl">
//             ⏭ SKIP
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'
import { useTeams } from '@/app/context/TeamContext'

export default function GameBoard({
  team,          // 'A' | 'B'
  question,
  score,
  time,
  onCorrect,
  onSkip
}: any) {
  const { teamA, teamB } = useTeams()

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        ⏳ Đang tổng kết kết quả...
      </div>
    )
  }

  const mm = String(Math.floor(time / 60)).padStart(2, '0')
  const ss = String(time % 60).padStart(2, '0')

  // ✅ Lấy tên đội đúng
  const teamName = team === 'A' ? teamA.name : teamB.name
  const { addGreen, addRed } = useTeams()

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur rounded-3xl p-10 max-w-3xl w-full">
        <div className="flex justify-between mb-6 text-xl font-bold">
          <div>{teamName}</div>
          <div>⏱ {mm}:{ss}</div>
          <div>⭐ {score}</div>
        </div>

        <div className="text-center text-4xl md:text-5xl font-bold p-8 leading-snug">
          “{question.text}”
        </div>

        <div className="flex justify-center gap-6">
          <button
            onClick={onCorrect}   // ✅ GỌI ĐÚNG
            className="px-10 py-5 text-2xl bg-green-500 rounded-xl"
          >
            ✔ ĐÚNG
          </button>

          <button
            onClick={onSkip}
            className="px-10 py-5 text-2xl bg-yellow-400 text-black rounded-xl"
          >
            ⏭ BỎ QUA
          </button>
        </div>
      </div>
    </div>
  )
}
