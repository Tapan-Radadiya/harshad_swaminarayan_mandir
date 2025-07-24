/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'harshad-swaminarayan-mandir.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

module.exports = nextConfig;