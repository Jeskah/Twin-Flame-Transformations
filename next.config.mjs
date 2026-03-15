/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Allow images from all domains
      },
    ],
  },
};

export default nextConfig;
