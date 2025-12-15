
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="bg-gradient-to-b from-red-700 via-red-600 to-green-700 text-white">
        {children}
      </body>
    </html>
  )
}
