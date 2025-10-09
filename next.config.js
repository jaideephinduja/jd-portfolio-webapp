/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: '/offline.html'
  },
  runtimeCaching: [
    {
      urlPattern: /\/recruiter$/, // cache recruiter view page
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'page-recruiter',
        expiration: { maxEntries: 1, maxAgeSeconds: 60 * 60 * 24 * 30 }
      }
    },
    {
      urlPattern: /\/resume\/.+\.pdf$/, // cache resume PDFs
      handler: 'CacheFirst',
      options: {
        cacheName: 'resume-pdf',
        expiration: { maxEntries: 2, maxAgeSeconds: 60 * 60 * 24 * 180 }
      }
    },
    {
      urlPattern: ({ request }) => request.destination === 'image',
      handler: 'StaleWhileRevalidate',
      options: { cacheName: 'images', expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 } }
    }
  ]
});

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    mdxRs: true
  }
};

module.exports = withPWA(nextConfig);


