/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: false,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  swcMinify: true,
};

module.exports = nextConfig;
