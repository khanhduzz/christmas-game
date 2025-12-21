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

  // const handleClick = () => {
  //   const nextActive = !active
  //   setActive(nextActive)

  //   if (nextActive) {
  //     if (team === 'A') setCurrentQuestion(greenQuestions[0])
  //     else if (team === 'B') setCurrentQuestion(redQuestions[0])
  //   } else {
  //     setCurrentQuestion(queue[0])
  //   }
  // }

  // const handleNextQuestion = () => {
  //   if (!active) {
  //     const nextQueue = queue.slice(1)
  //     setQueue(nextQueue)
  //     setCurrentQuestion(nextQueue[0])
  //     if (nextQueue.length === 0) setFinished(true)
  //   } else {
  //     const teamQueue = team === 'A' ? greenQuestions : redQuestions
  //     const index = teamQueue.findIndex(q => q.id === currentQuestion?.id)
  //     const nextIndex = index + 1 < teamQueue.length ? index + 1 : 0
  //     setCurrentQuestion(teamQueue[nextIndex])
  //   }
  // }

  // SỬA LỖI 1: Cập nhật câu hỏi ngay khi đổi chế độ hoặc đổi Team
  useEffect(() => {
    if (!team) return;

    if (active) {
      // Nếu là Real mode, lấy từ bộ ca dao tương ứng
      const teamQuestions = team === 'A' ? greenQuestions : redQuestions;
      setCurrentQuestion(teamQuestions[0]);
    } else {
      // Nếu là Normal mode, lấy từ queue (questions.json)
      setCurrentQuestion(queue[0]);
    }
  }, [active, team]); // Chạy lại mỗi khi active hoặc team thay đổi

  const handleClick = () => {
    setActive(!active);
    // Không cần set trực tiếp ở đây nữa vì useEffect phía trên sẽ lo việc này
  }

  const handleNextQuestion = () => {
    if (!active) {
      const nextQueue = queue.slice(1)
      setQueue(nextQueue)
      setCurrentQuestion(nextQueue[0])
      if (nextQueue.length === 0) setFinished(true)
    } else {
      const teamQueue = team === 'A' ? greenQuestions : redQuestions
      const index = teamQueue.findIndex(q => q.id === currentQuestion?.id)
      const nextIndex = (index + 1) % teamQueue.length; // Quay vòng nếu hết câu hỏi
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
