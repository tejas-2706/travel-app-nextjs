// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...other config options
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com'
      }
    ]
  }
};

module.exports = nextConfig;
