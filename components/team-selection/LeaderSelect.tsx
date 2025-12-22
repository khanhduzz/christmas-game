'use client'
import { useTeams } from '@/app/context/TeamContext'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Member = {
  id: string
  name: string
}

type Props = {
  members: Member[]
  onSelect: (side: 'green' | 'red', member: Member) => void
}

export default function LeaderSelect({ members, onSelect }: Props) {
  const [step, setStep] = useState<'green' | 'red'>('green')
  const { teamA, teamB } = useTeams()

  const isGreen = step === 'green'
  const teamName = isGreen ? (teamA.name || 'Đội Xanh') : (teamB.name || 'Đội Đỏ')

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Thẻ hiển thị trạng thái hiện tại */}
      <motion.div 
        layout
        className={`rounded-[3rem] p-1 shadow-2xl transition-colors duration-500 ${isGreen ? 'bg-green-500' : 'bg-red-500'}`}
      >
        <div className="bg-[#0a1f2e] rounded-[2.8rem] p-8 md:p-12">
          
          <div className="text-center mb-10">
            <motion.div
              key={step}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className={`inline-block px-6 py-2 rounded-full border mb-4 font-black uppercase tracking-[0.2em] text-xs ${isGreen ? 'border-green-500 text-green-500 bg-green-500/10' : 'border-red-500 text-red-500 bg-red-500/10'}`}
            >
              Bước {isGreen ? '1' : '2'}: Chọn thủ lĩnh
            </motion.div>
            
            <motion.h2 
              key={teamName}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl md:text-6xl font-black italic text-white drop-shadow-md"
            >
              {teamName}
            </motion.h2>
          </div>

          {/* Danh sách thành viên với Scroll Area */}
          <div className="relative group">
            {/* Phủ gradient mờ phía trên/dưới khi scroll */}
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#0a1f2e] to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-[400px] overflow-y-auto pr-2 no-scrollbar scroll-smooth py-4">
              <AnimatePresence>
                {members.map((member, index) => (
                  <motion.button
                    key={member.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      onSelect(step, member)
                      setStep(isGreen ? 'red' : 'green')
                    }}
                    className={`group relative p-5 rounded-2xl text-lg font-black transition-all border-2 flex items-center justify-center text-center leading-tight
                      ${isGreen 
                        ? 'border-green-500/20 bg-green-500/5 text-green-100 hover:bg-green-500 hover:text-white hover:border-green-400 shadow-lg shadow-green-500/0 hover:shadow-green-500/20' 
                        : 'border-red-500/20 bg-red-500/5 text-red-100 hover:bg-red-500 hover:text-white hover:border-red-400 shadow-lg shadow-red-500/0 hover:shadow-red-500/20'
                      }`}
                  >
                    {member.name}
                    {/* Hiệu ứng tia sáng nhỏ khi hover */}
                    <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100">
                      ✨
                    </div>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#0a1f2e] to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <p className="mt-10 text-center text-white/30 font-bold uppercase tracking-widest text-xs">
             Sứ mệnh của đội đang nằm trong tay bạn ❄️
          </p>
        </div>
      </motion.div>

      {/* Hiệu ứng đèn Neon phản chiếu xuống nền */}
      <div className={`absolute -inset-4 blur-[60px] opacity-20 -z-10 transition-colors duration-1000 ${isGreen ? 'bg-green-500' : 'bg-red-500'}`} />

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}