'use client'
import { useEffect, useRef } from 'react'

export default function BackgroundMusic({
  playing,
  volume,
}: {
  playing: boolean
  volume: number
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (!audioRef.current) return

    audioRef.current.volume = volume

    if (playing) {
      audioRef.current.play().catch(() => {})
    } else {
      audioRef.current.pause()
    }
  }, [playing, volume])

  return (
    <audio
      ref={audioRef}
      src="/audio/silent-night-christmas.mp3"
      loop
      preload="auto"
    />
  )
}
