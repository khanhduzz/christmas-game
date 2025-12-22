// 'use client'
// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useTeams } from '@/context/TeamContext'
// import TeamBoard from '@/components/TeamBoard' // Dùng lại TeamBoard bạn đã có

// export default function XepLyGame() {
//   const { teamA, teamB, activePlayers, addGreen, addRed } = useTeams()
//   const [timer, setTimer] = useState(0)
//   const [isRunning, setIsRunning] = useState(false)
//   const [winner, setWinner] = useState<'GREEN' | 'RED' | null>(null)

//   // Đồng hồ bấm giờ
//   useEffect(() => {
//     let interval: NodeJS.Timeout
//     if (isRunning && !winner) {
//       interval = setInterval(() => {
//         setTimer((prev) => prev + 10) // Tăng mỗi 10ms để có hiệu ứng chạy mượt
//       }, 10)
//     }
//     return () => clearInterval(interval)
//   }, [isRunning, winner])

//   const formatTime = (ms: number) => {
//     const seconds = Math.floor(ms / 1000)
//     const milliseconds = Math.floor((ms % 1000) / 10)
//     return `${seconds}.${milliseconds < 10 ? '0' : ''}${milliseconds}s`
//   }

//   const handleWin = (side: 'GREEN' | 'RED') => {
//     setIsRunning(false)
//     setWinner(side)
//   }

//   return (
//     <div className="min-h-screen bg-[#051622] text-white relative p-8 overflow-hidden">
//       {/* Background Decor */}
//       <div className="absolute inset-0 pointer-events-none opacity-20">
//         <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[120px]" />
//         <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full blur-[120px]" />
//       </div>

//       {/* Hiển thị TeamBoard hai bên */}
//       <TeamBoard />

//       <main className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
//         {/* Tiêu đề & Luật chơi nhanh */}
//         <header className="text-center mb-8">
//           <motion.h1 
//             initial={{ y: -50 }} animate={{ y: 0 }}
//             className="text-6xl font-black italic tracking-tighter text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]"
//           >
//             THỬ THÁCH XẾP LY
//           </motion.h1>
//           <div className="mt-4 flex gap-4 justify-center">
//              <RuleCard icon="📦" text="4 Ly bí mật ẩn dưới hộp" />
//              <RuleCard icon="🥤" text="Xếp 4 ly lên nóc hộp" />
//              <RuleCard icon="🔄" text="Đổi vị trí để tìm cặp đúng" />
//           </div>
//         </header>

//         {/* Khu vực Đồng hồ chính */}
//         <div className="relative mb-12">
//           <motion.div 
//             animate={isRunning ? { scale: [1, 1.02, 1] } : {}}
//             transition={{ repeat: Infinity, duration: 1 }}
//             className="bg-black/60 border-4 border-white/10 backdrop-blur-2xl px-20 py-10 rounded-[4rem] shadow-[0_0_50px_rgba(255,255,255,0.1)] text-center"
//           >
//             <p className="text-white/40 font-black uppercase tracking-[0.5em] mb-2">Timer</p>
//             <span className="text-9xl font-mono font-black tabular-nums text-white">
//               {formatTime(timer)}
//             </span>
//           </motion.div>

//           {/* Nút điều khiển */}
//           <div className="flex justify-center gap-6 mt-8">
//             {!isRunning && timer === 0 && (
//               <ControlButton onClick={() => setIsRunning(true)} color="green" text="BẮT ĐẦU" icon="🚀" />
//             )}
//             {isRunning && (
//                <div className="flex gap-4">
//                   <ControlButton onClick={() => handleWin('GREEN')} color="green" text="TEAM XANH XONG!" icon="✅" />
//                   <ControlButton onClick={() => handleWin('RED')} color="red" text="TEAM ĐỎ XONG!" icon="✅" />
//                </div>
//             )}
//             {!isRunning && timer > 0 && (
//               <button 
//                 onClick={() => {setTimer(0); setWinner(null)}}
//                 className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full font-bold transition-all"
//               >
//                 LÀM MỚI 🔄
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Minh họa trực quan luật chơi */}
//         <div className="grid grid-cols-2 gap-10 w-full opacity-80">
//           <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
//             <h4 className="font-bold text-blue-400 mb-4 flex items-center gap-2">
//               <span className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">1</span>
//               Phản hồi từ Quản trò
//             </h4>
//             <div className="flex justify-around items-end h-32">
//               <Cup color="bg-red-500" label="Sai" />
//               <Cup color="bg-green-500" label="Đúng 1" active />
//               <Cup color="bg-blue-500" label="Sai" />
//               <Cup color="bg-yellow-500" label="Sai" />
//             </div>
//             <p className="text-sm text-white/40 mt-4 italic text-center">"Chỉ báo số lượng ly trùng màu với vị trí ẩn dưới hộp"</p>
//           </div>

