'use client'
import { useState } from 'react'
import membersData from '@/data/member.json'
import LeaderSelect from '@/components/team-selection/LeaderSelect'
import WaitingArea from '@/components/team-selection/WaitingArea'
import PickControls from '@/components/team-selection/PickControls'
import RandomPickAnimation from '@/components/team-selection/RandomPickAnimation'
import { useTeams } from '../context/TeamContext'

type Member = { id: string; name: string }
type TeamSide = 'GREEN' | 'RED'

export default function TeamSelectionPage() {
  const [leaders, setLeaders] = useState<{
    green?: Member
    red?: Member
  }>({})

  const [waiting, setWaiting] = useState<Member[]>(membersData)
  const [animating, setAnimating] = useState(false)
  const [picked, setPicked] = useState<Member | null>(null)

  const {
    teamA,
    teamB,
    setTeamAMembers,
    setTeamBMembers
  } = useTeams()

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
    <div className="min-h-screen bg-gradient-to-b from-sky-900 to-indigo-950 text-white p-8">
      <h1 className="text-5xl font-extrabold text-center mb-8 mt-10">
        🎅 Chọn đội 🎁
      </h1>

      {phase === 'LEADER_SELECT' && (
        <LeaderSelect
          members={waiting}
          onSelect={(side, member) => {
            setLeaders(l => ({ ...l, [side]: member }))
            setWaiting(w => w.filter(m => m.id !== member.id))

            // 👑 leader goes into team immediately
            if (side === 'green') {
              setTeamAMembers([member])
            } else {
              setTeamBMembers([member])
            }
          }}
        />
      )}

      {phase === 'RANDOM_PICK' && (
        <>
          <div className="flex justify-center">
            <div className="min-w-[40vw]">
              <WaitingArea members={waiting} />
            </div>
          </div>

          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <PickControls
              disabled={animating}
              onGreen={() => pickRandom('GREEN')}
              onRed={() => pickRandom('RED')}
            />
          </div>


          {picked && <RandomPickAnimation member={picked} />}
        </>
      )}
    </div>
  )
}


// 'use client'
// import { useState, useEffect } from 'react'
// import membersData from '@/data/member.json'
// import LeaderSelect from '@/components/team-selection/LeaderSelect'
// import WaitingArea from '@/components/team-selection/WaitingArea'
// import PickControls from '@/components/team-selection/PickControls'
// import RandomPickAnimation from '@/components/team-selection/RandomPickAnimation'
// import { useTeams } from '../context/TeamContext'

// type Member = { id: string; name: string }
// type TeamSide = 'GREEN' | 'RED'

// export default function TeamSelectionPage() {
//   const {
//     teamA,
//     teamB,
//     setTeamAMembers,
//     setTeamBMembers,
//     excludedIds, // Lấy danh sách ID bị loại từ Context
//     toggleExcludeMember // Hàm để ẩn/hiện thành viên
//   } = useTeams()

//   const [leaders, setLeaders] = useState<{
//     green?: Member
//     red?: Member
//   }>({})

//   // Khởi tạo danh sách chờ: Lọc bỏ những người bị Exclude ngay từ đầu
//   const [waiting, setWaiting] = useState<Member[]>(() => 
//     membersData.filter(m => !excludedIds.includes(m.id))
//   )
  
//   const [animating, setAnimating] = useState(false)
//   const [picked, setPicked] = useState<Member | null>(null)
//   const [showManageModal, setShowManageModal] = useState(false) // State cho giao diện quản lý

//   // Cập nhật danh sách chờ nếu danh sách loại trừ thay đổi (từ modal)
//   useEffect(() => {
//     setWaiting(membersData.filter(m => 
//       !excludedIds.includes(m.id) && 
//       !teamA.members.find(tm => tm.id === m.id) && 
//       !teamB.members.find(tm => tm.id === m.id)
//     ))
//   }, [excludedIds])

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
//     <div className="min-h-screen bg-gradient-to-b from-sky-900 to-indigo-950 text-white p-8 relative">
//       {/* Nút cài đặt thành viên */}
//       <button 
//         onClick={() => setShowManageModal(true)}
//         className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all border border-white/20 z-[60]"
//         title="Quản lý thành viên"
//       >
//         ⚙️ Quản lý quân số
//       </button>

//       <h1 className="text-5xl font-extrabold text-center mb-8 mt-10">
//         🎅 Chọn đội 🎁
//       </h1>

//       {phase === 'LEADER_SELECT' && (
//         <LeaderSelect
//           members={waiting}
//           onSelect={(side, member) => {
//             setLeaders(l => ({ ...l, [side]: member }))
//             setWaiting(w => w.filter(m => m.id !== member.id))
//             if (side === 'green') setTeamAMembers([member])
//             else setTeamBMembers([member])
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

//       {/* MODAL QUẢN LÝ THÀNH VIÊN (Hiện ra khi bấm nút cài đặt) */}
//       {showManageModal && (
//         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
//           <div className="bg-slate-800 border border-slate-700 w-full max-w-2xl rounded-2xl p-6 shadow-2xl max-h-[80vh] overflow-y-auto">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-green-400">Danh sách tham gia</h2>
//               <button onClick={() => setShowManageModal(false)} className="text-gray-400 hover:text-white text-2xl">✕</button>
//             </div>
            
//             <p className="text-sm text-gray-400 mb-4 italic">* Nhấn vào tên để loại bỏ/thêm lại thành viên nghỉ phép</p>
            
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//               {membersData.map((member) => {
//                 const isExcluded = excludedIds.includes(member.id);
//                 return (
//                   <div 
//                     key={member.id}
//                     onClick={() => toggleExcludeMember(member.id)}
//                     className={`p-3 rounded-lg border cursor-pointer transition-all flex justify-between items-center ${
//                       isExcluded 
//                       ? 'bg-red-900/20 border-red-900/50 text-gray-500 opacity-60' 
//                       : 'bg-green-900/20 border-green-500/50 text-green-100 hover:scale-105'
//                     }`}
//                   >
//                     <span className={isExcluded ? 'line-through' : ''}>{member.name}</span>
//                     <span className="text-xs">{isExcluded ? '❌' : '✅'}</span>
//                   </div>
//                 )
//               })}
//             </div>

//             <button 
//               onClick={() => setShowManageModal(false)}
//               className="w-full mt-8 bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-colors"
//             >
//               Xong - Bắt đầu chia đội
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }