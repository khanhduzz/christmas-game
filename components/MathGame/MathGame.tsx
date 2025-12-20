'use client'
import { useEffect, useState } from 'react'
import { generateMath } from '@/utils/generateMath'
import MathBoard from './MathBoard'
import GameOverOverlay from './GameOverOverlay'

export default function MathGame() {
  const [time, setTime] = useState(30)
  const [scoreA, setScoreA] = useState(0)
  const [scoreB, setScoreB] = useState(0)
  const [question, setQuestion] = useState(generateMath())
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    if (time <= 0) {
      setGameOver(true)
      return
    }

    const t = setInterval(() => {
      setTime(t => t - 1)
    }, 1000)

    return () => clearInterval(t)
  }, [time])

  const nextQuestion = () => {
    setQuestion(generateMath())
  }

  if (gameOver) {
    return (
      <GameOverOverlay
        scoreA={scoreA}
        scoreB={scoreB}
      />
    )
  }

  return (
    <MathBoard
      time={time}
      question={question.text}
      scoreA={scoreA}
      scoreB={scoreB}
      onTeamA={() => {
        setScoreA(s => s + 1)
        nextQuestion()
      }}
      onTeamB={() => {
        setScoreB(s => s + 1)
        nextQuestion()
      }}
    />
  )
}
