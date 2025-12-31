'use client'

import UserLayout from '@/components/Layout/UserLayout'
import { Shield, RefreshCw, HeadphonesIcon, Award } from 'lucide-react'

export default function WarrantyPage() {
  return (
    <UserLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-6xl md:text-8xl font-display font-black mb-6 gradient-text-neon drop-shadow-2xl">
            BẢO HÀNH
          </h1>
          <p className="text-2xl text-white/80 font-medium">
            Chính sách bảo hành và đổi trả sản phẩm
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="glass-effect p-8 rounded-2xl border-2 border-primary-400/30 hover:border-primary-400 transition-all text-center">
            <Shield className="w-12 h-12 text-primary-400 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-white mb-4">Bảo Hành 12 Tháng</h3>
            <p className="text-dark-300">
              Tất cả sản phẩm được bảo hành chính hãng 12 tháng
            </p>
          </div>

          <div className="glass-effect p-8 rounded-2xl border-2 border-accent-green/30 hover:border-accent-green transition-all text-center">
            <RefreshCw className="w-12 h-12 text-accent-green mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-white mb-4">Đổi Trả 7 Ngày</h3>
            <p className="text-dark-300">
              Đổi trả miễn phí trong vòng 7 ngày nếu sản phẩm lỗi
            </p>
          </div>

          <div className="glass-effect p-8 rounded-2xl border-2 border-accent-orange/30 hover:border-accent-orange transition-all text-center">
            <HeadphonesIcon className="w-12 h-12 text-accent-orange mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-white mb-4">Hỗ Trợ 24/7</h3>
            <p className="text-dark-300">
              Đội ngũ hỗ trợ khách hàng sẵn sàng 24/7
            </p>
          </div>

          <div className="glass-effect p-8 rounded-2xl border-2 border-neon-pink/30 hover:border-neon-pink transition-all text-center">
            <Award className="w-12 h-12 text-neon-pink mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-white mb-4">Chính Hãng 100%</h3>
            <p className="text-dark-300">
              Cam kết sản phẩm chính hãng, có đầy đủ giấy tờ
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Điều Kiện Bảo Hành</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">✓</span>
                <span className="text-dark-300">Sản phẩm còn nguyên tem, mác và hộp đựng</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">✓</span>
                <span className="text-dark-300">Có hóa đơn mua hàng hoặc phiếu bảo hành</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">✓</span>
                <span className="text-dark-300">Lỗi do nhà sản xuất, không do người dùng</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">✓</span>
                <span className="text-dark-300">Không bị biến dạng, va đập, nước vào</span>
              </li>
            </ul>
          </div>

          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Quy Trình Bảo Hành</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Liên Hệ Hỗ Trợ</h4>
                  <p className="text-dark-300">Gọi hotline hoặc chat với bộ phận CSKH</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Kiểm Tra Sản Phẩm</h4>
                  <p className="text-dark-300">Nhân viên kiểm tra tình trạng sản phẩm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Xử Lý Bảo Hành</h4>
                  <p className="text-dark-300">Sửa chữa hoặc đổi mới (nếu cần)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Giao Trả Khách Hàng</h4>
                  <p className="text-dark-300">Giao hàng miễn phí về tận nơi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">Chính Sách Đổi Trả</h2>
          <div className="space-y-4">
            <div className="p-4 bg-dark-800/50 rounded-lg">
              <h4 className="text-white font-semibold mb-2">Thời Gian Đổi Trả</h4>
              <p className="text-dark-300">Trong vòng 7 ngày kể từ ngày nhận hàng</p>
            </div>
            <div className="p-4 bg-dark-800/50 rounded-lg">
              <h4 className="text-white font-semibold mb-2">Điều Kiện</h4>
              <p className="text-dark-300">Sản phẩm chưa sử dụng, còn nguyên vẹn, có đầy đủ phụ kiện</p>
            </div>
            <div className="p-4 bg-gradient-primary/20 rounded-lg border-2 border-primary-400/30">
              <h4 className="text-white font-semibold mb-2">Phí Đổi Trả</h4>
              <p className="text-accent-green font-bold">MIỄN PHÍ - Chúng tôi chịu toàn bộ chi phí vận chuyển</p>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}

