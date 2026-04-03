/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
        
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@utils/*": ["utils/*"]
    }
  },

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
