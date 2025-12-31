import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category')
    const status = searchParams.get('status')
    const search = searchParams.get('search')
    const featured = searchParams.get('featured')
    
    const where: any = {}
    
    if (category) {
      where.category = { slug: category }
    }
    
    if (status) {
      where.status = status
    }
    
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ]
    }
    
    if (featured === 'true') {
      where.featured = true
    }
    
    const products = await prisma.product.findMany({
      where,
      include: {
        category: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    
    return NextResponse.json({ success: true, data: products })
  } catch (error: any) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.price || !body.categoryId) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Generate slug from name
    const slug = body.slug || body.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
    
    const product = await prisma.product.create({
      data: {
        name: body.name,
        slug: slug,
        description: body.description || '',
        shortDescription: body.shortDescription,
        price: parseFloat(body.price),
        originalPrice: body.originalPrice ? parseFloat(body.originalPrice) : null,
        sku: body.sku,
        stock: parseInt(body.stock) || 0,
        image: body.image,
        images: body.images ? JSON.stringify(body.images) : null,
        categoryId: body.categoryId,
        rating: parseFloat(body.rating) || 0,
        reviews: parseInt(body.reviews) || 0,
        status: body.status || 'active',
        featured: body.featured || false,
        features: body.features ? JSON.stringify(body.features) : null,
        specifications: body.specifications ? JSON.stringify(body.specifications) : null,
      },
      include: {
        category: true,
      },
    })
    
    return NextResponse.json({ success: true, data: product }, { status: 201 })
  } catch (error: any) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create product' },
      { status: 500 }
    )
  }
}
