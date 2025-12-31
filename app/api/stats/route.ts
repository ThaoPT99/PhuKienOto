import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const [products, orders, users] = await Promise.all([
      prisma.product.count(),
      prisma.order.findMany(),
      prisma.user.count(),
    ])
    
    const totalRevenue = orders
      .filter((o: any) => o.status === 'completed')
      .reduce((sum: number, o: any) => sum + Number(o.total), 0)
    
    const pendingOrders = orders.filter((o: any) => o.status === 'pending').length
    const processingOrders = orders.filter((o: any) => o.status === 'processing').length
    const completedOrders = orders.filter((o: any) => o.status === 'completed').length
    
    const stats = {
      totalRevenue,
      totalOrders: orders.length,
      totalProducts: products,
      totalUsers: users,
      pendingOrders,
      processingOrders,
      completedOrders,
    }
    
    return NextResponse.json({ success: true, data: stats })
  } catch (error: any) {
    console.error('Error fetching stats:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}
