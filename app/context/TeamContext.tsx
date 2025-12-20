'use client'
import { createContext, useContext, useState } from 'react'

export type TeamMember = {
  id: string
  name: string
}

type Team = {
  name: string
  members: TeamMember[]
}

type TeamSelect = {
  teamA: Team
  teamB: Team
  setTeamAName: (v: string) => void
  setTeamBName: (v: string) => void
  setTeamAMembers: (m: TeamMember[]) => void
  setTeamBMembers: (m: TeamMember[]) => void

  activePlayer: string | null
  setActivePlayer: (id: string | null) => void

  greenScore: number
  redScore: number
  addGreen: (v?: number) => void
  addRed: (v?: number) => void
  resetScores: () => void
}

const TeamContext = createContext<TeamSelect | null>(null)

export function TeamProvider({ children }: { children: React.ReactNode }) {
  const [teamA, setTeamA] = useState<Team>({
    name: 'Đội xanh',
    members: []
  })

  const [teamB, setTeamB] = useState<Team>({
    name: 'Đội đỏ',
    members: []
  })

  const [activePlayer, setActivePlayer] = useState<string | null>(null)

  const [greenScore, setGreenScore] = useState(0)
  const [redScore, setRedScore] = useState(0)

  return (
    <TeamContext.Provider
      value={{
        teamA,
        teamB,

        setTeamAName: name => setTeamA(t => ({ ...t, name })),
        setTeamBName: name => setTeamB(t => ({ ...t, name })),

        setTeamAMembers: members => setTeamA(t => ({ ...t, members })),
        setTeamBMembers: members => setTeamB(t => ({ ...t, members })),

        activePlayer,
        setActivePlayer,

        greenScore,
        redScore,
        addGreen: (v = 1) => setGreenScore(s => s + v),
        addRed: (v = 1) => setRedScore(s => s + v),
        resetScores: () => {
          setGreenScore(0)
          setRedScore(0)
        }
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

// 'use client'
// import { createContext, useContext, useEffect, useState } from 'react'

// export type TeamMember = {
//   id: string
//   name: string
// }

// type Team = {
//   name: string
//   members: TeamMember[]
// }

// type TeamSelect = {
//   teamA: Team
//   teamB: Team
//   setTeamAName: (v: string) => void
//   setTeamBName: (v: string) => void
//   setTeamAMembers: (m: TeamMember[]) => void
//   setTeamBMembers: (m: TeamMember[]) => void

//   activePlayer: string | null
//   setActivePlayer: (id: string | null) => void

//   greenScore: number
//   redScore: number
//   addGreen: (v?: number) => void
//   addRed: (v?: number) => void
//   resetScores: () => void
// }

// const TeamContext = createContext<TeamSelect | null>(null)

// const TEAM_A_KEY = 'teamA_name'
// const TEAM_B_KEY = 'teamB_name'

// export function TeamProvider({ children }: { children: React.ReactNode }) {
//   // ✅ hooks live HERE — inside component
//   const [teamA, setTeamA] = useState<Team>({
//     name:
//       typeof window !== 'undefined'
//         ? localStorage.getItem(TEAM_A_KEY) || 'Green team'
//         : 'Green team',
//     members: []
//   })

//   const [teamB, setTeamB] = useState<Team>({
//     name:
//       typeof window !== 'undefined'
//         ? localStorage.getItem(TEAM_B_KEY) || 'Red team'
//         : 'Red team',
//     members: []
//   })

//   const [activePlayer, setActivePlayer] = useState<string | null>(null)
//   const [greenScore, setGreenScore] = useState(0)
//   const [redScore, setRedScore] = useState(0)

//   // ✅ persist names
//   useEffect(() => {
//     localStorage.setItem(TEAM_A_KEY, teamA.name)
//   }, [teamA.name])

//   useEffect(() => {
//     localStorage.setItem(TEAM_B_KEY, teamB.name)
//   }, [teamB.name])

//   return (
//     <TeamContext.Provider
//       value={{
//         teamA,
//         teamB,

//         setTeamAName: name => setTeamA(t => ({ ...t, name })),
//         setTeamBName: name => setTeamB(t => ({ ...t, name })),

//         setTeamAMembers: members => setTeamA(t => ({ ...t, members })),
//         setTeamBMembers: members => setTeamB(t => ({ ...t, members })),

//         activePlayer,
//         setActivePlayer,

//         greenScore,
//         redScore,
//         addGreen: (v = 1) => setGreenScore(s => s + v),
//         addRed: (v = 1) => setRedScore(s => s + v),
//         resetScores: () => {
//           setGreenScore(0)
//           setRedScore(0)
//         }
//       }}
//     >
//       {children}
//     </TeamContext.Provider>
//   )
// }

// export const useTeams = () => {
//   const ctx = useContext(TeamContext)
//   if (!ctx) throw new Error('useTeams must be inside TeamProvider')
//   return ctx
// }