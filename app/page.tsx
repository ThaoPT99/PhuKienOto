'use client'

import Link from 'next/link'
import { ShoppingCart, Car, Sparkles, Shield, TrendingUp } from 'lucide-react'
import UserLayout from '@/components/Layout/UserLayout'

export default function Home() {
  return (
    <UserLayout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-accent-red/20 blur-3xl"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-500/20 border border-primary-500/50 rounded-full text-primary-400 text-sm font-semibold">
              🚗 ĐỘ XE CHUYÊN NGHIỆP
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 gradient-text">
            PHỤ KIỆN Ô TÔ
          </h1>
          <p className="text-xl md:text-2xl text-dark-300 mb-12 max-w-3xl mx-auto">
            Nâng tầm chiếc xe của bạn với phụ kiện và nội thất cao cấp
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/products"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-lg font-semibold text-white transition-all transform hover:scale-105 shadow-lg shadow-primary-500/50"
            >
              XEM SẢN PHẨM
            </Link>
            <Link 
              href="/admin"
              className="px-8 py-4 glass-effect hover:bg-dark-700/80 rounded-lg font-semibold text-white transition-all border-dark-600"
            >
              QUẢN TRỊ
            </Link>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-red/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-effect p-8 rounded-xl hover:border-primary-500/50 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Chất Lượng Cao</h3>
            <p className="text-dark-400">Sản phẩm được chọn lọc kỹ càng, đảm bảo chất lượng và độ bền cao</p>
          </div>
          
          <div className="glass-effect p-8 rounded-xl hover:border-primary-500/50 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-orange to-accent-red rounded-lg flex items-center justify-center mb-6">
              <Car className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Độ Xe Chuyên Nghiệp</h3>
            <p className="text-dark-400">Tư vấn và hỗ trợ chuyên nghiệp từ đội ngũ có kinh nghiệm</p>
          </div>
          
          <div className="glass-effect p-8 rounded-xl hover:border-primary-500/50 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Bảo Hành</h3>
            <p className="text-dark-400">Chế độ bảo hành đầy đủ, hỗ trợ khách hàng tận tâm</p>
          </div>
        </div>
      </section>
    </UserLayout>
  )
}
