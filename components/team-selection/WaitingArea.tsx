'use client'
import { motion, AnimatePresence } from 'framer-motion'

export default function WaitingArea({ members }: { members: any[] }) {
  const isEmpty = members.length === 0

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Tiêu đề vùng chờ */}
      <div className="flex items-center justify-between mb-6 px-2">
        <h3 className="text-2xl font-black italic tracking-wider flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
          </span>
          DANH SÁCH CHỜ ({members.length})
        </h3>
        {!isEmpty && (
          <span className="text-xs font-bold text-white/30 uppercase tracking-widest animate-pulse">
            Đang đợi bốc thăm...
          </span>
        )}
      </div>

      <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/10 min-h-[300px] flex flex-col items-center justify-center transition-all duration-500">
        <AnimatePresence mode="popLayout">
          {isEmpty ? (
            /* HIỆU ỨNG KHI ĐÃ CHỌN HẾT */
            <motion.div
              key="complete"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <motion.div 
                animate={{ 
                  rotate: [0, 10, -10, 10, 0],
                  scale: [1, 1.2, 1] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl mb-6"
              >
                🎊
              </motion.div>
              <h4 className="text-3xl font-black text-yellow-400 mb-2 uppercase italic">
                Sẵn Sàng Xuất Quân!
              </h4>
              <p className="text-white/50 font-medium">
                Tất cả thành viên đã có đội. Trận đấu sắp bắt đầu!
              </p>
              
              {/* Hiệu ứng tia sáng tỏa ra */}
              <div className="absolute inset-0 bg-yellow-500/5 blur-[100px] rounded-full -z-10" />
            </motion.div>
          ) : (
            /* DANH SÁCH THÀNH VIÊN ĐANG ĐỢI */
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-wrap justify-center gap-3 w-full"
            >
              {members.map((m, i) => (
                <motion.div
                  key={m.id}
                  layout
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0, y: -20 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    delay: i * 0.02 // Hiệu ứng hiện ra lần lượt
                  }}
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl text-lg font-bold transition-colors cursor-default select-none shadow-sm"
                >
                  <span className="text-sm opacity-40 mr-2 font-mono">#</span>
                  {m.name}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hiệu ứng đổ bóng dưới đáy */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-2xl -z-10" />
    </div>
  )
}