'use client'

import UserLayout from '@/components/Layout/UserLayout'
import { ShoppingCart, Star, Truck, Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// Mock data - sẽ thay thế bằng API sau
const product = {
  id: 1,
  name: 'Vô Lăng Da Cao Cấp',
  price: 2500000,
  originalPrice: 3000000,
  image: '/api/placeholder/800/600',
  rating: 4.8,
  reviews: 128,
  category: 'Nội Thất',
  description: 'Vô lăng da cao cấp với thiết kế thể thao, chất liệu da thật, tay cầm thoải mái và bền bỉ. Phù hợp với nhiều dòng xe và dễ dàng lắp đặt.',
  features: [
    'Chất liệu da thật cao cấp',
    'Thiết kế thể thao, tay cầm thoải mái',
    'Tương thích với nhiều dòng xe',
    'Dễ dàng lắp đặt',
    'Bảo hành 12 tháng',
  ],
  specifications: {
    'Chất liệu': 'Da thật',
    'Màu sắc': 'Đen, Đỏ, Xanh',
    'Kích thước': '38cm',
    'Trọng lượng': '1.2kg',
    'Bảo hành': '12 tháng',
  },
}

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <UserLayout>
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Quay lại danh sách sản phẩm
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="glass-effect rounded-xl overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center">
              <span className="text-9xl">🚗</span>
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-primary-500/20 border border-primary-500/50 rounded-full text-primary-400 text-sm font-semibold">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-4xl font-display font-bold mb-4 gradient-text">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-accent-yellow text-accent-yellow" />
                <span className="text-lg font-semibold text-white">{product.rating}</span>
                <span className="text-dark-400">({product.reviews} đánh giá)</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-primary-400">
                  {product.price.toLocaleString('vi-VN')}₫
                </span>
                <span className="text-2xl text-dark-500 line-through">
                  {product.originalPrice.toLocaleString('vi-VN')}₫
                </span>
                <span className="px-3 py-1 bg-accent-red/20 text-accent-red rounded-lg font-semibold">
                  -17%
                </span>
              </div>
            </div>

            <div className="mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-primary-400 mt-1" />
                <div>
                  <div className="font-semibold text-white">Giao hàng miễn phí</div>
                  <div className="text-sm text-dark-400">Trong vòng 2-5 ngày làm việc</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary-400 mt-1" />
                <div>
                  <div className="font-semibold text-white">Bảo hành chính hãng</div>
                  <div className="text-sm text-dark-400">12 tháng từ nhà sản xuất</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <button className="flex-1 px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-lg font-semibold text-white transition-all transform hover:scale-105 shadow-lg shadow-primary-500/50 flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Thêm Vào Giỏ
              </button>
              <button className="px-6 py-4 glass-effect hover:bg-dark-700 rounded-lg font-semibold text-white transition-colors border-dark-600">
                Mua Ngay
              </button>
            </div>

            {/* Features */}
            <div className="glass-effect p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Đặc điểm nổi bật</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-400 mt-1">✓</span>
                    <span className="text-dark-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Thông số kỹ thuật</h3>
              <dl className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-dark-700">
                    <dt className="text-dark-400">{key}</dt>
                    <dd className="text-white font-semibold">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 glass-effect p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-4">Mô tả sản phẩm</h2>
          <p className="text-dark-300 leading-relaxed">{product.description}</p>
        </div>
      </div>
    </UserLayout>
  )
}


