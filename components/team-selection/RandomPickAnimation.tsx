// 'use client'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useMemo } from 'react'

// type Props = {
//   member: { name: string }
// }

// export default function RandomPickAnimation({ member }: Props) {
//   // pick random animation ONCE per render
//   const animationType = useMemo(
//     () => Math.floor(Math.random() * 6),
//     []
//   )

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="fixed inset-0 z-50 flex items-center justify-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       >
//         {animationType === 0 && <GiftBoom name={member.name} />}
//         {animationType === 1 && <SantaDrop name={member.name} />}
//         {animationType === 2 && <BoxShake name={member.name} />}
//         {animationType === 3 && <SnowReveal name={member.name} />}
//         {animationType === 4 && <ExplosionReveal name={member.name} />}
//         {animationType === 5 && <MagicStar name={member.name} />}
//       </motion.div>
//     </AnimatePresence>
//   )
// }

// /* ---------------------------------- */
// /* 🎁 1. Gift opens → BOOM → name      */
// /* ---------------------------------- */
// function GiftBoom({ name }: { name: string }) {
//   return (
//     <motion.div
//       className="bg-white rounded-3xl p-12 text-center"
//       initial={{ scale: 0 }}
//       animate={{ scale: [0, 1.2, 1] }}
//       transition={{ duration: 0.6 }}
//     >
//       <motion.div
//         className="text-7xl"
//         animate={{ rotate: [0, 10, -10, 0] }}
//       >
//         🎁
//       </motion.div>

//       <motion.div
//         className="text-4xl text-black  font-extrabold mt-6"
//         initial={{ opacity: 0, scale: 2 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.6 }}
//       >
//         💥 BOOM!
//       </motion.div>

//       <motion.h2
//         className="text-4xl text-black  font-extrabold mt-6"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.1 }}
//       >
//         {name}
//       </motion.h2>
//     </motion.div>
//   )
// }

// /* ---------------------------------- */
// /* 🎅 2. Santa drops gift              */
// /* ---------------------------------- */
// function SantaDrop({ name }: { name: string }) {
//   return (
//     <motion.div className="bg-white rounded-3xl p-12 text-center">
//       <motion.div
//         className="text-7xl"
//         initial={{ y: -200 }}
//         animate={{ y: 0 }}
//         transition={{ type: 'spring', stiffness: 120 }}
//       >
//         🎅
//       </motion.div>

//       <motion.div
//         className="text-6xl mt-4"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.6 }}
//       >
//         🎁
//       </motion.div>

//       <motion.h2
//         className="text-4xl text-black  font-extrabold mt-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.2 }}
//       >
//         {name}
//       </motion.h2>
//     </motion.div>
//   )
// }

// /* ---------------------------------- */
// /* 📦 3. Shaking box suspense          */
// /* ---------------------------------- */
// function BoxShake({ name }: { name: string }) {
//   return (
//     <motion.div
//       className="bg-white rounded-3xl p-12 text-center"
//       animate={{ rotate: [-5, 5, -5, 5, 0] }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="text-7xl">📦</div>

//       <motion.p
//         className="italic mt-4"
//         initial={{ opacity: 1 }}
//         animate={{ opacity: 0 }}
//         transition={{ delay: 0.9 }}
//       >
//         Who is it...?
//       </motion.p>

//       <motion.h2
//         className="text-4xl text-black  font-extrabold mt-6"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 1.2, type: 'spring' }}
//       >
//         {name}
//       </motion.h2>
//     </motion.div>
//   )
// }

// /* ---------------------------------- */
// /* ❄️ 4. Snow fade reveal              */
// /* ---------------------------------- */
// function SnowReveal({ name }: { name: string }) {
//   return (
//     <motion.div className="bg-white rounded-3xl p-12 text-center">
//       <motion.div
//         className="text-6xl"
//         animate={{ opacity: [0, 1, 0] }}
//         transition={{ duration: 1 }}
//       >
//         ❄️❄️❄️
//       </motion.div>

//       <motion.h2
//         className="text-4xl text-black  font-extrabold mt-6"
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 1 }}
//       >
//         {name}
//       </motion.h2>
//     </motion.div>
//   )
// }

// /* ---------------------------------- */
// /* 💥 5. Explosion reveal              */
// /* ---------------------------------- */
// function ExplosionReveal({ name }: { name: string }) {
//   return (
//     <motion.div className="bg-white rounded-3xl p-12 text-center">
//       <motion.div
//         className="text-7xl"
//         initial={{ scale: 0 }}
//         animate={{ scale: 2 }}
//         transition={{ duration: 0.4 }}
//       >
//         💥
//       </motion.div>

//       <motion.h2
//         className="text-4xl text-black  font-extrabold mt-7"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6 }}
//       >
//         {name}
//       </motion.h2>
//     </motion.div>
//   )
// }

// /* ---------------------------------- */
// /* ✨ 6. Magic star summon              */
// /* ---------------------------------- */
// function MagicStar({ name }: { name: string }) {
//   return (
//     <motion.div className="bg-white rounded-3xl p-12 text-center">
//       <motion.div
//         className="text-7xl"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 1 }}
//       >
//         ⭐✨
//       </motion.div>

