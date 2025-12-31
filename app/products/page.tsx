import UserLayout from '@/components/Layout/UserLayout'
import Link from 'next/link'
import { ShoppingCart, Star } from 'lucide-react'

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

export default function ProductsPage() {
  return (
    <UserLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-display font-bold mb-4 gradient-text">
            SẢN PHẨM
          </h1>
          <p className="text-xl text-dark-300">
            Khám phá bộ sưu tập phụ kiện và nội thất ô tô cao cấp
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <button className="px-6 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg font-semibold text-white transition-colors">
            Tất Cả
          </button>
          <button className="px-6 py-2 glass-effect hover:bg-dark-700 rounded-lg font-semibold text-dark-300 transition-colors">
            Nội Thất
          </button>
          <button className="px-6 py-2 glass-effect hover:bg-dark-700 rounded-lg font-semibold text-dark-300 transition-colors">
            Ngoại Thất
          </button>
          <button className="px-6 py-2 glass-effect hover:bg-dark-700 rounded-lg font-semibold text-dark-300 transition-colors">
            Phụ Kiện
          </button>
          <button className="px-6 py-2 glass-effect hover:bg-dark-700 rounded-lg font-semibold text-dark-300 transition-colors">
            Hiệu Năng
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group glass-effect rounded-xl overflow-hidden hover:border-primary-500/50 transition-all transform hover:-translate-y-2"
            >
              <div className="relative aspect-square bg-dark-800 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center">
                  <span className="text-4xl">🚗</span>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-dark-900/80 rounded-full text-xs font-semibold text-primary-400">
                  {product.category}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 fill-accent-yellow text-accent-yellow" />
                  <span className="text-sm text-dark-400 font-medium">
                    {product.rating}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-400">
                    {product.price.toLocaleString('vi-VN')}₫
                  </span>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      // Add to cart logic
                    }}
                    className="p-2 bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </UserLayout>
  )
}


