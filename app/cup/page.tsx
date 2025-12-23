'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTeams } from '../context/TeamContext'
import TeamBoard from '@/components/TeamBoard'

export default function XepLyGamePage() {
  const { teamA, teamB, addGreen, addRed } = useTeams()

  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [winner, setWinner] = useState<'GREEN' | 'RED' | null>(null)
  const [earnedScore, setEarnedScore] = useState<number | null>(null)

  /* ⏱ TIMER */
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning && !winner) {
      interval = setInterval(() => {
        setTimer(prev => prev + 10)
      }, 10)
    }
    return () => clearInterval(interval)
  }, [isRunning, winner])

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000)
    const milliseconds = Math.floor((ms % 1000) / 10)
    return `${seconds}.${milliseconds < 10 ? '0' : ''}${milliseconds}s`
  }

  /* 🎯 TÍNH ĐIỂM */
  const calculateScore = (ms: number) => {
    const sec = ms / 1000
    if (sec < 30) return 10
    if (sec < 60) return 5
    if (sec < 180) return 3
    return 2
  }

  /* 🏆 BẤM NÚT THẮNG → CỘNG ĐIỂM NGAY */
  const handleWin = (side: 'GREEN' | 'RED') => {
    if (!isRunning || winner) return

    const score = calculateScore(timer)
    setEarnedScore(score)

    side === 'GREEN' ? addGreen(score) : addRed(score)

    setIsRunning(false)
    setWinner(side)
  }

  const resetGame = () => {
    setTimer(0)
    setIsRunning(false)
    setWinner(null)
    setEarnedScore(null)
  }

  return (
    <div className="min-h-screen bg-[#051622] text-white relative p-8 overflow-hidden flex flex-col items-center">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <TeamBoard />

      {/* HEADER */}
      <header className="relative z-10 text-center mb-10 mt-20">
        <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <span className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-6 py-2 rounded-full text-sm font-black tracking-[0.3em] uppercase mb-4 block">
            Mini Game Special
          </span>
          <h1 className="text-7xl font-black italic tracking-tighter bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            SIÊU PHÀM XẾP LY
          </h1>
        </motion.div>
      </header>

      {/* MAIN */}
      <main className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-12">

        {/* TIMER */}
        <motion.div
          animate={isRunning ? { scale: [1, 1.01, 1] } : {}}
          transition={{ repeat: Infinity, duration: 2 }}
          className="bg-[#0a1f2e]/80 border-2 border-white/10 px-24 py-12 rounded-[3.5rem] shadow-2xl text-center"
        >
          <div className="text-9xl font-mono font-black">
            {formatTime(timer)}
          </div>
        </motion.div>

        {/* CONTROLS */}
        <div className="flex flex-wrap justify-center gap-6">
          {!isRunning && timer === 0 ? (
            <button
              onClick={() => setIsRunning(true)}
              className="bg-green-600 px-16 py-6 rounded-3xl text-3xl font-black shadow-[0_10px_0_rgb(20,83,45)] active:translate-y-2 active:shadow-none"
            >
              BẮT ĐẦU 🚀
            </button>
          ) : (
            <>
              <button
                onClick={() => handleWin('GREEN')}
                className="bg-green-600 px-10 py-5 rounded-2xl text-xl font-black shadow-[0_8px_0_rgb(20,83,45)] active:translate-y-1 active:shadow-none uppercase"
              >
                {teamA.name} XONG! ✅
              </button>

              <button
                onClick={() => handleWin('RED')}
                className="bg-red-600 px-10 py-5 rounded-2xl text-xl font-black shadow-[0_8px_0_rgb(153,27,27)] active:translate-y-1 active:shadow-none uppercase"
              >
                {teamB.name} XONG! ✅
              </button>

              <button
                onClick={resetGame}
                className="bg-white/10 hover:bg-white/20 px-10 py-5 rounded-2xl text-xl font-black"
              >
                RESET 🔄
              </button>
            </>
          )}
        </div>

        {/* INSTRUCTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-10">
          <InstructionBox icon="🔍" title="Quan sát" desc="Ghi nhớ 4 màu ly bạn đang có." />
          <InstructionBox icon="🏗️" title="Xếp chồng" desc="Xếp lên nóc hộp theo dự đoán." />
          <InstructionBox icon="🗣️" title="Phản hồi" desc="Lắng nghe số lượng đúng từ trọng tài." />
        </div>
      </main>

      {/* MODAL WIN */}
      <AnimatePresence>
        {winner && earnedScore !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] bg-[#051622]/95 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-9xl mb-6">🏆</div>

              <h2 className={`text-8xl font-black italic mb-4 ${winner === 'GREEN' ? 'text-green-500' : 'text-red-500'}`}>
                {winner === 'GREEN' ? teamA.name : teamB.name}
              </h2>

              <p className="text-4xl mb-4">
                ⏱ {formatTime(timer)}
              </p>

              <p className="text-5xl font-black text-yellow-400 mb-10">
                +{earnedScore} ĐIỂM
              </p>

              <button
                onClick={resetGame}
                className="bg-yellow-500 text-black px-20 py-8 rounded-3xl text-4xl font-black shadow-[0_12px_0_rgb(161,98,7)] active:translate-y-2 active:shadow-none"
              >
                TIẾP TỤC 🏁
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function InstructionBox({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center">
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="text-xl font-black uppercase text-yellow-500 mb-2">{title}</h4>
      <p className="text-sm text-white/40 font-medium">{desc}</p>
    </div>
  )
}
