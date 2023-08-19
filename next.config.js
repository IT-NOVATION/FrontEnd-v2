/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themoviedb.org',
      },
    ],
  },
};

module.exports = nextConfig;
