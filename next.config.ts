import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: '.+\\.vercel\\.app' }],
        destination: 'https://www.ålesundbrannkonsult.no/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
