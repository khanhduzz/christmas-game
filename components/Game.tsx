
'use client'
import { useEffect, useState } from 'react'
import questions from '@/data/questions.json'
import TeamSelect from './TeamSelect'
import GameBoard from './GameBoard'
import Result from './Result'

export type Team = 'A' | 'B'

export default function Game() {
  const [team, setTeam] = useState<Team | null>(null)
  const [time, setTime] = useState(300)
  const [score, setScore] = useState(0)
  const [queue, setQueue] = useState([...questions])
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (!team || finished) return
    if (time <= 0) setFinished(true)
    const id = setInterval(() => setTime(t => t - 1), 1000)
    return () => clearInterval(id)
  }, [team, time, finished])

  if (!team) return <TeamSelect onSelect={setTeam} />
  if (finished) return <Result team={team} score={score} time={time} />

  return (
    <GameBoard
      team={team}
      question={queue[0]}
      score={score}
      time={time}
      onCorrect={() => {
        setScore(s => {
          const next = s + 1
          if (next >= 20) {
            setFinished(true)
          }
          return next
        })
      
        setQueue(q => {
          const nextQueue = q.slice(1)
          if (nextQueue.length === 0) {
            setFinished(true)
          }
          return nextQueue
        })
      }}
        
      onSkip={() => setQueue(q => [...q.slice(1), q[0]])}
    />
  )
}
