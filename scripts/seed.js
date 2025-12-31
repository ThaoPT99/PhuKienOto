// Simple seed script - run with: node scripts/seed.js
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

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

  console.log('✅ Users created')

  // Create categories
  const categories = [
    { name: 'Nội Thất', slug: 'noi-that', description: 'Vô lăng, ghế, bảng điều khiển và phụ kiện nội thất' },
    { name: 'Ngoại Thất', slug: 'ngoai-that', description: 'Body kit, đèn, lốp và phụ kiện ngoại thất' },
    { name: 'Phụ Kiện', slug: 'phu-kien', description: 'Phụ kiện đa dạng cho mọi nhu cầu' },
    { name: 'Hiệu Năng', slug: 'hieu-nang', description: 'Nâng cấp hiệu năng và hiệu suất động cơ' },
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

  // Create products - simplified for now
  console.log('✅ Seed completed! (Products will be created via API)')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

