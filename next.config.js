/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  assetPrefix: '/',
  images: { unoptimized: true },
  trailingSlash: false
}

module.exports = nextConfig