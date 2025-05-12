/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static output for S3
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: false, // Prevent trailing slashes
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://joelreiter.com',
  },
};

module.exports = nextConfig;