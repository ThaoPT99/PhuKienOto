'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingCart, Car, Menu, X, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Trang Chủ' },
    { href: '/products', label: 'Sản Phẩm' },
    { href: '/categories', label: 'Danh Mục' },
    { href: '/about', label: 'Về Chúng Tôi' },
    { href: '/contact', label: 'Liên Hệ' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="fixed inset-0 bg-gradient-primary opacity-10 blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="fixed inset-0 bg-gradient-secondary opacity-5 blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Header với màu sắc rực rỡ */}
      <header className="sticky top-0 z-50 glass-effect-colored border-b-2 border-primary-400/30 backdrop-blur-xl shadow-lg shadow-primary-500/20">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo với gradient */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-primary-500/50">
                  <Car className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-secondary rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity -z-10"></div>
              </div>
              <div>
                <span className="text-xl font-display font-black gradient-text block">GNART</span>
                <span className="text-lg font-display font-bold gradient-text-blue block -mt-1">ĐỘ NÁT Ô TÔ</span>
              </div>
            </Link>

            {/* Desktop Navigation với màu sắc đa dạng */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-5 py-2.5 rounded-lg font-bold transition-all duration-300 ${
                    pathname === item.href
                      ? 'gradient-text text-white bg-gradient-primary shadow-lg shadow-primary-500/50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  style={{
                    background: pathname === item.href 
                      ? 'linear-gradient(135deg, #f43f5e 0%, #fb923c 50%, #fbbf24 100%)'
                      : undefined
                  }}
                >
                  {pathname === item.href && (
                    <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-accent-yellow animate-pulse" />
                  )}
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Link
                href="/cart"
                className="relative p-3 hover:bg-white/10 rounded-xl transition-all group"
              >
                <ShoppingCart className="w-6 h-6 text-white group-hover:text-accent-yellow transition-colors" />
                <span className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-br from-primary-500 to-accent-orange rounded-full text-xs flex items-center justify-center text-white font-bold shadow-lg shadow-primary-500/50">
                  0
                </span>
              </Link>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-3 hover:bg-white/10 rounded-xl transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation với gradient */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10 bg-gradient-to-br from-dark-800/95 to-dark-900/95 backdrop-blur-xl">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-4 px-6 font-bold transition-all rounded-lg mx-2 mb-2 ${
                    pathname === item.href
                      ? 'gradient-text bg-gradient-primary text-white shadow-lg'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10">{children}</main>

      {/* Footer với màu sắc rực rỡ */}
      <footer className="glass-effect-colored border-t-2 border-primary-400/30 mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-accent-purple/5"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/50">
                  <Car className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-xl font-display font-black gradient-text block">GNART</span>
                  <span className="text-lg font-display font-bold gradient-text-blue block -mt-1">ĐỘ NÁT Ô TÔ</span>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                Nâng tầm chiếc xe của bạn với phụ kiện và nội thất cao cấp
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 gradient-text">Danh Mục</h4>
              <ul className="space-y-3 text-white/70">
                <li><Link href="/categories?type=interior" className="hover:gradient-text transition-all hover:translate-x-2 inline-block">Nội Thất</Link></li>
                <li><Link href="/categories?type=exterior" className="hover:gradient-text-blue transition-all hover:translate-x-2 inline-block">Ngoại Thất</Link></li>
                <li><Link href="/categories?type=performance" className="hover:text-accent-green transition-all hover:translate-x-2 inline-block">Hiệu Năng</Link></li>
                <li><Link href="/categories?type=accessories" className="hover:text-accent-orange transition-all hover:translate-x-2 inline-block">Phụ Kiện</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 gradient-text-blue">Hỗ Trợ</h4>
              <ul className="space-y-3 text-white/70">
                <li><Link href="/about" className="hover:text-primary-400 transition-all hover:translate-x-2 inline-block">Về Chúng Tôi</Link></li>
                <li><Link href="/contact" className="hover:text-secondary-400 transition-all hover:translate-x-2 inline-block">Liên Hệ</Link></li>
                <li><Link href="/shipping" className="hover:text-accent-orange transition-all hover:translate-x-2 inline-block">Vận Chuyển</Link></li>
                <li><Link href="/warranty" className="hover:text-accent-green transition-all hover:translate-x-2 inline-block">Bảo Hành</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 gradient-text-neon">Liên Hệ</h4>
              <ul className="space-y-3 text-white/70">
                <li className="hover:text-primary-400 transition-colors">📧 info@gnartdonatoto.com</li>
                <li className="hover:text-secondary-400 transition-colors">📞 1900-xxxx</li>
                <li className="hover:text-accent-yellow transition-colors">🕐 8:00 - 20:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/50">
              &copy; 2024 Gnart Độ Nát Ô Tô. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
