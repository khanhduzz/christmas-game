// 'use client'
// import { useState } from 'react'
// import membersData from '@/data/member.json'
// import LeaderSelect from '@/components/team-selection/LeaderSelect'
// import WaitingArea from '@/components/team-selection/WaitingArea'
// import PickControls from '@/components/team-selection/PickControls'
// import RandomPickAnimation from '@/components/team-selection/RandomPickAnimation'
// import { useTeams } from '../context/TeamContext'

// type Member = { id: string; name: string }
// type TeamSide = 'GREEN' | 'RED'

// export default function TeamSelectionPage() {
//   const [leaders, setLeaders] = useState<{
//     green?: Member
//     red?: Member
//   }>({})

//   const [waiting, setWaiting] = useState<Member[]>(membersData)
//   const [animating, setAnimating] = useState(false)
//   const [picked, setPicked] = useState<Member | null>(null)

//   const {
//     teamA,
//     teamB,
//     setTeamAMembers,
//     setTeamBMembers
//   } = useTeams()

//   const phase = leaders.green && leaders.red ? 'RANDOM_PICK' : 'LEADER_SELECT'

//   const pickRandom = (side: TeamSide) => {
//     if (animating || waiting.length === 0) return

//     setAnimating(true)

//     const index = Math.floor(Math.random() * waiting.length)
//     const member = waiting[index]
//     setPicked(member)

//     setTimeout(() => {
//       setWaiting(w => w.filter(m => m.id !== member.id))

//       if (side === 'GREEN') {
//         setTeamAMembers([...teamA.members, member])
//       } else {
//         setTeamBMembers([...teamB.members, member])
//       }

//       setPicked(null)
//       setAnimating(false)
//     }, 2500)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-sky-900 to-indigo-950 text-white p-8">
//       <h1 className="text-5xl font-extrabold text-center mb-8 mt-10">
//         🎅 Chọn đội 🎁
//       </h1>

//       {phase === 'LEADER_SELECT' && (
//         <LeaderSelect
//           members={waiting}
//           onSelect={(side, member) => {
//             setLeaders(l => ({ ...l, [side]: member }))
//             setWaiting(w => w.filter(m => m.id !== member.id))

//             // 👑 leader goes into team immediately
//             if (side === 'green') {
//               setTeamAMembers([member])
//             } else {
//               setTeamBMembers([member])
//             }
//           }}
//         />
//       )}

//       {phase === 'RANDOM_PICK' && (
//         <>
//           <div className="flex justify-center">
//             <div className="min-w-[40vw]">
//               <WaitingArea members={waiting} />
//             </div>
//           </div>

//           <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
//             <PickControls
//               disabled={animating}
//               onGreen={() => pickRandom('GREEN')}
//               onRed={() => pickRandom('RED')}
//             />
//           </div>


//           {picked && <RandomPickAnimation member={picked} />}
//         </>
//       )}
//     </div>
//   )
// }

// 'use client'
// import { useState } from 'react'
// import membersData from '@/data/member.json'
// import LeaderSelect from '@/components/team-selection/LeaderSelect'
// import WaitingArea from '@/components/team-selection/WaitingArea'
// import PickControls from '@/components/team-selection/PickControls'
// import RandomPickAnimation from '@/components/team-selection/RandomPickAnimation'
// import { useTeams } from '../context/TeamContext'
// import { motion, AnimatePresence } from 'framer-motion'

// type Member = { id: string; name: string }
// type TeamSide = 'GREEN' | 'RED'

// export default function TeamSelectionPage() {
//   const [leaders, setLeaders] = useState<{ green?: Member; red?: Member }>({})
//   const [waiting, setWaiting] = useState<Member[]>(membersData)
//   const [animating, setAnimating] = useState(false)
//   const [picked, setPicked] = useState<Member | null>(null)

//   const { teamA, teamB, setTeamAMembers, setTeamBMembers } = useTeams()

//   const phase = leaders.green && leaders.red ? 'RANDOM_PICK' : 'LEADER_SELECT'

//   const pickRandom = (side: TeamSide) => {
//     if (animating || waiting.length === 0) return
//     setAnimating(true)

//     const index = Math.floor(Math.random() * waiting.length)
//     const member = waiting[index]
//     setPicked(member)

