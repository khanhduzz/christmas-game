'use client'
import { useTeams } from '@/app/context/TeamContext'
import { useState } from 'react'

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
      <div className="min-h-screen flex items-center justify-center text-2xl">
        ⏳ Đang tổng kết kết quả...
      </div>
    )
  }

  const mm = String(Math.floor(time / 60)).padStart(2, '0')
  const ss = String(time % 60).padStart(2, '0')

  const teamName = team === 'A' ? teamA.name : teamB.name

  const handleSkip = () => {
    if (skipLeft <= 0) return
    setSkipLeft(s => s - 1)
    onSkip()
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur rounded-3xl p-10 max-w-3xl w-full">
        <div className="flex justify-between mb-6 text-xl font-bold">
          <div>{teamName}</div>
          <div>⏱ {mm}:{ss}</div>
          <div>⭐ {score}</div>
        </div>

        <div className="min-h-[220px] md:min-h-[260px] flex items-center justify-center text-center text-4xl md:text-5xl font-bold px-8 leading-snug">
          “{question.text}”
        </div>

        <div className="flex justify-center gap-6">
          <button
            onClick={onCorrect}
            className="px-10 py-5 text-2xl bg-green-500 rounded-xl hover:bg-green-600"
          >
            ✔ ĐÚNG
          </button>

          <button
            onClick={handleSkip}
            disabled={skipLeft === 0}
            className={`px-10 py-5 text-2xl rounded-xl text-black
              ${skipLeft === 0
                ? 'bg-gray-400 cursor-not-allowed opacity-60'
                : 'bg-yellow-400 hover:bg-yellow-500'
              }
            `}
          >
            ⏭ BỎ QUA ({skipLeft})
          </button>
        </div>
      </div>
    </div>
  )
}