//       <motion.h2
//         className="text-4xl text-black  font-extrabold mt-6"
//         initial={{ opacity: 0, scale: 0.3 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.8, type: 'spring' }}
//       >
//         {name}
//       </motion.h2>
//     </motion.div>
//   )
// }


'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useMemo } from 'react'

type Props = {
  member: { name: string }
}

export default function RandomPickAnimation({ member }: Props) {
  const animationType = useMemo(() => Math.floor(Math.random() * 6), [])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl">
      {/* Lớp nền tia sáng quét qua */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-40 bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 animate-[pulse_3s_infinite]" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={animationType}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative z-10"
        >
          {animationType === 0 && <GiftBoom name={member.name} />}
          {animationType === 1 && <SantaDrop name={member.name} />}
          {animationType === 2 && <BoxShake name={member.name} />}
          {animationType === 3 && <SnowReveal name={member.name} />}
          {animationType === 4 && <ExplosionReveal name={member.name} />}
          {animationType === 5 && <MagicStar name={member.name} />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/* Base Wrapper cho các thẻ tên để nhìn "sang" hơn */
const NameCard = ({ children, colorClass = "from-yellow-400 to-orange-500" }: { children: React.ReactNode, colorClass?: string }) => (
  <div className="text-center">
    <div className="relative inline-block">
       {/* Aura phát sáng phía sau */}
       <div className={`absolute -inset-8 bg-gradient-to-r ${colorClass} blur-[60px] opacity-30 animate-pulse`} />
       {children}
    </div>
  </div>
)

/* 1. Gift Boom - Hiệu ứng hộp quà nổ tung */
function GiftBoom({ name }: { name: string }) {
  return (
    <NameCard colorClass="from-green-500 to-emerald-400">
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: [0, 1.5, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 0.8 }}
        className="text-9xl mb-4"
      >
        🎁
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring' }}
        className="bg-white/10 border-2 border-green-500/50 backdrop-blur-md px-12 py-8 rounded-[3rem] shadow-2xl"
      >
        <div className="text-green-400 font-black tracking-[0.3em] text-sm mb-2 uppercase">New Recruit</div>
        <h2 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter drop-shadow-lg">{name}</h2>
      </motion.div>
    </NameCard>
  )
}

/* 2. Santa Drop - Ông già Noel thả quà từ trên xuống */
function SantaDrop({ name }: { name: string }) {
  return (
    <NameCard colorClass="from-red-600 to-red-400">
      <motion.div
        initial={{ y: -500, x: -100 }}
        animate={{ y: 0, x: 0 }}
        transition={{ type: 'spring', damping: 12 }}
        className="text-9xl mb-4"
      >
        🎅
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-red-600 px-12 py-6 rounded-[2rem] shadow-[0_15px_40px_rgba(220,38,38,0.5)] border-4 border-white/20"
      >
        <h2 className="text-5xl md:text-7xl font-black text-white">{name}</h2>
      </motion.div>
    </NameCard>
  )
}

/* 3. Box Shake - Rung hộp kịch tính */
function BoxShake({ name }: { name: string }) {
  return (
    <NameCard colorClass="from-blue-500 to-purple-500">
      <motion.div
        animate={{ rotate: [-8, 8, -8, 8, 0], scale: [1, 1.1, 1, 1.1, 1] }}
        transition={{ duration: 0.5, repeat: 2 }}
        className="text-9xl mb-4"
      >
        📦
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="bg-white px-12 py-6 rounded-full"
      >
        <h2 className="text-5xl md:text-7xl font-black text-black tracking-tight">{name}</h2>
      </motion.div>
    </NameCard>
  )
}

/* 4. Snow Reveal - Tuyết tan biến hiện ra tên */
function SnowReveal({ name }: { name: string }) {
  return (
    <NameCard colorClass="from-blue-200 to-white">
      <motion.div 
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 2] }}
        transition={{ duration: 1.5 }}
        className="text-8xl absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        ❄️❄️❄️
      </motion.div>
      <motion.div
        initial={{ opacity: 0, filter: 'blur(20px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center"
      >
        <h2 className="text-7xl md:text-9xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] italic">
          {name}
        </h2>
      </motion.div>
    </NameCard>
  )
}

/* 5. Explosion Reveal - Vụ nổ ánh sáng */
function ExplosionReveal({ name }: { name: string }) {
  return (
    <NameCard colorClass="from-orange-600 to-yellow-400">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 4, 0] }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 flex items-center justify-center text-9xl z-0"
      >
        💥
      </motion.div>
      <motion.div
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        className="relative z-10 bg-black border-4 border-yellow-500 px-16 py-8 rounded-3xl"
      >
        <h2 className="text-6xl md:text-8xl font-black text-yellow-500 uppercase italic leading-none">{name}</h2>
      </motion.div>
    </NameCard>
  )
}

/* 6. Magic Star - Triệu hồi bằng ngôi sao */
function MagicStar({ name }: { name: string }) {
  return (
    <NameCard colorClass="from-purple-600 to-pink-500">
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="text-9xl mb-8"
      >
        ⭐
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative"
      >
        <h2 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-300 drop-shadow-2xl">
          {name}
        </h2>
      </motion.div>
    </NameCard>
  )
}