'use client'
import { useEffect, useState } from 'react'
import questions from '@/data/questions.json'
import greenQuestions from '@/data/ca-dao-green.json'
import redQuestions from '@/data/ca-dao-red.json'
import TeamSelect from './TeamSelect'
import GameBoard from './GameBoard'
import Result from './Result'
import { useTeams } from '@/app/context/TeamContext'
import { motion, AnimatePresence } from 'framer-motion'

export type Team = 'A' | 'B'

export default function Game() {
  const { teamA, teamB, addGreen, addRed } = useTeams()

  const [team, setTeam] = useState<Team | null>(null)
  const [time, setTime] = useState(300)
  const [score, setScore] = useState(0)
  const [queue, setQueue] = useState([...questions])
  const [finished, setFinished] = useState(false)
  const [active, setActive] = useState(false) // Real mode
  const [currentQuestion, setCurrentQuestion] = useState(queue[0])

  useEffect(() => {
    if (!team || finished) return
    if (time <= 0) setFinished(true)

    const id = setInterval(() => setTime(t => t - 1), 1000)
    return () => clearInterval(id)
  }, [team, time, finished])

  useEffect(() => {
    if (!team) return;

    if (active) {
      const teamQuestions = team === 'A' ? greenQuestions : redQuestions;
      setCurrentQuestion(teamQuestions[0]);
    } else {
      setCurrentQuestion(queue[0]);
    }
  }, [active, team]);

  const handleClick = () => {
    setActive(!active);
  }

  const handleNextQuestion = () => {
    if (!active) {
      const nextQueue = queue.slice(1)
      setQueue(nextQueue)
      setCurrentQuestion(nextQueue[0])
      if (nextQueue.length === 0) setFinished(true)
    } else {
      const teamQueue = team === 'A' ? greenQuestions : redQuestions
      const index = teamQueue.findIndex(q => q.id === currentQuestion?.id)
      const nextIndex = (index + 1) % teamQueue.length;
      setCurrentQuestion(teamQueue[nextIndex])
    }
  }

  return (
    <main className="relative min-h-screen bg-[#051622] overflow-hidden">
      {/* 1. Hiệu ứng Background động để đồng bộ với các trang trước */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/snow-pattern.png')] opacity-10" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-600/10 rounded-full blur-[120px]" />
      </div>

      <AnimatePresence mode="wait">
        {/* MÀN HÌNH CHỌN ĐỘI */}
        {!team && (
          <motion.div 
            key="select"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative z-10"
          >
            <TeamSelect onSelect={setTeam} />
          </motion.div>
        )}

        {/* MÀN HÌNH CHƠI GAME */}
        {team && !finished && currentQuestion && (
          <motion.div 
            key="game"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10"
          >
            <GameBoard
              team={team} // Truyền 'A' hoặc 'B' để GameBoard tự lấy tên từ Context
              question={currentQuestion}
              score={score}
              time={time}
              onCorrect={() => {
                setScore(s => {
                  const next = s + 1
                  if (next >= 30) setFinished(true)
                  return next
                })
                team === 'A' ? addGreen() : addRed()
                handleNextQuestion()
              }}
              onSkip={handleNextQuestion}
            />
          </motion.div>
        )}

        {/* MÀN HÌNH KẾT QUẢ */}
        {finished && team && (
          <motion.div 
            key="result"
            initial={{ opacity: 0, zoom: 0.5 }}
            animate={{ opacity: 1, zoom: 1 }}
            className="relative z-10"
          >
            <Result team={team} score={score} time={time} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* NÚT REAL MODE - Thiết kế lại phong cách Toggle Swich */}
      <div className="fixed bottom-6 left-6 z-[60] flex items-center gap-3 bg-black/40 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-2xl">
        <div className={`w-3 h-3 rounded-full ${active ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
        <button
          onClick={handleClick}
          className={`text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${active ? 'text-green-400' : 'text-gray-400 hover:text-white'}`}
        >
          {active ? 'Real Mode Active' : 'Normal Mode'}
        </button>
        <button
           onClick={handleClick}
           className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${active ? 'bg-green-600' : 'bg-gray-600'}`}
        >
            <motion.div 
              animate={{ x: active ? 24 : 4 }}
              className="w-4 h-4 bg-white rounded-full mt-[1px]"
            />
        </button>
      </div>

      {/* Decor thêm 1 chút không khí giáng sinh ở các góc */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 opacity-50 z-[100]" />
    </main>
  )
}