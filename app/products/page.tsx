'use client'

import UserLayout from '@/components/Layout/UserLayout'
import Link from 'next/link'
import { ShoppingCart, Star, Sparkles } from 'lucide-react'

// Mock data - sẽ thay thế bằng API sau
const products = [
  {
    id: 1,
    name: 'Vô Lăng Da Cao Cấp',
    price: 2500000,
    image: '/api/placeholder/400/300',
    rating: 4.8,
    category: 'Nội Thất',
  },
  {
    id: 2,
    name: 'Ghế Đua Carbon',
    price: 8500000,
    image: '/api/placeholder/400/300',
    rating: 4.9,
    category: 'Nội Thất',
  },
  {
    id: 3,
    name: 'Lốp Performance',
    price: 3500000,
    image: '/api/placeholder/400/300',
    rating: 4.7,
    category: 'Ngoại Thất',
  },
  {
    id: 4,
    name: 'Body Kit Carbon',
    price: 15000000,
    image: '/api/placeholder/400/300',
    rating: 5.0,
    category: 'Ngoại Thất',
  },
  {
    id: 5,
    name: 'Đèn LED Xenon',
    price: 1800000,
    image: '/api/placeholder/400/300',
    rating: 4.6,
    category: 'Phụ Kiện',
  },
  {
    id: 6,
    name: 'Ốp Bảng Điều Khiển',
    price: 1200000,
    image: '/api/placeholder/400/300',
    rating: 4.5,
    category: 'Nội Thất',
  },
]

const categoryColors: Record<string, string> = {
  'Nội Thất': 'from-primary-500 to-accent-orange',
  'Ngoại Thất': 'from-secondary-500 to-accent-purple',
  'Phụ Kiện': 'from-accent-green to-accent-cyan',
  'Hiệu Năng': 'from-neon-pink to-neon-blue',
}

// Force dynamic rendering to prevent timeout during build
export const dynamic = 'force-dynamic'

export default function ProductsPage() {
  return (
    <UserLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Header với gradient */}
        <div className="mb-12 text-center">
          <h1 className="text-6xl md:text-8xl font-display font-black mb-6 gradient-text-neon drop-shadow-2xl">
            SẢN PHẨM
          </h1>
          <p className="text-2xl text-white/80 font-medium">
            Khám phá bộ sưu tập phụ kiện và nội thất ô tô cao cấp
          </p>
        </div>

        {/* Filters với màu sắc đa dạng */}
        <div className="mb-12 flex flex-wrap gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-primary rounded-xl font-bold text-white shadow-lg shadow-primary-500/50 hover:scale-105 transition-transform">
            Tất Cả
          </button>
          <button className="px-8 py-4 glass-effect hover:bg-gradient-to-r hover:from-primary-500/20 hover:to-accent-orange/20 rounded-xl font-bold text-white border-2 border-primary-400/30 hover:border-primary-400 transition-all hover:scale-105">
            Nội Thất
          </button>
          <button className="px-8 py-4 glass-effect hover:bg-gradient-to-r hover:from-secondary-500/20 hover:to-accent-purple/20 rounded-xl font-bold text-white border-2 border-secondary-400/30 hover:border-secondary-400 transition-all hover:scale-105">
            Ngoại Thất
          </button>
          <button className="px-8 py-4 glass-effect hover:bg-gradient-to-r hover:from-accent-green/20 hover:to-accent-cyan/20 rounded-xl font-bold text-white border-2 border-accent-green/30 hover:border-accent-green transition-all hover:scale-105">
            Phụ Kiện
          </button>
          <button className="px-8 py-4 glass-effect hover:bg-gradient-to-r hover:from-neon-pink/20 hover:to-neon-blue/20 rounded-xl font-bold text-white border-2 border-neon-pink/30 hover:border-neon-pink transition-all hover:scale-105">
            Hiệu Năng
          </button>
        </div>

        {/* Products Grid với cards màu mè */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => {
            const gradientClass = categoryColors[product.category] || 'from-primary-500 to-accent-orange'
            return (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group relative glass-effect-colored rounded-2xl overflow-hidden card-hover glow-effect border-2 border-white/20"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                
                <div className="relative aspect-square bg-gradient-to-br from-dark-700 to-dark-800 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="text-6xl group-hover:scale-125 transition-transform">🚗</span>
                  </div>
                  <div className={`absolute top-4 right-4 px-4 py-2 bg-gradient-to-r ${gradientClass} rounded-full text-xs font-bold text-white shadow-lg`}>
                    {product.category}
                  </div>
                  {product.rating >= 4.8 && (
                    <div className="absolute top-4 left-4">
                      <Sparkles className="w-6 h-6 text-accent-yellow animate-pulse" />
                    </div>
                  )}
                </div>
                
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 fill-accent-yellow text-accent-yellow" />
                    <span className="text-white font-bold text-lg">
                      {product.rating}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-3xl font-black bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
                      {product.price.toLocaleString('vi-VN')}₫
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        // Add to cart logic
                      }}
                      className="p-3 bg-gradient-primary hover:bg-gradient-secondary rounded-xl transition-all transform hover:scale-110 shadow-lg shadow-primary-500/50 group-hover:shadow-neon-pink/50"
                    >
                      <ShoppingCart className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </Link>
            )
          })}
        </div>
      </div>
    </UserLayout>
  )
}
