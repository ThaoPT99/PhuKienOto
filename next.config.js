/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  // Enable standalone output for Docker
  output: 'standalone',
  // Disable static optimization for faster builds
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig
