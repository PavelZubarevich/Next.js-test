/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['imgproxy.by.dev.family'],
  },
}

module.exports = nextConfig
