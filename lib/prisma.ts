// Dynamic import to handle Prisma Client generation
let PrismaClient: any

try {
  // Try to import from the generated location
  const prismaModule = require('@prisma/client')
  PrismaClient = prismaModule.PrismaClient || prismaModule.default?.PrismaClient
} catch (error) {
  console.error('Failed to import PrismaClient:', error)
  // Fallback: try to require directly
  try {
    PrismaClient = require('@prisma/client').PrismaClient
  } catch (e) {
    throw new Error('Prisma Client not found. Please run: npx prisma generate')
  }
}

const globalForPrisma = globalThis as unknown as {
  prisma: any | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
