'use client'
import GameMenu from '@/components/GameMenu'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-700 to-green-700">
      <GameMenu />
    </div>
  )
}