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

  const mm = String(Math.floor(time / 60)).padStart(2,'0')
  const ss = String(time % 60).padStart(2,'0')

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur rounded-3xl p-10 max-w-3xl w-full">
        <div className="flex justify-between mb-6">
          <div>Đội {team}</div>
          <div>⏱ {mm}:{ss}</div>
          <div>⭐ {score}</div>
        </div>

        <div className="text-center text-3xl font-semibold p-8">
          “{question.text}”
        </div>

        <div className="flex justify-center gap-6">
          <button onClick={onCorrect} className="px-8 py-4 bg-green-500 rounded-xl">
            ✔ ĐÚNG
          </button>
          <button onClick={onSkip} className="px-8 py-4 bg-yellow-400 rounded-xl text-black">
            ⏭ SKIP
          </button>
        </div>
      </div>
    </div>
  )
}
