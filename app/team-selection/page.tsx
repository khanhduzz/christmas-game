'use client'
import { useState, useEffect } from 'react'
import membersData from '@/data/member.json'
import LeaderSelect from '@/components/team-selection/LeaderSelect'
import WaitingArea from '@/components/team-selection/WaitingArea'
import PickControls from '@/components/team-selection/PickControls'
import RandomPickAnimation from '@/components/team-selection/RandomPickAnimation'
import { useTeams } from '../context/TeamContext'
import { motion, AnimatePresence } from 'framer-motion'

type Member = { id: string; name: string }
type TeamSide = 'GREEN' | 'RED'

export default function TeamSelectionPage() {
  const { teamA, teamB, setTeamAMembers, setTeamBMembers, excludedIds } =
    useTeams()

  const [leaders, setLeaders] = useState<{ green?: Member; red?: Member }>({})

  // Init waiting list
  const [waiting, setWaiting] = useState<Member[]>(() =>
    membersData.filter(m => !excludedIds.includes(m.id))
  )

  const [animating, setAnimating] = useState(false)
  const [picked, setPicked] = useState<Member | null>(null)

  // Sync waiting list
  useEffect(() => {
    const currentTeamIds = [...teamA.members, ...teamB.members].map(m => m.id)
    setWaiting(
      membersData.filter(
        m =>
          !excludedIds.includes(m.id) &&
          !currentTeamIds.includes(m.id)
      )
    )
  }, [excludedIds, teamA.members, teamB.members])

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
    <div className="h-[100svh] bg-[#051622] text-white relative overflow-hidden flex flex-col">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 blur-[120px]" />
      </div>

      <header className="relative z-10 pt-10 pb-6 text-center">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl font-black italic tracking-tighter uppercase mt-20"
        >
          {phase === 'LEADER_SELECT'
            ? '👑 Chọn Đội Trưởng'
            : '🎁 Chia Đội Ngẫu Nhiên'}
        </motion.h1>
        <p className="text-white/40 font-bold uppercase tracking-[0.3em] mt-2">
          Christmas Battle 2025
        </p>
      </header>

      {/* 🔹 HEIGHT FIX: remove pb-40 */}
      <main className="flex-1 relative z-10 flex flex-col items-center justify-start overflow-hidden">
        <AnimatePresence mode="wait">
          {phase === 'LEADER_SELECT' ? (
            <motion.div
              key="leader"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="w-full max-w-6xl px-6"
            >
              <LeaderSelect
                members={waiting}
                onSelect={(side, member) => {
                  setLeaders(l => ({ ...l, [side]: member }))
                  setWaiting(w => w.filter(m => m.id !== member.id))
                  if (side === 'green') setTeamAMembers([member])
                  else setTeamBMembers([member])
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="random"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-4xl flex flex-col items-center h-full"
            >
              <div className="relative w-full group flex-1">
                <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#051622] to-transparent z-10 pointer-events-none" />

                {/* 🔹 HEIGHT FIX: flex-1 instead of max-h */}
                <div className="flex-1 overflow-y-auto px-6 py-12 no-scrollbar scroll-smooth">
                  <WaitingArea members={waiting} />
                </div>

                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#051622] to-transparent z-10 pointer-events-none" />

                <div className="text-center mt-4">
                  <span className="bg-white/5 border border-white/10 px-6 py-2 rounded-full text-sm font-black text-yellow-500 tracking-widest uppercase">
                    Quân số chờ: {waiting.length}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Fixed Controls (unchanged) */}
      {phase === 'RANDOM_PICK' && (
        <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-[#051622] via-[#051622] to-transparent pt-20 pb-10 flex justify-center z-50">
          <PickControls
            disabled={animating}
            isWaitingEmpty={waiting.length === 0}
            onGreen={() => pickRandom('GREEN')}
            onRed={() => pickRandom('RED')}
          />
        </div>
      )}

      {/* Animation */}
      <AnimatePresence>
        {picked && <RandomPickAnimation member={picked} />}
      </AnimatePresence>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