//           <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex flex-col justify-center items-center">
//              <h4 className="font-bold text-purple-400 mb-4">Chiến thuật Mastermind</h4>
//              <div className="text-center space-y-2">
//                 <p className="text-2xl font-black">🔄 HOÁN ĐỔI</p>
//                 <p className="text-sm text-white/60">Mỗi lượt chỉ đổi chỗ 2 chiếc ly và nghe hiệu lệnh số lượng đúng từ quản trò.</p>
//              </div>
//           </div>
//         </div>
//       </main>

//       {/* Modal thông báo chiến thắng */}
//       <AnimatePresence>
//         {winner && (
//           <motion.div 
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }}
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl"
//           >
//             <motion.div 
//               initial={{ scale: 0.5, y: 100 }} animate={{ scale: 1, y: 0 }}
//               className="text-center p-20"
//             >
//               <h2 className={`text-8xl font-black italic mb-4 ${winner === 'GREEN' ? 'text-green-500' : 'text-red-500'}`}>
//                 {winner === 'GREEN' ? teamA.name : teamB.name} THẮNG!
//               </h2>
//               <p className="text-4xl text-white font-bold mb-10">Thời gian: {formatTime(timer)}</p>
//               <button 
//                 onClick={() => {setTimer(0); setWinner(null)}}
//                 className="px-12 py-6 bg-yellow-500 text-black font-black text-2xl rounded-2xl shadow-[0_8px_0_rgb(161,98,7)] hover:translate-y-1 active:shadow-none transition-all"
//               >
//                 CHƠI LẠI
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// // Sub-components hỗ trợ giao diện
// function RuleCard({ icon, text }: { icon: string, text: string }) {
//   return (
//     <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-2">
//       <span className="text-2xl">{icon}</span>
//       <span className="text-xs font-bold uppercase tracking-wider text-white/60">{text}</span>
//     </div>
//   )
// }

// function ControlButton({ onClick, color, text, icon }: { onClick: () => void, color: 'green' | 'red', text: string, icon: string }) {
//   const colorClass = color === 'green' ? 'bg-green-600 shadow-[0_8px_0_rgb(20,83,45)]' : 'bg-red-600 shadow-[0_8px_0_rgb(153,27,27)]'
//   return (
//     <button 
//       onClick={onClick}
//       className={`${colorClass} px-10 py-5 rounded-2xl text-2xl font-black flex items-center gap-3 hover:translate-y-1 active:shadow-none transition-all`}
//     >
//       {icon} {text}
//     </button>
//   )
// }

// function Cup({ color, label, active = false }: { color: string, label: string, active?: boolean }) {
//   return (
//     <div className="flex flex-col items-center gap-2">
//       <div className={`w-12 h-16 ${color} rounded-t-lg rounded-b-3xl relative ${active ? 'ring-4 ring-white shadow-[0_0_20px_rgba(255,255,255,0.5)]' : 'opacity-40'}`}>
//         <div className="absolute top-0 w-full h-2 bg-black/20 rounded-t-lg" />
//       </div>
//       <span className={`text-[10px] font-bold uppercase ${active ? 'text-white' : 'text-white/20'}`}>{label}</span>
//     </div>
//   )
// }

// 'use client'
// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useTeams } from '@/context/TeamContext'
// import TeamBoard from '@/components/TeamBoard'

// export default function XepLyGame() {
//   const { teamA, teamB, addGreen, addRed } = useTeams()

//   const [timer, setTimer] = useState(0)
//   const [isRunning, setIsRunning] = useState(false)
//   const [winner, setWinner] = useState<'GREEN' | 'RED' | null>(null)
//   const [earnedScore, setEarnedScore] = useState<number | null>(null)

//   /* ⏱ TIMER */
//   useEffect(() => {
//     let interval: NodeJS.Timeout | undefined
//     if (isRunning && !winner) {
//       interval = setInterval(() => {
//         setTimer(prev => prev + 10)
//       }, 10)
//     }
//     return () => interval && clearInterval(interval)
//   }, [isRunning, winner])

//   const formatTime = (ms: number) => {
//     const s = Math.floor(ms / 1000)
//     const ms10 = Math.floor((ms % 1000) / 10)
//     return `${s}.${ms10 < 10 ? '0' : ''}${ms10}s`
//   }

//   /* 🎯 TÍNH ĐIỂM */
//   const calculateScore = (ms: number) => {
//     const sec = ms / 1000
//     if (sec < 30) return 10
//     if (sec < 60) return 5
//     if (sec < 180) return 3
//     return 2
//   }

