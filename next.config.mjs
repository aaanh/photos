/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "photo-dam.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
