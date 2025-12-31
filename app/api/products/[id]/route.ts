import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: params.id },
      include: {
        category: true,
      },
    })
    
    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      )
    }
    
    // Parse JSON fields
    const productData = {
      ...product,
      images: product.images ? JSON.parse(product.images) : null,
      features: product.features ? JSON.parse(product.features) : null,
      specifications: product.specifications ? JSON.parse(product.specifications) : null,
    }
    
    return NextResponse.json({ success: true, data: productData })
  } catch (error: any) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    
    const updateData: any = {}
    
    if (body.name) updateData.name = body.name
    if (body.slug) updateData.slug = body.slug
    if (body.description !== undefined) updateData.description = body.description
    if (body.shortDescription !== undefined) updateData.shortDescription = body.shortDescription
    if (body.price) updateData.price = parseFloat(body.price)
    if (body.originalPrice !== undefined) updateData.originalPrice = body.originalPrice ? parseFloat(body.originalPrice) : null
    if (body.sku) updateData.sku = body.sku
    if (body.stock !== undefined) updateData.stock = parseInt(body.stock)
    if (body.image !== undefined) updateData.image = body.image
    if (body.images) updateData.images = JSON.stringify(body.images)
    if (body.categoryId) updateData.categoryId = body.categoryId
    if (body.rating !== undefined) updateData.rating = parseFloat(body.rating)
    if (body.reviews !== undefined) updateData.reviews = parseInt(body.reviews)
    if (body.status) updateData.status = body.status
    if (body.featured !== undefined) updateData.featured = body.featured
    if (body.features) updateData.features = JSON.stringify(body.features)
    if (body.specifications) updateData.specifications = JSON.stringify(body.specifications)
    
    const product = await prisma.product.update({
      where: { id: params.id },
      data: updateData,
      include: {
        category: true,
      },
    })
    
    return NextResponse.json({ success: true, data: product })
  } catch (error: any) {
    console.error('Error updating product:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update product' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.product.delete({
      where: { id: params.id },
    })
    
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error deleting product:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete product' },
      { status: 500 }
    )
  }
}
