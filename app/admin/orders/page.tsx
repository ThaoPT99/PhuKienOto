import AdminLayout from '@/components/Layout/AdminLayout'
import { Eye, Package, Truck, CheckCircle } from 'lucide-react'
import Link from 'next/link'

// Mock data - sẽ thay thế bằng API sau
const orders = [
  {
    id: '#ORD001',
    customer: 'Nguyễn Văn A',
    email: 'nguyenvana@email.com',
    phone: '0901234567',
    items: 3,
    amount: 12500000,
    status: 'completed',
    date: '2024-01-15 10:30',
    payment: 'Đã thanh toán',
  },
  {
    id: '#ORD002',
    customer: 'Trần Thị B',
    email: 'tranthib@email.com',
    phone: '0907654321',
    items: 2,
    amount: 8500000,
    status: 'pending',
    date: '2024-01-15 09:15',
    payment: 'Chờ thanh toán',
  },
  {
    id: '#ORD003',
    customer: 'Lê Văn C',
    email: 'levanc@email.com',
    phone: '0912345678',
    items: 1,
    amount: 3200000,
    status: 'processing',
    date: '2024-01-14 16:45',
    payment: 'Đã thanh toán',
  },
  {
    id: '#ORD004',
    customer: 'Phạm Thị D',
    email: 'phamthid@email.com',
    phone: '0923456789',
    items: 4,
    amount: 15000000,
    status: 'completed',
    date: '2024-01-14 14:20',
    payment: 'Đã thanh toán',
  },
]

export default function AdminOrdersPage() {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-4xl font-display font-bold mb-8 gradient-text">
          Quản Lý Đơn Hàng
        </h1>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="glass-effect rounded-xl p-6">
            <div className="text-2xl font-bold text-white mb-2">342</div>
            <div className="text-sm text-dark-400">Tổng đơn hàng</div>
          </div>
          <div className="glass-effect rounded-xl p-6">
            <div className="text-2xl font-bold text-yellow-400 mb-2">28</div>
            <div className="text-sm text-dark-400">Chờ xử lý</div>
          </div>
          <div className="glass-effect rounded-xl p-6">
            <div className="text-2xl font-bold text-blue-400 mb-2">45</div>
            <div className="text-sm text-dark-400">Đang xử lý</div>
          </div>
          <div className="glass-effect rounded-xl p-6">
            <div className="text-2xl font-bold text-green-400 mb-2">269</div>
            <div className="text-sm text-dark-400">Hoàn thành</div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="glass-effect rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-dark-800">
                <tr>
                  <th className="text-left py-4 px-6 text-dark-400 font-semibold">Mã Đơn</th>
                  <th className="text-left py-4 px-6 text-dark-400 font-semibold">Khách Hàng</th>
                  <th className="text-left py-4 px-6 text-dark-400 font-semibold">Sản Phẩm</th>
                  <th className="text-left py-4 px-6 text-dark-400 font-semibold">Số Tiền</th>
                  <th className="text-left py-4 px-6 text-dark-400 font-semibold">Thanh Toán</th>
                  <th className="text-left py-4 px-6 text-dark-400 font-semibold">Trạng Thái</th>
                  <th className="text-left py-4 px-6 text-dark-400 font-semibold">Ngày</th>
                  <th className="text-right py-4 px-6 text-dark-400 font-semibold">Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-dark-800 hover:bg-dark-800/50 transition-colors">
                    <td className="py-4 px-6 text-white font-mono font-semibold">{order.id}</td>
                    <td className="py-4 px-6">
                      <div className="text-white font-semibold">{order.customer}</div>
                      <div className="text-sm text-dark-400">{order.phone}</div>
                    </td>
                    <td className="py-4 px-6 text-white">{order.items} sản phẩm</td>
                    <td className="py-4 px-6 text-primary-400 font-semibold">
                      {order.amount.toLocaleString('vi-VN')}₫
                    </td>
                    <td className="py-4 px-6">
                      <span className={`text-sm ${
                        order.payment === 'Đã thanh toán' ? 'text-green-400' : 'text-yellow-400'
                      }`}>
                        {order.payment}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === 'completed'
                          ? 'bg-green-500/20 text-green-400'
                          : order.status === 'processing'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {order.status === 'completed' ? 'Hoàn thành' :
                         order.status === 'processing' ? 'Đang xử lý' : 'Chờ xử lý'}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-dark-400 text-sm">{order.date}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/orders/${order.id}`}
                          className="p-2 hover:bg-dark-700 rounded-lg transition-colors text-primary-400"
                          title="Xem chi tiết"
                        >
                          <Eye className="w-5 h-5" />
                        </Link>
                        {order.status === 'pending' && (
                          <button className="p-2 hover:bg-dark-700 rounded-lg transition-colors text-blue-400" title="Xử lý đơn">
                            <Package className="w-5 h-5" />
                          </button>
                        )}
                        {order.status === 'processing' && (
                          <button className="p-2 hover:bg-dark-700 rounded-lg transition-colors text-green-400" title="Hoàn thành">
                            <CheckCircle className="w-5 h-5" />
                          </button>
                        )}
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


