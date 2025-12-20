// 'use client'
// import { useRouter } from 'next/navigation'
// import { useTeams } from '@/app/context/TeamContext'
// import { useState } from 'react'
// import BackgroundMusic from './BackgroundMusic'

// export default function TopNavControls() {
//   const router = useRouter()
//   // const { setTeamA, setTeamB } = useTeams()
//   const {
//     setTeamAName,
//     setTeamBName,
//     setTeamAMembers,
//     setTeamBMembers,
//     activePlayer,
//     setActivePlayer
//   } = useTeams()

//   const [musicOn, setMusicOn] = useState(false)
//   const [volume, setVolume] = useState(0.3)
//   const [showVolume, setShowVolume] = useState(false)
//   const { teamA, teamB, greenScore, redScore, resetScores } = useTeams()

//   return (
//     <>
//       <BackgroundMusic playing={musicOn} volume={volume} />
//       <div className="fixed top-4 left-4 z-50 flex gap-3">
//         {/* Select team */}
//         <button
//           onClick={() => {
//             setTeamAName('')
//             setTeamBName('')
//             router.push('/team-selection')
//           }}
//           className="px-4 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600"
//         >
//           🦌 Chọn đội
//         </button>

//         {/* Back to team setup */}
//         <button
//           onClick={() => {
//             setTeamAName('')
//             setTeamBName('')
//             router.push('/team-setup')
//           }}
//           className="px-4 py-2 bg-red-500 text-white rounded-xl shadow hover:bg-red-600"
//         >
//           🛠 Đặt tên đội
//         </button>

//         {/* Back to game menu */}
//         <button
//           onClick={() => router.push('/')}
//           className="px-4 py-2 bg-white/90 text-black rounded-xl shadow hover:bg-white"
//         >
//           🎮 Trò chơi
//         </button>

//         {/* Music control */}
//         <div
//           className="relative flex items-center"
//           onMouseEnter={() => setShowVolume(true)}
//           onMouseLeave={() => setShowVolume(false)}
//         >
//           <button
//             onClick={() => setMusicOn(v => !v)}
//             className="text-2xl"
//           >
//             {musicOn ? '🔊' : '🔇'}
//           </button>

//           {/* Volume slider */}
//           {showVolume && (
//             <input
//               type="range"
//               min={0}
//               max={1}
//               step={0.05}
//               value={volume}
//               onChange={e => setVolume(Number(e.target.value))}
//               className="ml-2 w-24 accent-green-500"
//             />
//           )}
//         </div>

//         <div className="ml-auto flex items-center gap-4">
//           <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-xl">
//             <span className="text-green-400 font-bold">🟢 {teamA.name} {greenScore}</span>
//             <span className="text-red-400 font-bold">🔴 {teamB.name} {redScore}</span>
//           </div>

//           <button
//             onClick={resetScores}
//             className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm"
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

export default function TopNavControls() {
  const router = useRouter()
  const {
    setTeamAName,
    setTeamBName,
    setTeamAMembers,
    setTeamBMembers,
    activePlayer,
    setActivePlayer,
    teamA,
    teamB,
    greenScore,
    redScore,
    resetScores
  } = useTeams()

  const [musicOn, setMusicOn] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [showVolume, setShowVolume] = useState(false)

  return (
    <>
      <BackgroundMusic playing={musicOn} volume={volume} />

      {/* TOP NAV */}
      <div className="fixed top-4 inset-x-4 z-50 flex items-center gap-3">
        {/* LEFT CONTROLS */}
        <div className="flex gap-3">
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

          {/* Music control */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setShowVolume(true)}
            onMouseLeave={() => setShowVolume(false)}
          >
            <button
              onClick={() => setMusicOn(v => !v)}
              className="text-2xl"
            >
              {musicOn ? '🔊' : '🔇'}
            </button>

            {showVolume && (
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={volume}
                onChange={e => setVolume(Number(e.target.value))}
                className="ml-2 w-24 accent-green-500"
              />
            )}
          </div>
        </div>

        {/* RIGHT SCORE + RESET */}
        <div className="ml-auto flex items-center gap-4">
          <div className="flex items-center gap-4 bg-black/30 px-4 py-2 rounded-xl">
            <span className="font-bold">
              <span className='text-green-500'>{teamA.name}{': '}</span>
              <span className="ml-1 text-xl">{greenScore}</span>
            </span>
            <span className="font-bold text-white">
              <span className='text-red-500'>{teamB.name}{': '}</span>
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
    </>
  )
}
