// 'use client'
// import { useTeams } from '@/app/context/TeamContext'

// export default function TeamSetup({ onDone }: { onDone: () => void }) {
//   const {
//   teamA,
//   teamB,
//   setTeamAName,
//   setTeamBName,
//   setTeamAMembers,
//   setTeamBMembers,
//   activePlayer,
//   setActivePlayer
// } = useTeams()


//   return (
//     <div className="bg-white p-8 rounded-3xl text-black w-[420px] text-center">
//       <h1 className="text-3xl font-bold mb-6">🎄 Đặt tên đội 🎄</h1>

//       <input
//         value={teamA.name}
//         onChange={e => setTeamAName(e.target.value)}
//         className="w-full p-3 border rounded-xl mb-4 text-lg"
//         placeholder="Tên đội A"
//       />

//       <input
//         value={teamB.name}
//         onChange={e => setTeamBName(e.target.value)}
//         className="w-full p-3 border rounded-xl mb-6 text-lg"
//         placeholder="Tên đội B"
//       />

//       <button
//         onClick={onDone}
//         className="w-full py-3 bg-green-600 text-white rounded-xl text-xl"
//       >
//         Tiếp tục 🎮
//       </button>
//     </div>
//   )
// }


// 'use client'
// import { useTeams } from '@/app/context/TeamContext'
// import { motion } from 'framer-motion' // Nếu bạn không dùng framer-motion, có thể thay bằng div thường

// export default function TeamSetup({ onDone }: { onDone: () => void }) {
//   const {
//     teamA,
//     teamB,
//     setTeamAName,
//     setTeamBName,
//   } = useTeams()

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#051622] p-4">
//       {/* Container chính với hiệu ứng Glow bao quanh */}
//       <div className="relative group">
//         {/* Lớp nền mờ tạo hiệu ứng ánh sáng tỏa ra */}
//         <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        
//         <div className="relative bg-[#0a1f2e] border-2 border-white/10 p-10 rounded-[2.5rem] text-white w-full max-w-[450px] shadow-2xl">
          
//           {/* Header */}
//           <div className="mb-8">
//             <span className="text-4xl block mb-2">🎁</span>
//             <h1 className="text-4xl font-black text-yellow-400 italic tracking-tight">
//               DANH TÁNH <br /> <span className="text-white not-italic">HAI ĐỘI</span>
//             </h1>
//             <div className="h-1 w-20 bg-red-600 mx-auto mt-4 rounded-full"></div>
//           </div>

//           {/* Form Input Đội A */}
//           <div className="mb-6 text-left">
//             <label className="block text-green-500 text-xs font-black uppercase tracking-[0.2em] mb-2 ml-2">Đội Xanh</label>
//             <input
//               value={teamA.name}
//               onChange={e => setTeamAName(e.target.value)}
//               className="w-full bg-white/5 border-2 border-white/10 p-4 rounded-2xl text-xl font-bold focus:border-green-500 focus:bg-green-500/5 transition-all outline-none placeholder:text-white/20"
//               placeholder="Nhập tên đội A..."
//             />
//           </div>

//           {/* Form Input Đội B */}
//           <div className="mb-10 text-left">
//             <label className="block text-red-500 text-xs font-black uppercase tracking-[0.2em] mb-2 ml-2">Đội Đỏ</label>
//             <input
//               value={teamB.name}
//               onChange={e => setTeamBName(e.target.value)}
//               className="w-full bg-white/5 border-2 border-white/10 p-4 rounded-2xl text-xl font-bold focus:border-red-500 focus:bg-red-500/5 transition-all outline-none placeholder:text-white/20"
//               placeholder="Nhập tên đội B..."
//             />
//           </div>

//           {/* Nút bấm 3D phong cách Merry Quizmas */}
//           <button
//             onClick={onDone}
//             className="w-full group relative py-5 bg-green-600 text-white font-black text-2xl rounded-2xl shadow-[0_8px_0_rgb(20,83,45)] hover:shadow-[0_4px_0_rgb(20,83,45)] hover:translate-y-[4px] active:shadow-none active:translate-y-[8px] transition-all duration-150 overflow-hidden"
//           >
//             <span className="relative z-10 flex items-center justify-center gap-3">
//               TIẾP TỤC 🚀
//             </span>
//             {/* Hiệu ứng tia sáng chạy ngang nút khi hover */}
//             <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
//           </button>

