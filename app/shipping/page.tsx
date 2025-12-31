'use client'

import UserLayout from '@/components/Layout/UserLayout'
import { Truck, Package, Clock, MapPin } from 'lucide-react'

export default function ShippingPage() {
  return (
    <UserLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-6xl md:text-8xl font-display font-black mb-6 gradient-text-neon drop-shadow-2xl">
            VẬN CHUYỂN
          </h1>
          <p className="text-2xl text-white/80 font-medium">
            Chính sách vận chuyển và giao hàng
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="glass-effect p-8 rounded-2xl border-2 border-primary-400/30 hover:border-primary-400 transition-all">
            <Truck className="w-12 h-12 text-primary-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Giao Hàng Nhanh</h3>
            <p className="text-dark-300">
              Giao hàng trong vòng 2-5 ngày làm việc tại các thành phố lớn
            </p>
          </div>

          <div className="glass-effect p-8 rounded-2xl border-2 border-accent-green/30 hover:border-accent-green transition-all">
            <Package className="w-12 h-12 text-accent-green mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Miễn Phí Vận Chuyển</h3>
            <p className="text-dark-300">
              Miễn phí vận chuyển cho đơn hàng từ 500.000₫ trở lên
            </p>
          </div>

          <div className="glass-effect p-8 rounded-2xl border-2 border-accent-orange/30 hover:border-accent-orange transition-all">
            <Clock className="w-12 h-12 text-accent-orange mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Giao Hàng Đúng Hẹn</h3>
            <p className="text-dark-300">
              Cam kết giao hàng đúng thời gian đã hẹn với khách hàng
            </p>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-2xl mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Khu Vực Giao Hàng</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <MapPin className="w-6 h-6 text-primary-400 mb-3 inline-block" />
              <h3 className="text-xl font-bold text-white mb-3">Thành Phố Lớn</h3>
              <ul className="space-y-2 text-dark-300">
                <li>• Hà Nội</li>
                <li>• TP. Hồ Chí Minh</li>
                <li>• Đà Nẵng</li>
                <li>• Hải Phòng</li>
                <li>• Cần Thơ</li>
              </ul>
              <p className="mt-4 text-white font-semibold">Giao hàng: 2-3 ngày</p>
            </div>
            <div>
              <MapPin className="w-6 h-6 text-accent-green mb-3 inline-block" />
              <h3 className="text-xl font-bold text-white mb-3">Tỉnh Thành Khác</h3>
              <ul className="space-y-2 text-dark-300">
                <li>• Các tỉnh/thành phố khác</li>
                <li>• Vùng nông thôn</li>
                <li>• Khu vực miền núi</li>
              </ul>
              <p className="mt-4 text-white font-semibold">Giao hàng: 4-7 ngày</p>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">Phí Vận Chuyển</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-dark-800/50 rounded-lg">
              <span className="text-white font-semibold">Đơn hàng dưới 500.000₫</span>
              <span className="text-primary-400 font-bold">30.000₫</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gradient-primary/20 rounded-lg border-2 border-primary-400/30">
              <span className="text-white font-semibold">Đơn hàng từ 500.000₫ trở lên</span>
              <span className="text-accent-green font-bold">MIỄN PHÍ</span>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}

