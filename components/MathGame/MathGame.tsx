'use client'
import { useEffect, useState } from 'react'
import { generateMath } from '@/utils/generateMath'
import MathBoard from './MathBoard'
import ResultOverlay from './ResultOverlay'
import GameOverOverlay from './GameOverOverlay'

export default function MathGame() {
    const [time, setTime] = useState(300)
    const [scoreA, setScoreA] = useState(0)
    const [scoreB, setScoreB] = useState(0)
    const [question, setQuestion] = useState(generateMath())
    const [activeTeam, setActiveTeam] = useState<'A' | 'B' | null>(null)
    const [showResult, setShowResult] = useState(false)
    const [gameOver, setGameOver] = useState(false)

    //   useEffect(() => {
    //     if (time <= 0) return
    //     const t = setInterval(() => setTime(t => t - 1), 1000)
    //     return () => clearInterval(t)
    //   }, [time])
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


    const next = () => {
        setQuestion(generateMath())
        setActiveTeam(null)
        setShowResult(false)
    }

    if (gameOver) {
        const winner =
            scoreA > scoreB ? 'ĐỘI A' :
                scoreB > scoreA ? 'ĐỘI B' :
                    'HÒA'

        return (
            <GameOverOverlay
                scoreA={scoreA}
                scoreB={scoreB}
            />
        )
    }

    return (
        <>
            <MathBoard
                time={time}
                question={question.text}
                scoreA={scoreA}
                scoreB={scoreB}
                onChoose={setActiveTeam}
            />

            {activeTeam && (
                <ResultOverlay
                    team={activeTeam}
                    answer={question.answer}
                    onCorrect={() => {
                        activeTeam === 'A'
                            ? setScoreA(s => s + 1)
                            : setScoreB(s => s + 1)
                        next()
                    }}
                    onWrong={next}
                />

            )}
        </>
    )
}
