// import { useRouter } from 'next/navigation'
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
//   const router = useRouter()
//   const teamData = team === 'A' ? teamA : teamB

//   const mm = String(Math.max(0, Math.floor(time / 60))).padStart(2, '0')
//   const ss = String(Math.max(0, time % 60)).padStart(2, '0')

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-12 md:p-16 text-center max-w-xl w-full shadow-2xl">
//         {/* Title */}
//         <h2 className="text-5xl md:text-6xl font-extrabold mb-10 tracking-wide">
//           🏆 KẾT QUẢ
//         </h2>

//         {/* Team */}
//         <p className="text-4xl md:text-5xl font-extrabold text-white mb-10">
//           {teamData.name}
//         </p>

//         {/* Score */}
//         <div className="mb-8">
//           <p className="text-2xl uppercase tracking-widest opacity-80 mb-2">
//             Điểm số
//           </p>
//           <p className="text-6xl md:text-7xl font-extrabold text-yellow-300 drop-shadow">
//             ⭐ {score}
//           </p>
//         </div>

//         {/* Time */}
//         <p className="text-xl md:text-2xl opacity-80 mb-12">
//           ⏱ Thời gian còn lại: {mm}:{ss}
//         </p>

//         {/* Action */}
//         <button
//           onClick={() => router.push('/')}
//           className="px-10 py-5 text-2xl font-bold rounded-2xl
//                      bg-red-500 hover:bg-red-600 transition
//                      shadow-lg"
//         >
//           Chơi lại
//         </button>
//       </div>
//     </div>
//   )
// }


'use client'
import { useRouter } from 'next/navigation'
import { Team } from './Game'
import { useTeams } from '@/app/context/TeamContext'
import { motion } from 'framer-motion'

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
  const teamData = team === 'A' ? teamA : teamB

  const mm = String(Math.max(0, Math.floor(time / 60))).padStart(2, '0')
  const ss = String(Math.max(0, time % 60)).padStart(2, '0')

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Hiệu ứng tia sáng tỏa ra từ tâm (Radial Flare) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.15)_0%,transparent_70%)]" />

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 15 }}
        className="relative bg-[#0a1f2e]/90 border-4 border-yellow-500/30 backdrop-blur-2xl rounded-[3.5rem] p-12 md:p-16 text-center max-w-2xl w-full shadow-[0_0_100px_rgba(234,179,8,0.2)]"
      >
        {/* Icon Cup khổng lồ */}
        <motion.div 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          className="text-8xl mb-6"
        >
          🏆
        </motion.div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-black text-yellow-500 uppercase tracking-[0.5em] mb-4">
          Hoàn Thành
        </h2>

        {/* Team Name với hiệu ứng Gradient */}
        <h3 className="text-5xl md:text-7xl font-black text-white italic mb-10 drop-shadow-2xl">
          {teamData.name}
        </h3>

        <div className="grid grid-cols-2 gap-6 mb-12">
          {/* Score Box */}
          <div className="bg-white/5 rounded-[2rem] p-6 border border-white/10 shadow-inner">
            <p className="text-sm font-black text-green-500 uppercase tracking-widest mb-2">Tổng điểm</p>
            <p className="text-5xl md:text-6xl font-black text-white">
              {score}<span className="text-2xl text-yellow-400">⭐</span>
            </p>
          </div>

          {/* Time Box */}
          <div className="bg-white/5 rounded-[2rem] p-6 border border-white/10 shadow-inner">
            <p className="text-sm font-black text-red-500 uppercase tracking-widest mb-2">Thời gian</p>
            <p className="text-5xl md:text-6xl font-black text-white font-mono">
              {mm}:{ss}
            </p>
          </div>
        </div>

        {/* Thông điệp chúc mừng */}
        <p className="text-white/60 text-lg mb-10 font-medium italic">
          "Một màn trình diễn thật tuyệt vời trong đêm Giáng Sinh!"
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push('/game')}
            className="flex-1 px-10 py-5 text-2xl font-black rounded-2xl bg-red-600 text-white shadow-[0_8px_0_rgb(153,27,27)] hover:shadow-[0_4px_0_rgb(153,27,27)] hover:translate-y-[4px] active:translate-y-[8px] active:shadow-none transition-all"
          >
            CHƠI LẠI
          </button>
          
          <button
            onClick={() => window.print()} // Mẹo nhỏ để in kết quả hoặc chụp màn hình
            className="px-6 py-5 text-2xl font-black rounded-2xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
            title="Lưu kết quả"
          >
            📸
          </button>
        </div>

        {/* Trang trí góc */}
        <div className="absolute top-10 left-10 text-3xl opacity-20">❄️</div>
        <div className="absolute bottom-10 right-10 text-3xl opacity-20">🎁</div>
      </motion.div>

      {/* Hiệu ứng pháo hoa giấy mờ ảo phía sau */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-yellow-400 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}