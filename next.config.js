/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production deployment configuration for static export
  output: 'export',
  trailingSlash: false,
  assetPrefix: 'https://portfolio.legacyai.space',
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
}

module.exports = nextConfig
