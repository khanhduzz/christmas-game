'use client'
import { useState } from 'react'

type Member = {
  id: string
  name: string
}

type Props = {
  members: Member[]
  onSelect: (side: 'green' | 'red', member: Member) => void
}

export default function LeaderSelect({ members, onSelect }: Props) {
  const [step, setStep] = useState<'green' | 'red'>('green')

  return (
    <div className="max-w-3xl mx-auto bg-white/10 rounded-3xl p-8">
      <h2 className="text-3xl font-extrabold text-center mb-6">
        {step === 'green'
          ? '🟢 Select Green Team Leader'
          : '🔴 Select Red Team Leader'}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {members.map(member => (
          <button
            key={member.id}
            onClick={() => {
              onSelect(step, member)
              setStep(step === 'green' ? 'red' : step)
            }}
            className={`p-4 rounded-xl text-lg font-bold transition 
              ${step === 'green'
                ? 'bg-green-500 hover:bg-green-400'
                : 'bg-red-500 hover:bg-red-400'}`}
          >
            {member.name}
          </button>
        ))}
      </div>

      <p className="mt-6 text-center opacity-70">
        Click a name to assign leader
      </p>
    </div>
  )
}
