import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import * as bcrypt from 'bcryptjs'

export async function POST() {
  try {
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

    return NextResponse.json({ 
      success: true, 
      message: 'Seed completed',
      data: { admin, categories: createdCategories }
    })
  } catch (error: any) {
    console.error('Seed error:', error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}

