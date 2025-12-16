'use client'
import { createContext, useContext, useState } from 'react'

type TeamContextType = {
  teamA: string
  teamB: string
  setTeamA: (v: string) => void
  setTeamB: (v: string) => void
}

const TeamContext = createContext<TeamContextType | null>(null)

export function TeamProvider({ children }: { children: React.ReactNode }) {
  const [teamA, setTeamA] = useState('Đội A')
  const [teamB, setTeamB] = useState('Đội B')

  return (
    <TeamContext.Provider value={{ teamA, teamB, setTeamA, setTeamB }}>
      {children}
    </TeamContext.Provider>
  )
}

export function useTeams() {
  const ctx = useContext(TeamContext)
  if (!ctx) throw new Error('useTeams must be used inside TeamProvider')
  return ctx
}
