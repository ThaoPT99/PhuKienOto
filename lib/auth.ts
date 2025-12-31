import { getServerSession } from 'next-auth/next'
import { NextRequest } from 'next/server'

export async function getSession() {
  return await getServerSession()
}

export async function requireAuth(request?: NextRequest) {
  const session = await getSession()
  
  if (!session) {
    throw new Error('Unauthorized')
  }
  
  return session
}

export async function requireAdmin(request?: NextRequest) {
  const session = await requireAuth(request)
  
  if ((session.user as any)?.role !== 'admin') {
    throw new Error('Forbidden: Admin access required')
  }
  
  return session
}

