'use client'

import { useRouter } from 'next/navigation'
import TeamSetup from '@/components/TeamSetup'

export default function TeamSetupPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-700 to-green-700">
      <TeamSetup onDone={() => router.push('/')} />
    </div>
  )
}
