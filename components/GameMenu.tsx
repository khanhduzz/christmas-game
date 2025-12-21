// 'use client'
// import { useRouter } from 'next/navigation'
// import { useTeams } from '@/app/context/TeamContext'
// import GameTutorialModal from './GameTutorialModal'
// import { game1, game2, game3 } from './tutorials'
// import { useState } from 'react'
// import TeamBoard from './TeamBoard'


// export default function GameMenu() {
//   const router = useRouter()
//   const {
//   teamA,
//   teamB,
//   setTeamAName,
//   setTeamBName,
//   setTeamAMembers,
//   setTeamBMembers,
//   activePlayer,
//   setActivePlayer
// } = useTeams()

//   const [showTutorial1, setShowTutorial1] = useState(false)
//   const [showTutorial2, setShowTutorial2] = useState(false)
//   const [showTutorial3, setShowTutorial3] = useState(false)

//   return (
//     <>
//       <TeamBoard />
//       <div className="bg-white/10 backdrop-blur rounded-3xl p-10 text-center">
//         <h1 className="text-4xl font-bold mb-6">🎄 Christmas Games 🎄</h1>

//         <p className="text-4xl font-bold mb-6">
//           {teamA.name} 🆚 {teamB.name}
//         </p>

//         <div className="flex gap-6 justify-center">
//           <div className='flex flex-col gap-2'>
//             <button
//               onClick={() => router.push('/math')}
//               className="px-8 py-4 bg-red-600 rounded-xl text-xl"
//             >
//               🧮 Tính nhanh
//             </button>
//             {/* Toggle tutorial */}
//             <button
//               onClick={() => setShowTutorial1(prev => !prev)}
//               className="px-3 py-1 text-white border-solid border-2 outline-white rounded-2xl shadow hover:bg-green-700 transition"
//             >
//               📜 {showTutorial1 ? 'Tutorials' : 'Hướng dẫn'}
//             </button>
//             {/* Tutorial */}
//             <GameTutorialModal
//               open={showTutorial1}
//               onClose={() => setShowTutorial1(false)}
//               {...game1}
//             />
//           </div>

//           <div className='flex flex-col gap-2'>
//             <button
//               onClick={() => router.push('/ca-dao')}
//               className="px-8 py-4 bg-green-600 rounded-xl text-xl"
//             >
//               🎤 Tục ngữ
//             </button>
//             {/* Toggle tutorial */}
//             <button
//               onClick={() => setShowTutorial2(prev => !prev)}
//               className="px-3 py-1 text-white border-solid border-2 outline-white rounded-2xl shadow hover:bg-green-700 transition"
//             >
//               📜 {showTutorial2 ? 'Tutorials' : 'Hướng dẫn'}
//             </button>
//             {/* Tutorial */}
//             <GameTutorialModal
//               open={showTutorial2}
//               onClose={() => setShowTutorial2(false)}
//               {...game2}
//             />
//           </div>

//           <div className='flex flex-col gap-2'>
//             <button
//               // onClick={() => router.push('/math')}
//               className="px-8 py-4 bg-yellow-600 rounded-xl text-xl"
//             >
//               🎁 Xếp ly
//             </button>
//             {/* Toggle tutorial */}
//             <button
//               onClick={() => setShowTutorial3(prev => !prev)}
//               className="px-3 py-1 text-white border-solid border-2 outline-white rounded-2xl shadow hover:bg-green-700 transition"
//             >
//               📜 {showTutorial3 ? 'Tutorials' : 'Hướng dẫn'}
//             </button>
//             {/* Tutorial */}
//             <GameTutorialModal
//               open={showTutorial3}
//               onClose={() => setShowTutorial3(false)}
//               {...game3}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


'use client'
import { useRouter } from 'next/navigation'
import { useTeams } from '@/app/context/TeamContext'
import GameTutorialModal from './GameTutorialModal'
import { game1, game2, game3 } from './tutorials'
import { useState } from 'react'
import TeamBoard from './TeamBoard'
import { motion } from 'framer-motion'

