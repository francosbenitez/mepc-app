/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ws-public.interpol.int", "rickandmortyapi.com"],
    loader: "custom",
    path: "/",
  },
};

module.exports = nextConfig;
