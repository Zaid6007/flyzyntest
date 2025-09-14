/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",        // static HTML output
  images: { unoptimized: true }, // allow static images
};

module.exports = nextConfig;
