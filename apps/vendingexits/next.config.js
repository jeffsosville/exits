/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // Shared code in packages/core ships as TypeScript source.
  transpilePackages: ['@exits/core'],
  webpack(config) {
    // packages/core reads this site's config through '@site'.
    config.resolve.alias['@site'] = path.resolve(__dirname, 'site.config.ts');
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  // Routes left over from the cleaningexits fork. They rendered cleaning
  // content on a vending domain, which reads as duplicate/off-topic pages.
  // Permanent redirects pass whatever signal they had to the vending pages.
  async redirects() {
    return [
      { source: '/cleaning-businesses-for-sale', destination: '/listings', permanent: true },
      { source: '/cleaning-businesses-for-sale/:path*', destination: '/listings', permanent: true },
      { source: '/residential-cleaning-for-sale', destination: '/listings', permanent: true },
      { source: '/daily-cleaning', destination: '/', permanent: true },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap.xml',
      },
    ];
  },
};

module.exports = nextConfig;