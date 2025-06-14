/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
