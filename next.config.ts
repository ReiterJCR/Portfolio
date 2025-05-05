/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', // Enable standalone output for Docker
    images: {
      unoptimized: true, // Disable image optimization for App Runner
    },
  };
  
  module.exports = nextConfig;