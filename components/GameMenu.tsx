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

export default function GameMenu() {
  const router = useRouter()
  const { teamA, teamB } = useTeams()

  return (
    <div className="bg-white/10 backdrop-blur rounded-3xl p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">🎄 Christmas Games 🎄</h1>

      <p className="text-xl mb-4">
        {teamA} 🆚 {teamB}
      </p>

      <div className="flex gap-6 justify-center">
        <button
          onClick={() => router.push('/ca-dao')}
          className="px-8 py-4 bg-red-600 rounded-xl text-xl"
        >
          🎤 Ca Dao
        </button>

        <button
          onClick={() => router.push('/math')}
          className="px-8 py-4 bg-green-600 rounded-xl text-xl"
        >
          🧮 Tính nhanh
        </button>
      </div>
    </div>
  )
}
