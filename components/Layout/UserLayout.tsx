'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingCart, Car, Menu, X } from 'lucide-react'
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
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-dark-700">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold gradient-text">PHỤ KIỆN Ô TÔ</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-primary-400'
                      : 'text-dark-300 hover:text-primary-400'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Link
                href="/cart"
                className="relative p-2 hover:bg-dark-700 rounded-lg transition-colors"
              >
                <ShoppingCart className="w-6 h-6 text-dark-300" />
                <span className="absolute top-0 right-0 w-5 h-5 bg-primary-500 rounded-full text-xs flex items-center justify-center text-white">
                  0
                </span>
              </Link>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-dark-700 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-dark-300" />
                ) : (
                  <Menu className="w-6 h-6 text-dark-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-dark-700">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-4 font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-primary-400 bg-dark-800'
                      : 'text-dark-300 hover:text-primary-400 hover:bg-dark-800'
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
      <main>{children}</main>

      {/* Footer */}
      <footer className="glass-effect border-t border-dark-700 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-display font-bold gradient-text">PHỤ KIỆN Ô TÔ</span>
              </div>
              <p className="text-dark-400">
                Nâng tầm chiếc xe của bạn với phụ kiện và nội thất cao cấp
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Danh Mục</h4>
              <ul className="space-y-2 text-dark-400">
                <li><Link href="/categories?type=interior" className="hover:text-primary-400">Nội Thất</Link></li>
                <li><Link href="/categories?type=exterior" className="hover:text-primary-400">Ngoại Thất</Link></li>
                <li><Link href="/categories?type=performance" className="hover:text-primary-400">Hiệu Năng</Link></li>
                <li><Link href="/categories?type=accessories" className="hover:text-primary-400">Phụ Kiện</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Hỗ Trợ</h4>
              <ul className="space-y-2 text-dark-400">
                <li><Link href="/about" className="hover:text-primary-400">Về Chúng Tôi</Link></li>
                <li><Link href="/contact" className="hover:text-primary-400">Liên Hệ</Link></li>
                <li><Link href="/shipping" className="hover:text-primary-400">Vận Chuyển</Link></li>
                <li><Link href="/warranty" className="hover:text-primary-400">Bảo Hành</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Liên Hệ</h4>
              <ul className="space-y-2 text-dark-400">
                <li>Email: info@phukienoto.com</li>
                <li>Hotline: 1900-xxxx</li>
                <li>Giờ làm việc: 8:00 - 20:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-dark-700 mt-8 pt-8 text-center text-dark-400">
            <p>&copy; 2024 Phụ Kiện Ô Tô. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


