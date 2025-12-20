'use client'

type Props = {
  onTeamA: () => void
  onTeamB: () => void
}

export default function ResultOverlay({ onTeamA, onTeamB }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-3xl p-8 text-center w-full max-w-sm shadow-2xl">
        <h2 className="text-2xl font-bold mb-6">
          ⚡ Đội nào bấm trước?
        </h2>

        <div className="flex gap-6 justify-center">
          {/* Team A */}
          <button
            onClick={onTeamA}
            className="px-8 py-4 bg-green-600 text-white text-xl rounded-2xl shadow hover:bg-green-700 transition"
          >
            🟢 Đội A
          </button>

          {/* Team B */}
          <button
            onClick={onTeamB}
            className="px-8 py-4 bg-red-600 text-white text-xl rounded-2xl shadow hover:bg-red-700 transition"
          >
            🔴 Đội B
          </button>
        </div>
      </div>
    </div>
  )
}
