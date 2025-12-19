'use client'
import { motion } from 'framer-motion'

export default function RandomPickAnimation({ member }: { member: { name: string } }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white text-black rounded-3xl p-10 text-center"
        initial={{ scale: 0.3, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        🎁🎄🎅
        <h2 className="text-4xl font-extrabold mt-4">
          {member.name}
        </h2>
        <p className="mt-2">Santa has chosen!</p>
      </motion.div>
    </motion.div>
  )
}
