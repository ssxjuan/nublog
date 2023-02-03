/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.istockphoto.com', 'images.unsplash.com', 'unsplash-assets.imgix.net'],
  },
}

module.exports = nextConfig
