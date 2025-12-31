import UserLayout from '@/components/Layout/UserLayout'
import { Award, Users, Target, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <UserLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-display font-bold mb-8 gradient-text text-center">
            VỀ CHÚNG TÔI
          </h1>

          <div className="glass-effect rounded-xl p-8 mb-12">
            <p className="text-xl text-dark-300 mb-6 leading-relaxed">
              Chúng tôi là đơn vị chuyên cung cấp phụ kiện và nội thất ô tô cao cấp, 
              phục vụ những người đam mê độ xe và muốn nâng cấp chiếc xe của mình.
            </p>
            <p className="text-lg text-dark-400 leading-relaxed">
              Với nhiều năm kinh nghiệm trong ngành, chúng tôi cam kết mang đến những 
              sản phẩm chất lượng cao, đảm bảo tính thẩm mỹ và hiệu năng. Đội ngũ tư vấn 
              chuyên nghiệp sẵn sàng hỗ trợ bạn tìm ra những giải pháp phù hợp nhất cho 
              chiếc xe của mình.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-effect rounded-xl p-6 text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-primary-400" />
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-dark-400">Năm kinh nghiệm</div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary-400" />
              <div className="text-3xl font-bold text-white mb-2">5000+</div>
              <div className="text-dark-400">Khách hàng</div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center">
              <Target className="w-12 h-12 mx-auto mb-4 text-primary-400" />
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-dark-400">Sản phẩm</div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-primary-400" />
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-dark-400">Hài lòng</div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}


