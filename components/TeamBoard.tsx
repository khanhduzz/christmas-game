// 'use client'
// import { useTeams } from '@/app/context/TeamContext'

// export default function TeamBoard() {
//   const { teamA, teamB, activePlayer, setActivePlayer } = useTeams()

//   const render = (
//     team: any,
//     side: 'left' | 'right',
//     color: 'green' | 'red'
//   ) => {
//     const baseBg =
//       color === 'green'
//         ? 'bg-green-600'
//         : 'bg-red-600'

//     const hoverBg =
//       color === 'green'
//         ? 'hover:bg-green-500'
//         : 'hover:bg-red-500'

//     return (
//       <div
//         className={`
//           fixed top-1/2 -translate-y-1/2
//           ${side === 'left' ? 'left-4' : 'right-4'}
//           w-56 space-y-3
//         `}
//       >
//         <h3 className="font-bold text-white text-lg mb-2 text-center">
//           {team.name}
//         </h3>

//         {team.members.map((m: any) => (
//           <div
//             key={m.id}
//             onClick={() => setActivePlayer(m.id)}
//             className={`
//               cursor-pointer px-4 py-2 rounded-xl
//               text-white font-semibold text-center
//               transition-all
//               ${baseBg} ${hoverBg}
//             `}
//           >
//             {m.name}
//           </div>
//         ))}
//       </div>
//     )
//   }

//   return (
//     <>
//       {render(teamA, 'left', 'green')}
//       {render(teamB, 'right', 'red')}
//     </>
//   )
// }


// 'use client'
// import { useTeams } from '@/app/context/TeamContext'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function TeamBoard() {
//   const { teamA, teamB, activePlayer, setActivePlayer } = useTeams()

//   const renderTeam = (
//     team: any,
//     side: 'left' | 'right',
//     themeColor: 'green' | 'red'
//   ) => {
//     const isLeft = side === 'left'
    
//     // Cấu hình màu sắc theo đội
//     const colors = {
//       green: {
//         border: 'border-green-500/50',
//         glow: 'shadow-[0_0_15px_rgba(34,197,94,0.3)]',
//         active: 'bg-green-600 shadow-[0_0_20px_rgba(34,197,94,0.6)] border-green-400',
//         text: 'text-green-400',
//         hover: 'hover:bg-green-500/20'
//       },
//       red: {
//         border: 'border-red-500/50',
//         glow: 'shadow-[0_0_15px_rgba(239,68,68,0.3)]',
//         active: 'bg-red-600 shadow-[0_0_20px_rgba(239,68,68,0.6)] border-red-400',
//         text: 'text-red-400',
//         hover: 'hover:bg-red-500/20'
//       }
//     }[themeColor]

//     return (
//       <div
//         className={`fixed top-1/2 -translate-y-1/2 ${isLeft ? 'left-6' : 'right-6'} w-60 z-40`}
//       >
//         {/* Tên đội với hiệu ứng Badge */}
//         <div className={`mb-4 text-center`}>
//           <span className={`px-4 py-1 rounded-full border ${colors.border} bg-black/40 text-xs font-black uppercase tracking-[0.2em] ${colors.text} backdrop-blur-md`}>
//             {isLeft ? '🎄 Team Green' : '🎁 Team Red'}
//           </span>
//           <h3 className="text-2xl font-black text-white italic mt-2 drop-shadow-md truncate">
//             {team.name || (isLeft ? 'Đội A' : 'Đội B')}
//           </h3>
//         </div>

//         {/* Danh sách thành viên */}
//         <div className="space-y-3">
//           <AnimatePresence>
//             {team.members.map((m: any, index: number) => {
//               const isActive = activePlayer === m.id
//               return (
//                 <motion.div
//                   key={m.id}
//                   initial={{ x: isLeft ? -50 : 50, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: index * 0.1 }}
//                   onClick={() => setActivePlayer(m.id)}
//                   className={`
//                     relative cursor-pointer px-5 py-3 rounded-2xl
//                     text-white font-bold text-center
//                     transition-all duration-300 border-2 backdrop-blur-md
//                     ${isActive 
//                       ? colors.active 
//                       : `bg-white/5 border-white/10 ${colors.hover}`
//                     }
//                     ${isActive ? 'scale-105 z-10' : 'scale-100'}
//                   `}
//                 >
//                   {/* Icon chỉ định người đang chơi */}
//                   {isActive && (
//                     <motion.span 
//                       layoutId="arrow"
//                       className={`absolute ${isLeft ? '-right-2' : '-left-2'} top-1/2 -translate-y-1/2 text-xl`}
//                     >
//                       {isLeft ? '👈' : '👉'}
//                     </motion.span>
//                   )}
                  
