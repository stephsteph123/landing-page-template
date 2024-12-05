/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
    formats: ["image/avif", "image/webp"],
    quality: 90,
  },
};

export default nextConfig;
