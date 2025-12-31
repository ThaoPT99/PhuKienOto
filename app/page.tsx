'use client'

import Link from 'next/link'
import { ShoppingCart, Car, Sparkles, Shield, TrendingUp, Zap, Star } from 'lucide-react'
import UserLayout from '@/components/Layout/UserLayout'

export default function Home() {
  return (
    <UserLayout>
      {/* Hero Section với gradient rực rỡ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-primary opacity-30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-secondary opacity-20 blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating particles effect */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-pink/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-green/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-6 animate-bounce-slow">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-green rounded-full text-white text-sm font-bold shadow-lg shadow-neon-pink/50 animate-pulse">
              🚗 ĐỘ XE CHUYÊN NGHIỆP - NÂNG TẦM PHONG CÁCH
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-black mb-6 gradient-text-neon drop-shadow-2xl">
            GNART
            <br />
            <span className="gradient-text">ĐỘ NÁT Ô TÔ</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
            Nâng tầm chiếc xe của bạn với phụ kiện và nội thất{' '}
            <span className="gradient-text-blue font-bold">cao cấp</span>
            <br />
            <span className="text-xl text-white/70">Độ xe chuyên nghiệp - Style đẳng cấp</span>
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <Link 
              href="/products"
              className="group relative px-10 py-5 bg-gradient-primary rounded-xl font-bold text-white text-lg transition-all transform hover:scale-110 shadow-2xl shadow-primary-500/50 glow-effect overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <ShoppingCart className="w-6 h-6" />
                XEM SẢN PHẨM
              </span>
              <div className="absolute inset-0 shimmer"></div>
            </Link>
            
            <Link 
              href="/admin"
              className="px-10 py-5 glass-effect-colored rounded-xl font-bold text-white text-lg transition-all transform hover:scale-110 border-2 border-primary-400/50 hover:border-primary-300"
            >
              <span className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-accent-yellow" />
                QUẢN TRỊ
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section với màu sắc đa dạng */}
      <section className="py-24 container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-black mb-4 gradient-text">
            TẠI SAO CHỌN CHÚNG TÔI?
          </h2>
          <p className="text-xl text-white/70">Những lý do khiến bạn hài lòng</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group glass-effect-colored p-10 rounded-2xl card-hover glow-effect border-2 border-primary-400/30">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-orange rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform shadow-lg shadow-primary-500/50">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white group-hover:gradient-text transition-all">
              Chất Lượng Cao
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Sản phẩm được chọn lọc kỹ càng, đảm bảo chất lượng và độ bền cao. 
              Chỉ bán những gì tốt nhất cho xe của bạn.
            </p>
            <div className="mt-6 flex gap-2">
              <Star className="w-5 h-5 text-accent-yellow fill-accent-yellow" />
              <Star className="w-5 h-5 text-accent-yellow fill-accent-yellow" />
              <Star className="w-5 h-5 text-accent-yellow fill-accent-yellow" />
              <Star className="w-5 h-5 text-accent-yellow fill-accent-yellow" />
              <Star className="w-5 h-5 text-accent-yellow fill-accent-yellow" />
            </div>
          </div>
          
          <div className="group glass-effect p-10 rounded-2xl card-hover border-2 border-secondary-400/30 bg-gradient-to-br from-secondary-500/20 to-accent-purple/20">
            <div className="w-20 h-20 bg-gradient-to-br from-accent-orange via-accent-red to-primary-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform shadow-lg shadow-accent-orange/50">
              <Car className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 gradient-text-blue group-hover:text-white transition-all">
              Độ Xe Chuyên Nghiệp
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Tư vấn và hỗ trợ chuyên nghiệp từ đội ngũ có kinh nghiệm. 
              Biến chiếc xe của bạn thành tác phẩm nghệ thuật.
            </p>
            <div className="mt-6">
              <TrendingUp className="w-8 h-8 text-accent-green" />
            </div>
          </div>
          
          <div className="group glass-effect-colored p-10 rounded-2xl card-hover glow-effect border-2 border-accent-green/30">
            <div className="w-20 h-20 bg-gradient-to-br from-accent-green via-secondary-500 to-accent-cyan rounded-2xl flex items-center justify-center mb-6 transform group-hover:-rotate-12 transition-transform shadow-lg shadow-accent-green/50">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white group-hover:gradient-text transition-all">
              Bảo Hành Đầy Đủ
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Chế độ bảo hành đầy đủ, hỗ trợ khách hàng tận tâm. 
              Yên tâm với mọi sản phẩm bạn mua.
            </p>
            <div className="mt-6 flex items-center gap-2 text-accent-green font-bold">
              <Shield className="w-5 h-5" />
              <span>Bảo hành 12-24 tháng</span>
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  )
}
