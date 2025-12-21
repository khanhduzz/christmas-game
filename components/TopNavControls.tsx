// 'use client'
// import { useRouter } from 'next/navigation'
// import { useTeams } from '@/app/context/TeamContext'
// import { useState } from 'react'
// import BackgroundMusic from './BackgroundMusic'

// export default function TopNavControls() {
//   const router = useRouter()
//   const {
//     setTeamAName,
//     setTeamBName,
//     setTeamAMembers,
//     setTeamBMembers,
//     activePlayer,
//     setActivePlayer,
//     teamA,
//     teamB,
//     greenScore,
//     redScore,
//     resetScores
//   } = useTeams()

//   const [musicOn, setMusicOn] = useState(false)
//   const [volume, setVolume] = useState(0.3)
//   const [showVolume, setShowVolume] = useState(false)

//   return (
//     <>
//       <BackgroundMusic playing={musicOn} volume={volume} />

//       {/* TOP NAV */}
//       <div className="fixed top-4 inset-x-4 z-50 flex items-center gap-3">
//         {/* LEFT CONTROLS */}
//         <div className="flex gap-3">
//           {/* Select team */}
//           <button
//             onClick={() => {
//               setTeamAName('')
//               setTeamBName('')
//               router.push('/team-selection')
//             }}
//             className="px-4 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600"
//           >
//             🦌 Chọn đội
//           </button>

//           {/* Back to team setup */}
//           <button
//             onClick={() => {
//               setTeamAName('')
//               setTeamBName('')
//               router.push('/team-setup')
//             }}
//             className="px-4 py-2 bg-red-500 text-white rounded-xl shadow hover:bg-red-600"
//           >
//             🛠 Đặt tên đội
//           </button>

//           {/* Back to game menu */}
//           <button
//             onClick={() => router.push('/')}
//             className="px-4 py-2 bg-white/90 text-black rounded-xl shadow hover:bg-white"
//           >
//             🎮 Trò chơi
//           </button>

//           {/* Music control */}
//           <div
//             className="relative flex items-center"
//             onMouseEnter={() => setShowVolume(true)}
//             onMouseLeave={() => setShowVolume(false)}
//           >
//             <button
//               onClick={() => setMusicOn(v => !v)}
//               className="text-2xl"
//             >
//               {musicOn ? '🔊' : '🔇'}
//             </button>

//             {showVolume && (
//               <input
//                 type="range"
//                 min={0}
//                 max={1}
//                 step={0.05}
//                 value={volume}
//                 onChange={e => setVolume(Number(e.target.value))}
//                 className="ml-2 w-24 accent-green-500"
//               />
//             )}
//           </div>
//         </div>

//         {/* RIGHT SCORE + RESET */}
//         <div className="ml-auto flex items-center gap-4">
//           <div className="flex items-center gap-4 bg-black/30 px-4 py-2 rounded-xl">
//             <span className="font-bold">
//               <span className='text-green-500'>{teamA.name}{': '}</span>
//               <span className="ml-1 text-xl">{greenScore}</span>
//             </span>
//             <span className="font-bold text-white">
//               <span className='text-red-500'>{teamB.name}{': '}</span>
//               <span className="ml-1 text-xl">{redScore}</span>
//             </span>
//           </div>

//           <button
//             onClick={resetScores}
//             className="px-3 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white text-sm"
//           >
//             Reset
//           </button>
//         </div>
//       </div>
//     </>
//   )
// }


'use client'
import { useRouter } from 'next/navigation'
import { useTeams } from '@/app/context/TeamContext'
import { useState } from 'react'
import BackgroundMusic from './BackgroundMusic'
import membersData from '@/data/member.json' // Import data thành viên

