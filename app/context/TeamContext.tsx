'use client'
import { createContext, useContext, useState, useEffect } from 'react'

export type TeamMember = {
  id: string
  name: string
}

type Team = {
  name: string
  members: TeamMember[]
}

// Định nghĩa kiểu cho cặp người chơi đang đấu
type ActivePlayers = {
  green: string | null
  red: string | null
}

type TeamSelect = {
  teamA: Team
  teamB: Team
  setTeamAName: (v: string) => void
  setTeamBName: (v: string) => void
  setTeamAMembers: (m: TeamMember[]) => void
  setTeamBMembers: (m: TeamMember[]) => void

  excludedIds: string[]
  toggleExcludeMember: (id: string) => void

  // Cập nhật tính năng chọn cặp đấu
  activePlayers: ActivePlayers
  toggleActivePlayer: (side: 'green' | 'red', id: string) => void
  clearActivePlayers: () => void

  greenScore: number
  redScore: number
  addGreen: (v?: number) => void
  addRed: (v?: number) => void
  resetScores: () => void
  setGreenScore: (v: number) => void
  setRedScore: (v: number) => void
}

const TeamContext = createContext<TeamSelect | null>(null)

export function TeamProvider({ children }: { children: React.ReactNode }) {
  const [teamA, setTeamA] = useState<Team>({ name: 'Đội xanh', members: [] })
  const [teamB, setTeamB] = useState<Team>({ name: 'Đội đỏ', members: [] })

  // Quản lý đồng thời 2 người chơi của 2 đội
  const [activePlayers, setActivePlayers] = useState<ActivePlayers>({ green: null, red: null })

  const [greenScore, setGreenScore] = useState(0)
  const [redScore, setRedScore] = useState(0)
  const [excludedIds, setExcludedIds] = useState<string[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('excluded_member_ids')
    if (saved) {
      try {
        setExcludedIds(JSON.parse(saved))
      } catch (e) {
        console.error("Lỗi parse JSON từ localStorage", e)
      }
    }
  }, [])

  const toggleExcludeMember = (id: string) => {
    setExcludedIds(prev => {
      const isExcluded = prev.includes(id)
      const next = isExcluded ? prev.filter(i => i !== id) : [...prev, id]
      localStorage.setItem('excluded_member_ids', JSON.stringify(next))
      return next
    })
  }

  // Hàm mới: Bật/Tắt người chơi cho từng đội
  const toggleActivePlayer = (side: 'green' | 'red', id: string) => {
    setActivePlayers(prev => ({
      ...prev,
      [side]: prev[side] === id ? null : id
    }))
  }

  const safeSetGreenScore = (v: number) => {
    setGreenScore(Math.max(0, v))
  }

  const safeSetRedScore = (v: number) => {
    setRedScore(Math.max(0, v))
  }


  const clearActivePlayers = () => setActivePlayers({ green: null, red: null })

  return (
    <TeamContext.Provider
      value={{
        teamA,
        teamB,
        setTeamAName: name => setTeamA(t => ({ ...t, name })),
        setTeamBName: name => setTeamB(t => ({ ...t, name })),
        setTeamAMembers: members => setTeamA(t => ({ ...t, members })),
        setTeamBMembers: members => setTeamB(t => ({ ...t, members })),

        excludedIds,
        toggleExcludeMember,

        activePlayers, // State mới
        toggleActivePlayer, // Hàm mới
        clearActivePlayers, // Hàm mới

        greenScore,
        redScore,
        addGreen: (v = 1) => setGreenScore(s => s + v),
        addRed: (v = 1) => setRedScore(s => s + v),
        resetScores: () => {
          setGreenScore(0)
          setRedScore(0)
        },
        setGreenScore: safeSetGreenScore,
        setRedScore: safeSetRedScore
      }}
    >
      {children}
    </TeamContext.Provider>
  )
}

export const useTeams = () => {
  const ctx = useContext(TeamContext)
  if (!ctx) throw new Error('useTeams must be inside TeamProvider')
  return ctx
}