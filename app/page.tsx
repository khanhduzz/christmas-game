// 'use client'
// import GameMenu from '@/components/GameMenu'

// export default function Home() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-700 to-green-700">
//       <GameMenu />
//     </div>
//   )
// }

'use client'
import Link from 'next/link'
import { motion } from 'framer-motion' // Nếu bạn có cài framer-motion, nếu không dùng CSS transition

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#051622]">

      {/* 1. Background Decor: Tuyết rơi & Ánh sáng */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl animate-bounce">❄️</div>
        <div className="absolute top-20 right-20 text-2xl animate-pulse">❄️</div>
        <div className="absolute bottom-20 left-1/4 text-3xl animate-bounce opacity-50">❄️</div>
        {/* Đèn nháy phía trên */}
        <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 shadow-[0_0_15px_rgba(250,204,21,0.8)]" />
      </div>

      {/* 2. Hero Section */}
      <main className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-yellow-400 font-bold tracking-widest uppercase mb-2 drop-shadow-md">
            Christmas Game Event 2025
          </h2>
          <h1 className="text-6xl md:text-8xl font-black mb-6 italic">
            <span className="text-red-600 drop-shadow-[0_4px_0_rgba(255,255,255,1)]">MERRY</span>
            <span className="text-yellow-600 drop-shadow-[0_4px_0_rgba(255,255,255,1)]"> PXP</span>
            <br />
            <span className="text-green-500 drop-shadow-[0_4px_0_rgba(255,255,255,1)]">QUIZMAS</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-light">
            Chào mừng bạn đến với đấu trường trí tuệ Giáng Sinh PXP.
            <br></br>
            Hãy chọn đội, chia quân và cùng nhau vượt qua những thử thách kỳ thú!
          </p>
        </motion.div>

        {/* 3. Call to Action - Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* <Link href="/team-setup">
            <button className="group relative px-10 py-5 bg-red-600 text-white font-black text-xl rounded-2xl shadow-[0_10px_0_rgb(153,27,27)] hover:shadow-[0_5px_0_rgb(153,27,27)] hover:translate-y-[5px] transition-all duration-150 active:scale-95 overflow-hidden">
              <span className="relative z-10">🚀 BẮT ĐẦU CHƠI</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            </button>
          </Link> */}

          {/* <Link href="/team-selection">
            <button className="px-10 py-5 bg-green-600 text-white font-black text-xl rounded-2xl shadow-[0_10px_0_rgb(22,101,52)] hover:shadow-[0_5px_0_rgb(22,101,52)] hover:translate-y-[5px] transition-all duration-150 active:scale-95">
              🦌 CHIA ĐỘI
            </button>
          </Link> */}
          <Link href="/team-selection">
            <button className="group relative px-10 py-5 bg-red-600 text-white font-black text-xl rounded-2xl shadow-[0_10px_0_rgb(153,27,27)] hover:shadow-[0_5px_0_rgb(153,27,27)] hover:translate-y-[5px] transition-all duration-150 active:scale-95 overflow-hidden">
              <span className="relative z-10">🦌 CHIA ĐỘI</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            </button>
          </Link>
        </div>

        {/* 4. Footer Decor */}
        <div className="mt-20 flex justify-center gap-8 text-5xl">
          <span className="filter drop-shadow-lg">🎁</span>
          <span className="filter drop-shadow-lg animate-bounce delay-100">🎄</span>
          <span className="filter drop-shadow-lg">🎅</span>
          <span className="filter drop-shadow-lg animate-bounce delay-200">🦌</span>
          <span className="filter drop-shadow-lg">🍪</span>
        </div>
      </main>

      {/* 5. Trang trí góc dưới */}
      <div className="absolute bottom-[-20px] left-[-20px] w-64 h-64 bg-green-800/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-20px] right-[-20px] w-64 h-64 bg-red-800/20 rounded-full blur-3xl" />
    </div>
  )
}