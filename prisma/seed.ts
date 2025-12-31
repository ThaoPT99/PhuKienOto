import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Hash password
  const hashedPassword = await bcrypt.hash('admin123', 10)
  const userPassword = await bcrypt.hash('user123', 10)

  // Create admin user
  const admin = await prisma.user.upsert({
    where: { email: 'admin@phukienoto.com' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@phukienoto.com',
      password: hashedPassword,
      phone: '0901234567',
      role: 'admin',
    },
  })

  // Create sample user
  const user = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      name: 'Nguyễn Văn A',
      email: 'user@example.com',
      password: userPassword,
      phone: '0912345678',
      role: 'user',
    },
  })

  console.log('✅ Users created')

  // Create categories
  const categories = [
    {
      name: 'Nội Thất',
      slug: 'noi-that',
      description: 'Vô lăng, ghế, bảng điều khiển và phụ kiện nội thất',
    },
    {
      name: 'Ngoại Thất',
      slug: 'ngoai-that',
      description: 'Body kit, đèn, lốp và phụ kiện ngoại thất',
    },
    {
      name: 'Phụ Kiện',
      slug: 'phu-kien',
      description: 'Phụ kiện đa dạng cho mọi nhu cầu',
    },
    {
      name: 'Hiệu Năng',
      slug: 'hieu-nang',
      description: 'Nâng cấp hiệu năng và hiệu suất động cơ',
    },
  ]

  const createdCategories = []
  for (const cat of categories) {
    const category = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    })
    createdCategories.push(category)
  }

  console.log('✅ Categories created')

  // Create products
  const products = [
    // Nội Thất
    {
      name: 'Vô Lăng Da Cao Cấp Thể Thao',
      slug: 'vo-lang-da-cao-cap-the-thao',
      description: 'Vô lăng da cao cấp với thiết kế thể thao, chất liệu da thật, tay cầm thoải mái và bền bỉ. Phù hợp với nhiều dòng xe và dễ dàng lắp đặt.',
      shortDescription: 'Vô lăng da thật thiết kế thể thao',
      price: 2500000,
      originalPrice: 3000000,
      sku: 'VL-001',
      stock: 45,
      categoryId: createdCategories[0].id,
      rating: 4.8,
      reviews: 128,
      status: 'active',
      featured: true,
      features: JSON.stringify([
        'Chất liệu da thật cao cấp',
        'Thiết kế thể thao, tay cầm thoải mái',
        'Tương thích với nhiều dòng xe',
        'Dễ dàng lắp đặt',
        'Bảo hành 12 tháng',
      ]),
      specifications: JSON.stringify({
        'Chất liệu': 'Da thật',
        'Màu sắc': 'Đen, Đỏ, Xanh',
        'Kích thước': '38cm',
        'Trọng lượng': '1.2kg',
        'Bảo hành': '12 tháng',
      }),
    },
    {
      name: 'Ghế Đua Carbon Fiber',
      slug: 'ghe-dua-carbon-fiber',
      description: 'Ghế đua cao cấp làm từ sợi carbon, nhẹ và bền. Thiết kế ergonomic giúp giảm mệt mỏi khi lái xe đường dài.',
      shortDescription: 'Ghế đua carbon nhẹ và bền',
      price: 8500000,
      originalPrice: 10000000,
      sku: 'GH-001',
      stock: 12,
      categoryId: createdCategories[0].id,
      rating: 4.9,
      reviews: 56,
      status: 'active',
      featured: true,
      features: JSON.stringify([
        'Chất liệu carbon fiber cao cấp',
        'Thiết kế ergonomic',
        'Giảm rung động khi lái xe',
        'Bảo hành 24 tháng',
      ]),
      specifications: JSON.stringify({
        'Chất liệu': 'Carbon Fiber',
        'Màu sắc': 'Đen',
        'Trọng lượng': '8.5kg',
        'Bảo hành': '24 tháng',
      }),
    },
    {
      name: 'Ốp Bảng Điều Khiển Carbon',
      slug: 'op-bang-dieu-khien-carbon',
      description: 'Bộ ốp bảng điều khiển làm từ sợi carbon, nâng tầm nội thất xe của bạn.',
      shortDescription: 'Ốp carbon cho bảng điều khiển',
      price: 1200000,
      sku: 'OP-001',
      stock: 78,
      categoryId: createdCategories[0].id,
      rating: 4.5,
      reviews: 89,
      status: 'active',
      features: JSON.stringify([
        'Chất liệu carbon fiber',
        'Dễ dàng lắp đặt',
        'Tăng tính thẩm mỹ',
      ]),
    },
    {
      name: 'Tay Nắm Cửa Da Napa',
      slug: 'tay-nam-cua-da-napa',
      description: 'Tay nắm cửa bọc da Napa cao cấp, tăng cảm giác sang trọng cho nội thất.',
      shortDescription: 'Tay nắm cửa da Napa cao cấp',
      price: 850000,
      sku: 'TN-001',
      stock: 120,
      categoryId: createdCategories[0].id,
      rating: 4.6,
      reviews: 234,
      status: 'active',
    },
    // Ngoại Thất
    {
      name: 'Body Kit Carbon Full Set',
      slug: 'body-kit-carbon-full-set',
      description: 'Bộ body kit đầy đủ làm từ sợi carbon, bao gồm cản trước, cản sau, và hông xe. Nâng tầm ngoại hình xe của bạn.',
      shortDescription: 'Body kit carbon đầy đủ',
      price: 15000000,
      originalPrice: 18000000,
      sku: 'BK-001',
      stock: 8,
      categoryId: createdCategories[1].id,
      rating: 5.0,
      reviews: 34,
      status: 'active',
      featured: true,
      features: JSON.stringify([
        'Chất liệu carbon fiber',
        'Bao gồm cản trước, sau, hông',
        'Giảm trọng lượng xe',
        'Tăng tính thẩm mỹ',
      ]),
    },
    {
      name: 'Lốp Performance Pirelli',
      slug: 'lop-performance-pirelli',
      description: 'Lốp performance cao cấp từ Pirelli, độ bám đường tốt, phù hợp cho cả đường phố và đường đua.',
      shortDescription: 'Lốp performance Pirelli',
      price: 3500000,
      sku: 'LO-001',
      stock: 56,
      categoryId: createdCategories[1].id,
      rating: 4.7,
      reviews: 167,
      status: 'active',
      featured: true,
    },
    {
      name: 'Đèn LED Xenon HID',
      slug: 'den-led-xenon-hid',
      description: 'Bộ đèn LED Xenon HID siêu sáng, tăng tầm nhìn khi lái xe ban đêm.',
      shortDescription: 'Đèn LED Xenon siêu sáng',
      price: 1800000,
      sku: 'DE-001',
      stock: 92,
      categoryId: createdCategories[1].id,
      rating: 4.6,
      reviews: 145,
      status: 'active',
    },
    {
      name: 'Cản Trước Aggressive',
      slug: 'can-truoc-aggressive',
      description: 'Cản trước thiết kế aggressive với lưới tản nhiệt lớn, tăng tính thể thao cho xe.',
      shortDescription: 'Cản trước thiết kế aggressive',
      price: 4500000,
      sku: 'CA-001',
      stock: 23,
      categoryId: createdCategories[1].id,
      rating: 4.8,
      reviews: 78,
      status: 'active',
    },
    // Phụ Kiện
    {
      name: 'Camera Hành Trình 4K',
      slug: 'camera-hanh-trinh-4k',
      description: 'Camera hành trình độ phân giải 4K, ghi hình rõ nét cả ban ngày và ban đêm.',
      shortDescription: 'Camera hành trình 4K',
      price: 2200000,
      sku: 'CM-001',
      stock: 67,
      categoryId: createdCategories[2].id,
      rating: 4.7,
      reviews: 203,
      status: 'active',
    },
    {
      name: 'Màn Hình Android Auto/Apple CarPlay',
      slug: 'man-hinh-android-auto-apple-carplay',
      description: 'Màn hình cảm ứng tích hợp Android Auto và Apple CarPlay, kết nối không dây.',
      shortDescription: 'Màn hình Android Auto/CarPlay',
      price: 5500000,
      sku: 'MH-001',
      stock: 34,
      categoryId: createdCategories[2].id,
      rating: 4.9,
      reviews: 112,
      status: 'active',
      featured: true,
    },
    {
      name: 'Bộ Đồ Chơi Xe Cao Cấp',
      slug: 'bo-do-choi-xe-cao-cap',
      description: 'Bộ đồ chơi xe đầy đủ gồm túi đựng, chổi quét, bộ sửa chữa cơ bản.',
      shortDescription: 'Bộ đồ chơi xe đầy đủ',
      price: 950000,
      sku: 'DC-001',
      stock: 145,
      categoryId: createdCategories[2].id,
      rating: 4.4,
      reviews: 189,
      status: 'active',
    },
    // Hiệu Năng
    {
      name: 'Ống Xả Thể Thao Titanium',
      slug: 'ong-xa-the-thao-titanium',
      description: 'Ống xả thể thao làm từ titanium, nhẹ, bền và cho âm thanh thể thao mạnh mẽ.',
      shortDescription: 'Ống xả titanium thể thao',
      price: 6800000,
      sku: 'OX-001',
      stock: 19,
      categoryId: createdCategories[3].id,
      rating: 4.8,
      reviews: 45,
      status: 'active',
      featured: true,
    },
    {
      name: 'ECU Tuning Chip',
      slug: 'ecu-tuning-chip',
      description: 'Chip tuning ECU giúp tăng công suất động cơ lên 15-20%, tối ưu hóa hiệu năng.',
      shortDescription: 'Chip tuning tăng công suất',
      price: 4200000,
      sku: 'EC-001',
      stock: 28,
      categoryId: createdCategories[3].id,
      rating: 4.9,
      reviews: 67,
      status: 'active',
    },
    {
      name: 'Bộ Lọc Khí Thể Thao K&N',
      slug: 'bo-loc-khi-the-thao-kn',
      description: 'Bộ lọc khí thể thao K&N tăng lưu lượng khí, cải thiện hiệu năng động cơ.',
      shortDescription: 'Lọc khí thể thao K&N',
      price: 1850000,
      sku: 'LK-001',
      stock: 51,
      categoryId: createdCategories[3].id,
      rating: 4.6,
      reviews: 134,
      status: 'active',
    },
  ]

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    })
  }

  console.log('✅ Products created')

  // Create sample orders
  const sampleProducts = await prisma.product.findMany({ take: 3 })
  if (sampleProducts.length >= 2) {
    await prisma.order.create({
      data: {
        orderNumber: 'ORD001',
        userId: user.id,
        customerName: 'Nguyễn Văn A',
        customerEmail: 'user@example.com',
        customerPhone: '0912345678',
        shippingAddress: '123 Đường ABC, Quận XYZ, TP.HCM',
        items: {
          create: [
            {
              productId: sampleProducts[0].id,
              productName: sampleProducts[0].name,
              price: sampleProducts[0].price,
              quantity: 1,
            },
            {
              productId: sampleProducts[1].id,
              productName: sampleProducts[1].name,
              price: sampleProducts[1].price,
              quantity: 2,
            },
          ],
        },
        subtotal: sampleProducts[0].price + sampleProducts[1].price * 2,
        shipping: 50000,
        total: sampleProducts[0].price + sampleProducts[1].price * 2 + 50000,
        status: 'completed',
        paymentStatus: 'paid',
        paymentMethod: 'bank_transfer',
      },
    })

    console.log('✅ Sample orders created')
  }

  console.log('🎉 Seed completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

