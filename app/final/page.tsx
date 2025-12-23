'use client'
import { useTeams } from '@/app/context/TeamContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti' // Bạn có thể cài thêm: npm install react-confetti

export default function WinnerPage() {
  const { teamA, teamB, greenScore, redScore } = useTeams()
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  // Xác định đội thắng
  const isGreenWin = greenScore > redScore
  const isDraw = greenScore === redScore
  const winnerName = isGreenWin ? teamA.name : teamB.name
  const winnerColor = isGreenWin ? 'text-green-500' : 'text-red-500'

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  return (
    <div className="min-h-screen bg-[#051622] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Hiệu ứng Pháo hoa giấy khi có đội thắng */}
      {windowSize.width > 0 && (
        <Confetti 
          width={windowSize.width} 
          height={windowSize.height} 
          recycle={true}
          numberOfPieces={200}
          colors={isGreenWin ? ['#22c55e', '#ffffff'] : ['#ef4444', '#ffffff']}
        />
      )}

      {/* Tuyết rơi chậm và lung linh */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: ['-10vh', '110vh'],
              x: [Math.random() * 10, Math.random() * -10],
              rotate: 360 
            }}
            transition={{ duration: Math.random() * 5 + 10, repeat: Infinity, ease: "linear" }}
            className="absolute text-white/20 text-2xl"
            style={{ left: `${Math.random() * 100}%`, top: `-5%` }}
          >
            ❄️
          </motion.div>
        ))}
      </div>

      {/* Nội dung chính */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 text-center"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-9xl mb-6"
        >
          {isDraw ? '🤝' : '👑'}
        </motion.div>

        <h2 className="text-2xl font-black uppercase tracking-[0.5em] text-white/50 mb-4">
          {isDraw ? 'KẾT QUẢ HÒA CHUNG CUỘC' : 'QUÁN QUÂN MERRY QUIZMAS 2025'}
        </h2>

        <motion.h1 
          className={`text-[10rem] font-black italic tracking-tighter leading-none mb-8 ${winnerColor} drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]`}
        >
          {isDraw ? 'HÒA NHAU' : winnerName}
        </motion.h1>

        {/* Bảng điểm số cuối cùng */}
        <div className="flex items-center justify-center gap-12 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 shadow-2xl">
          <div className="text-center">
            <p className="text-green-500 font-bold mb-2 uppercase">{teamA.name}</p>
            <p className="text-7xl font-black">{greenScore}</p>
          </div>
          <div className="text-5xl font-light text-white/20">VS</div>
          <div className="text-center">
            <p className="text-red-500 font-bold mb-2 uppercase">{teamB.name}</p>
            <p className="text-7xl font-black">{redScore}</p>
          </div>
        </div>

        {/* Nút quay lại hoặc kết thúc */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/'}
          className="mt-16 bg-white text-black px-12 py-5 rounded-2xl font-black text-2xl shadow-xl transition-all"
        >
          CHÚC MỪNG GIÁNG SINH 🎄
        </motion.button>
      </motion.div>

      {/* Decor góc */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
    </div>
  )
}