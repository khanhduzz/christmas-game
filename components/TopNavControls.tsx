'use client'
import { useRouter } from 'next/navigation'
import { useTeams } from '@/app/context/TeamContext'
import { useState } from 'react'
import BackgroundMusic from './BackgroundMusic'

export default function TopNavControls() {
  const router = useRouter()
  const { setTeamA, setTeamB } = useTeams()
  const [musicOn, setMusicOn] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [showVolume, setShowVolume] = useState(false)

  return (
    <>
    <BackgroundMusic playing={musicOn} volume={volume}/>
      <div className="fixed top-4 left-4 z-50 flex gap-3">
        {/* Back to game menu */}
        <button
          onClick={() => router.push('/')}
          className="px-4 py-2 bg-white/90 text-black rounded-xl shadow hover:bg-white"
        >
          🎮 Trò chơi
        </button>

        {/* Back to team setup */}
        <button
          onClick={() => {
            setTeamA('')
            setTeamB('')
            router.push('/team-setup')
          }}
          className="px-4 py-2 bg-red-500 text-white rounded-xl shadow hover:bg-red-600"
        >
          🛠 Đặt tên đội
        </button>

        {/* Music control */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => setShowVolume(true)}
          onMouseLeave={() => setShowVolume(false)}
        >
          <button
            onClick={() => setMusicOn(v => !v)}
            className="text-2xl"
          >
            {musicOn ? '🔊' : '🔇'}
          </button>

          {/* Volume slider */}
          {showVolume && (
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={volume}
              onChange={e => setVolume(Number(e.target.value))}
              className="ml-2 w-24 accent-green-500"
            />
          )}
        </div>
      </div>
    </>
  )
}
