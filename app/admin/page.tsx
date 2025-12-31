import AdminLayout from '@/components/Layout/AdminLayout'
import { Package, ShoppingBag, Users, TrendingUp, DollarSign, ArrowUp, ArrowDown } from 'lucide-react'

// Mock data - sẽ thay thế bằng API sau
const stats = [
  {
    title: 'Tổng Doanh Thu',
    value: '125.500.000₫',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-green-400',
  },
  {
    title: 'Đơn Hàng',
    value: '342',
    change: '+8.2%',
    trend: 'up',
    icon: ShoppingBag,
    color: 'text-primary-400',
  },
  {
    title: 'Sản Phẩm',
    value: '128',
    change: '+5',
    trend: 'up',
    icon: Package,
    color: 'text-blue-400',
  },
  {
    title: 'Khách Hàng',
    value: '1.245',
    change: '-2.1%',
    trend: 'down',
    icon: Users,
    color: 'text-purple-400',
  },
]

const recentOrders = [
  { id: '#ORD001', customer: 'Nguyễn Văn A', amount: 12500000, status: 'completed', date: '2024-01-15' },
  { id: '#ORD002', customer: 'Trần Thị B', amount: 8500000, status: 'pending', date: '2024-01-15' },
  { id: '#ORD003', customer: 'Lê Văn C', amount: 3200000, status: 'processing', date: '2024-01-14' },
  { id: '#ORD004', customer: 'Phạm Thị D', amount: 15000000, status: 'completed', date: '2024-01-14' },
  { id: '#ORD005', customer: 'Hoàng Văn E', amount: 5800000, status: 'pending', date: '2024-01-13' },
]

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-4xl font-display font-bold mb-8 gradient-text">
          Dashboard
        </h1>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="glass-effect rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-dark-800 ${stat.color.replace('text-', 'bg-')}/20`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${
                    stat.trend === 'up' ? 'text-green-400' : 'text-accent-red'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUp className="w-4 h-4" />
                    ) : (
                      <ArrowDown className="w-4 h-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-dark-400">{stat.title}</div>
              </div>
            )
          })}
        </div>

        {/* Recent Orders */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Đơn Hàng Gần Đây</h2>
            <a href="/admin/orders" className="text-primary-400 hover:text-primary-300 font-medium">
              Xem tất cả →
            </a>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-700">
                  <th className="text-left py-3 px-4 text-dark-400 font-semibold">Mã Đơn</th>
                  <th className="text-left py-3 px-4 text-dark-400 font-semibold">Khách Hàng</th>
                  <th className="text-left py-3 px-4 text-dark-400 font-semibold">Số Tiền</th>
                  <th className="text-left py-3 px-4 text-dark-400 font-semibold">Trạng Thái</th>
                  <th className="text-left py-3 px-4 text-dark-400 font-semibold">Ngày</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-dark-800 hover:bg-dark-800/50 transition-colors">
                    <td className="py-3 px-4 text-white font-mono">{order.id}</td>
                    <td className="py-3 px-4 text-white">{order.customer}</td>
                    <td className="py-3 px-4 text-primary-400 font-semibold">
                      {order.amount.toLocaleString('vi-VN')}₫
                    </td>
                    <td className="py-3 px-4">
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
                    <td className="py-3 px-4 text-dark-400">{order.date}</td>
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


