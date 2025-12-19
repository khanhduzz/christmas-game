import { useState } from "react"
import GameTutorialModal from "./GameTutorialModal"
import { game1 } from "./tutorials"

export default function GameBoard({
  team, question, score, time, onCorrect, onSkip
}: any) {

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        ⏳ Đang tổng kết kết quả...
      </div>
    )
  }

  const mm = String(Math.floor(time / 60)).padStart(2, '0')
  const ss = String(time % 60).padStart(2, '0')
  // const [musicOn, setMusicOn] = useState(true)


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur rounded-3xl p-10 max-w-3xl w-full">
        <div className="flex justify-between mb-6">
          <div>Đội {team}</div>
          <div>⏱ {mm}:{ss}</div>
          <div>⭐ {score}</div>
        </div>

        <div className="text-center text-4xl md:text-5xl font-bold p-8 leading-snug">
          “{question.text}”
        </div>


        <div className="flex justify-center gap-6">
          {/* <button onClick={onCorrect} className="px-8 py-4 bg-green-500 rounded-xl"> */}
          <button onClick={onCorrect} className="px-10 py-5 text-2xl bg-green-500 rounded-xl">
            ✔ ĐÚNG
          </button>
          {/* <button onClick={onSkip} className="px-8 py-4 bg-yellow-400 rounded-xl text-black"> */}
          <button onClick={onSkip} className="px-10 py-5 text-2xl bg-yellow-400 text-black rounded-xl">
            ⏭ SKIP
          </button>
        </div>

      </div>
      {/* <button
        onClick={() => setMusicOn(v => !v)}
        className="absolute top-6 right-6 text-xl"
      >
        {musicOn ? '🔊' : '🔇'}
      </button> */}
    </div>
  )
}
