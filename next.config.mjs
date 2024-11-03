/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 在构建时忽略ESLint错误
  },
  env: {
    // 如果有环境变量，在这里定义
  },
  images: {
    domains: [],
  }
};

export default nextConfig;
