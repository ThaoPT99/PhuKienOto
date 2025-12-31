import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const status = searchParams.get('status')
    const paymentStatus = searchParams.get('paymentStatus')
    
    const where: any = {}
    
    if (status) {
      where.status = status
    }
    
    if (paymentStatus) {
      where.paymentStatus = paymentStatus
    }
    
    const orders = await prisma.order.findMany({
      where,
      include: {
        items: {
          include: {
            product: true,
          },
        },
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    
    return NextResponse.json({ success: true, data: orders })
  } catch (error: any) {
    console.error('Error fetching orders:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Generate order number
    const orderCount = await prisma.order.count()
    const orderNumber = `ORD${String(orderCount + 1).padStart(6, '0')}`
    
    const order = await prisma.order.create({
      data: {
        orderNumber,
        userId: body.userId || null,
        customerName: body.customerName,
        customerEmail: body.customerEmail,
        customerPhone: body.customerPhone,
        shippingAddress: body.shippingAddress,
        subtotal: parseFloat(body.subtotal),
        shipping: parseFloat(body.shipping) || 50000,
        total: parseFloat(body.total),
        status: 'pending',
        paymentStatus: 'pending',
        paymentMethod: body.paymentMethod || 'cod',
        notes: body.notes,
        items: {
          create: body.items.map((item: any) => ({
            productId: item.productId,
            productName: item.productName,
            productImage: item.productImage,
            price: parseFloat(item.price),
            quantity: parseInt(item.quantity),
          })),
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    })
    
    return NextResponse.json({ success: true, data: order }, { status: 201 })
  } catch (error: any) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create order' },
      { status: 500 }
    )
  }
}
