'use client'
import { useRouter } from 'next/navigation'
import { useTeams } from '@/app/context/TeamContext'
import { useState } from 'react'
import BackgroundMusic from './BackgroundMusic'
import membersData from '@/data/member.json'

export default function TopNavControls() {
  const router = useRouter()
  const {
    setTeamAName,
    setTeamBName,
    teamA,
    teamB,
    greenScore,
    redScore,
    resetScores,
    excludedIds,
    toggleExcludeMember,
    setGreenScore,
    setRedScore,
  } = useTeams()

  const [musicOn, setMusicOn] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [showVolume, setShowVolume] = useState(false)
  const [showManageModal, setShowManageModal] = useState(false)

  // Style chung cho nút bấm 3D
  const btn3D = "px-4 py-2 font-bold rounded-xl transition-all duration-150 active:scale-95 active:translate-y-[2px]"

  return (
    <>
      <BackgroundMusic playing={musicOn} volume={volume} />

      {/* TOP NAV */}
      <div className="fixed top-4 inset-x-4 z-50 flex items-center gap-3">
        {/* LEFT CONTROLS */}
        <div className="flex gap-3 items-center">

          {/* Home Button */}
          <button
            onClick={() => router.push('/')}
            className={`${btn3D} bg-amber-500 text-white shadow-[0_4px_0_rgb(180,83,9)] hover:shadow-[0_2px_0_rgb(180,83,9)] hover:translate-y-[2px]`}
          >
            🏠
          </button>

          {/* Nút Quân Số */}
          <button
            onClick={() => setShowManageModal(true)}
            className={`${btn3D} bg-sky-500 text-white shadow-[0_4px_0_rgb(12,74,110)] hover:shadow-[0_2px_0_rgb(12,74,110)] hover:translate-y-[2px] flex items-center gap-2`}
          >
            👥 <span className="hidden md:inline">Quân số</span>
          </button>

          {/* Select team */}
          <button
            onClick={() => {
              setTeamAName('')
              setTeamBName('')
              router.push('/team-selection')
            }}
            className={`${btn3D} bg-green-600 text-white shadow-[0_4px_0_rgb(20,83,45)] hover:shadow-[0_2px_0_rgb(20,83,45)] hover:translate-y-[2px]`}
          >
            🦌 <span className="hidden md:inline">Chọn đội</span>
          </button>

          {/* Back to team setup */}
          <button
            onClick={() => {
              setTeamAName('')
              setTeamBName('')
              router.push('/team-setup')
            }}
            className={`${btn3D} bg-red-600 text-white shadow-[0_4px_0_rgb(153,27,27)] hover:shadow-[0_2px_0_rgb(153,27,27)] hover:translate-y-[2px]`}
          >
            🛠 <span className="hidden md:inline">Đặt tên đội</span>
          </button>

          {/* NÚT VÀO GAME - MÀU TÍM/XANH DƯƠNG (Nổi bật nhất) */}
          <button
            onClick={() => router.push('/game')}
            className={`${btn3D} bg-indigo-600 text-white shadow-[0_4px_0_rgb(49,46,129)] hover:shadow-[0_2px_0_rgb(49,46,129)] hover:translate-y-[2px] border border-indigo-400/30`}
          >
            🎮 <span className="hidden lg:inline">Trò Chơi</span>
          </button>

          {/* Music control */}
          <div
            className="relative flex items-center ml-2 p-2 bg-black/20 rounded-xl backdrop-blur-sm border border-white/10"
            onMouseEnter={() => setShowVolume(true)}
            onMouseLeave={() => setShowVolume(false)}
          >
            <button onClick={() => setMusicOn(v => !v)} className="text-xl hover:scale-110 transition-transform">
              {musicOn ? '🔊' : '🔇'}
            </button>
            {showVolume && (
              <input
                type="range" min={0} max={1} step={0.05}
                value={volume}
                onChange={e => setVolume(Number(e.target.value))}
                className="ml-2 w-20 accent-yellow-400 cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* RIGHT SCORE + RESET */}
        <div className="ml-auto flex items-center gap-4">
          {/* <div className="flex items-center gap-4 bg-slate-900/80 px-6 py-2 rounded-2xl border-2 border-white/10 backdrop-blur-md shadow-lg">
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase font-black text-green-500 tracking-tighter">{teamA.name || 'Đội A'}</span>
              <span className="text-2xl font-black text-white leading-none">{greenScore}</span>
            </div>
            <div className="w-[2px] h-8 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase font-black text-red-500 tracking-tighter">{teamB.name || 'Đội B'}</span>
              <span className="text-2xl font-black text-white leading-none">{redScore}</span>
            </div>
          </div> */}
          <div className="flex items-center gap-4 bg-slate-900/80 px-6 py-2 rounded-2xl border-2 border-white/10 backdrop-blur-md shadow-lg">

            {/* TEAM A */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase font-black text-green-500">
                {teamA.name || 'Đội A'}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setGreenScore(greenScore - 1)}
                  className="w-6 h-6 rounded-full bg-green-500/20 hover:bg-green-500/40 text-white font-black"
                >
                  −
                </button>

                <span className="text-2xl font-black text-white w-8 text-center">
                  {greenScore}
                </span>

                <button
                  onClick={() => setGreenScore(greenScore + 1)}
                  className="w-6 h-6 rounded-full bg-green-500/20 hover:bg-green-500/40 text-white font-black"
                >
                  +
                </button>
              </div>
            </div>

            <div className="w-[2px] h-10 bg-white/10" />

            {/* TEAM B */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase font-black text-red-500">
                {teamB.name || 'Đội B'}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setRedScore(redScore - 1)}
                  className="w-6 h-6 rounded-full bg-red-500/20 hover:bg-red-500/40 text-white font-black"
                >
                  −
                </button>

                <span className="text-2xl font-black text-white w-8 text-center">
                  {redScore}
                </span>

                <button
                  onClick={() => setRedScore(redScore + 1)}
                  className="w-6 h-6 rounded-full bg-red-500/20 hover:bg-red-500/40 text-white font-black"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => router.push('/final')}
              className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-full font-black text-xs shadow-[0_4px_0_rgb(153,27,27)] active:translate-y-1 active:shadow-none transition-all flex items-center gap-2"
            >
              🏆 TỔNG KẾT
            </button>
          </div>


          <button
            onClick={resetScores}
            className="px-3 py-2 rounded-xl bg-white/10 hover:bg-red-500/20 text-white text-xs font-bold border border-white/20 transition-colors"
          >
            LÀM MỚI
          </button>
        </div>
      </div>

      {/* MODAL QUẢN LÝ QUÂN SỐ */}
      {showManageModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-[#051622] border-4 border-yellow-500/30 w-full max-w-2xl rounded-[2.5rem] p-6 md:p-10 shadow-[0_0_50px_rgba(234,179,8,0.2)] flex flex-col max-h-[90vh]">

            {/* HEADER: Cố định */}
            <div className="flex justify-between items-start mb-6 shrink-0">
              <div>
                <h2 className="text-4xl font-black text-yellow-400 italic tracking-tight">ĐIỂM DANH</h2>
                <p className="text-white/50 text-sm font-light mt-1">Chọn những thành viên sẽ tham gia hôm nay</p>
              </div>
              <button
                onClick={() => setShowManageModal(false)}
                className="bg-white/5 hover:bg-red-500/20 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl transition-all border border-white/10"
              >
                ✕
              </button>
            </div>

            {/* BODY: Danh sách có thể cuộn */}
            <div className="flex-1 overflow-y-auto pr-2 mb-6 custom-scrollbar">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {membersData.map((member) => {
                  const isExcluded = excludedIds.includes(member.id);
                  return (
                    <div
                      key={member.id}
                      onClick={() => toggleExcludeMember(member.id)}
                      className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 select-none group ${isExcluded
                        ? 'bg-slate-900/50 border-slate-800 text-slate-600 opacity-40 scale-95'
                        : 'bg-white/5 border-white/10 text-white hover:border-yellow-500/50 hover:bg-yellow-500/5 shadow-lg'
                        }`}
                    >
                      <span className={`font-bold block text-center truncate ${isExcluded ? 'line-through' : ''}`}>
                        {member.name}
                      </span>

                      {/* Badge trạng thái */}
                      <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center shadow-xl border-2 border-[#051622] transition-transform group-hover:scale-110 ${isExcluded ? 'bg-red-600' : 'bg-green-600'}`}>
                        {isExcluded ? (
                          <span className="text-[10px]">✕</span>
                        ) : (
                          <span className="text-[10px]">✓</span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* FOOTER: Cố định */}
            <div className="shrink-0 pt-2 border-t border-white/5">
              <button
                onClick={() => setShowManageModal(false)}
                className="w-full bg-green-600 text-white font-black py-5 rounded-2xl shadow-[0_6px_0_rgb(20,83,45)] hover:shadow-[0_2px_0_rgb(20,83,45)] hover:translate-y-[4px] transition-all text-xl flex items-center justify-center gap-3 active:scale-95"
              >
                XÁC NHẬN DANH SÁCH <span className="text-2xl">🚀</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}