//     setTimeout(() => {
//       setWaiting(w => w.filter(m => m.id !== member.id))
//       if (side === 'GREEN') {
//         setTeamAMembers([...teamA.members, member])
//       } else {
//         setTeamBMembers([...teamB.members, member])
//       }
//       setPicked(null)
//       setAnimating(false)
//     }, 2500)
//   }

//   return (
//     <div className="min-h-screen bg-[#051622] text-white relative overflow-hidden flex flex-col">
//       {/* Background Decor */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 blur-[120px]" />
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 blur-[120px]" />
//       </div>

//       <header className="relative z-10 pt-10 pb-6 text-center">
//         <motion.h1
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="text-6xl font-black italic tracking-tighter"
//         >
//           {phase === 'LEADER_SELECT' ? '👑 CHỌN ĐỘI TRƯỞNG' : '🎁 CHIA ĐỘI NGẪU NHIÊN'}
//         </motion.h1>
//         <p className="text-white/40 font-bold uppercase tracking-[0.3em] mt-2">
//           Christmas Battle 2024
//         </p>
//       </header>

//       <main className="flex-1 relative z-10 flex flex-col items-center justify-start pb-32 overflow-hidden">
//         <AnimatePresence mode="wait">
//           {phase === 'LEADER_SELECT' ? (
//             <motion.div
//               key="leader"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 1.1 }}
//               className="w-full max-w-6xl px-6"
//             >
//               <LeaderSelect
//                 members={waiting}
//                 onSelect={(side, member) => {
//                   setLeaders(l => ({ ...l, [side]: member }))
//                   setWaiting(w => w.filter(m => m.id !== member.id))
//                   if (side === 'green') setTeamAMembers([member])
//                   else setTeamBMembers([member])
//                 }}
//               />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="random"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="w-full max-w-4xl flex flex-col items-center h-full"
//             >
//               {/* Khu vực Waiting Area có Scroll */}
//               <div className="relative w-full group">
//                 {/* Hiệu ứng bóng mờ phía trên và dưới để báo hiệu có thể scroll */}
//                 <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#051622] to-transparent z-10 pointer-events-none" />
//                 <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#051622] to-transparent z-10 pointer-events-none" />

//                 <div className="max-h-[50vh] overflow-y-auto px-6 py-12 no-scrollbar scroll-smooth">
//                   <WaitingArea members={waiting} />
//                 </div>

//                 {/* Thông báo số lượng còn lại */}
//                 <div className="text-center mt-4">
//                   <span className="bg-white/5 border border-white/10 px-4 py-1 rounded-full text-xs font-bold text-white/40">
//                     CÒN LẠI {waiting.length} THÀNH VIÊN
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </main>

//       {/* Điều khiển cố định phía dưới */}
//       {phase === 'RANDOM_PICK' && (
//         <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-[#051622] via-[#051622]/90 to-transparent pt-20 pb-10 flex justify-center z-50">
//           <motion.div
//             initial={{ y: 100 }}
//             animate={{ y: 0 }}
//             className="px-8 py-4 bg-black/40 backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-2xl"
//           >
//             <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center pb-10">
//               <PickControls
//                 disabled={animating}
//                 isWaitingEmpty={waiting.length === 0} // <--- Thêm dòng quan trọng này
//                 onGreen={() => pickRandom('GREEN')}
//                 onRed={() => pickRandom('RED')}
//               />
//             </div>
//           </motion.div>
//         </div>
//       )}

//       {/* Animation khi bốc trúng */}
//       <AnimatePresence>
//         {picked && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100]"
//           >
//             <RandomPickAnimation member={picked} />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style jsx global>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   )
// }


'use client'
import { useState, useEffect } from 'react' // Thêm useEffect để theo dõi thay đổi
import membersData from '@/data/member.json'
import LeaderSelect from '@/components/team-selection/LeaderSelect'
import WaitingArea from '@/components/team-selection/WaitingArea'
import PickControls from '@/components/team-selection/PickControls'
import RandomPickAnimation from '@/components/team-selection/RandomPickAnimation'
import { useTeams } from '../context/TeamContext'
import { motion, AnimatePresence } from 'framer-motion'

type Member = { id: string; name: string }
type TeamSide = 'GREEN' | 'RED'

