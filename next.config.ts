// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about',               // When someone visits the root URL
        destination: '/', // <--- NOW REDIRECTS TO /standards
        permanent: false,          // false for temporary redirect (302 status code)
      },
    ];
  },
};
module.exports = nextConfig;