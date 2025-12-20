'use client'
import { useState } from 'react'
import membersData from '@/data/member.json'
import LeaderSelect from '@/components/team-selection/LeaderSelect'
import WaitingArea from '@/components/team-selection/WaitingArea'
import TeamArea from '@/components/team-selection/TeamArea'
import PickControls from '@/components/team-selection/PickControls'
import RandomPickAnimation from '@/components/team-selection/RandomPickAnimation'
import { useTeams } from '../context/TeamContext'

type Member = { id: string; name: string }
type TeamSide = 'GREEN' | 'RED'

export default function TeamSelectionPage() {
  const [leaders, setLeaders] = useState<{
    green?: Member
    red?: Member
  }>({})

  const [waiting, setWaiting] = useState<Member[]>(membersData)
  const [animating, setAnimating] = useState(false)
  const [picked, setPicked] = useState<Member | null>(null)

  const {
    teamA,
    teamB,
    setTeamAMembers,
    setTeamBMembers
  } = useTeams()

  const phase = leaders.green && leaders.red ? 'RANDOM_PICK' : 'LEADER_SELECT'

  const pickRandom = (side: TeamSide) => {
    if (animating || waiting.length === 0) return

    setAnimating(true)

    const index = Math.floor(Math.random() * waiting.length)
    const member = waiting[index]
    setPicked(member)

    setTimeout(() => {
      setWaiting(w => w.filter(m => m.id !== member.id))

      if (side === 'GREEN') {
        setTeamAMembers([...teamA.members, member])
      } else {
        setTeamBMembers([...teamB.members, member])
      }

      setPicked(null)
      setAnimating(false)
    }, 2500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-900 to-indigo-950 text-white p-8">
      <h1 className="text-5xl font-extrabold text-center mb-8 mt-10">
        🎅 Chọn đội 🎁
      </h1>

      {phase === 'LEADER_SELECT' && (
        <LeaderSelect
          members={waiting}
          onSelect={(side, member) => {
            setLeaders(l => ({ ...l, [side]: member }))
            setWaiting(w => w.filter(m => m.id !== member.id))

            // 👑 leader goes into team immediately
            if (side === 'green') {
              setTeamAMembers([member])
            } else {
              setTeamBMembers([member])
            }
          }}
        />
      )}

      {phase === 'RANDOM_PICK' && (
        <>
          {/* <div className="mx-auto max-w-5xl grid grid-cols-3 gap-6"> */}
          <div className="flex justify-center">
            <div className="min-w-[40vw]">
              {/* <TeamArea team="A" color="green" members={teamA.members} /> */}
              <WaitingArea members={waiting} />
              {/* <TeamArea team="B" color="red" members={teamB.members} /> */}
            </div>
          </div>

          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <PickControls
              disabled={animating}
              onGreen={() => pickRandom('GREEN')}
              onRed={() => pickRandom('RED')}
            />
          </div>


          {picked && <RandomPickAnimation member={picked} />}
        </>
      )}
    </div>
  )
}
