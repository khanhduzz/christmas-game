'use client'
import { useTeams } from '@/context/TeamContext'


type Props = {
    time: number
    question: string
    scoreA: number
    scoreB: number
      onTeamA: () => void
  onTeamB: () => void
    // onChoose: (team: 'A' | 'B') => void
}

export default function MathBoard({
    time, question, scoreA, scoreB, onTeamA, onTeamB
}: Props) {
    const mm = String(Math.floor(time / 60)).padStart(2, '0')
    const ss = String(time % 60).padStart(2, '0')
    const { teamA, teamB } = useTeams()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex justify-between w-full max-w-4xl mb-8 text-2xl">
        <div>🟢 {teamA}: {scoreA}</div>
        <div>⏱ {mm}:{ss}</div>
        <div>🔴 {teamB}: {scoreB}</div>
      </div>

      <div className="text-6xl font-bold mb-12">{question}</div>

      <div className="flex gap-10">
        <button
          // onClick={() => onChoose('A')}
          onClick={onTeamA}
          className="team-btn green"
        >
          {teamA}
        </button>

        <button
          // onClick={() => onChoose('B')}
          onClick={onTeamB}
          className="team-btn red"
        >
          {teamB}
        </button>
      </div>
    </div>
  )
}


// type Props = {
//   time: number
//   question: string
//   scoreA: number
//   scoreB: number
//   onTeamA: () => void
//   onTeamB: () => void
// }

// export default function MathBoard({
//   time,
//   question,
//   scoreA,
//   scoreB,
//   onTeamA,
//   onTeamB
// }: Props) {
//   return (
//     <div className="h-screen flex flex-col items-center justify-center gap-6">
      
//       {/* Timer */}
//       <div className="text-3xl font-bold">⏱ {time}s</div>

//       {/* Question */}
//       <div className="text-5xl font-extrabold">
//         {question}
//       </div>

//       {/* Scores */}
//       <div className="flex gap-12 text-2xl font-bold">
//         <div className="text-green-600">🟢 A: {scoreA}</div>
//         <div className="text-red-600">🔴 B: {scoreB}</div>
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-10 mt-6">
//         <button
//           onClick={onTeamA}
//           className="px-12 py-6 bg-green-600 text-white text-2xl rounded-3xl shadow-xl hover:bg-green-700 transition"
//         >
//           🟢 +1 Đội A
//         </button>

//         <button
//           onClick={onTeamB}
//           className="px-12 py-6 bg-red-600 text-white text-2xl rounded-3xl shadow-xl hover:bg-red-700 transition"
//         >
//           🔴 +1 Đội B
//         </button>
//       </div>
//     </div>
//   )
// }
