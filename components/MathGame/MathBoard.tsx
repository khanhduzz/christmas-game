'use client'
import { useTeams } from '@/app/context/TeamContext'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  time: number
  question: string
  scoreA: number
  scoreB: number
  onTeamA: () => void
  onTeamB: () => void
}

export default function MathBoard({
  time, question, scoreA, scoreB, onTeamA, onTeamB
}: Props) {
  const { teamA, teamB, addGreen, addRed } = useTeams()

  const mm = String(Math.floor(time / 60)).padStart(2, '0')
  const ss = String(time % 60).padStart(2, '0')
  const isUrgent = time <= 5;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-transparent">
      
      {/* THANH ĐIỂM SỐ VÀ THỜI GIAN */}
      <div className="flex justify-between items-center w-full max-w-5xl mb-12">
        {/* Đội A */}
        <div className="flex flex-col items-start bg-green-600/10 border-l-4 border-green-500 p-4 rounded-r-2xl backdrop-blur-md w-48">
          <span className="text-xs font-black text-green-500 uppercase tracking-widest">{teamA.name}</span>
          <span className="text-4xl font-black text-white">{scoreA}</span>
        </div>

        {/* Đồng hồ Timer trung tâm */}
        <motion.div 
          animate={isUrgent ? { scale: [1, 1.1, 1], color: ['#fff', '#ef4444', '#fff'] } : {}}
          transition={{ repeat: Infinity, duration: 0.5 }}
          className={`flex flex-col items-center justify-center w-32 h-32 rounded-full border-4 shadow-2xl backdrop-blur-xl ${isUrgent ? 'border-red-500 bg-red-500/20' : 'border-white/20 bg-black/40'}`}
        >
          <span className="text-xs font-bold text-white/50 uppercase">Giây</span>
          <span className={`text-4xl font-mono font-black ${isUrgent ? 'text-white' : 'text-yellow-400'}`}>
            {ss}
          </span>
        </motion.div>

        {/* Đội B */}
        <div className="flex flex-col items-end bg-red-600/10 border-r-4 border-red-500 p-4 rounded-l-2xl backdrop-blur-md w-48">
          <span className="text-xs font-black text-red-500 uppercase tracking-widest">{teamB.name}</span>
          <span className="text-4xl font-black text-white">{scoreB}</span>
        </div>
      </div>

      {/* KHU VỰC PHÉP TÍNH */}
      <div className="relative mb-16 h-48 flex items-center justify-center">
        {/* Vòng hào quang phía sau phép tính */}
        <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full animate-pulse" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={question}
            initial={{ y: 20, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 1.1 }}
            className="text-8xl md:text-9xl font-black text-white tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] z-10"
          >
            {question}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* NÚT BẤM DÀNH QUYỀN TRẢ LỜI / XÁC NHẬN ĐIỂM */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        <button
          onClick={() => {
            addGreen()
            onTeamA()
          }}
          className="flex-1 group relative overflow-hidden py-8 bg-green-600 rounded-[2rem] shadow-[0_10px_0_rgb(20,83,45)] active:translate-y-2 active:shadow-none transition-all"
        >
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-sm font-black text-green-200 uppercase tracking-[0.2em] mb-1">Cộng điểm cho</span>
            <span className="text-3xl font-black text-white uppercase">{teamA.name}</span>
          </div>
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>

        <button
          onClick={() => {
            addRed()
            onTeamB()
          }}
          className="flex-1 group relative overflow-hidden py-8 bg-red-600 rounded-[2rem] shadow-[0_10px_0_rgb(153,27,27)] active:translate-y-2 active:shadow-none transition-all"
        >
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-sm font-black text-red-200 uppercase tracking-[0.2em] mb-1">Cộng điểm cho</span>
            <span className="text-3xl font-black text-white uppercase">{teamB.name}</span>
          </div>
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>

      {/* Gợi ý nhỏ */}
      <p className="mt-12 text-white/30 font-bold uppercase tracking-[0.4em] text-[10px]">
        Quick Math Battle Mode
      </p>
    </div>
  )
}