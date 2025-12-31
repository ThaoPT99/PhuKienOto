'use client'

import AdminLayout from '@/components/Layout/AdminLayout'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Upload } from 'lucide-react'
import Link from 'next/link'

export default function NewProductPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    shortDescription: '',
    price: '',
    originalPrice: '',
    sku: '',
    stock: '',
    categoryId: '',
    status: 'active',
    featured: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        router.push('/admin/products')
      } else {
        alert('Lỗi: ' + data.error)
      }
    } catch (error) {
      alert('Có lỗi xảy ra')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AdminLayout>
      <div>
        <Link
          href="/admin/products"
          className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Quay lại
        </Link>

        <h1 className="text-4xl font-display font-bold mb-8 gradient-text">
          Thêm Sản Phẩm Mới
        </h1>

        <form onSubmit={handleSubmit} className="glass-effect rounded-xl p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-semibold mb-2">Tên Sản Phẩm *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">SKU</label>
              <input
                type="text"
                value={formData.sku}
                onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Giá *</label>
              <input
                type="number"
                required
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Giá Gốc</label>
              <input
                type="number"
                value={formData.originalPrice}
                onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Tồn Kho</label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Danh Mục *</label>
              <select
                required
                value={formData.categoryId}
                onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:border-primary-500"
              >
                <option value="">Chọn danh mục</option>
                {/* Categories will be loaded from API */}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Mô Tả Ngắn</label>
            <textarea
              rows={2}
              value={formData.shortDescription}
              onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:border-primary-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Mô Tả Chi Tiết</label>
            <textarea
              rows={6}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:border-primary-500 resize-none"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="w-5 h-5"
              />
              <label htmlFor="featured" className="text-white">Sản phẩm nổi bật</label>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Trạng Thái</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:border-primary-500"
              >
                <option value="active">Đang bán</option>
                <option value="inactive">Ngừng bán</option>
                <option value="out_of_stock">Hết hàng</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-lg font-semibold text-white transition-all disabled:opacity-50"
            >
              {loading ? 'Đang lưu...' : 'Lưu Sản Phẩm'}
            </button>
            <Link
              href="/admin/products"
              className="px-8 py-3 glass-effect hover:bg-dark-700 rounded-lg font-semibold text-white transition-colors"
            >
              Hủy
            </Link>
          </div>
        </form>
      </div>
    </AdminLayout>
  )
}

