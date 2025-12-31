import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Phụ Kiện Ô Tô - Độ Xe Chuyên Nghiệp',
  description: 'Phụ kiện và nội thất ô tô cao cấp dành cho người đam mê độ xe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  )
}


