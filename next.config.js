/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "custom"
  },
  assetPrefix: './',
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/', query: { __nextDefaultLocale: 'en' } },
      '/propose': { page: '/propose', query: { __nextDefaultLocale: 'en' } },
      ...defaultPathMap
    }
  }
}

module.exports = nextConfig
