'use client'
import { useState } from 'react'
import membersData from '@/data/member.json'
import LeaderSelect from '@/components/team-selection/LeaderSelect'
import WaitingArea from '@/components/team-selection/WaitingArea'
import TeamArea from '@/components/team-selection/TeamArea'
import PickControls from '@/components/team-selection/PickControls'
import RandomPickAnimation from '@/components/team-selection/RandomPickAnimation'

type Member = { id: string; name: string }
type TeamSide = 'GREEN' | 'RED'

export default function TeamSelectionPage() {
  const [leaders, setLeaders] = useState<{
    green?: Member
    red?: Member
  }>({})

  const [waiting, setWaiting] = useState<Member[]>(membersData)
  const [greenTeam, setGreenTeam] = useState<Member[]>([])
  const [redTeam, setRedTeam] = useState<Member[]>([])
  const [animating, setAnimating] = useState(false)
  const [picked, setPicked] = useState<Member | null>(null)

  const phase = leaders.green && leaders.red ? 'RANDOM_PICK' : 'LEADER_SELECT'

  const pickRandom = (side: TeamSide) => {
    if (animating || waiting.length === 0) return

    setAnimating(true)

    const index = Math.floor(Math.random() * waiting.length)
    const member = waiting[index]

    setPicked(member)

    // 🎁 animation delay
    setTimeout(() => {
      setWaiting(w => w.filter(m => m.id !== member.id))

      side === 'GREEN'
        ? setGreenTeam(t => [...t, member])
        : setRedTeam(t => [...t, member])

      setPicked(null)
      setAnimating(false)
    }, 2500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-900 to-indigo-950 text-white p-8">
      <h1 className="text-5xl font-extrabold text-center mb-8 mt-10">
        🎅 Team Selection 🎁
      </h1>

      {phase === 'LEADER_SELECT' && (
        <LeaderSelect
          members={waiting}
          onSelect={(side, member) => {
            setLeaders(l => ({ ...l, [side]: member }))
            setWaiting(w => w.filter(m => m.id !== member.id))
          }}
        />
      )}

      {phase === 'RANDOM_PICK' && (
        <>
          <div className="grid grid-cols-3 gap-6">
            <TeamArea title="🟢 Green Team" members={greenTeam} />
            <WaitingArea members={waiting} />
            <TeamArea title="🔴 Red Team" members={redTeam} />
          </div>

          <PickControls
            disabled={animating}
            onGreen={() => pickRandom('GREEN')}
            onRed={() => pickRandom('RED')}
          />

          {picked && <RandomPickAnimation member={picked} />}
        </>
      )}
    </div>
  )
}
