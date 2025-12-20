'use client'

import { useTeams } from '@/app/context/TeamContext'
import { useRouter } from 'next/navigation'

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
        // <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-4">
        //     {/* result box only */}
        //     <div
        //         className="
        //             pointer-events-auto
        //             rounded-[2.5rem]
        //             px-8 py-7
        //             max-w-md w-full
        //             text-center
        //             shadow-2xl
        //             border border-red-300/40

        //             bg-gradient-to-br
        //             from-white via-red-50 to-green-50
        //         "
        //     >

        //         {/* title */}
        //         <h2 className="text-3xl font-extrabold mb-6 tracking-wide text-red-600">
        //             🎄 KẾT THÚC 🎄
        //         </h2>

        //         {/* winner */}
        //         {winner ? (
        //             <>
        //                 <p className="text-2xl font-extrabold text-green-700 mb-6">
        //                     🏆 Đội chiến thắng
        //                 </p>
        //                 <p className="text-2xl font-extrabold text-white mb-6">
        //                     {winner.name}
        //                 </p>
        //             </>
        //         ) : (
        //             <p className="text-2xl font-extrabold text-blue-200 mb-6">
        //                 🤝 HÒA
        //             </p>
        //         )}

        //         {/* scores */}
        // <div className="space-y-3 mb-6">
        //     <div className="flex justify-between items-center bg-white/70 px-5 py-3 rounded-2xl text-lg font-semibold text-gray-800">
        //         <span>🟢 {teamA.name}</span>
        //         <span className="text-2xl font-bold text-yellow-300">
        //             {scoreA}
        //         </span>
        //     </div>

        //     <div className="flex justify-between items-center bg-white/70 px-5 py-3 rounded-2xl text-lg font-semibold text-gray-800">
        //         <span>🔴 {teamB.name}</span>
        //         <span className="text-2xl font-bold text-yellow-300">
        //             {scoreB}
        //         </span>
        //     </div>
        // </div>

        //         {/* action */}
        //         <button
        //             onClick={() => router.push('/')}
        //             className="
        //                 px-6 py-3
        //                 text-lg font-bold
        //                 rounded-xl
        //                 bg-red-500 hover:bg-red-600
        //                 transition
        //                 shadow-md
        //             "
        //         >
        //             🎅 Chơi lại
        //         </button>
        //     </div>
        // </div>
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-12 md:p-16 text-center max-w-xl w-full shadow-2xl">
                {/* Title */}
                <h2 className="text-5xl md:text-6xl font-extrabold mb-10 tracking-wide">
                    🏆 KẾT QUẢ
                </h2>

                <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center px-5 rounded-2xl text-lg font-semibold">
                        <span>🟢 {teamA.name}</span>
                        <span className="text-2xl font-bold text-yellow-300">
                            {scoreA}
                        </span>
                    </div>

                    <div className="flex justify-between items-center px-5 rounded-2xl text-lg font-semibold">
                        <span>🔴 {teamB.name}</span>
                        <span className="text-2xl font-bold text-yellow-300">
                            {scoreB}
                        </span>
                    </div>
                </div>

                {winner ? (
                    <>
                        <p className="text-3xl md:text-4xl font-bold mb-6">
                            🎯 Đội chiến thắng
                        </p>
                        <p className="text-4xl md:text-5xl font-extrabold text-white mb-10">
                            ⭐ {winner.name} ⭐
                        </p>
                    </>
                ) : (
                    <p className="text-2xl font-extrabold text-blue-200 mb-6">
                        🤝 HÒA
                    </p>
                )}
                {/* Action */}
                <button
                    onClick={() => router.push('/')}
                    className="px-10 py-5 text-2xl font-bold rounded-2xl
                     bg-red-500 hover:bg-red-600 transition
                     shadow-lg"
                >
                    Chơi lại
                </button>
            </div>
        </div>
    )
}
