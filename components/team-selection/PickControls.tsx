'use client'
import { useTeams } from "@/app/context/TeamContext"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

export default function PickControls({
  onGreen,
  onRed,
  disabled,
  isWaitingEmpty, // Thêm prop này để nhận biết khi nào hết người
}: {
  onGreen: () => void
  onRed: () => void
  disabled: boolean
  isWaitingEmpty: boolean
}) {
  const { teamA, teamB } = useTeams()
  const router = useRouter()

  return (
    <div className="relative flex items-center justify-center min-w-[500px] h-24">
      <AnimatePresence mode="wait">
        {!isWaitingEmpty ? (
          /* GIAI ĐOẠN ĐANG BỐC THĂM */
          <motion.div
            key="picking"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="flex gap-8 md:gap-12"
          >
            {/* Nút Đội Xanh */}
            <div className="relative group">
              <button
                disabled={disabled}
                onClick={onGreen}
                className={`
                  relative z-10 px-10 py-5 rounded-2xl text-xl font-black uppercase tracking-tighter transition-all
                  ${disabled 
                    ? 'bg-gray-700 text-white/20 cursor-not-allowed' 
                    : 'bg-green-600 text-white shadow-[0_8px_0_rgb(20,83,45)] hover:shadow-[0_4px_0_rgb(20,83,45)] hover:translate-y-[4px] active:translate-y-[8px] active:shadow-none'
                  }
                `}
              >
                Bốc cho {teamA.name || 'Đội Xanh'}
              </button>
              {!disabled && (
                <div className="absolute -inset-2 bg-green-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>

            {/* Nút Đội Đỏ */}
            <div className="relative group">
              <button
                disabled={disabled}
                onClick={onRed}
                className={`
                  relative z-10 px-10 py-5 rounded-2xl text-xl font-black uppercase tracking-tighter transition-all
                  ${disabled 
                    ? 'bg-gray-700 text-white/20 cursor-not-allowed' 
                    : 'bg-red-600 text-white shadow-[0_8px_0_rgb(153,27,27)] hover:shadow-[0_4px_0_rgb(153,27,27)] hover:translate-y-[4px] active:translate-y-[8px] active:shadow-none'
                  }
                `}
              >
                Bốc cho {teamB.name || 'Đội Đỏ'}
              </button>
              {!disabled && (
                <div className="absolute -inset-2 bg-red-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
          </motion.div>
        ) : (
          /* GIAI ĐOẠN HOÀN THÀNH - NÚT ĐI ĐẾN TRANG ĐẶT TÊN */
          <motion.button
            key="next-step"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/team-setup')} // Thay đổi path tùy theo route của bạn
            className="px-16 py-6 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 text-white text-2xl font-black uppercase tracking-[0.2em] rounded-[2rem] shadow-[0_10px_0_rgb(154,52,18)] hover:shadow-[0_5px_0_rgb(154,52,18)] hover:translate-y-[5px] active:translate-y-[10px] active:shadow-none transition-all flex items-center gap-4"
          >
            Tiếp tục đặt tên 🖋️
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              ➔
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}