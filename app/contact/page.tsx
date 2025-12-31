import UserLayout from '@/components/Layout/UserLayout'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <UserLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-display font-bold mb-12 gradient-text text-center">
          LIÊN HỆ
        </h1>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-effect rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Thông Tin Liên Hệ</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-500/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Địa Chỉ</div>
                    <div className="text-dark-400">123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-500/20 rounded-lg">
                    <Phone className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Điện Thoại</div>
                    <div className="text-dark-400">1900-xxxx | 090-xxx-xxxx</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-500/20 rounded-lg">
                    <Mail className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <div className="text-dark-400">info@gnartdonatoto.com</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-500/20 rounded-lg">
                    <Clock className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Giờ Làm Việc</div>
                    <div className="text-dark-400">Thứ 2 - Chủ Nhật: 8:00 - 20:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Gửi Tin Nhắn</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Họ và Tên</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-primary-500"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-primary-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Điện Thoại</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-primary-500"
                  placeholder="090-xxx-xxxx"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Tin Nhắn</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 resize-none"
                  placeholder="Nhập tin nhắn của bạn..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-lg font-semibold text-white transition-all"
              >
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}