export default function TeamSelectionPage() {
  const { teamA, teamB, setTeamAMembers, setTeamBMembers, excludedIds } = useTeams()
  
  const [leaders, setLeaders] = useState<{ green?: Member; red?: Member }>({})
  
  // 1. KHỞI TẠO: Chỉ lấy những người KHÔNG nằm trong danh sách loại bỏ (excludedIds)
  const [waiting, setWaiting] = useState<Member[]>(() => 
    membersData.filter(m => !excludedIds.includes(m.id))
  )
  
  const [animating, setAnimating] = useState(false)
  const [picked, setPicked] = useState<Member | null>(null)

  // 2. ĐỒNG BỘ: Nếu bạn mở Modal ở Navbar và thay đổi quân số, danh sách chờ phải cập nhật theo
  useEffect(() => {
    // Lọc những người: Không bị loại bỏ VÀ chưa có trong đội A/B
    const currentTeamIds = [...teamA.members, ...teamB.members].map(m => m.id);
    const updatedWaiting = membersData.filter(m => 
      !excludedIds.includes(m.id) && !currentTeamIds.includes(m.id)
    );
    setWaiting(updatedWaiting);
  }, [excludedIds, teamA.members, teamB.members]);

  const phase = leaders.green && leaders.red ? 'RANDOM_PICK' : 'LEADER_SELECT'

  const pickRandom = (side: TeamSide) => {
    if (animating || waiting.length === 0) return
    setAnimating(true)

    const index = Math.floor(Math.random() * waiting.length)
    const member = waiting[index]
    setPicked(member)

    setTimeout(() => {
      setWaiting(w => w.filter(m => m.id !== member.id))
      if (side === 'GREEN') {
        setTeamAMembers([...teamA.members, member])
      } else {
        setTeamBMembers([...teamB.members, member])
      }
      setPicked(null)
      setAnimating(false)
    }, 2500)
  }

  return (
    <div className="min-h-screen bg-[#051622] text-white relative overflow-hidden flex flex-col">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 blur-[120px]" />
      </div>

      <header className="relative z-10 pt-10 pb-6 text-center">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl font-black italic tracking-tighter uppercase mt-20"
        >
          {phase === 'LEADER_SELECT' ? '👑 Chọn Đội Trưởng' : '🎁 Chia Đội Ngẫu Nhiên'}
        </motion.h1>
        <p className="text-white/40 font-bold uppercase tracking-[0.3em] mt-2">
          Christmas Battle 2024
        </p>
      </header>

      <main className="flex-1 relative z-10 flex flex-col items-center justify-start pb-40 overflow-hidden">
        <AnimatePresence mode="wait">
          {phase === 'LEADER_SELECT' ? (
            <motion.div
              key="leader"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="w-full max-w-6xl px-6"
            >
              <LeaderSelect
                members={waiting}
                onSelect={(side, member) => {
                  setLeaders(l => ({ ...l, [side]: member }))
                  setWaiting(w => w.filter(m => m.id !== member.id))
                  if (side === 'green') setTeamAMembers([member])
                  else setTeamBMembers([member])
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="random"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-4xl flex flex-col items-center h-full"
            >
              <div className="relative w-full group">
                <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#051622] to-transparent z-10 pointer-events-none" />
                <div className="max-h-[50vh] overflow-y-auto px-6 py-12 no-scrollbar scroll-smooth">
                  <WaitingArea members={waiting} />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#051622] to-transparent z-10 pointer-events-none" />

                <div className="text-center mt-4">
                   {/* Hiển thị số lượng thực tế sau khi đã lọc */}
                  <span className="bg-white/5 border border-white/10 px-6 py-2 rounded-full text-sm font-black text-yellow-500 tracking-widest uppercase">
                    Quân số chờ: {waiting.length}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Điều khiển cố định */}
      {phase === 'RANDOM_PICK' && (
        <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-[#051622] via-[#051622] to-transparent pt-20 pb-10 flex justify-center z-50">
           <PickControls
              disabled={animating}
              isWaitingEmpty={waiting.length === 0}
              onGreen={() => pickRandom('GREEN')}
              onRed={() => pickRandom('RED')}
            />
        </div>
      )}

      {/* Animation bốc thăm */}
      <AnimatePresence>
        {picked && (
           <RandomPickAnimation member={picked} />
        )}
      </AnimatePresence>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  )
}