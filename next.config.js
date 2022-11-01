/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["omordeveloper.infura-ipfs.io", "infura-ipfs.io"],
  },
};

module.exports = nextConfig;
