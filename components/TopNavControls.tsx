'use client'
import { useRouter } from 'next/navigation'
import { useTeams } from '@/app/context/TeamContext'

export default function TopNavControls() {
  const router = useRouter()
  const { setTeamA, setTeamB } = useTeams()

  return (
    <div className="fixed top-4 left-4 z-50 flex gap-3">
      {/* Back to game menu */}
      <button
        onClick={() => router.push('/')}
        className="px-4 py-2 bg-white/90 text-black rounded-xl shadow hover:bg-white"
      >
        🎮 Games
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
        🛠 Named
      </button>
    </div>
  )
}
