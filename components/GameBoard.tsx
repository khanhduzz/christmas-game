'use client'
import { useTeams } from '@/app/context/TeamContext'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function GameBoard({
  team,          // 'A' | 'B'
  question,
  score,
  time,
  onCorrect,
  onSkip
}: any) {
  const { teamA, teamB } = useTeams()

  // max 3 skips
  const MAX_SKIP = 3
  const [skipLeft, setSkipLeft] = useState(MAX_SKIP)

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-3xl font-black text-white animate-bounce italic">
          ⏳ ĐANG TỔNG KẾT KẾT QUẢ...
        </div>
      </div>
    )
  }

  const mm = String(Math.floor(time / 60)).padStart(2, '0')
  const ss = String(time % 60).padStart(2, '0')
  const teamName = team === 'A' ? teamA.name : teamB.name
  const isUrgent = time <= 10; // Cảnh báo khi còn dưới 10 giây

  const handleSkip = () => {
    if (skipLeft <= 0) return
    setSkipLeft(s => s - 1)
    onSkip()
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative bg-[#0a1f2e]/80 border-4 ${isUrgent ? 'border-red-500 animate-pulse' : 'border-white/20'} backdrop-blur-xl rounded-[3rem] p-8 md:p-12 max-w-4xl w-full shadow-[0_0_50px_rgba(0,0,0,0.5)]`}
      >
        
        {/* THANH TRẠNG THÁI PHÍA TRÊN */}
        <div className="flex flex-wrap justify-between items-center mb-10 gap-4">
          {/* Tên đội */}
          <div className="bg-white/5 px-6 py-2 rounded-2xl border border-white/10">
            <span className="text-xs font-black text-yellow-500 uppercase tracking-widest block">Đang đấu</span>
            <span className="text-2xl font-black text-white italic">{teamName}</span>
          </div>

          {/* Đồng hồ bấm giờ */}
          <div className={`px-8 py-3 rounded-2xl font-mono text-4xl font-black shadow-inner transition-colors ${isUrgent ? 'bg-red-600 text-white' : 'bg-black/40 text-yellow-400'}`}>
            {mm}:{ss}
          </div>

          {/* Điểm số hiện tại */}
          <div className="bg-white/5 px-6 py-2 rounded-2xl border border-white/10 text-right">
            <span className="text-xs font-black text-green-500 uppercase tracking-widest block">Điểm số</span>
            <span className="text-3xl font-black text-white">{score} ⭐</span>
          </div>
        </div>

        {/* NỘI DUNG CÂU HỎI */}
        <div className="relative min-h-[250px] md:min-h-[300px] flex items-center justify-center text-center px-4 mb-10">
            {/* Hiệu ứng trang trí dấu ngoặc kép lớn */}
            <span className="absolute top-0 left-0 text-9xl text-white/5 font-serif select-none">“</span>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={question.text}
                initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotate: 1 }}
                className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-lg z-10"
              >
                {question.text}
              </motion.div>
            </AnimatePresence>

            <span className="absolute bottom-0 right-0 text-9xl text-white/5 font-serif select-none">”</span>
        </div>

        {/* CÁC NÚT ĐIỀU KHIỂN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={onCorrect}
            className="group relative px-10 py-6 bg-green-600 text-white font-black text-3xl rounded-3xl shadow-[0_10px_0_rgb(20,83,45)] hover:shadow-[0_4px_0_rgb(20,83,45)] hover:translate-y-[6px] active:translate-y-[10px] active:shadow-none transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              ✔ CHÍNH XÁC
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </button>

          <button
            onClick={handleSkip}
            disabled={skipLeft === 0}
            className={`group relative px-10 py-6 font-black text-3xl rounded-3xl transition-all
              ${skipLeft === 0
                ? 'bg-slate-700 text-slate-500 cursor-not-allowed opacity-50'
                : 'bg-amber-500 text-white shadow-[0_10px_0_rgb(180,83,9)] hover:shadow-[0_4px_0_rgb(180,83,9)] hover:translate-y-[6px] active:translate-y-[10px] active:shadow-none'
              }
            `}
          >
            <span className="relative z-10 flex flex-col items-center">
              <span className="flex items-center gap-2">⏭ BỎ QUA</span>
              <span className="text-xs opacity-80 uppercase tracking-widest mt-1">Còn lại: {skipLeft}/{MAX_SKIP}</span>
            </span>
          </button>
        </div>
      </motion.div>

      {/* Trang trí nền phía sau */}
      <div className="fixed -z-10 bottom-0 left-0 w-full h-32 bg-gradient-to-t from-red-600/20 to-transparent pointer-events-none" />
    </div>
  )
}