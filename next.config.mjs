/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'via.placeholder.com', 'images.pexels.com' , 'server.zaiqabd.com'],
        unoptimized: true, // Required for static export
    },
    webpack: (config) => {
        config.cache = false; // Disable caching
        return config;
    },
    eslint: {
        ignoreDuringBuilds: false, // Ignore ESLint during production builds
    },
};

// ✅ Use CommonJS export (Next.js requires this)
// module.exports = nextConfig;
export default nextConfig;

