// 'use client'
// import { useEffect, useState } from 'react'

// export default function ResultOverlay({
//   team,
//   answer,
//   onCorrect,
//   onWrong
// }: any) {
//   const [countdown, setCountdown] = useState(3)
//   const [showAnswer, setShowAnswer] = useState(false)

//   // Countdown 3s
//   useEffect(() => {
//     if (countdown <= 0) {
//       setShowAnswer(true)
//       return
//     }

//     const t = setTimeout(() => {
//       setCountdown(c => c - 1)
//     }, 1000)

//     return () => clearTimeout(t)
//   }, [countdown])

//   return (
//     <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//       <div className="bg-white rounded-3xl p-12 text-center w-[420px]">
        
//         <h2 className="text-3xl font-bold mb-4">
//           Đội {team} trả lời
//         </h2>

//         {!showAnswer ? (
//           <>
//             <div className="text-6xl font-bold text-red-600 mb-6">
//               {countdown}
//             </div>
//             <div className="text-lg opacity-70">
//               Chuẩn bị trả lời...
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="text-4xl text-black font-bold mb-6">
//               ✅ Đáp án: <span className="text-green-600">{answer}</span>
//             </div>

//             <div className="flex gap-8 justify-center">
//               <button
//                 onClick={onCorrect}
//                 className="px-10 py-5 bg-green-500 text-3xl rounded-xl"
//               >
//                 ✔
//               </button>

//               <button
//                 onClick={onWrong}
//                 className="px-10 py-5 bg-red-500 text-3xl rounded-xl"
//               >
//                 ✖
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   )
// }


'use client'

type Props = {
  onTeamA: () => void
  onTeamB: () => void
}

export default function ResultOverlay({ onTeamA, onTeamB }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-3xl p-8 text-center w-full max-w-sm shadow-2xl">
        <h2 className="text-2xl font-bold mb-6">
          ⚡ Đội nào bấm trước?
        </h2>

        <div className="flex gap-6 justify-center">
          {/* Team A */}
          <button
            onClick={onTeamA}
            className="px-8 py-4 bg-green-600 text-white text-xl rounded-2xl shadow hover:bg-green-700 transition"
          >
            🟢 Đội A
          </button>

          {/* Team B */}
          <button
            onClick={onTeamB}
            className="px-8 py-4 bg-red-600 text-white text-xl rounded-2xl shadow hover:bg-red-700 transition"
          >
            🔴 Đội B
          </button>
        </div>
      </div>
    </div>
  )
}