export default function GameMenu() {
  const router = useRouter()
  const { teamA, teamB } = useTeams()

  const [showTutorial1, setShowTutorial1] = useState(false)
  const [showTutorial2, setShowTutorial2] = useState(false)
  const [showTutorial3, setShowTutorial3] = useState(false)

  // Cấu trúc chung cho Card trò chơi
  const GameCard = ({ 
    title, 
    icon, 
    colorClass, 
    shadowClass, 
    onClick, 
    onTutorial, 
    tutorialOpen, 
    tutorialData 
  }: any) => (
    <div className="flex flex-col gap-4 group">
      <button
        onClick={onClick}
        className={`relative w-64 h-48 ${colorClass} ${shadowClass} rounded-[2.5rem] transition-all duration-150 active:translate-y-[8px] active:shadow-none hover:translate-y-[-5px] flex flex-col items-center justify-center gap-3 overflow-hidden`}
      >
        <span className="text-5xl group-hover:scale-125 transition-transform duration-300">{icon}</span>
        <span className="text-2xl font-black text-white uppercase tracking-tighter">{title}</span>
        {/* Hiệu ứng lấp lánh */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
      </button>

      <button
        onClick={onTutorial}
        className="mx-auto px-6 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 hover:text-white rounded-full text-sm font-bold transition-all backdrop-blur-sm flex items-center gap-2"
      >
        📜 {tutorialOpen ? 'ĐANG XEM' : 'HƯỚNG DẪN'}
      </button>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-transparent">
      {/* Bảng tên đội và điểm số */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-12 w-full max-w-4xl"
      >
        <TeamBoard />
        
        <div className="text-center mt-8">
          <h1 className="text-5xl md:text-7xl font-black text-white italic drop-shadow-2xl tracking-tighter">
            CHỌN <span className="text-yellow-400">THỬ THÁCH</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-red-500" />
            <p className="text-white/60 font-bold uppercase tracking-[0.3em] text-sm">Đại chiến giáng sinh</p>
            <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-green-500" />
          </div>
        </div>
      </motion.div>

      {/* Danh sách trò chơi */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {/* GAME 1 */}
        <GameCard 
          title="Tính nhanh"
          icon="🧮"
          colorClass="bg-red-600"
          shadowClass="shadow-[0_10px_0_rgb(153,27,27)]"
          onClick={() => router.push('/math')}
          onTutorial={() => setShowTutorial1(true)}
          tutorialOpen={showTutorial1}
        />
        <GameTutorialModal
          open={showTutorial1}
          onClose={() => setShowTutorial1(false)}
          {...game1}
        />

        {/* GAME 2 */}
        <GameCard 
          title="Tục ngữ"
          icon="🎤"
          colorClass="bg-green-600"
          shadowClass="shadow-[0_10px_0_rgb(20,83,45)]"
          onClick={() => router.push('/ca-dao')}
          onTutorial={() => setShowTutorial2(true)}
          tutorialOpen={showTutorial2}
        />
        <GameTutorialModal
          open={showTutorial2}
          onClose={() => setShowTutorial2(false)}
          {...game2}
        />

        {/* GAME 3 */}
        <GameCard 
          title="Xếp ly"
          icon="🎁"
          colorClass="bg-yellow-500"
          shadowClass="shadow-[0_10px_0_rgb(161,98,7)]"
          onClick={() => router.push('/cup')} // Thêm route nếu có
          onTutorial={() => setShowTutorial3(true)}
          tutorialOpen={showTutorial3}
        />
        <GameTutorialModal
          open={showTutorial3}
          onClose={() => setShowTutorial3(false)}
          {...game3}
        />
      </motion.div>

      {/* Footer nhỏ trang trí */}
      <div className="mt-16 text-white/20 font-black text-8xl absolute bottom-0 select-none -z-10 tracking-tighter opacity-10">
        MERRY CHRISTMAS
      </div>
    </div>
  )
}