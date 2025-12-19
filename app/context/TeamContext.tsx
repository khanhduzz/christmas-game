// 'use client'
// import { createContext, useContext, useState } from 'react'

// type TeamContextType = {
//   teamA: string
//   teamB: string
//   setTeamA: (v: string) => void
//   setTeamB: (v: string) => void
// }

// const TeamContext = createContext<TeamContextType | null>(null)

// export function TeamProvider({ children }: { children: React.ReactNode }) {
//   const [teamA, setTeamA] = useState('Đội A')
//   const [teamB, setTeamB] = useState('Đội B')

//   return (
//     <TeamContext.Provider value={{ teamA, teamB, setTeamA, setTeamB }}>
//       {children}
//     </TeamContext.Provider>
//   )
// }

// export function useTeams() {
//   const ctx = useContext(TeamContext)
//   if (!ctx) throw new Error('useTeams must be used inside TeamProvider')
//   return ctx
// }


'use client'
import { createContext, useContext, useState } from 'react'

type TeamSelect = {
    teamA: string
    teamB: string
    setTeamA: (v: string) => void
    setTeamB: (v: string) => void

    greenScore: number
    redScore: number
    addGreen: () => void
    addRed: () => void
    resetScores: () => void
}

const TeamContext = createContext<TeamSelect | null>(null)

export function TeamProvider({ children }: { children: React.ReactNode }) {
    const [teamA, setTeamA] = useState('Green team')
    const [teamB, setTeamB] = useState('Red team')

    const [greenScore, setGreenScore] = useState(0)
    const [redScore, setRedScore] = useState(0)

    return (
        <TeamContext.Provider
            value={{
                teamA,
                teamB,
                setTeamA,
                setTeamB,

                greenScore,
                redScore,
                addGreen: (v = 1) => setGreenScore(s => s + v),
                addRed: (v = 1) => setRedScore(s => s + v),
                resetScores: () => {
                    setGreenScore(0)
                    setRedScore(0)
                },
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