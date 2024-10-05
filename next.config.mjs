/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Set to true for more strict React checks during development
  images: {
    domains: ['i.pinimg.com', 'yourdomain.com', 'res.cloudinary.com'], // Add your valid domains here
  },
};

export default nextConfig;
