/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "custom"
  },
  trailingSlash: true,
  assetPrefix: './',
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
}

module.exports = nextConfig
