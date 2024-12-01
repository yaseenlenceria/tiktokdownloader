/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.tiktokcdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.tiktokcdn-us.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'p16-sign-va.tiktokcdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'p16-sign-sg.tiktokcdn.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;