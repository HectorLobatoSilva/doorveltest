/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

module.exports = {
    ...nextConfig,
    publicRuntimeConfig: {
        apiBaseUrl: process.env.API_BASE_URL || "http://localhost:3000",
    },
};
