/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