export default function TopNavControls() {
  const router = useRouter()
  const {
    setTeamAName,
    setTeamBName,
    teamA,
    teamB,
    greenScore,
    redScore,
    resetScores,
    excludedIds,        // Lấy từ Context
    toggleExcludeMember  // Lấy từ Context
  } = useTeams()

  const [musicOn, setMusicOn] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [showVolume, setShowVolume] = useState(false)
  const [showManageModal, setShowManageModal] = useState(false) // State điều khiển modal

  return (
    <>
      <BackgroundMusic playing={musicOn} volume={volume} />

      {/* TOP NAV */}
      <div className="fixed top-4 inset-x-4 z-50 flex items-center gap-3">
        {/* LEFT CONTROLS */}
        <div className="flex gap-3">
          
          {/* NÚT QUẢN LÝ QUÂN SỐ - MỚI THÊM */}
          <button
            onClick={() => setShowManageModal(true)}
            className="px-4 py-2 bg-amber-500 text-white rounded-xl shadow hover:bg-amber-600 flex items-center gap-2"
          >
            👥 Quân số
          </button>

          {/* Select team */}
          <button
            onClick={() => {
              setTeamAName('')
              setTeamBName('')
              router.push('/team-selection')
            }}
            className="px-4 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600"
          >
            🦌 Chọn đội
          </button>

          {/* Back to team setup */}
          <button
            onClick={() => {
              setTeamAName('')
              setTeamBName('')
              router.push('/team-setup')
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-xl shadow hover:bg-red-600"
          >
            🛠 Đặt tên đội
          </button>

          {/* Back to game menu */}
          <button
            onClick={() => router.push('/')}
            className="px-4 py-2 bg-white/90 text-black rounded-xl shadow hover:bg-white"
          >
            🎮 Trò chơi
          </button>

          {/* Music control (giữ nguyên) */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setShowVolume(true)}
            onMouseLeave={() => setShowVolume(false)}
          >
            <button onClick={() => setMusicOn(v => !v)} className="text-2xl">
              {musicOn ? '🔊' : '🔇'}
            </button>
            {showVolume && (
              <input
                type="range" min={0} max={1} step={0.05}
                value={volume}
                onChange={e => setVolume(Number(e.target.value))}
                className="ml-2 w-24 accent-green-500"
              />
            )}
          </div>
        </div>

        {/* RIGHT SCORE + RESET (giữ nguyên) */}
        <div className="ml-auto flex items-center gap-4">
          <div className="flex items-center gap-4 bg-black/30 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-sm">
            <span className="font-bold">
              <span className='text-green-500'>{teamA.name || 'Đội A'}{': '}</span>
              <span className="ml-1 text-xl">{greenScore}</span>
            </span>
            <span className="font-bold text-white">
              <span className='text-red-500'>{teamB.name || 'Đội B'}{': '}</span>
              <span className="ml-1 text-xl">{redScore}</span>
            </span>
          </div>

          <button
            onClick={resetScores}
            className="px-3 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white text-sm"
          >
            Reset
          </button>
        </div>
      </div>

      {/* MODAL QUẢN LÝ THÀNH VIÊN - XUẤT HIỆN KHI BẤM NÚT QUÂN SỐ */}
      {showManageModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-3xl p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-3xl font-black text-amber-400">DANH SÁCH ĐIỂM DANH</h2>
                <p className="text-gray-400 text-sm">Bấm vào tên để đánh dấu vắng mặt (X)</p>
              </div>
              <button 
                onClick={() => setShowManageModal(false)} 
                className="text-gray-400 hover:text-white text-3xl p-2"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
              {membersData.map((member) => {
                const isExcluded = excludedIds.includes(member.id);
                return (
                  <div 
                    key={member.id}
                    onClick={() => toggleExcludeMember(member.id)}
                    className={`group relative p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 select-none ${
                      isExcluded 
                      ? 'bg-slate-800/50 border-slate-700 text-slate-500 opacity-40' 
                      : 'bg-white/5 border-white/10 text-white hover:border-amber-500/50 hover:bg-amber-500/10'
                    }`}
                  >
                    <span className={`font-bold ${isExcluded ? 'line-through' : ''}`}>
                      {member.name}
                    </span>
                    <div className={`absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isExcluded ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                      {isExcluded ? '✕' : '✓'}
                    </div>
                  </div>
                )
              })}
            </div>

            <button 
              onClick={() => setShowManageModal(false)}
              className="w-full mt-8 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black py-4 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-95"
            >
              XÁC NHẬN QUÂN SỐ
            </button>
          </div>
        </div>
      )}
    </>
  )
}