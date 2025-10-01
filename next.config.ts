import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow cross-origin requests from network IP addresses
  allowedDevOrigins: [
    '192.168.1.4',
    '192.168.1.1',
    '192.168.0.1',
    'localhost',
    '127.0.0.1'
  ],
  
  // Turbopack configuration (moved from experimental.turbo)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  
  // Image optimization settings
  images: {
    domains: ['localhost', '192.168.1.4'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Headers for better development experience
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
