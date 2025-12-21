// 'use client'

// import { useRouter } from 'next/navigation'
// import TeamSetup from '@/components/TeamSetup'

// export default function TeamSetupPage() {
//   const router = useRouter()

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-700 to-green-700">
//       <TeamSetup onDone={() => router.push('/')} />
//     </div>
//   )
// }


'use client'

import { useRouter } from 'next/navigation'
import TeamSetup from '@/components/TeamSetup'
import { motion } from 'framer-motion'

export default function TeamSetupPage() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#051622] overflow-hidden">
      
      {/* 1. Hiệu ứng nền: Các đốm sáng Giáng Sinh nhấp nháy */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      {/* 2. Hiệu ứng tuyết rơi nhẹ (Sử dụng các ký tự emoji hoặc dot) */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, opacity: 0 }}
            animate={{ 
              y: '100vh', 
              opacity: [0, 1, 1, 0],
              x: Math.random() * 20 - 10 
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5 
            }}
            className="absolute text-white"
            style={{ left: `${Math.random() * 100}%`, fontSize: Math.random() * 10 + 10 }}
          >
            ❄️
          </motion.div>
        ))}
      </div>

      {/* 3. Nội dung chính: Component TeamSetup */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <TeamSetup onDone={() => router.push('/game')} />
      </motion.div>

      {/* 4. Decor góc màn hình */}
      <div className="absolute bottom-4 left-4 text-4xl opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">🎄</div>
      <div className="absolute bottom-4 right-4 text-4xl opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">🎁</div>
    </div>
  )
}