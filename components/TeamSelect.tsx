'use client'
import { useTeams } from '@/app/context/TeamContext'
import { Team } from './Game'
import { motion } from 'framer-motion'

export default function TeamSelect({ onSelect }: { onSelect: (t: Team) => void }) {
  const { teamA, teamB } = useTeams()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Tiêu đề chính với hiệu ứng đổ bóng mạnh */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-yellow-400 font-black tracking-[0.3em] uppercase mb-2 drop-shadow-md">
          Ready to Battle?
        </h2>
        <h1 className="text-6xl md:text-8xl font-black italic text-white drop-shadow-[0_10px_0_rgba(0,0,0,0.5)]">
          AI <span className="text-red-600">RA QUÂN</span> TRƯỚC?
        </h1>
      </motion.div>

      {/* Khu vực chọn đội - Đối đầu */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">
        
        {/* ĐỘI A (XANH) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={() => onSelect('A')}
            className="group relative w-64 h-64 md:w-80 md:h-80 bg-green-600 rounded-[3rem] shadow-[0_15px_0_rgb(20,83,45)] hover:shadow-[0_5px_0_rgb(20,83,45)] hover:translate-y-[10px] transition-all duration-150 flex flex-col items-center justify-center p-6 overflow-hidden border-4 border-green-400/30"
          >
            <span className="text-7xl mb-4 group-hover:animate-bounce">🎄</span>
            <span className="text-3xl md:text-4xl font-black text-white text-center leading-tight uppercase">
              {teamA.name || 'ĐỘI XANH'}
            </span>
            {/* Hiệu ứng tia sáng quét qua */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>

        {/* CHỮ VS Ở GIỮA */}
        <div className="flex flex-col items-center">
          <div className="text-5xl md:text-7xl font-black text-yellow-500 italic drop-shadow-2xl animate-pulse">
            VS
          </div>
          <div className="h-24 w-[2px] bg-gradient-to-b from-yellow-500 to-transparent hidden md:block" />
        </div>

        {/* ĐỘI B (ĐỎ) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={() => onSelect('B')}
            className="group relative w-64 h-64 md:w-80 md:h-80 bg-red-600 rounded-[3rem] shadow-[0_15px_0_rgb(153,27,27)] hover:shadow-[0_5px_0_rgb(153,27,27)] hover:translate-y-[10px] transition-all duration-150 flex flex-col items-center justify-center p-6 overflow-hidden border-4 border-red-400/30"
          >
            <span className="text-7xl mb-4 group-hover:animate-bounce">🎁</span>
            <span className="text-3xl md:text-4xl font-black text-white text-center leading-tight uppercase">
              {teamB.name || 'ĐỘI ĐỎ'}
            </span>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[50%] bg-white/5 -rotate-12 pointer-events-none" />
      
      {/* Footer hint */}
      <p className="mt-16 text-white/40 font-bold uppercase tracking-widest text-sm animate-bounce">
        👇 Click vào tên đội để bắt đầu tính giờ
      </p>

    </div>
  )
}