//                   <span className={isActive ? 'text-white' : 'text-white/70'}>
//                     {m.name}
//                   </span>
//                 </motion.div>
//               )
//             })}
//           </AnimatePresence>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <>
//       {renderTeam(teamA, 'left', 'green')}
//       {renderTeam(teamB, 'right', 'red')}
//     </>
//   )
// }

// 'use client'
// import { useTeams } from '@/app/context/TeamContext'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function TeamBoard() {
//   const { teamA, teamB, activePlayers, toggleActivePlayer } = useTeams()

//   const renderTeam = (
//     team: any,
//     side: 'left' | 'right',
//     themeColor: 'green' | 'red'
//   ) => {
//     const isLeft = side === 'left'
    
//     // Cấu hình màu sắc
//     const colors = {
//       green: {
//         border: 'border-green-500/50',
//         active: 'bg-green-600 shadow-[0_0_25px_rgba(34,197,94,0.5)] border-green-400 scale-105',
//         text: 'text-green-400',
//         hover: 'hover:bg-green-500/20',
//         line: 'bg-green-500'
//       },
//       red: {
//         border: 'border-red-500/50',
//         active: 'bg-red-600 shadow-[0_0_25px_rgba(239,68,68,0.5)] border-red-400 scale-105',
//         text: 'text-red-400',
//         hover: 'hover:bg-red-500/20',
//         line: 'bg-red-500'
//       }
//     }[themeColor]

//     return (
//       <div className={`fixed top-1/2 -translate-y-1/2 ${isLeft ? 'left-6' : 'right-6'} w-64 z-40`}>
//         {/* Header Team */}
//         <div className="mb-6 text-center">
//           <span className={`px-4 py-1 rounded-full border ${colors.border} bg-black/40 text-[10px] font-black uppercase tracking-[0.2em] ${colors.text} backdrop-blur-md`}>
//             {isLeft ? '🎄 Team Green' : '🎁 Team Red'}
//           </span>
//           <h3 className="text-2xl font-black text-white italic mt-2 drop-shadow-md truncate uppercase">
//             {team.name || (isLeft ? 'Đội A' : 'Đội B')}
//           </h3>
//         </div>

//         {/* List Members */}
//         <div className="space-y-3">
//           <AnimatePresence mode="popLayout">
//             {team.members.map((m: any, index: number) => {
//               const isActive = activePlayers[themeColor] === m.id
              
//               return (
//                 <motion.div
//                   key={m.id}
//                   initial={{ x: isLeft ? -50 : 50, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: index * 0.05 }}
//                   onClick={() => toggleActivePlayer(themeColor, m.id)}
//                   className={`
//                     relative cursor-pointer px-5 py-3 rounded-2xl
//                     text-white font-bold text-center
//                     transition-all duration-300 border-2 backdrop-blur-md
//                     ${isActive 
//                       ? colors.active 
//                       : `bg-white/5 border-white/10 ${colors.hover} opacity-70`
//                     }
//                   `}
//                 >
//                   {/* Tên thành viên */}
//                   <span className={`relative z-10 ${isActive ? 'text-white' : 'text-white/60'}`}>
//                     {m.name}
//                   </span>

//                   {/* Icon trang trí khi active */}
//                   {isActive && (
//                     <motion.div
//                       layoutId={`sparkle-${themeColor}`}
//                       className="absolute -inset-1 rounded-2xl bg-white/10 blur-md"
//                     />
//                   )}
//                 </motion.div>
//               )
//             })}
//           </AnimatePresence>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <>
//       {/* HIỆU ỨNG VS VÀ ĐƯỜNG NỐI Ở GIỮA */}
//       <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
//         <AnimatePresence>
//           {activePlayers.green && activePlayers.red && (
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="relative w-full h-full flex items-center justify-center"
//             >
//               {/* Chữ VS kịch tính */}
//               <motion.div
//                 initial={{ scale: 0.5, rotate: -10 }}
//                 animate={{ scale: 1, rotate: 0 }}
//                 className="text-9xl font-black italic text-white/5 tracking-tighter select-none"
//               >
//                 VERSUS
//               </motion.div>

//               {/* Đường kẻ nối ngang phong cách Neon */}
//               <motion.div 
//                 initial={{ width: 0 }}
//                 animate={{ width: '40%' }}
//                 className="absolute h-px bg-gradient-to-r from-green-500 via-white to-red-500 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
//               />
              
