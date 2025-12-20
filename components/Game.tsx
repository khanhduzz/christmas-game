// 'use client'
// import { useEffect, useState } from 'react'
// import questions from '@/data/questions.json'
// import greenQuestions from '@/data/ca-dao-green.json';
// import redQuestions from '@/data/ca-dao-red.json';
// import TeamSelect from './TeamSelect'
// import GameBoard from './GameBoard'
// import Result from './Result'
// import { useTeams } from '@/app/context/TeamContext'

// export type Team = 'A' | 'B'

// export default function Game() {
//   const { teamA, teamB, addGreen, addRed } = useTeams()

//   const [team, setTeam] = useState<Team | null>(null)
//   const [time, setTime] = useState(300)
//   const [score, setScore] = useState(0)
//   const [queue, setQueue] = useState([...questions])
//   const [finished, setFinished] = useState(false)

//   useEffect(() => {
//     if (!team || finished) return
//     if (time <= 0) setFinished(true)

//     const id = setInterval(() => setTime(t => t - 1), 1000)
//     return () => clearInterval(id)
//   }, [team, time, finished])

//   return (
//     <>
//       {!team && <TeamSelect onSelect={setTeam} />}

//       {finished && team && (
//         <Result team={team} score={score} time={time} />
//       )}


//       {team && !finished && (
//         <GameBoard
//           team={team === 'A' ? teamA : teamB}
//           question={queue[0]}
//           score={score}
//           time={time}
//           onCorrect={() => {
//             setScore(s => {
//               const next = s + 1
//               if (next >= 20) setFinished(true)
//               return next
//             })
//             team === teamA.name ? addGreen() : addRed()
//             setQueue(q => {
//               const nextQueue = q.slice(1)
//               if (nextQueue.length === 0) setFinished(true)
//               return nextQueue
//             })
//           }}
//           onSkip={() => setQueue(q => [...q.slice(1), q[0]])}
//         />
//       )}
//     </>
//   )
// }


// 'use client'
// import { useEffect, useState } from 'react'
// import questions from '@/data/questions.json'
// import greenQuestions from '@/data/ca-dao-green.json'
// import redQuestions from '@/data/ca-dao-red.json'
// import TeamSelect from './TeamSelect'
// import GameBoard from './GameBoard'
// import Result from './Result'
// import { useTeams } from '@/app/context/TeamContext'

// export type Team = 'A' | 'B'

// export default function Game() {
//   const { teamA, teamB, addGreen, addRed } = useTeams()

//   const [team, setTeam] = useState<Team | null>(null)
//   const [time, setTime] = useState(300)
//   const [score, setScore] = useState(0)
//   const [queue, setQueue] = useState([...questions])
//   const [finished, setFinished] = useState(false)

//   useEffect(() => {
//     if (!team || finished) return
//     if (time <= 0) setFinished(true)

//     const id = setInterval(() => setTime(t => t - 1), 1000)
//     return () => clearInterval(id)
//   }, [team, time, finished])

//   // Function to assign green/red questions to teams
//   const assignGreenRedQuestion = () => {
//     setQueue(prevQueue => {
//       const nextQueue: typeof questions = []

//       if (teamA) nextQueue.push(...greenQuestions)
//       if (teamB) nextQueue.push(...redQuestions)

//       return nextQueue
//     })
//   }

//   const [active, setActive] = useState(false)

//   const handleClick = () => {
//     setActive(!active)  // toggle state
//     assignGreenRedQuestion()
//   }

//   return (
//     <>
//       {!team && <TeamSelect onSelect={setTeam} />}

//       {finished && team && (
//         <Result team={team} score={score} time={time} />
//       )}

//       <button
//         className={`fixed bottom-4 left-4 px-4 py-2 rounded shadow-lg z-50
//         ${active ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'}
//         transition-colors duration-300`}
//         onClick={handleClick}
//       >
//         Real mode
//       </button>
//       {team && !finished && (
//         <>
//           <GameBoard
//             team={team === 'A' ? teamA : teamB}
//             question={queue[0]}
//             score={score}
//             time={time}
//             onCorrect={() => {
//               setScore(s => {
//                 const next = s + 1
//                 if (next >= 30) setFinished(true)
//                 return next
//               })
//               team === 'A' ? addGreen() : addRed()
//               setQueue(q => {
//                 const nextQueue = q.slice(1)
//                 if (nextQueue.length === 0) setFinished(true)
//                 return nextQueue
//               })
//             }}
//             onSkip={() => setQueue(q => [...q.slice(1), q[0]])}
//           />
//         </>
//       )}
//     </>
//   )
// }


'use client'
import { useEffect, useState } from 'react'
import questions from '@/data/questions.json'
import greenQuestions from '@/data/ca-dao-green.json'
import redQuestions from '@/data/ca-dao-red.json'
import TeamSelect from './TeamSelect'
import GameBoard from './GameBoard'
import Result from './Result'
import { useTeams } from '@/app/context/TeamContext'

export type Team = 'A' | 'B'

export default function Game() {
  const { teamA, teamB, addGreen, addRed } = useTeams()

  const [team, setTeam] = useState<Team | null>(null)
  const [time, setTime] = useState(300)
  const [score, setScore] = useState(0)
  const [queue, setQueue] = useState([...questions])
  const [finished, setFinished] = useState(false)
  const [active, setActive] = useState(false) // Real mode
  const [currentQuestion, setCurrentQuestion] = useState(queue[0])

  useEffect(() => {
    if (!team || finished) return
    if (time <= 0) setFinished(true)

    const id = setInterval(() => setTime(t => t - 1), 1000)
    return () => clearInterval(id)
  }, [team, time, finished])

  const handleClick = () => {
    const nextActive = !active
    setActive(nextActive)

    // reset the current question based on mode
    if (nextActive) {
      // Real mode: pick first question for the team
      if (team === 'A') setCurrentQuestion(greenQuestions[0])
      else if (team === 'B') setCurrentQuestion(redQuestions[0])
    } else {
      setCurrentQuestion(queue[0])
    }
  }

  const handleNextQuestion = () => {
    if (!active) {
      // normal mode: move in queue
      const nextQueue = queue.slice(1)
      setQueue(nextQueue)
      setCurrentQuestion(nextQueue[0])
      if (nextQueue.length === 0) setFinished(true)
    } else {
      // Real mode: pick next question from the same team array (or remove it if you want no repeat)
      const teamQueue = team === 'A' ? greenQuestions : redQuestions
      // Find the index of current question
      const index = teamQueue.findIndex(q => q.id === currentQuestion?.id)
      const nextIndex = index + 1 < teamQueue.length ? index + 1 : 0
      setCurrentQuestion(teamQueue[nextIndex])
    }
  }

  return (
    <>
      {!team && <TeamSelect onSelect={setTeam} />}

      {finished && team && (
        <Result team={team} score={score} time={time} />
      )}

      <button
        className={`fixed bottom-4 left-4 px-4 py-2 rounded shadow-lg z-50
        ${active ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'}
        transition-colors duration-300`}
        onClick={handleClick}
      >
        Real mode
      </button>

      {team && !finished && currentQuestion && (
        <GameBoard
          team={team === 'A' ? teamA : teamB}
          question={currentQuestion}
          score={score}
          time={time}
          onCorrect={() => {
            setScore(s => {
              const next = s + 1
              if (next >= 30) setFinished(true)
              return next
            })
            team === 'A' ? addGreen() : addRed()
            handleNextQuestion()
          }}
          onSkip={handleNextQuestion}
        />
      )}
    </>
  )
}
