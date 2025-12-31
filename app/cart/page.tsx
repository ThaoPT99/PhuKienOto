'use client'

import UserLayout from '@/components/Layout/UserLayout'
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Mock cart data - sẽ thay thế bằng state management sau
const cartItems = [
  {
    id: 1,
    name: 'Vô Lăng Da Cao Cấp',
    price: 2500000,
    quantity: 1,
    image: '/api/placeholder/200/200',
  },
  {
    id: 2,
    name: 'Ghế Đua Carbon',
    price: 8500000,
    quantity: 2,
    image: '/api/placeholder/200/200',
  },
]

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 50000
  const total = subtotal + shipping

  return (
    <UserLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-display font-bold mb-12 gradient-text">
          GIỎ HÀNG
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="w-24 h-24 mx-auto mb-6 text-dark-600" />
            <h2 className="text-2xl font-bold text-white mb-4">Giỏ hàng trống</h2>
            <p className="text-dark-400 mb-8">Hãy thêm sản phẩm vào giỏ hàng của bạn</p>
            <Link
              href="/products"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-lg font-semibold text-white transition-all"
            >
              Tiếp Tục Mua Sắm
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="glass-effect rounded-xl p-6 flex gap-6"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-dark-700 to-dark-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl">🚗</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-2xl font-bold text-primary-400 mb-4">
                      {item.price.toLocaleString('vi-VN')}₫
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3 glass-effect rounded-lg p-2">
                        <button className="p-1 hover:bg-dark-700 rounded transition-colors">
                          <Minus className="w-5 h-5 text-dark-300" />
                        </button>
                        <span className="w-12 text-center font-semibold text-white">
                          {item.quantity}
                        </span>
                        <button className="p-1 hover:bg-dark-700 rounded transition-colors">
                          <Plus className="w-5 h-5 text-dark-300" />
                        </button>
                      </div>
                      
                      <button className="p-2 hover:bg-dark-700 rounded-lg transition-colors text-dark-400 hover:text-accent-red">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">
                      {(item.price * item.quantity).toLocaleString('vi-VN')}₫
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass-effect rounded-xl p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-white mb-6">Tóm Tắt Đơn Hàng</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-dark-300">
                    <span>Tạm tính</span>
                    <span>{subtotal.toLocaleString('vi-VN')}₫</span>
                  </div>
                  <div className="flex justify-between text-dark-300">
                    <span>Phí vận chuyển</span>
                    <span>{shipping.toLocaleString('vi-VN')}₫</span>
                  </div>
                  <div className="border-t border-dark-700 pt-4 flex justify-between text-xl font-bold text-white">
                    <span>Tổng cộng</span>
                    <span className="text-primary-400">{total.toLocaleString('vi-VN')}₫</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2"
                >
                  Thanh Toán
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </UserLayout>
  )
}


