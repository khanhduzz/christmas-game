
'use client'
import GameMenu from '@/components/GameMenu'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-700 to-green-700">
      <GameMenu />
    </div>
  )
}

// 'use client'
// import { useTeams } from './context/TeamContext'
// import { useRouter } from 'next/navigation'

// export default function SetupPage() {
//   const { teamA, teamB, setTeamA, setTeamB } = useTeams()
//   const router = useRouter()

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-700 to-green-700">
//       <div className="bg-white p-10 rounded-3xl w-[420px] text-black text-center">
//         <h1 className="text-3xl font-bold mb-6">🎄 Đặt tên đội 🎄</h1>

//         <input
//           value={teamA}
//           onChange={e => setTeamA(e.target.value)}
//           className="w-full p-3 border rounded-xl mb-4 text-lg"
//         />

//         <input
//           value={teamB}
//           onChange={e => setTeamB(e.target.value)}
//           className="w-full p-3 border rounded-xl mb-6 text-lg"
//         />

//         <button
//           onClick={() => router.push('/')}
//           className="w-full py-3 bg-green-600 text-white rounded-xl text-xl"
//         >
//           Bắt đầu chơi 🎉
//         </button>
//       </div>
//     </div>
//   )
// }

// 'use client'
// import { useState } from 'react'
// import TeamSetup from '@/components/TeamSetup'
// import GameMenu from '@/components/GameMenu'

// export default function Home() {
//   const [ready, setReady] = useState(false)

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-700 to-green-700">
//       {!ready ? (
//         <TeamSetup onDone={() => setReady(true)} />
//       ) : (
//         <GameMenu />
//       )}
//     </div>
//   )
// }

