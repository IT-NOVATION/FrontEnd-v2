/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themoviedb.org',
      },
      {
        protocol: 'http',
        hostname: 'd1yzu8dcirp0jm.cloudfront.net',
      },
      {
        protocol: 'http',
        hostname: 'k.kakaocdn.net',
      },
    ],
  },
};

module.exports = nextConfig;
