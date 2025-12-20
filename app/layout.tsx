
import TopNavControls from '@/components/TopNavControls'
import { TeamProvider } from './context/TeamContext'
import './globals.css'
import type { Metadata } from 'next'
import TeamBoard from '@/components/TeamBoard'

export const metadata: Metadata = {
  title: '🎮 Playing |🎄 Christmas Ca Dao Game',
  icons: {
    icon: '/icon.png',
  },
  description: 'Trò chơi đoán ca dao tục ngữ - Giáng Sinh vui nhộn',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="bg-gradient-to-b from-red-700 via-red-600 to-green-700 text-white">
        <TeamProvider>
          <TopNavControls />
          <TeamBoard />
          {children}
        </TeamProvider>
      </body>
    </html>
  )
}
