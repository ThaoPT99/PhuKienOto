'use client'

import AdminLayout from '@/components/Layout/AdminLayout'
import Link from 'next/link'
import { Plus, Edit, Trash2, Search } from 'lucide-react'

// Mock data - sẽ thay thế bằng API sau
const products = [
  {
    id: 1,
    name: 'Vô Lăng Da Cao Cấp',
    price: 2500000,
    stock: 45,
    category: 'Nội Thất',
    status: 'active',
  },
  {
    id: 2,
    name: 'Ghế Đua Carbon',
    price: 8500000,
    stock: 12,
    category: 'Nội Thất',
    status: 'active',
  },
  {
    id: 3,
    name: 'Lốp Performance',
    price: 3500000,
    stock: 0,
    category: 'Ngoại Thất',
    status: 'out_of_stock',
  },
  {
    id: 4,
    name: 'Body Kit Carbon',
    price: 15000000,
    stock: 8,
    category: 'Ngoại Thất',
    status: 'active',
  },
]

export default function AdminProductsPage() {
  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-display font-bold gradient-text">
            Quản Lý Sản Phẩm
          </h1>
          <Link
            href="/admin/products/new"
            className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-lg font-semibold text-white transition-all flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Thêm Sản Phẩm
          </Link>
        </div>

        {/* Search and Filters */}
        <div className="glass-effect rounded-xl p-4 mb-6 flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full pl-12 pr-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-primary-500"
            />
          </div>
          <select className="px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:border-primary-500">
            <option value="">Tất cả danh mục</option>
            <option value="interior">Nội Thất</option>
            <option value="exterior">Ngoại Thất</option>
            <option value="accessories">Phụ Kiện</option>
            <option value="performance">Hiệu Năng</option>
          </select>
          <select className="px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:border-primary-500">
            <option value="">Tất cả trạng thái</option>
            <option value="active">Đang bán</option>
            <option value="out_of_stock">Hết hàng</option>
            <option value="inactive">Ngừng bán</option>
          </select>
        </div>

        {/* Products Table */}
        <div className="glass-effect rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-dark-800">
                <tr>
                  <th className="text-left py-4 px-6 text-dark-400 font-semibold">ID</th>
                  <th className="text-left py-4 px-6 text-dark-400 font-semibold">Tên Sản Phẩm</th>
                  <th className="text-left py-4 px-6 text-dark-400 font-semibold">Danh Mục</th>
                  <th className="text-left py-4 px-6 text-dark-400 font-semibold">Giá</th>
                  <th className="text-left py-4 px-6 text-dark-400 font-semibold">Tồn Kho</th>
                  <th className="text-left py-4 px-6 text-dark-400 font-semibold">Trạng Thái</th>
                  <th className="text-right py-4 px-6 text-dark-400 font-semibold">Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-dark-800 hover:bg-dark-800/50 transition-colors">
                    <td className="py-4 px-6 text-white font-mono">#{product.id}</td>
                    <td className="py-4 px-6 text-white font-semibold">{product.name}</td>
                    <td className="py-4 px-6 text-dark-400">{product.category}</td>
                    <td className="py-4 px-6 text-primary-400 font-semibold">
                      {product.price.toLocaleString('vi-VN')}₫
                    </td>
                    <td className="py-4 px-6">
                      <span className={`font-semibold ${
                        product.stock > 0 ? 'text-white' : 'text-accent-red'
                      }`}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.status === 'active'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-accent-red'
                      }`}>
                        {product.status === 'active' ? 'Đang bán' : 'Hết hàng'}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/products/${product.id}/edit`}
                          className="p-2 hover:bg-dark-700 rounded-lg transition-colors text-primary-400"
                        >
                          <Edit className="w-5 h-5" />
                        </Link>
                        <button className="p-2 hover:bg-dark-700 rounded-lg transition-colors text-accent-red">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}


