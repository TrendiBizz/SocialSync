/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack: (config) => {
    config.resolve.alias['@'] = require('path').resolve(__dirname, 'src');
    return config;
  }
};

module.exports = nextConfig;