//   /* 🏆 KHI BẤM NÚT XONG */
//   const handleWin = (side: 'GREEN' | 'RED') => {
//     if (!isRunning || winner) return // khóa double click

//     const score = calculateScore(timer)
//     setEarnedScore(score)

//     if (side === 'GREEN') {
//       addGreen(score)
//     } else {
//       addRed(score)
//     }

//     setIsRunning(false)
//     setWinner(side)
//   }

//   const resetGame = () => {
//     setTimer(0)
//     setWinner(null)
//     setEarnedScore(null)
//   }

//   return (
//     <div className="min-h-screen bg-[#051622] text-white relative p-8 overflow-hidden">
//       <TeamBoard />

//       <main className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
//         {/* TITLE */}
//         <header className="text-center mb-10">
//           <motion.h1
//             initial={{ y: -40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="text-6xl font-black italic tracking-tight text-yellow-400 drop-shadow"
//           >
//             THỬ THÁCH XẾP LY
//           </motion.h1>
//         </header>

//         {/* TIMER */}
//         <div className="relative mb-14">
//           <motion.div
//             animate={isRunning ? { scale: [1, 1.03, 1] } : {}}
//             transition={{ duration: 1, repeat: Infinity }}
//             className="bg-black/60 border-4 border-white/10 backdrop-blur-xl px-20 py-10 rounded-[4rem] text-center shadow-[0_0_40px_rgba(255,255,255,0.15)]"
//           >
//             <p className="text-white/40 font-black uppercase tracking-widest mb-2">
//               Timer
//             </p>
//             <span className="text-9xl font-mono font-black tabular-nums">
//               {formatTime(timer)}
//             </span>
//           </motion.div>

//           {/* CONTROLS */}
//           <div className="flex justify-center gap-6 mt-10">
//             {!isRunning && timer === 0 && (
//               <ControlButton
//                 onClick={() => setIsRunning(true)}
//                 color="green"
//                 text="BẮT ĐẦU"
//                 icon="🚀"
//               />
//             )}

//             {isRunning && (
//               <>
//                 <ControlButton
//                   onClick={() => handleWin('GREEN')}
//                   color="green"
//                   text="TEAM XANH XONG!"
//                   icon="✅"
//                 />
//                 <ControlButton
//                   onClick={() => handleWin('RED')}
//                   color="red"
//                   text="TEAM ĐỎ XONG!"
//                   icon="✅"
//                 />
//               </>
//             )}

//             {!isRunning && timer > 0 && (
//               <button
//                 onClick={resetGame}
//                 className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full font-bold transition"
//               >
//                 LÀM MỚI 🔄
//               </button>
//             )}
//           </div>
//         </div>
//       </main>

//       {/* 🏅 MODAL WIN */}
//       <AnimatePresence>
//         {winner && earnedScore !== null && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl"
//           >
//             <motion.div
//               initial={{ scale: 0.6, y: 80 }}
//               animate={{ scale: 1, y: 0 }}
//               className="text-center p-20"
//             >
//               <h2
//                 className={`text-8xl font-black italic mb-6 ${
//                   winner === 'GREEN' ? 'text-green-400' : 'text-red-400'
//                 }`}
//               >
//                 {winner === 'GREEN' ? teamA.name : teamB.name} THẮNG!
//               </h2>

//               <p className="text-4xl mb-4">
//                 ⏱ {formatTime(timer)}
//               </p>

//               <motion.p
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.2, type: 'spring' }}
//                 className="text-5xl font-black text-yellow-400 mb-12"
//               >
//                 +{earnedScore} ĐIỂM
//               </motion.p>

//               <button
//                 onClick={resetGame}
//                 className="px-14 py-6 bg-yellow-500 text-black font-black text-2xl rounded-3xl shadow-[0_8px_0_rgb(161,98,7)] hover:translate-y-1 active:shadow-none transition-all"
//               >
//                 CHƠI LẠI
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// /* ---------- UI ---------- */

// function ControlButton({
//   onClick,
//   color,
//   text,
//   icon
// }: {
//   onClick: () => void
//   color: 'green' | 'red'
//   text: string
//   icon: string
// }) {
//   const colorClass =
//     color === 'green'
//       ? 'bg-green-600 shadow-[0_8px_0_rgb(20,83,45)]'
//       : 'bg-red-600 shadow-[0_8px_0_rgb(153,27,27)]'

//   return (
//     <button
//       onClick={onClick}
//       className={`${colorClass} px-10 py-5 rounded-2xl text-2xl font-black flex items-center gap-3 hover:translate-y-1 active:shadow-none transition-all`}
//     >
//       {icon} {text}
//     </button>
//   )
// }

