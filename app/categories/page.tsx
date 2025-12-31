import UserLayout from '@/components/Layout/UserLayout'
import Link from 'next/link'
import { Car, Wrench, Sparkles, Gauge } from 'lucide-react'

const categories = [
  {
    id: 'interior',
    name: 'Nội Thất',
    description: 'Vô lăng, ghế, bảng điều khiển và phụ kiện nội thất',
    icon: Car,
    count: 45,
    color: 'from-primary-500 to-primary-600',
  },
  {
    id: 'exterior',
    name: 'Ngoại Thất',
    description: 'Body kit, đèn, lốp và phụ kiện ngoại thất',
    icon: Sparkles,
    count: 32,
    color: 'from-accent-orange to-accent-red',
  },
  {
    id: 'accessories',
    name: 'Phụ Kiện',
    description: 'Phụ kiện đa dạng cho mọi nhu cầu',
    icon: Wrench,
    count: 28,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'performance',
    name: 'Hiệu Năng',
    description: 'Nâng cấp hiệu năng và hiệu suất động cơ',
    icon: Gauge,
    count: 23,
    color: 'from-purple-500 to-purple-600',
  },
]

export default function CategoriesPage() {
  return (
    <UserLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-display font-bold mb-4 gradient-text">
          DANH MỤC SẢN PHẨM
        </h1>
        <p className="text-xl text-dark-300 mb-12">
          Khám phá các danh mục sản phẩm của chúng tôi
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="group glass-effect rounded-xl p-8 hover:border-primary-500/50 transition-all transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-dark-400 mb-4">{category.description}</p>
                <div className="text-primary-400 font-semibold">
                  {category.count} sản phẩm →
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </UserLayout>
  )
}


