// 'use client'
// import Link from 'next/link'

// export default function GameMenu() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-green-900 to-black">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//         <Link href="/ca-dao">
//           <div className="game-card">
//             🎄 ĐOÁN CA DAO<br/>
//             <span>Văn hóa – vui nhộn</span>
//           </div>
//         </Link>

//         <Link href="/math">
//           <div className="game-card">
//             ⚡ TÍNH NHANH<br/>
//             <span>Phản xạ – tốc độ</span>
//           </div>
//         </Link>

//       </div>
//     </div>
//   )
// }

'use client'
import { useRouter } from 'next/navigation'
import { useTeams } from '@/app/context/TeamContext'
import GameTutorialModal from './GameTutorialModal'
import { game1, game2, game3 } from './tutorials'
import { useState } from 'react'

export default function GameMenu() {
  const router = useRouter()
  const { teamA, teamB } = useTeams()
  const [showTutorial1, setShowTutorial1] = useState(false)
  const [showTutorial2, setShowTutorial2] = useState(false)
  const [showTutorial3, setShowTutorial3] = useState(false)

  return (
    <div className="bg-white/10 backdrop-blur rounded-3xl p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">🎄 Christmas Games 🎄</h1>

      <p className="text-4xl font-bold mb-6">
        {teamA} 🆚 {teamB}
      </p>

      <div className="flex gap-6 justify-center">
        <div className='flex flex-col gap-2'>
          <button
            onClick={() => router.push('/math')}
            className="px-8 py-4 bg-red-600 rounded-xl text-xl"
          >
            🧮 Tính nhanh
          </button>
          {/* Toggle tutorial */}
          <button
            onClick={() => setShowTutorial1(prev => !prev)}
            className="px-3 py-1 text-white border-solid border-2 outline-white rounded-2xl shadow hover:bg-green-700 transition"
          >
            📜 {showTutorial1 ? 'Tutorials' : 'Hướng dẫn'}
          </button>
          {/* Tutorial */}
          <GameTutorialModal
            open={showTutorial1}
            onClose={() => setShowTutorial1(false)}
            {...game1}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <button
            onClick={() => router.push('/ca-dao')}
            className="px-8 py-4 bg-green-600 rounded-xl text-xl"
          >
            🎤 Tục ngữ
          </button>
          {/* Toggle tutorial */}
          <button
            onClick={() => setShowTutorial2(prev => !prev)}
            className="px-3 py-1 text-white border-solid border-2 outline-white rounded-2xl shadow hover:bg-green-700 transition"
          >
            📜 {showTutorial2 ? 'Tutorials' : 'Hướng dẫn'}
          </button>
          {/* Tutorial */}
          <GameTutorialModal
            open={showTutorial2}
            onClose={() => setShowTutorial2(false)}
            {...game2}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <button
            // onClick={() => router.push('/math')}
            className="px-8 py-4 bg-yellow-600 rounded-xl text-xl"
          >
            🎁 Xếp ly
          </button>
          {/* Toggle tutorial */}
          <button
            onClick={() => setShowTutorial3(prev => !prev)}
            className="px-3 py-1 text-white border-solid border-2 outline-white rounded-2xl shadow hover:bg-green-700 transition"
          >
            📜 {showTutorial3 ? 'Tutorials' : 'Hướng dẫn'}
          </button>
          {/* Tutorial */}
          <GameTutorialModal
            open={showTutorial3}
            onClose={() => setShowTutorial3(false)}
            {...game3}
          />
        </div>

      </div>
    </div>
  )
}
