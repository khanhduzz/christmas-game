'use client'
import { useTeams } from '@/app/context/TeamContext'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function GameOverOverlay({
    scoreA,
    scoreB,
}: {
    scoreA: number
    scoreB: number
}) {
    const { teamA, teamB } = useTeams()
    const router = useRouter()

    const winner =
        scoreA > scoreB ? teamA :
            scoreB > scoreA ? teamB :
                null

    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-transparent">
            
            {/* Hiệu ứng pháo hoa mờ ảo ở nền */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                className="relative bg-[#0a1f2e]/90 border-4 border-white/10 backdrop-blur-2xl rounded-[3.5rem] p-10 md:p-16 text-center max-w-2xl w-full shadow-[0_0_80px_rgba(0,0,0,0.6)]"
            >
                {/* Header: Cup hoặc Icon Hòa */}
                <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="text-8xl mb-6"
                >
                    {winner ? '🏆' : '🤝'}
                </motion.div>

                <h2 className="text-2xl md:text-3xl font-black text-yellow-500 uppercase tracking-[0.4em] mb-8">
                    {winner ? 'CHIẾN THẮNG' : 'KẾT QUẢ HÒA'}
                </h2>

                {/* Bảng so sánh điểm số */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className={`p-6 rounded-[2rem] border-2 transition-all ${scoreA > scoreB ? 'bg-green-600/20 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.2)]' : 'bg-white/5 border-white/10 opacity-60'}`}>
                        <p className="text-xs font-black text-white/50 uppercase mb-2 truncate">{teamA.name}</p>
                        <p className="text-5xl font-black text-white">{scoreA}</p>
                    </div>

                    <div className={`p-6 rounded-[2rem] border-2 transition-all ${scoreB > scoreA ? 'bg-red-600/20 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]' : 'bg-white/5 border-white/10 opacity-60'}`}>
                        <p className="text-xs font-black text-white/50 uppercase mb-2 truncate">{teamB.name}</p>
                        <p className="text-5xl font-black text-white">{scoreB}</p>
                    </div>
                </div>

                {/* Tên đội chiến thắng nổi bật */}
                {winner && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mb-12"
                    >
                        <p className="text-white/60 font-bold uppercase tracking-widest text-sm mb-2 italic">Xin chúc mừng</p>
                        <h3 className="text-5xl md:text-7xl font-black text-white italic drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                             {winner.name}
                        </h3>
                    </motion.div>
                )}

                {/* Các nút hành động */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                    <button
                        onClick={() => router.push('/game')}
                        className="flex-1 px-8 py-5 text-xl font-black rounded-2xl bg-red-600 text-white shadow-[0_8px_0_rgb(153,27,27)] hover:shadow-[0_4px_0_rgb(153,27,27)] hover:translate-y-[4px] active:translate-y-[8px] active:shadow-none transition-all flex items-center justify-center gap-2"
                    >
                        🔄 CHƠI LẠI
                    </button>
                    
                    <button
                        onClick={() => router.push('/')}
                        className="px-8 py-5 text-xl font-black rounded-2xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all uppercase tracking-tighter"
                    >
                        MENU
                    </button>
                </div>

                {/* Trang trí Noel */}
                <div className="absolute -top-6 -left-6 text-6xl rotate-[-15deg] select-none">🎄</div>
                <div className="absolute -bottom-6 -right-6 text-6xl rotate-[15deg] select-none">🎁</div>
            </motion.div>
        </div>
    )
}