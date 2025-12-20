// 'use client'
// import { motion } from 'framer-motion'

// export default function RandomPickAnimation({ member }: { member: { name: string } }) {
//   return (
//     <motion.div
//       className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       <motion.div
//         className="bg-white text-black rounded-3xl p-10 text-center"
//         initial={{ scale: 0.3, rotate: -10 }}
//         animate={{ scale: 1, rotate: 0 }}
//         transition={{ type: 'spring', stiffness: 120 }}
//       >
//         🎁🎄🎅
//         <h2 className="text-4xl text-black  font-extrabold mt-4">
//           {member.name}
//         </h2>
//         <p className="mt-2">Santa has chosen!</p>
//       </motion.div>
//     </motion.div>
//   )
// }


// 'use client'
// import { motion } from 'framer-motion'
// import { useMemo } from 'react'

// const animations = [
//   'SANTA_GIFT',
//   'GIFT_POP',
//   'BOX_SHAKE',
//   'SNOW_REVEAL',
// ] as const

// type AnimType = typeof animations[number]

// export default function RandomPickAnimation({
//   member,
// }: {
//   member: { name: string }
// }) {
//   // 🎲 pick random animation once per render
//   const type = useMemo<AnimType>(() => {
//     return animations[Math.floor(Math.random() * animations.length)]
//   }, [])

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       {type === 'SANTA_GIFT' && <SantaGift name={member.name} />}
//       {type === 'GIFT_POP' && <GiftPop name={member.name} />}
//       {type === 'BOX_SHAKE' && <BoxShake name={member.name} />}
//       {type === 'SNOW_REVEAL' && <SnowReveal name={member.name} />}
//     </motion.div>
//   )
// }

// /* 🎅 Santa slides in */
// function SantaGift({ name }: { name: string }) {
//   return (
//     <motion.div
//       className="bg-white text-black rounded-3xl p-10 text-center"
//       initial={{ x: -300, scale: 0.8 }}
//       animate={{ x: 0, scale: 1 }}
//       transition={{ type: 'spring', stiffness: 120 }}
//     >
//       <div className="text-6xl mb-4">🎅🎁</div>
//       <h2 className="text-4xl text-black  font-extrabold">{name}</h2>
//       <p className="mt-2">Santa delivered a gift!</p>
//     </motion.div>
//   )
// }

// /* 🎁 Gift pops open */
// function GiftPop({ name }: { name: string }) {
//   return (
//     <motion.div
//       className="bg-white text-black rounded-3xl p-10 text-center"
//       initial={{ scale: 0 }}
//       animate={{ scale: [0, 1.2, 1] }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="text-6xl mb-4">🎁💥</div>
//       <h2 className="text-4xl text-black  font-extrabold">{name}</h2>
//       <p className="mt-2">Surprise!</p>
//     </motion.div>
//   )
// }

// /* 📦 Shaking box */
// function BoxShake({ name }: { name: string }) {
//   return (
//     <motion.div
//       className="bg-white text-black rounded-3xl p-10 text-center"
//       initial={{ rotate: 0 }}
//       animate={{ rotate: [-5, 5, -5, 5, 0] }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="text-6xl mb-4">📦❓</div>
//       <h2 className="text-4xl text-black  font-extrabold">{name}</h2>
//       <p className="mt-2">Who’s inside the box?</p>
//     </motion.div>
//   )
// }

// /* ❄️ Snow fade reveal */
// function SnowReveal({ name }: { name: string }) {
//   return (
//     <motion.div
//       className="bg-white text-black rounded-3xl p-10 text-center"
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="text-6xl mb-4">❄️🎄</div>
//       <h2 className="text-4xl text-black  font-extrabold">{name}</h2>
//       <p className="mt-2">A winter surprise!</p>
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
  // pick random animation ONCE per render
  const animationType = useMemo(
    () => Math.floor(Math.random() * 6),
    []
  )

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {animationType === 0 && <GiftBoom name={member.name} />}
        {animationType === 1 && <SantaDrop name={member.name} />}
        {animationType === 2 && <BoxShake name={member.name} />}
        {animationType === 3 && <SnowReveal name={member.name} />}
        {animationType === 4 && <ExplosionReveal name={member.name} />}
        {animationType === 5 && <MagicStar name={member.name} />}
      </motion.div>
    </AnimatePresence>
  )
}

/* ---------------------------------- */
/* 🎁 1. Gift opens → BOOM → name      */
/* ---------------------------------- */
function GiftBoom({ name }: { name: string }) {
  return (
    <motion.div
      className="bg-white rounded-3xl p-12 text-center"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-7xl"
        animate={{ rotate: [0, 10, -10, 0] }}
      >
        🎁
      </motion.div>

      <motion.div
        className="text-4xl text-black  font-extrabold mt-6"
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        💥 BOOM!
      </motion.div>

      <motion.h2
        className="text-4xl text-black  font-extrabold mt-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        {name}
      </motion.h2>
    </motion.div>
  )
}

/* ---------------------------------- */
/* 🎅 2. Santa drops gift              */
/* ---------------------------------- */
function SantaDrop({ name }: { name: string }) {
  return (
    <motion.div className="bg-white rounded-3xl p-12 text-center">
      <motion.div
        className="text-7xl"
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        🎅
      </motion.div>

      <motion.div
        className="text-6xl mt-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        🎁
      </motion.div>

      <motion.h2
        className="text-4xl text-black  font-extrabold mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {name}
      </motion.h2>
    </motion.div>
  )
}

/* ---------------------------------- */
/* 📦 3. Shaking box suspense          */
/* ---------------------------------- */
function BoxShake({ name }: { name: string }) {
  return (
    <motion.div
      className="bg-white rounded-3xl p-12 text-center"
      animate={{ rotate: [-5, 5, -5, 5, 0] }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-7xl">📦</div>

      <motion.p
        className="italic mt-4"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0.9 }}
      >
        Who is it...?
      </motion.p>

      <motion.h2
        className="text-4xl text-black  font-extrabold mt-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
      >
        {name}
      </motion.h2>
    </motion.div>
  )
}

/* ---------------------------------- */
/* ❄️ 4. Snow fade reveal              */
/* ---------------------------------- */
function SnowReveal({ name }: { name: string }) {
  return (
    <motion.div className="bg-white rounded-3xl p-12 text-center">
      <motion.div
        className="text-6xl"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1 }}
      >
        ❄️❄️❄️
      </motion.div>

      <motion.h2
        className="text-4xl text-black  font-extrabold mt-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        {name}
      </motion.h2>
    </motion.div>
  )
}

/* ---------------------------------- */
/* 💥 5. Explosion reveal              */
/* ---------------------------------- */
function ExplosionReveal({ name }: { name: string }) {
  return (
    <motion.div className="bg-white rounded-3xl p-12 text-center">
      <motion.div
        className="text-7xl"
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ duration: 0.4 }}
      >
        💥
      </motion.div>

      <motion.h2
        className="text-4xl text-black  font-extrabold mt-7"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {name}
      </motion.h2>
    </motion.div>
  )
}

/* ---------------------------------- */
/* ✨ 6. Magic star summon              */
/* ---------------------------------- */
function MagicStar({ name }: { name: string }) {
  return (
    <motion.div className="bg-white rounded-3xl p-12 text-center">
      <motion.div
        className="text-7xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        ⭐✨
      </motion.div>

      <motion.h2
        className="text-4xl text-black  font-extrabold mt-6"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: 'spring' }}
      >
        {name}
      </motion.h2>
    </motion.div>
  )
}