//           {/* Trang trí nhỏ phía dưới */}
//           <p className="mt-6 text-white/30 text-sm font-light uppercase tracking-widest">
//             — Merry Quizmas 2025 —
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'
import { useTeams } from '@/app/context/TeamContext'
import { motion } from 'framer-motion'

export default function TeamSetup({ onDone }: { onDone: () => void }) {
  const {
    teamA,
    teamB,
    setTeamAName,
    setTeamBName,
  } = useTeams()

  return (
    /* BỎ min-h-screen và bg-[#051622] ở đây vì trang cha đã có rồi */
    <div className="w-full flex items-center justify-center p-4">
      
      {/* Container chính: Tăng max-w lên để modal rộng hơn */}
      <div className="relative group w-full max-w-[900px]">
        
        {/* Lớp nền mờ tạo hiệu ứng ánh sáng tỏa ra */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        
        {/* Nội dung Modal: Bỏ max-w-[450px] để nó dùng max-w của cha */}
        <div className="relative bg-[#0a1f2e]/60 backdrop-blur-md border-2 border-white/10 p-12 md:p-16 rounded-[3rem] text-white w-full shadow-2xl">
          
          {/* Header: Căn giữa và làm to hơn */}
          <div className="mb-12 text-center">
            <motion.span 
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-6xl block mb-4"
            >
              🎁
            </motion.span>
            <h1 className="text-5xl md:text-6xl font-black text-yellow-400 italic tracking-tighter uppercase">
              Danh Tánh <br /> <span className="text-white not-italic">Hai Chiến Tuyến</span>
            </h1>
            <div className="h-1.5 w-32 bg-red-600 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
          </div>

          {/* Grid Layout: Chia 2 cột trên màn hình lớn để modal nhìn chuyên nghiệp */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            {/* Cột Đội Xanh */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-green-500 text-sm font-black uppercase tracking-[0.3em] ml-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Đội Xanh
              </label>
              <input
                value={teamA.name}
                onChange={e => setTeamAName(e.target.value)}
                className="w-full bg-white/5 border-2 border-white/10 p-6 rounded-2xl text-2xl font-bold focus:border-green-500 focus:bg-green-500/10 transition-all outline-none placeholder:text-white/10 shadow-inner"
                placeholder="Ví dụ: Tuần Lộc Xanh..."
              />
            </div>

            {/* Cột Đội Đỏ */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-red-500 text-sm font-black uppercase tracking-[0.3em] ml-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Đội Đỏ
              </label>
              <input
                value={teamB.name}
                onChange={e => setTeamBName(e.target.value)}
                className="w-full bg-white/5 border-2 border-white/10 p-6 rounded-2xl text-2xl font-bold focus:border-red-500 focus:bg-red-500/10 transition-all outline-none placeholder:text-white/10 shadow-inner"
                placeholder="Ví dụ: Ông Già Quạo..."
              />
            </div>

          </div>

          {/* Nút bấm: Làm to và rực rỡ hơn */}
          <div className="max-w-md mx-auto">
            <button
              onClick={onDone}
              className="w-full group relative py-6 bg-gradient-to-r from-green-600 to-green-500 text-white font-black text-3xl rounded-[2rem] shadow-[0_10px_0_rgb(20,83,45)] hover:shadow-[0_5px_0_rgb(20,83,45)] hover:translate-y-[5px] active:shadow-none active:translate-y-[10px] transition-all duration-150 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                BẮT ĐẦU TRẬN ĐẤU 🚀
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
            </button>
          </div>

          {/* Footer trang trí */}
          <div className="mt-10 flex items-center justify-center gap-4 opacity-20">
            <div className="h-px w-10 bg-white"></div>
            <p className="text-white text-xs font-bold uppercase tracking-[0.4em]">
              Merry Quizmas 2025
            </p>
            <div className="h-px w-10 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  )
}