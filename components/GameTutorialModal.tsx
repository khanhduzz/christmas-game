// 'use client'
// import Image from 'next/image'

// const CHRISTMAS_ICONS = ['🎄', '❄️', '🎵', '🎁', '⭐', '🦌', '🎅']

// type Props = {
//   open: boolean
//   onClose: () => void
//   title: string
//   rules: string[]
//   time?: string
//   media: string
// }

// export default function GameTutorialModal({
//   open,
//   onClose,
//   title,
//   rules,
//   time,
//   media
// }: Props) {
//   if (!open) return null

//   const getRandomIcon = (index: number) =>
//     CHRISTMAS_ICONS[index % CHRISTMAS_ICONS.length]

//   return (
//     <div
//       className={`
//         fixed inset-0 z-50
//         flex items-center justify-center px-4
//         bg-black/40
//         transition-opacity duration-300
//         ${open ? 'opacity-100' : 'opacity-0'}
//       `}
//       >
//       <div
//         className={`
//           relative
//           w-full max-w-lg
//           rounded-3xl
//           bg-[#FFF6E5]
//           p-5
//           shadow-2xl
//           text-[#3B2F2F]
//           transform
//           transition-all duration-300 ease-out
//           ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
//         `}
//         >

//         {/* Close icon */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-xl hover:scale-110 transition"
//         >
//           ✖
//         </button>

//         {/* Title */}
//         <h2 className="text-3xl font-extrabold text-center mb-5">
//           {title}
//         </h2>

//         {/* Rules */}
//         <ul className="space-y-0.5 text-xl pl-1 ml-7">
//           {rules.map((rule, i) => (
//             <li
//               key={i}
//               className="flex gap-2 items-center pl-3"
//             >
//               <span className="text-lg text-center">
//                 {getRandomIcon(i)}
//               </span>
//               <span className="leading-relaxed h-auto">
//                 {rule}
//               </span>
//             </li>
//           ))}
//         </ul>

//         {/* Time */}
//         {time && (
//           <p className="mt-4 text-xl text-center font-bold text-red-600">
//             ⏱ {time}
//           </p>
//         )}

//         {/* Image (BIGGER) */}
//         <div className="mt-5 flex justify-center">
//           <Image
//             src={media}
//             alt="tutorial"
//             width={360}
//             height={240}
//             className="rounded-2xl shadow-lg"
//           />
//         </div>

//         {/* Footer text */}
//         <p className="mt-4 text-center text-sm font-semibold">
//           Ai ghi nhiều điểm hơn sẽ thắng!
//         </p>

//         {/* Close button */}
//         <div className="mt-5 flex justify-center">
//           <button
//             onClick={onClose}
//             className="
//               px-10 py-3 text-lg
//               rounded-xl
//               bg-red-600
//               text-white
//               font-bold
//               shadow
//               hover:bg-red-700
//               transition
//             "
//           >
//             Đóng
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }


'use client'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

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
  const getRandomIcon = (index: number) =>
    CHRISTMAS_ICONS[index % CHRISTMAS_ICONS.length]

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-y-auto py-10">
          {/* Backdrop mờ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0a1f2e] border-2 border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] text-white overflow-hidden"
          >
            {/* Decor tia sáng phía sau */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Nút đóng góc trên */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-red-500/20 text-white transition-all z-10"
            >
              ✕
            </button>

            {/* Title phong cách tiêu đề Game */}
            <div className="text-center mb-8">
              <span className="text-sm font-black text-yellow-500 uppercase tracking-[0.3em] mb-2 block">Hướng dẫn</span>
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white drop-shadow-lg">
                {title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Cột trái: Quy tắc */}
              <div className="space-y-6">
                <div className="space-y-4">
                  {rules.map((rule, i) => (
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      key={i}
                      className="flex gap-4 items-start group"
                    >
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
                        {getRandomIcon(i)}
                      </span>
                      <p className="text-lg leading-snug text-white/80 font-medium pt-1">
                        {rule}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Time Badge */}
                {time && (
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-600/20 border border-red-500/30 rounded-2xl text-red-400 font-black text-xl">
                    <span className="animate-pulse">⏱</span> {time}
                  </div>
                )}
              </div>

              {/* Cột phải: Media & Note */}
              <div className="flex flex-col gap-6">
                <motion.div 
                   whileHover={{ rotate: 1 }}
                   className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition" />
                  <Image
                    src={media}
                    alt="tutorial"
                    width={400}
                    height={300}
                    className="relative rounded-2xl shadow-2xl border border-white/10 object-cover w-full aspect-video"
                  />
                </motion.div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 italic text-sm text-center text-white/50">
                   "Vận động hay - Rinh ngay quà lớn!" 🎁
                </div>
              </div>
            </div>

            {/* Nút bấm Đóng khổng lồ 3D */}
            <div className="mt-10">
              <button
                onClick={onClose}
                className="w-full py-5 bg-green-600 text-white font-black text-2xl rounded-2xl shadow-[0_8px_0_rgb(20,83,45)] hover:shadow-[0_4px_0_rgb(20,83,45)] hover:translate-y-[4px] active:translate-y-[8px] active:shadow-none transition-all"
              >
                TÔI ĐÃ HIỂU! 🚀
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}