//               {/* Đốm sáng chạy trên đường kẻ */}
//               <motion.div
//                 animate={{ x: [-200, 200] }}
//                 transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
//                 className="absolute w-20 h-[2px] bg-white blur-sm"
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {renderTeam(teamA, 'left', 'green')}
//       {renderTeam(teamB, 'right', 'red')}
//     </>
//   )
// }


'use client'
import { useTeams } from '@/app/context/TeamContext'
import { motion, AnimatePresence } from 'framer-motion'

export default function TeamBoard() {
  const { teamA, teamB, activePlayers, toggleActivePlayer } = useTeams()

  const renderTeam = (
    team: any,
    side: 'left' | 'right',
    themeColor: 'green' | 'red'
  ) => {
    const isLeft = side === 'left'
    const colors = {
      green: {
        border: 'border-green-500/50',
        active: 'bg-green-600 shadow-[0_0_25px_rgba(34,197,94,0.5)] border-green-400 scale-105',
        text: 'text-green-400',
        hover: 'hover:bg-green-500/20',
      },
      red: {
        border: 'border-red-500/50',
        active: 'bg-red-600 shadow-[0_0_25px_rgba(239,68,68,0.5)] border-red-400 scale-105',
        text: 'text-red-400',
        hover: 'hover:bg-red-500/20',
      }
    }[themeColor]

    return (
      <div className={`fixed top-1/2 -translate-y-1/2 ${isLeft ? 'left-6' : 'right-6'} w-64 z-40`}>
        <div className="mb-6 text-center">
          <span className={`px-4 py-1 rounded-full border ${colors.border} bg-black/40 text-[10px] font-black uppercase tracking-[0.2em] ${colors.text} backdrop-blur-md`}>
            {isLeft ? '🎄 Team Green' : '🎁 Team Red'}
          </span>
          <h3 className="text-2xl font-black text-white italic mt-2 drop-shadow-md truncate uppercase">
            {team.name || (isLeft ? 'Đội A' : 'Đội B')}
          </h3>
        </div>

        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {team.members.map((m: any, index: number) => {
              const isActive = activePlayers[themeColor] === m.id
              return (
                <motion.div
                  key={m.id}
                  initial={{ x: isLeft ? -50 : 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => toggleActivePlayer(themeColor, m.id)}
                  className={`
                    relative cursor-pointer px-5 py-3 rounded-2xl
                    text-white font-bold text-center
                    transition-all duration-300 border-2 backdrop-blur-md
                    ${isActive ? colors.active : `bg-white/5 border-white/10 ${colors.hover} opacity-70`}
                  `}
                >
                  <span className={`relative z-10 ${isActive ? 'text-white' : 'text-white/60'}`}>
                    {m.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId={`sparkle-${themeColor}`}
                      className="absolute -inset-1 rounded-2xl bg-white/10 blur-md"
                    />
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* HIỆU ỨNG VS ĐÃ ĐƯỢC ĐƯA XUỐNG DƯỚI (BATTLE BAR) */}
      <div className="fixed bottom-0 left-0 w-full h-32 pointer-events-none z-50 overflow-hidden bg-gradient-to-t from-black/80 to-transparent">
        <AnimatePresence>
          {activePlayers.green && activePlayers.red && (
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="relative w-full h-full flex flex-col items-center justify-center pb-4"
            >
              {/* Tên hai người đấu (Nhỏ xinh phía trên đường kẻ) */}
              <div className="flex items-center gap-20 mb-2">
                <motion.span initial={{ x: -20 }} animate={{ x: 0 }} className="text-green-400 font-black italic uppercase tracking-wider">
                  {teamA.members.find(m => m.id === activePlayers.green)?.name}
                </motion.span>
                
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }} 
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-white font-black text-2xl italic"
                >
                  VS
                </motion.div>

                <motion.span initial={{ x: 20 }} animate={{ x: 0 }} className="text-red-400 font-black italic uppercase tracking-wider">
                  {teamB.members.find(m => m.id === activePlayers.red)?.name}
                </motion.span>
              </div>

              {/* Đường kẻ Neon nằm dưới cùng */}
              <div className="relative w-[60%] h-px">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  className="absolute inset-0 bg-gradient-to-r from-green-500 via-white to-red-500 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                />
                
                {/* Đốm sáng chạy qua lại */}
                <motion.div
                  animate={{ x: [-300, 300] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="absolute top-1/2 -translate-y-1/2 w-32 h-[3px] bg-white blur-md"
                />
              </div>

              {/* Chữ VERSUS mờ làm nền phía sau Battle Bar */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <span className="text-6xl font-black italic text-white/5 tracking-[1em] uppercase select-none">
                  VERSUS
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {renderTeam(teamA, 'left', 'green')}
      {renderTeam(teamB, 'right', 'red')}
    </>
  )
}