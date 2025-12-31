/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
      // Removed Prisma externals for proper TypeScript resolution
  // Enable standalone output for Docker
  output: 'standalone',
}

module.exports = nextConfig
