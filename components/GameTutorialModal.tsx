'use client'
import Image from 'next/image'

const CHRISTMAS_ICONS = ['🎄', '❄️', '🎵', '🎁', '⭐', '🦌', '🎅']

type Props = {
  open: boolean
  onClose: () => void
  title: string
  rules: string[]
  time?: string
  media: string
}

export default function GameTutorialModal({
  open,
  onClose,
  title,
  rules,
  time,
  media
}: Props) {
  if (!open) return null

  const getRandomIcon = (index: number) =>
    CHRISTMAS_ICONS[index % CHRISTMAS_ICONS.length]

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div
        className="
          relative
          w-full max-w-lg
          rounded-3xl
          bg-[#FFF6E5]
          p-3
          shadow-2xl
          text-[#3B2F2F]
          animate-fadeIn
        "
      >
        {/* Close icon */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl hover:scale-110 transition"
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-xl font-extrabold text-center mb-5">
          {title}
        </h2>

        {/* Rules */}
        <ul className="space-y-0.5 text-sm pl-1 ml-7">
          {rules.map((rule, i) => (
            <li
              key={i}
              className="flex gap-2 items-center pl-3"
            >
              <span className="text-lg text-center">
                {getRandomIcon(i)}
              </span>
              <span className="leading-relaxed h-auto">
                {rule}
              </span>
            </li>
          ))}
        </ul>

        {/* Time */}
        {time && (
          <p className="mt-4 text-center font-bold text-red-600">
            ⏱ {time}
          </p>
        )}

        {/* Image (BIGGER) */}
        <div className="mt-5 flex justify-center">
          <Image
            src={media}
            alt="tutorial"
            width={360}
            height={240}
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Footer text */}
        <p className="mt-4 text-center text-sm font-semibold">
          Ai ghi nhiều điểm hơn sẽ thắng!
        </p>

        {/* Close button */}
        <div className="mt-5 flex justify-center">
          <button
            onClick={onClose}
            className="
              px-8 py-2.5
              rounded-xl
              bg-red-600
              text-white
              font-bold
              shadow
              hover:bg-red-700
              transition
            "
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  )
}
